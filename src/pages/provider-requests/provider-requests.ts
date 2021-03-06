import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, PopoverController} from "ionic-angular";
import { ShowToaster } from "../../utils/toaster";
import { AttachedImagesPage } from "../attached-images/attached-images";
import { ApiService} from "../../service/api-service";
import { Console } from "@angular/core/src/console";
import { Constants } from "../../utils/constants";
import { CustomerUserDetailPage } from "../customer-user-detail/customer-user-detail";
import { AutoserviceService} from "../../service/autoservice-service";
import { ProviderProposalPage} from "../provider-proposal/provider-proposal";

@IonicPage()
@Component({
  selector: "page-provider-requests",
  templateUrl: "provider-requests.html",
  providers: [AutoserviceService],
})
export class ProviderRequestsPage {
  serviceRequest: any = {};
  spinner: boolean = false;
  params: any= {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public shwToaster: ShowToaster,
    public popCtrl: PopoverController,
    public apiSvc: ApiService,
    public autoSvc: AutoserviceService,
    private lchNav: LaunchNavigator,
  ) {this.params.data = {"icon": Constants.SPINNER};}

  ionViewDidLoad() {
    this.serviceRequest = this.navParams.data;
    console.log(this.serviceRequest);
  }

  close() {
    console.log("En close");
    this.viewCtrl.dismiss();
  }
  navigate(destination) {

    if(destination[0]!==null && destination[0]!==null && destination[0]!==""){
      this.spinner=true;
      this.autoSvc.getPosition().then(pos => {
        let options: LaunchNavigatorOptions = {
          start: [pos.coords.latitude, pos.coords.longitude],
        };
        this.spinner=false;
        this.lchNav.navigate(destination, options).then(
          success => {
            this.spinner=false;
          },
          error =>{
            this.spinner=false;
            this.shwToaster.reveal(
              "No fue posible iniciar el navegador...",
              "middle",
              2000
            );
          });
      });
    }else{
      this.shwToaster.reveal(
        "Esta solicitud no cuenta con ubicación...",
        "middle",
        2000
      );
    }
  }
  
  showImages(images) {
    console.log ("attachment::", images);
    let imagesUrl = this.verifyImages(images);
    if (imagesUrl.length !== 0) {
      let popover = this.popCtrl.create(AttachedImagesPage, imagesUrl);
      popover.present({
        ev: "non",
      });
    }else {
      this.shwToaster.reveal("Esta solicitud no cuenta con imágenes", "middle", 2000);
    }
  }

  verifyImages(images) {
    let count = 0;
    let attImages: any = [];
    images.forEach(element => {
      if (element !== null && element !== "nil" && element !== "") {
        attImages[count] = element;
        count++;
      }
    });
    return attImages;
  }

  showCustomerProfile(customerId) {
    console.log ("Customer ID::", customerId);
    this.apiSvc.getService(Constants.PROVIDER_CUSTOMER + customerId).subscribe(
      customerData => {
        console.log(customerData);
        this.showCustomerData(customerData);
      }, err => { this.shwToaster.reveal("Se ha prodiucido un error:" + err, "bottom", 2000); },
    );
  }

  showCustomerData(customerData) {
    let popView = this.popCtrl.create(CustomerUserDetailPage, customerData);
    popView.present({ev: "none"});
  }

  reply(request) {
    console.log("INFO REQUEST", request);
    if (request.p_status !== 1) {
      let popView = this.popCtrl.create(ProviderProposalPage, request);
      popView.present({ev: "none"});
    } else {
      this.shwToaster.reveal("Ya respondiste esta solicitud", "middle", 2000);
    }
  }


}



