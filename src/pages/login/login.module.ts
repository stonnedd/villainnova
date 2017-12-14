import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { IonicPageModule } from "ionic-angular";
import { SpinnerModule } from "../../components/spinner/spinner.module";
import { LoginPage } from "./login";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild(),
    SpinnerModule,
  ],
  exports: [
    LoginPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule { }
