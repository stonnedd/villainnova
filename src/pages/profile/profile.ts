import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, PopoverController } from "ionic-angular";
import { ProfileService } from "../../service/profile-service";
import { Settings } from "../../providers/settings/settings";
import { ShowToaster } from "../../utils/toaster";
import { TranslateService } from "@ngx-translate/core";
import { Content, FabButton } from "ionic-angular";
import { AddSupplierPage } from "../../pages/add-supplier/add-supplier";
import { SupplierMapping} from "../../utils/supplier-mapping";
import { SupplierDetailPage} from "../../pages/supplier-detail/supplier-detail";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html",
  providers: [ProfileService, ShowToaster],
})

export class ProfilePage {
  
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  private loginErrorString: string;
  public userId: string;
  userServices = [];
  user: any = {};
  title: string= "Mi perfil";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profileSvc: ProfileService,
    public settings: Settings,
    public showToaster: ShowToaster,
    public translateService: TranslateService,
    public popCtrl: PopoverController,
    ) {
    this.translateService.get("LOGIN_ERROR").subscribe((value) => {
      this.loginErrorString = value;
    });
  }

  doRefresh(refresher) {
    this.profileSvc.getUserServices(this.user.id).subscribe(
      userServices => {
         console.log("refreshing");
         this.userServices = userServices;
         refresher.complete();
      });
  }
  
  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }

  ngOnInit() {
    this.settings.settingsObservable.subscribe(
      value => {
          this.user.id = value.id;
          this.user.token = value.token;
          console.log("storage:", value);
          this.profileSvc.getUserData(this.user.id).subscribe(
            userData => {
              console.log("Datos de usuario", userData),
              this.loadUserData(userData[0]);
              this.profileSvc.getUserServices(this.user.id).subscribe(
                userServices => {
                   console.log(userServices);
                   this.userServices = userServices;
                });
            });
      }, (err) => {
        this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe((d) => {
        this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
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
