import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, LoadingController, Events} from "ionic-angular";
import { ApiService } from "../../service/api-service";
import { Constants} from "../../utils/constants";
import { ShowToaster } from "../../utils/toaster";
import { ItemSliding, PopoverController} from "ionic-angular";
import { RequestDetailPage } from "../../pages/request-detail/request-detail";
import { StatusMapping} from "../../utils/status-mapping";
import { stringify } from "@angular/core/src/util";
import { SupplierMapping } from "../../utils/supplier-mapping";
import { SupplierDetailPage} from "../supplier-detail/supplier-detail";
import { ProposalDetailPage} from "../proposal-detail/proposal-detail";
import { count } from "rxjs/operator/count";
 @Component({
  selector: "page-user-requests",
  templateUrl: "user-requests.html",
  providers: [ShowToaster, ApiService, StatusMapping, SupplierMapping],
})
export class UserRequestsPage {

  user: any= {};
  stsColor= "km";
  userRequests: any = [];
  userGRequests: any = [];
  params: any = {};
  spinner: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiSvc: ApiService,
    public showToaster: ShowToaster,
    public popCtrl: PopoverController,
    public stsMap: StatusMapping,
    public ldingCtrl: LoadingController,
    public shwToaster: ShowToaster,
    public splMapp: SupplierMapping,
    public events: Events,
    
    

  ) { this.params.data = {"icon": Constants.SPINNER}; }

  ionViewDidLoad() {
    this.user = this.navParams.data;
    if (this.user !== undefined && this.user !== null && this.user !== {}) {
      this.apiSvc.getService(Constants.GET_REQUEST + this.user.id + "/CMS/request" ).subscribe(
        userData => {
          // console.log("Lo que le paso :::", userData);
           //this.userRequests = this.groupRequests(userData.requests);
          this.userRequests = userData.requests;
          this.emitRequestNotify(userData.requests),
          this.spinner = false;
        }, error => {
          this.shwToaster.reveal("Cargando...", "bottom", 1000);
          this.ionViewDidLoad();
          this.spinner = false;
          },
      );
    }else {
      this.shwToaster.reveal("cargando...", "bottom", 1000);
      this.ionViewDidLoad();
    }
  }

  emitRequestNotify(requests){
    console.log("Requestsssss:::",requests);
    let count = 0;
    requests.forEach(element => {
      if (element.status ==1){
        count++
      }
    });
    this.events.publish("proposalNotify", count);
  }

  groupRequests(uRequests) {
    let currentGroup: any;
    let currentService: string = "";
    uRequests.forEach((element, index) => {
      if (element.service !== currentService) {
        if (currentService !== "") {this.userGRequests.push(currentGroup); }
        currentService = element.service;
        let newGroup = {
          title: currentService,
          requests : [],
        };
        currentGroup = newGroup;
      }
      currentGroup.requests.push(element);
      if ( uRequests.length === index + 1) {
        this.userGRequests.push(currentGroup);
      }
    });
    console.log("AGRUPADO:", this.userGRequests);
    return this.userGRequests;
  }

  delete(slidingItem: ItemSliding, requestId: number, status: number) {
    slidingItem.close();
    this.putAsDeleted(requestId, status);
  }

  showDetail(requestData, event) {
    let popover = this.popCtrl.create(RequestDetailPage, requestData);
    popover.present({
      ev: "non",
    });
  }

  showProvider( providerId) {
    this.spinner = true;
    this.apiSvc.getService(Constants.GET_PROVIDER + providerId).subscribe(
      pvdrData => {
        console.log(pvdrData);
        this.spinner = false;
        let popover = this.popCtrl.create(SupplierDetailPage, pvdrData.data);
        popover.present({
          ev: "onMarker",
        });
      },
      err => {
        this.shwToaster.reveal("Error de conexión" + err, "bottom", 2000);
        this.spinner = false;
      },
    );
  }

  getDataSts(sts, data) {
    let value: any = this.stsMap.getData(sts);
    if ( data === "color") {
      return value.color;
    }else {
      return value.char;
    }
  }

  putAsDeleted(requestId, status) {
    if (status !== 1) {
      this.spinner = true;
      let request = {status: 3};
      this.apiSvc.putService(Constants.UPDATE_REQUEST + requestId, JSON.stringify({request})).subscribe(
        data => {
          console.log(data);
          this.spinner = false;
          this.ionViewDidLoad();
        },
        err => {
          this.showToaster.reveal( err , "bottom", 2000);
          this.spinner = false;
        });
    } else {
      this.showToaster.reveal( "Debes calificar el servicio" , "middle", 2500);
    }
  }

  shwAlert() {
    this.shwToaster.reveal("Aun no te responden esta solicitud", "middle", 2200);
  }

  shwProviderProposal(proposal: any= {}, providerId, requestId) {
    proposal.provider_id = providerId;
    proposal.request_id =  requestId;
    let popover = this.popCtrl.create(ProposalDetailPage, proposal);
        popover.present({
          ev: "onMarker",
        });
  }

  getIconService( service: string ) {
    return "../../assets/servicons/" + this.splMapp.getIcon(service);
  }

}
