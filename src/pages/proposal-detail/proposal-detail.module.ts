import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProposalDetailPage } from "./proposal-detail";
import { Ionic2RatingModule } from "ionic2-rating";
import { SpinnerModule } from "../../components/spinner/spinner.module";


@NgModule({
  declarations: [
    ProposalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProposalDetailPage),
    Ionic2RatingModule,
    SpinnerModule,
  ],
})
export class ProposalDetailPageModule {}
