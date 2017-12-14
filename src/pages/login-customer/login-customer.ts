import { Component} from "@angular/core";
import { IonicPage, NavController, NavParams, App } from "ionic-angular";
import { AutoserviceService } from "../../service/autoservice-service";
import { Constants} from "../../utils/constants";
import { ShowToaster } from "../../utils/toaster";
import { UserMapping } from "../../utils/user-mapping";
import { LoginPage } from "../login/login";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-login-customer",
  templateUrl: "login-customer.html",
  providers: [AutoserviceService, ShowToaster, UserMapping],
})
export class LoginCustomerPage {
  spinner: boolean = false;
  params:  any= { };
  myForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    fBuilder: FormBuilder,
    public autoservice: AutoserviceService,
    public tstCtrl: ShowToaster,
    private userMapping: UserMapping,
    public appCtrl: App) {
      this.params.data = {"icon": Constants.SPINNER};
      this.myForm = fBuilder.group({
      "name": ["", Validators.compose([Validators.required, Validators.minLength(8)])],
      "phone": ["", Validators.compose([Validators.required, Validators.minLength(10), isNumber])],
      "email": ["", Validators.compose([Validators.required, Validators.email])],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      "cPassword": ["", Validators.compose([Validators.required])],
      }, {validator: areEqual});

    function areEqual(group: FormControl) {
      let password = group.get("password").value;
      let confirmPassword = group.get("cPassword").value;
       if (password !== confirmPassword) {
           group.get("cPassword").setErrors( {MatchPassword: true});
           return true;
       } else {
           return null;
       }
    }
    function isNumber(c: FormControl) {
      return c.value > 0 ? null : {valid: false};
    }

    function isUsed() {
      return this.validEmail ? null : {valid: false};
    }

  }
  ngOnInit () {
    this.spinner = false;
  }

  onSubmit(form: any): void {
    this.spinner = true;
    this.isEmailAvailable(this.userMapping.arrangeData(form, "customer"));
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginUserPage");
  }

  doNewRegister(form) {
    this.autoservice.createUser(form)
    .subscribe((data: any) => {
         if (data) {
          this.spinner = false;
          this.tstCtrl.reveal("Registrado con éxito", "bottom", 3000);
          this.appCtrl.getRootNav().setRoot(LoginPage);
         }else {
          this.tstCtrl.reveal("Error de conexión", "middle", 3000);
          this.spinner = false;
         }
     });
  }
  emailNotValid() {
    this.spinner = false;
    this.tstCtrl.reveal("Correo No válido", "bottom", 3000);
    this.myForm.controls["email"].setValue("");
  }

  isEmailAvailable(form) {
    this.autoservice.doesExistEmail(form.email)
    .subscribe((customersEmail: any) => {
      if (customersEmail[0] === form.email) {
        this.emailNotValid();
      }else {
        this.doNewRegister(form);
      }
    });
  }

}
