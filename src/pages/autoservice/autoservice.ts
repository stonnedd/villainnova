import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events, App } from "ionic-angular";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Constants} from "../../utils/constants";
import { ShowNotification} from "../../utils/show-notification";
import { FormsModule }   from "@angular/forms";
import { AutoserviceService } from "../../service/autoservice-service";
import { SupplierModel} from "../../models/supplierModel";
import { PopoverController } from "ionic-angular";
import { SettingsPage} from "../settings/settings";
import { ToastController } from "ionic-angular";
import { Observable} from "rxjs/Rx";
import { BackgroundMode } from "@ionic-native/background-mode";
import { ShowToaster} from "../../utils/toaster";
import { ApiService } from "../../service/api-service" ;
import { Settings} from "../../providers/settings/settings"
import { LoginPage } from "../login/login"
import { AndroidPermissions } from '@ionic-native/android-permissions';

@IonicPage()
@Component({
  selector: "page-autoservice",
  templateUrl: "autoservice.html",
  providers: [AutoserviceService, BackgroundMode, AndroidPermissions],

})
export class AutoservicePage {
  spinnerSts: any = false;
  params: any= {};
  usrPos: any= {};
  fetchedSuppliers: SupplierModel[];
  distance = 5;
  user : any= {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public AsSvc: AutoserviceService,
    public popCtrl: PopoverController,
    public toastCtrl: ToastController,
    public autoservice: AutoserviceService,
    public apiSvc: ApiService,
    private backgroundMode: BackgroundMode,
    public shwNotification: ShowNotification,
    public showTstr: ShowToaster,
    public events: Events,
    public settings: Settings,
    public appCtrl: App,
    private androidPermissions: AndroidPermissions

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
    console.log("ocpión::", chosenService);
    if(chosenService!== null && chosenService !== undefined){
      this.spinnerSts = true;
      this.fetchSuppliers(chosenService);
    }
  }

  onMarkerService(params) {
    console.log("params:", params);
    this.params.data = params;
    this.params.mapData.lat = params.lat;
    this.params.mapData.lng = params.lng;
  }

  ionViewDidLoad() {
    this.spinnerSts = true;
    this.AsSvc.getPosition().then((userPosition) => {
      this.fetchMainServices();
      this.fillUsrData(userPosition);
      this.spinnerSts = false;
      
    }).catch((error) => {
      this.presentToast("Por favor habilita los permisos de GPS");
      this.spinnerSts = false;
    });

    let count = 1 ;
    this.settings.settingsObservable.subscribe(
      data => {
        this.user.id = data.id;
      }, err => {
        this.showTstr.reveal("Por favor vuelve a iniciar sesión", "bottom", 3000);
        this.spinnerSts = false;
        this.appCtrl.getRootNav().setRoot(LoginPage);
    });


    // 3this.backgroundMode.enable();
  //   setInterval(data => {
  //     console.log("timer:", count);
  //     if(this.user.id !== null && this.user.id !== undefined && this.user.id !== ""){
  //       this.apiSvc.getService(Constants.GET_NOTIFICATIONS + this.user.id).subscribe(
  //         notify => {
  //           console.log(notify);
  //           this.events.publish("notify", notify)
  //           if (notify.proposals !== 0 ){
  //             this.shwNotification.reveal("Propuestas", "Tienes " + notify.proposals + " propuestas pendientes");
  //           }
  //           if (notify.p_requests !== 0 ){
  //             this.shwNotification.reveal("Solicitudes", "Tienes " + notify.p_requests + " solicitudes pendientes");
  //           }

  //         }, err =>{
  //           this.showTstr.reveal("Error de conexión: " + err, "bottom", 3000)
  //         }
  //       );
        
  //     }
  //     count++;
  //   }, Constants.NOTIFY_DELAY);
    }


  ngOnInit() {
    // this.spinnerSts = true;
    // this.fetchMainServices();
    // this.AsSvc.getPosition().then((userPosition) => {
    //   this.fillUsrData(userPosition);
    //   console.log("pos:", userPosition.coords);
      
    // }).catch((error) => {
    //   this.presentToast(JSON.stringify(error));
    //   this.spinnerSts = false;
    // });
  }

  fillUsrData(usrPosition: any) {
    this.params.userData = {
      userPos: {
        lat: usrPosition.coords.latitude,
        lng: usrPosition.coords.longitude,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        // iconUrl: "../assets/mapicons/you.png",
        iconUrl: "assets/mapicons/you.png",
      },
    };
    this.params.mapData.lat = usrPosition.coords.latitude;
    this.params.mapData.lng = usrPosition.coords.longitude;
  }

  showSettings(event) {
    this.params.data.selectService=null;
    this.events.subscribe("provDist",
    (dist) =>{
      this.distance = dist
    });
    
    if(this.distance !== null && this.distance !== undefined && this.distance!== 0) {
      let popover = this.popCtrl.create(SettingsPage, {"distance":this.distance});
      popover.present({
        ev: event,
      });

    }else {
      let popover = this.popCtrl.create(SettingsPage, {"distance":5});
      popover.present({
        ev: event,
      });
    }
  }

  presentToast(msgTxt) {
    const toast = this.toastCtrl.create({
      message: msgTxt,
      duration: 2500,
      position: "middle",
    });
    toast.present();
  }

  fetchSuppliers(chosenService) {
   
    this.events.subscribe("provDist", 
      eData=> {
        this.distance= eData;
      }
    );
    this.autoservice.getPosition().then(
      coords => {
        let fetchedLat = coords.coords.latitude;
        let fetchedLng = coords.coords.longitude;
        let data = {
          "service": chosenService ,
          "distance": this.distance,
          "lat": fetchedLat,
          "lng": fetchedLng,
          "limit": 10,
        };
      this.apiSvc.postService(Constants.PROVIDERS_DISTANCE_FULL, JSON.stringify({data})).subscribe(
        providers=>{
          this.params.suppliers = providers.providers;
          console.log(this.params.suppliers);
          this.spinnerSts = false;
          if(providers.providers.length ==0) {
            this.showTstr.reveal("Lo sentimos, No hay proovedores cerca. Intenta buscando con una distancia mayor a "+ this.distance +" Km","middle", 4500);
          }else {
            this.showTstr.reveal("selecciona un proveedor", "bottom", 2500);
          }
        }, err =>{
        this.showTstr.reveal("Error de conexion:" + err, "middle", 2500 )
        }
      );  

      }, err => {
        this.showTstr.reveal("Error de GPS:" + err, "middle", 2500 )
      }  
    );

    
    // this.autoservice.getSuppliersq(chosenService)
    // .subscribe(
    //   supplier => {
    //     this.params.suppliers = supplier;
    //     console.log("fetched", this.params.suppliers);
    //     this.spinnerSts = false;
    //   },
    //   err => {
    //     console.log(err);
    //     this.spinnerSts = false;
    //   },
    // );
  }

  fetchServices() {
    this.autoservice.getServices().subscribe(
      services => {
        this.params.services = services;
      },
      err => {
        console.log(err);
        this.showTstr.reveal("Error de conexión", "middle", 2000);
        this.spinnerSts = false;
      },
    );
  }

  fetchMainServices() {
    this.autoservice.getMainServices().subscribe(
      mservices => {
        this.params.mainServices = mservices;
        this.fetchServices();
      },
      err => {
        console.log(err);
        this.showTstr.reveal("Error de conexión", "middle", 2000);
        this.spinnerSts = false;
      },
    );
  }

}
