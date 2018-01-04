import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { RequestPage } from "./request";
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    RequestPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestPage),
    SpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class RequestPageModule {}
