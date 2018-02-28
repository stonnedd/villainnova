import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSupplierPage } from './add-supplier';
import { SpinnerModule } from "../../components/spinner/spinner.module";


@NgModule({
  declarations: [
    AddSupplierPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSupplierPage),
    SpinnerModule,
  ],
})
export class AddSupplierPageModule {}
