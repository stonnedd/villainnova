import { Component } from "@angular/core";
import { App, AlertController, IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { Constants } from "../../utils/constants";
import { ApiService} from "../../service/api-service";
import { ShowToaster } from "../../utils/toaster";
import { ProfilePage} from "../profile/profile";
import { MainPage } from "../pages";
@IonicPage()
@Component({
  selector: "page-proposal-detail",
  templateUrl: "proposal-detail.html",
})
export class ProposalDetailPage {
  proposal: any = {};
  ranking: number;
  spinner: boolean = false;
  params: any = {};


  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public apiSvc: ApiService,
    public showToaster: ShowToaster,
    public appCtrl: App,
  ) {
    this.params.data = {"icon": Constants.SPINNER};
  }

  onRatingChange(event) {
    console.log(event);
    console.log ("rating", this.ranking);
  }
  ionViewDidLoad() {
    console.log(this.navParams.data);
    this.ranking = 0;
    this.proposal  =  this.navParams.data;
  }

  closeView() {
    this.viewCtrl.dismiss();
  }

  rateTheService(providerId, requestId) {
    let sText: string;
    if (this.ranking === 1) {
      sText = " estrella ! ";
    }else {
      sText = " estrellas ! ";
    }
    let alert = this.alertCtrl.create({
      title: "¡ " + this.ranking + sText,
      message: "¿Estas seguro?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => { },
        },
        {
          text: "Si",
          handler: () => {
            console.log("Buy clicked");
            this.doTheRate(providerId, requestId);
          },
        },
      ],
    });
    alert.present();
  }

  doTheRate(providerId, requestId) {

    this.spinner = true;
    let request = {status: 2};
    let provider = {score: this.ranking};

    this.apiSvc.putService(Constants.RATE_PROVIDER + providerId, JSON.stringify({provider})).subscribe(
      (provider) => {
        this.apiSvc.putService(Constants.UPDATE_REQUEST + requestId, JSON.stringify({request})).subscribe(
          (rqst) => {
            this.spinner = false;
            this.showToaster.reveal( "       Gracias por usar AutoCar " , "middle", 3000);
            this.closeView();
            this.appCtrl.getRootNav().setRoot(MainPage);
          },
          err => {
            this.showToaster.reveal("Se ha producido un error en el status: " + err , "bottom", 3000);
            this.spinner = false;
        });
      },
      err => {
        this.showToaster.reveal( "Se ha producido un error:" + err , "bottom", 2000);
        this.spinner = false;
      },
    );
  }
}
