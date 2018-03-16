webpackJsonp([8],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants;
(function (Constants) {
    var HOST = "https://autocar.gigalixirapp.com/";
    //const HOST: string = "http://localhost:4000/";
    Constants.SUPPLIERS_URL = HOST + "api/providers/service";
    Constants.CREATE_SUPPLIER_URL = HOST + "api/users";
    Constants.UPDATE_SUPPLIER_URL = HOST + "api/provider/update/";
    Constants.CREATE_USER_URL = HOST + "api/users/create";
    Constants.SERVICES_URL = HOST + "api/services";
    Constants.MAIN_SERVICES_URL = HOST + "api/mainservices";
    Constants.EMAIL_URL = HOST + "api/email/users";
    Constants.LOGIN_URL = HOST + "api/auth";
    Constants.LOGGED_USER_URL = HOST + "api/logged/user";
    Constants.USER_BY_ID = HOST + "api/user";
    Constants.SERVICES_BY_USER_ID = HOST + "api/providers/user";
    Constants.CREATE_REQUEST = HOST + "api/users";
    Constants.UPDATE_REQUEST = HOST + "api/CMS/request/update/";
    Constants.GET_REQUEST = HOST + "api/users/";
    Constants.UPDATE_USER = HOST + "api/users/";
    Constants.GET_REQUEST_PROVIDER = HOST + "provider/";
    Constants.USERS_PROVIDERS = HOST + "api/user/providers/";
    Constants.USERS_PROVIDERS_IDS = HOST + "api/user/providers/getids/";
    Constants.UPLOAD_IMG = HOST + "api/uploader/image";
    Constants.UPLOAD_ONE_IMG = HOST + "api/uploader/img";
    Constants.CREATE_ATTACHMENT = HOST + "api/attachments/create";
    Constants.GET_FULL_USER = HOST + "api/user/full/";
    Constants.PROVIDER_CUSTOMER = HOST + "api/provider/customer/";
    Constants.CREATE_PROPOSAL = HOST + "api/CMS/proposal/create";
    Constants.GET_PROVIDER = HOST + "api/provider/";
    Constants.RATE_PROVIDER = HOST + "api/provider/rate/";
    Constants.PROVIDERS_DISTANCE = HOST + "api/providers/distance";
    Constants.PROVIDERS_DISTANCE_FULL = HOST + "api/providers/distance/full";
    Constants.CREATE_MULT_REQUEST = HOST + "api/CMS/request/multiple/create";
    Constants.GET_NOTIFICATIONS = HOST + "api/user/notification/";
    Constants.NOTIFY_DELAY = 180000; //3 min 
    // export const NOTIFY_DELAY: number = 300000; //5 min 
    Constants.SPINNER = "puff"; // puede ser "puff" o "ball-triangle"
})(Constants || (Constants = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachedImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttachedImagesPage = (function () {
    function AttachedImagesPage(navCtrl, navParams, vwCtrl, pVwr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vwCtrl = vwCtrl;
        this.pVwr = pVwr;
        this.attchImgs = [];
    }
    AttachedImagesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AttachedImagesPage");
    };
    AttachedImagesPage.prototype.ngOnInit = function () {
        this.attchImgs = this.navParams.data;
        console.log(this.attchImgs);
    };
    AttachedImagesPage.prototype.closeView = function () {
        this.vwCtrl.dismiss();
    };
    AttachedImagesPage.prototype.displayImage = function (image) {
        this.pVwr.show(image);
    };
    return AttachedImagesPage;
}());
AttachedImagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-attached-images",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\attached-images\attached-images.html"*/'\n<ion-content>\n  <ion-list *ngFor="let attchImg of attchImgs" no-line inset style="text-align:center"> \n    <ion-item style="text-align:center">\n      <img [src]="attchImg" alt="attchImg" (click)="displayImage(attchImg)"/>\n    </ion-item>\n  </ion-list>\n  <div style="text-align:center">\n    <button ion-button clear icon-only large (click)="closeView()">\n      <ion-icon name="close-circle" ></ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\attached-images\attached-images.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */]])
], AttachedImagesPage);

//# sourceMappingURL=attached-images.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowNotification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(11);
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
// providers: [LocalNotifications],
// })
var ShowNotification = (function () {
    function ShowNotification(shwToaster, localNotifications, apiSvc, backgroundMode) {
        this.shwToaster = shwToaster;
        this.localNotifications = localNotifications;
        this.apiSvc = apiSvc;
        this.backgroundMode = backgroundMode;
    }
    ShowNotification.prototype.show = function (id, message, badge) {
        this.localNotifications.schedule({
            id: id,
            text: message,
            badge: badge,
            icon: "assets/images/logo/main-logo",
        });
    };
    ShowNotification.prototype.startNotifications = function (userId) {
        var _this = this;
        console.log("se inicia el notificador con el id;=>", userId);
        this.backgroundMode.enable();
        setInterval(function (data) {
            if (userId !== null && userId !== undefined && userId !== "") {
                _this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].GET_NOTIFICATIONS + userId).subscribe(function (notify) {
                    if (notify.proposals !== 0) {
                        _this.show(1, "Tienes " + notify.proposals + " propuestas pendientes", notify.proposals);
                    }
                    if (notify.p_requests !== 0) {
                        _this.show(2, "Tienes " + notify.p_requests + " solicitudes pendientes", notify.proposals);
                    }
                }, function (err) {
                    // this.shwTostr.reveal("Error de conexión: " + err, "bottom", 3000)
                });
            }
        }, __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].NOTIFY_DELAY);
    };
    return ShowNotification;
}());
ShowNotification = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */],
        __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__["a" /* BackgroundMode */]])
], ShowNotification);

//# sourceMappingURL=show-notification.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_supplier_mapping__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_requests_detail_user_requests_detail__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserRequestsPage = (function () {
    function UserRequestsPage(navCtrl, navParams, apiSvc, ldingCtrl, shwToaster, splMapp, events, settings) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiSvc = apiSvc;
        this.ldingCtrl = ldingCtrl;
        this.shwToaster = shwToaster;
        this.splMapp = splMapp;
        this.events = events;
        this.settings = settings;
        this.user = {};
        this.stsColor = "km";
        this.userRequests = [];
        this.userGRequests = [];
        this.userGroupedRequests = [];
        this.params = {};
        this.spinner = false;
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].SPINNER };
    }
    UserRequestsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.spinner = true;
        this.settings.settingsObservable.subscribe(function (data) {
            _this.user = data;
            if (_this.user !== undefined && _this.user !== null && _this.user !== {}) {
                _this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].GET_REQUEST + _this.user.id + "/CMS/request").subscribe(function (userData) {
                    console.log("jjjjjj:::", userData);
                    if (userData.requests.length === 0) {
                        _this.shwToaster.reveal("No tienes solicitudes...", "bottom", 3000);
                        _this.spinner = false;
                    }
                    _this.userGroupedRequests = _this.groupRequests(userData.requests);
                    _this.userRequests = userData.requests;
                    _this.spinner = false;
                }, function (error) {
                    _this.shwToaster.reveal("Cargando...", "bottom", 1000);
                    _this.ionViewDidLoad();
                    _this.spinner = false;
                });
            }
            else {
                _this.shwToaster.reveal("cargando...", "bottom", 1000);
                _this.ionViewDidLoad();
            }
        }, function (err) {
            _this.shwToaster.reveal("Volver a iniciar sesión", "bottom", 3000);
            _this.spinner = false;
        });
    };
    UserRequestsPage.prototype.showRequests = function (requests) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_requests_detail_user_requests_detail__["a" /* UserRequestsDetailPage */], requests);
    };
    UserRequestsPage.prototype.emitRequestNotify = function (requests) {
        var count = 0;
        requests.forEach(function (element) {
            if (element.status == 1) {
                count++;
            }
        });
        this.events.publish("proposalNotify", count);
    };
    UserRequestsPage.prototype.groupRequests = function (uRequests) {
        var _this = this;
        var currentGroup;
        var currentService = "";
        uRequests.forEach(function (element, index) {
            if (element.service !== currentService) {
                if (currentService !== "") {
                    _this.userGRequests.push(currentGroup);
                }
                currentService = element.service;
                var newGroup = {
                    title: currentService,
                    requests: [],
                };
                currentGroup = newGroup;
            }
            currentGroup.requests.push(element);
            if (uRequests.length === index + 1) {
                _this.userGRequests.push(currentGroup);
            }
        });
        console.log("AGRUPADO:", this.userGRequests);
        return this.userGRequests;
    };
    UserRequestsPage.prototype.getIconService = function (service) {
        return "assets/servicons/" + this.splMapp.getIcon(service);
    };
    return UserRequestsPage;
}());
UserRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-user-requests",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\user-requests\user-requests.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Solicitudes  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n<spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n<ion-list> \n  <ion-item-group reorder="true">\n    <button detail-push  ion-item  *ngFor ="let group of userGRequests" class= "service-list"  (click)="showRequests(group)">\n      <img item-start  [src]="getIconService(group.title)"> \n      {{group.title}}\n      <ion-badge item-end color="base">{{group.requests.length}}</ion-badge>\n    </button>\n  </ion-item-group>\n</ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\user-requests\user-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_5__utils_supplier_mapping__["a" /* SupplierMapping */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* Settings */]])
], UserRequestsPage);

//# sourceMappingURL=user-requests.js.map

/***/ }),

/***/ 179:
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
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowToaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
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
            showCloseButton: false,
            closeButtonText: "ok",
        });
        toast.present();
    };
    return ShowToaster;
}());
ShowToaster = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["t" /* ToastController */]])
], ShowToaster);

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner__ = __webpack_require__(646);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], SpinnerModule);

//# sourceMappingURL=spinner.module.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/spinner/spinner.module": [
		19
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		686,
		6
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		687,
		5
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		688,
		4
	],
	"../pages/add-supplier/add-supplier.module": [
		283
	],
	"../pages/attached-images/attached-images.module": [
		237
	],
	"../pages/autoservice/autoservice.module": [
		269
	],
	"../pages/customer-user-detail/customer-user-detail.module": [
		289
	],
	"../pages/home/home.module": [
		303
	],
	"../pages/login-customer/login-customer.module": [
		304
	],
	"../pages/login-supplier/login-supplier.module": [
		305
	],
	"../pages/login/login.module": [
		265
	],
	"../pages/menu/menu.module": [
		689,
		3
	],
	"../pages/profile-edit/profile-edit.module": [
		293
	],
	"../pages/profile/profile.module": [
		296
	],
	"../pages/proposal-detail/proposal-detail.module": [
		300
	],
	"../pages/provider-proposal/provider-proposal.module": [
		290
	],
	"../pages/provider-requests/provider-requests.module": [
		291
	],
	"../pages/request-detail/request-detail.module": [
		238
	],
	"../pages/request-provider-detail/request-provider-detail.module": [
		306
	],
	"../pages/request/request.module": [
		297
	],
	"../pages/search/search.module": [
		690,
		2
	],
	"../pages/settings/settings.module": [
		263
	],
	"../pages/signup/signup.module": [
		691,
		1
	],
	"../pages/supplier-detail/supplier-detail.module": [
		298
	],
	"../pages/tutorial/tutorial.module": [
		692,
		0
	],
	"../pages/user-requests-detail/user-requests-detail.module": [
		301
	],
	"../pages/user-requests/user-requests.module": [
		302
	],
	"../pages/user-services/user-services.module": [
		292
	],
	"../pages/welcome/welcome.module": [
		685,
		7
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
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachedImagesPageModule", function() { return AttachedImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attached_images__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AttachedImagesPageModule = (function () {
    function AttachedImagesPageModule() {
    }
    return AttachedImagesPageModule;
}());
AttachedImagesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__attached_images__["a" /* AttachedImagesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__attached_images__["a" /* AttachedImagesPage */]),
        ],
    })
], AttachedImagesPageModule);

//# sourceMappingURL=attached-images.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailPageModule", function() { return RequestDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_detail__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RequestDetailPageModule = (function () {
    function RequestDetailPageModule() {
    }
    return RequestDetailPageModule;
}());
RequestDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__request_detail__["a" /* RequestDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_detail__["a" /* RequestDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], RequestDetailPageModule);

//# sourceMappingURL=request-detail.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_attached_images_attached_images__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_view_controller__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_constants__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RequestDetailPage = (function () {
    function RequestDetailPage(navCtrl, navParams, launchNavigator, autSvc, shwToaster, popCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
        this.autSvc = autSvc;
        this.shwToaster = shwToaster;
        this.popCtrl = popCtrl;
        this.viewCtrl = viewCtrl;
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_7__utils_constants__["a" /* Constants */].SPINNER };
    }
    RequestDetailPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad RequestDetailPage");
    };
    RequestDetailPage.prototype.ngOnInit = function () {
        this.requestData = this.navParams.data;
        console.log(this.requestData);
    };
    RequestDetailPage.prototype.navigate = function (destiny) {
        var _this = this;
        if (destiny !== "" && destiny !== null && destiny !== undefined) {
            this.spinner = true;
            this.autSvc.getPosition().then(function (pos) {
                console.log(pos.coords.latitude);
                console.log(pos.coords.longitude);
                _this.spinner = false;
                _this.viewCtrl.dismiss();
                _this.startNavigate(pos.coords, destiny);
            }, function (err) {
                _this.shwToaster.reveal(err, "bottom", 2000);
                _this.spinner = false;
            });
        }
        else {
            this.shwToaster.reveal("Esta solicitud no cuenta con ubicación...", "middle", 2000);
        }
    };
    RequestDetailPage.prototype.startNavigate = function (coords, destiny) {
        var _this = this;
        var options = {
            start: [coords.latitude, coords.longitude],
        };
        this.launchNavigator.navigate(destiny, options).then(function (success) { return _this.shwToaster.reveal("Saliendo de autocar", "bottom", 2000); }, function (error) { return _this.shwToaster.reveal("No se pudo iniciar el navegador", "bottom", 2000); });
    };
    RequestDetailPage.prototype.showImages = function (images) {
        var imagesUrl = this.verifyImages(images);
        if (imagesUrl.length !== 0) {
            var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_attached_images_attached_images__["a" /* AttachedImagesPage */], imagesUrl);
            popover.present({
                ev: "non",
            });
        }
        else {
            this.shwToaster.reveal("Esta solicitud no cuenta con imágenes", "middle", 2000);
        }
    };
    RequestDetailPage.prototype.verifyImages = function (images) {
        var count = 0;
        var attImages = [];
        images.forEach(function (element) {
            if (element !== null && element !== "nil" && element !== "") {
                attImages[count] = element;
                count++;
            }
        });
        return attImages;
    };
    RequestDetailPage.prototype.closeView = function () {
        this.viewCtrl.dismiss();
    };
    return RequestDetailPage;
}());
RequestDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-request-detail",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\request-detail\request-detail.html"*/'<ion-content>\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n  <ion-list no-padding> \n    <ion-item>\n      <ion-icon name="build" item-start></ion-icon>&nbsp;{{requestData.service}}\n    </ion-item> \n    <ion-item text-wrap>\n      <ion-icon name="mail-open" item-start></ion-icon>&nbsp;{{requestData.comment}}\n    </ion-item> \n    <ion-item>\n      <ion-icon name="car" item-start></ion-icon>&nbsp;{{requestData.vehicle}}\n    </ion-item>\n    <ion-item>\n      <ion-icon name="pin" item-start></ion-icon>\n      <button ion-button clear (click)="navigate([requestData.lat,requestData.lng])">\n          Ubicación\n        <ion-icon color="nav" name="navigate"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="attach" item-start></ion-icon>\n      <button ion-button clear (click)="showImages([requestData.url_pic1,requestData.url_pic2,requestData.url_pic3])">\n          Imagenes\n      <ion-icon color="nav" name="photos"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n \n  <div style="text-align:center">\n    <button ion-button clear icon-only large (click)="closeView()">\n      <ion-icon name="close-circle" ></ion-icon>\n    </button>\n  </div> \n\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\request-detail\request-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        __WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
], RequestDetailPage);

