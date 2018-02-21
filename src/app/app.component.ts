import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TranslateService } from "@ngx-translate/core";
import { Config, Nav, Platform } from "ionic-angular";
import { FirstRunPage } from "../pages/pages";
import { Settings } from "../providers/providers";


@Component({
  selector: "menu",
  templateUrl: "app.html"
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    //{ title: "Inicio", component: "AutoservicePage", icon: "icon-home-variant" },
    { title: "Perfil", component: "ProfilePage", icon: "icon-account-box"},
    //{ title: 'Asistencia', component: 'AutoservicePage', icon:'build'},
   // { title: "Gasolineras", component: "ProfilePage", icon: "ios-car"},
    //{ title: 'Grúas', component: 'ProfilePage', icon:'icon-truck'},
    //{ title: "Productos", component: "ProfilePage", icon: "md-list-box"},
    /*
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Map', component: 'MapPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' }//*/
    
  ]

  constructor(private translate: TranslateService,
      private platform: Platform, settings: Settings, 
      private config: Config, private statusBar: StatusBar, 
      private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
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
