import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PopoverController } from "ionic-angular";
import { SupplierDetailPage} from "../../../pages/supplier-detail/supplier-detail";
import { ToastController } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { AutoserviceService} from "../../../service/autoservice-service";
import { RequestPage } from "../../../pages/request/request";
import { NavController} from "ionic-angular";

@Component({
    selector: "maps-layout-1",
    templateUrl: "maps.html",
})

export class MapsLayout1 {
    @Input() data: any;
    @Input() events: any;
    @Input() userData: any;
    @Input() services: string[];
    @Input() mainServices: string[];
    @Input() suppliers: any;
    @Input() mapData: any;
    @Input() spinner: any;
    @Input() spinnerSts: boolean;
    @Output() onMarkerService = new EventEmitter <any> ();
    @Output() serviceIsSelected = new EventEmitter <string>();
    spinnerStatus: boolean = true;
    selectedService: any;
    labelService: string;
    cleanSelect : boolean = false;
    mapZoom: number = 14;
    map: any;

    constructor(
        public popCtrl: PopoverController,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController,
        public autSvc: AutoserviceService,
        public navCtrl: NavController,
    ) {     }

     

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

    onEvent(event: string, e: any) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log("evento:", event);
        if (event !== "onRates") {
            this.onMarkerService.emit(e);
            this.mapZoom = 15;
            this.showDetail(e, event);
        }
    }

    svcSelected(service): void {
        console.log("Seleccion:::", service);
        this.serviceIsSelected.emit(service);
        this.spinnerSts;
        this.mapZoom = 10;
    }

    onStarClass(items: any, index: number, e: any) {
        for (let i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates",  e);
    }

    showDetail(supplierData, event) {
        let popover = this.popCtrl.create(SupplierDetailPage, supplierData);
        console.log("el EVENTO:", event);
        popover.present({
          ev: "onMarker",
        });
    }

    ngOnInit() {
        this.svcToast("Selecciona un servicio", "bottom");
    }

    ionViewDidLoad() {
    }
    updatePos() {
        this.autSvc.getPosition().then(
            pos => {
                console.log(pos);
                this.mapData.lat = pos.coords.latitude;
                this.mapData.lng = pos.coords.longitude;
                this.userData.userPos.lat = pos.coords.latitude;
                this.userData.userPos.lng = pos.coords.longitude;
                this.mapZoom = 12;
                this.ionViewDidLoad();
            },
        );
    }

    requestQuote(){
        this.navCtrl.push(RequestPage, null);
    }

}