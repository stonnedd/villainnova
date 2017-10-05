import { NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleCardLayout3 } from '../../components/list-view/google-card/layout-3/google-card-layout-3';

@NgModule({
  declarations: [
    HomePage,
    GoogleCardLayout3
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
  //ElasticHeader
  ]
  
})
export class HomePageModule {

  
}


