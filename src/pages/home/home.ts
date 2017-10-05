import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AutoservicePage} from '../autoservice/autoservice'
import {AutoservicePageModule} from '../autoservice/autoservice.module'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  params: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data={
      items: [
        {
          id: 1,
          image: 'assets/images/background/sm.png',
          title: 'Asistencia',
          subtitle: '',
          component: 'AutoservicePage'
        },
        {
          id: 2,
          image: 'assets/images/background/ga.png',
          title: 'Gasolineras',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          component:'HomePage'
        },
        {
          id: 3,
          image: 'assets/images/background/gr.png',
          title: 'Grúas',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          component: ''
        },
        {
          id: 4,
          image: 'assets/images/background/pr.png',
          title: 'Productos',
          subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          component:''
        },
      ]
    }
    this.params.events={
      'onItemClick': function(item: any) {
        console.log(item);
        navCtrl.push(item.component);
      },
      'onExplore': function(item: any) {
        console.log("Explore");
      },
      'onShare': function(item: any) {
        console.log("Share");
      },
      'onLike': function(item: any) {
        console.log("onLike");
      },
      'onFavorite': function(item: any) {
          console.log("onFavorite");
      }/*,
      'onFab': function(item: any) {
        console.log("Fab");
      }*/
    };
    
  }
  
  goPage(item){
    this.navCtrl.push(item.component)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


}
