webpackJsonp([13],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_autoservice_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toaster__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_image_transfer__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_api_service__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RequestPage = (function () {
    function RequestPage(navCtrl, navParams, tstCtrl, fBuilder, camera, autoservice, imageTransfer, settings, apiSvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tstCtrl = tstCtrl;
        this.fBuilder = fBuilder;
        this.camera = camera;
        this.autoservice = autoservice;
        this.imageTransfer = imageTransfer;
        this.settings = settings;
        this.apiSvc = apiSvc;
        this.fetchedLng = null;
        this.fetchedLat = null;
        this.broadcast = false;
        this.picCase = 1;
        this.requestParams = [];
        this.spinner = false;
        this.params = {};
        this.requestForm = fBuilder.group({
            "service": ["", __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required])],
            "vehicle": [""],
            "comment": ["", __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required])],
            "lat": [""],
            "lng": [""],
            pic1: [""],
            pic2: [""],
            pic3: [""],
        });
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_0__utils_constants__["a" /* Constants */].SPINNER };
    }
    RequestPage.prototype.getProfileImageStyle = function (pic) {
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
    };
    RequestPage.prototype.getPicture = function (picNumber) {
        var _this = this;
        console.log("get case", picNumber);
        this.picCase = picNumber;
        var options = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        if (__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]["installed"]()) {
            this.camera.getPicture(options).then(function (imageData) {
                if (_this.picCase === 1) {
                    _this.requestForm.patchValue({ "pic1": "data:image/jpg;base64," + imageData });
                }
                if (_this.picCase === 2) {
                    _this.requestForm.patchValue({ "pic2": "data:image/jpg;base64," + imageData });
                }
                if (_this.picCase === 3) {
                    _this.requestForm.patchValue({ "pic3": "data:image/jpg;base64," + imageData });
                }
            }, function (err) {
                alert(err.JSON());
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    RequestPage.prototype.ngOnInit = function () {
        var _this = this;
        this.settings.settingsObservable.subscribe(function (data) { _this.user_id = data.id; });
        if (this.navParams.data) {
            this.broadcast = false;
            this.slctdProvider = this.navParams.data;
            console.log(this.slctdProvider.service);
            this.requestForm.controls["service"].setValue(this.slctdProvider.service);
            console.log("selectedProvider", this.slctdProvider);
        }
    };
    RequestPage.prototype.processWebImage = function (event) {
        var _this = this;
        // let name = JSON.stringify(picture);
        // console.log("name:::", name );
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            if (_this.picCase === 1) {
                _this.requestForm.patchValue({ "pic1": imageData });
                console.log("process caso 1");
            }
            if (_this.picCase === 2) {
                _this.requestForm.patchValue({ "pic2": imageData });
                console.log("process caso 2");
            }
            if (_this.picCase === 3) {
                _this.requestForm.patchValue({ "pic3": imageData });
                console.log("process caso 3");
            }
        }, function (err) {
            alert(err.JSON());
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    RequestPage.prototype.getMyPos = function () {
        var _this = this;
        this.autoservice.getPosition().then(function (coords) {
            _this.fetchedLat = coords.coords.latitude;
            _this.fetchedLng = coords.coords.longitude;
        });
    };
    RequestPage.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData === void 0) { formData = {}; }
        console.log("submit");
        formData.provider = this.slctdProvider.id;
        var rqstURL = __WEBPACK_IMPORTED_MODULE_0__utils_constants__["a" /* Constants */].CREATE_REQUEST + "/" + this.user_id + "/CMS/request";
        console.log(rqstURL);
        var images = this.imageTransfer.upholdImages(formData);
        this.apiSvc.postService(rqstURL, this.arrangeData(formData)).subscribe(function (res) {
            // if (images !== null){
            //this.imageTransfer.uploadImage(images[0], "", 1);
            //}
            console.log("quiero el ID", res.requests.id);
        }, function (err) { _this.tstCtrl.reveal(err.toString, "bottom", 2500); });
    };
    RequestPage.prototype.arrangeData = function (request) {
        return JSON.stringify({ request: request });
    };
    return RequestPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])("fileInput"),
    __metadata("design:type", Object)
], RequestPage.prototype, "fileInput", void 0);
RequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: "page-request",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\request\request.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Cotizar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-card class="company-Name">\n\n    <h2>{{slctdProvider.company_name}}</h2>\n\n  </ion-card>\n\n\n\n  <ion-list class="login-List"> \n\n    <form id="requestForm" [formGroup]="requestForm" (ngSubmit)="onSubmit(requestForm.value)">    \n\n      \n\n      <ion-item  class="login-Class" *ngIf="broadcast" > \n\n        <ion-label for="service" style="color:rgb(146, 145, 145) !important" no-padding>Servicio</ion-label>\n\n          <ion-select id="service" [formControl]="requestForm.controls[\'service\']" \n\n          placeholder="Selecciona un servicio" \n\n          cancelText="Atras">\n\n            <ion-option *ngFor="let mainService of mainServices" [value]="mainService" no-padding>{{mainService}} </ion-option>\n\n            <ion-option *ngFor="let service of services" [value]="service" no-padding>{{service}} </ion-option>\n\n          </ion-select>\n\n      </ion-item> \n\n\n\n      <ion-item class="login-Class" *ngIf="!broadcast" >\n\n        <ion-label stacked for="service"></ion-label>\n\n        <ion-input type="text"  disabled="true" \n\n          id="service" [formControl]= "requestForm.controls[\'service\']"></ion-input>\n\n        <div *ngIf="!requestForm.controls[\'service\'].valid && requestForm.controls[\'service\'].touched"   \n\n          class="alert alert-danger"></div>\n\n      </ion-item>\n\n      \n\n      <ion-item class="login-Class">\n\n        <ion-label stacked for="comment"></ion-label>\n\n        <ion-input type="text"  placeholder="Describe tu cotización" \n\n          id="comment" [formControl]= "requestForm.controls[\'comment\']"></ion-input>\n\n        <div *ngIf="!requestForm.controls[\'comment\'].valid && requestForm.controls[\'comment\'].touched"   \n\n          class="alert alert-danger"></div>\n\n      </ion-item> \n\n\n\n      <ion-item class="login-Class">\n\n        <ion-label  floating for="vehicle"></ion-label>\n\n          <ion-input type="text"  placeholder="Vehiculo, marca y modelo (opcional)"\n\n            id="vehicle" [formControl]= "requestForm.controls[\'vehicle\']"></ion-input>\n\n          <p *ngIf="!requestForm.controls[\'vehicle\'].valid && requestForm.controls[\'vehicle\'].touched"   \n\n            class="alert alert-danger"></p>\n\n      </ion-item> \n\n\n\n      <br/>\n\n      <ion-item no-lines class=divider>Mi ubicación <br/><p>(opcional)</p></ion-item>\n\n      \n\n      <ion-item class="coords-Class">\n\n        <ion-label for="lat" item-start></ion-label >\n\n        <ion-input type="text"  placeholder="latitud" [(ngModel)]="fetchedLat"\n\n          id="lat" [formControl]= "requestForm.controls[\'lat\']"  ></ion-input>\n\n        <p *ngIf="!requestForm.controls[\'lat\'].valid && requestForm.controls[\'lat\'].touched"   \n\n            class="alert alert-danger"></p>\n\n\n\n          <ion-label for="lng"></ion-label>\n\n        <ion-input type="text"  placeholder="longitud"  [(ngModel)]="fetchedLng"\n\n          id="lng" [formControl]= "requestForm.controls[\'lng\']" ></ion-input>\n\n        <p *ngIf="!requestForm.controls[\'lng\'].valid && requestForm.controls[\'lng\'].touched"   \n\n            class="alert alert-danger"></p>\n\n          <button ion-button round type="button" (click)=getMyPos() color="buttons" item-end><ion-icon name="locate"></ion-icon> </button>\n\n      </ion-item>\n\n      <br/>\n\n      <ion-item no-lines class=divider>Imágenes <br/><p>(opcional)</p></ion-item>  \n\n      <ion-item no-padding>\n\n        <ion-grid>\n\n          <ion-row align-items-center>\n\n            <ion-col col-4 align-self-start>\n\n              <input type="file" #fileInput style="visibility: hidden; height: 0px; margin:0px" name="files[]" (change)="processWebImage($event)" />\n\n              <div class="profile-image-wrapper" (click)="getPicture(1)">\n\n                <div class="profile-image-placeholder" *ngIf="!this.requestForm.controls.pic1.value">\n\n                  <ion-icon name="add"></ion-icon>\n\n                </div>\n\n                <div class="profile-image" [style.backgroundImage]=\'getProfileImageStyle(1)\' *ngIf="this.requestForm.controls.pic1.value"></div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4 align-self-center>\n\n              <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n              <div class="profile-image-wrapper" (click)="getPicture(2)">\n\n                <div class="profile-image-placeholder" *ngIf="!this.requestForm.controls.pic2.value">\n\n                  <ion-icon name="add"></ion-icon>\n\n                </div>\n\n                <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(2)" *ngIf="this.requestForm.controls.pic2.value"></div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4 align-self-end>\n\n                <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n                <div class="profile-image-wrapper" (click)="getPicture(3)">\n\n                  <div class="profile-image-placeholder" *ngIf="!this.requestForm.controls.pic3.value">\n\n                    <ion-icon name="add"></ion-icon>\n\n                  </div>\n\n                  <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(3)" *ngIf="this.requestForm.controls.pic3.value"></div>\n\n                </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-item>\n\n      <br/>\n\n      <div text-center padding> \n\n          <button ion-button block round type="submit" class="ok" [disabled]="!requestForm.valid">Enviar</button>\n\n      </div>   \n\n      <br/>\n\n    </form>     \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\request\request.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */], __WEBPACK_IMPORTED_MODULE_1__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_6__service_image_transfer__["a" /* ImageTransfer */], __WEBPACK_IMPORTED_MODULE_7__service_api_service__["a" /* ApiService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__service_autoservice_service__["a" /* AutoserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_autoservice_service__["a" /* AutoserviceService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__service_image_transfer__["a" /* ImageTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_image_transfer__["a" /* ImageTransfer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* Settings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* Settings */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__service_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_api_service__["a" /* ApiService */]) === "function" && _j || Object])
], RequestPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=request.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'AutoservicePage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_request__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierDetailPage = (function () {
    function SupplierDetailPage(navCtrl, navParams, viewCtrl, callNumber, lchNav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.lchNav = lchNav;
    }
    SupplierDetailPage.prototype.ngOnInit = function () {
        this.data = this.navParams.data;
    };
    SupplierDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SupplierDetailPage.prototype.onRatingChange = function (event) {
        console.log(JSON.stringify(event));
    };
    SupplierDetailPage.prototype.makeACall = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log("Launched dialer!"); })
            .catch(function () { return console.log("Error launching dialer"); });
    };
    SupplierDetailPage.prototype.request = function (event, providerData) {
        console.log(providerData);
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__request_request__["a" /* RequestPage */], this.data);
    };
    SupplierDetailPage.prototype.navigate = function (destination) {
        var options = {
            start: "pachuca, MX",
        };
        this.lchNav.navigate(destination, options)
            .then(function (success) { return alert("Launched navigator"); }, function (error) { return alert("Error launching navigator: " + error); });
    };
    return SupplierDetailPage;
}());
SupplierDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-supplier-detail",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\supplier-detail\supplier-detail.html"*/'<ion-content no-padding>\n\n\n\n  <div card-image class="title-style">\n\n      <div style="text-align:right" no-padding >\n\n          <button ion-button clear icon-only small (click)=close()>\n\n            <ion-icon > <i class="icon icon-close-circle"></i> </ion-icon>\n\n          </button>\n\n      </div>\n\n    <!-- <img images-filter src={{data.img}}> -->\n\n    <ion-card-header no-padding>\n\n      <ion-grid>\n\n        <ion-row align-items-center >\n\n            <ion-col col-3 align-self-end><div text-right>\n\n              <img [src]="\'../assets/mapicons/\'+data.map_icon"> \n\n            </div> \n\n            </ion-col>\n\n            <ion-col col-9> <h1 card-title >{{data.company_name}}</h1>  \n\n              <rating style= "text-align:center" [(ngModel)]="data.ranking"\n\n                readOnly="false"\n\n                max="5"\n\n                emptyStarIconName="star-outline"\n\n                halfStarIconName="star-half"\n\n                starIconName="star"\n\n                nullable="false" \n\n                (ngModelChange)="onRatingChange($event)"></rating></ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n      <h2 card-title>{{data.service}}</h2>\n\n      <!-- <p>{{data.specialty}}</p> -->\n\n    </ion-card-header>\n\n  </div>\n\n\n\n<div class="supplier-data">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <ion-icon item-left>\n\n          <i class="icon icon-map-marker-radius"></i>\n\n        </ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p no-margin maps-description>{{data.address}} bla bla bla bla bla bla bla bla bal\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <button ion-button clear icon-only small (click)=navigate([data.lat,data.lng])>\n\n        <ion-icon name="ios-navigate" class= "custom-icon"></ion-icon>\n\n    </button>\n\n\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <ion-icon item-left>\n\n            <i class="icon icon-alarm"></i>\n\n        </ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p no-margin maps-description>{{data.schedule}}<p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <ion-icon item-left>\n\n            <i class="icon icon-phone"></i>\n\n        </ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p no-margin maps-description (click)=makeACall(data.aditional_phone)>{{data.aditional_phone}}<p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <ion-icon item-left>\n\n          <i class="icon icon-earth"></i>\n\n        </ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p no-margin maps-description>{{data.website}}<p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- <ion-row>\n\n      <ion-col col-2>\n\n        <ion-icon item-left>\n\n          <i class="icon icon-email-outline"></i>\n\n        </ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p no-margin maps-description>{{data.email}}<p>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <br/><br/><br/><br/>\n\n  </ion-grid>\n\n  <ion-fab #fab bottom right>\n\n    <button button-ion-fab ion-fab mini (click)="request()">\n\n        <ion-icon name="pricetag"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  \n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\supplier-detail\supplier-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], SupplierDetailPage);

