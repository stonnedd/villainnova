webpackJsonp([0],{

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(667);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_profile_service__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toaster__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_supplier_add_supplier__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_supplier_detail_supplier_detail__ = __webpack_require__(159);
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
    function ProfilePage(navCtrl, navParams, profileSvc, settings, showToaster, translateService, popCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileSvc = profileSvc;
        this.settings = settings;
        this.showToaster = showToaster;
        this.translateService = translateService;
        this.popCtrl = popCtrl;
        this.userServices = [];
        this.user = {};
        this.title = "Mi perfil";
        this.translateService.get("LOGIN_ERROR").subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    ProfilePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.profileSvc.getUserServices(this.user.id).subscribe(function (userServices) {
            console.log("refreshing");
            _this.userServices = userServices;
            refresher.complete();
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProfilePage");
    };
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.settings.settingsObservable.subscribe(function (value) {
            _this.user.id = value.id;
            _this.user.token = value.token;
            console.log("storage:", value);
            _this.profileSvc.getUserData(_this.user.id).subscribe(function (userData) {
                console.log("Datos de usuario", userData),
                    _this.loadUserData(userData[0]);
                _this.profileSvc.getUserServices(_this.user.id).subscribe(function (userServices) {
                    console.log(userServices);
                    _this.userServices = userServices;
                });
            });
        }, function (err) {
            _this.showToaster.reveal(_this.loginErrorString, "top", 3000);
        });
    };
    ProfilePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.content.ionScroll.subscribe(function (d) {
            _this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    };
    ProfilePage.prototype.addProvider = function (event) {
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
    ProfilePage.prototype.loadUserData = function (userData) {
        this.user.name = userData.name;
        this.user.phone = userData.phone;
        this.user.email = userData.email;
        this.user.profile = userData.profile;
    };
    ProfilePage.prototype.showDetail = function (supplierData, event) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_supplier_detail_supplier_detail__["a" /* SupplierDetailPage */], supplierData);
        popover.present({
            ev: "onMarker",
        });
    };
    ProfilePage.prototype.editDetail = function (supplierData, event) {
        this.user.provider = supplierData;
        this.user.isNewProvider = false;
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_add_supplier_add_supplier__["a" /* AddSupplierPage */], this.user);
        popover.present({ ev: "" });
    };
    return ProfilePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], ProfilePage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* FabButton */])
], ProfilePage.prototype, "fabButton", void 0);
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-profile",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n    \n    \n<ion-content class="card-background-page">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n  <ion-card>\n      <img src="../../assets/images/background/profile.jpg"/>\n      <div class="card-title" paddinge-left> <ion-icon item-left icon-small name="contact"></ion-icon>{{user.name}}</div>\n      <div class="card-phone" paddinge-left> <ion-icon item-left icon-small name="phone-portrait"></ion-icon>{{user.phone}}</div>\n      <div class="card-email" paddinge-left> <ion-icon item-left icon-small name="mail"></ion-icon>{{user.email}}</div>\n  </ion-card>\n\n  <div class="list-avatar-page">\n    <ion-list >\n    <ion-list-header><strong>Mis Servicios</strong></ion-list-header>\n      <ion-item *ngFor="let provider of userServices">\n        <ion-avatar item-start>\n          <img [src]="\'../../assets/mapicons/\'+provider.map_icon">\n        </ion-avatar>\n        <h2>{{provider.company_name}}</h2>\n        <p>{{provider.service}}</p>\n        <div text-right>\n          <ion-icon name="eye" (click)="showDetail(provider, $event)"  ></ion-icon>\n          <ion-icon name="create"(click)="editDetail(provider, $event)" ></ion-icon>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-fab #fab bottom right>\n    <button button-ion-fab ion-fab (click)="addProvider($event)">\n        <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  </ion-content>'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\profile\profile.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4__utils_toaster__["a" /* ShowToaster */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(91);
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

/***/ })

});
//# sourceMappingURL=0.js.map