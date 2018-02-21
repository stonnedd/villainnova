webpackJsonp([6],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            __WEBPACK_IMPORTED_MODULE_4__components_spinner_spinner_module__["SpinnerModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toaster__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_constants__ = __webpack_require__(21);
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
    function WelcomePage(navCtrl, settings, appCtrl, apiSvc, shwTostr) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.appCtrl = appCtrl;
        this.apiSvc = apiSvc;
        this.shwTostr = shwTostr;
        this.spinner = false;
        this.params = {};
        this.user = {};
        this.params.data = { "icon": __WEBPACK_IMPORTED_MODULE_6__utils_constants__["a" /* Constants */].SPINNER };
    }
    WelcomePage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.spinner = true;
        this.settings.settingsObservable.subscribe(function (strgeData) {
            console.log("LOCAL STORAGE DATA:", strgeData);
            if (strgeData.token !== "" && strgeData.token !== null && strgeData.token !== undefined) {
                console.log("hay token");
                _this.apiSvc.getService(__WEBPACK_IMPORTED_MODULE_6__utils_constants__["a" /* Constants */].LOGGED_USER_URL + "/" + strgeData.token).subscribe(function (data) {
                    if (data[0].id === strgeData.id) {
                        _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__pages__["b" /* MainPage */]);
                        _this.spinner = false;
                    }
                    _this.spinner = false;
                }, function (err) {
                    _this.spinner = false;
                    _this.shwTostr.reveal("Error de conexión, comprueba tu conexión a internet. " + err, "middle", 3000);
                });
            }
            else {
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
        selector: "page-welcome",template:/*ion-inline-start:"c:\Workspace\autocar\front\villainnova\src\pages\welcome\welcome.html"*/'<ion-content scroll="false">\n\n    <spinner [data]="params.data" *ngIf="spinner"></spinner>\n\n\n\n  <div class="splash-bg"></div>\n\n  <div class="splash-info">\n\n    <div class="splash-logo"></div>\n\n    <div class="splash-intro">\n\n    </div>\n\n  </div>\n\n  <div padding>\n\n    <!-- <button ion-button block round (click)="signup()" class="signup">{{ \'SIGNUP\' | translate }}</button> -->\n\n    <button ion-button block round (click)="login()" class="login" [disabled]="spinner">{{ \'LOGIN\' | translate }}</button>\n\n    <button ion-button block round (click)="signup()" class="reg" [disabled]="spinner" >{{ \'SIGNUP\' | translate }}</button>\n\n    \n\n    \n\n  </div>\n\n</ion-content> \n\n\n\n\n\n\n\n'/*ion-inline-end:"c:\Workspace\autocar\front\villainnova\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=6.js.map