//# sourceMappingURL=supplier-detail.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/spinner/spinner.module": [
		49
	],
	"../pages/add-supplier/add-supplier.module": [
		275
	],
	"../pages/autoservice/autoservice.module": [
		230
	],
	"../pages/cards/cards.module": [
		651,
		12
	],
	"../pages/content/content.module": [
		652,
		11
	],
	"../pages/home/home.module": [
		268
	],
	"../pages/item-create/item-create.module": [
		653,
		10
	],
	"../pages/item-detail/item-detail.module": [
		654,
		9
	],
	"../pages/list-master/list-master.module": [
		655,
		8
	],
	"../pages/login-customer/login-customer.module": [
		272
	],
	"../pages/login-supplier/login-supplier.module": [
		273
	],
	"../pages/login/login.module": [
		269
	],
	"../pages/map/map.module": [
		656,
		7
	],
	"../pages/menu/menu.module": [
		657,
		6
	],
	"../pages/profile/profile.module": [
		658,
		0
	],
	"../pages/request/request.module": [
		264
	],
	"../pages/search/search.module": [
		659,
		5
	],
	"../pages/settings/settings.module": [
		228
	],
	"../pages/signup/signup.module": [
		660,
		4
	],
	"../pages/supplier-detail/supplier-detail.module": [
		265
	],
	"../pages/tabs/tabs.module": [
		661,
		3
	],
	"../pages/tutorial/tutorial.module": [
		662,
		2
	],
	"../pages/welcome/welcome.module": [
		663,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.distance = 5;
        this.statusTg1 = false;
        this.tg1String = 'off';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.tog1Function = function () {
        console.log(this.statusTg1);
        if (this.statusTg1 == false) {
            this.tg1String = 'off';
        }
        else {
            this.tg1String = 'on';
        }
    };
    SettingsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\settings\settings.html"*/'    \n\n<ion-list class="settings" >\n\n  <ion-title>\n\n    <h1>Ajustes <ion-icon name="close-circle" float-right (click)=close()></ion-icon></h1>\n\n  </ion-title> \n\n    <ion-item class="settings">\n\n        <ion-range min="2" max="20" [(ngModel)]="distance" color="km" pin="true" >\n\n          <ion-label range-left>2Km</ion-label>\n\n          <ion-label range-right>20Km</ion-label>\n\n        </ion-range>\n\n    </ion-item>\n\n      <ion-item class="settings">\n\n        <ion-label>{{ tg1String}}</ion-label>\n\n        <ion-toggle [(ngModel)]="statusTg1" checked="false" (ionChange)=tog1Function() color="km"></ion-toggle>\n\n      </ion-item>\n\n</ion-list>\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoservicePageModule", function() { return AutoservicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoservice__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_maps_layout_1_maps_layout_1__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_parallax_elastic_header__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_orderBy__ = __webpack_require__(625);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AutoservicePageModule = (function () {
    function AutoservicePageModule() {
    }
    return AutoservicePageModule;
}());
AutoservicePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__autoservice__["a" /* AutoservicePage */],
            __WEBPACK_IMPORTED_MODULE_3__components_maps_layout_1_maps_layout_1__["a" /* MapsLayout1 */],
            __WEBPACK_IMPORTED_MODULE_6__components_parallax_elastic_header__["a" /* ElasticHeader */],
            __WEBPACK_IMPORTED_MODULE_7__utils_orderBy__["a" /* OrderByPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autoservice__["a" /* AutoservicePage */]),
            __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyABWUtTglN8YGqcYI1zyjeRdOJx5r3TrZU",
            }),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__components_parallax_elastic_header__["a" /* ElasticHeader */],
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
    })
], AutoservicePageModule);

//# sourceMappingURL=autoservice.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RequestPageModule = (function () {
    function RequestPageModule() {
    }
    return RequestPageModule;
}());
RequestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], RequestPageModule);

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierDetailPageModule", function() { return SupplierDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supplier_detail__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_request__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SupplierDetailPageModule = (function () {
    function SupplierDetailPageModule() {
    }
    return SupplierDetailPageModule;
}());
SupplierDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__supplier_detail__["a" /* SupplierDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supplier_detail__["a" /* SupplierDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_6__request_request__["a" /* RequestPage */],
        ]
    })
], SupplierDetailPageModule);

