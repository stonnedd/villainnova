import { ShowToaster } from "../../utils/toaster";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Tabs, Events } from "ionic-angular";
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
  @ViewChild ("UserTabs") tabs: Tabs;
  title: string= "Mi perfil";
  fetchedRequests: any;
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
    public event: Events,
    ) {
      this.rqstNotify();
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

  ionViewDidLoad() {
    this.rqstNotify();
  }

  rqstNotify() {
    this.event.subscribe("rqstNotify",
    (data) => {
      console.log("En profile:::", data);
      this.fetchedRequests = data;
      // if (data !== 0 ) {
      //   this.fetchedRequests = null;
      // }else {
      //   this.fetchedRequests = data;
      // }
    });
  }

}
