import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Http, HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { Camera } from "@ionic-native/camera";
import { GoogleMaps } from "@ionic-native/google-maps";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule, Storage } from "@ionic/storage";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { AgmCoreModule } from "angular2-google-maps/core";
import { Items } from "../mocks/providers/items";
import { Settings } from "../providers/providers";
import { User } from "../providers/providers";
import { Api } from "../providers/providers";
import { MyApp } from "./app.component";
//import { AngularFireModule } from "angularfire2";
//import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { HomePageModule} from "../pages/home/home.module";
import { AutoservicePageModule} from "../pages/autoservice/autoservice.module";
import { AutoserviceService} from "../service/autoservice-service";
import { SettingsPageModule} from "../pages/settings/settings.module";
import { SupplierDetailPageModule} from "../pages/supplier-detail/supplier-detail.module";
import { LoginCustomerPageModule } from "../pages/login-customer/login-customer.module";
import { LoginSupplierPageModule} from "../pages/login-supplier/login-supplier.module";
import { Ionic2RatingModule } from "ionic2-rating";
import { LoginPageModule} from "../pages/login/login.module"
import { AddSupplierPageModule} from "../pages/add-supplier/add-supplier.module"

// export const firebaseConfig = {
//   apiKey: "AIzaSyBdQOPM3re7vBFNTEspKM7G0vzKH7ub6H8",
//   authDomain: "villainova-app.firebaseapp.com",
//   databaseURL: "https://villainova-app.firebaseio.com",
//   projectId: "villainova-app",
//   storageBucket: "villainova-app.appspot.com",
//   messagingSenderId: "1297766976",
// };

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
    return new Settings(storage, {
      logged: false,
    });
}

@NgModule({
  declarations: [
    // ElasticHeader,
    MyApp,
  ],
  imports: [AgmCoreModule.forRoot({
    apiKey: "AIzaSyABWUtTglN8YGqcYI1zyjeRdOJx5r3TrZU",
  }),
    BrowserModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http],
      },
    }),

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HomePageModule,
    SettingsPageModule,
    SupplierDetailPageModule,
    Ionic2RatingModule,
    LoginCustomerPageModule,
    LoginSupplierPageModule,
    LoginPageModule,
    AutoservicePageModule,
    AddSupplierPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
  })
export class AppModule { }