//# sourceMappingURL=supplier-detail.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_view_google_card_layout_3_google_card_layout_3__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_3__components_list_view_google_card_layout_3_google_card_layout_3__["a" /* GoogleCardLayout3 */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: []
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__login__["a" /* LoginPage */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = "https://example.com/api/v1";
        this.loginUrl = "http://localhost:4000/api/auth";
    }
    Api.prototype.get = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + "/" + endpoint, options);
    };
    Api.prototype.post = function (endpoint, body, options) {
        console.log("en post");
        return this.http.post(this.loginUrl + "/", body, options);
    };
    Api.prototype.put = function (endpoint, body, options) {
        return this.http.put(this.url + "/" + endpoint, body, options);
    };
    Api.prototype.delete = function (endpoint, options) {
        return this.http.delete(this.url + "/" + endpoint, options);
    };
    Api.prototype.patch = function (endpoint, body, options) {
        return this.http.put(this.url + "/" + endpoint, body, options);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], Api);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Items = (function () {
    function Items(http) {
        this.http = http;
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCustomerPageModule", function() { return LoginCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_customer__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginCustomerPageModule = (function () {
    function LoginCustomerPageModule() {
    }
    return LoginCustomerPageModule;
}());
LoginCustomerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_customer__["a" /* LoginCustomerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login_customer__["a" /* LoginCustomerPage */]),
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__["SpinnerModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login_customer__["a" /* LoginCustomerPage */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], LoginCustomerPageModule);

//# sourceMappingURL=login-customer.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSupplierPageModule", function() { return LoginSupplierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_supplier__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginSupplierPageModule = (function () {
    function LoginSupplierPageModule() {
    }
    return LoginSupplierPageModule;
}());
LoginSupplierPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_supplier__["a" /* LoginSupplierPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_supplier__["a" /* LoginSupplierPage */]),
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], LoginSupplierPageModule);

//# sourceMappingURL=login-supplier.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierMapping; });
var SupplierMapping = (function () {
    function SupplierMapping() {
        this.userForm = {};
        this.supplierForm = {};
    }
    SupplierMapping.prototype.splitForm = function (form) {
        this.userForm.name = form.name;
        this.userForm.password = form.password;
        this.userForm.phone = form.phone;
        this.userForm.profile = "supplier";
        this.userForm.email = form.email;
        this.supplierForm.brands = form.brands;
        this.supplierForm.email = form.email;
        this.supplierForm.lat = form.lat;
        this.supplierForm.lng = form.lng;
        this.supplierForm.company_name = form.company_name;
        this.supplierForm.address = form.address;
        this.supplierForm.map_icon = form.map_icon;
        this.supplierForm.aditional_phone = form.aditional_phone;
        this.supplierForm.ranking = form.ranking;
        this.supplierForm.schedule = form.schedule;
        this.supplierForm.service = form.service;
        this.supplierForm.specialty = form.specialty;
        this.supplierForm.website = form.website;
        this.supplierForm.is_active = form.is_active;
        return [this.userForm, this.supplierForm];
    };
    SupplierMapping.prototype.addMapIcon = function (formData) {
        if (formData === void 0) { formData = {}; }
        formData.map_icon = this.getIcon(formData.service);
        return formData;
    };
    SupplierMapping.prototype.getIcon = function (slcdService) {
        var iconList = new Map();
        iconList.set("Mecanico diesel", "mecd.png");
        iconList.set("Autolavado", "aul.png");
        iconList.set("Clima", "cli.png");
        iconList.set("Clutch y frenos", "clu.png");
        iconList.set("Electrico", "ele.png");
        iconList.set("Gruas", "gru.png");
        iconList.set("Llantas y Neumaticos", "lla.png");
        iconList.set("Mecanico General", "mec.png");
        iconList.set("Taller especializado", "mece.png");
        iconList.set("Hojalatero", "hoj.png");
        iconList.set("Cerrajero", "key.png");
        iconList.set("Mofles", "mof.png");
        iconList.set("Parabrisas y vidrios", "par.png");
        iconList.set("Radiadores", "rad.png");
        iconList.set("Refacciones", "ref.png");
        iconList.set("Direcccion y suspension", "sus.png");
        iconList.set("Talachero", "sus.png");
        return iconList.get(slcdService);
    };
    return SupplierMapping;
}());

//# sourceMappingURL=supplier-mapping.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupplierPageModule", function() { return AddSupplierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_supplier__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddSupplierPageModule = (function () {
    function AddSupplierPageModule() {
    }
    return AddSupplierPageModule;
}());
AddSupplierPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_supplier__["a" /* AddSupplierPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_supplier__["a" /* AddSupplierPage */]),
        ],
    })
], AddSupplierPageModule);

