import { Settings } from "../../providers/settings/settings";
import { Component, Input } from "@angular/core";
import { IonicPage, NavController, App } from "ionic-angular";
import { MainPage } from "../pages";
import { ApiService }from "../../service/api-service";
import { ShowToaster} from "../../utils/toaster";
import { Constants } from "../../utils/constants";
@IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html",
})
export class WelcomePage {
  @Input() data: any;
  @Input() events: any;
  spinner: boolean = false;
  params: any = {};

  public username: string;
  public password: string;
  user: any = {};

  constructor(public navCtrl: NavController, public settings: Settings, public appCtrl: App, public apiSvc: ApiService, public shwTostr: ShowToaster) {
    this.params.data = {"icon": Constants.SPINNER};
   }

  ionViewCanEnter() {
    this.spinner = true;
    this.settings.settingsObservable.subscribe(
      strgeData => {
        console.log("LOCAL STORAGE DATA:", strgeData);
        if (strgeData.token !== "" && strgeData.token !== null && strgeData.token !== undefined) {
          console.log("hay token");
          this.apiSvc.getService(Constants.LOGGED_USER_URL + "/" + strgeData.token).subscribe(
            data => {
              if (data[0].id === strgeData.id ) {
                this.appCtrl.getRootNav().setRoot(MainPage);
                this.spinner = false;
              }
              this.spinner = false;
            }, err => {
              this.spinner = false;
              this.shwTostr.reveal("Error de conexión, comprueba tu conexión a internet. " + err, "middle", 3000);
            } ,
          );
        }else { this.spinner = false; }
      }, err => {
        this.spinner = false;
    });
  }


  login() {
    this.navCtrl.push("LoginPage");
  }

  signup() {
    this.navCtrl.push("SignupPage");
  }
}
