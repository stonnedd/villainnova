import { ShowToaster } from "../../utils/toaster";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserServicesPage } from "../../pages/user-services/user-services"; 
import { UserRequestsPage } from "../../pages/user-requests/user-requests";
import { ApiService} from "../../service/api-service";
import { Settings } from "../../providers/settings/settings";
import { Constants} from "../../utils/constants";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html",
  providers: [ShowToaster, ApiService],
})

export class ProfilePage {

  title: string= "Mi perfil";
  fetchedRequests: number = 2;
  servicesPage: any;
  requestsPage: any;
  user: any = {};
  params: any = {};
  spinner: boolean = false;

  constructor (public navCtrl: NavController,
    public navParams: NavParams,
    public settings: Settings,
    public shwToaster: ShowToaster,
    public apiSvc: ApiService,
    ) {
      this.servicesPage = UserServicesPage;
      this.requestsPage = UserRequestsPage;
      this.params.data = {"icon": Constants.SPINNER};
  }

  ngOnInit() {
    this.spinner = true;
    this.settings.settingsObservable.subscribe(
      data => {
        console.log("LOCAL STORAGE DATA:", data);
        this.user.id = data.id;
        this.user.token = data.token;
        this.spinner = false;
      }, err => {
        this.shwToaster.reveal("volver a iniciar sesión", "bottom", 3000);
        this.spinner = false;
    });
  }

  
}
