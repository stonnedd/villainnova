import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator";
import { RequestPage } from "../request/request";
import { AutoserviceService} from "../../service/autoservice-service";
import { ApiService} from "../../service/api-service";
import { Api } from "../../providers/api/api";
import { Constants } from "../../utils/constants";
import { Settings} from "../../providers/settings/settings";
import { ShowToaster} from "../../utils/toaster"

@IonicPage()
@Component({
  selector: "page-supplier-detail",
  templateUrl: "supplier-detail.html",
  providers: [AutoserviceService],
})
export class SupplierDetailPage {
  data: any;
  isOwner :boolean = false;
  spinner: boolean = false;
  params: any= {};
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private callNumber: CallNumber,
    private lchNav: LaunchNavigator,
    public autoSvc: AutoserviceService,
    public apiSvc: ApiService,
    public settings: Settings,
    public shwToaster: ShowToaster,
    
  ) {  this.params.data = {"icon": Constants.SPINNER};}

  ngOnInit() {
    this.data = this.navParams.data;
    console.log("on INIT:::", this.data);
  }

  close() {
    this.viewCtrl.dismiss();
  }
  onRatingChange(event) {
    console.log(JSON.stringify(event));
  }

  ionViewDidLoad(){
    this.settings.settingsObservable.subscribe(
      userData=>{
        this.apiSvc.getService(Constants.USERS_PROVIDERS_IDS + userData.id ).subscribe(
          userSerivices =>{
          this.isOwner = this.isTheOwner(userSerivices);
          }
        );
      }
    );
  }

  isTheOwner(services) {
    for(var i=0; i < services.length; ++i ){
      if(services[i].provider_id === this.data.id){
        return true; 
      }  
    }
    return false;
  }

  makeACall(phone) {
    this.callNumber.callNumber(phone, true)
    .then(() => console.log("Launched dialer!"))
    .catch(() => console.log("Error launching dialer"));
  }

  request() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(RequestPage, this.data);
  }

  navigate(destination) {
    if(destination[0]!==null && destination[0]!==null && destination[0]!==""){
      this.spinner=true;
      this.autoSvc.getPosition().then(pos => {
        let options: LaunchNavigatorOptions = {
          start: [pos.coords.latitude, pos.coords.longitude],
        };
        this.lchNav.navigate(destination, options).then(
          success => {
            this.spinner=false;
          },
          error =>{
            this.spinner=false;
            this.shwToaster.reveal(
              "No fue posible iniciar el navegador...",
              "middle",
              2000
            );
          });
      });
    }else{
      this.shwToaster.reveal(
        "Esta solicitud no cuenta con ubicación...",
        "middle",
        2000
      );
    }
  }


}
