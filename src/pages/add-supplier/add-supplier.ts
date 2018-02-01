import { AutoserviceService } from "../../service/autoservice-service";
import { Component } from "@angular/core";
import { ShowToaster } from "../../utils/toaster";
import { SupplierMapping} from "../../utils/supplier-mapping";
import { IonicPage, NavController, NavParams,
        ViewController, PopoverController } from "ionic-angular";
import { AutoservicePage } from "../autoservice/autoservice";
import { ProfilePage} from "../../pages/profile/profile";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators, AbstractControl} from "@angular/forms";


@IonicPage()
@Component({
  selector: "page-add-supplier",
  templateUrl: "add-supplier.html",
  providers: [AutoserviceService, SupplierMapping, ShowToaster],
})
export class AddSupplierPage {
  myForm: FormGroup;
  services: any = [];
  mainServices: any = [];
  fetchedLng: number;
  fetchedLat: number;
  suppForms: any = [];
  isNewService: boolean = true;

  data: any;
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public supplierMapping: SupplierMapping,
      public autoservice: AutoserviceService,
      public tstCtrl: ShowToaster,
      fBuilder: FormBuilder,
      ) {

    this.myForm = fBuilder.group({
      "company_name": ["", Validators.compose([Validators.required])],
      "service": ["", Validators.compose([Validators.required])],
      "schedule": ["", Validators.compose([Validators.required])],
      "specialty": ["", Validators.compose([Validators.required])],
      "address": ["", Validators.compose([Validators.required])],
      "brands": ["", Validators.compose([Validators.required])],
      "lat": ["", Validators.compose([Validators.required])],
      "lng": ["", Validators.compose([Validators.required])],
      "website": ["" ],
      "aditional_phone": ["", Validators.compose([Validators.required, Validators.minLength(10), isNumber])],
    });
    function isNumber(c: FormControl) {
      return c.value > 0 ? null : {valid: false};
    }
  }

  ngOnInit() {
    this.fetchMainServices();
    this.data = this.navParams.data;
    console.log("OriginalData:::", this.data.provider);
    this.data.isNewProvider !== true ?
      this.loadParams()
      : this.isNewService = true;
  }

  loadParams() {
    this.isNewService = false;
    this.myForm.controls["company_name"].setValue(this.data.provider.company_name);
    this.myForm.controls["service"].setValue(this.data.provider.service);
    this.myForm.controls["specialty"].setValue(this.data.provider.specialty);
    this.myForm.controls["address"].setValue(this.data.provider.address);
    this.myForm.controls["brands"].setValue(this.data.provider.brands);
    this.myForm.controls["website"].setValue(this.data.provider.website);
    this.myForm.controls["aditional_phone"].setValue(this.data.provider.aditional_phone);
    this.myForm.controls["schedule"].setValue(this.data.provider.schedule);
    this.fetchedLat = this.data.provider.lat;
    this.fetchedLng = this.data.provider.lng;
  }
  
  fetchMainServices() {
    this.autoservice.getMainServices().subscribe(
      mservices => {
        this.mainServices = mservices;
        console.log(this.mainServices);
        this.autoservice.getServices().subscribe(
          services => {
            this.services = services;
            console.log(this.services);
          },
          err => {
            console.log(err);
          },
        );
      },
      err => {
        console.log(err);
      },
    );
  }

  onSubmit(form: any): void {
    this.isNewService ? this.getNew(form) : this.update(form);
  }

  getNew(form: any) {
    this.doNewRegister(this.supplierMapping.addMapIcon(form));
  }
  update(form: any) {
    form.id = this.data.provider.id;
    console.log("UPDATE:::", form);
    this.updateRegister(this.supplierMapping.addMapIcon(form));

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

  doNewRegister(form) {
    this.autoservice.createSupplier(this.data.id, form)
    .subscribe((data: any) => {
        if (data && !null) {
          this.tstCtrl.reveal("Registrado con éxito", "bottom", 3000);
          this.close();
        }
        else {
          this.tstCtrl.reveal("Error de conexión", "middle", 3000);
        }
      });
  }

  updateRegister(form) {
    this.autoservice.updateSupplier(form.id, form)
    .subscribe((data: any) => {
        if (data && !null) {
          this.tstCtrl.reveal("Guardado con éxito", "bottom", 3000);
          this.close();
        }
        else {
          this.tstCtrl.reveal("Error de conexión", "middle", 3000);
        }
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddSupplierPage");
  }
  close() {
    this.navCtrl.push(ProfilePage);
    this.viewCtrl.dismiss();
  }

  closeView() {
    this.viewCtrl.dismiss();
  }

}
