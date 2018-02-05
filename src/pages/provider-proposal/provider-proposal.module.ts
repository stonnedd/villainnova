import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProviderProposalPage } from "./provider-proposal";
import { SpinnerModule } from "../../components/spinner/spinner.module";

@NgModule({
  declarations: [
    ProviderProposalPage,
  ],
  imports: [
    SpinnerModule,
    IonicPageModule.forChild(ProviderProposalPage),
  ],
})
export class ProviderProposalPageModule {}
