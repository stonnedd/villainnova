import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestDetailPage } from './request-detail';
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    RequestDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestDetailPage),
    SpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RequestDetailPageModule {}
