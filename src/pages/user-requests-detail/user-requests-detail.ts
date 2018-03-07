import { StatusMapping} from "../../utils/status-mapping";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { SupplierMapping } from "../../utils/supplier-mapping";
import { ItemSliding, PopoverController} from "ionic-angular";
import { ShowToaster } from "../../utils/toaster";
import { Constants} from "../../utils/constants";
import { RequestDetailPage } from "../request-detail/request-detail";
import { ApiService } from "../../service/api-service";
import { SupplierDetailPage} from "../supplier-detail/supplier-detail";
import { ProposalDetailPage} from "../proposal-detail/proposal-detail";
import { UserRequestsPage} from "../user-requests/user-requests"; 

@IonicPage()
@Component({
  selector: 'page-user-requests-detail',
  templateUrl: 'user-requests-detail.html',
})


export class UserRequestsDetailPage {
  data: any = {
    title: "",
    requests: {},
  }
  userRequests: any;
  spinner: boolean = false;
  params: any = {};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public stsMap: StatusMapping,
    public splMapp: SupplierMapping,
    public popCtrl: PopoverController,
    public shwToaster: ShowToaster,
    public apiSvc: ApiService,
    public nav: Nav,
    
    
  ) {this.params.data = {"icon": Constants.SPINNER};  }

  ionViewWillEnter(){
    this.data = this.navParams.data
    console.log(this.data.title);
    this.userRequests = this.data.requests;
    console.log("USER REQUEST:", this.userRequests);
  }

  ionViewDidLoad() {
  }

  getDataSts(sts, data) {
    let value: any = this.stsMap.getData(sts);
    if ( data === "color") {
      return value.color;
    }else {
      return value.char;
    }
  }
  getIconService( service: string ) {
    return "assets/servicons/" + this.splMapp.getIcon(service);
  }
  
  delete(slidingItem: ItemSliding, requestId: number, status: number) {
    slidingItem.close();
    this.putAsDeleted(requestId, status);
  }
  putAsDeleted(requestId, status) {
    if (status !== 1) {
      this.spinner = true;
      let request = {status: 3, p_status : 3};
      this.apiSvc.putService(Constants.UPDATE_REQUEST + requestId, JSON.stringify({request})).subscribe(
        data => {
          console.log(data);
          this.spinner = false;
          this.nav.setRoot(UserRequestsPage);
        },
        err => {
          this.shwToaster.reveal( err , "bottom", 2000);
          this.spinner = false;
        });
    } else {
      this.shwToaster.reveal( "Debes calificar el servicio" , "middle", 2500);
    }
  }

  showDetail(requestData) {
    console.log("touch!!!");
    let popover = this.popCtrl.create(RequestDetailPage, requestData);
    popover.present({
      ev: "",
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

  shwAlert() {
    this.shwToaster.reveal("Aún no te responden esta solicitud", "middle", 2200);
  }

  shwProviderProposal(proposal: any= {}, providerId, requestId) {
    proposal.provider_id = providerId;
    proposal.request_id =  requestId;
    let popover = this.popCtrl.create(ProposalDetailPage, proposal);
        popover.present({
          ev: "onMarker",
        });
  }

}
