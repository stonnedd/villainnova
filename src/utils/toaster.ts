import { ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class ShowToaster {

constructor(private toastCtrl: ToastController) { }

reveal( note: string, pos: string, time) {
    const toast = this.toastCtrl.create({
        message: note,
        duration: time,
        position: pos,
        showCloseButton: false,
        closeButtonText: "ok",
    });
    toast.present();
  }
}