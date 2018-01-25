import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { UserRequestsPage } from "./user-requests";
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    UserRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRequestsPage),
    SpinnerModule,
  ],
  exports: [UserRequestsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserRequestsPageModule {}
