import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  distance: number=5;
  statusTg1: boolean= false; 
  tg1String: string= 'off';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

   tog1Function(){
     console.log(this.statusTg1);
     if(this.statusTg1==false){
       this.tg1String='off';
     }else{
       this.tg1String='on'
     }
   } 

  close(){
    this.viewCtrl.dismiss();
  }

}