//# sourceMappingURL=request-detail.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(69);
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
            console.log("response:", res);
            console.log("res JSON:", res.json());
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    ApiService.prototype.postService = function (postUrl, body) {
        if (body === void 0) { body = {}; }
        console.log("En API SVC:", postUrl, body);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(postUrl, body, options).map(function (res) {
            console.log("response:", res);
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    ApiService.prototype.putService = function (putUrl, body) {
        if (body === void 0) { body = {}; }
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

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(264);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    function SettingsPage(navCtrl, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.statusTg1 = false;
        this.tg1String = 'off';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        console.log(this.navParams.data.distance);
        this.distance = this.navParams.data.distance;
    };
    SettingsPage.prototype.updateDistance = function () {
        this.events.publish("provDist", this.distance);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\settings\settings.html"*/'    \n\n<ion-list class="settings" >\n\n  <ion-title>\n\n    <h1>Ajustes <ion-icon name="close-circle" float-right (click)=close()></ion-icon></h1>\n\n  </ion-title> \n\n    <ion-item class="settings">\n\n        <ion-range min="2" max="200" [(ngModel)]="distance" color="km" pin="true" \n\n        (ionChange)="updateDistance()"\n\n        >\n\n          <ion-label range-left>2Km</ion-label>\n\n          <ion-label range-right>200Km</ion-label>\n\n        </ion-range>\n\n    </ion-item>\n\n      <!-- <ion-item class="settings">\n\n        <ion-label>{{ tg1String}}</ion-label>\n\n        <ion-toggle [(ngModel)]="statusTg1" checked="false" (ionChange)=tog1Function() color="km"></ion-toggle>\n\n      </ion-item> -->\n\n</ion-list>\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login__ = __webpack_require__(72);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__login__["a" /* LoginPage */]),
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

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
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

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_show_notification__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_show_notification__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__toaster__["a"]; });
/* unused harmony reexport Constants */






//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoservicePageModule", function() { return AutoservicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoservice__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_maps_layout_1_maps_layout_1__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_orderBy__ = __webpack_require__(660);
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
            __WEBPACK_IMPORTED_MODULE_6__utils_orderBy__["a" /* OrderByPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autoservice__["a" /* AutoservicePage */]),
            __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyABWUtTglN8YGqcYI1zyjeRdOJx5r3TrZU",
            }),
        ],
        exports: [],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
    })
], AutoservicePageModule);

//# sourceMappingURL=autoservice.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRequestsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_status_mapping__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_detail_request_detail__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__supplier_detail_supplier_detail__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__proposal_detail_proposal_detail__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_requests_user_requests__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserRequestsDetailPage = (function () {
    function UserRequestsDetailPage(navCtrl, navParams, stsMap, splMapp, popCtrl, shwToaster, apiSvc, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stsMap = stsMap;
        this.splMapp = splMapp;
        this.popCtrl = popCtrl;
        this.shwToaster = shwToaster;
        this.apiSvc = apiSvc;
        this.nav = nav;
        this.data = {
            title: "",
            requests: {},
        };
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].SPINNER };
    }
    UserRequestsDetailPage.prototype.ionViewWillEnter = function () {
        this.data = this.navParams.data;
        console.log(this.data.title);
        this.userRequests = this.data.requests;
        console.log("USER REQUEST:", this.userRequests);
    };
    UserRequestsDetailPage.prototype.ionViewDidLoad = function () {
    };
    UserRequestsDetailPage.prototype.getDataSts = function (sts, data) {
        var value = this.stsMap.getData(sts);
        if (data === "color") {
            return value.color;
        }
        else {
            return value.char;
        }
    };
    UserRequestsDetailPage.prototype.getIconService = function (service) {
        return "assets/servicons/" + this.splMapp.getIcon(service);
    };
    UserRequestsDetailPage.prototype.delete = function (slidingItem, requestId, status) {
        slidingItem.close();
        this.putAsDeleted(requestId, status);
    };
    UserRequestsDetailPage.prototype.putAsDeleted = function (requestId, status) {
        var _this = this;
        if (status !== 1) {
            this.spinner = true;
            var request = { status: 3, p_status: 3 };
            this.apiSvc.putService(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].UPDATE_REQUEST + requestId, JSON.stringify({ request: request })).subscribe(function (data) {
                console.log(data);
                _this.spinner = false;
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__user_requests_user_requests__["a" /* UserRequestsPage */]);
            }, function (err) {
                _this.shwToaster.reveal(err, "bottom", 2000);
                _this.spinner = false;
            });
        }
        else {
            this.shwToaster.reveal("Debes calificar el servicio", "middle", 2500);
        }
    };
    UserRequestsDetailPage.prototype.showDetail = function (requestData) {
        console.log("touch!!!");
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_6__request_detail_request_detail__["a" /* RequestDetailPage */], requestData);
        popover.present({
            ev: "",
        });
    };
    UserRequestsDetailPage.prototype.showProvider = function (providerId) {
        var _this = this;
        this.spinner = true;
        this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].GET_PROVIDER + providerId).subscribe(function (pvdrData) {
            console.log(pvdrData);
            _this.spinner = false;
            var popover = _this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_8__supplier_detail_supplier_detail__["a" /* SupplierDetailPage */], pvdrData.data);
            popover.present({
                ev: "onMarker",
            });
        }, function (err) {
            _this.shwToaster.reveal("Error de conexión" + err, "bottom", 2000);
            _this.spinner = false;
        });
    };
    UserRequestsDetailPage.prototype.shwAlert = function () {
        this.shwToaster.reveal("Aún no te responden esta solicitud", "middle", 2200);
    };
    UserRequestsDetailPage.prototype.shwProviderProposal = function (proposal, providerId, requestId) {
        if (proposal === void 0) { proposal = {}; }
        proposal.provider_id = providerId;
        proposal.request_id = requestId;
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_9__proposal_detail_proposal_detail__["a" /* ProposalDetailPage */], proposal);
        popover.present({
            ev: "onMarker",
        });
    };
    return UserRequestsDetailPage;
}());
UserRequestsDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-user-requests-detail',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\user-requests-detail\user-requests-detail.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Solicitudes de {{data.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n  <ion-list #requestList [virtualScroll]= "userRequests" [approxItemHeight]="\'115px\'">\n    <ion-item-sliding *virtualItem="let uRequest" #slidingItem>\n      <ion-item class= "req-list">\n        <ion-grid>\n          <ion-row align-items-center>\n            <ion-col col-3 align-self-center>\n              <img [src]="getIconService(uRequest.service)" (click)=showProvider(uRequest.provider_id)>\n            </ion-col>\n            <ion-col col-4>\n                <!-- <h2 (click)=showProvider(uRequest.provider_id)> {{uRequest.service}}</h2> -->\n                <p>{{uRequest.created_at | date: \'dd-MM-yyyy\'}}</p> \n                <p>{{uRequest.created_at | date: \'h:mm - a\'}}</p> \n              \n            </ion-col>\n\n\n            <ion-col col-5>\n                <button ion-button only-icon clear class="req-detail" (click)=\'showDetail(uRequest)\'>\n                    <ion-icon name="eye" ></ion-icon>\n                </button>\n                \n                <button ion-button only-icon clear *ngIf ="uRequest.status==0" (click)=\'shwAlert()\'>\n                  <ion-icon name="pricetag" class="icon-badge" ></ion-icon> \n                  <ion-badge class="badge-icon" [color]="getDataSts(uRequest.status,\'color\')">\n                    <ion-icon name="stopwatch"></ion-icon>\n                </ion-badge>\n                </button>\n\n                <button ion-button only-icon clear *ngIf ="uRequest.status==1 "(click)=\'shwProviderProposal(uRequest.proposal, uRequest.provider_id, uRequest.id)\' >\n                  <ion-icon name="pricetag" class="icon-badge"></ion-icon> \n                  <ion-badge class="badge-icon" [color]="getDataSts(uRequest.status,\'color\')">\n                    <ion-icon name="checkmark"></ion-icon>\n                  </ion-badge>\n                </button>\n\n                <button ion-button only-icon clear *ngIf ="uRequest.status==2"(click)=\'shwProviderProposal(uRequest.proposal)\' >\n                  <ion-icon name="pricetag" class="icon-badge"></ion-icon> \n                  <ion-badge class="badge-icon" [color]="getDataSts(uRequest.status,\'color\')">\n                    <ion-icon name="checkmark-circle-outline"></ion-icon>\n                  </ion-badge>\n                </button>\n            </ion-col>  \n\n\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options>  \n        <button ion-button expandable color="danger" (click)="delete(slidingItem, uRequest.id, uRequest.status)">\n          <ion-icon name="trash"></ion-icon>\n          Eliminar\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>  \n</ion-content>\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\user-requests-detail\user-requests-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__utils_status_mapping__["a" /* StatusMapping */],
        __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_7__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Nav */]])
], UserRequestsDetailPage);

//# sourceMappingURL=user-requests-detail.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusMapping; });
var StatusMapping = (function () {
    function StatusMapping() {
    }
    StatusMapping.prototype.getData = function (status) {
        var stsData = {
            "color": this.getColor(status),
            "char": this.getChar(status),
        };
        return stsData;
    };
    StatusMapping.prototype.getColor = function (status) {
        var colorList = new Map();
        colorList.set(0, "openSts");
        colorList.set(1, "processedSts");
        colorList.set(2, "finishedSts");
        colorList.set(3, "canceledSts");
        return colorList.get(status);
    };
    StatusMapping.prototype.getChar = function (status) {
        var charList = new Map();
        charList.set(0, "A");
        charList.set(1, "P");
        charList.set(2, "E");
        charList.set(3, "F");
        return charList.get(status);
    };
    return StatusMapping;
}());

//# sourceMappingURL=status-mapping.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProposalDetailPage = (function () {
    function ProposalDetailPage(navCtrl, navParams, viewCtrl, alertCtrl, apiSvc, showToaster, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.apiSvc = apiSvc;
        this.showToaster = showToaster;
        this.appCtrl = appCtrl;
        this.proposal = {};
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].SPINNER };
    }
    ProposalDetailPage.prototype.onRatingChange = function (event) {
        console.log(event);
        console.log("rating", this.ranking);
    };
    ProposalDetailPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.data);
        this.ranking = 0;
        this.proposal = this.navParams.data;
    };
    ProposalDetailPage.prototype.closeView = function () {
        this.viewCtrl.dismiss();
    };
    ProposalDetailPage.prototype.rateTheService = function (providerId, requestId) {
        var _this = this;
        var sText;
        if (this.ranking === 1) {
            sText = " estrella ! ";
        }
        else {
            sText = " estrellas ! ";
        }
        var alert = this.alertCtrl.create({
            title: "¡ " + this.ranking + sText,
            message: "¿Estas seguro?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () { },
                },
                {
                    text: "Si",
                    handler: function () {
                        console.log("Buy clicked");
                        _this.doTheRate(providerId, requestId);
                    },
                },
            ],
        });
        alert.present();
    };
    ProposalDetailPage.prototype.doTheRate = function (providerId, requestId) {
        var _this = this;
        this.spinner = true;
        var request = { status: 2 };
        var provider = { score: this.ranking };
        this.apiSvc.putService(__WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].RATE_PROVIDER + providerId, JSON.stringify({ provider: provider })).subscribe(function (provider) {
            _this.apiSvc.putService(__WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].UPDATE_REQUEST + requestId, JSON.stringify({ request: request })).subscribe(function (rqst) {
                _this.spinner = false;
                _this.showToaster.reveal("       Gracias por usar AutoCar ", "middle", 3000);
                _this.closeView();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
            }, function (err) {
                _this.showToaster.reveal("Se ha producido un error en el status: " + err, "bottom", 3000);
                _this.spinner = false;
            });
        }, function (err) {
            _this.showToaster.reveal("Se ha producido un error:" + err, "bottom", 2000);
            _this.spinner = false;
        });
    };
    return ProposalDetailPage;
}());
ProposalDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-proposal-detail",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\proposal-detail\proposal-detail.html"*/'<ion-content>\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n  <ion-list no-padding> \n    <ion-item text-wrap>\n      <ion-icon name="cash" item-start></ion-icon>&nbsp;$ {{proposal.price}} MXN\n    </ion-item> \n    <ion-item>\n      \n      <ion-icon name="clock" item-start></ion-icon>&nbsp;{{proposal.time}}\n    </ion-item> \n    <ion-item text-wrap>\n      <ion-icon name="paper" item-start></ion-icon>&nbsp;{{proposal.comment}}\n    </ion-item>\n  </ion-list>\n\n  <div class="rating" *ngIf="proposal.provider_id != null && proposal.provider_id != \'\'" >\n    <h2 > <ion-icon name="ribbon" item-start> </ion-icon> No olvides calificar el servicio</h2>\n    <ion-grid class="rating-Ok">\n      <ion-row justify-content: center>\n        <ion-col col-9 class="stars">\n          <rating style= "text-align:right" [(ngModel)]="ranking"\n            readOnly="false"\n            max="5"\n            emptyStarIconName="star-outline"\n            halfStarIconName="star-half"\n            starIconName="star"\n            nullable="false" \n            (ngModelChange)="onRatingChange($event)">\n          </rating>\n        </ion-col>\n        <ion-col col-3  style="padding: 10px 0px 0px 0px !important; text-align:left !important">\n          <button ion-button icon-only clear (click)="rateTheService(proposal.provider_id, proposal.request_id)"><ion-icon name="checkmark-circle"> </ion-icon> </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n  <div style="text-align:center">\n    <button ion-button clear icon-only large (click)="closeView()">\n      <ion-icon name="close-circle" ></ion-icon>\n    </button>\n  </div> \n  \n</ion-content>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\proposal-detail\proposal-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], ProposalDetailPage);

//# sourceMappingURL=proposal-detail.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSupplierPageModule", function() { return AddSupplierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_supplier__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_supplier__["a" /* AddSupplierPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
    })
], AddSupplierPageModule);

//# sourceMappingURL=add-supplier.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSupplierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_services_user_services__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_constants__ = __webpack_require__(11);
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





// import { ProfilePage} from "../../pages/profile/profile"



