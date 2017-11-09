import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSupplierPage } from './login-supplier';

@NgModule({
  declarations: [
    LoginSupplierPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSupplierPage),
  ],
})
export class LoginSupplierPageModule {}
