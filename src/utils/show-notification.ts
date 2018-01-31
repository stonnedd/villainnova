import { Component, Injectable } from "@angular/core";
import { PhonegapLocalNotification } from "@ionic-native/phonegap-local-notification";

@Component({

})
@Injectable()
export class ShowNotification {
    constructor (private localNotification: PhonegapLocalNotification) {}
    reveal(tag: string, message: string) {
        this.localNotification.requestPermission().then(
            (permission) => {
                if (permission === "granted") {
                    this.localNotification.create("Autocar", {
                    tag: tag,
                    body: message,
                    icon: "assets/images/logo/main-logo.png",
                    });
                }
            },
            err => { alert(err); },
        );
    }

}