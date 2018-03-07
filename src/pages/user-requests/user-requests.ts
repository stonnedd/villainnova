import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, LoadingController, Events, IonicPage} from "ionic-angular";
import { ApiService } from "../../service/api-service";
import { Constants} from "../../utils/constants";
import { ShowToaster } from "../../utils/toaster";
import { RequestDetailPage } from "../../pages/request-detail/request-detail";
import { stringify } from "@angular/core/src/util";
import { SupplierMapping } from "../../utils/supplier-mapping";
import { count } from "rxjs/operator/count";
import { Settings } from "../../providers/settings/settings";
import { UserRequestsDetailPage} from  "../user-requests-detail/user-requests-detail";

@IonicPage()
@Component({
  selector: "page-user-requests",
  templateUrl: "user-requests.html",
})
export class UserRequestsPage {

  user: any= {};
  stsColor= "km";
  userRequests: any = [];
  userGRequests: any = [];
  userGroupedRequests: any = [];
  params: any = {};
  spinner: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiSvc: ApiService,
    public ldingCtrl: LoadingController,
    public shwToaster: ShowToaster,
    public splMapp: SupplierMapping,
    public events: Events,
    public settings: Settings,

  ) { this.params.data = {"icon": Constants.SPINNER}; }

  ionViewDidLoad() {
    this.spinner = true;
    this.settings.settingsObservable.subscribe(
      data => {
        this.user = data;
        if (this.user !== undefined && this.user !== null && this.user !== {}) {
          this.apiSvc.getService(Constants.GET_REQUEST + this.user.id + "/CMS/request" ).subscribe(
            userData => {
              console.log("jjjjjj:::",userData);
              if(userData.requests.length === 0){
                this.shwToaster.reveal("No tienes solicitudes...", "bottom", 3000);
                this.spinner = false;
              }
              this.userGroupedRequests = this.groupRequests(userData.requests);
              this.userRequests = userData.requests;
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
      }, err => {
        this.shwToaster.reveal("Volver a iniciar sesión", "bottom", 3000);
        this.spinner = false;
    });
  }

  showRequests(requests){
    this.navCtrl.push(UserRequestsDetailPage, requests);
  }

  emitRequestNotify(requests){
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

  getIconService( service: string ) {
    return "assets/servicons/" + this.splMapp.getIcon(service);
  }

}
