import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController, ToastController } from "ionic-angular";
import { User } from "../../providers/providers";
import { LoginPage } from "../login/login";
import { LoginCustomerPage } from "../login-customer/login-customer";
import { LoginSupplierPage } from "../login-supplier/login-supplier";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
})

export class SignupPage {

  userLogin: any;
  supplierLogin: any;
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

      function pushSignin() {
        navCtrl.push(LoginPage);
      }
      this.userLogin = LoginCustomerPage;
      this.supplierLogin =  LoginSupplierPage;
      this.translateService.get("SIGNUP_ERROR").subscribe((value) => {
      this.signupErrorString = value;
    });
  }
}
