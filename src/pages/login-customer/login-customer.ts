import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AutoserviceService } from "../../service/autoservice-service";
import { ToastController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-login-customer",
  templateUrl: "login-customer.html",
  providers: [AutoserviceService],
})
export class LoginCustomerPage {
  
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    fBuilder: FormBuilder, public autoservice: AutoserviceService) {
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

  onSubmit(form: any): void {
    delete form.cPassword;
    this.isEmailAvailable(form);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginUserPage");
  }

  doNewRegister(form) {
    this.autoservice.createCustomer(form)
    .subscribe((data: any) => {
         if (data) {
           this.navCtrl.push(LoginPage);
         }
         else {
          this.svcToast("Error de conexión", "bottom");
         }
     });

  }
  emailNotValid(){
    this.svcToast("Correo No válido", "bottom");
    this.myForm.controls["email"].setValue("");
  }

  svcToast( note: string, pos: string) {
    const toast = this.toastCtrl.create({
        message: note,
        duration: 3000,
        position: pos,
        showCloseButton: true,
        closeButtonText: "ok",
    });
    toast.present();
  }

  isEmailAvailable(form) {
    this.autoservice.doesExistEmail(form.email, "customers")
    .subscribe((customersEmail: any) => {
      if (customersEmail[0] === form.email) {
        this.emailNotValid();
      }else {
        this.autoservice.doesExistEmail(form.email, "suppliers")
        .subscribe((supplierEmail: any) => {
          if (supplierEmail[0] === form.email ) {
            this.emailNotValid();
          }else {
            this.doNewRegister(form);
          }
        });
      }
    });
  }

}