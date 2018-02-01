import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProviderProposalPage } from './provider-proposal';

@NgModule({
  declarations: [
    ProviderProposalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProviderProposalPage),
  ],
})
export class ProviderProposalPageModule {}
