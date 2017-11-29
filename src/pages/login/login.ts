import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController, App} from "ionic-angular";
import { User } from "../../providers/providers";
import { Storage } from "@ionic/storage";
import { LoginService } from "../../service/login-service";
import { ShowToaster } from "../../utils/toaster";
import { AutoservicePage } from "../../pages/autoservice/autoservice";
import { Settings } from "../../providers/settings/settings";
import { MainPage } from "../pages";
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
    private showToaster: ShowToaster,
    public settings: Settings,
    public appCtrl: App ) {
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
          this.loginForm.controls["email"].setValue("");
        }
    }, (err) => {
      this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }

  loginSuccess(token: string) {
    this.updateSettings(token);
    this.settings.settingsObservable.subscribe(
      value => {
        if (!value.token) {
          this.loginSuccess(token);
        }
        this.goForward(token);
      }, (err) => {
        this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }

  goForward(token) {
    this.loginService.getUser(token).subscribe(
      user => {
        console.log(user);
        this.showToaster.reveal("Bienvenido " + user[0].name, "top", 3000);
        this.appCtrl.getRootNav().setRoot(MainPage, user[0]);
      },
    );
  }

  updateSettings(token: any) {
    this.settings.update("token", token);
    this.settings.update("logged", true);
  }

  ionViewWillEnter() {
    this.settings.settingsObservable.subscribe(
      () => {
        this.settings.clear();
        this.settings.update("token", "");
        this.settings.update("logged", false);
      },
    );
  }

  ionViewDidLoad() {
    this.settings.settingsObservable.subscribe(
      value => {
        console.log("Init storage;", value);
      },
    );
  }

  loginFailed() {
    this.settings.update("logged", false);
    this.showToaster.reveal("Contraseña incorrecta", "top", 3000);
    this.loginForm.controls["password"].setValue("");
  }

  doLogin(account) {
    this.loginService.doLogin(account).subscribe((resp) => {
      let token = this.fitToken(resp._body);
      resp._body === "null" ? this.loginFailed() : this.loginSuccess(token);
    }, (err) => {
      this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }

  fitToken(value: string) {
    let re = /"/gi;
    return value.replace(re , "");
  }

}
