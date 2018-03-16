import { Component, Injectable } from "@angular/core";
import { ShowToaster} from "../utils/toaster";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ApiService }from "../service/api-service";
import { BackgroundMode } from "@ionic-native/background-mode";
import {Constants} from "./constants";

// @Component({
// providers: [LocalNotifications],
// })
@Injectable()
export class ShowNotification {
    
    constructor (
        public shwToaster: ShowToaster, 
        private localNotifications: LocalNotifications,
        public apiSvc: ApiService,
        private backgroundMode: BackgroundMode,
        
    ) {}
    

    show(id: number, message: string, badge: number){
        this.localNotifications.schedule({
            id: id,
            text: message,
            badge: badge,
            icon: "assets/images/logo/main-logo",
          });
    }

    startNotifications(userId){
        console.log("se inicia el notificador con el id;=>", userId);
        this.backgroundMode.enable();
        setInterval(data => {
          if(userId !== null && userId !== undefined && userId !== ""){
            this.apiSvc.getService(Constants.GET_NOTIFICATIONS + userId).subscribe(
              notify => {
                if (notify.proposals !== 0 ){
                  this.show(1, "Tienes " + notify.proposals + " propuestas pendientes", notify.proposals);
    
                }
                if (notify.p_requests !== 0 ){
                  this.show(2, "Tienes " + notify.p_requests + " solicitudes pendientes", notify.proposals);
                }
    
              }, err =>{
                // this.shwTostr.reveal("Error de conexión: " + err, "bottom", 3000)
              }
            );
          }
        }, Constants.NOTIFY_DELAY);
      }

}