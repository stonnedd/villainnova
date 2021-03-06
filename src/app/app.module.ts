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
// import { Items } from "../mocks/providers/items";
import { Settings } from "../providers/providers";
import { User } from "../providers/providers";
import { Api } from "../providers/providers";
import { MyApp } from "./app.component";
import { AngularFireAuthModule } from "angularfire2/auth";
import { HomePageModule} from "../pages/home/home.module";
import { AutoservicePageModule} from "../pages/autoservice/autoservice.module";
import { AutoserviceService} from "../service/autoservice-service";
import { SettingsPageModule} from "../pages/settings/settings.module";
import { SupplierDetailPageModule} from "../pages/supplier-detail/supplier-detail.module";
import { LoginCustomerPageModule } from "../pages/login-customer/login-customer.module";
import { LoginSupplierPageModule} from "../pages/login-supplier/login-supplier.module";
import { Ionic2RatingModule } from "ionic2-rating";
import { LoginPageModule} from "../pages/login/login.module";
import { AddSupplierPageModule} from "../pages/add-supplier/add-supplier.module";
import { RequestPageModule } from "../pages/request/request.module";
import { RequestMethod } from "@angular/http/src/enums";
import { UserServicesPageModule } from "../pages/user-services/user-services.module";
import { UserRequestsPageModule } from "../pages/user-requests/user-requests.module";
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { RequestDetailPageModule } from "../pages/request-detail/request-detail.module";
import { File } from "@ionic-native/file";
import { AttachedImagesPageModule} from "../pages/attached-images/attached-images.module";
import { ProfilePageModule} from "../pages/profile/profile.module";
import { RequestProviderDetailPageModule} from "../pages/request-provider-detail/request-provider-detail.module"
import { BackgroundMode } from "@ionic-native/background-mode";
import { ShowNotification, ShowToaster } from "../utils/utils";
import { ApiService } from "../service/services";
import { ProviderRequestsPageModule} from "../pages/provider-requests/provider-requests.module";
import { CustomerUserDetailPageModule} from "../pages/customer-user-detail/customer-user-detail.module";
import { from } from "rxjs/observable/from";
import { ProviderProposalPageModule } from "../pages/provider-proposal/provider-proposal.module";
import { ProposalDetailPageModule} from "../pages/proposal-detail/proposal-detail.module";
import { UserRequestsDetailPageModule} from "../pages/user-requests-detail/user-requests-detail.module";
import { StatusMapping } from "../utils/status-mapping";
import { SupplierMapping } from "../utils/supplier-mapping";
import { ProfileEditPageModule} from "../pages/profile-edit/profile-edit.module";
import { LocalNotifications } from '@ionic-native/local-notifications';
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
    RequestPageModule,
    UserRequestsPageModule,
    UserServicesPageModule,
    RequestDetailPageModule,
    AttachedImagesPageModule,
    ProfilePageModule,
    RequestProviderDetailPageModule,
    ProviderRequestsPageModule,
    CustomerUserDetailPageModule,
    ProviderProposalPageModule,
    ProposalDetailPageModule,
    UserRequestsDetailPageModule,
    ProfileEditPageModule,
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
    // Items,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    ShowNotification,
    FileTransfer,
    ApiService,
    ShowToaster,
    StatusMapping,
    SupplierMapping,
    LocalNotifications,
    BackgroundMode,
    File,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
  })
export class AppModule { }
