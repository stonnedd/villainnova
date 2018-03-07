import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderRequestsPage } from './provider-requests';
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    ProviderRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderRequestsPage),
    SpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProviderRequestsPageModule {}