//# sourceMappingURL=add-supplier.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_user_mapping__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginCustomerPage = (function () {
    function LoginCustomerPage(navCtrl, navParams, fBuilder, autoservice, tstCtrl, userMapping, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autoservice = autoservice;
        this.tstCtrl = tstCtrl;
        this.userMapping = userMapping;
        this.appCtrl = appCtrl;
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].SPINNER };
        this.myForm = fBuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(8)])],
            "phone": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(10), isNumber])],
            "email": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].email])],
            "password": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(6)])],
            "cPassword": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
        }, { validator: areEqual });
        function areEqual(group) {
            var password = group.get("password").value;
            var confirmPassword = group.get("cPassword").value;
            if (password !== confirmPassword) {
                group.get("cPassword").setErrors({ MatchPassword: true });
                return true;
            }
            else {
                return null;
            }
        }
        function isNumber(c) {
            return c.value > 0 ? null : { valid: false };
        }
        function isUsed() {
            return this.validEmail ? null : { valid: false };
        }
    }
    LoginCustomerPage.prototype.ngOnInit = function () {
        this.spinner = false;
    };
    LoginCustomerPage.prototype.onSubmit = function (form) {
        this.spinner = true;
        this.isEmailAvailable(this.userMapping.arrangeData(form, "customer"));
    };
    LoginCustomerPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginUserPage");
    };
    LoginCustomerPage.prototype.doNewRegister = function (form) {
        var _this = this;
        this.autoservice.createUser(form)
            .subscribe(function (data) {
            if (data) {
                _this.spinner = false;
                _this.tstCtrl.reveal("Registrado con éxito", "bottom", 3000);
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.tstCtrl.reveal("Error de conexión", "middle", 3000);
                _this.spinner = false;
            }
        });
    };
    LoginCustomerPage.prototype.emailNotValid = function () {
        this.spinner = false;
        this.tstCtrl.reveal("Correo No válido", "bottom", 3000);
        this.myForm.controls["email"].setValue("");
    };
    LoginCustomerPage.prototype.isEmailAvailable = function (form) {
        var _this = this;
        this.autoservice.doesExistEmail(form.email)
            .subscribe(function (customersEmail) {
            if (customersEmail[0] === form.email) {
                _this.emailNotValid();
            }
            else {
                _this.doNewRegister(form);
            }
        });
    };
    return LoginCustomerPage;
}());
LoginCustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login-customer",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\login-customer\login-customer.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login Customer</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-list class="login-List"> \n\n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="name"></ion-label>\n\n          <ion-input type="text"  placeholder="Nombre y apellido"\n\n            id="name" [formControl]= "myForm.controls[\'name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'name\'].valid && myForm.controls[\'name\'].touched"   \n\n              class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n          \n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="email"></ion-label>\n\n            <ion-input type="email"  placeholder="Email" \n\n              id="email" [formControl]= "myForm.controls[\'email\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'email\'].valid && myForm.controls[\'email\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Contraseña (mínimo 6 caracteres)" \n\n              id="password" [formControl]= "myForm.controls[\'password\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'password\'].valid && myForm.controls[\'password\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Confirma tu contraseña" \n\n              id="cPassword" [formControl]= "myForm.controls[\'cPassword\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'cPassword\'].valid && myForm.controls[\'cPassword\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Número telefónico (10 dígitos)" \n\n              id="phone" [formControl]= "myForm.controls[\'phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'phone\'].valid && myForm.controls[\'phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n        <br/><br/>\n\n        <div text-center padding>  \n\n            <button ion-button block round type="submit" color="submit" class="ok" [disabled]="!myForm.valid">Registrar</button>\n\n        </div>   \n\n        <br/>\n\n\n\n      </form>     \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\login-customer\login-customer.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */], __WEBPACK_IMPORTED_MODULE_5__utils_user_mapping__["a" /* UserMapping */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_5__utils_user_mapping__["a" /* UserMapping */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], LoginCustomerPage);

//# sourceMappingURL=login-customer.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSupplierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toaster__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginSupplierPage = (function () {
    function LoginSupplierPage(fBuilder, navCtrl, navParams, autoservice, supplierMapping, tstCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autoservice = autoservice;
        this.supplierMapping = supplierMapping;
        this.tstCtrl = tstCtrl;
        this.appCtrl = appCtrl;
        this.spinner = false;
        this.params = {};
        this.services = [];
        this.mainServices = [];
        this.suppForms = [];
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_4__utils_constants__["a" /* Constants */].SPINNER };
        this.myForm = fBuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(8)])],
            "company_name": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "phone": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(10), isNumber])],
            "email": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].email])],
            "password": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(6)])],
            "cPassword": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "service": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "schedule": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "specialty": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "address": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "brands": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "lat": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "lng": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "website": [""],
            "aditional_phone": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(10), isNumber])],
        }, { validator: areEqual });
        function areEqual(group) {
            var password = group.get("password").value; // to get value in input tag
            var confirmPassword = group.get("cPassword").value; // to get value in input tag
            if (password !== confirmPassword) {
                group.get("cPassword").setErrors({ MatchPassword: true });
                return true;
            }
            else {
                return null;
            }
        }
        function isNumber(c) {
            return c.value > 0 ? null : { valid: false };
        }
    }
    LoginSupplierPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginSupplierPage");
    };
    LoginSupplierPage.prototype.onSubmit = function (form) {
        this.spinner = true;
        this.isEmailAvailable(this.supplierMapping.addMapIcon(form));
    };
    LoginSupplierPage.prototype.ngOnInit = function () {
        this.fetchMainServices();
        this.fetchServices();
    };
    LoginSupplierPage.prototype.fetchServices = function () {
        var _this = this;
        this.spinner = true;
        this.autoservice.getServices().subscribe(function (services) {
            _this.services = services;
            console.log(_this.services);
            _this.spinner = false;
        }, function (err) {
            console.log(err);
            _this.spinner = false;
        });
    };
    LoginSupplierPage.prototype.fetchMainServices = function () {
        var _this = this;
        this.spinner = true;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.mainServices = mservices;
            console.log(_this.mainServices);
            _this.spinner = false;
        }, function (err) {
            console.log(err);
            _this.spinner = false;
        });
    };
    LoginSupplierPage.prototype.getMyPos = function () {
        var _this = this;
        this.spinner = true;
        this.autoservice.getPosition().then(function (coords) {
            _this.fetchedLat = coords.coords.latitude;
            _this.fetchedLng = coords.coords.longitude;
            console.log("coords:", _this.fetchedLat, _this.fetchedLng);
            _this.spinner = false;
        });
    };
    LoginSupplierPage.prototype.doNewRegister = function (form) {
        var _this = this;
        this.suppForms = this.supplierMapping.splitForm(form);
        console.log("USER:::", this.suppForms[0]);
        console.log("SUPP:::", this.suppForms[1]);
        this.autoservice.createUser(this.suppForms[0]).subscribe(function (user) {
            if (user) {
                console.log("USER ID:", user);
                _this.autoservice.createSupplier(user, _this.suppForms[1])
                    .subscribe(function (data) {
                    if (data && !null) {
                        _this.spinner = false;
                        _this.tstCtrl.reveal("Registrado con éxito", "bottom", 3000);
                        _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        _this.tstCtrl.reveal("Error de conexión", "middle", 3000);
                        _this.spinner = false;
                    }
                });
            }
            else {
                _this.tstCtrl.reveal("Error de conexión", "bottom", 3000);
                _this.spinner = false;
            }
        });
    };
    LoginSupplierPage.prototype.emailNotValid = function () {
        this.tstCtrl.reveal("Correo No válido", "bottom", 3000);
        this.myForm.controls["email"].setValue("");
        this.spinner = false;
    };
    LoginSupplierPage.prototype.isEmailAvailable = function (form) {
        var _this = this;
        this.autoservice.doesExistEmail(form.email)
            .subscribe(function (customersEmail) {
            if (customersEmail[0] === form.email) {
                _this.emailNotValid();
            }
            else {
                _this.doNewRegister(form);
            }
        });
    };
    return LoginSupplierPage;
}());
LoginSupplierPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login-supplier",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\login-supplier\login-supplier.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login Ssupplier</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-list class="login-List"> \n\n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="name"></ion-label>\n\n          <ion-input type="text"  placeholder="Nombre y apellido"\n\n            id="name" [formControl]= "myForm.controls[\'name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'name\'].valid && myForm.controls[\'name\'].touched"   \n\n              class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n          \n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="email"></ion-label>\n\n            <ion-input type="email"  placeholder="Email" \n\n              id="email" [formControl]= "myForm.controls[\'email\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'email\'].valid && myForm.controls[\'email\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Contraseña (mínimo 6 caracteres)" \n\n              id="password" [formControl]= "myForm.controls[\'password\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'password\'].valid && myForm.controls[\'password\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Confirma tu contraseña" \n\n              id="cPassword" [formControl]= "myForm.controls[\'cPassword\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'cPassword\'].valid && myForm.controls[\'cPassword\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Teléfono particular (10 dígitos)" \n\n              id="phone" [formControl]= "myForm.controls[\'phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'phone\'].valid && myForm.controls[\'phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="aditional_phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Teléfono del establecimiento (10 dígitos)" \n\n              id="aditional_phone" [formControl]= "myForm.controls[\'aditional_phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'aditional_phone\'].valid && myForm.controls[\'aditional_phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item  class="login-Class" > \n\n          <ion-label for="service" style="color:rgb(146, 145, 145) !important" no-padding>Servicio</ion-label>\n\n              <ion-select id="service" [formControl]="myForm.controls[\'service\']" \n\n              placeholder="Selecciona un servicio" \n\n              cancelText="Atras" >\n\n                <ion-option *ngFor="let mainService of mainServices" [value]="mainService" no-padding>{{mainService}} </ion-option>\n\n                <ion-option *ngFor="let service of services" [value]="service" no-padding>{{service}} </ion-option>\n\n              </ion-select>\n\n        </ion-item> \n\n        \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="company_name"></ion-label>\n\n            <ion-input type="text"  placeholder="Nombre del establecimiento"\n\n              id="company_name" [formControl]= "myForm.controls[\'company_name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'company_name\'].valid && myForm.controls[\'company_name\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="specialty"></ion-label>\n\n              <ion-input type="text"  placeholder="Especialización o cualidades"\n\n                id="specialty" [formControl]= "myForm.controls[\'specialty\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'specialty\'].valid && myForm.controls[\'specialty\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n    \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="address"></ion-label>\n\n            <ion-input type="text"  placeholder="Dirección "\n\n              id="address" [formControl]= "myForm.controls[\'address\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'address\'].valid && myForm.controls[\'address\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="brands"></ion-label>\n\n              <ion-input type="text"  placeholder="Marcas"\n\n                id="brands" [formControl]= "myForm.controls[\'brands\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'brands\'].valid && myForm.controls[\'brands\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n          </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="schedule"></ion-label>\n\n            <ion-input type="text"  placeholder="Horario"\n\n              id="schedule" [formControl]= "myForm.controls[\'schedule\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'schedule\'].valid && myForm.controls[\'schedule\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="website"></ion-label>\n\n            <ion-input type="text"  placeholder="Sitio web" [formControl]= "myForm.controls[\'website\']"\n\n              id="website"></ion-input>\n\n        </ion-item> 	\n\n        <br/>\n\n        <ion-item class="coords-Class">\n\n          <ion-label for="lat" item-start></ion-label >\n\n          <ion-input type="text"  placeholder="latitud" [(ngModel)]="fetchedLat"\n\n            id="lat" [formControl]= "myForm.controls[\'lat\']"  ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lat\'].valid && myForm.controls[\'lat\'].touched"   \n\n              class="alert alert-danger"></p>\n\n\n\n            <ion-label for="lng"></ion-label>\n\n          <ion-input type="text"  placeholder="longitud"  [(ngModel)]="fetchedLng"\n\n            id="lng" [formControl]= "myForm.controls[\'lng\']" ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lng\'].valid && myForm.controls[\'lng\'].touched"   \n\n              class="alert alert-danger"></p>\n\n            <button ion-button round type="button" (click)=getMyPos() color="buttons" item-end><ion-icon name="locate"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <br/>\n\n        <div text-center padding> \n\n            <button ion-button block round type="submit" class="ok" [disabled]="!myForm.valid">Registrar</button>\n\n        </div>   \n\n        <br/>\n\n\n\n      </form>     \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\login-supplier\login-supplier.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */], __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */],
        __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], LoginSupplierPage);

