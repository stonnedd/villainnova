import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerUserDetailPage } from './customer-user-detail';

@NgModule({
  declarations: [
    CustomerUserDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerUserDetailPage),
  ],
})
export class CustomerUserDetailPageModule {}
