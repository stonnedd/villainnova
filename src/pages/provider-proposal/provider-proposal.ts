import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";


@IonicPage()
@Component({
  selector: "page-provider-proposal",
  templateUrl: "provider-proposal.html",
})
export class ProviderProposalPage {

  proposalForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    ) {
      this.proposalForm = formBuilder.group({
        "price": ["", Validators.compose([Validators.required, isNumber])],
        "time": ["", Validators.compose([Validators.required, Validators.minLength(4)])],
        "comments": [""],
      });
      function isNumber(c: FormControl) {
        return c.value > 0 ? null : {valid: false};
      }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProviderProposalPage");
  }

  closeView() {
    this.viewCtrl.dismiss();
  }

}
