webpackJsonp([14],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_login_service__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toaster__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(20);
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
    function LoginPage(navCtrl, user, translateService, fBuilder, loginService, showToaster) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.translateService = translateService;
        this.loginService = loginService;
        this.showToaster = showToaster;
        this.account = {
            email: "",
            password: "",
            profile: "",
        };
        this.loginForm = fBuilder.group({
            "email": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].email])],
            "password": ["", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(6)])],
        });
        this.translateService.get("LOGIN_ERROR").subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.account.email = form.email;
        this.account.password = form.password;
        this.loginService.doesExistEmail(form.email, "customers")
            .subscribe(function (customersEmail) {
            if (customersEmail[0] === form.email) {
                _this.account.profile = "customer";
                console.log(_this.account);
                //this.doLogin(this.account);
            }
            else {
                _this.loginService.doesExistEmail(form.email, "suppliers")
                    .subscribe(function (supplierEmail) {
                    if (supplierEmail[0] === form.email) {
                        _this.account.profile = "supplier";
                        console.log(_this.account);
                        //this.doLogin(this.account);
                    }
                    else {
                        _this.showToaster.reveal("Correo NO válido", "bottom", 3000);
                    }
                });
            }
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.user.login(this.account).subscribe(function (resp) {
            //this.navCtrl.push(MainPage);
            console.log("Login Success");
            console.log(resp);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            console.log("Login Success");
            console.log(err);
            _this.showToaster.reveal(_this.loginErrorString, "top", 3000);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="login-List"> \n    <form id="loginForm" [formGroup]="loginForm" (ngSubmit)="onSubmit(loginForm.value)">\n      <h3>Iniciar sesión</h3>\n\n      <ion-item class="login-Class">\n        <ion-label  floating for="email"></ion-label>\n        <ion-input type="email"  placeholder="ejemplo@email.com"\n          id="email" [formControl]= "loginForm.controls[\'email\']"></ion-input>\n          <p *ngIf="!loginForm.controls[\'email\'].valid && loginForm.controls[\'email\'].touched"   \n            class="alert alert-danger"></p>\n      </ion-item> 	\n        \n      <ion-item class="login-Class">\n        <ion-label floating for="password"></ion-label>\n          <ion-input type="password"  placeholder="Contraseña" \n            id="password" [formControl]= "loginForm.controls[\'password\']"></ion-input>\n          <div *ngIf="!loginForm.controls[\'password\'].valid && loginForm.controls[\'password\'].touched"   \n            class="alert alert-danger"></div>\n      </ion-item> 	\n      <br/>\n      <div text-center> \n        <button ion-button block round type="submit" color="submit" [disabled]="!loginForm.valid">Iniciar</button>\n      </div>\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__service_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_5__utils_toaster__["a" /* ShowToaster */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(120);
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






var AutoserviceService = (function () {
    function AutoserviceService(http) {
        this.http = http;
        this.suppliersUrl = "http://localhost:4000/api/suppliers";
        this.createSupplierUrl = "http://localhost:4000/api/suppliers/create";
        this.createCustomerUrl = "http://localhost:4000/api/customers/create";
        this.servicesUrl = "http://localhost:4000/api/services";
        this.mainservicesUrl = "http://localhost:4000/api/mainservices";
        this.emailUrl = "http://localhost:4000/api/email";
        this.geolocation = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */]();
        this.mapdata = {};
    }
    AutoserviceService.prototype.getMainServices = function () {
        return this.http.get(this.mainservicesUrl)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.getServices = function () {
        return this.http.get(this.servicesUrl)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
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
        return this.http.get(this.suppliersUrl + "/" + chosenService)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.doesExistEmail = function (selectedEmail, profile) {
        console.log(selectedEmail);
        return this.http.get(this.emailUrl + "/" + profile + "/" + selectedEmail)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.createSupplier = function (supplier) {
        if (supplier === void 0) { supplier = {}; }
        var body = JSON.stringify({ supplier: supplier });
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.createSupplierUrl, body, options).map(function (res) {
            console.log("response:", res);
            return res.ok.valueOf;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    AutoserviceService.prototype.createCustomer = function (customer) {
        if (customer === void 0) { customer = {}; }
        var body = JSON.stringify({ customer: customer });
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.createCustomerUrl, body, options).map(function (res) {
            return res.ok.valueOf;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    return AutoserviceService;
}());
AutoserviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AutoserviceService);

//# sourceMappingURL=autoservice-service.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autoservice/autoservice.module": [
		646,
		0
	],
	"../pages/cards/cards.module": [
		647,
		13
	],
	"../pages/content/content.module": [
		648,
		12
	],
	"../pages/home/home.module": [
		256
	],
	"../pages/item-create/item-create.module": [
		649,
		11
	],
	"../pages/item-detail/item-detail.module": [
		650,
		10
	],
	"../pages/list-master/list-master.module": [
		651,
		9
	],
	"../pages/login-customer/login-customer.module": [
		260
	],
	"../pages/login-supplier/login-supplier.module": [
		261
	],
	"../pages/login/login.module": [
		257
	],
	"../pages/map/map.module": [
		652,
		8
	],
	"../pages/menu/menu.module": [
		653,
		7
	],
	"../pages/profile/profile.module": [
		654,
		6
	],
	"../pages/search/search.module": [
		655,
		5
	],
	"../pages/settings/settings.module": [
		220
	],
	"../pages/signup/signup.module": [
		656,
		4
	],
	"../pages/supplier-detail/supplier-detail.module": [
		253
	],
	"../pages/tabs/tabs.module": [
		657,
		3
	],
	"../pages/tutorial/tutorial.module": [
		658,
		2
	],
	"../pages/welcome/welcome.module": [
		659,
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
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(306);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierDetailPageModule", function() { return SupplierDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supplier_detail__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__ = __webpack_require__(245);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supplier_detail__["a" /* SupplierDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
        ]
    })
], SupplierDetailPageModule);

//# sourceMappingURL=supplier-detail.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_view_google_card_layout_3_google_card_layout_3__ = __webpack_require__(611);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: []
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(130);
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
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
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
        return this.http.post(this.loginUrl + "/" + endpoint, body, options);
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

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item__ = __webpack_require__(612);
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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCustomerPageModule", function() { return LoginCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_customer__ = __webpack_require__(309);
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
            __WEBPACK_IMPORTED_MODULE_2__login_customer__["a" /* LoginCustomerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_customer__["a" /* LoginCustomerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_customer__["a" /* LoginCustomerPage */],
        ],
    })
], LoginCustomerPageModule);

