import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AutoservicePage } from "./autoservice";
import { MapsLayout1} from "../../components/maps/layout-1/maps-layout-1";
import { SpinnerModule } from "../../components/spinner/spinner.module";
import { AgmCoreModule } from "angular2-google-maps/core";
import { ElasticHeader} from "../../components/parallax/elastic-header";
import { AutoserviceService} from "../../service/autoservice-service";
import { OrderByPipe } from "../../utils/orderBy";

@NgModule({
  declarations: [
    AutoservicePage,
    MapsLayout1,
    ElasticHeader,
    OrderByPipe,
  ],
  imports: [
    IonicPageModule.forChild(AutoservicePage),
    SpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyABWUtTglN8YGqcYI1zyjeRdOJx5r3TrZU",
    }),
  ],
  exports: [
   ElasticHeader,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})


export class AutoservicePageModule {}
