import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { IonicPageModule } from "ionic-angular";
import { WelcomePage } from "./welcome";
import { SpinnerModule } from "../../components/spinner/spinner.module";


@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
    TranslateModule.forChild(),
    SpinnerModule,
  ],
  exports: [
    WelcomePage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomePageModule { }
