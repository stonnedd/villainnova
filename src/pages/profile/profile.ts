import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  cardItems: any[];
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title= "Mi perfil"
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Marty McFly'
        },
        date: 'November 5, 1955',
        image: 'assets/img/advance-card-bttf.png',
        content: 'Aquí van los datos del usuario y vehiculo.',
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
