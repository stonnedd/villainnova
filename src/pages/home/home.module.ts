import { NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage,
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


