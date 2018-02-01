import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";


@IonicPage()
@Component({
  selector: "page-customer-user-detail",
  templateUrl: "customer-user-detail.html",
})
export class CustomerUserDetailPage {

  userData: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    this.userData = this.navParams.data.customer;
    console.log(this.userData);
  }
  closeView() {
    this.viewCtrl.dismiss();
  }

  makeACall(phone) {
    this.callNumber.callNumber(phone, true)
    .then(() => console.log("Launched dialer!"))
    .catch(() => console.log("Error launching dialer"));
  }



}
