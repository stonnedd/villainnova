import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, PopoverController } from "ionic-angular";
import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator";
import { AutoserviceService} from "../../service/autoservice-service";
import { ShowToaster } from "../../utils/toaster";
import { AttachedImagesPage } from "../../pages/attached-images/attached-images";
import { ViewController } from "ionic-angular/navigation/view-controller";
import { Constants } from "../../utils/constants"
@IonicPage()
@Component({
  selector: "page-request-detail",
  templateUrl: "request-detail.html",
  providers: [AutoserviceService, ShowToaster],
})
export class RequestDetailPage {
  requestData;
  spinner: boolean = false;
  params: any= {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator,
    public autSvc: AutoserviceService,
    public shwToaster: ShowToaster,
    public popCtrl: PopoverController,
    public viewCtrl: ViewController) {
      this.params.data = {"icon": Constants.SPINNER};
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RequestDetailPage");
  }

  ngOnInit() {
    this.requestData = this.navParams.data;
    console.log(this.requestData);

  }

  navigate(destiny: any= []) {
    if(destiny.lat !== "" && destiny.lat !== null && destiny.lat !== undefined){
      this.spinner = true;
      this.autSvc.getPosition().then(
        pos => {
          console.log(pos.coords.latitude);
          console.log(pos.coords.longitude);
          this.spinner = false;
          this.viewCtrl.dismiss();
          this.startNavigate(pos.coords, destiny);
        }, err => {
          this.shwToaster.reveal(err, "bottom", 2000);
          this.spinner = false;
      });     
    } else{
      this.shwToaster.reveal(
        "Esta solicitud no cuenta con ubicación...",
        "middle",
        2000
      );
    }
  }

  startNavigate(coords, destiny) {
    let options: LaunchNavigatorOptions = {
      start: [coords.latitude, coords.longitude],
    };
    this.launchNavigator.navigate(destiny, options).then(
      success => alert ("iniciando navegador"),
      error => alert("Error:" + error),
    );
  }
  
  showImages(images) {
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
  closeView() {
    this.viewCtrl.dismiss();
  }
  
  
}
