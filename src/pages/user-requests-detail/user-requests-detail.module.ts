import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRequestsDetailPage } from './user-requests-detail';
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    UserRequestsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRequestsDetailPage),
    SpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserRequestsDetailPageModule {}
