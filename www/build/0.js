webpackJsonp([0],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoservicePageModule", function() { return AutoservicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoservice__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_maps_layout_1_maps_layout_1__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_parallax_elastic_header__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_orderBy__ = __webpack_require__(364);
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
            __WEBPACK_IMPORTED_MODULE_5__components_parallax_elastic_header__["a" /* ElasticHeader */],
            __WEBPACK_IMPORTED_MODULE_6__utils_orderBy__["a" /* OrderByPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autoservice__["a" /* AutoservicePage */]),
            __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyABWUtTglN8YGqcYI1zyjeRdOJx5r3TrZU'
            })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__components_parallax_elastic_header__["a" /* ElasticHeader */]
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
    })
], AutoservicePageModule);

//# sourceMappingURL=autoservice.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(236);
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
    function AutoservicePage(navCtrl, navParams, AsSvc, popCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AsSvc = AsSvc;
        this.popCtrl = popCtrl;
        this.params = {};
        this.usrPos = {};
        this.params.data = {};
        this.params.suppliers = [];
        this.params.mapData = {};
        this.params.events = {
            'onLike': function (item) {
                console.log("Like");
            },
            'onFavorite': function (item) {
                if (item) {
                    item.favorite = !item.favorite;
                }
            },
            'onShare': function (item) {
                console.log("Share");
            },
            'onSkipPrevious': function (item) {
                console.log("Skip Previous");
            },
            'onPlay': function (item) {
                console.log("Play");
            },
            'onSkipNext': function (item) {
                console.log("Skip Next");
            },
            'onFab': function (item) {
                console.log("Fab");
            },
            'onRates': function (index) {
                console.log("Rates " + (index + 1));
            },
            'onItemClick': function (item) {
                console.log(item.title);
            },
            'onMarker': function (item) {
                if (item === void 0) { item = {}; }
                console.log(item);
            }
        };
        this.params.userData = {
            userPos: {
                lat: 0,
                lng: 0,
                zoom: 15,
                mapTypeControl: true,
                streetViewControl: true,
            }
        };
    }
    AutoservicePage.prototype.serviceIsSelected = function (chosenService) {
        console.log('ocpión::', chosenService);
        this.params.suppliers = this.AsSvc.getSuppliers().filter(function (data) {
            for (var i = 0; i < chosenService.length; i++) {
                if (data.service === chosenService[i]) {
                    return true;
                }
            }
        });
        console.log('proveedores:', this.params.suppliers);
    };
    AutoservicePage.prototype.onMarkerService = function (params) {
        console.log('params:', params);
        this.params.data = params;
        this.params.mapData.lat = params.lat;
        this.params.mapData.lng = params.lng;
    };
    AutoservicePage.prototype.ionViewDidLoad = function () {
    };
    AutoservicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.params.services = this.AsSvc.getServices();
        this.AsSvc.getPosition().then(function (userPosition) {
            _this.fillUsrData(userPosition);
            console.log(userPosition.coords);
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
                iconUrl: '../assets/mapicons/you.png'
            }
        };
        this.params.mapData.lat = usrPosition.coords.latitude;
        this.params.mapData.lng = usrPosition.coords.longitude;
    };
    AutoservicePage.prototype.showSettings = function (event) {
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
        popover.present({
            ev: event
        });
    };
    return AutoservicePage;
}());
AutoservicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-autoservice',template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\autoservice\autoservice.html"*/'  <ion-header style="height:0px" >\n  <ion-navbar style="height:5px">\n      <!--<ion-grid>\n        <ion-row > \n          <ion-col>\n              <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>        \n          </ion-col>\n          <ion-col>\n            <br><ion-title>Asistencia</ion-title>\n          </ion-col>\n          <ion-col >\n              <button ion-button icon-only clear float-right (click)=showSettings($event)><ion-icon name="settings" style="color:white"></ion-icon></button>         \n          </ion-col>\n        </ion-row>\n      </ion-grid>-->\n      <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>        \n      <ion-title>Asistencia<ion-icon name="settings" float-right (click)=showSettings($event) class="icon-size" ></ion-icon></ion-title>\n  </ion-navbar>\n</ion-header>\n<maps-layout-1\n  [data]="params.data"\n  [events]="params.events"\n  [userData]="params.userData"\n  [services]="params.services"\n  [suppliers]="params.suppliers"\n  [mapData]="params.mapData"\n  (onMarkerService)="onMarkerService($event)"\n  (serviceIsSelected)="serviceIsSelected($event)">\n</maps-layout-1>\n\n\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\autoservice\autoservice.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
], AutoservicePage);