//# sourceMappingURL=login-supplier.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSupplierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_autoservice_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_toaster__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddSupplierPage = (function () {
    function AddSupplierPage(navCtrl, navParams, viewCtrl, supplierMapping, autoservice, tstCtrl, fBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.supplierMapping = supplierMapping;
        this.autoservice = autoservice;
        this.tstCtrl = tstCtrl;
        this.services = [];
        this.mainServices = [];
        this.suppForms = [];
        this.isNewService = true;
        this.myForm = fBuilder.group({
            "company_name": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "service": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "schedule": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "specialty": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "address": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "brands": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "lat": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "lng": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "website": [""],
            "aditional_phone": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(10), isNumber])],
        });
        function isNumber(c) {
            return c.value > 0 ? null : { valid: false };
        }
    }
    AddSupplierPage.prototype.ngOnInit = function () {
        this.fetchMainServices();
        this.data = this.navParams.data;
        console.log("OriginalData:::", this.data.provider);
        this.data.isNewProvider !== true ?
            this.loadParams()
            : this.isNewService = true;
    };
    AddSupplierPage.prototype.loadParams = function () {
        this.isNewService = false;
        this.myForm.controls["company_name"].setValue(this.data.provider.company_name);
        this.myForm.controls["service"].setValue(this.data.provider.service);
        this.myForm.controls["specialty"].setValue(this.data.provider.specialty);
        this.myForm.controls["address"].setValue(this.data.provider.address);
        this.myForm.controls["brands"].setValue(this.data.provider.brands);
        this.myForm.controls["website"].setValue(this.data.provider.website);
        this.myForm.controls["aditional_phone"].setValue(this.data.provider.aditional_phone);
        this.myForm.controls["schedule"].setValue(this.data.provider.schedule);
        this.fetchedLat = this.data.provider.lat;
        this.fetchedLng = this.data.provider.lng;
    };
    AddSupplierPage.prototype.fetchMainServices = function () {
        var _this = this;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.mainServices = mservices;
            console.log(_this.mainServices);
            _this.autoservice.getServices().subscribe(function (services) {
                _this.services = services;
                console.log(_this.services);
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    AddSupplierPage.prototype.onSubmit = function (form) {
        this.isNewService ? this.getNew(form) : this.update(form);
    };
    AddSupplierPage.prototype.getNew = function (form) {
        this.doNewRegister(this.supplierMapping.addMapIcon(form));
    };
    AddSupplierPage.prototype.update = function (form) {
        form.id = this.data.provider.id;
        console.log("UPDATE:::", form);
        this.updateRegister(this.supplierMapping.addMapIcon(form));
    };
    AddSupplierPage.prototype.getMyPos = function () {
        var _this = this;
        this.autoservice.getPosition().then(function (coords) {
            _this.fetchedLat = coords.coords.latitude;
            _this.fetchedLng = coords.coords.longitude;
            console.log("coords:", _this.fetchedLat, _this.fetchedLng);
        });
    };
    AddSupplierPage.prototype.doNewRegister = function (form) {
        var _this = this;
        this.autoservice.createSupplier(this.data.id, form)
            .subscribe(function (data) {
            if (data && !null) {
                _this.tstCtrl.reveal("Registrado con éxito", "bottom", 3000);
                _this.close();
            }
            else {
                _this.tstCtrl.reveal("Error de conexión", "middle", 3000);
            }
        });
    };
    AddSupplierPage.prototype.updateRegister = function (form) {
        var _this = this;
        this.autoservice.updateSupplier(form.id, form)
            .subscribe(function (data) {
            if (data && !null) {
                _this.tstCtrl.reveal("Guardado con éxito", "bottom", 3000);
                _this.close();
            }
            else {
                _this.tstCtrl.reveal("Error de conexión", "middle", 3000);
            }
        });
    };
    AddSupplierPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddSupplierPage");
    };
    AddSupplierPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return AddSupplierPage;
}());
AddSupplierPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "page-add-supplier",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\add-supplier\add-supplier.html"*/'\n\n<ion-content>\n\n  <ion-list class="login-List"> \n\n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n\n\n\n        <ion-item  class="login-Class" > \n\n          <ion-label for="service" style="color:rgb(146, 145, 145) !important" no-padding>Servicio</ion-label>\n\n            <ion-select id="service" [formControl]="myForm.controls[\'service\']" \n\n            placeholder="Selecciona un servicio" \n\n            cancelText="Atras" >\n\n              <ion-option *ngFor="let mainService of mainServices" [value]="mainService" no-padding>{{mainService}} </ion-option>\n\n              <ion-option *ngFor="let service of services" [value]="service" no-padding>{{service}} </ion-option>\n\n            </ion-select>\n\n        </ion-item> \n\n         \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="company_name"></ion-label>\n\n            <ion-input type="text"  placeholder="Nombre del establecimiento"\n\n              id="company_name" [formControl]= "myForm.controls[\'company_name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'company_name\'].valid && myForm.controls[\'company_name\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="aditional_phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Teléfono del establecimiento (10 dígitos)" \n\n              id="aditional_phone" [formControl]= "myForm.controls[\'aditional_phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'aditional_phone\'].valid && myForm.controls[\'aditional_phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="specialty"></ion-label>\n\n              <ion-input type="text"  placeholder="Especialización o cualidades"\n\n                id="specialty" [formControl]= "myForm.controls[\'specialty\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'specialty\'].valid && myForm.controls[\'specialty\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n    \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="address"></ion-label>\n\n            <ion-input type="text"  placeholder="Dirección "\n\n              id="address" [formControl]= "myForm.controls[\'address\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'address\'].valid && myForm.controls[\'address\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="brands"></ion-label>\n\n              <ion-input type="text"  placeholder="Marcas"\n\n                id="brands" [formControl]= "myForm.controls[\'brands\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'brands\'].valid && myForm.controls[\'brands\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n          </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="schedule"></ion-label>\n\n            <ion-input type="text"  placeholder="Horario"\n\n              id="schedule" [formControl]= "myForm.controls[\'schedule\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'schedule\'].valid && myForm.controls[\'schedule\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="website"></ion-label>\n\n            <ion-input type="text"  placeholder="Sitio web" [formControl]= "myForm.controls[\'website\']"\n\n              id="website"></ion-input>\n\n        </ion-item> 	\n\n        <br/>\n\n        <ion-item class="coords-Class">\n\n          <ion-label for="lat" item-start></ion-label >\n\n          <ion-input type="text"  placeholder="latitud" [(ngModel)]="fetchedLat"\n\n            id="lat" [formControl]= "myForm.controls[\'lat\']"  ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lat\'].valid && myForm.controls[\'lat\'].touched"   \n\n              class="alert alert-danger"></p>\n\n\n\n          <ion-label for="lng"></ion-label>\n\n          <ion-input type="text"  placeholder="longitud"  [(ngModel)]="fetchedLng"\n\n            id="lng" [formControl]= "myForm.controls[\'lng\']" ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lng\'].valid && myForm.controls[\'lng\'].touched"   \n\n              class="alert alert-danger"></p>\n\n          <button ion-button round type="button" (click)=getMyPos() color="buttons" item-end><ion-icon name="locate"></ion-icon> </button>\n\n        </ion-item> \n\n\n\n        <br/>\n\n        <div text-center padding> \n\n            <button [hidden]=!isNewService ion-button block round type="submit" class="ok" [disabled]="!myForm.valid">Registrar</button>\n\n            <button [hidden]=isNewService ion-button block round type="submit" class="ok" [disabled]="!myForm.valid">Guardar</button>\n\n        </div>   \n\n        <br/>\n\n\n\n      </form>     \n\n  </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\add-supplier\add-supplier.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */], __WEBPACK_IMPORTED_MODULE_2__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */],
        __WEBPACK_IMPORTED_MODULE_0__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_2__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], AddSupplierPage);

