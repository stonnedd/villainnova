import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator";

@IonicPage()
@Component({
  selector: "page-supplier-detail",
  templateUrl: "supplier-detail.html",
})
export class SupplierDetailPage {
  data: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private callNumber: CallNumber,
    private lchNav: LaunchNavigator,
  ) {  }

  ngOnInit() {
    this.data = this.navParams.data;
  }

  close() {
    this.viewCtrl.dismiss();
  }
  onRatingChange(event) {
    console.log(JSON.stringify(event));
  }

  makeACall(phone) {
    this.callNumber.callNumber(phone, true)
    .then(() => console.log("Launched dialer!"))
    .catch(() => console.log("Error launching dialer"));
  }

  navigate(destination) {
    let options: LaunchNavigatorOptions = {
      start: "pachuca, MX",
    };

    this.lchNav.navigate(destination, options)
        .then(
            success => alert("Launched navigator"),
            error => alert("Error launching navigator: " + error),
    );
  }


}
