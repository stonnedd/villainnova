import { Constants} from "../../utils/constants";
import { AutoserviceService } from "../../service/autoservice-service";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, App } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ShowToaster } from "../../utils/toaster";
import { ImageTransfer } from "../../service/image-transfer";
import { ApiService} from "../../service/api-service";
import { Settings } from "../../providers/settings/settings";
import { ProfilePage } from "../../pages/profile/profile";
import { TSMap } from "typescript-map";
import { MainPage } from "../pages";
import { UserRequestsPage} from "../user-requests/user-requests"; 
import { FormGroup, ReactiveFormsModule, FormControl,
  FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-request",
  templateUrl: "request.html",
  providers: [AutoserviceService, ImageTransfer],
})

export class RequestPage {
  @ViewChild("fileInput") fileInput;
  distance: number = 3;
  fetchedLng: number = null;
  fetchedLat: number = null;
  requestForm: FormGroup;
  broadcast: boolean = false;
  slctdProviders: any= [];
  user_id: number;
  picCase: number = 1;
  requestParams: any = [];
  spinner: boolean = false;
  params: any= {};
  mainServices: any = [];
  services: any = [];
  listProviders: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tstCtrl: ShowToaster,
    public fBuilder: FormBuilder,
    public camera: Camera,
    public autoservice: AutoserviceService,
    public imageTransfer: ImageTransfer,
    public settings: Settings,
    public apiSvc: ApiService,
    public vwCtrl: ViewController,
    public appCtrl: App,
  ) {

    this.requestForm = fBuilder.group({
      "service": ["", Validators.compose([Validators.required])],
      "vehicle": [""],
      "comment": ["", Validators.compose([Validators.required])],
      "providers": [""],
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
    if (this.navParams.data.service !== undefined) {
      this.broadcast = false;
      this.slctdProviders[0] = this.navParams.data;
      this.requestForm.controls["service"].setValue(this.slctdProviders[0].service);
    }else {
      this.broadcast = true;
      this.spinner = true;
      this.fetchMainServices();
    }
  }

  providerSelected(provider) {
    console.log(provider);
  }

  svcSelected(service) {
    console.log("distancia", this.distance);
    this.spinner = true;
    this.autoservice.getPosition().then(
      coords => {
        this.fetchedLat = coords.coords.latitude;
        this.fetchedLng = coords.coords.longitude;
        if (service) {
          let data = {
            "service": service ,
            "distance": this.distance,
            "lat": this.fetchedLat,
            "lng": this.fetchedLng,
            "limit": 5,
          };
          console.log("Seleccionaste:::", service);
          this.apiSvc.postService(Constants.PROVIDERS_DISTANCE, JSON.stringify({data})).subscribe(
            listOfProviders => {
              this.listProviders = listOfProviders;
              console.log("LISTA DE SERVICIOS:", listOfProviders);
              this.spinner = false;
            }, err => {
              this.spinner = false;
              this.tstCtrl.reveal("Ocurrio un error intentalo mas tarde", "bottom", 2000);
            },
          );
        }else {
          this.spinner = false;
        }
      },
    );
  }

  fetchServices() {
    this.autoservice.getServices().subscribe(
      services => {
        this.services = services;
        console.log("fetchedServ", this.services);
        this.spinner = false;
      },
      err => {
        console.log(err);
        this.spinner = false;
      },
    );
  }

  fetchMainServices() {
    this.autoservice.getMainServices().subscribe(
      mservices => {
        this.mainServices = mservices;
        console.log("fetchedMainServ", this.mainServices);
        this.fetchServices();
      },
      err => {
        console.log(err);
        this.spinner = false;
      },
    );
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
    if (!this.broadcast) {formData.providers = [this.slctdProviders[0].id]; }
    let completedCount: number = 0;
    let startedCount: number = 1;
    let images = this.imageTransfer.upholdImages(formData);
    formData.user_id = this.user_id;
    delete formData.pic1;
    delete formData.pic2;
    delete formData.pic3;
    let attachments = new TSMap <any, any> ();
    if (images !== null) {
      images.forEach( e => {
        this.apiSvc.postService(Constants.UPLOAD_ONE_IMG, this.imageTransfer.arrangeImage(e)).subscribe(
          imgUrl => {
            attachments.set("url_pic" + (completedCount + 1), imgUrl);
            completedCount++;
            console.log("Completado  " + completedCount + " de " + images.length );
            if (completedCount === images.length) {
              formData.attachments = attachments.toJSON();
              console.log("REQUEST DATA:", formData);
              this.sendRequest(formData);
            }

          }, err => {
            this.tstCtrl.reveal("ha ocurrido un error", "bottom", 2000);
            this.spinner = false;
          },
        );
      });
    }else {
      formData.attachments = {url_pic1: "", url_pic2: "", url_pic3: ""};
      this.sendRequest(formData);
    }
  }

  sendRequest(formData) {
    this.apiSvc.postService(Constants.CREATE_MULT_REQUEST, this.arrangeData(formData)).subscribe(
      respRequest => {
      console.log(respRequest);
      this.tstCtrl.reveal("Tu solicitud ha sido enviada con éxito", "middle", 2500);
      this.close();
      this.spinner = false;
      this.appCtrl.getRootNav().setRoot(UserRequestsPage);
      }, err => {
        console.log(err);
        this.tstCtrl.reveal("Se ha producido un error:" + err, "middle", 2500);
        this.spinner = false;
      },
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
