import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UserServicesPage } from "./user-services";
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    UserServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserServicesPage),
    SpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class UserServicesPageModule {}