//# sourceMappingURL=login-customer.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSupplierPageModule", function() { return LoginSupplierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_supplier__ = __webpack_require__(310);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_supplier__["a" /* LoginSupplierPage */]),
        ],
    })
], LoginSupplierPageModule);

//# sourceMappingURL=login-supplier.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* unused harmony export MainPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab3Root; });
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\settings\settings.html"*/'    \n<ion-list class="settings" >\n  <ion-title>\n    <h1>Ajustes <ion-icon name="close-circle" float-right (click)=close()></ion-icon></h1>\n  </ion-title> \n    <ion-item class="settings">\n        <ion-range min="2" max="20" [(ngModel)]="distance" color="km" pin="true" >\n          <ion-label range-left>2Km</ion-label>\n          <ion-label range-right>20Km</ion-label>\n        </ion-range>\n    </ion-item>\n      <ion-item class="settings">\n        <ion-label>{{ tg1String}}</ion-label>\n        <ion-toggle [(ngModel)]="statusTg1" checked="false" (ionChange)=tog1Function() color="km"></ion-toggle>\n      </ion-item>\n</ion-list>\n\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(245);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-supplier-detail",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\supplier-detail\supplier-detail.html"*/'<ion-content no-padding>\n\n  <div card-image class="title-style">\n    <img images-filter src={{data.img}}/>\n    <ion-card-header >\n        <h1 card-title >{{data.name}}</h1>  \n        <rating style= "text-align:center" [(ngModel)]="data.ranking"\n          readOnly="false"\n          max="5"\n          emptyStarIconName="star-outline"\n          halfStarIconName="star-half"\n          starIconName="star"\n          nullable="false" \n          (ngModelChange)="onRatingChange($event)"></rating>\n      <h2 card-title>{{data.specialty}}</h2>\n    </ion-card-header>\n  </div>\n\n<div class="supplier-data">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <ion-icon item-left>\n          <i class="icon icon-map-marker-radius"></i>\n        </ion-icon>\n      </ion-col>\n      <ion-col>\n        <p no-margin maps-description>{{data.address}} bla bla bla bla bla bla bla bla bal\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <button ion-button clear icon-only small (click)=navigate([data.lat,data.lng])>\n        <ion-icon name="ios-navigate" class= "custom-icon"></ion-icon>\n    </button>\n\n    <ion-row>\n      <ion-col col-2>\n        <ion-icon item-left>\n            <i class="icon icon-alarm"></i>\n        </ion-icon>\n      </ion-col>\n      <ion-col>\n        <p no-margin maps-description>{{data.schedule}}<p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2>\n        <ion-icon item-left>\n            <i class="icon icon-phone"></i>\n        </ion-icon>\n      </ion-col>\n      <ion-col>\n        <p no-margin maps-description (click)=makeACall(data.phone)>{{data.phone}}<p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2>\n        <ion-icon item-left>\n          <i class="icon icon-earth"></i>\n        </ion-icon>\n      </ion-col>\n      <ion-col>\n        <p no-margin maps-description>{{data.website}}<p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2>\n        <ion-icon item-left>\n          <i class="icon icon-email-outline"></i>\n        </ion-icon>\n      </ion-col>\n      <ion-col>\n        <p no-margin maps-description>{{data.email}}<p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <div style="text-align:center" >\n      <button ion-button clear icon-only small (click)=close()>\n        <ion-icon > <i class="icon icon-close-circle"></i> </ion-icon>\n      </button>\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\supplier-detail\supplier-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], SupplierDetailPage);