var AddSupplierPage = (function () {
    function AddSupplierPage(navCtrl, navParams, viewCtrl, supplierMapping, autoservice, tstCtrl, appCtrl, fBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.supplierMapping = supplierMapping;
        this.autoservice = autoservice;
        this.tstCtrl = tstCtrl;
        this.appCtrl = appCtrl;
        this.services = [];
        this.mainServices = [];
        this.suppForms = [];
        this.isNewService = true;
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_6__utils_constants__["a" /* Constants */].SPINNER };
        this.myForm = fBuilder.group({
            "company_name": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "service": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "schedule": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "specialty": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "address": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "brands": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "lat": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "lng": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required])],
            "website": [""],
            "aditional_phone": ["", __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(10), isNumber])],
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
        this.spinner = true;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.mainServices = mservices;
            console.log(_this.mainServices);
            _this.autoservice.getServices().subscribe(function (services) {
                _this.services = services;
                console.log(_this.services);
                _this.spinner = false;
            }, function (err) {
                console.log(err);
                _this.spinner = false;
                _this.viewCtrl.dismiss();
            });
        }, function (err) {
            console.log(err);
            _this.spinner = false;
            _this.viewCtrl.dismiss();
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
        this.spinner = true;
        this.autoservice.getPosition().then(function (coords) {
            _this.fetchedLat = coords.coords.latitude;
            _this.fetchedLng = coords.coords.longitude;
            console.log("coords:", _this.fetchedLat, _this.fetchedLng);
            _this.spinner = false;
        });
    };
    AddSupplierPage.prototype.doNewRegister = function (form) {
        var _this = this;
        form.is_active = 2; // este debe activarse cuando paguen
        this.spinner = true;
        this.autoservice.createSupplier(this.data.id, form).subscribe(function (data) {
            if (data && !null) {
                _this.spinner = false;
                _this.tstCtrl.reveal("Registrado con éxito", "bottom", 2000);
                _this.close();
            }
            else {
                _this.tstCtrl.reveal("Error de conexión", "middle", 2500);
                _this.spinner = false;
            }
        }, function (err) {
            _this.spinner = false;
            _this.tstCtrl.reveal("Se ha producido un error intentalo más tarde", "middle", 2500);
        });
    };
    AddSupplierPage.prototype.updateRegister = function (form) {
        var _this = this;
        this.spinner = true;
        this.autoservice.updateSupplier(form.id, form).subscribe(function (data) {
            if (data && !null) {
                _this.spinner = false;
                _this.tstCtrl.reveal("Guardado con éxito", "bottom", 2000);
                _this.close();
            }
            else {
                _this.tstCtrl.reveal("Error de conexión", "middle", 2500);
                _this.spinner = false;
            }
        }, function (err) {
            _this.spinner = false;
            _this.tstCtrl.reveal("Se ha producido un error intentalo más tarde", "middle", 2500);
        });
    };
    AddSupplierPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddSupplierPage");
    };
    AddSupplierPage.prototype.close = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__user_services_user_services__["a" /* UserServicesPage */]);
    };
    AddSupplierPage.prototype.closeView = function () {
        this.viewCtrl.dismiss();
    };
    return AddSupplierPage;
}());
AddSupplierPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "page-add-supplier",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\add-supplier\add-supplier.html"*/'\n\n<ion-content>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-list class="login-List"> \n\n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n\n        <ion-item  class="login-Class"  *ngIf="isNewService" > \n\n          <ion-label for="service" style="color:rgb(146, 145, 145) !important" no-padding>Servicio</ion-label>\n\n            <ion-select id="service" [formControl]="myForm.controls[\'service\']" \n\n            placeholder="Selecciona un servicio" \n\n            cancelText="Atras" >\n\n              <ion-option *ngFor="let mainService of mainServices" [value]="mainService" no-padding>{{mainService}} </ion-option>\n\n              <ion-option *ngFor="let service of services" [value]="service" no-padding>{{service}} </ion-option>\n\n            </ion-select>\n\n        </ion-item> \n\n        \n\n        <ion-item class="login-Class" *ngIf="!isNewService" >\n\n          <ion-label  floating for="service"></ion-label>\n\n            <ion-input type="service"  placeholder="Servicio" readonly="true"\n\n              id="service" [formControl]= "myForm.controls[\'service\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'service\'].valid && myForm.controls[\'service\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item>\n\n        \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="company_name"></ion-label>\n\n            <ion-input type="text"  placeholder="Nombre del establecimiento"\n\n              id="company_name" [formControl]= "myForm.controls[\'company_name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'company_name\'].valid && myForm.controls[\'company_name\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="aditional_phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Teléfono del establecimiento (10 dígitos)" \n\n              id="aditional_phone" [formControl]= "myForm.controls[\'aditional_phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'aditional_phone\'].valid && myForm.controls[\'aditional_phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="specialty"></ion-label>\n\n              <ion-input type="text"  placeholder="Descripción"\n\n                id="specialty" [formControl]= "myForm.controls[\'specialty\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'specialty\'].valid && myForm.controls[\'specialty\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n    \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="address"></ion-label>\n\n            <ion-input type="text"  placeholder="Dirección "\n\n              id="address" [formControl]= "myForm.controls[\'address\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'address\'].valid && myForm.controls[\'address\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="brands"></ion-label>\n\n              <ion-input type="text"  placeholder="Marcas"\n\n                id="brands" [formControl]= "myForm.controls[\'brands\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'brands\'].valid && myForm.controls[\'brands\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n          </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="schedule"></ion-label>\n\n            <ion-input type="text"  placeholder="Horario"\n\n              id="schedule" [formControl]= "myForm.controls[\'schedule\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'schedule\'].valid && myForm.controls[\'schedule\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="website"></ion-label>\n\n            <ion-input type="text"  placeholder="Sitio web" [formControl]= "myForm.controls[\'website\']"\n\n              id="website"></ion-input>\n\n        </ion-item> 	\n\n        <br/>\n\n        <ion-item class="coords-Class">\n\n          <ion-label for="lat" item-start></ion-label >\n\n          <ion-input type="text"  placeholder="latitud" [(ngModel)]="fetchedLat"\n\n            id="lat" [formControl]= "myForm.controls[\'lat\']"  ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lat\'].valid && myForm.controls[\'lat\'].touched"   \n\n              class="alert alert-danger"></p>\n\n\n\n          <ion-label for="lng"></ion-label>\n\n          <ion-input type="text"  placeholder="longitud"  [(ngModel)]="fetchedLng"\n\n            id="lng" [formControl]= "myForm.controls[\'lng\']" ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lng\'].valid && myForm.controls[\'lng\'].touched"   \n\n              class="alert alert-danger"></p>\n\n          <button ion-button round type="button" (click)=getMyPos() color="buttons" item-end><ion-icon name="locate"></ion-icon> </button>\n\n        </ion-item> \n\n\n\n        <br/>\n\n        <div text-center padding> \n\n            <button [hidden]=!isNewService ion-button block round type="submit" class="ok" [disabled]="!myForm.valid && !spinner">Registrar</button>\n\n            <button [hidden]=isNewService ion-button block round type="submit" class="ok" [disabled]="!myForm.valid">Guardar</button>\n\n            \n\n            <button  ion-button block round type="button" class="cancel" (click)="closeView()" >Cancelar</button>\n\n        </div>   \n\n        <br/>\n\n\n\n      </form>     \n\n  </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\add-supplier\add-supplier.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */], __WEBPACK_IMPORTED_MODULE_2__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */],
        __WEBPACK_IMPORTED_MODULE_0__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_2__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
], AddSupplierPage);

//# sourceMappingURL=add-supplier.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_profile_service__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_supplier_add_supplier__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_supplier_detail_supplier_detail__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_provider_requests_provider_requests__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserServicesPage = (function () {
    function UserServicesPage(navCtrl, navParams, profileSvc, settings, showToaster, translateService, popCtrl, ldingCtrl, apiSvc, event) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileSvc = profileSvc;
        this.settings = settings;
        this.showToaster = showToaster;
        this.translateService = translateService;
        this.popCtrl = popCtrl;
        this.ldingCtrl = ldingCtrl;
        this.apiSvc = apiSvc;
        this.event = event;
        this.userServices = [];
        this.user = {};
        this.params = {};
        this.spinner = false;
        this.translateService.get("LOGIN_ERROR").subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_8__utils_constants__["a" /* Constants */].SPINNER };
    }
    UserServicesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.spinner = true;
        this.settings.settingsObservable.subscribe(function (data) {
            _this.user = data;
            if (_this.user !== undefined && _this.user !== null && _this.user !== {}) {
                console.log("user::", _this.user);
                _this.getData();
            }
            else {
                _this.spinner = false;
                _this.ionViewDidLoad();
            }
        }, function (err) {
            _this.showToaster.reveal("Volver a iniciar sesión", "bottom", 3000);
            _this.spinner = false;
        });
    };
    UserServicesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_8__utils_constants__["a" /* Constants */].USERS_PROVIDERS + this.user.id).subscribe(function (usrData) {
            if (usrData.user.length === 0) {
                _this.showToaster.reveal("Aun no registras ningún servicio", "bottom", 3500);
                refresher.complete();
            }
            else {
                _this.userServices = usrData.user[0].providers;
            }
            refresher.complete();
        }, function (err) {
            _this.showToaster.reveal("cargando...", "bottom", 300);
            refresher.complete();
            _this.ionViewDidLoad();
        });
    };
    UserServicesPage.prototype.getData = function () {
        var _this = this;
        console.log("Entro al get dataaaaaaaaaaaaaaaaaaa!!!!");
        this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_8__utils_constants__["a" /* Constants */].USERS_PROVIDERS + this.user.id).subscribe(function (usrData) {
            console.log("lo que trae: " + usrData);
            if (usrData.user[0].providers.length === 0) {
                _this.showToaster.reveal("Aún no registras ningún servicio...", "bottom", 3000);
                _this.spinner = false;
            }
            else {
                _this.userServices = usrData.user[0].providers;
                _this.emitNotifications(_this.userServices);
            }
            _this.spinner = false;
        }, function (err) {
            // this.showToaster.reveal("cargando...", "bottom", 300);
            console.log("el error: " + err);
            _this.spinner = false;
            _this.ionViewDidLoad();
        });
    };
    UserServicesPage.prototype.emitNotifications = function (myServices) {
        var totalRqsts = 0;
        myServices.forEach(function (element) {
            totalRqsts += element.providers_requests.length;
        });
        console.log("Numero total de RQST:", totalRqsts);
        this.event.publish("rqstNotify", totalRqsts);
    };
    UserServicesPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY === "down");
        });
    };
    UserServicesPage.prototype.addProvider = function (event) {
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: "50",
                    };
                },
            },
        };
        this.user.isNewProvider = true;
        this.user.provider = 0;
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_add_supplier_add_supplier__["a" /* AddSupplierPage */], this.user);
        popover.present({ ev: ev });
    };
    UserServicesPage.prototype.showRequests = function (requests, service) {
        if (requests.length !== 0) {
            var params = {};
            params.requests = requests;
            params.service = service;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_provider_requests_provider_requests__["a" /* ProviderRequestsPage */], params);
        }
        else {
            this.showToaster.reveal("    No hay solicitudes ...", "middle", 1500);
        }
    };
    UserServicesPage.prototype.showDetail = function (supplierData, event) {
        console.log(supplierData);
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_supplier_detail_supplier_detail__["a" /* SupplierDetailPage */], supplierData);
        popover.present({
            ev: "onMarker",
        });
    };
    UserServicesPage.prototype.editDetail = function (supplierData, event) {
        this.user.provider = supplierData;
        this.user.isNewProvider = false;
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_add_supplier_add_supplier__["a" /* AddSupplierPage */], this.user);
        popover.present({ ev: "" });
    };
    return UserServicesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], UserServicesPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* FabButton */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* FabButton */])
], UserServicesPage.prototype, "fabButton", void 0);
UserServicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-user-services",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\user-services\user-services.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Servicios <ion-icon name="build" item-end></ion-icon> </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>Actualizando...</ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    \n    <ion-item *ngFor="let provider of userServices" class="serv-list">\n      <ion-grid>\n        <ion-row>\n        \n          <ion-col col-4 class="img-servList">\n            <img [src]="\'assets/servicons/\'+provider.map_icon">\n          </ion-col>\n        \n        \n          <ion-col col-8>\n            <h2>{{provider.company_name}}</h2>\n            <div text-right class="action-icons">\n              <button ion-button only-icon clear (click)="showDetail(provider, $event)" > <ion-icon name="eye"></ion-icon></button>\n              <button ion-button only-icon clear (click)="editDetail(provider, $event)" > <ion-icon name="create" ></ion-icon></button>\n              <button ion-button only-icon clear (click)="showRequests(provider.providers_requests, provider.company_name)" > \n                <ion-icon name="pricetags" class="icon-badge"></ion-icon> \n                <ion-badge class="badge-icon" *ngIf="provider.providers_requests.length!=0" >{{provider.providers_requests.length}}</ion-badge> \n              </button>\n            </div>\n          </ion-col>\n        \n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n \n  <ion-fab #fab bottom right>\n    <button button-ion-fab ion-fab (click)="addProvider($event)">\n        <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  \n</ion-content>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\user-services\user-services.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
], UserServicesPage);

//# sourceMappingURL=user-services.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_launch_navigator__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attached_images_attached_images__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_user_detail_customer_user_detail__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__provider_proposal_provider_proposal__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProviderRequestsPage = (function () {
    function ProviderRequestsPage(navCtrl, navParams, viewCtrl, shwToaster, popCtrl, apiSvc, autoSvc, lchNav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.shwToaster = shwToaster;
        this.popCtrl = popCtrl;
        this.apiSvc = apiSvc;
        this.autoSvc = autoSvc;
        this.lchNav = lchNav;
        this.serviceRequest = {};
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_6__utils_constants__["a" /* Constants */].SPINNER };
    }
    ProviderRequestsPage.prototype.ionViewDidLoad = function () {
        this.serviceRequest = this.navParams.data;
        console.log(this.serviceRequest);
    };
    ProviderRequestsPage.prototype.close = function () {
        console.log("En close");
        this.viewCtrl.dismiss();
    };
    ProviderRequestsPage.prototype.navigate = function (destination) {
        var _this = this;
        if (destination[0] !== null && destination[0] !== null && destination[0] !== "") {
            this.spinner = true;
            this.autoSvc.getPosition().then(function (pos) {
                var options = {
                    start: [pos.coords.latitude, pos.coords.longitude],
                };
                _this.spinner = false;
                _this.lchNav.navigate(destination, options).then(function (success) {
                    _this.spinner = false;
                }, function (error) {
                    _this.spinner = false;
                    _this.shwToaster.reveal("No fue posible iniciar el navegador...", "middle", 2000);
                });
            });
        }
        else {
            this.shwToaster.reveal("Esta solicitud no cuenta con ubicación...", "middle", 2000);
        }
    };
    ProviderRequestsPage.prototype.showImages = function (images) {
        console.log("attachment::", images);
        var imagesUrl = this.verifyImages(images);
        if (imagesUrl.length !== 0) {
            var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_4__attached_images_attached_images__["a" /* AttachedImagesPage */], imagesUrl);
            popover.present({
                ev: "non",
            });
        }
        else {
            this.shwToaster.reveal("Esta solicitud no cuenta con imágenes", "middle", 2000);
        }
    };
    ProviderRequestsPage.prototype.verifyImages = function (images) {
        var count = 0;
        var attImages = [];
        images.forEach(function (element) {
            if (element !== null && element !== "nil" && element !== "") {
                attImages[count] = element;
                count++;
            }
        });
        return attImages;
    };
    ProviderRequestsPage.prototype.showCustomerProfile = function (customerId) {
        var _this = this;
        console.log("Customer ID::", customerId);
        this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_6__utils_constants__["a" /* Constants */].PROVIDER_CUSTOMER + customerId).subscribe(function (customerData) {
            console.log(customerData);
            _this.showCustomerData(customerData);
        }, function (err) { _this.shwToaster.reveal("Se ha prodiucido un error:" + err, "bottom", 2000); });
    };
    ProviderRequestsPage.prototype.showCustomerData = function (customerData) {
        var popView = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_7__customer_user_detail_customer_user_detail__["a" /* CustomerUserDetailPage */], customerData);
        popView.present({ ev: "none" });
    };
    ProviderRequestsPage.prototype.reply = function (request) {
        console.log("INFO REQUEST", request);
        if (request.p_status !== 1) {
            var popView = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_9__provider_proposal_provider_proposal__["a" /* ProviderProposalPage */], request);
            popView.present({ ev: "none" });
        }
        else {
            this.shwToaster.reveal("Ya respondiste esta solicitud", "middle", 2000);
        }
    };
    return ProviderRequestsPage;
}());
ProviderRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "page-provider-requests",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\provider-requests\provider-requests.html"*/'<ion-content>\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n  <ion-list no-lines>\n    <ion-list-header>\n      <br/>\n      <ion-icon name="build"></ion-icon>\n      <strong>Solicitudes de {{serviceRequest.service}}</strong>\n    </ion-list-header>\n    <ion-item  class="request-card" *ngFor="let request of serviceRequest.requests" text-wrap>\n    <ion-card padding>\n        <p><ion-icon  item-start name="mail-open"></ion-icon> {{request.comment}}</p>\n        <p><ion-icon  item-start name="car"></ion-icon>{{request.vehicle}}</p>\n        <p><ion-icon  name="pin" item-start></ion-icon>\n          <a (click)="navigate([request.lat, request.lng])">Ubicación\n            <ion-icon color="nav" name="navigate"></ion-icon>\n          </a>\n        </p>\n        <p><ion-icon name="attach" item-start></ion-icon><a (click)="showImages([\n            request.url_pic1,\n            request.url_pic2,\n            request.url_pic3\n          ])"> Imagenes\n            <ion-icon color="nav" name="photos"></ion-icon>\n          </a>\n        </p>\n        <div style="text-align:right">\n          <p>{{request.created_at | date: \'dd-MM-yyyy\'}}</p> \n          <p>{{request.created_at | date: \'h:mm - a\'}}</p> \n        </div>\n        <ion-fab left bottom class="r-card">\n            <button ion-fab mini class="fab-options"><ion-icon name="arrow-dropright"></ion-icon></button>\n            <ion-fab-list side="right" >\n              <br/>\n              <button ion-fab mini clear class="fab-list" (click)= "reply(request)"> <ion-icon name="redo"></ion-icon></button>\n              <button ion-fab mini clear class="fab-list" (click)="showCustomerProfile(request.user_id)"><ion-icon name="person"></ion-icon></button>\n              <!-- <button ion-fab mini clear class="fab-list"><ion-icon name="trash"></ion-icon></button> -->\n            </ion-fab-list>\n          </ion-fab> \n      </ion-card>\n\n    </ion-item>\n\n  </ion-list>   \n  \n  <ion-fab #fab top right class="requests">\n      <button button-ion-fab ion-fab  mini (click)="close()">\n          <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\provider-requests\provider-requests.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__service_autoservice_service__["a" /* AutoserviceService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_5__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_8__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], ProviderRequestsPage);

//# sourceMappingURL=provider-requests.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerUserDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerUserDetailPage = (function () {
    function CustomerUserDetailPage(navCtrl, navParams, viewCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.userData = {};
    }
    CustomerUserDetailPage.prototype.ionViewDidLoad = function () {
        this.userData = this.navParams.data.customer;
        console.log(this.userData);
    };
    CustomerUserDetailPage.prototype.closeView = function () {
        this.viewCtrl.dismiss();
    };
    CustomerUserDetailPage.prototype.makeACall = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log("Launched dialer!"); })
            .catch(function () { return console.log("Error launching dialer"); });
    };
    return CustomerUserDetailPage;
}());
CustomerUserDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-customer-user-detail",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\customer-user-detail\customer-user-detail.html"*/'<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class ="list">  \n    <p><ion-icon name="person" item-start></ion-icon>&nbsp;{{userData.name}}</p> \n    <p><ion-icon name="call" item-start></ion-icon>&nbsp;<a (click)= makeACall(userData.phone)>{{userData.phone}}</a></p> \n    <p><ion-icon name="mail" item-start></ion-icon>&nbsp;{{userData.email}}</p>\n  </div>\n  <div style="text-align:center">\n    <button ion-button clear icon-only large (click)="closeView()">\n      <ion-icon name="close-circle" ></ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\customer-user-detail\customer-user-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
], CustomerUserDetailPage);

//# sourceMappingURL=customer-user-detail.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderProposalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProviderProposalPage = (function () {
    function ProviderProposalPage(navCtrl, navParams, viewCtrl, formBuilder, apiSvc, shwToaster, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.apiSvc = apiSvc;
        this.shwToaster = shwToaster;
        this.appCtrl = appCtrl;
        this.spinner = false;
        this.params = {};
        this.proposalForm = formBuilder.group({
            "price": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, isNumber])],
            "time": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(4)])],
            "comment": [""],
        });
        function isNumber(c) {
            return c.value > 0 ? null : { valid: false };
        }
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].SPINNER };
    }
    ProviderProposalPage.prototype.ionViewDidLoad = function () {
        console.log("QUIERO:::", this.navParams.data.id);
    };
    ProviderProposalPage.prototype.closeView = function () {
        this.viewCtrl.dismiss();
    };
    ProviderProposalPage.prototype.onSubmit = function (proposal) {
        var _this = this;
        this.spinner = true;
        var request = {};
        request.status = 1;
        request.p_status = 1;
        proposal.p_status = 1;
        proposal.request_id = this.navParams.data.id;
        this.apiSvc.postService(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].CREATE_PROPOSAL, JSON.stringify({ proposal: proposal })).subscribe(function (resp) {
            console.log(resp);
            _this.apiSvc.putService(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* Constants */].UPDATE_REQUEST + proposal.request_id, JSON.stringify({ request: request })).subscribe(function () {
                _this.shwToaster.reveal("        Tu propuesta se envió con éxito", "middle", 3000);
                _this.viewCtrl.dismiss();
                _this.spinner = false;
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages__["b" /* MainPage */]);
            }, function (err) {
                _this.shwToaster.reveal("Ha ocurrido un error" + err, "bottom", 2000);
                _this.viewCtrl.dismiss();
                _this.spinner = false;
            });
        }, function (err) {
            _this.shwToaster.reveal("Ha ocurrido un error" + err, "bottom", 2000);
            _this.viewCtrl.dismiss();
            _this.spinner = false;
        });
    };
    return ProviderProposalPage;
}());
ProviderProposalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-provider-proposal",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\provider-proposal\provider-proposal.html"*/'\n<ion-content padding>\n<spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n  <h2><ion-icon name="pricetag"></ion-icon> Propuesta</h2>\n  <ion-list >\n    <form id="prslForm" [formGroup]="proposalForm" (ngSubmit)="onSubmit(proposalForm.value)">\n      \n      <ion-item class="login-Class">\n        <ion-label class="price">$</ion-label>\n        <ion-label  floating for="price"></ion-label>\n        <ion-input type="number"  placeholder="Costo en $MXN" clearInput="true"\n          id="price" [formControl]= "proposalForm.controls[\'price\']"></ion-input>\n          <p *ngIf="!proposalForm.controls[\'price\'].valid && proposalForm.controls[\'price\'].touched"   \n            class="alert alert-danger"></p>\n      </ion-item>\n\n      <ion-item class="login-Class">\n        <ion-label floating for="time"></ion-label>\n        <ion-input type="text"  placeholder="Tiempo estimado" name="time" clearInput="true" maxlength="120"\n          id="time" [formControl]= "proposalForm.controls[\'time\']"></ion-input>\n          <p *ngIf="!proposalForm.controls[\'time\'].valid || (proposalForm.controls[\'time\'].touched && !proposalForm.controls[\'time\'].pending)"   \n            class="alert alert-danger"></p>\n      </ion-item>\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="comment"></ion-label>\n          <ion-textarea type="text"  placeholder="Comentarios" maxlength="120"\n            id="comment" [formControl]= "proposalForm.controls[\'comment\']" name="comment"></ion-textarea>\n            <p *ngIf="!proposalForm.controls[\'comment\'].valid && (proposalForm.controls[\'comment\'].touched)"   \n              class="alert alert-danger"></p>\n        </ion-item>\n\n        <br/><br/>\n        <div text-center padding>  \n            <button ion-button block round type="submit" color="submit" class="ok" [disabled]="!proposalForm.valid">Enviar</button>\n            <button ion-button block round type="button" color="submit" class="cancel" (click)=closeView()> Cancelar </button>\n        </div>   \n        <br/>\n\n    </form>\n  </ion-list>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\provider-proposal\provider-proposal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], ProviderProposalPage);

//# sourceMappingURL=provider-proposal.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUserDetailPageModule", function() { return CustomerUserDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_user_detail__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerUserDetailPageModule = (function () {
    function CustomerUserDetailPageModule() {
    }
    return CustomerUserDetailPageModule;
}());
CustomerUserDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__customer_user_detail__["a" /* CustomerUserDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_user_detail__["a" /* CustomerUserDetailPage */]),
        ],
    })
], CustomerUserDetailPageModule);

//# sourceMappingURL=customer-user-detail.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderProposalPageModule", function() { return ProviderProposalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_proposal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProviderProposalPageModule = (function () {
    function ProviderProposalPageModule() {
    }
    return ProviderProposalPageModule;
}());
ProviderProposalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__provider_proposal__["a" /* ProviderProposalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__provider_proposal__["a" /* ProviderProposalPage */]),
        ],
    })
], ProviderProposalPageModule);

//# sourceMappingURL=provider-proposal.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRequestsPageModule", function() { return ProviderRequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_requests__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProviderRequestsPageModule = (function () {
    function ProviderRequestsPageModule() {
    }
    return ProviderRequestsPageModule;
}());
ProviderRequestsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__provider_requests__["a" /* ProviderRequestsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__provider_requests__["a" /* ProviderRequestsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], ProviderRequestsPageModule);

//# sourceMappingURL=provider-requests.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServicesPageModule", function() { return UserServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_services__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserServicesPageModule = (function () {
    function UserServicesPageModule() {
    }
    return UserServicesPageModule;
}());
UserServicesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_services__["a" /* UserServicesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_services__["a" /* UserServicesPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], UserServicesPageModule);

//# sourceMappingURL=user-services.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_edit__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileEditPageModule = (function () {
    function ProfileEditPageModule() {
    }
    return ProfileEditPageModule;
}());
ProfileEditPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_edit__["a" /* ProfileEditPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_edit__["a" /* ProfileEditPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
    })
], ProfileEditPageModule);

//# sourceMappingURL=profile-edit.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileEditPage = (function () {
    function ProfileEditPage(navCtrl, navParams, fBuilder, viewCtrl, apiSvc, tstCTrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fBuilder = fBuilder;
        this.viewCtrl = viewCtrl;
        this.apiSvc = apiSvc;
        this.tstCTrl = tstCTrl;
        this.appCtrl = appCtrl;
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].SPINNER };
        this.myForm = fBuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(8)])],
            "phone": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(10)])],
            "email": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].email])],
        });
    }
    ProfileEditPage.prototype.ionViewDidLoad = function () {
        this.userData = this.navParams.data;
        this.loadParams(this.userData);
        console.log(this.userData);
    };
    ProfileEditPage.prototype.loadParams = function (uData) {
        this.myForm.controls["name"].setValue(uData.name);
        this.myForm.controls["phone"].setValue(uData.phone);
        this.myForm.controls["email"].setValue(uData.email);
    };
    ProfileEditPage.prototype.closeView = function () {
        this.viewCtrl.dismiss();
    };
    ProfileEditPage.prototype.onSubmit = function (user) {
        var _this = this;
        this.spinner = true;
        this.apiSvc.putService(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].UPDATE_USER + this.userData.id, JSON.stringify({ user: user })).subscribe(function (response) {
            console.log(response);
            _this.spinner = false;
            if (response !== null && response !== undefined) {
                _this.tstCTrl.reveal("Tus datos se han actualizado con éxito", "bottom", 2500);
                _this.viewCtrl.dismiss();
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
            }
        }, function (err) {
            _this.tstCTrl.reveal("Ha ocurrido un error, intentalo más tarde", "bottom", 2500);
            _this.spinner = false;
        });
    };
    return ProfileEditPage;
}());
ProfileEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile-edit',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\profile-edit\profile-edit.html"*/'<ion-content padding>\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n  <ion-list class="login-List"> \n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="name"></ion-label>\n          <ion-input type="text"  placeholder="Nombre y apellido"\n            id="name" [formControl]= "myForm.controls[\'name\']"></ion-input>\n            <p *ngIf="!myForm.controls[\'name\'].valid && myForm.controls[\'name\'].touched"   \n              class="alert alert-danger"></p>\n        </ion-item> 	\n        \n        <ion-item class="login-Class">\n          <ion-label floating for="phone"></ion-label>\n            <ion-input type="tel"  placeholder="Número telefónico (10 dígitos)" \n              id="phone" [formControl]= "myForm.controls[\'phone\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'phone\'].valid && myForm.controls[\'phone\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item>\n          \n        <ion-item class="login-Class">\n          <ion-label floating for="email"></ion-label>\n            <ion-input type="email"  placeholder="Email" \n              id="email" [formControl]= "myForm.controls[\'email\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'email\'].valid && myForm.controls[\'email\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item> 	\n\n        \n        <br/><br/>\n        <div text-center padding>  \n            <button ion-button block round type="submit" color="submit" class="ok" [disabled]="!myForm.valid && !spinner">Listo</button>\n            <button ion-button block round type="button"  class="cancel" [disabled]="spinner" (click)="closeView()" >Cancelar</button>\n        </div>   \n        <br/>\n\n      </form>     \n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\profile-edit\profile-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], ProfileEditPage);

//# sourceMappingURL=profile-edit.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, settings, shwToaster, apiSvc, nav, popCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.shwToaster = shwToaster;
        this.apiSvc = apiSvc;
        this.nav = nav;
        this.popCtrl = popCtrl;
        this.title = "Mi perfil";
        this.user = {};
        this.params = {};
        this.spinner = false;
        this.userData = {
            name: "",
            phone: "",
            email: ""
        };
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].SPINNER };
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.userData = {
            name: "",
            phone: "",
            email: ""
        };
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.spinner = true;
        this.settings.settingsObservable.subscribe(function (data) {
            console.log("LOCAL STORAGE DATA:", data);
            _this.user = data;
            _this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_5__utils_constants__["a" /* Constants */].LOGGED_USER_URL + "/" + _this.user.token).subscribe(function (uData) {
                _this.userData = uData[0];
                _this.spinner = false;
            }, function (err) {
                _this.shwToaster.reveal("Tu sesión ha expirado...", "bottom", 3000);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
                // agregar redireccionamiento a login
                _this.spinner = false;
            });
        }, function (err) {
            _this.shwToaster.reveal("Tu sesión ha expirado...", "bottom", 3000);
            _this.spinner = false;
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
        });
    };
    ProfilePage.prototype.editProfile = function (userData) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit__["a" /* ProfileEditPage */], userData);
        popover.present({
            ev: ""
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "page-profile",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n    \n\n    \n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n  <div text-right><ion-icon name="create" class="edit-pencil" (click)="editProfile(userData)"></ion-icon> </div>\n\n  <ion-list class="userData">\n\n    <ion-item><ion-icon name="person" item-start></ion-icon>{{userData.name}}</ion-item>\n\n    <ion-item (click)= makeACall(userData.phone)><ion-icon name="call" item-start></ion-icon>{{userData.phone}}</ion-item>\n\n    <ion-item><ion-icon name="mail" item-start></ion-icon>&nbsp;{{userData.email}}</ion-item>\n\n  </ion-list>\n\n  \n\n    <!-- <ion-tabs #UserTabs>\n\n      <ion-tab [root]="requestsPage" [rootParams]="user" tabIcon="list-box" tabTitle="Solicitudes" [tabBadge]="fetchedProposals" tabBadgeStyle="locate" ></ion-tab>\n\n      <ion-tab [root]="servicesPage" [rootParams]="user" tabIcon="build" tabTitle="Servicios" [tabBadge]="fetchedRequests" tabBadgeStyle="locate" ></ion-tab> \n\n      <ion-tab [root]="servicesPage" [rootParams]="user" tabIcon="build" tabTitle="Servicios"></ion-tab>\n\n    </ion-tabs> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\profile\profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_0__utils_toaster__["a" /* ShowToaster */], __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_0__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* PopoverController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPageModule", function() { return RequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], RequestPageModule);

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierDetailPageModule", function() { return SupplierDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supplier_detail__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_request__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_spinner_spinner_module__ = __webpack_require__(19);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supplier_detail__["a" /* SupplierDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_7__components_spinner_spinner_module__["SpinnerModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_6__request_request__["a" /* RequestPage */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], SupplierDetailPageModule);

//# sourceMappingURL=supplier-detail.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalDetailPageModule", function() { return ProposalDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proposal_detail__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProposalDetailPageModule = (function () {
    function ProposalDetailPageModule() {
    }
    return ProposalDetailPageModule;
}());
ProposalDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__proposal_detail__["a" /* ProposalDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__proposal_detail__["a" /* ProposalDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__["SpinnerModule"],
        ],
    })
], ProposalDetailPageModule);

//# sourceMappingURL=proposal-detail.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestsDetailPageModule", function() { return UserRequestsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_requests_detail__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserRequestsDetailPageModule = (function () {
    function UserRequestsDetailPageModule() {
    }
    return UserRequestsDetailPageModule;
}());
UserRequestsDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_requests_detail__["a" /* UserRequestsDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_requests_detail__["a" /* UserRequestsDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], UserRequestsDetailPageModule);

//# sourceMappingURL=user-requests-detail.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRequestsPageModule", function() { return UserRequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_requests__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserRequestsPageModule = (function () {
    function UserRequestsPageModule() {
    }
    return UserRequestsPageModule;
}());
UserRequestsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_requests__["a" /* UserRequestsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_requests__["a" /* UserRequestsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__user_requests__["a" /* UserRequestsPage */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], UserRequestsPageModule);

//# sourceMappingURL=user-requests.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(663);
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
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: []
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCustomerPageModule", function() { return LoginCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_customer__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__ = __webpack_require__(19);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login_customer__["a" /* LoginCustomerPage */]),
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSupplierPageModule", function() { return LoginSupplierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_supplier__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__ = __webpack_require__(19);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_supplier__["a" /* LoginSupplierPage */]),
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_3__components_spinner_spinner_module__["SpinnerModule"],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], LoginSupplierPageModule);

//# sourceMappingURL=login-supplier.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestProviderDetailPageModule", function() { return RequestProviderDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_provider_detail__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestProviderDetailPageModule = (function () {
    function RequestProviderDetailPageModule() {
    }
    return RequestProviderDetailPageModule;
}());
RequestProviderDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__request_provider_detail__["a" /* RequestProviderDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_provider_detail__["a" /* RequestProviderDetailPage */]),
        ],
    })
], RequestProviderDetailPageModule);

//# sourceMappingURL=request-provider-detail.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_show_notification__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WelcomePage = (function () {
    function WelcomePage(navCtrl, settings, appCtrl, apiSvc, shwTostr, shwNotification) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.appCtrl = appCtrl;
        this.apiSvc = apiSvc;
        this.shwTostr = shwTostr;
        this.shwNotification = shwNotification;
        this.spinner = false;
        this.params = {};
        this.user = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_6__utils_constants__["a" /* Constants */].SPINNER };
    }
    WelcomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.spinner = true;
        this.settings.settingsObservable.subscribe(function (strgeData) {
            console.log("Hay datos guardados==>", strgeData);
            if (strgeData.token !== "" && strgeData.token !== null && strgeData.token !== undefined) {
                _this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_6__utils_constants__["a" /* Constants */].LOGGED_USER_URL + "/" + strgeData.token).subscribe(function (data) {
                    if (data[0] !== undefined && data[0] !== null && data[0] !== "") {
                        if (data[0].id === strgeData.id) {
                            _this.shwNotification.startNotifications(data[0].id);
                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages__["b" /* MainPage */]);
                            _this.spinner = false;
                        }
                        else {
                            _this.settings.update("token", "");
                            _this.settings.update("logged", false);
                            _this.settings.clear();
                        }
                    }
                    _this.spinner = false;
                }, function (err) {
                    _this.spinner = false;
                    _this.shwTostr.reveal("Error de conexión, comprueba tu conexión a internet. " + err, "middle", 3000);
                });
            }
            else {
                _this.settings.update("token", "");
                _this.spinner = false;
            }
        }, function (err) {
            _this.spinner = false;
        });
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push("LoginPage");
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push("SignupPage");
    };
    return WelcomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WelcomePage.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WelcomePage.prototype, "events", void 0);
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "page-welcome",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n    <spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n    </div>\n\n  </div>\n\n  <div padding>\n\n    <!-- <button ion-button block round (click)="signup()" class="signup">{{ \'SIGNUP\' | translate }}</button> -->\n\n    <button ion-button block round (click)="login()" class="login" [disabled]="spinner">{{ \'LOGIN\' | translate }}</button>\n\n    <button ion-button block round (click)="signup()" class="reg" [disabled]="spinner" >{{ \'SIGNUP\' | translate }}</button>\n\n    \n\n    \n\n  </div>\n\n</ion-content> \n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_7__utils_show_notification__["a" /* ShowNotification */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_user_mapping__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(72);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login-customer",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\login-customer\login-customer.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login Customer</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-list class="login-List"> \n\n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="name"></ion-label>\n\n          <ion-input type="text"  placeholder="Nombre y apellido"\n\n            id="name" [formControl]= "myForm.controls[\'name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'name\'].valid && myForm.controls[\'name\'].touched"   \n\n              class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n          \n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="email"></ion-label>\n\n            <ion-input type="email"  placeholder="Email" \n\n              id="email" [formControl]= "myForm.controls[\'email\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'email\'].valid && myForm.controls[\'email\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Contraseña (mínimo 6 caracteres)" \n\n              id="password" [formControl]= "myForm.controls[\'password\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'password\'].valid && myForm.controls[\'password\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Confirma tu contraseña" \n\n              id="cPassword" [formControl]= "myForm.controls[\'cPassword\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'cPassword\'].valid && myForm.controls[\'cPassword\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Número telefónico (10 dígitos)" \n\n              id="phone" [formControl]= "myForm.controls[\'phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'phone\'].valid && myForm.controls[\'phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n        <br/><br/>\n\n        <div text-center padding>  \n\n            <button ion-button block round type="submit" color="submit" class="ok" [disabled]="!myForm.valid">Registrar</button>\n\n        </div>   \n\n        <br/>\n\n\n\n      </form>     \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\login-customer\login-customer.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */], __WEBPACK_IMPORTED_MODULE_5__utils_user_mapping__["a" /* UserMapping */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_5__utils_user_mapping__["a" /* UserMapping */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], LoginCustomerPage);

//# sourceMappingURL=login-customer.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSupplierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(72);
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
        this.suppForms[1].is_active = 1; // este debe activarse con el pago
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login-supplier",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\login-supplier\login-supplier.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login Ssupplier</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-list class="login-List"> \n\n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="name"></ion-label>\n\n          <ion-input type="text"  placeholder="Nombre y apellido"\n\n            id="name" [formControl]= "myForm.controls[\'name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'name\'].valid && myForm.controls[\'name\'].touched"   \n\n              class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n          \n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="email"></ion-label>\n\n            <ion-input type="email"  placeholder="Email" \n\n              id="email" [formControl]= "myForm.controls[\'email\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'email\'].valid && myForm.controls[\'email\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Contraseña (mínimo 6 caracteres)" \n\n              id="password" [formControl]= "myForm.controls[\'password\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'password\'].valid && myForm.controls[\'password\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="password"></ion-label>\n\n            <ion-input type="password"  placeholder="Confirma tu contraseña" \n\n              id="cPassword" [formControl]= "myForm.controls[\'cPassword\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'cPassword\'].valid && myForm.controls[\'cPassword\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Teléfono particular (10 dígitos)" \n\n              id="phone" [formControl]= "myForm.controls[\'phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'phone\'].valid && myForm.controls[\'phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label floating for="aditional_phone"></ion-label>\n\n            <ion-input type="tel"  placeholder="Teléfono del establecimiento (10 dígitos)" \n\n              id="aditional_phone" [formControl]= "myForm.controls[\'aditional_phone\']"></ion-input>\n\n            <div *ngIf="!myForm.controls[\'aditional_phone\'].valid && myForm.controls[\'aditional_phone\'].touched"   \n\n              class="alert alert-danger"></div>\n\n        </ion-item>\n\n\n\n        <ion-item  class="login-Class" > \n\n          <ion-label for="service" style="color:rgb(146, 145, 145) !important" no-padding>Servicio</ion-label>\n\n              <ion-select id="service" [formControl]="myForm.controls[\'service\']" \n\n              placeholder="Selecciona un servicio" \n\n              cancelText="Atras" >\n\n                <ion-option *ngFor="let mainService of mainServices" [value]="mainService" no-padding>{{mainService}} </ion-option>\n\n                <ion-option *ngFor="let service of services" [value]="service" no-padding>{{service}} </ion-option>\n\n              </ion-select>\n\n        </ion-item> \n\n        \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="company_name"></ion-label>\n\n            <ion-input type="text"  placeholder="Nombre del establecimiento"\n\n              id="company_name" [formControl]= "myForm.controls[\'company_name\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'company_name\'].valid && myForm.controls[\'company_name\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="specialty"></ion-label>\n\n              <ion-input type="text"  placeholder="Descripción"\n\n                id="specialty" [formControl]= "myForm.controls[\'specialty\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'specialty\'].valid && myForm.controls[\'specialty\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n    \n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="address"></ion-label>\n\n            <ion-input type="text"  placeholder="Dirección "\n\n              id="address" [formControl]= "myForm.controls[\'address\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'address\'].valid && myForm.controls[\'address\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n            <ion-label  floating for="brands"></ion-label>\n\n              <ion-input type="text"  placeholder="Marcas"\n\n                id="brands" [formControl]= "myForm.controls[\'brands\']"></ion-input>\n\n              <p *ngIf="!myForm.controls[\'brands\'].valid && myForm.controls[\'brands\'].touched"   \n\n                  class="alert alert-danger"></p>\n\n          </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="schedule"></ion-label>\n\n            <ion-input type="text"  placeholder="Horario"\n\n              id="schedule" [formControl]= "myForm.controls[\'schedule\']"></ion-input>\n\n            <p *ngIf="!myForm.controls[\'schedule\'].valid && myForm.controls[\'schedule\'].touched"   \n\n                class="alert alert-danger"></p>\n\n        </ion-item> 	\n\n\n\n        <ion-item class="login-Class">\n\n          <ion-label  floating for="website"></ion-label>\n\n            <ion-input type="text"  placeholder="Sitio web" [formControl]= "myForm.controls[\'website\']"\n\n              id="website"></ion-input>\n\n        </ion-item> 	\n\n        <br/>\n\n        <ion-item class="coords-Class">\n\n          <ion-label for="lat" item-start></ion-label >\n\n          <ion-input type="text"  placeholder="latitud" [(ngModel)]="fetchedLat"\n\n            id="lat" [formControl]= "myForm.controls[\'lat\']"  ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lat\'].valid && myForm.controls[\'lat\'].touched"   \n\n              class="alert alert-danger"></p>\n\n\n\n            <ion-label for="lng"></ion-label>\n\n          <ion-input type="text"  placeholder="longitud"  [(ngModel)]="fetchedLng"\n\n            id="lng" [formControl]= "myForm.controls[\'lng\']" ></ion-input>\n\n          <p *ngIf="!myForm.controls[\'lng\'].valid && myForm.controls[\'lng\'].touched"   \n\n              class="alert alert-danger"></p>\n\n            <button ion-button round type="button" (click)=getMyPos() color="buttons" item-end><ion-icon name="locate"></ion-icon> </button>\n\n        </ion-item>\n\n\n\n        <br/>\n\n        <div text-center padding> \n\n            <button ion-button block round type="submit" class="ok" [disabled]="!myForm.valid">Registrar</button>\n\n        </div>   \n\n        <br/>\n\n\n\n      </form>     \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\login-supplier\login-supplier.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */], __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */],
        __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], LoginSupplierPage);

//# sourceMappingURL=login-supplier.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_phonegap_local_notification__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_autoservice_autoservice_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings_module__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_supplier_detail_supplier_detail_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_customer_login_customer_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_supplier_login_supplier_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_supplier_add_supplier_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_request_request_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_user_services_user_services_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_user_requests_user_requests_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_request_detail_request_detail_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_attached_images_attached_images_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_profile_profile_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_request_provider_detail_request_provider_detail_module__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_mode__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__utils_utils__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_services__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_provider_requests_provider_requests_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_customer_user_detail_customer_user_detail_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_provider_proposal_provider_proposal_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_proposal_detail_proposal_detail_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_user_requests_detail_user_requests_detail_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__utils_status_mapping__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__utils_supplier_mapping__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_profile_edit_profile_edit_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_local_notifications__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { Items } from "../mocks/providers/items";


































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "./assets/i18n/", ".json");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            // ElasticHeader,
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_12_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyABWUtTglN8YGqcYI1zyjeRdOJx5r3TrZU",
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            //AngularFireModule.initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]],
                },
            }),
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/attached-images/attached-images.module#AttachedImagesPageModule', name: 'AttachedImagesPage', segment: 'attached-images', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/request-detail/request-detail.module#RequestDetailPageModule', name: 'RequestDetailPage', segment: 'request-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/autoservice/autoservice.module#AutoservicePageModule', name: 'AutoservicePage', segment: 'autoservice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-supplier/add-supplier.module#AddSupplierPageModule', name: 'AddSupplierPage', segment: 'add-supplier', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/customer-user-detail/customer-user-detail.module#CustomerUserDetailPageModule', name: 'CustomerUserDetailPage', segment: 'customer-user-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/provider-proposal/provider-proposal.module#ProviderProposalPageModule', name: 'ProviderProposalPage', segment: 'provider-proposal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/provider-requests/provider-requests.module#ProviderRequestsPageModule', name: 'ProviderRequestsPage', segment: 'provider-requests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-services/user-services.module#UserServicesPageModule', name: 'UserServicesPage', segment: 'user-services', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile-edit/profile-edit.module#ProfileEditPageModule', name: 'ProfileEditPage', segment: 'profile-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/supplier-detail/supplier-detail.module#SupplierDetailPageModule', name: 'SupplierDetailPage', segment: 'supplier-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/proposal-detail/proposal-detail.module#ProposalDetailPageModule', name: 'ProposalDetailPage', segment: 'proposal-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-requests-detail/user-requests-detail.module#UserRequestsDetailPageModule', name: 'UserRequestsDetailPage', segment: 'user-requests-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-requests/user-requests.module#UserRequestsPageModule', name: 'UserRequestsPage', segment: 'user-requests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-customer/login-customer.module#LoginCustomerPageModule', name: 'LoginCustomerPage', segment: 'login-customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-supplier/login-supplier.module#LoginSupplierPageModule', name: 'LoginSupplierPage', segment: 'login-supplier', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/request-provider-detail/request-provider-detail.module#RequestProviderDetailPageModule', name: 'RequestProviderDetailPage', segment: 'request-provider-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
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
            __WEBPACK_IMPORTED_MODULE_26__pages_user_requests_user_requests_module__["UserRequestsPageModule"],
            __WEBPACK_IMPORTED_MODULE_25__pages_user_services_user_services_module__["UserServicesPageModule"],
            __WEBPACK_IMPORTED_MODULE_28__pages_request_detail_request_detail_module__["RequestDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_30__pages_attached_images_attached_images_module__["AttachedImagesPageModule"],
            __WEBPACK_IMPORTED_MODULE_31__pages_profile_profile_module__["ProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_32__pages_request_provider_detail_request_provider_detail_module__["RequestProviderDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_36__pages_provider_requests_provider_requests_module__["ProviderRequestsPageModule"],
            __WEBPACK_IMPORTED_MODULE_37__pages_customer_user_detail_customer_user_detail_module__["CustomerUserDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_38__pages_provider_proposal_provider_proposal_module__["ProviderProposalPageModule"],
            __WEBPACK_IMPORTED_MODULE_39__pages_proposal_detail_proposal_detail_module__["ProposalDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_40__pages_user_requests_detail_user_requests_detail_module__["UserRequestsDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_43__pages_profile_edit_profile_edit_module__["ProfileEditPageModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"],
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["a" /* Api */],
            // Items,
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_34__utils_utils__["a" /* ShowNotification */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_phonegap_local_notification__["a" /* PhonegapLocalNotification */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_35__service_services__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_34__utils_utils__["b" /* ShowToaster */],
            __WEBPACK_IMPORTED_MODULE_41__utils_status_mapping__["a" /* StatusMapping */],
            __WEBPACK_IMPORTED_MODULE_42__utils_supplier_mapping__["a" /* SupplierMapping */],
            __WEBPACK_IMPORTED_MODULE_44__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__["a" /* File */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["h" /* IonicErrorHandler */] },
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(69);
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
        return this.geolocation.getCurrentPosition({ timeout: 40000, enableHighAccuracy: true, });
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
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].UPDATE_SUPPLIER_URL + id, body, options).map(function (res) {
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(65);
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(649);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'spinner',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\components\spinner\spinner.html"*/'<!-- Theme Spinner -->\n\n<ion-content no-padding  class="cont" >\n\n<ion-grid no-padding >\n\n    <ion-row>\n\n        <img [src]="path" />\n\n        <p style="color:rgb(9, 56, 185); text-align:center; margin-top:180px !important; font-weight:bolder; align-items: center;\n\n        justify-content: center; ">Cargando...</p>\n\n    </ion-row>\n\n</ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\components\spinner\spinner.html"*/
    }),
    __metadata("design:paramtypes", [])
], Spinner);

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(648);
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
    function Items() {
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
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
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
    __metadata("design:paramtypes", [])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 648:
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

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(266);
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

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(69);
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

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_show_notification__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__ = __webpack_require__(652);
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
    function AutoservicePage(navCtrl, navParams, AsSvc, popCtrl, toastCtrl, autoservice, apiSvc, backgroundMode, shwNotification, showTstr, events, settings, appCtrl, androidPermissions) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AsSvc = AsSvc;
        this.popCtrl = popCtrl;
        this.toastCtrl = toastCtrl;
        this.autoservice = autoservice;
        this.apiSvc = apiSvc;
        this.backgroundMode = backgroundMode;
        this.shwNotification = shwNotification;
        this.showTstr = showTstr;
        this.events = events;
        this.settings = settings;
        this.appCtrl = appCtrl;
        this.androidPermissions = androidPermissions;
        this.spinnerSts = false;
        this.params = {};
        this.usrPos = {};
        this.distance = 5;
        this.user = {};
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
        console.log("ocpión::", chosenService);
        if (chosenService !== null && chosenService !== undefined) {
            this.spinnerSts = true;
            this.fetchSuppliers(chosenService);
        }
    };
    AutoservicePage.prototype.onMarkerService = function (params) {
        console.log("params:", params);
        this.params.data = params;
        this.params.mapData.lat = params.lat;
        this.params.mapData.lng = params.lng;
    };
    AutoservicePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.spinnerSts = true;
        this.AsSvc.getPosition().then(function (userPosition) {
            _this.fetchMainServices();
            _this.fillUsrData(userPosition);
            _this.spinnerSts = false;
        }).catch(function (error) {
            _this.presentToast("Por favor habilita los permisos de GPS");
            _this.spinnerSts = false;
        });
        var count = 1;
        this.settings.settingsObservable.subscribe(function (data) {
            _this.user.id = data.id;
        }, function (err) {
            _this.showTstr.reveal("Por favor vuelve a iniciar sesión", "bottom", 3000);
            _this.spinnerSts = false;
            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
        });
        // this.backgroundMode.enable();
        // setInterval(data => {
        //   console.log("timer:", count);
        //   if(this.user.id !== null && this.user.id !== undefined && this.user.id !== ""){
        //     this.apiSvc.getService(Constants.GET_NOTIFICATIONS + this.user.id).subscribe(
        //       notify => {
        //         console.log(notify);
        //         this.events.publish("notify", notify)
        //         if (notify.proposals !== 0 ){
        //           // this.shwNotification.reveal("Propuestas", "Tienes " + notify.proposals + " propuestas pendientes");
        //           this.shwNotification.show(1, "Tienes " + notify.proposals + " propuestas pendientes", notify.proposals);
        //         }
        //         if (notify.p_requests !== 0 ){
        //           // this.shwNotification.reveal("Solicitudes", "Tienes " + notify.p_requests + " solicitudes pendientes");
        //           this.shwNotification.show(2, "Tienes " + notify.p_requests + " solicitudes pendientes", notify.proposals);
        //         }
        //       }, err =>{
        //         this.showTstr.reveal("Error de conexión: " + err, "bottom", 3000)
        //       }
        //     );
        //   }
        //   count++;
        // }, Constants.NOTIFY_DELAY);
    };
    AutoservicePage.prototype.ngOnInit = function () {
        // this.spinnerSts = true;
        // this.fetchMainServices();
        // this.AsSvc.getPosition().then((userPosition) => {
        //   this.fillUsrData(userPosition);
        //   console.log("pos:", userPosition.coords);
        // }).catch((error) => {
        //   this.presentToast(JSON.stringify(error));
        //   this.spinnerSts = false;
        // });
    };
    AutoservicePage.prototype.fillUsrData = function (usrPosition) {
        this.params.userData = {
            userPos: {
                lat: usrPosition.coords.latitude,
                lng: usrPosition.coords.longitude,
                zoom: 15,
                mapTypeControl: true,
                streetViewControl: true,
                // iconUrl: "../assets/mapicons/you.png",
                iconUrl: "assets/mapicons/you.png",
            },
        };
        this.params.mapData.lat = usrPosition.coords.latitude;
        this.params.mapData.lng = usrPosition.coords.longitude;
    };
    AutoservicePage.prototype.showSettings = function (event) {
        var _this = this;
        this.params.data.selectService = null;
        this.events.subscribe("provDist", function (dist) {
            _this.distance = dist;
        });
        if (this.distance !== null && this.distance !== undefined && this.distance !== 0) {
            var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */], { "distance": this.distance });
            popover.present({
                ev: event,
            });
        }
        else {
            var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */], { "distance": 5 });
            popover.present({
                ev: event,
            });
        }
    };
    AutoservicePage.prototype.presentToast = function (msgTxt) {
        var toast = this.toastCtrl.create({
            message: msgTxt,
            duration: 2500,
            position: "middle",
        });
        toast.present();
    };
    AutoservicePage.prototype.fetchSuppliers = function (chosenService) {
        var _this = this;
        this.events.subscribe("provDist", function (eData) {
            _this.distance = eData;
        });
        this.autoservice.getPosition().then(function (coords) {
            var fetchedLat = coords.coords.latitude;
            var fetchedLng = coords.coords.longitude;
            var data = {
                "service": chosenService,
                "distance": _this.distance,
                "lat": fetchedLat,
                "lng": fetchedLng,
                "limit": 10,
            };
            _this.apiSvc.postService(__WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].PROVIDERS_DISTANCE_FULL, JSON.stringify({ data: data })).subscribe(function (providers) {
                _this.params.suppliers = providers.providers;
                console.log(_this.params.suppliers);
                _this.spinnerSts = false;
                if (providers.providers.length == 0) {
                    _this.showTstr.reveal("Lo sentimos, No hay proovedores cerca. Intenta buscando con una distancia mayor a " + _this.distance + " Km", "middle", 4500);
                }
                else {
                    _this.showTstr.reveal("selecciona un proveedor", "bottom", 2500);
                }
            }, function (err) {
                _this.showTstr.reveal("Error de conexion:" + err, "middle", 2500);
            });
        }, function (err) {
            _this.showTstr.reveal("Error de GPS:" + err, "middle", 2500);
        });
        // this.autoservice.getSuppliersq(chosenService)
        // .subscribe(
        //   supplier => {
        //     this.params.suppliers = supplier;
        //     console.log("fetched", this.params.suppliers);
        //     this.spinnerSts = false;
        //   },
        //   err => {
        //     console.log(err);
        //     this.spinnerSts = false;
        //   },
        // );
    };
    AutoservicePage.prototype.fetchServices = function () {
        var _this = this;
        this.autoservice.getServices().subscribe(function (services) {
            _this.params.services = services;
        }, function (err) {
            console.log(err);
            _this.showTstr.reveal("Error de conexión", "middle", 2000);
            _this.spinnerSts = false;
        });
    };
    AutoservicePage.prototype.fetchMainServices = function () {
        var _this = this;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.params.mainServices = mservices;
            _this.fetchServices();
        }, function (err) {
            console.log(err);
            _this.showTstr.reveal("Error de conexión", "middle", 2000);
            _this.spinnerSts = false;
        });
    };
    return AutoservicePage;
}());
AutoservicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-autoservice",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\autoservice\autoservice.html"*/'<ion-header style="height:0px" >\n\n  <ion-navbar style="height:5px" >\n\n    <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>        \n\n    <ion-title>Asistencia<ion-icon name="settings" float-right (click)=showSettings($event) class="icon-size" ></ion-icon></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<maps-layout-1\n\n  [data]="params.data"\n\n  [events]="params.events"\n\n  [userData]="params.userData"\n\n  [services]="params.services"\n\n  [mainServices]="params.mainServices"\n\n  [suppliers]="params.suppliers"\n\n  [mapData]="params.mapData"\n\n  [spinner]="params.spinner"\n\n  [spinnerSts]="spinnerSts"\n\n  (onMarkerService)="onMarkerService($event)"\n\n  (serviceIsSelected)="serviceIsSelected($event)"> \n\n  \n\n</maps-layout-1>\n\n\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\autoservice\autoservice.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__["a" /* AndroidPermissions */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_8__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_mode__["a" /* BackgroundMode */],
        __WEBPACK_IMPORTED_MODULE_3__utils_show_notification__["a" /* ShowNotification */],
        __WEBPACK_IMPORTED_MODULE_7__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
        __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
], AutoservicePage);

