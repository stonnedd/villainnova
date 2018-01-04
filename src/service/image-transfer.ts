import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer";
import { Injectable, Inject } from "@angular/core";
import { File } from "@ionic-native/file";
import { Component, ViewChild } from "@angular/core";

// @Component({
//     providers: [FileTransfer],
// })

@Injectable()


export class ImageTransfer {
   
    constructor(private transfer: FileTransfer, private file: File) {}

    upholdImages(formData: any= {}): any[] {
        let images: any = [];
        let counter: number = 0;
        console.log(formData);
        if (formData.pic1 !== "") {
            images[counter] = formData.pic1;
            counter++;
        }
        if (formData.pic2 !== "") {
            images[counter] = formData.pic2;
            counter++;
        }
        if (formData.pic3 !== "") {
            images[counter] = formData.pic3;
            counter++;
        }
        if (counter === 0) {
            return null;
        }else {
            return images;
        }
    }

    uploadImage(image, uploadUrl, pic_number) {
        const fileTransfer: FileTransferObject = this.transfer.create();
        let fName = "pic" + String(pic_number);
        let options: FileUploadOptions = {
            fileKey: "request",
            fileName: fName,
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: { },
        };
        return fileTransfer.upload(image, uploadUrl, options);
    }


}