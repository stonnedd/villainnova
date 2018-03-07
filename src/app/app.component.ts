import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TranslateService } from "@ngx-translate/core";
import { Config, Nav, Platform, App } from "ionic-angular";
import { FirstRunPage } from "../pages/pages";
import { Settings } from "../providers/providers";
import { UserRequestsPage} from "../pages/user-requests/user-requests";
import { Constants} from "../utils/constants";
import { ApiService } from "../service/api-service";
import { MainPage} from "../pages/pages";
@Component({
  selector: "menu",
  templateUrl: "app.html"
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: "Perfil", component: "ProfilePage", icon: "person"},
    { title: 'Solicitudes', component: "UserRequestsPage", icon:"list-box" } ,
    { title: "Servicios", component: "UserServicesPage", icon: "build"},
    
  ]

  constructor(private translate: TranslateService,
      private platform: Platform, public settings: Settings, 
      private config: Config, private statusBar: StatusBar, 
      private splashScreen: SplashScreen, public apiSvc: ApiService,
      public appCtrl: App) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.statusBar.styleDefault();
      this.settings.update("logged", false);
      
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang("en");

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use("es"); // Set your language here
    }

    this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(values => {
      this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
