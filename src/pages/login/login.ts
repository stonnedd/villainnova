import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController} from "ionic-angular";
import { User } from "../../providers/providers";
import { LoginService } from "../../service/login-service";
import { ShowToaster } from "../../utils/toaster";
import { AutoservicePage } from "../../pages/autoservice/autoservice";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
  providers: [LoginService, ShowToaster],
})
export class LoginPage {
  account: { email: string, password: string, profile: string } = {
    email: "",
    password: "",
    profile: "",
  };
  private loginErrorString: string;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController,
    public user: User,
    public translateService: TranslateService,
    fBuilder: FormBuilder,
    private loginService: LoginService,
    private showToaster: ShowToaster) {
    this.loginForm = fBuilder.group({
      "email": ["", Validators.compose([Validators.required, Validators.email])],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this.translateService.get("LOGIN_ERROR").subscribe((value) => {
      this.loginErrorString = value;
    });
  }

  onSubmit(form: any) {
    this.account.email = form.email;
    this.account.password = form.password;
    this.loginService.doesExistEmail(form.email, "customers")
    .subscribe((customersEmail: any) => {
        if (customersEmail[0] === form.email) {
          this.account.profile = "customer";
          this.doLogin(this.account);
        }else {
        this.loginService.doesExistEmail(form.email, "suppliers")
        .subscribe((supplierEmail: any) => {
          if (supplierEmail[0] === form.email ) {
              this.account.profile = "supplier";
              this.doLogin(this.account);
          }else {
            this.showToaster.reveal("Correo NO válido", "bottom", 3000);
          }
        });
      }
    });
  }

  loginSucces() {
    this.showToaster.reveal("Bienvenido", "top", 3000);
    this.navCtrl.push(AutoservicePage);
  }

  loginFail() {
    this.showToaster.reveal("Contraseña incorrecta", "top", 3000);
    this.loginForm.controls["password"].setValue("");
  }

  doLogin(account) {
    this.loginService.doLogin(account).subscribe((resp) => {
      console.log("the resp", resp);
      resp._body === "null" ? this.loginFail() : this.loginSucces();
    }, (err) => {
      console.log("Error", err);
      this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }
}
