import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TranslateModule } from "@ngx-translate/core";
import { LoginCustomerPage } from "./login-customer";
import { SpinnerModule } from "../../components/spinner/spinner.module";
@NgModule({
  declarations: [
    LoginCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginCustomerPage),
    TranslateModule.forChild(),
    SpinnerModule,
  ],
  exports: [
    LoginCustomerPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginCustomerPageModule {}
