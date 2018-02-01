import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { ApiService } from "../../service/api-service";
import { Constants} from "../../utils/constants";
import { ShowToaster } from "../../utils/toaster";
import { ItemSliding, PopoverController} from "ionic-angular";
import { RequestDetailPage } from "../../pages/request-detail/request-detail";
import { StatusMapping} from "../../utils/status-mapping";
import { stringify } from "@angular/core/src/util";
import { SupplierMapping } from "../../utils/supplier-mapping";
 @Component({
  selector: "page-user-requests",
  templateUrl: "user-requests.html",
  providers: [ShowToaster, ApiService, StatusMapping, SupplierMapping],
})
export class UserRequestsPage {

  user: any= {};
  stsColor= "km";
  userRequests: any = [];
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
  ) { this.params.data = {"icon": Constants.SPINNER}; }

  ionViewDidLoad() {
    this.user = this.navParams.data;
    if (this.user !== undefined && this.user !== null && this.user !== {}) {
      this.apiSvc.getService(Constants.GET_REQUEST + this.user.id + "/CMS/request" ).subscribe(
        userData => {
          console.log ("lo que viene", this.user);
          console.log("Lo que le paso :::", userData);
          // console.log("Lo que le paso :::", userData.user[0].requests);
          this.userRequests = userData.requests;
          this.spinner = false;
        }, error => {
          this.shwToaster.reveal("cargando...", "bottom", 300);
          this.ionViewDidLoad();
          this.spinner = false;
          },
      );
    }else {
      this.shwToaster.reveal("cargando...", "bottom", 1000);
      this.ionViewDidLoad();
    }
  }

  delete(slidingItem: ItemSliding, requestId: number) {
    slidingItem.close();
    this.putAsDeleted(requestId);
  }

  showDetail(requestData, event) {
    let popover = this.popCtrl.create(RequestDetailPage, requestData);
    popover.present({
      ev: "non",
    });
  }

  getDataSts(sts, data) {
    let value: any = this.stsMap.getData(sts);
    if ( data === "color") {
      return value.color;
    }else {
      return value.char;
    }
  }

  putAsDeleted(requestId) {
    this.spinner = true;
    let request = {status: 2};
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
  }

  getIconService( service: string ) {
    return "../../assets/servicons/" + this.splMapp.getIcon(service);
  }

}
