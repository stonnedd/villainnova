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
    this.loginService.doesExistEmail(form.email)
    .subscribe((userEmail: any) => {
      if (userEmail[0] === form.email) {
          this.doLogin(form);
        }else {
          this.showToaster.reveal("Correo NO válido", "bottom", 3000);
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
      console.log("The resp:::", resp);
      resp._body === "null" ? this.loginFail() : this.loginSucces();
    }, (err) => {
      console.log("Error", err);
      this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }
}
