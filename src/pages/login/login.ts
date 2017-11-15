import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController} from "ionic-angular";
import { User } from "../../providers/providers";
import { LoginService } from "../../service/login-service";
import { ShowToaster } from "../../utils/toaster";
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
          console.log(this.account);
        //this.doLogin(this.account);
        }else {
        this.loginService.doesExistEmail(form.email, "suppliers")
        .subscribe((supplierEmail: any) => {
          if (supplierEmail[0] === form.email ) {
              this.account.profile = "supplier";
              console.log(this.account);
            //this.doLogin(this.account);
          }else {
            this.showToaster.reveal("Correo NO válido", "bottom", 3000);
          }
        });
      }
    });
  }

  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
      console.log("Login Success");
      console.log(resp);
    }, (err) => {
      //this.navCtrl.push(MainPage);
      console.log("Login Success");
      console.log(err);
      this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }
}
