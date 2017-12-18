import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSupplierPage } from './add-supplier';

@NgModule({
  declarations: [
    AddSupplierPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSupplierPage),
  ],
})
export class AddSupplierPageModule {}
