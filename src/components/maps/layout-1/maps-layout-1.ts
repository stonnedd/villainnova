import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PopoverController } from "ionic-angular";
import { SupplierDetailPage} from "../../../pages/supplier-detail/supplier-detail";
import { ToastController } from "ionic-angular";
import { AlertController } from "ionic-angular";

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
    @Output() onMarkerService = new EventEmitter <any> ();
    @Output() serviceIsSelected = new EventEmitter <string>();

    selectedService: any;
    labelService: string;
    mapZoom: number = 14;

    constructor(public popCtrl: PopoverController, public toastCtrl: ToastController, public alertCtrl: AlertController) { }

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

    svcSelected(): void {
        if (this.selectedService.length === 0) {
            this.labelService = "un servicio";
        }else
        if (this.selectedService.length === 1){
            this.labelService = this.selectedService[0];
        }else {
            this.labelService = "una opción";
        }
        this.selectedService.forEach(element => {
            if (element === "Taller especializado"){
                this.showBrands();
                //console.log("si");
                //this.svcToast("Seleciona una marca", "top");
            }
        });
        this.svcToast("Seleciona " + this.labelService, "bottom");
        this.serviceIsSelected.emit(this.selectedService);
        this.mapZoom = 11;
    }

    onStarClass(items: any, index: number, e: any) {
        for (let i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates",  e);
    }

    showDetail(supplierData, event) {
        let popover = this.popCtrl.create(SupplierDetailPage, supplierData);
        popover.present({
          ev: event,
        });
    }

    ngOnInit() {
        this.svcToast("Selecciona un servicio", "bottom");
    }

    showBrands() {
        let alert = this.alertCtrl.create();
        alert.setTitle("Selecciona una marca");
        alert.addInput({
          type: "checkbox",
          label: "Audi",
          value: "audi",
          checked: true,
        });

        alert.addInput({
          type: "checkbox",
          label: "Bmw",
          value: "bmw",
        });

        alert.addButton("Cancel");
        alert.addButton({
          text: "Ok",
          handler: data => {
            console.log("Checkbox data:", data);
            this.svcToast("Seleciona " + this.labelService, "bottom");
          },
        });
        alert.present();
      }

}