//# sourceMappingURL=add-supplier.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(324);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_autoservice_autoservice_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_supplier_detail_supplier_detail_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_customer_login_customer_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_supplier_login_supplier_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_supplier_add_supplier_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_request_request_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_file__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// export const firebaseConfig = {
//   apiKey: "AIzaSyBdQOPM3re7vBFNTEspKM7G0vzKH7ub6H8",
//   authDomain: "villainova-app.firebaseapp.com",
//   databaseURL: "https://villainova-app.firebaseio.com",
//   projectId: "villainova-app",
//   storageBucket: "villainova-app.appspot.com",
//   messagingSenderId: "1297766976",
// };
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "./assets/i18n/", ".json");
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* Settings */](storage, {
        logged: false,
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            // ElasticHeader,
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyABWUtTglN8YGqcYI1zyjeRdOJx5r3TrZU",
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            //AngularFireModule.initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]],
                },
            }),
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/autoservice/autoservice.module#AutoservicePageModule', name: 'AutoservicePage', segment: 'autoservice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/supplier-detail/supplier-detail.module#SupplierDetailPageModule', name: 'SupplierDetailPage', segment: 'supplier-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-customer/login-customer.module#LoginCustomerPageModule', name: 'LoginCustomerPage', segment: 'login-customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-supplier/login-supplier.module#LoginSupplierPageModule', name: 'LoginSupplierPage', segment: 'login-supplier', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-supplier/add-supplier.module#AddSupplierPageModule', name: 'AddSupplierPage', segment: 'add-supplier', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings_module__["SettingsPageModule"],
            __WEBPACK_IMPORTED_MODULE_18__pages_supplier_detail_supplier_detail_module__["SupplierDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_customer_login_customer_module__["LoginCustomerPageModule"],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_supplier_login_supplier_module__["LoginSupplierPageModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_16__pages_autoservice_autoservice_module__["AutoservicePageModule"],
            __WEBPACK_IMPORTED_MODULE_23__pages_add_supplier_add_supplier_module__["AddSupplierPageModule"],
            __WEBPACK_IMPORTED_MODULE_24__pages_request_request_module__["RequestPageModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_file__["a" /* File */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* IonicErrorHandler */] },
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AutoservicePage = (function () {
    function AutoservicePage(navCtrl, navParams, AsSvc, popCtrl, toastCtrl, autoservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AsSvc = AsSvc;
        this.popCtrl = popCtrl;
        this.toastCtrl = toastCtrl;
        this.autoservice = autoservice;
        this.spinnerSts = false;
        this.params = {};
        this.usrPos = {};
        this.params.spinner = { "icon": __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].SPINNER };
        this.params.data = {};
        this.params.suppliers = [];
        this.params.fetchSupp = [];
        this.params.mapData = {};
        this.params.events = {
            "onMarker": function (item) {
                if (item === void 0) { item = {}; }
                console.log(item);
            },
        };
        this.params.userData = {
            userPos: {
                lat: 0,
                lng: 0,
                zoom: 15,
                mapTypeControl: true,
                streetViewControl: true,
            },
        };
    }
    AutoservicePage.prototype.serviceIsSelected = function (chosenService) {
        this.spinnerSts = true;
        console.log("ocpión::", chosenService);
        // this.params.suppliers = this.AsSvc.getSuppliers().filter(
        //   data => {
        //     for (let i = 0; i < chosenService.length; i++) {
        //       if (data.service === chosenService[i]) {
        //         return true;
        //       }
        //     }
        //   },
        // );
        // console.log("proveedores:", this.params.suppliers);
        this.fetchSuppliers(chosenService);
    };
    AutoservicePage.prototype.onMarkerService = function (params) {
        console.log("params:", params);
        this.params.data = params;
        this.params.mapData.lat = params.lat;
        this.params.mapData.lng = params.lng;
    };
    AutoservicePage.prototype.ionViewDidLoad = function () {
    };
    AutoservicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerSts = true;
        this.fetchMainServices();
        this.AsSvc.getPosition().then(function (userPosition) {
            _this.fillUsrData(userPosition);
            console.log("pos:", userPosition.coords);
        }).catch(function (error) {
            _this.presentToast(JSON.stringify(error));
            _this.spinnerSts = false;
        });
    };
    AutoservicePage.prototype.fillUsrData = function (usrPosition) {
        this.params.userData = {
            userPos: {
                lat: usrPosition.coords.latitude,
                lng: usrPosition.coords.longitude,
                zoom: 15,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/you.png",
            },
        };
        this.params.mapData.lat = usrPosition.coords.latitude;
        this.params.mapData.lng = usrPosition.coords.longitude;
    };
    AutoservicePage.prototype.showSettings = function (event) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
        popover.present({
            ev: event,
        });
    };
    AutoservicePage.prototype.presentToast = function (msgTxt) {
        var toast = this.toastCtrl.create({
            message: msgTxt,
            duration: 3000,
            position: "middle",
        });
        toast.present();
    };
    AutoservicePage.prototype.fetchSuppliers = function (chosenService) {
        var _this = this;
        this.autoservice.getSuppliersq(chosenService)
            .subscribe(function (supplier) {
            _this.params.suppliers = supplier;
            console.log("fetched", _this.params.suppliers);
            _this.spinnerSts = false;
        }, function (err) {
            console.log(err);
            _this.spinnerSts = false;
        });
    };
    AutoservicePage.prototype.fetchServices = function () {
        var _this = this;
        this.autoservice.getServices().subscribe(function (services) {
            _this.params.services = services;
            console.log("fetchedServ", _this.params.services);
            _this.spinnerSts = false;
        }, function (err) {
            console.log(err);
            _this.spinnerSts = false;
        });
    };
    AutoservicePage.prototype.fetchMainServices = function () {
        var _this = this;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.params.mainServices = mservices;
            console.log("fetchedMServ", _this.params.services);
            _this.fetchServices();
        }, function (err) {
            console.log(err);
            _this.spinnerSts = false;
        });
    };
    return AutoservicePage;
}());
AutoservicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-autoservice",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\autoservice\autoservice.html"*/'  <ion-header style="height:0px" >\n\n  <ion-navbar style="height:5px" >\n\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>        \n\n    <ion-title>Asistencia<ion-icon name="settings" float-right (click)=showSettings($event) class="icon-size" ></ion-icon></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<maps-layout-1\n\n  [data]="params.data"\n\n  [events]="params.events"\n\n  [userData]="params.userData"\n\n  [services]="params.services"\n\n  [mainServices]="params.mainServices"\n\n  [suppliers]="params.suppliers"\n\n  [mapData]="params.mapData"\n\n  [spinner]="params.spinner"\n\n  [spinnerSts]="spinnerSts"\n\n  (onMarkerService)="onMarkerService($event)"\n\n  (serviceIsSelected)="serviceIsSelected($event)"> \n\n  \n\n</maps-layout-1>\n\n\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\autoservice\autoservice.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__["a" /* AutoserviceService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__["a" /* AutoserviceService */]])
], AutoservicePage);

//# sourceMappingURL=autoservice.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants;
(function (Constants) {
    Constants.SUPPLIERS_URL = "http://localhost:4000/api/providers/service";
    Constants.CREATE_SUPPLIER_URL = "http://localhost:4000/api/users";
    Constants.UPDATE_SUPPLIER_URL = "http://localhost:4000/api/provider/update/";
    Constants.CREATE_USER_URL = "http://localhost:4000/api/users/create";
    Constants.SERVICES_URL = "http://localhost:4000/api/services";
    Constants.MAIN_SERVICES_URL = "http://localhost:4000/api/mainservices";
    Constants.EMAIL_URL = "http://localhost:4000/api/email/users";
    Constants.LOGIN_URL = "http://localhost:4000/api/auth";
    Constants.LOGGED_USER_URL = "http://localhost:4000/api/logged/user";
    Constants.USER_BY_ID = "http://localhost:4000/api/user";
    Constants.SERVICES_BY_USER_ID = "http://localhost:4000/api/providers/user";
    Constants.CREATE_REQUEST = "http://localhost:4000/api/users";
    Constants.SPINNER = "puff"; // puede ser "puff" o "ball-triangle"
})(Constants || (Constants = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner__ = __webpack_require__(619);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpinnerModule = (function () {
    function SpinnerModule() {
    }
    return SpinnerModule;
}());
SpinnerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SpinnerModule);

//# sourceMappingURL=spinner.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(630);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowToaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowToaster = (function () {
    function ShowToaster(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ShowToaster.prototype.reveal = function (note, pos, time) {
        var toast = this.toastCtrl.create({
            message: note,
            duration: time,
            position: pos,
            showCloseButton: true,
            closeButtonText: "ok",
        });
        toast.present();
    };
    return ShowToaster;
}());
ShowToaster = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* ToastController */]])
], ShowToaster);

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_supplier_detail_supplier_detail__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapsLayout1 = (function () {
    function MapsLayout1(popCtrl, toastCtrl, alertCtrl) {
        this.popCtrl = popCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.onMarkerService = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.serviceIsSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.spinnerStatus = true;
        this.mapZoom = 14;
    }
    MapsLayout1.prototype.svcToast = function (note, pos) {
        var toast = this.toastCtrl.create({
            message: note,
            duration: 3000,
            position: pos,
            showCloseButton: true,
            closeButtonText: "ok",
        });
        toast.present();
    };
    MapsLayout1.prototype.onEvent = function (event, e) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log("evento:", event);
        if (event !== "onRates") {
            this.onMarkerService.emit(e);
            this.mapZoom = 15;
            this.showDetail(e, event);
        }
    };
    MapsLayout1.prototype.svcSelected = function () {
        console.log("Seleccion:::", this.selectedService);
        if (this.selectedService.length === 0) {
            this.labelService = "un servicio";
            this.suppliers = [];
        }
        else if (this.selectedService.length === 1) {
            this.labelService = this.selectedService[0];
        }
        else {
            this.labelService = "una opción";
        }
        this.svcToast("Seleciona " + this.labelService, "bottom");
        this.serviceIsSelected.emit(this.selectedService);
        this.spinnerSts;
        this.mapZoom = 11;
    };
    MapsLayout1.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", e);
    };
    MapsLayout1.prototype.showDetail = function (supplierData, event) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_supplier_detail_supplier_detail__["a" /* SupplierDetailPage */], supplierData);
        console.log("el EVENTO:", event);
        popover.present({
            ev: "onMarker",
        });
    };
    MapsLayout1.prototype.ngOnInit = function () {
        this.svcToast("Selecciona un servicio", "bottom");
    };
    return MapsLayout1;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "userData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MapsLayout1.prototype, "services", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MapsLayout1.prototype, "mainServices", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "suppliers", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "mapData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "spinner", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MapsLayout1.prototype, "spinnerSts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "onMarkerService", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "serviceIsSelected", void 0);
MapsLayout1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "maps-layout-1",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\components\maps\layout-1\maps.html"*/'\n\n<ion-content  has-header>\n\n  \n\n  <ion-grid no-padding class="option-service">\n\n    <ion-item style="height:45px" class="option-service" > \n\n      <ion-label for="services"><ion-icon  item-left name="build"></ion-icon>Servicios</ion-label>\n\n      <ion-select id="services" requiered  [(ngModel)]="selectedService" \n\n      (ionChange)="svcSelected()" \n\n      multiple="true" \n\n      cancelText="Atras">\n\n        <ion-option *ngFor="let mainService of mainServices" [value]="mainService">{{mainService}} </ion-option>\n\n        <ion-option *ngFor="let service of services | orderBy : \'+\'" [value]="service">{{service}} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-grid>\n\n  <sebm-google-map [latitude]="mapData.lat" [longitude]="mapData.lng" [zoom]="mapZoom" [mapTypeControl]=true [streetViewControl]=true>\n\n  \n\n    <sebm-google-map-marker *ngFor="let supplier of suppliers"  \n\n      [latitude]="supplier.lat" \n\n      [longitude]="supplier.lng" \n\n      [label]="supplier.markLabel"\n\n      (markerClick)="onEvent(\'onMarker\',supplier)"\n\n      [iconUrl]="\'../assets/mapicons/\'+supplier.map_icon">\n\n    </sebm-google-map-marker>\n\n    <sebm-google-map-marker [iconUrl]="userData.userPos.iconUrl" [latitude]="userData.userPos.lat" [longitude]="userData.userPos.lng"></sebm-google-map-marker>\n\n  </sebm-google-map>\n\n  <spinner [data]="spinner" *ngIf="spinnerSts" ></spinner>\n\n  <ion-fab bottom left>\n\n      <button ion-fab color="locate" mini><ion-icon name="md-locate"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\components\maps\layout-1\maps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MapsLayout1);

