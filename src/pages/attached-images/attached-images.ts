import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { PhotoViewer } from "@ionic-native/photo-viewer";

@IonicPage()
@Component({
  selector: "page-attached-images",
  templateUrl: "attached-images.html",
  providers: [PhotoViewer],
})

export class AttachedImagesPage {
  attchImgs: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public vwCtrl: ViewController,
    public pVwr: PhotoViewer) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AttachedImagesPage");
  }

  ngOnInit() {
    this.attchImgs = this.navParams.data;
    console.log(this.attchImgs);
  }

  closeView() {
    this.vwCtrl.dismiss();
  }

  displayImage(image) {
    this.pVwr.show(image);
  }

}
