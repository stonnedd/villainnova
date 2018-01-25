import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttachedImagesPage } from './attached-images';

@NgModule({
  declarations: [
    AttachedImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(AttachedImagesPage),
  ],
})
export class AttachedImagesPageModule {}
