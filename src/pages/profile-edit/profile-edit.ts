import { Component } from '@angular/core';
import { Constants } from "../../utils/constants";
import { IonicPage, NavController, NavParams, ViewController,App } from 'ionic-angular';
import { ApiService } from "../../service/api-service";
import { ShowToaster } from "../../utils/toaster";
import { ProfilePage } from "../profile/profile";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {
  userData: any;
  spinner: boolean = false;
  params:  any= { };
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public fBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public apiSvc: ApiService,
    public tstCTrl: ShowToaster,
    public appCtrl: App
  ) {
    this.params.data = {"icon": Constants.SPINNER};
    this.myForm = fBuilder.group({
    "name": ["", Validators.compose([Validators.required, Validators.minLength(8)])],
    "phone": ["", Validators.compose([Validators.required, Validators.minLength(10)])],
    "email": ["", Validators.compose([Validators.required, Validators.email])],
    });
  }


  ionViewDidLoad() {
    this.userData = this.navParams.data;
    this.loadParams(this.userData);
    console.log(this.userData);
  }

  loadParams(uData){
    this.myForm.controls["name"].setValue(uData.name);    
    this.myForm.controls["phone"].setValue(uData.phone);    
    this.myForm.controls["email"].setValue(uData.email);    
  }

  closeView(){
    this.viewCtrl.dismiss();
  }

  onSubmit(user){
    this.spinner = true;
    this.apiSvc.putService(Constants.UPDATE_USER + this.userData.id, JSON.stringify({user})).subscribe(
      response=>{
        console.log(response);
        this.spinner = false;
        if (response !== null && response !== undefined){
          this.tstCTrl.reveal("Tus datos se han actualizado con éxito", "bottom", 2500);
          this.viewCtrl.dismiss();
          this.appCtrl.getRootNav().setRoot(ProfilePage);
        }
      },err =>{
        this.tstCTrl.reveal("Ha ocurrido un error, intentalo más tarde", "bottom", 2500);
        this.spinner = false;
      }
    );
  }

}
