import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProfilePage } from "./profile";
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    SpinnerModule,
  ],
})
export class ProfilePageModule {}
