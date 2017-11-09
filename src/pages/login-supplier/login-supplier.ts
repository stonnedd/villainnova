import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AutoserviceService } from "../../service/autoservice-service";
import { SupplierMapping} from "../../utils/supplier-mapping"
import { FormGroup, ReactiveFormsModule, FormControl,
        FormBuilder, Validators, AbstractControl} from "@angular/forms";


@IonicPage()
@Component({
  selector: "page-login-supplier",
  templateUrl: "login-supplier.html",
  providers: [AutoserviceService, SupplierMapping],

})
export class LoginSupplierPage {

  myForm: FormGroup;
  services: any = [];
  mainServices: any = [];
  fetchedLng: number;
  fetchedLat: number;

  constructor(fBuilder: FormBuilder,
              public navCtrl: NavController,
              public navParams: NavParams,
              public autoservice: AutoserviceService,
              public supplierMapping: SupplierMapping) {

    this.myForm = fBuilder.group({
      "name": ["", Validators.compose([Validators.required])],
      "manager": ["", Validators.compose([Validators.required, Validators.minLength(8)])],
      "phone": ["", Validators.compose([Validators.required, Validators.minLength(10), isNumber])],
      "email": ["", Validators.compose([Validators.required, Validators.email])],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      "cPassword": ["", Validators.compose([Validators.required])],
      "service": ["", Validators.compose([Validators.required])],
      "schedule": ["", Validators.compose([Validators.required])],
      "specialty": ["", Validators.compose([Validators.required])],
      "address": ["", Validators.compose([Validators.required])],
      "brands": ["", Validators.compose([Validators.required])],
      "lat": ["", Validators.compose([Validators.required])],
      "lng": ["", Validators.compose([Validators.required])],
    }, {validator: areEqual});

    function areEqual(group: FormControl) {
      let password = group.get("password").value; // to get value in input tag
      let confirmPassword = group.get("cPassword").value; // to get value in input tag
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
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginSupplierPage");
  }

  onSubmit(form: any): void {
    this.autoservice.createSupplier(this.supplierMapping.arrangeData(form))
    .subscribe( (data: any) => {
        console.log(data);
    });
  }

  ngOnInit() {
    this.fetchMainServices();
    this.fetchServices();
  }

  fetchServices() {
    this.autoservice.getServices().subscribe(
      services => {
        this.services = services;
        console.log(this.services);
      },
      err => {
        console.log(err);
      },
    );
  }

  fetchMainServices() {
    this.autoservice.getMainServices().subscribe(
      mservices => {
        this.mainServices = mservices;
        console.log(this.mainServices);
      },
      err => {
        console.log(err);
      },
    );
  }

  getMyPos() {
    this.autoservice.getPosition().then(
      coords => {
        this.fetchedLat = coords.coords.latitude;
        this.fetchedLng = coords.coords.longitude;
        console.log("coords:", this.fetchedLat, this.fetchedLng);
      },
    );
  }

}