//# sourceMappingURL=autoservice.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_supplier_detail_supplier_detail__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_request_request__ = __webpack_require__(93);
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
    function MapsLayout1(popCtrl, toastCtrl, alertCtrl, autSvc, navCtrl) {
        this.popCtrl = popCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.autSvc = autSvc;
        this.navCtrl = navCtrl;
        this.onMarkerService = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.serviceIsSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.spinnerStatus = true;
        this.cleanSelect = false;
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
    MapsLayout1.prototype.svcSelected = function (service) {
        console.log("Seleccion:::", service);
        this.serviceIsSelected.emit(service);
        this.spinnerSts;
        this.mapZoom = 10;
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
    MapsLayout1.prototype.ionViewDidLoad = function () {
    };
    MapsLayout1.prototype.updatePos = function () {
        var _this = this;
        this.spinnerSts = true;
        this.autSvc.getPosition().then(function (pos) {
            console.log(pos);
            _this.mapData.lat = pos.coords.latitude;
            _this.mapData.lng = pos.coords.longitude;
            _this.userData.userPos.lat = pos.coords.latitude;
            _this.userData.userPos.lng = pos.coords.longitude;
            _this.mapZoom = 12;
            _this.spinnerSts = false;
            _this.ionViewDidLoad();
        }, function (err) {
            _this.svcToast("No fue posible obtener tu posición, intentalo nuevamente." + err, "middle");
        });
    };
    MapsLayout1.prototype.requestQuote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_request_request__["a" /* RequestPage */], null);
    };
    MapsLayout1.prototype.selectIcon = function (provider) {
        if (provider.is_active == 2) {
            return 'assets/mapicons/gold/' + provider.map_icon;
        }
        else {
            return 'assets/mapicons/blue/' + provider.map_icon;
        }
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
        selector: "maps-layout-1",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\components\maps\layout-1\maps.html"*/'\n\n<ion-content  has-header>\n\n  <div class="option-service">\n\n    <ion-item style="height:45px" no-lines > \n\n      <ion-label for="services" class ="srch" ><ion-icon  item-left name="search" ></ion-icon>Servicios</ion-label>\n\n      <ion-select id="services" requiered  [(ngModel)]="data.selectService" \n\n      (ionChange)="svcSelected(data.selectService)" \n\n      multiple="false" \n\n      cancelText="Atras">\n\n        <ion-option *ngFor="let mainService of mainServices" [value]="mainService">{{mainService}} </ion-option>\n\n        <ion-option *ngFor="let service of services | orderBy : \'+\'" [value]="service">{{service}} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </div>\n\n    \n\n\n\n\n\n  <sebm-google-map id="map" [latitude]="mapData.lat" [longitude]="mapData.lng" [zoom]="mapZoom" [mapTypeControl]=true [streetViewControl]=true>\n\n  \n\n    <sebm-google-map-marker *ngFor="let supplier of suppliers"  \n\n      [latitude]="supplier.lat" \n\n      [longitude]="supplier.lng" \n\n      [label]="supplier.markLabel"\n\n      (markerClick)="onEvent(\'onMarker\',supplier)"\n\n      [iconUrl]="selectIcon(supplier)">\n\n    </sebm-google-map-marker>\n\n    <sebm-google-map-marker [iconUrl]="userData.userPos.iconUrl" [latitude]="userData.userPos.lat" [longitude]="userData.userPos.lng" style="z-index:-2"></sebm-google-map-marker>\n\n\n\n  </sebm-google-map>\n\n  \n\n  <spinner [data]="spinner" *ngIf="spinnerSts" ></spinner>\n\n  \n\n  <ion-fab bottom left class="requests">\n\n    <button ion-fab color="locate" mini (click)="requestQuote()"><ion-icon name="pricetags"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-fab bottom left>\n\n      <button ion-fab color="locate" mini (click)="updatePos()"><ion-icon name="md-locate"></ion-icon></button>\n\n  </ion-fab>\n\n  \n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\components\maps\layout-1\maps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
], MapsLayout1);

