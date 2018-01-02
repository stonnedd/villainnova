import { AutoserviceService } from "../../service/autoservice-service";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ShowToaster } from "../../utils/toaster";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";
//import { combineAll } from "rxjs/operator/combineAll";
import {ImageTransfer } from "../../service/image-transfer";
@IonicPage()
@Component({
  selector: "page-request",
  templateUrl: "request.html",
  providers: [ShowToaster, AutoserviceService, ImageTransfer],
})

export class RequestPage {
  @ViewChild("fileInput") fileInput;
  fetchedLng: number = null;
  fetchedLat: number = null;
  requestForm: FormGroup;
  broadcast: boolean = false;
  slctdProvider: any;
  pictures: any[];
  picCase: number = 1;
  requestParams: any = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tstCtrl: ShowToaster,
              public fBuilder: FormBuilder,
              public camera: Camera,
              public autoservice: AutoserviceService,
              public imageTransfer: ImageTransfer) {

    this.requestForm = fBuilder.group({
      "service": ["", Validators.compose([Validators.required])],
      "vehicle": [""],
      "comment": ["", Validators.compose([Validators.required])],
      "lat": [""],
      "lng": [""],
      pic1: [""],
      pic2: [""],
      pic3: [""],
    });

  }

  getProfileImageStyle(pic) {
    if (pic === 1) {
      return "url(" + this.requestForm.controls["pic1"].value + ")";
    }
    if (pic === 2) {
      console.log("profile caso 2");
      return "url(" + this.requestForm.controls["pic2"].value + ")";
    }
    if (pic === 3) {
      console.log("profile caso 3");
      return "url(" + this.requestForm.controls["pic3"].value + ")";
    }
  }

  getPicture(picNumber) {
    console.log("get case", picNumber);
    this.picCase = picNumber;
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    if (Camera["installed"]()) {
      this.camera.getPicture(options).then((imageData) => {
        if (this.picCase === 1) {
          this.requestForm.patchValue({ "pic1" : "data:image/jpg;base64," + imageData});
        }
        if (this.picCase === 2) {
          this.requestForm.patchValue({ "pic2" : "data:image/jpg;base64," + imageData});
        }
        if (this.picCase === 3) {
          this.requestForm.patchValue({ "pic3" : "data:image/jpg;base64," + imageData});
        }
        }, err => {
          alert(err.JSON());
        });
    }else {
      this.fileInput.nativeElement.click();
    }
  }
 
  ngOnInit() {
    if (this.navParams.data) {
      this.broadcast = false;
      this.slctdProvider = this.navParams.data;
      console.log(this.slctdProvider.service);
      this.requestForm.controls["service"].setValue(this.slctdProvider.service);
      console.log("selectedProvider", this.slctdProvider);
    }
  }

  processWebImage(event) {
    // let name = JSON.stringify(picture);
    // console.log("name:::", name );
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      if (this.picCase === 1) {
        this.requestForm.patchValue({ "pic1" : imageData });
        console.log("process caso 1");
      }
      if (this.picCase === 2) {
        this.requestForm.patchValue({ "pic2" : imageData });
        console.log("process caso 2");
      }
      if (this.picCase === 3) {
        this.requestForm.patchValue({ "pic3" : imageData });
        console.log("process caso 3");
      }
     }, err => {
       alert(err.JSON());
     };
    reader.readAsDataURL(event.target.files[0]);
  }
  getMyPos() {
    this.autoservice.getPosition().then(
      coords => {
        this.fetchedLat = coords.coords.latitude;
        this.fetchedLng = coords.coords.longitude;
        console.log("coords:", this.fetchedLat, this.fetchedLng);
      },
    );
  }

  onSubmit(formData: any = {}) {
    console.log("submit");
    this.requestParams.provider_id = this.slctdProvider.id;
    console.log(formData);
    this.imageTransfer.upholdImages(formData);
    // do the transfer files
    // do post request
    // do image model separete phoenix

  }
  

}
