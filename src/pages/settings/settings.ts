import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  distance: number;
  statusTg1: boolean= false; 
  tg1String: string= 'off';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public events: Events,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    console.log(this.navParams.data.distance);
    this.distance = this.navParams.data.distance;
  }

  updateDistance(){
    this.events.publish("provDist", this.distance);
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