//# sourceMappingURL=maps-layout-1.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageTransfer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
            // images[counter] = formData.pic1.substr(23);
            images[counter] = formData.pic1.substr(22);
            counter++;
        }
        if (formData.pic2 !== "") {
            //            images[counter] = formData.pic2.substr(23);
            images[counter] = formData.pic2.substr(22);
            counter++;
        }
        if (formData.pic3 !== "") {
            // images[counter] = formData.pic3.substr(23);
            images[counter] = formData.pic3.substr(22);
            counter++;
        }
        if (counter === 0) {
            return null;
        }
        else {
            return images;
        }
    };
    ImageTransfer.prototype.arrangeImage = function (image) {
        return JSON.stringify({ image: image });
    };
    ImageTransfer.prototype.getImageURL = function (attachmentId, picNumber) {
        return __WEBPACK_IMPORTED_MODULE_0__utils_constants__["a" /* Constants */].UPLOAD_IMG + "/" + attachmentId + "/" + picNumber;
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
], ImageTransfer);

//# sourceMappingURL=image-transfer.js.map

/***/ }),

/***/ 660:
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

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(69);
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






var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getUserData = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].USER_BY_ID + "/" + id)
            .map(function (res) {
            console.log("response USER", res.json());
            return res.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    ProfileService.prototype.getUserServices = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* Constants */].SERVICES_BY_USER_ID + "/" + id)
            .map(function (res) {
            console.log("response Services", res.json());
            return res.json().providers;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], ProfileService);

//# sourceMappingURL=profile-service.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\home\home.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n      \n\n      \n\n    </button>\n\n    <ion-title>Inicio </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <!-- <google-card-layout-3 \n\n    [data]="params.data"  \n\n    [events]="params.events">\n\n  </google-card-layout-3> -->\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 664:
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

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestProviderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the RequestProviderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestProviderDetailPage = (function () {
    function RequestProviderDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RequestProviderDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestProviderDetailPage');
    };
    return RequestProviderDetailPage;
}());
RequestProviderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-request-provider-detail',template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\request-provider-detail\request-provider-detail.html"*/'<!--\n  Generated template for the RequestProviderDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>request-provider-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\request-provider-detail\request-provider-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], RequestProviderDetailPage);

//# sourceMappingURL=request-provider-detail.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_api_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, apiSvc, appCtrl) {
        this.translate = translate;
        this.platform = platform;
        this.settings = settings;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.apiSvc = apiSvc;
        this.appCtrl = appCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: "Perfil", component: "ProfilePage", icon: "person" },
            { title: 'Solicitudes', component: "UserRequestsPage", icon: "list-box" },
            { title: "Servicios", component: "UserServicesPage", icon: "build" },
        ];
        this.initTranslate();
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.settings.update("logged", false);
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "menu",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\app\app.html"*/'\n\n<ion-menu [content]="content" style="width:200px; height:230px "  >\n\n  <ion-header >\n\n    <div menuClose  class="header-background-image" \n\n    (click)="openPage({ title:\'Inicio\', component:\'AutoservicePage\'})"  style="height:55px "    >\n\n     <ion-grid>\n\n       <ion-row>\n\n         <!-- <ion-col col-4> \n\n          <img src="assets/images/logo/main-logo.png" style="width:100px;" >\n\n         </ion-col> -->\n\n         <ion-col col-8 class="logo-menu">\n\n           <img src="assets/images/logo/autocar1.png"    >\n\n          </ion-col>\n\n       </ion-row>\n\n     </ion-grid>\n\n      <!--<h1 item-title text-center> <strong> Aquí va el nombre</strong></h1>-->\n\n    </div>\n\n  </ion-header>\n\n  <ion-content color="primary" class="menuBackground" >\n\n    <ion-list no-margin >\n\n      <button menuClose paddinge-left ion-item item-title main-menu\n\n        *ngFor="let p of pages" (click)="openPage(p)" style="height: 50px">\n\n        <ion-icon item-start item-left name="{{p.icon}}">\n\n          <i class="icon {{p.icon}}"></i>\n\n        </ion-icon>\n\n        <strong>{{p.title}}</strong>\n\n      </button>\n\n      <!-- <ion-item><div padding> <img src="assets/images/logo/main-logo.png" style="width:140px"> </div></ion-item> -->\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" style="margin:0% !important"></ion-nav>'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });


//# sourceMappingURL=services.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
// The page the user lands on after opening the app and without a session
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'AutoservicePage';
// The initial root pages for our tabs (remove if not using tabs)
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 71:
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
        iconList.set("Mecánico diesel", "mecd.png");
        iconList.set("Autolavado", "aul.png");
        iconList.set("Clima", "cli.png");
        iconList.set("Clutch y frenos", "clu.png");
        iconList.set("Eléctrico", "ele.png");
        iconList.set("Grúas", "gru.png");
        iconList.set("Llantas y neumáticos", "lla.png");
        iconList.set("Mecánico general", "mec.png");
        iconList.set("Taller especializado", "mece.png");
        iconList.set("Hojalatero", "hoj.png");
        iconList.set("Cerrajero", "key.png");
        iconList.set("Mofles", "mof.png");
        iconList.set("Parabrisas y vidrios", "par.png");
        iconList.set("Radiadores", "rad.png");
        iconList.set("Refaccionaria", "ref.png");
        iconList.set("Direccción y suspensión", "sus.png");
        iconList.set("Talachero", "tal.png");
        iconList.set("Alarmas y estereos", "ste.png");
        return iconList.get(slcdService);
    };
    return SupplierMapping;
}());

//# sourceMappingURL=supplier-mapping.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_login_service__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_utils__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages__ = __webpack_require__(70);
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
    function LoginPage(navCtrl, user, translateService, fBuilder, loginService, showToaster, showNotification, settings, appCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.translateService = translateService;
        this.loginService = loginService;
        this.showToaster = showToaster;
        this.showNotification = showNotification;
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
            _this.showNotification.startNotifications(user[0].id);
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
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Iniciar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner" ></spinner>\n\n  <ion-list class="login-List"> \n\n    <form id="loginForm" [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)">\n\n      <h3>Iniciar sesión</h3>\n\n\n\n      <ion-item class="login-Class">\n\n        <ion-label  floating for="email"></ion-label>\n\n        <ion-input type="email"  placeholder="ejemplo@email.com"\n\n          id="email" [formControl]= "loginForm.controls[\'email\']"></ion-input>\n\n          <p *ngIf="!loginForm.controls[\'email\'].valid && loginForm.controls[\'email\'].touched"   \n\n            class="alert alert-danger"></p>\n\n      </ion-item> 	\n\n        \n\n      <ion-item class="login-Class">\n\n        <ion-label floating for="password"></ion-label>\n\n          <ion-input type="password"  placeholder="Contraseña" \n\n            id="password" [formControl]= "loginForm.controls[\'password\']"></ion-input>\n\n          <div *ngIf="!loginForm.controls[\'password\'].valid && loginForm.controls[\'password\'].touched"   \n\n            class="alert alert-danger"></div>\n\n      </ion-item> 	\n\n      <br/>\n\n      <div text-center padding> \n\n        <button ion-button block round type="submit" class="ok" [disabled]="!loginForm.valid">Iniciar</button>\n\n      </div>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_6__utils_utils__["b" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__service_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_6__utils_utils__["b" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_6__utils_utils__["a" /* ShowNotification */],
        __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_request__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_toaster__ = __webpack_require__(18);
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
    function SupplierDetailPage(navCtrl, navParams, viewCtrl, callNumber, lchNav, autoSvc, apiSvc, settings, shwToaster) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.lchNav = lchNav;
        this.autoSvc = autoSvc;
        this.apiSvc = apiSvc;
        this.settings = settings;
        this.shwToaster = shwToaster;
        this.isOwner = false;
        this.spinner = false;
        this.params = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_7__utils_constants__["a" /* Constants */].SPINNER };
    }
    SupplierDetailPage.prototype.ngOnInit = function () {
        this.data = this.navParams.data;
        console.log("on INIT:::", this.data);
    };
    SupplierDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SupplierDetailPage.prototype.onRatingChange = function (event) {
        console.log(JSON.stringify(event));
    };
    SupplierDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.settings.settingsObservable.subscribe(function (userData) {
            _this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_7__utils_constants__["a" /* Constants */].USERS_PROVIDERS_IDS + userData.id).subscribe(function (userSerivices) {
                _this.isOwner = _this.isTheOwner(userSerivices);
            });
        });
    };
    SupplierDetailPage.prototype.isTheOwner = function (services) {
        for (var i = 0; i < services.length; ++i) {
            if (services[i].provider_id === this.data.id) {
                return true;
            }
        }
        return false;
    };
    SupplierDetailPage.prototype.makeACall = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log("Launched dialer!"); })
            .catch(function () { return console.log("Error launching dialer"); });
    };
    SupplierDetailPage.prototype.request = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__request_request__["a" /* RequestPage */], this.data);
    };
    SupplierDetailPage.prototype.navigate = function (destination) {
        var _this = this;
        if (destination[0] !== null && destination[0] !== null && destination[0] !== "") {
            this.spinner = true;
            this.autoSvc.getPosition().then(function (pos) {
                var options = {
                    start: [pos.coords.latitude, pos.coords.longitude],
                };
                _this.lchNav.navigate(destination, options).then(function (success) {
                    _this.spinner = false;
                }, function (error) {
                    _this.spinner = false;
                    _this.shwToaster.reveal("No fue posible iniciar el navegador...", "middle", 2000);
                });
            });
        }
        else {
            this.shwToaster.reveal("Esta solicitud no cuenta con ubicación...", "middle", 2000);
        }
    };
    return SupplierDetailPage;
}());
SupplierDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-supplier-detail",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\supplier-detail\supplier-detail.html"*/'<ion-content no-padding>\n\n  <ion-header>\n\n    <ion-buttons end icon-only><button ion-button icon-only clear small  (click)="close()">\n\n      <ion-icon name="close" float-right style="color:white"></ion-icon>\n\n    </button></ion-buttons>\n\n  </ion-header>\n\n  \n\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n\n\n\n\n  <div card-image class="title-style">\n\n    <!-- <img images-filter src={{data.img}}> -->\n\n    <ion-card-header no-padding>\n\n      <ion-grid>\n\n        <ion-row align-items-center >\n\n            <ion-col col-3 align-self-end><div text-right>\n\n              <img [src]="\'assets/servicons/\'+data.map_icon"> \n\n            </div> \n\n            </ion-col>\n\n            <ion-col col-9> <h1 >{{data.company_name}}</h1>  \n\n              <rating style= "text-align:center" [(ngModel)]="data.ranking"\n\n                readOnly="false"\n\n                max="5"\n\n                emptyStarIconName="star-outline"\n\n                halfStarIconName="star-half"\n\n                starIconName="star"\n\n                nullable="false" \n\n                (ngModelChange)="onRatingChange($event)"></rating></ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n      <h2>{{data.service}}</h2>\n\n      <!-- <p>{{data.specialty}}</p> -->\n\n    </ion-card-header>\n\n  </div>\n\n\n\n<div class="supplier-data">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2 class="provider-data">\n\n        <ion-icon item-left name="pin"></ion-icon>\n\n      </ion-col>\n\n      <ion-col class="text-desc">\n\n        <p no-margin maps-description>{{data.address}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col col-2 class="provider-data">\n\n        <ion-icon item-left name="clock"></ion-icon>\n\n      </ion-col>\n\n      <ion-col class="text-desc">\n\n        <p no-margin maps-description>{{data.schedule}}<p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-2 class="provider-data">\n\n        <ion-icon item-left name="call"></ion-icon>\n\n      </ion-col>\n\n      <ion-col class="text-desc">\n\n        <p no-margin maps-description (click)=makeACall(data.aditional_phone)>{{data.aditional_phone}}<p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-2 class="provider-data">\n\n        <ion-icon item-left name="logo-dribbble"></ion-icon>\n\n      </ion-col>\n\n      <ion-col class="text-desc">\n\n        <p no-margin maps-description>{{data.website}}<p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <p class="specialty"> {{data.specialty}}</p>\n\n\n\n    <ion-chip (click)="navigate([data.lat,data.lng])" class="ok" >\n\n      <ion-label>Navegar</ion-label>\n\n      <ion-icon class ="ok" name="navigate"></ion-icon>\n\n    </ion-chip>\n\n\n\n    <!-- <ion-row>\n\n      <ion-col col-2>\n\n        <ion-icon item-left>\n\n          <i class="icon icon-email-outline"></i>\n\n        </ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <p no-margin maps-description>{{data.email}}<p>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <br/><br/><br/><br/>\n\n  </ion-grid>\n\n  <ion-fab #fab bottom right *ngIf="!isOwner && data.is_active==2">\n\n    <button button-ion-fab ion-fab mini (click)="request()">\n\n        <ion-icon name="pricetag"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  \n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\supplier-detail\supplier-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__service_autoservice_service__["a" /* AutoserviceService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        __WEBPACK_IMPORTED_MODULE_5__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_6__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_9__utils_toaster__["a" /* ShowToaster */]])
], SupplierDetailPage);