//# sourceMappingURL=supplier-detail.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
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
    function LoginCustomerPage(navCtrl, navParams, toastCtrl, fBuilder, autoservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.autoservice = autoservice;
        this.myForm = fBuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(8)])],
            "phone": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10), isNumber])],
            "email": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email])],
            "password": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)])],
            "cPassword": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
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
    LoginCustomerPage.prototype.onSubmit = function (form) {
        delete form.cPassword;
        this.isEmailAvailable(form);
    };
    LoginCustomerPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginUserPage");
    };
    LoginCustomerPage.prototype.doNewRegister = function (form) {
        var _this = this;
        this.autoservice.createCustomer(form)
            .subscribe(function (data) {
            if (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.svcToast("Error de conexión", "bottom");
            }
        });
    };
    LoginCustomerPage.prototype.emailNotValid = function () {
        this.svcToast("Correo No válido", "bottom");
        this.myForm.controls["email"].setValue("");
    };
    LoginCustomerPage.prototype.svcToast = function (note, pos) {
        var toast = this.toastCtrl.create({
            message: note,
            duration: 3000,
            position: pos,
            showCloseButton: true,
            closeButtonText: "ok",
        });
        toast.present();
    };
    LoginCustomerPage.prototype.isEmailAvailable = function (form) {
        var _this = this;
        this.autoservice.doesExistEmail(form.email, "customers")
            .subscribe(function (customersEmail) {
            if (customersEmail[0] === form.email) {
                _this.emailNotValid();
            }
            else {
                _this.autoservice.doesExistEmail(form.email, "suppliers")
                    .subscribe(function (supplierEmail) {
                    if (supplierEmail[0] === form.email) {
                        _this.emailNotValid();
                    }
                    else {
                        _this.doNewRegister(form);
                    }
                });
            }
        });
    };
    return LoginCustomerPage;
}());
LoginCustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login-customer",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\login-customer\login-customer.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login Customer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="login-List"> \n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n        <h3>Usuario</h3>\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="name"></ion-label>\n          <ion-input type="text"  placeholder="Nombre y apellido"\n            id="name" [formControl]= "myForm.controls[\'name\']"></ion-input>\n            <p *ngIf="!myForm.controls[\'name\'].valid && myForm.controls[\'name\'].touched"   \n              class="alert alert-danger"></p>\n        </ion-item> 	\n          \n        <ion-item class="login-Class">\n          <ion-label floating for="email"></ion-label>\n            <ion-input type="email"  placeholder="Email" \n              id="email" [formControl]= "myForm.controls[\'email\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'email\'].valid && myForm.controls[\'email\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item> 	\n\n        <ion-item class="login-Class">\n          <ion-label floating for="password"></ion-label>\n            <ion-input type="password"  placeholder="Contraseña (mínimo 6 caracteres)" \n              id="password" [formControl]= "myForm.controls[\'password\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'password\'].valid && myForm.controls[\'password\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item>\n\n        <ion-item class="login-Class">\n          <ion-label floating for="password"></ion-label>\n            <ion-input type="password"  placeholder="Confirma tu contraseña" \n              id="cPassword" [formControl]= "myForm.controls[\'cPassword\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'cPassword\'].valid && myForm.controls[\'cPassword\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item>\n\n        <ion-item class="login-Class">\n          <ion-label floating for="phone"></ion-label>\n            <ion-input type="tel"  placeholder="Número telefónico (10 dígitos)" \n              id="phone" [formControl]= "myForm.controls[\'phone\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'phone\'].valid && myForm.controls[\'phone\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item>\n        <br/><br/>\n        <div text-center> \n            <button ion-button block round type="submit" color="submit" [disabled]="!myForm.valid">Registrar</button>\n        </div>   \n        <br/>\n\n      </form>     \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\login-customer\login-customer.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */]])
], LoginCustomerPage);

