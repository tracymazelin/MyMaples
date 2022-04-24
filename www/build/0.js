webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTreePageModule", function() { return AddTreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_tree__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddTreePageModule = /** @class */ (function () {
    function AddTreePageModule() {
    }
    AddTreePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_tree__["a" /* AddTreePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_tree__["a" /* AddTreePage */]),
            ],
        })
    ], AddTreePageModule);
    return AddTreePageModule;
}());

//# sourceMappingURL=add-tree.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(102);
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
 * Generated class for the AddTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTreePage = /** @class */ (function () {
    function AddTreePage(view, navParams, plt, toastCtrl, storage, loadingCtrl, modal, storageService, geolocation) {
        this.view = view;
        this.navParams = navParams;
        this.plt = plt;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.modal = modal;
        this.storageService = storageService;
        this.geolocation = geolocation;
        this.trees = [];
        this.tree = {};
        this.tree.id = Date.now();
        this.getGPS();
    }
    AddTreePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    AddTreePage.prototype.getGPS = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.tree.longitude = resp.coords.longitude,
                _this.tree.latitude = resp.coords.latitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    AddTreePage.prototype.addTree = function () {
        this.storageService.addTree(this.tree).then(function (tree) {
        });
        this.view.dismiss();
    };
    AddTreePage.prototype.ionViewDidLoad = function () {
        console.log(this.tree);
    };
    AddTreePage.prototype.calculateNumberOfTaps = function () {
        var diameter = (this.tree.circumference) / Math.PI;
        if (diameter <= 12) {
            this.tree.number_taps = 0;
            var toast = this.toastCtrl.create({
                message: 'This tree is too small to tap!',
                duration: 3000
            });
            toast.present();
        }
        else if (diameter >= 13 && diameter <= 20) {
            this.tree.number_taps = 1;
        }
        else if (diameter >= 21 && diameter <= 27) {
            this.tree.number_taps = 2;
        }
        else if (diameter >= 28) {
            this.tree.number_taps = 3;
        }
    };
    AddTreePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Fetching GeoLocation..",
            duration: 3000
        });
        loader.present();
    };
    AddTreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-tree',template:/*ion-inline-start:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/add-tree/add-tree.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Add a new Maple Tree</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="closeModal()">Close</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label color="primary" floating>Tree Nickname</ion-label>\n            <ion-input [(ngModel)]="tree.nickname" type="string"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Tree Latitude</ion-label>\n            <ion-input [(ngModel)]="tree.latitude" type="number"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Tree Longitude</ion-label>\n            <ion-input [(ngModel)]="tree.longitude" type="number"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary" floating>Tree Circumference (inches)</ion-label>\n            <ion-input [(ngModel)]="tree.circumference" type="number" clearInput=true></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Number of Taps</ion-label>\n            <ion-input [(ngModel)]="tree.number_taps" (click)="calculateNumberOfTaps()" type="number"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Tap Date</ion-label>\n            <ion-datetime [(ngModel)]="tree.tap_date" type="string"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary" floating>Comments</ion-label>\n            <ion-input [(ngModel)]="tree.comments" type="string"></ion-input>\n        </ion-item>\n        <ion-item>\n            <button ion-button (click)="addTree()">Add Tree</button>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/add-tree/add-tree.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AddTreePage);
    return AddTreePage;
}());

//# sourceMappingURL=add-tree.js.map

/***/ })

});
//# sourceMappingURL=0.js.map