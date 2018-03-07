import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileEditPage } from './profile-edit';
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    ProfileEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileEditPage),
    SpinnerModule,
  ],
})
export class ProfileEditPageModule {}