//# sourceMappingURL=autoservice.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(361);

var AutoserviceService = (function () {
    function AutoserviceService() {
        this.geolocation = new __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */]();
        this.mapdata = {};
    }
    AutoserviceService.prototype.getServices = function () {
        return ['Mecánico', 'Talachero', 'Cerrajero', 'Eléctrico', 'Transmisiones', 'Climas',
            'Radiadores', 'Mofles', 'Hojalatero', 'Taller Automotriz', 'Autolovado', 'Gruas'];
    };
    AutoserviceService.prototype.getSuppliers = function () {
        return [
            {
                id: 1,
                service: 'Talachero',
                title: 'talachas 1 ',
                titleDescription: 'descripción...',
                reviews: 'algo aquí',
                contentTitle: 'contenido de titulo',
                contentDescription: 'descripción',
                address: 'dirección ...',
                schedule: 'horario',
                phone: 'telefono',
                website: 'string',
                email: 'string',
                lat: 20.084935,
                lng: -98.7958465,
                markLabel: '',
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/tires.png",
                iconsStars: [
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }
                ]
            },
            {
                id: 2,
                service: 'Mecánico',
                title: 'mec 2',
                titleDescription: 'descripción...',
                reviews: 'algo aquí',
                contentTitle: 'contenido de titulo',
                contentDescription: 'descripción',
                address: 'dirección ...',
                schedule: 'horario',
                phone: 'telefono',
                website: 'string',
                email: 'string',
                lat: 20.0742486,
                lng: -98.790892,
                markLabel: '',
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/gears.png",
                iconsStars: [
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }
                ]
            },
            {
                id: 4,
                service: 'Mecánico',
                title: 'mec XX',
                titleDescription: 'descripción...',
                reviews: 'algo aquí',
                contentTitle: 'contenido de titulo',
                contentDescription: 'descripción',
                address: 'dirección ...',
                schedule: 'horario',
                phone: 'telefono',
                website: 'string',
                email: 'string',
                lat: 20.0730022,
                lng: -98.790022,
                markLabel: '',
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/gears.png",
                iconsStars: [
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }
                ]
            },
            {
                id: 3,
                service: 'Cerrajero',
                title: 'Cerra',
                titleDescription: 'llaves y mas...',
                reviews: 'algo aquí',
                contentTitle: 'contenido de titulo',
                contentDescription: 'descripción',
                address: 'dirección ...',
                schedule: 'horario',
                phone: 'telefono',
                website: 'string',
                email: 'string',
                lat: 20.06624,
                lng: -98.7908,
                markLabel: '',
                zoom: 10,
                mapTypeControl: true,
                streetViewControl: true,
                iconUrl: "../assets/mapicons/key.png",
                iconsStars: [
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }, {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    }
                ]
            }
        ];
    };
    AutoserviceService.prototype.getPosition = function () {
        return this.geolocation.getCurrentPosition();
    };
    AutoserviceService.prototype.watchPos = function () {
        return this.geolocation.watchPosition().subscribe(function (data) {
            console.log('watch', data);
        });
    };
    return AutoserviceService;
}());

//# sourceMappingURL=autoservice-service.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geolocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * @usage
 *
 * ```typescript
 * import { Geolocation } from '@ionic-native/geolocation';
 *
 * ...
 *
 * constructor(private geolocation: Geolocation) {}
 *
 * ...
 *
 * this.geolocation.getCurrentPosition().then((resp) => {
 *  // resp.coords.latitude
 *  // resp.coords.longitude
 * }).catch((error) => {
 *   console.log('Error getting location', error);
 * });
 *
 * let watch = this.geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  // data can be a set of coordinates, or an error (if an error occurred).
 *  // data.coords.latitude
 *  // data.coords.longitude
 * });
 * ```
 * @interfaces
 * Coordinates
 * Geoposition
 * PositionError
 * GeolocationOptions
 */
