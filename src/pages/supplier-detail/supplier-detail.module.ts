import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplierDetailPage } from './supplier-detail';
import { Ionic2RatingModule } from 'ionic2-rating';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
@NgModule({
  declarations: [
    SupplierDetailPage,
    
  ],
  imports: [
    IonicPageModule.forChild(SupplierDetailPage),
    Ionic2RatingModule,

  ],
  providers:[
    CallNumber,
    LaunchNavigator,
  ]
})
export class SupplierDetailPageModule {}
