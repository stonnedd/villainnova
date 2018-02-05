import { Component } from "@angular/core";
import { App, IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { ApiService } from "../../service/api-service";
import { Constants } from "../../utils/constants";
import { ShowToaster } from "../../utils/toaster";
import { ProfilePage} from "../profile/profile";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";


@IonicPage()
@Component({
  selector: "page-provider-proposal",
  templateUrl: "provider-proposal.html",
})
export class ProviderProposalPage {
  spinner: boolean = false;
  proposalForm: FormGroup;
  rqstId: number;
  params: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public apiSvc: ApiService,
    public shwToaster: ShowToaster,
    public appCtrl: App,
    ) {
      this.proposalForm = formBuilder.group({
        "price": ["", Validators.compose([Validators.required, isNumber])],
        "time": ["", Validators.compose([Validators.required, Validators.minLength(4)])],
        "comment": [""],
      });
      function isNumber(c: FormControl) {
        return c.value > 0 ? null : {valid: false};
      }
      this.params.data = {"icon": Constants.SPINNER};

  }

  ionViewDidLoad() {
    console.log("QUIERO:::", this.navParams.data.id);
  }

  closeView() {
    this.viewCtrl.dismiss();
  }

  onSubmit (proposal: any) {
    this.spinner = true;
    let request: any = {};
    request.status = 1;
    request.p_status = 1;
    proposal.p_status = 1;
    proposal.request_id = this.navParams.data.id;
    this.apiSvc.postService(Constants.CREATE_PROPOSAL, JSON.stringify({proposal})).subscribe(
      resp => {
        console.log(resp);
        this.apiSvc.putService(Constants.UPDATE_REQUEST + proposal.request_id, JSON.stringify({request})).subscribe(
          () => {
            this.shwToaster.reveal("tu propuesta se envió con éxito", "middle", 2000);
            this.viewCtrl.dismiss();
            this.spinner = false;
            this.appCtrl.getRootNav().push(ProfilePage);
          },
          err => {
            this.shwToaster.reveal("Ha ocurrido un error" + err, "bottom", 2000);
            this.viewCtrl.dismiss();
            this.spinner = false;
          },
        );
      }, err => {
        this.shwToaster.reveal("Ha ocurrido un error" + err, "bottom", 2000);
        this.viewCtrl.dismiss();
        this.spinner = false;
    });
  }

}
