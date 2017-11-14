import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LoginCustomerPage } from "./login-customer";

@NgModule({
  declarations: [
    LoginCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginCustomerPage),
  ],
  exports: [
    LoginCustomerPage,
  ],
  
})
export class LoginCustomerPageModule {}