var Geolocation = (function (_super) {
    __extends(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    Geolocation.prototype.getCurrentPosition = function (options) { return; };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    return Geolocation;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));
Geolocation.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
Geolocation.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Geolocation.prototype, "getCurrentPosition", null);
Geolocation = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
        pluginName: 'Geolocation',
        plugin: 'cordova-plugin-geolocation',
        pluginRef: 'navigator.geolocation',
        repo: 'https://github.com/apache/cordova-plugin-geolocation',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Geolocation);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsLayout1; });
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

var MapsLayout1 = (function () {
    function MapsLayout1() {
        this.onMarkerService = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.serviceIsSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.markerSelected = false;
        this.serviceSelected = false;
        this.supplierSelected = false;
        this.mapZoom = 14;
        this.value1 = '#ffffff';
    }
    MapsLayout1.prototype.onEvent = function (event, e) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log('evento:', event);
        if (event != "onRates") {
            this.onMarkerService.emit(e);
            this.markerSelected = true;
            this.supplierSelected = false;
            this.mapZoom = 15;
        }
    };
    MapsLayout1.prototype.svcSelected = function () {
        this.serviceIsSelected.emit(this.selectedService);
        this.serviceSelected = true;
        this.supplierSelected = true;
        this.markerSelected = false;
        if (this.selectedService.length === 1) {
            this.labelService = this.selectedService[0];
        }
        else {
            this.labelService = "una opción";
        }
        this.mapZoom = 13;
        console.log('long:', this.selectedService.length);
        console.log('slc:', this.selectedService);
    };
    MapsLayout1.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", e);
    };
    ;
    MapsLayout1.prototype.dropDown = function () {
        this.markerSelected = false;
        console.log("click en icono");
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
    __metadata("design:type", Object)
], MapsLayout1.prototype, "suppliers", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "mapData", void 0);
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
        selector: 'maps-layout-1',template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\components\maps\layout-1\maps.html"*/'<!--Content -->\n\n<ion-content elastic-header has-header>\n\n  \n\n  <ion-grid no-padding class="option-service">\n\n    <ion-item style="height:50px" class="option-service" > \n\n      <ion-label for="services"><ion-icon  item-left name="build"></ion-icon>Servicios</ion-label>\n\n      <ion-select id="services" requiered  [(ngModel)]="selectedService" (ionChange)="svcSelected()" multiple="true" >\n\n        <ion-option *ngFor="let service of services | orderBy : \'+\'" [value]="service" >{{service}} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-grid>\n\n  \n\n  <div id="elastic-header">\n\n    <sebm-google-map [latitude]="mapData.lat" [longitude]="mapData.lng" [zoom]="mapZoom" [mapTypeControl]=true [streetViewControl]=true \n\n    [style.height]="markerSelected ? \'240px\':\'500px\' ">\n\n      <sebm-google-map-marker *ngFor="let supplier of suppliers"  \n\n        [latitude]="supplier.lat" \n\n        [longitude]="supplier.lng" \n\n        [label]="supplier.markLabel"\n\n        (markerClick)="onEvent(\'onMarker\', supplier)"\n\n        [iconUrl]="supplier.iconUrl">\n\n      </sebm-google-map-marker>\n\n      <sebm-google-map-marker [iconUrl]="userData.userPos.iconUrl" [latitude]="userData.userPos.lat" [longitude]="userData.userPos.lng"></sebm-google-map-marker>\n\n    </sebm-google-map>\n\n  </div>\n\n\n\n  <div [hidden]="serviceSelected"> \n\n    <ion-grid no-padding>\n\n      <ion-item style="text-align:center; height:45px; background-color:rgba(112, 183, 250, 0.91)"  >\n\n        <ion-card-header><h2 style="color:white">Selecciona un servicio <ion-icon name="build"></ion-icon> </h2> </ion-card-header>\n\n      </ion-item>\n\n    </ion-grid> \n\n  </div>\n\n  <div [hidden]="!supplierSelected"> \n\n      <ion-item style="text-align:center; height:45px; background-color:rgba(112, 183, 250, 0.91)"  >\n\n        <ion-card-header><h2 style="color:white">Selecciona {{labelService}} <ion-icon name="build"></ion-icon> </h2> </ion-card-header>\n\n      </ion-item>\n\n  </div>\n\n  <div [hidden]="!markerSelected">\n\n    <ion-grid no-padding>\n\n      <ion-row>\n\n        <ion-col col-12 map-header>\n\n            <ion-item no-lines transparent style="height:160px">\n\n              <ion-icon name=\'ios-arrow-dropdown-outline\' style="color:azure" (click)="svcSelected()"></ion-icon>\n\n                <h1 maps-title margin-top>{{data.title}}</h1>\n\n                <h2 maps-subtitle>{{data.titleDescription}}</h2>\n\n              <!--Parallax Rateing-->\n\n              <ion-icon  white *ngFor="let item of data.iconsStars;let i = index" (click)="onStarClass(data.iconsStars, i, $event)">\n\n                <i icon-medium *ngIf="item.isActive" class="icon {{item.iconActive}}"></i>\n\n                <i icon-medium *ngIf="!item.isActive" class="icon {{item.iconInactive}}"></i>\n\n              </ion-icon>\n\n              <p>{{data.reviews}}</p>\n\n              \n\n             <!-- <div white social right>\n\n                <ion-icon (click)="onEvent(\'onLike\', data)">\n\n                  <i class="icon icon-thumb-up"></i>\n\n                </ion-icon>\n\n                <ion-icon (click)="onEvent(\'onFavorite\', data)">\n\n                  <i class="icon icon-heart"></i>\n\n                </ion-icon>\n\n                <ion-icon (click)="onEvent(\'onShare\', data)">\n\n                  <i class="icon icon-share-variant"></i>\n\n                </ion-icon>\n\n              </div>-->\n\n            </ion-item>\n\n          </ion-col>\n\n          <!---Content-->\n\n          <ion-col col-12 map-content transparent>\n\n            <ion-item padding no-lines padding-left>\n\n              <h2 title>{{data.contentTitle}}</h2>\n\n              <p maps-description text-wrap>{{data.contentDescription}}</p>\n\n            </ion-item>\n\n            </ion-col>\n\n            <!---Content Info-->\n\n            <ion-col col-12 map-content>\n\n              <ion-list info>\n\n              <ion-item no-lines padding-left>\n\n                <ion-icon item-left icon-small>\n\n                  <i class="icon icon-map-marker-radius"></i>\n\n                </ion-icon>\n\n                <p no-margin maps-description>{{data.address}}</p>\n\n              </ion-item>\n\n              <ion-item no-lines padding-left>\n\n                <ion-icon item-left icon-small>\n\n                  <i class="icon icon-alarm"></i>\n\n                </ion-icon>\n\n                <p no-margin maps-description>{{data.schedule}}</p>\n\n              </ion-item>\n\n              <ion-item no-lines padding-left>\n\n                <ion-icon item-left icon-small>\n\n                  <i class="icon icon-phone"></i>\n\n                </ion-icon>\n\n                <p no-margin maps-description>{{data.phone}}</p>\n\n              </ion-item>\n\n              <ion-item no-lines padding-left>\n\n                <ion-icon item-left icon-small>\n\n                  <i class="icon icon-earth"></i>\n\n                </ion-icon>\n\n                <p no-margin maps-description>{{data.website}}</p>\n\n              </ion-item>\n\n              <ion-item no-lines padding-left>\n\n                <ion-icon item-left icon-small>\n\n                    <i class="icon icon-email-outline"></i>\n\n                </ion-icon>\n\n                <p no-margin maps-description>{{data.email}}</p>\n\n              </ion-item>\n\n            </ion-list>\n\n            </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\components\maps\layout-1\maps.html"*/
    }),
    __metadata("design:paramtypes", [])
], MapsLayout1);

//# sourceMappingURL=maps-layout-1.js.map

/***/ }),

/***/ 363:
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

/***/ 364:
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

/***/ })

});
//# sourceMappingURL=0.js.map