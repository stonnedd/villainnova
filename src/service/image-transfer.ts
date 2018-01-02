import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { Injectable, Inject } from "@angular/core";

@Injectable()
export class ImageTransfer {
    images: any= [];
    counter: number = 0;
    constructor() {}

    upholdImages(formData: any= {}) {
        console.log(formData);
        this.counter = 0;
        formData.pic1 === "" ? console.log("empty") : this.addImage(formData.pic1);
        formData.pic2 === "" ? console.log("empty") : this.addImage(formData.pic2);
        formData.pic3 === "" ? console.log("empty") : this.addImage(formData.pic3);
        console.log("numero de imagenes:", this.counter);
        if (this.counter !== 0) {
            this.transferImages();
        }
    }

    transferImages() {  ///esto va en request aqui va solo para uno con reture antes del then
        this.images.forEach(element => {
            this.uploadFile(element);
            console.log("element:", element);
        });
//
        ///   ver com ohacer el promise desde el request

    }

    addImage(img: any) {
        this.images[this.counter] = img;
        this.counter++;
    }

    uploadFile(image: any) {
        let options: FileUploadOptions = {
          fileKey: "ionicfile",
          fileName: "ionicfile",
          chunkedMode: false,
          mimeType: "image/jpeg",
          headers: { },
        };
    }

}