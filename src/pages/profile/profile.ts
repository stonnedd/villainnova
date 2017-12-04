import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProfileService } from "../../service/profile-service";
import { Settings } from "../../providers/settings/settings";
import { ShowToaster } from "../../utils/toaster";
import { TranslateService } from "@ngx-translate/core";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html",
  providers: [ProfileService, ShowToaster],
})

export class ProfilePage {
  private loginErrorString: string;
  public userId: string;
  user: any = {};
  cardItems: any[];
  title: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public profileSvc: ProfileService,
    public settings: Settings,
    public showToaster: ShowToaster,
    public translateService: TranslateService) {
    this.translateService.get("LOGIN_ERROR").subscribe((value) => {
      this.loginErrorString = value;
    });

    this.title = "Mi perfil";
    this.cardItems = [
      {
        user: {
          avatar: "assets/img/marty-avatar.png",
          name: "Marty McFly",
        },
        date: "November 5, 1955",
        image: "assets/img/advance-card-bttf.png",
        content: "Aquí van los datos del usuario y vehiculo.",
      },
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfilePage");
  }

  ngOnInit() {
    this.settings.settingsObservable.subscribe(
      value => {
          console.log("storage:", value);
          this.profileSvc.getUserData(value.id).subscribe(
            userData => {console.log(userData),
              this.loadUserData(userData[0]);
            });
      }, (err) => {
        this.showToaster.reveal(this.loginErrorString, "top", 3000);
    });
  }

  loadUserData (userData) {
    this.user.name = userData.name;
    this.user.phone = userData.phone;
    this.user.email = userData.email;
    this.user.profile = userData.profile;
  }

}
