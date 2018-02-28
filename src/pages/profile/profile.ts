import { ShowToaster } from "../../utils/toaster";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav, PopoverController } from "ionic-angular";
import { UserServicesPage } from "../../pages/user-services/user-services"; 
import { UserRequestsPage } from "../../pages/user-requests/user-requests";
import { ApiService} from "../../service/api-service";
import { Settings } from "../../providers/settings/settings";
import { Constants} from "../../utils/constants";
import { WelcomePage } from "../welcome/welcome";
import { ProfileEditPage } from "../profile-edit/profile-edit";
@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html",
  providers: [ShowToaster, ApiService],
})

export class ProfilePage {
  title: string= "Mi perfil";
  user: any = {};
  params: any = {};
  spinner: boolean = false;
  userData: any = {
    name: "",
    phone: "",
    email: ""
  }
  
  constructor (public navCtrl: NavController,
    public navParams: NavParams,
    public settings: Settings,
    public shwToaster: ShowToaster,
    public apiSvc: ApiService,
    public nav: Nav,
    public popCtrl: PopoverController
    ) {
      
      this.params.data = {"icon": Constants.SPINNER};
  }
  ionViewWillEnter(){
    this.userData = {
      name: "",
      phone: "",
      email: ""
    }
  }

  ionViewDidLoad(){
    this.spinner = true;
    this.settings.settingsObservable.subscribe(
      data => {
        console.log("LOCAL STORAGE DATA:", data);
        this.user = data
        this.apiSvc.getService(Constants.LOGGED_USER_URL + "/" + this.user.token).subscribe(
          uData =>{
            this.userData = uData[0];
            this.spinner = false;
          },err =>{
            this.shwToaster.reveal("Tu sesión ha expirado...", "bottom", 3000);
            this.nav.setRoot(WelcomePage);
            // agregar redireccionamiento a login
            this.spinner = false;
          });
      }, err => {
        this.shwToaster.reveal("Tu sesión ha expirado...", "bottom", 3000);
        this.spinner = false;
        this.nav.setRoot(WelcomePage);
    });
  }

  editProfile(userData){
    let popover = this.popCtrl.create(ProfileEditPage, userData);
    popover.present({
      ev:"" 
    });
  }

  // rqstNotify() {
  //   this.event.subscribe("rqstNotify",
  //   (data) => {
  //     console.log("En profile:::", data);
  //     this.fetchedRequests = data;
  //   });
  //   this.event.subscribe("proposalNotify", 
  //   props => {
  //     this.fetchedProposals = props;
  //   });
  // }

}
