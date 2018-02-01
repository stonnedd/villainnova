import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderRequestsPage } from './provider-requests';

@NgModule({
  declarations: [
    ProviderRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderRequestsPage),
  ],
})
export class ProviderRequestsPageModule {}
