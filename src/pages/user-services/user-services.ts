import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, PopoverController, LoadingController } from "ionic-angular";
import { ProfileService } from "../../service/profile-service";
import { Settings } from "../../providers/settings/settings";
import { ShowToaster } from "../../utils/toaster";
import { TranslateService } from "@ngx-translate/core";
import { Content, FabButton } from "ionic-angular";
import { AddSupplierPage } from "../../pages/add-supplier/add-supplier";
import { SupplierMapping} from "../../utils/supplier-mapping";
import { SupplierDetailPage} from "../../pages/supplier-detail/supplier-detail";
import { Constants} from "../../utils/constants";
import { ApiService} from "../../service/api-service"; 
@IonicPage()
@Component({
  selector: "page-user-services",
  templateUrl: "user-services.html",
  providers: [ProfileService, ShowToaster],

})
export class UserServicesPage {
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  private loginErrorString: string;
  public userId: string;
  userServices = [];
  user: any = {};
  params: any = {};
  spinner: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profileSvc: ProfileService,
    public settings: Settings,
    public showToaster: ShowToaster,
    public translateService: TranslateService,
    public popCtrl: PopoverController,
    public ldingCtrl: LoadingController,
    public apiSvc: ApiService,
    ) {
      this.translateService.get("LOGIN_ERROR").subscribe((value) => {
        this.loginErrorString = value;
      });
    this.params.data = {"icon": Constants.SPINNER};
  }

  ionViewDidLoad() {
    this.spinner = true;
    this.user = this.navParams.data;
    if (this.user !== undefined && this.user !== null && this.user !== {}) {
      this.getData();
    }else {
      this.spinner = false;
      this.showToaster.reveal("cargando...", "bottom", 300);
      this.ionViewDidLoad();
    }
  }

  doRefresh(refresher) {
    this.profileSvc.getUserServices(this.user.id).subscribe(
      userServices => {
        console.log("refreshing");
        this.userServices = userServices;
        refresher.complete();
      },
    );
  }

  ngOnInit() {
  }

  getData() {
    this.apiSvc.getService(Constants.USERS_PROVIDERS + this.user.id).subscribe(
      usrData => {
        console.log("ABCDE::", usrData.user[0].providers);
        this.loadUserData(usrData.user[0]);
        this.userServices = usrData.user[0].providers;
        this.spinner = false;
    }, err => {
        this.showToaster.reveal("cargando...", "bottom", 300);
        this.spinner = false;
        this.ionViewDidLoad();
    });
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((d) => {
        this.fabButton.setElementClass("fab-button-out", d.directionY === "down");
    });
  }

  addProvider(event) {
    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: "50",
          };
        },
      },
    };
    this.user.isNewProvider = true;
    this.user.provider = 0;
    let popover = this.popCtrl.create(AddSupplierPage, this.user);
    popover.present({ev : ev});
  }

  loadUserData (userData) {
    this.user.name = userData.name;
    this.user.phone = userData.phone;
    this.user.email = userData.email;
    this.user.profile = userData.profile;
  }

  showDetail(supplierData, event) {
    let popover = this.popCtrl.create(SupplierDetailPage, supplierData);
    popover.present({
      ev: "onMarker",
    });
  }

  editDetail(supplierData, event) {
    this.user.provider = supplierData;
    this.user.isNewProvider = false;
    let popover = this.popCtrl.create(AddSupplierPage, this.user);
    popover.present({ev : ""});
  }
}