//# sourceMappingURL=login-customer.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSupplierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(20);
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
    function LoginSupplierPage(fBuilder, navCtrl, navParams, autoservice, supplierMapping, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autoservice = autoservice;
        this.supplierMapping = supplierMapping;
        this.toastCtrl = toastCtrl;
        this.services = [];
        this.mainServices = [];
        this.myForm = fBuilder.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "manager": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(8)])],
            "phone": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(10), isNumber])],
            "email": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email])],
            "password": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6)])],
            "cPassword": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "service": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "schedule": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "specialty": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "address": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "brands": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "lat": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "lng": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            "website": [""],
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
        this.isEmailAvailable(this.supplierMapping.arrangeData(form));
    };
    LoginSupplierPage.prototype.ngOnInit = function () {
        this.fetchMainServices();
        this.fetchServices();
    };
    LoginSupplierPage.prototype.fetchServices = function () {
        var _this = this;
        this.autoservice.getServices().subscribe(function (services) {
            _this.services = services;
            console.log(_this.services);
        }, function (err) {
            console.log(err);
        });
    };
    LoginSupplierPage.prototype.fetchMainServices = function () {
        var _this = this;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.mainServices = mservices;
            console.log(_this.mainServices);
        }, function (err) {
            console.log(err);
        });
    };
    LoginSupplierPage.prototype.getMyPos = function () {
        var _this = this;
        this.autoservice.getPosition().then(function (coords) {
            _this.fetchedLat = coords.coords.latitude;
            _this.fetchedLng = coords.coords.longitude;
            console.log("coords:", _this.fetchedLat, _this.fetchedLng);
        });
    };
    LoginSupplierPage.prototype.doNewRegister = function (form) {
        var _this = this;
        this.autoservice.createCustomer(form)
            .subscribe(function (data) {
            if (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.svcToast("Error de conexión", "bottom");
            }
        });
    };
    LoginSupplierPage.prototype.emailNotValid = function () {
        this.svcToast("Correo No válido", "bottom");
        this.myForm.controls["email"].setValue("");
    };
    LoginSupplierPage.prototype.isEmailAvailable = function (form) {
        var _this = this;
        this.autoservice.doesExistEmail(form.email, "customers")
            .subscribe(function (customersEmail) {
            if (customersEmail[0] === form.email) {
                _this.emailNotValid();
            }
            else {
                _this.autoservice.doesExistEmail(form.email, "suppliers")
                    .subscribe(function (supplierEmail) {
                    if (supplierEmail[0] === form.email) {
                        _this.emailNotValid();
                    }
                    else {
                        _this.doNewRegister(form);
                    }
                });
            }
        });
    };
    LoginSupplierPage.prototype.svcToast = function (note, pos) {
        var toast = this.toastCtrl.create({
            message: note,
            duration: 3000,
            position: pos,
            showCloseButton: true,
            closeButtonText: "ok",
        });
        toast.present();
    };
    return LoginSupplierPage;
}());
LoginSupplierPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-login-supplier",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\login-supplier\login-supplier.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login Ssupplier</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="login-List"> \n      <form id="supplierForm" [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)">\n        <h3>Proveedor</h3>\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="manager"></ion-label>\n          <ion-input type="text"  placeholder="Nombre y apellido"\n            id="manager" [formControl]= "myForm.controls[\'manager\']"></ion-input>\n            <p *ngIf="!myForm.controls[\'manager\'].valid && myForm.controls[\'manager\'].touched"   \n              class="alert alert-danger"></p>\n        </ion-item> 	\n          \n        <ion-item class="login-Class">\n          <ion-label floating for="email"></ion-label>\n            <ion-input type="email"  placeholder="Email" \n              id="email" [formControl]= "myForm.controls[\'email\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'email\'].valid && myForm.controls[\'email\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item> 	\n\n        <ion-item class="login-Class">\n          <ion-label floating for="password"></ion-label>\n            <ion-input type="password"  placeholder="Contraseña (mínimo 6 caracteres)" \n              id="password" [formControl]= "myForm.controls[\'password\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'password\'].valid && myForm.controls[\'password\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item>\n\n        <ion-item class="login-Class">\n          <ion-label floating for="password"></ion-label>\n            <ion-input type="password"  placeholder="Confirma tu contraseña" \n              id="cPassword" [formControl]= "myForm.controls[\'cPassword\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'cPassword\'].valid && myForm.controls[\'cPassword\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item>\n\n        <ion-item class="login-Class">\n          <ion-label floating for="phone"></ion-label>\n            <ion-input type="tel"  placeholder="Número telefónico (10 dígitos)" \n              id="phone" [formControl]= "myForm.controls[\'phone\']"></ion-input>\n            <div *ngIf="!myForm.controls[\'phone\'].valid && myForm.controls[\'phone\'].touched"   \n              class="alert alert-danger"></div>\n        </ion-item>\n\n        <ion-item  class="login-Class" > \n          <ion-label for="service" style="color:rgb(146, 145, 145) !important" no-padding>Servicio</ion-label>\n              <ion-select id="service" [formControl]="myForm.controls[\'service\']" \n              placeholder="Selecciona un servicio" \n              cancelText="Atras" >\n                <ion-option *ngFor="let mainService of mainServices" [value]="mainService" no-padding>{{mainService}} </ion-option>\n                <ion-option *ngFor="let service of services" [value]="service" no-padding>{{service}} </ion-option>\n              </ion-select>\n        </ion-item> \n\n        <ion-item class="login-Class">\n            <ion-label  floating for="specialty"></ion-label>\n              <ion-input type="text"  placeholder="Especialización o cualidades"\n                id="specialty" [formControl]= "myForm.controls[\'specialty\']"></ion-input>\n              <p *ngIf="!myForm.controls[\'specialty\'].valid && myForm.controls[\'specialty\'].touched"   \n                  class="alert alert-danger"></p>\n        </ion-item> 	\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="name"></ion-label>\n            <ion-input type="text"  placeholder="Nombre del establecimiento"\n              id="name" [formControl]= "myForm.controls[\'name\']"></ion-input>\n            <p *ngIf="!myForm.controls[\'name\'].valid && myForm.controls[\'name\'].touched"   \n                class="alert alert-danger"></p>\n        </ion-item> 	\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="address"></ion-label>\n            <ion-input type="text"  placeholder="Dirección "\n              id="address" [formControl]= "myForm.controls[\'address\']"></ion-input>\n            <p *ngIf="!myForm.controls[\'address\'].valid && myForm.controls[\'address\'].touched"   \n                class="alert alert-danger"></p>\n        </ion-item> 	\n\n        <ion-item class="login-Class">\n            <ion-label  floating for="brands"></ion-label>\n              <ion-input type="text"  placeholder="Marcas"\n                id="brands" [formControl]= "myForm.controls[\'brands\']"></ion-input>\n              <p *ngIf="!myForm.controls[\'brands\'].valid && myForm.controls[\'brands\'].touched"   \n                  class="alert alert-danger"></p>\n          </ion-item> 	\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="schedule"></ion-label>\n            <ion-input type="text"  placeholder="Horario"\n              id="schedule" [formControl]= "myForm.controls[\'schedule\']"></ion-input>\n            <p *ngIf="!myForm.controls[\'schedule\'].valid && myForm.controls[\'schedule\'].touched"   \n                class="alert alert-danger"></p>\n        </ion-item> 	\n\n        <ion-item class="login-Class">\n          <ion-label  floating for="website"></ion-label>\n            <ion-input type="text"  placeholder="Sitio web" [formControl]= "myForm.controls[\'website\']"\n              id="website"></ion-input>\n        </ion-item> 	\n        <br/>\n        <ion-item class="coords-Class">\n          <ion-label for="lat" item-start></ion-label >\n          <ion-input type="text"  placeholder="latitud" [(ngModel)]="fetchedLat"\n            id="lat" [formControl]= "myForm.controls[\'lat\']"  ></ion-input>\n          <p *ngIf="!myForm.controls[\'lat\'].valid && myForm.controls[\'lat\'].touched"   \n              class="alert alert-danger"></p>\n\n            <ion-label for="lng"></ion-label>\n          <ion-input type="text"  placeholder="longitud"  [(ngModel)]="fetchedLng"\n            id="lng" [formControl]= "myForm.controls[\'lng\']" ></ion-input>\n          <p *ngIf="!myForm.controls[\'lng\'].valid && myForm.controls[\'lng\'].touched"   \n              class="alert alert-danger"></p>\n            <button ion-button round type="button" (click)=getMyPos() color="submit" item-end>Mi ubicacion</button>\n        </ion-item>\n\n        <br/>\n        <div text-center> \n            <button ion-button block round type="submit" color="submit" [disabled]="!myForm.valid">Registrar</button>\n        </div>   \n        <br/>\n\n      </form>     \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\login-supplier\login-supplier.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */], __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_3__utils_supplier_mapping__["a" /* SupplierMapping */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], LoginSupplierPage);

//# sourceMappingURL=login-supplier.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(316);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mocks_providers_items__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_supplier_detail_supplier_detail_module__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_customer_login_customer_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_supplier_login_supplier_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login_module__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var firebaseConfig = {
    apiKey: "AIzaSyBdQOPM3re7vBFNTEspKM7G0vzKH7ub6H8",
    authDomain: "villainova-app.firebaseapp.com",
    databaseURL: "https://villainova-app.firebaseio.com",
    projectId: "villainova-app",
    storageBucket: "villainova-app.appspot.com",
    messagingSenderId: "1297766976",
};
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
        option1: true,
        option2: "Ionitron J. Framework",
        option3: "3",
        option4: "Hello",
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
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]],
                },
            }),
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/autoservice/autoservice.module#AutoservicePageModule', name: 'AutoservicePage', segment: 'autoservice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/supplier-detail/supplier-detail.module#SupplierDetailPageModule', name: 'SupplierDetailPage', segment: 'supplier-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-customer/login-customer.module#LoginCustomerPageModule', name: 'LoginCustomerPage', segment: 'login-customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-supplier/login-supplier.module#LoginSupplierPageModule', name: 'LoginSupplierPage', segment: 'login-supplier', priority: 'low', defaultHistory: [] },
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
            __WEBPACK_IMPORTED_MODULE_16__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings_module__["SettingsPageModule"],
            __WEBPACK_IMPORTED_MODULE_18__pages_supplier_detail_supplier_detail_module__["SupplierDetailPageModule"],
            __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_customer_login_customer_module__["LoginCustomerPageModule"],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_supplier_login_supplier_module__["LoginSupplierPageModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_login_login_module__["LoginPageModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicApp */]],
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
            { provide: __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicErrorHandler */] },
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(614);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\home\home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n      \n      \n    </button>\n    <ion-title>Inicio </ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <google-card-layout-3 \n    [data]="params.data"  \n    [events]="params.events">\n  </google-card-layout-3>\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], GoogleCardLayout3.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* FabButton */])
], GoogleCardLayout3.prototype, "fabButton", void 0);
GoogleCardLayout3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'google-card-layout-3',template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\components\list-view\google-card\layout-3\google-card.html"*/'<!--Theme Full Image Cards-->\n\n<ion-content has-header>\n\n  <!--<ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 *ngFor="let item of data.items;let i = index" style="height:120px">\n\n        <ion-card padding text-center class="card card-md" (click)="onEvent(\'onItemClick\', item, $event)" >\n\n          <div card-content style="height:100px">\n\n          <img images-filter src="{{item.image}}" style="height:100px" />\n\n          <div card-title>{{item.title}}</div>\n\n          <div card-subtitle>{{item.subtitle}}</div>\n\n        </div>\n\n        </ion-card>\n\n        <button ion-button round color="categories">{{item.title}}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>-->\n\n\n\n  <ion-grid no-padding id="bgGrad">\n\n      <br><br><br>\n\n    <ion-row > \n\n      <ion-col col-6 col-md-6 col-xl-3 *ngFor="let item of data.items;let i = index" >\n\n          <ion-card padding text-center (click)="onEvent(\'onItemClick\', item, $event)" no-padding style="background-color:transparent">\n\n              <img src="{{item.image}}"  style="align-items: center" />\n\n              <ion-card-content>\n\n                <p style="color:whitesmoke; font-size:medium">\n\n                  <Strong>{{item.title}}</Strong>\n\n                </p>\n\n              </ion-card-content>\n\n          </ion-card>\n\n          <br><br>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid> \n\n\n\n\n\n\n\n</ion-content>\n\n\n\n<!--<ion-fab #fab bottom right>\n\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab>-->\n\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\components\list-view\google-card\layout-3\google-card.html"*/
    }),
    __metadata("design:paramtypes", [])
], GoogleCardLayout3);

