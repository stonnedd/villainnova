import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Constants} from "../../utils/constants";
import { FormsModule }   from "@angular/forms";
import { AutoserviceService } from "../../service/autoservice-service";
import { SupplierModel} from "../../models/supplierModel";
import { PopoverController } from "ionic-angular";
import { SettingsPage} from "../settings/settings";
import { ToastController } from "ionic-angular";
import { Observable} from "rxjs/Rx";

@IonicPage()
@Component({
  selector: "page-autoservice",
  templateUrl: "autoservice.html",
  providers: [AutoserviceService],

})
export class AutoservicePage {
  spinnerSts: any = false;
  params: any= {};
  usrPos: any= {};
  fetchedSuppliers: SupplierModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AsSvc: AutoserviceService,
    public popCtrl: PopoverController,
    public toastCtrl: ToastController,
    public autoservice: AutoserviceService,

    ) {
    this.params.spinner = {"icon": Constants.SPINNER};
    this.params.data = {};
    this.params.suppliers = [];
    this.params.fetchSupp = [];
    this.params.mapData = {};
    this.params.events = {
      "onMarker": function(item: any= {}) {
              console.log(item);
      },
    };

    this.params.userData = {
      userPos: {
        lat: 0,
        lng: 0,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
      },
    };
  }

  serviceIsSelected(chosenService) {
    this.spinnerSts = true;
    console.log("ocpión::", chosenService);
    // this.params.suppliers = this.AsSvc.getSuppliers().filter(
    //   data => {
    //     for (let i = 0; i < chosenService.length; i++) {
    //       if (data.service === chosenService[i]) {
    //         return true;
    //       }
    //     }
    //   },
    // );
    // console.log("proveedores:", this.params.suppliers);
    this.fetchSuppliers(chosenService);
  }

  onMarkerService(params) {
    console.log("params:", params);
    this.params.data = params;
    this.params.mapData.lat = params.lat;
    this.params.mapData.lng = params.lng;
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.spinnerSts = true;
    this.fetchMainServices();
    this.AsSvc.getPosition().then((userPosition) => {
      this.fillUsrData(userPosition);
      console.log("pos:", userPosition.coords);
    }).catch((error) => {
      this.presentToast(JSON.stringify(error));
      this.spinnerSts = false;
    });
  }

  fillUsrData(usrPosition: any) {
    this.params.userData = {
      userPos: {
        lat: usrPosition.coords.latitude,
        lng: usrPosition.coords.longitude,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        iconUrl: "../assets/mapicons/you.png",
      },
    };
    this.params.mapData.lat = usrPosition.coords.latitude;
    this.params.mapData.lng = usrPosition.coords.longitude;
  }

  showSettings(event) {
    let popover = this.popCtrl.create(SettingsPage);
    popover.present({
      ev: event,
    });
  }

  presentToast(msgTxt) {
    const toast = this.toastCtrl.create({
      message: msgTxt,
      duration: 3000,
      position: "middle",
    });
    toast.present();
  }

  fetchSuppliers(chosenService) {
    this.autoservice.getSuppliersq(chosenService)
    .subscribe(
      supplier => {
        this.params.suppliers = supplier;
        console.log("fetched", this.params.suppliers);
        this.spinnerSts = false;
      },
      err => {
        console.log(err);
        this.spinnerSts = false;
      },
    );
  }

  fetchServices() {
    this.autoservice.getServices().subscribe(
      services => {
        this.params.services = services;
        console.log("fetchedServ", this.params.services);
        this.spinnerSts = false;
      },
      err => {
        console.log(err);
        this.spinnerSts = false;
      },
    );
  }

  fetchMainServices() {
    this.autoservice.getMainServices().subscribe(
      mservices => {
        this.params.mainServices = mservices;
        console.log("fetchedMServ", this.params.services);
        this.fetchServices();
      },
      err => {
        console.log(err);
        this.spinnerSts = false;
      },
    );
  }

}