//# sourceMappingURL=supplier-detail.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_autoservice_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toaster__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_image_transfer__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_api_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_typescript_map__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_typescript_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_typescript_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_requests_user_requests__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(17);
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
    function RequestPage(navCtrl, navParams, tstCtrl, fBuilder, camera, autoservice, imageTransfer, settings, apiSvc, vwCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tstCtrl = tstCtrl;
        this.fBuilder = fBuilder;
        this.camera = camera;
        this.autoservice = autoservice;
        this.imageTransfer = imageTransfer;
        this.settings = settings;
        this.apiSvc = apiSvc;
        this.vwCtrl = vwCtrl;
        this.appCtrl = appCtrl;
        this.distance = 3;
        this.fetchedLng = null;
        this.fetchedLat = null;
        this.broadcast = false;
        this.slctdProviders = [];
        this.picCase = 1;
        this.requestParams = [];
        this.spinner = false;
        this.params = {};
        this.mainServices = [];
        this.services = [];
        this.listProviders = [];
        this.requestForm = fBuilder.group({
            "service": ["", __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].required])],
            "vehicle": [""],
            "comment": ["", __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].required])],
            "providers": [""],
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
            saveToPhotoAlbum: true,
        };
        if (__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]["installed"]()) {
            this.camera.getPicture(options).then(function (imageData) {
                if (_this.picCase === 1) {
                    _this.requestForm.patchValue({ "pic1": 'data:image/jpg;base64,' + imageData });
                }
                if (_this.picCase === 2) {
                    _this.requestForm.patchValue({ "pic2": 'data:image/jpg;base64,' + imageData });
                }
                if (_this.picCase === 3) {
                    _this.requestForm.patchValue({ "pic3": 'data:image/jpg;base64,' + imageData });
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
        if (this.navParams.data.service !== undefined) {
            this.broadcast = false;
            this.slctdProviders[0] = this.navParams.data;
            this.requestForm.controls["service"].setValue(this.slctdProviders[0].service);
        }
        else {
            this.broadcast = true;
            this.spinner = true;
            this.fetchMainServices();
        }
    };
    RequestPage.prototype.providerSelected = function (provider) {
        console.log(provider);
    };
    RequestPage.prototype.svcSelected = function (service) {
        var _this = this;
        console.log("distancia", this.distance);
        this.spinner = true;
        this.autoservice.getPosition().then(function (coords) {
            _this.fetchedLat = coords.coords.latitude;
            _this.fetchedLng = coords.coords.longitude;
            if (service) {
                var data = {
                    "service": service,
                    "distance": _this.distance,
                    "lat": _this.fetchedLat,
                    "lng": _this.fetchedLng,
                    "limit": 5,
                };
                console.log("Seleccionaste:::", service);
                _this.apiSvc.postService(__WEBPACK_IMPORTED_MODULE_0__utils_constants__["a" /* Constants */].PROVIDERS_DISTANCE, JSON.stringify({ data: data })).subscribe(function (listOfProviders) {
                    _this.listProviders = listOfProviders;
                    console.log("LISTA DE SERVICIOS:", listOfProviders);
                    _this.spinner = false;
                }, function (err) {
                    _this.spinner = false;
                    _this.tstCtrl.reveal("Ocurrio un error intentalo mas tarde", "bottom", 2000);
                });
            }
            else {
                _this.spinner = false;
            }
        });
    };
    RequestPage.prototype.fetchServices = function () {
        var _this = this;
        this.autoservice.getServices().subscribe(function (services) {
            _this.services = services;
            console.log("fetchedServ", _this.services);
            _this.spinner = false;
        }, function (err) {
            console.log(err);
            _this.spinner = false;
        });
    };
    RequestPage.prototype.fetchMainServices = function () {
        var _this = this;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.mainServices = mservices;
            console.log("fetchedMainServ", _this.mainServices);
            _this.fetchServices();
        }, function (err) {
            console.log(err);
            _this.spinner = false;
        });
    };
    RequestPage.prototype.processWebImage = function (event) {
        var _this = this;
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
        this.spinner = true;
        this.autoservice.getPosition().then(function (coords) {
            _this.fetchedLat = coords.coords.latitude;
            _this.fetchedLng = coords.coords.longitude;
            _this.spinner = false;
        });
    };
    RequestPage.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData === void 0) { formData = {}; }
        this.spinner = true;
        if (!this.broadcast) {
            formData.providers = [this.slctdProviders[0].id];
        }
        var completedCount = 0;
        var startedCount = 1;
        var images = this.imageTransfer.upholdImages(formData);
        formData.user_id = this.user_id;
        delete formData.pic1;
        delete formData.pic2;
        delete formData.pic3;
        var attachments = new __WEBPACK_IMPORTED_MODULE_9_typescript_map__["TSMap"]();
        if (images !== null) {
            images.forEach(function (e) {
                _this.apiSvc.postService(__WEBPACK_IMPORTED_MODULE_0__utils_constants__["a" /* Constants */].UPLOAD_ONE_IMG, _this.imageTransfer.arrangeImage(e)).subscribe(function (imgUrl) {
                    attachments.set("url_pic" + (completedCount + 1), imgUrl);
                    completedCount++;
                    console.log("Completado  " + completedCount + " de " + images.length);
                    if (completedCount === images.length) {
                        formData.attachments = attachments.toJSON();
                        console.log("REQUEST DATA:", formData);
                        _this.sendRequest(formData);
                    }
                }, function (err) {
                    _this.tstCtrl.reveal("Ha ocurrido un error", "bottom", 2000);
                    _this.spinner = false;
                });
            });
        }
        else {
            formData.attachments = { url_pic1: "", url_pic2: "", url_pic3: "" };
            this.sendRequest(formData);
        }
    };
    RequestPage.prototype.sendRequest = function (formData) {
        var _this = this;
        this.apiSvc.postService(__WEBPACK_IMPORTED_MODULE_0__utils_constants__["a" /* Constants */].CREATE_MULT_REQUEST, this.arrangeData(formData)).subscribe(function (respRequest) {
            console.log(respRequest);
            _this.tstCtrl.reveal("Tu solicitud ha sido enviada con éxito", "middle", 2500);
            _this.close();
            _this.spinner = false;
            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__user_requests_user_requests__["a" /* UserRequestsPage */]);
        }, function (err) {
            console.log(err);
            _this.tstCtrl.reveal("Se ha producido un error:" + err, "middle", 2500);
            _this.spinner = false;
        });
    };
    RequestPage.prototype.arrangeData = function (request) {
        return JSON.stringify({ request: request });
    };
    RequestPage.prototype.dftAttachment = function (requestId) {
        var attachment = { url_pic1: "", url_pic2: "", url_pic3: "", request_id: requestId };
        return JSON.stringify({ attachment: attachment });
    };
    RequestPage.prototype.close = function () {
        this.vwCtrl.dismiss();
    };
    return RequestPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])("fileInput"),
    __metadata("design:type", Object)
], RequestPage.prototype, "fileInput", void 0);
RequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: "page-request",template:/*ion-inline-start:"C:\Workspace\autocar\front\villainnova\src\pages\request\request.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Cotizar</ion-title>\n\n    <ion-buttons end ><button ion-button (click)="close()">\n\n      <ion-icon name="close" style="color:white"></ion-icon>\n\n    </button></ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n\n\n  \n\n  <ion-list class="login-List"> \n\n  \n\n    <ion-item class="login-Class" *ngIf="broadcast">\n\n      <ion-label stacked  style="color:rgb(146, 145, 145) !important" no-padding>Distancia</ion-label>\n\n      <ion-range min="1" max="200" [(ngModel)]="distance" color="km" pin="true"  (ionChange)="svcSelected(requestForm.controls[\'service\'].value)" >\n\n        <ion-label range-left>1Km</ion-label>\n\n        <ion-label range-right>200Km</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    \n\n    <form id="requestForm" [formGroup]="requestForm" (ngSubmit)="onSubmit(requestForm.value)">    \n\n        \n\n      <ion-item  class="login-Class" *ngIf="broadcast"> \n\n        <ion-label for="service" style="color:rgb(146, 145, 145) !important" no-padding>Servicio</ion-label>\n\n            <ion-select id="service" [formControl]="requestForm.controls[\'service\']" \n\n            (ionChange)="svcSelected(requestForm.controls[\'service\'].value)"\n\n            placeholder="Selecciona un servicio" \n\n            cancelText="Atras" >\n\n              <ion-option *ngFor="let mainService of mainServices" [value]="mainService" no-padding>{{mainService}} </ion-option>\n\n              <ion-option *ngFor="let service of services" [value]="service" no-padding>{{service}} </ion-option>\n\n            </ion-select>\n\n      </ion-item> \n\n\n\n      <ion-item  class="login-Class" *ngIf="broadcast && requestForm.controls[\'service\'].value" > \n\n          <ion-label for="providers" style="color:rgb(146, 145, 145) !important" no-padding>Proveedores</ion-label>\n\n              <ion-select id="providers" [formControl]="requestForm.controls[\'providers\']" \n\n              (ionChange)="providerSelected(requestForm.controls[\'providers\'].value)"\n\n              placeholder="Proveedor" \n\n              cancelText="Atras" \n\n              multiple=true>\n\n                <ion-option *ngFor="let lprovider of listProviders" [value]="lprovider.id" no-padding>{{lprovider.name}} </ion-option>\n\n              </ion-select>\n\n        </ion-item> \n\n\n\n    \n\n      <ion-item class="login-Class" *ngIf="!broadcast" >\n\n        <ion-label stacked for="service"></ion-label>\n\n        <ion-input type="text" readonly="true" \n\n          id="service" [formControl]= "requestForm.controls[\'service\']"></ion-input>\n\n        <div *ngIf="!requestForm.controls[\'service\'].valid && requestForm.controls[\'service\'].touched"   \n\n          class="alert alert-danger"></div>\n\n      </ion-item>\n\n\n\n      <ion-item class="login-Class" *ngIf="!broadcast" >\n\n        <ion-label stacked for="service">{{slctdProviders[0].company_name}}</ion-label>\n\n      </ion-item>\n\n      \n\n      <ion-item class="login-Class">\n\n        <ion-label stacked for="comment"></ion-label>\n\n        <ion-textarea type="text"  placeholder="Describe tu servicio" maxlength="140" \n\n          id="comment" [formControl]= "requestForm.controls[\'comment\']"></ion-textarea>\n\n        <div *ngIf="!requestForm.controls[\'comment\'].valid && requestForm.controls[\'comment\'].touched"   \n\n          class="alert alert-danger"></div>\n\n      </ion-item> \n\n\n\n      <ion-item class="login-Class">\n\n        <ion-label  floating for="vehicle"></ion-label>\n\n          <ion-input type="text"  placeholder="Vehículo, marca, modelo y placas (opcional)"\n\n            id="vehicle" [formControl]= "requestForm.controls[\'vehicle\']"></ion-input>\n\n          <p *ngIf="!requestForm.controls[\'vehicle\'].valid && requestForm.controls[\'vehicle\'].touched"   \n\n            class="alert alert-danger"></p>\n\n      </ion-item> \n\n\n\n      <br/>\n\n      <ion-item no-lines class=divider>Mi ubicación <br/><p>(opcional)</p></ion-item>\n\n      \n\n      <ion-item class="coords-Class">\n\n        <ion-label for="lat" item-start></ion-label >\n\n        <ion-input type="text"  placeholder="latitud" [(ngModel)]="fetchedLat"\n\n          id="lat" [formControl]= "requestForm.controls[\'lat\']"  ></ion-input>\n\n        <p *ngIf="!requestForm.controls[\'lat\'].valid && requestForm.controls[\'lat\'].touched"   \n\n            class="alert alert-danger"></p>\n\n\n\n          <ion-label for="lng"></ion-label>\n\n        <ion-input type="text"  placeholder="longitud"  [(ngModel)]="fetchedLng"\n\n          id="lng" [formControl]= "requestForm.controls[\'lng\']" ></ion-input>\n\n        <p *ngIf="!requestForm.controls[\'lng\'].valid && requestForm.controls[\'lng\'].touched"   \n\n            class="alert alert-danger"></p>\n\n          <button ion-button round type="button" (click)=getMyPos() color="buttons" item-end><ion-icon name="locate"></ion-icon> </button>\n\n      </ion-item>\n\n      <br/>\n\n      <ion-item no-lines class=divider>Imágenes <br/><p>(opcional)</p></ion-item>  \n\n      <ion-item no-padding>\n\n        <ion-grid>\n\n          <ion-row align-items-center>\n\n            <ion-col col-4 align-self-start>\n\n              <input type="file" #fileInput style="visibility: hidden; height: 0px; margin:0px" name="files[]" (change)="processWebImage($event)" />\n\n              <div class="profile-image-wrapper" (click)="getPicture(1)">\n\n                <div class="profile-image-placeholder" *ngIf="!this.requestForm.controls.pic1.value">\n\n                  <ion-icon name="add"></ion-icon>\n\n                </div>\n\n                <div class="profile-image" [style.backgroundImage]=\'getProfileImageStyle(1)\' *ngIf="this.requestForm.controls.pic1.value"></div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4 align-self-center>\n\n              <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n              <div class="profile-image-wrapper" (click)="getPicture(2)">\n\n                <div class="profile-image-placeholder" *ngIf="!this.requestForm.controls.pic2.value">\n\n                  <ion-icon name="add"></ion-icon>\n\n                </div>\n\n                <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(2)" *ngIf="this.requestForm.controls.pic2.value"></div>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-4 align-self-end>\n\n                <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n                <div class="profile-image-wrapper" (click)="getPicture(3)">\n\n                  <div class="profile-image-placeholder" *ngIf="!this.requestForm.controls.pic3.value">\n\n                    <ion-icon name="add"></ion-icon>\n\n                  </div>\n\n                  <div class="profile-image" [style.backgroundImage]="getProfileImageStyle(3)" *ngIf="this.requestForm.controls.pic3.value"></div>\n\n                </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-item>\n\n      <br/>\n\n      <div text-center padding> \n\n        <button ion-button block round type="submit" class="ok" [disabled]="!requestForm.valid || spinner == true">Enviar</button>\n\n        <button ion-button block round type="button" class="cancel" (click)="close()" [disabled]="spinner == true">Cancelar</button>\n\n      </div>   \n\n      <br/>\n\n    </form>     \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workspace\autocar\front\villainnova\src\pages\request\request.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_6__service_image_transfer__["a" /* ImageTransfer */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_6__service_image_transfer__["a" /* ImageTransfer */],
        __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_7__service_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]])
], RequestPage);

//# sourceMappingURL=request.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map