//# sourceMappingURL=maps-layout-1.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageTransfer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @Component({
//     providers: [FileTransfer],
// })
var ImageTransfer = (function () {
    function ImageTransfer(transfer, file) {
        this.transfer = transfer;
        this.file = file;
    }
    ImageTransfer.prototype.upholdImages = function (formData) {
        if (formData === void 0) { formData = {}; }
        var images = [];
        var counter = 0;
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
        }
        else {
            return images;
        }
    };
    ImageTransfer.prototype.uploadImage = function (image, uploadUrl, pic_number) {
        var fileTransfer = this.transfer.create();
        var fName = "pic" + String(pic_number);
        var options = {
            fileKey: "request",
            fileName: fName,
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
        };
        return fileTransfer.upload(image, uploadUrl, options);
    };
    return ImageTransfer;
}());
ImageTransfer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]) === "function" && _b || Object])
], ImageTransfer);

var _a, _b;
//# sourceMappingURL=image-transfer.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getService = function (postUrl) {
        return this.http.get(postUrl)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    ApiService.prototype.postService = function (postUrl, body) {
        if (body === void 0) { body = {}; }
        console.log(postUrl);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(postUrl, body, options).map(function (res) {
            console.log("response:", res);
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    ApiService.prototype.putService = function (id, data, putUrl) {
        if (data === void 0) { data = {}; }
        var body = JSON.stringify({ data: data });
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(putUrl, body, options).map(function (res) {
            console.log("response:", res);
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], ApiService);

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Spinner = (function () {
    function Spinner() {
        var _this = this;
        this.getData = function () {
            return _this.data;
        };
    }
    Spinner.prototype.ngOnChanges = function (changes) {
        this.path = "assets/svg/" + changes['data'].currentValue.icon + ".svg";
    };
    return Spinner;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], Spinner.prototype, "data", void 0);
Spinner = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'spinner',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\components\spinner\spinner.html"*/'<!-- Theme Spinner -->\n\n<ion-grid no-padding>\n\n    <ion-row>\n\n        <img [src]="path" />\n\n    </ion-row>\n\n</ion-grid>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\components\spinner\spinner.html"*/
    }),
    __metadata("design:paramtypes", [])
], Spinner);

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AutoserviceService = (function () {
    function AutoserviceService(http) {
        this.http = http;
        this.geolocation = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */]();
        this.mapdata = {};
    }
    AutoserviceService.prototype.getMainServices = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].MAIN_SERVICES_URL)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.getServices = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].SERVICES_URL)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.getPosition = function () {
        return this.geolocation.getCurrentPosition();
    };
    AutoserviceService.prototype.watchPos = function () {
        return this.geolocation.watchPosition().subscribe(function (data) {
            console.log("watch", data);
        });
    };
    AutoserviceService.prototype.getSuppliersq = function (chosenService) {
        console.log(chosenService);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].SUPPLIERS_URL + "/" + chosenService)
            .map(function (res) {
            return res.json().providers;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.doesExistEmail = function (selectedEmail) {
        console.log(selectedEmail);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].EMAIL_URL + "/" + selectedEmail)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.createSupplier = function (idUser, provider) {
        if (provider === void 0) { provider = {}; }
        var postUrl = __WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].CREATE_SUPPLIER_URL + "/" + idUser + "/provider";
        var body = JSON.stringify({ provider: provider });
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(postUrl, body, options).map(function (res) {
            console.log("response:", res);
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.updateSupplier = function (id, provider) {
        if (provider === void 0) { provider = {}; }
        var body = JSON.stringify({ provider: provider });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].UPDATE_SUPPLIER_URL + "/" + id, body, options).map(function (res) {
            console.log("response:", res);
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.createUser = function (user) {
        if (user === void 0) { user = {}; }
        var body = JSON.stringify({ user: user });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].CREATE_USER_URL, body, options).map(function (res) {
            console.log("Create Response ", res.json());
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    return AutoserviceService;
}());
AutoserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], AutoserviceService);

//# sourceMappingURL=autoservice-service.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticHeader = (function () {
    function ElasticHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeader.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    return ElasticHeader;
}());
ElasticHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[elastic-header]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], ElasticHeader);

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* unused harmony export ORDERBY_PROVIDERS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = OrderByPipe_1 = (function () {
    function OrderByPipe() {
        this.value = [];
    }
    OrderByPipe._orderByComparator = function (a, b) {
        if (a === null || typeof a === 'undefined')
            a = 0;
        if (b === null || typeof b === 'undefined')
            b = 0;
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe.prototype.transform = function (input, config) {
        if (config === void 0) { config = '+'; }
        //invalid input given
        if (!input)
            return input;
        //make a copy of the input's reference
        this.value = input.slice();
        var value = this.value;
        if (!Array.isArray(value))
            return value;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) == '-';
            //Basic array
            if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
                return !desc_1 ? value.sort() : value.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return value.sort(function (a, b) {
                    var aValue = a[property_1];
                    var bValue = b[property_1];
                    var propertySplit = property_1.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    return !desc_1
                        ? OrderByPipe_1._orderByComparator(aValue, bValue)
                        : -OrderByPipe_1._orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            //Loop over property of the array in order and sort
            return value.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) == '-';
                    var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property];
                    var bValue = b[property];
                    var propertySplit = property.split('.');
                    if (typeof aValue === 'undefined' && typeof bValue === 'undefined' && propertySplit.length > 1) {
                        aValue = a;
                        bValue = b;
                        for (var j = 0; j < propertySplit.length; j++) {
                            aValue = aValue[propertySplit[j]];
                            bValue = bValue[propertySplit[j]];
                        }
                    }
                    var comparison = !desc
                        ? OrderByPipe_1._orderByComparator(aValue, bValue)
                        : -OrderByPipe_1._orderByComparator(aValue, bValue);
                    //Don't return 0 yet in case of needing to sort by next property
                    if (comparison != 0)
                        return comparison;
                }
                return 0; //equal each other
            });
        }
    };
    return OrderByPipe;
}());
OrderByPipe = OrderByPipe_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy', pure: false })
], OrderByPipe);

var ORDERBY_PROVIDERS = [
    OrderByPipe
];
var OrderByPipe_1;
//# sourceMappingURL=orderBy.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.params = {};
        this.params.data = {
            items: [
                {
                    id: 1,
                    image: 'assets/images/background/sm.png',
                    title: 'Asistencia',
                    subtitle: '',
                    component: 'AutoservicePage'
                },
                {
                    id: 2,
                    image: 'assets/images/background/ga.png',
                    title: 'Gasolineras',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    component: 'HomePage'
                },
                {
                    id: 3,
                    image: 'assets/images/background/gr.png',
                    title: 'Grúas',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    component: ''
                },
                {
                    id: 4,
                    image: 'assets/images/background/pr.png',
                    title: 'Productos',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    component: ''
                },
            ]
        };
        this.params.events = {
            'onItemClick': function (item) {
                console.log(item);
                navCtrl.push(item.component);
            },
            'onExplore': function (item) {
                console.log("Explore");
            },
            'onShare': function (item) {
                console.log("Share");
            },
            'onLike': function (item) {
                console.log("onLike");
            },
            'onFavorite': function (item) {
                console.log("onFavorite");
            } /*,
            'onFab': function(item: any) {
              console.log("Fab");
            }*/
        };
    }
    HomePage.prototype.goPage = function (item) {
        this.navCtrl.push(item.component);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\home\home.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n      \n\n      \n\n    </button>\n\n    <ion-title>Inicio </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <google-card-layout-3 \n\n    [data]="params.data"  \n\n    [events]="params.events">\n\n  </google-card-layout-3>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleCardLayout3 = (function () {
    function GoogleCardLayout3() {
        this.slider = {};
    }
    GoogleCardLayout3.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    GoogleCardLayout3.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    GoogleCardLayout3.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    GoogleCardLayout3.prototype.ngAfterViewInit = function () {
        this.content.ionScroll.subscribe(function (d) {
            //this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    return GoogleCardLayout3;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GoogleCardLayout3.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GoogleCardLayout3.prototype, "events", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], GoogleCardLayout3.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
], GoogleCardLayout3.prototype, "fabButton", void 0);
GoogleCardLayout3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'google-card-layout-3',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\components\list-view\google-card\layout-3\google-card.html"*/'<!--Theme Full Image Cards-->\n\n<ion-content has-header>\n\n  <!--<ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 *ngFor="let item of data.items;let i = index" style="height:120px">\n\n        <ion-card padding text-center class="card card-md" (click)="onEvent(\'onItemClick\', item, $event)" >\n\n          <div card-content style="height:100px">\n\n          <img images-filter src="{{item.image}}" style="height:100px" />\n\n          <div card-title>{{item.title}}</div>\n\n          <div card-subtitle>{{item.subtitle}}</div>\n\n        </div>\n\n        </ion-card>\n\n        <button ion-button round color="categories">{{item.title}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>-->\n\n\n\n  <ion-grid no-padding id="bgGrad">\n\n      <br><br><br>\n\n    <ion-row > \n\n      <ion-col col-6 col-md-6 col-xl-3 *ngFor="let item of data.items;let i = index" >\n\n          <ion-card padding text-center (click)="onEvent(\'onItemClick\', item, $event)" no-padding style="background-color:transparent">\n\n              <img src="{{item.image}}"  style="align-items: center" />\n\n              <ion-card-content>\n\n                <p style="color:whitesmoke; font-size:medium">\n\n                  <Strong>{{item.title}}</Strong>\n\n                </p>\n\n              </ion-card-content>\n\n          </ion-card>\n\n          <br><br>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid> \n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<!--<ion-fab #fab bottom right>\n\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>-->\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\components\list-view\google-card\layout-3\google-card.html"*/
    }),
    __metadata("design:paramtypes", [])
], GoogleCardLayout3);

//# sourceMappingURL=google-card-layout-3.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = (function () {
    function User(http, api) {
        this.http = http;
        this.api = api;
    }
    User.prototype.login = function (session) {
        var _this = this;
        console.log("en login");
        var seq = this.api.post("login", JSON.stringify({ session: session })).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            console.log(res.JSON);
            if (res.status == "success") {
                _this._loggedIn(res);
                console.log(res.JSON);
            }
            else {
            }
        }, function (err) {
            console.error("ERROR", err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    // signup(accountInfo: any) {
    //   let seq = this.api.post("signup", accountInfo).share();
    //   seq
    //     .map(res => res.json())
    //     .subscribe(res => {
    //       // If the API returned a successful response, mark the user as logged in
    //       if (res.status == "success") {
    //         this._loggedIn(res);
    //       }
    //     }, err => {
    //       console.error("ERROR", err);
    //     });
    //   return seq;
    // }
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* Api */]])
], User);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.doesExistEmail = function (selectedEmail) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].EMAIL_URL + "/" + selectedEmail)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    LoginService.prototype.doLogin = function (session) {
        if (session === void 0) { session = {}; }
        var body = JSON.stringify({ session: session });
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].LOGIN_URL, body, options).map(function (res) {
            return res;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    LoginService.prototype.getUser = function (token) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].LOGGED_USER_URL + "/" + token)
            .map(function (res) {
            console.log("REsPonsE", res);
            console.log("REsPonsE Json", res.json());
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], LoginService);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMapping; });
var UserMapping = (function () {
    function UserMapping() {
    }
    UserMapping.prototype.arrangeData = function (formData, profile) {
        if (formData === void 0) { formData = {}; }
        delete formData.cPassword;
        formData.profile = profile;
        return formData;
    };
    return UserMapping;
}());