//# sourceMappingURL=google-card-layout-3.js.map

/***/ }),

/***/ 612:
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

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(168);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
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

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(258);
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
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post("login", accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == "success") {
                _this._loggedIn(res);
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

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(120);
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





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.emailUrl = "http://localhost:4000/api/email";
    }
    LoginService.prototype.doesExistEmail = function (selectedEmail, profile) {
        return this.http.get(this.emailUrl + "/" + profile + "/" + selectedEmail)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || "Server error"); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], LoginService);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowToaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */]])
], ShowToaster);

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierMapping; });
var SupplierMapping = (function () {
    function SupplierMapping() {
    }
    SupplierMapping.prototype.arrangeData = function (formData) {
        if (formData === void 0) { formData = {}; }
        delete formData.cPassword;
        //formData.service = formData.service.name;
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
        iconList.set("Parabrisa y Vidrios", "par.png");
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

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(47);
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
            //{ title: 'Asistencia', component: 'AutoservicePage', icon:'build'},
            { title: "Gasolineras", component: "ProfilePage", icon: "ios-car" },
            //{ title: 'Grúas', component: 'ProfilePage', icon:'icon-truck'},
            { title: "Productos", component: "ProfilePage", icon: "md-list-box" },
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "menu",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\app\app.html"*/'\n\n<ion-menu [content]="content" style="background-color:#f0ede6" >\n\n  <ion-header >\n\n    <div menuClose  class="header-background-image" (click)="openPage({ title:\'Inicio\', component:\'AutoservicePage\'})"\n\n     style="background-color:#eae4da" >\n\n     <ion-grid>\n\n       <ion-row>\n\n         <ion-col col-4> \n\n          <img src="assets/images/logo/main-logo.png" style="width:100px;" >\n\n         </ion-col>\n\n         <ion-col col-8>\n\n           <br><img src="assets/images/logo/autocar.png"  >\n\n          </ion-col>\n\n       </ion-row>\n\n     </ion-grid>\n\n      <!--<h1 item-title text-center> <strong> Aquí va el nombre</strong></h1>-->\n\n    </div>\n\n  </ion-header>\n\n  <ion-content color="primary" style="background-color:#f0ede6" class="menuBackground" >\n\n    <ion-list no-margin >\n\n      <button menuClose paddinge-left ion-item no-lines item-title main-menu\n\n        *ngFor="let p of pages" (click)="openPage(p)" style="height: 50pxx; background-color:#f0ede6">\n\n        <ion-icon icon-small item-left name="{{p.icon}}">\n\n          <i class="icon {{p.icon}}"></i>\n\n        </ion-icon>\n\n        <strong>{{p.title}}</strong>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage" style="margin:0% !important"></ion-nav>'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[311]);
//# sourceMappingURL=main.js.map