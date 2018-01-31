import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestProviderDetailPage } from './request-provider-detail';

@NgModule({
  declarations: [
    RequestProviderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestProviderDetailPage),
  ],
})
export class RequestProviderDetailPageModule {}