//# sourceMappingURL=user-mapping.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ParallaxLayout1} from '../components/parallax/layout-1/parallax-layout-1';//
//import { ElasticHeader} from '../components/parallax/elastic-header';
var MyApp = (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen) {
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: "Inicio", component: "AutoservicePage", icon: "icon-home-variant" },
            { title: "Perfil", component: "ProfilePage", icon: "icon-account-box" },
        ];
        this.initTranslate();
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang("en");
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use("es"); // Set your language here
        }
        this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function (values) {
            _this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "menu",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\app\app.html"*/'\n\n<ion-menu [content]="content" style="width:200px; height:450px "  >\n\n  <ion-header >\n\n    <div menuClose  class="header-background-image" \n\n    (click)="openPage({ title:\'Inicio\', component:\'AutoservicePage\'})"  style="height:55px "    >\n\n     <ion-grid>\n\n       <ion-row>\n\n         <!-- <ion-col col-4> \n\n          <img src="assets/images/logo/main-logo.png" style="width:100px;" >\n\n         </ion-col> -->\n\n         <ion-col col-8>\n\n           <img src="assets/images/logo/autocar.png"  >\n\n          </ion-col>\n\n       </ion-row>\n\n     </ion-grid>\n\n      <!--<h1 item-title text-center> <strong> Aquí va el nombre</strong></h1>-->\n\n    </div>\n\n  </ion-header>\n\n  <ion-content color="primary" class="menuBackground" >\n\n    <ion-list no-margin >\n\n      <button menuClose paddinge-left ion-item item-title main-menu\n\n        *ngFor="let p of pages" (click)="openPage(p)" style="height: 50px">\n\n        <ion-icon icon-small item-left name="{{p.icon}}">\n\n          <i class="icon {{p.icon}}"></i>\n\n        </ion-icon>\n\n        <strong>{{p.title}}</strong>\n\n      </button>\n\n      <ion-item><div padding> <img src="assets/images/logo/main-logo.png" style="width:140px"> </div></ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" style="margin:0% !important"></ion-nav>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 *    update(): any {
     throw new Error("Method not implemented.");
   }
A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        var _this = this;
        this.storage = storage;
        this.SETTINGS_KEY = "_settings";
        this.settings = null;
        this.settingsObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(this.storage.get(this.SETTINGS_KEY)
            .then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        })).share();
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.removeValue = function (key) {
        return this.storage.remove(key);
    };
    Settings.prototype.update = function (key, value) {
        var _this = this;
        this.storage.ready().then(function () { return _this.storage.remove(key).then(function () {
            _this.setValue(key, value);
        }); });
    };
    Settings.prototype.clear = function () {
        this.storage.clear().then(function () { return console.log("clean"); });
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_login_service__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_toaster__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(navCtrl, user, translateService, fBuilder, loginService, showToaster, settings, appCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.translateService = translateService;
        this.loginService = loginService;
        this.showToaster = showToaster;
        this.settings = settings;
        this.appCtrl = appCtrl;
        this.params = {};
        this.spinner = false;
        this.loginForm = fBuilder.group({
            "email": ["", __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].email])],
            "password": ["", __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* Validators */].minLength(6)])],
        });
        this.translateService.get("LOGIN_ERROR").subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_4__utils_constants__["a" /* Constants */].SPINNER };
    }
    LoginPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.spinner = true;
        this.loginService.doesExistEmail(form.email)
            .subscribe(function (userEmail) {
            if (userEmail[0] === form.email) {
                _this.doLogin(form);
            }
            else {
                _this.spinner = false;
                _this.showToaster.reveal("Correo NO válido", "bottom", 3000);
                _this.loginForm.controls["email"].setValue("");
            }
        }, function (err) {
            _this.spinner = false;
            _this.showToaster.reveal(_this.loginErrorString, "top", 3000);
        });
    };
    LoginPage.prototype.loginSuccess = function (token) {
        var _this = this;
        this.updateSettings(token);
        this.settings.settingsObservable.subscribe(function () {
            _this.goForward(token);
        }, function (err) {
            _this.showToaster.reveal(_this.loginErrorString, "top", 3000);
            _this.spinner = false;
        });
    };
    LoginPage.prototype.goForward = function (token) {
        var _this = this;
        this.loginService.getUser(token).subscribe(function (user) {
            console.log("autenticacion:::", user);
            _this.showToaster.reveal("Bienvenido " + user[0].name, "top", 3000);
            _this.settings.update("id", user[0].id);
            _this.spinner = false;
            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__pages__["b" /* MainPage */]);
        });
    };
    LoginPage.prototype.updateSettings = function (token) {
        this.settings.update("token", token);
        this.settings.update("logged", true);
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner = false;
        this.settings.settingsObservable.subscribe(function () {
            _this.settings.clear();
            _this.settings.update("token", "");
            _this.settings.update("id", null);
            _this.settings.update("logged", false);
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.settings.settingsObservable.subscribe(function (value) {
            console.log("Init storage;", value);
        });
    };
    LoginPage.prototype.loginFailed = function () {
        this.spinner = false;
        this.settings.update("logged", false);
        this.showToaster.reveal("Contraseña incorrecta", "top", 3000);
        this.loginForm.controls["password"].setValue("");
    };
    LoginPage.prototype.doLogin = function (account) {
        var _this = this;
        this.loginService.doLogin(account).subscribe(function (resp) {
            var token = _this.fitToken(resp._body);
            resp._body === "null" ? _this.loginFailed() : _this.loginSuccess(token);
        }, function (err) {
            _this.showToaster.reveal(_this.loginErrorString, "top", 3000);
            _this.spinner = false;
        });
    };
    LoginPage.prototype.fitToken = function (value) {
        var re = /"/gi;
        return value.replace(re, "");
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Iniciar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-list class="login-List"> \n\n    <form id="loginForm" [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)">\n\n      <h3>Iniciar sesión</h3>\n\n\n\n      <ion-item class="login-Class">\n\n        <ion-label  floating for="email"></ion-label>\n\n        <ion-input type="email"  placeholder="ejemplo@email.com"\n\n          id="email" [formControl]= "loginForm.controls[\'email\']"></ion-input>\n\n          <p *ngIf="!loginForm.controls[\'email\'].valid && loginForm.controls[\'email\'].touched"   \n\n            class="alert alert-danger"></p>\n\n      </ion-item> 	\n\n        \n\n      <ion-item class="login-Class">\n\n        <ion-label floating for="password"></ion-label>\n\n          <ion-input type="password"  placeholder="Contraseña" \n\n            id="password" [formControl]= "loginForm.controls[\'password\']"></ion-input>\n\n          <div *ngIf="!loginForm.controls[\'password\'].valid && loginForm.controls[\'password\'].touched"   \n\n            class="alert alert-danger"></div>\n\n      </ion-item> 	\n\n      <br/>\n\n      <div text-center padding> \n\n        <button ion-button block round type="submit" class="ok" [disabled]="!loginForm.valid">Iniciar</button>\n\n      </div>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_6__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_6__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[319]);
//# sourceMappingURL=main.js.map