import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SupplierDetailPage } from "./supplier-detail";
import { Ionic2RatingModule } from "ionic2-rating";
import { CallNumber } from "@ionic-native/call-number";
import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator";
import { RequestPage} from "../request/request";
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    SupplierDetailPage,
    
  ],
  imports: [
    IonicPageModule.forChild(SupplierDetailPage),
    Ionic2RatingModule,
    SpinnerModule,

  ],
  providers:[
    CallNumber,
    LaunchNavigator,
    RequestPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class SupplierDetailPageModule {}
