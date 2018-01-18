import { Constants} from "../../utils/constants";
import { AutoserviceService } from "../../service/autoservice-service";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ShowToaster } from "../../utils/toaster";
import { ImageTransfer } from "../../service/image-transfer";
import { ApiService} from "../../service/api-service";
import { Settings } from "../../providers/settings/settings";
import { ProfilePage } from "../../pages/profile/profile";
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-request",
  templateUrl: "request.html",
  providers: [ShowToaster, AutoserviceService, ImageTransfer, ApiService],
})

export class RequestPage {
  @ViewChild("fileInput") fileInput;
  fetchedLng: number = null;
  fetchedLat: number = null;
  requestForm: FormGroup;
  broadcast: boolean = false;
  slctdProvider: any;
  user_id: number;
  picCase: number = 1;
  requestParams: any = [];
  spinner: boolean = false;
  params: any= {};
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tstCtrl: ShowToaster,
              public fBuilder: FormBuilder,
              public camera: Camera,
              public autoservice: AutoserviceService,
              public imageTransfer: ImageTransfer,
              public settings: Settings,
              public apiSvc: ApiService,
              public vwCtrl: ViewController) {

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
    this.params.data = {"icon": Constants.SPINNER};
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
          this.requestForm.patchValue({ "pic1" :  imageData});
        }
        if (this.picCase === 2) {
          this.requestForm.patchValue({ "pic2" : imageData});
        }
        if (this.picCase === 3) {
          this.requestForm.patchValue({ "pic3" : imageData});
        }
        }, err => {
          alert(err.JSON());
        });
    }else {
      this.fileInput.nativeElement.click();
    }
  }

  ngOnInit() {
    this.settings.settingsObservable.subscribe(
      data => { this.user_id = data.id; },
    );
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
      },
    );
  }

  onSubmit(formData: any = {}) {
    this.spinner = true;
    let completedCount: number = 1;
    let startedCount: number = 1
    console.log("En enviar request");
    formData.provider = this.slctdProvider.id;
    let rqstURL = Constants.CREATE_REQUEST + "/" + this.user_id + "/CMS/request";
    let images = this.imageTransfer.upholdImages(formData);
    delete formData.pic1;
    delete formData.pic2;
    delete formData.pic3;
    this.apiSvc.postService(rqstURL, this.arrangeData(formData)).subscribe(
      res => {
        console.log("res request", res);
        if (images !== null) {
          this.apiSvc.postService(Constants.CREATE_ATTACHMENT, this.dftAttachment(res.requests.id)).subscribe(
            attch => {
              console.log("numero de attach", attch.data.id);
              images.forEach( e => {
                this.apiSvc.postService(
                  this.imageTransfer.getImageURL(attch.data.id, startedCount),
                  this.imageTransfer.arrangeImage(e))
                 .subscribe(
                    (imgSave) => {
                      console.log("picture", completedCount, "complete of", images.length);
                      console.log("Resp IMG save:", imgSave );
                      if (images.length === completedCount) {
                        this.spinner = false;
                        this.tstCtrl.reveal("tu solicitud ha sido enviado con éxito", "middle", 2500);
                        this.navCtrl.push(ProfilePage);
                        this.close();
                      }
                      completedCount++;
                    },
                  err => {console.log(err);
                    this.tstCtrl.reveal(err.toString, "bottom", 3500);
                    this.spinner = false;
                  });
                  startedCount++;
              });
            });
        }else {
          this.apiSvc.postService(Constants.CREATE_ATTACHMENT, this.dftAttachment(res.requests.id)).subscribe(
            attch => {
              console.log("numero de attach", attch.data.id);
              this.spinner = false;
              this.tstCtrl.reveal("tu solicitud ha sido enviado con éxito", "middle", 2500);
              this.navCtrl.push(ProfilePage);
              this.close();
          }, err => {this.tstCtrl.reveal(err.toString, "bottom", 1500); this.spinner = false; });
        }
      }, err => {this.tstCtrl.reveal(err.toString, "bottom", 1500); this.spinner = false; },
    );
  }

  arrangeData(request) {
    return JSON.stringify({request});
  }
  dftAttachment(requestId) {
    let attachment = {url_pic1: "", url_pic2: "", url_pic3: "", request_id : requestId};
    return JSON.stringify({attachment});
  }
  close() {
    this.vwCtrl.dismiss();
  }
}
