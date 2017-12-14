import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LoginSupplierPage } from "./login-supplier";
import { SpinnerModule } from "../../components/spinner/spinner.module";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  declarations: [
    LoginSupplierPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSupplierPage),
    TranslateModule.forChild(),
    SpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginSupplierPageModule {}
