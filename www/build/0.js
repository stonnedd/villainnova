webpackJsonp([0],{

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoservicePageModule", function() { return AutoservicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoservice__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_maps_layout_1_maps_layout_1__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_parallax_elastic_header__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_orderBy__ = __webpack_require__(663);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autoservice__["a" /* AutoservicePage */]),
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

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(306);
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
        this.params = {};
        this.usrPos = {};
        this.params.data = {};
        this.params.suppliers = [];
        this.params.fetchSupp = [];
        this.params.mapData = {};
        this.params.events = {
            "onLike": function (item) {
                console.log("Like");
            },
            "onFavorite": function (item) {
                if (item) {
                    item.favorite = !item.favorite;
                }
            },
            "onShare": function (item) {
                console.log("Share");
            },
            "onSkipPrevious": function (item) {
                console.log("Skip Previous");
            },
            "onPlay": function (item) {
                console.log("Play");
            },
            "onSkipNext": function (item) {
                console.log("Skip Next");
            },
            "onFab": function (item) {
                console.log("Fab");
            },
            "onRates": function (index) {
                console.log("Rates " + (index + 1));
            },
            "onItemClick": function (item) {
                console.log(item.title);
            },
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
        this.fetchServices();
        this.fetchMainServices();
        this.AsSvc.getPosition().then(function (userPosition) {
            _this.fillUsrData(userPosition);
            console.log("pos:", userPosition.coords);
        }).catch(function (error) {
            _this.presentToast(JSON.stringify(error));
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
        var popover = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
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
        }, function (err) {
            console.log(err);
        });
    };
    AutoservicePage.prototype.fetchServices = function () {
        var _this = this;
        this.autoservice.getServices().subscribe(function (services) {
            _this.params.services = services;
            console.log("fetchedServ", _this.params.services);
        }, function (err) {
            console.log(err);
        });
    };
    AutoservicePage.prototype.fetchMainServices = function () {
        var _this = this;
        this.autoservice.getMainServices().subscribe(function (mservices) {
            _this.params.mainServices = mservices;
            console.log("fetchedMServ", _this.params.services);
        }, function (err) {
            console.log(err);
        });
    };
    return AutoservicePage;
}());
AutoservicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-autoservice",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\pages\autoservice\autoservice.html"*/'  <ion-header style="height:0px" >\n  <ion-navbar style="height:5px" >\n      <!--<ion-grid>\n        <ion-row > \n          <ion-col>\n              <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>        \n          </ion-col>\n          <ion-col>\n            <br><ion-title>Asistencia</ion-title>\n          </ion-col>\n          <ion-col >\n              <button ion-button icon-only clear float-right (click)=showSettings($event)><ion-icon name="settings" style="color:white"></ion-icon></button>         \n          </ion-col>\n        </ion-row>\n      </ion-grid>-->\n      <button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>        \n      <ion-title>Asistencia<ion-icon name="settings" float-right (click)=showSettings($event) class="icon-size" ></ion-icon></ion-title>\n  </ion-navbar>\n</ion-header>\n<maps-layout-1\n  [data]="params.data"\n  [events]="params.events"\n  [userData]="params.userData"\n  [services]="params.services"\n  [mainServices]="params.mainServices"\n  [suppliers]="params.suppliers"\n  [mapData]="params.mapData"\n  (onMarkerService)="onMarkerService($event)"\n  (serviceIsSelected)="serviceIsSelected($event)">\n</maps-layout-1>\n\n\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\pages\autoservice\autoservice.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__service_autoservice_service__["a" /* AutoserviceService */]])
], AutoservicePage);

//# sourceMappingURL=autoservice.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_supplier_detail_supplier_detail__ = __webpack_require__(307);
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
        var _this = this;
        if (this.selectedService.length === 0) {
            this.labelService = "un servicio";
        }
        else if (this.selectedService.length === 1) {
            this.labelService = this.selectedService[0];
        }
        else {
            this.labelService = "una opción";
        }
        this.selectedService.forEach(function (element) {
            if (element === "Taller especializado") {
                _this.showBrands();
                //console.log("si");
                //this.svcToast("Seleciona una marca", "top");
            }
        });
        this.svcToast("Seleciona " + this.labelService, "bottom");
        this.serviceIsSelected.emit(this.selectedService);
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
        popover.present({
            ev: event,
        });
    };
    MapsLayout1.prototype.ngOnInit = function () {
        this.svcToast("Selecciona un servicio", "bottom");
    };
    MapsLayout1.prototype.showBrands = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Selecciona una marca");
        alert.addInput({
            type: "checkbox",
            label: "Audi",
            value: "audi",
            checked: true,
        });
        alert.addInput({
            type: "checkbox",
            label: "Bmw",
            value: "bmw",
        });
        alert.addButton("Cancel");
        alert.addButton({
            text: "Ok",
            handler: function (data) {
                console.log("Checkbox data:", data);
                _this.svcToast("Seleciona " + _this.labelService, "bottom");
            },
        });
        alert.present();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "onMarkerService", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapsLayout1.prototype, "serviceIsSelected", void 0);
MapsLayout1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "maps-layout-1",template:/*ion-inline-start:"C:\WorkSpace\appMovile2017\villaInova\src\components\maps\layout-1\maps.html"*/'\n\n<ion-content  has-header>\n\n  \n\n  <ion-grid no-padding class="option-service">\n\n    <ion-item style="height:45px" class="option-service" > \n\n      <ion-label for="services"><ion-icon  item-left name="build"></ion-icon>Servicios</ion-label>\n\n      <ion-select id="services" requiered  [(ngModel)]="selectedService" \n\n      (ionChange)="svcSelected()" \n\n      multiple="true" \n\n      cancelText="Atras">\n\n        <ion-option *ngFor="let mainService of mainServices" [value]="mainService">{{mainService}} </ion-option>\n\n        <ion-option *ngFor="let service of services | orderBy : \'+\'" [value]="service">{{service}} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-grid>\n\n  \n\n  <sebm-google-map [latitude]="mapData.lat" [longitude]="mapData.lng" [zoom]="mapZoom" [mapTypeControl]=true [streetViewControl]=true>\n\n    <sebm-google-map-marker *ngFor="let supplier of suppliers"  \n\n      [latitude]="supplier.lat" \n\n      [longitude]="supplier.lng" \n\n      [label]="supplier.markLabel"\n\n      (markerClick)="onEvent(\'onMarker\',supplier)"\n\n      [iconUrl]="\'../assets/mapicons/\'+supplier.map_icon">\n\n    </sebm-google-map-marker>\n\n    <sebm-google-map-marker [iconUrl]="userData.userPos.iconUrl" [latitude]="userData.userPos.lat" [longitude]="userData.userPos.lng"></sebm-google-map-marker>\n\n  </sebm-google-map>\n\n  \n\n  <ion-fab bottom left>\n\n      <button ion-fab color="locate" mini><ion-icon name="md-locate"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WorkSpace\appMovile2017\villaInova\src\components\maps\layout-1\maps.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MapsLayout1);

//# sourceMappingURL=maps-layout-1.js.map

/***/ }),

/***/ 662:
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

/***/ 663:
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