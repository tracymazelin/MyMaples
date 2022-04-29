webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SapServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SapServiceProvider = /** @class */ (function () {
    function SapServiceProvider(storage) {
        this.storage = storage;
        this.KEY = "saps"; // ie table name
    }
    SapServiceProvider.prototype.addSap = function (sap) {
        var _this = this;
        return this.storage.get(this.KEY).then(function (saps) {
            if (saps) {
                saps.push(sap);
                return _this.storage.set(_this.KEY, saps);
            }
            else {
                return _this.storage.set(_this.KEY, [sap]);
            }
        });
    };
    SapServiceProvider.prototype.getSap = function () {
        return this.storage.get(this.KEY);
    };
    SapServiceProvider.prototype.editSap = function (sap) {
        var _this = this;
        return this.storage.get(this.KEY).then(function (saps) {
            if (!saps || saps.length === 0) {
                return null;
            }
            var newSaps = [];
            for (var _i = 0, saps_1 = saps; _i < saps_1.length; _i++) {
                var i = saps_1[_i];
                if (i.id == sap.id) {
                    newSaps.push(sap);
                }
                else {
                    newSaps.push(i);
                }
            }
            return _this.storage.set(_this.KEY, newSaps);
        });
    };
    SapServiceProvider.prototype.deleteSap = function (id) {
        var _this = this;
        return this.storage.get(this.KEY).then(function (saps) {
            if (!saps || saps.length === 0) {
                return null;
            }
            var toKeep = [];
            for (var _i = 0, saps_2 = saps; _i < saps_2.length; _i++) {
                var i = saps_2[_i];
                if (i.id !== id) {
                    toKeep.push(i);
                }
            }
            return _this.storage.set(_this.KEY, toKeep);
        });
    };
    SapServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SapServiceProvider);
    return SapServiceProvider;
}());

//# sourceMappingURL=sap-service.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-tree/add-tree.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
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

// Custom theme
var AppProvider = /** @class */ (function () {
    function AppProvider() {
        this.activeTheme = "theme-mymaples";
    }
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sap_sap__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metrics_metrics__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__sap_sap__["a" /* SapPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__metrics_metrics__["a" /* MetricsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Trees" tabIcon="md-leaf"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Sap" tabIcon="md-color-fill"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Metrics" tabIcon="stats"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_tree_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_sap_service__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SapPage = /** @class */ (function () {
    function SapPage(navCtrl, sapDataProvider, navParams, treeDataProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sapDataProvider = sapDataProvider;
        this.navParams = navParams;
        this.treeDataProvider = treeDataProvider;
        this.toastCtrl = toastCtrl;
        this.trees = [];
        this.tree = {};
        this.saps = [];
        this.sap = {};
        this.treeDataProvider.getTrees().then(function (trees) {
            _this.trees = trees;
        });
    }
    SapPage.prototype.addSap = function () {
        this.sap.id = Date.now();
        this.sapDataProvider.addSap(this.sap).then(function () {
        });
        var toast = this.toastCtrl.create({
            message: 'Sap Quantity Added!',
            duration: 3000
        });
        toast.present();
    };
    SapPage.prototype.deleteSap = function () {
        this.sapDataProvider.deleteSap(this.sap.id);
    };
    SapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sap',template:/*ion-inline-start:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/sap/sap.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Sap Collection\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-item>\n        <ion-label color="primary" floating>Tree</ion-label>\n        <ion-select [(ngModel)]="sap.tree">\n            <ion-option *ngFor="let tree of trees">{{tree.nickname}}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" floating>Collection Date</ion-label>\n        <ion-datetime [(ngModel)]="sap.collection_date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary" floating>Amount in Gallons</ion-label>\n        <ion-input [(ngModel)]="sap.number_gallons" type="number"></ion-input>\n    </ion-item>\n\n    <ion-item padding>\n        <button ion-button full color="primary" (click)="addSap()">Add Sap Collection Quantity</button>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/sap/sap.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service_sap_service__["a" /* SapServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_service_tree_service__["a" /* TreeServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SapPage);
    return SapPage;
}());

//# sourceMappingURL=sap.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_sap_service__ = __webpack_require__(103);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetricsPage = /** @class */ (function () {
    function MetricsPage(navCtrl, sapDataProvider) {
        this.navCtrl = navCtrl;
        this.sapDataProvider = sapDataProvider;
        this.grandTotal = 0;
    }
    MetricsPage.prototype.ionViewWillLoad = function () {
        this.calculateTotalSapByTree();
    };
    // loop over the sap objects to reduce them uniquely by tree.  Then sum the sap quanities.
    MetricsPage.prototype.calculateTotalSapByTree = function () {
        var _this = this;
        this.sapDataProvider.getSap().then(function (sap) {
            _this.sapData = sap;
            if (_this.sapData) {
                _this.totals = Object.values(_this.sapData.reduce(function (accumulate, current) {
                    accumulate[current.tree] = accumulate[current.tree] || __assign({}, current, { number_gallons: 0 });
                    accumulate[current.tree].number_gallons += Number(current.number_gallons);
                    return accumulate;
                }, {}));
                _this.calculateGrandTotal();
            }
        });
    };
    // add up the grad total sap from all the trees
    MetricsPage.prototype.calculateGrandTotal = function () {
        var _this = this;
        this.totals.forEach(function (element) {
            _this.grandTotal += element.number_gallons;
        });
    };
    MetricsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-metrics',template:/*ion-inline-start:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/metrics/metrics.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Total Sap for the Season\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n    <ion-list *ngFor="let total of totals">\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="/assets/imgs/maples.jpg">\n            </ion-thumbnail>\n            <h2>{{total.tree}}</h2>\n            <ion-badge color="secondary">Total Sap: {{total.number_gallons}}</ion-badge>\n        </ion-item>\n    </ion-list>\n    <ion-item>\n        <h1>Grand Total: {{grandTotal}} </h1>\n        <p>Built with: Ionic v3</p>\n        <p>Developer: Tracy Mazelin</p>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/metrics/metrics.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_sap_service__["a" /* SapServiceProvider */]])
    ], MetricsPage);
    return MetricsPage;
}());

//# sourceMappingURL=metrics.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_tree_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    // use objects to manipulate the data then use the storage provider to add, edit, delete, and read the objects from the db.
    function HomePage(storageService, view, modal, actionSheet, navParams) {
        this.storageService = storageService;
        this.view = view;
        this.modal = modal;
        this.actionSheet = actionSheet;
        this.navParams = navParams;
        this.loadTrees();
    }
    HomePage.prototype.openModal = function () {
        var _this = this;
        var addTreeModal = this.modal.create('AddTreePage');
        addTreeModal.present();
        addTreeModal.onDidDismiss(function () {
            _this.loadTrees();
        });
    };
    HomePage.prototype.loadTrees = function () {
        var _this = this;
        this.storageService.getTrees().then(function (trees) {
            _this.trees = trees;
        });
    };
    HomePage.prototype.updateTree = function (tree) {
        var _this = this;
        var editTree = this.tree;
        var editTreeModal = this.modal.create('AddTreePage', { data: editTree });
        editTreeModal.present();
        this.storageService.editTree(tree).then(function () {
            editTreeModal.onDidDismiss(function () {
            });
            _this.loadTrees();
        });
    };
    HomePage.prototype.deleteTree = function (tree) {
        var _this = this;
        this.storageService.deleteTree(tree.id).then(function () {
            _this.loadTrees();
        });
    };
    HomePage.prototype.getTreeIndex = function (index) {
        this.index = index;
        this.presentActionSheet();
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        _this.deleteTree(_this.trees[_this.index]);
                    }
                }, {
                    text: 'Edit',
                    handler: function () {
                        _this.updateTree(_this.trees[_this.index]);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Maple Trees</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item text-center *ngIf="trees?.length === 0 || !trees">\n        No trees have been added yet. Add one!\n    </ion-item>\n    <ion-card *ngFor="let tree of trees; let i = index" (click)="getTreeIndex(i)">\n        <ion-card-content>\n            <h1>{{tree.nickname}}</h1>\n            <ion-badge item-end>Location: {{tree.latitude}}, {{tree.longitude}}</ion-badge>\n            <p>Circumference: {{tree.circumference}}</p>\n            <p>Number of Taps: {{tree.number_taps}}</p>\n            <p>Date Tapped: {{tree.tap_date}}</p>\n            <p *ngIf="tree.comments !==undefined && tree.comments">Comments: {{tree.comments}}</p>\n        </ion-card-content>\n    </ion-card>\n    <ion-fab bottom right>\n        <button (click)="openModal()" ion-fab mini>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_service_tree_service__["a" /* TreeServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sap_sap__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_metrics_metrics__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service_tree_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_data_service_sap_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_app_app__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sap_sap__["a" /* SapPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_metrics_metrics__["a" /* MetricsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-tree/add-tree.module#AddTreePageModule', name: 'AddTreePage', segment: 'add-tree', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mymaples',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_sap_sap__["a" /* SapPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_metrics_metrics__["a" /* MetricsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_data_service_tree_service__["a" /* TreeServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_data_service_sap_service__["a" /* SapServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__providers_app_app__["a" /* AppProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_app__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app) {
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/app/app.html"*/'<ion-nav [root]="rootPage" [class]="app.activeTheme"></ion-nav>'/*ion-inline-end:"/Users/tmazelin/Documents/Masters Degree/Advanced Topics/my-maples/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_app_app__["a" /* AppProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeServiceProvider = /** @class */ (function () {
    function TreeServiceProvider(storage) {
        this.storage = storage;
        this.KEY = "trees"; // ie table name
    }
    TreeServiceProvider.prototype.addTree = function (tree) {
        var _this = this;
        return this.storage.get(this.KEY).then(function (trees) {
            if (trees) {
                trees.push(tree);
                return _this.storage.set(_this.KEY, trees);
            }
            else {
                return _this.storage.set(_this.KEY, [tree]);
            }
        });
    };
    TreeServiceProvider.prototype.getTrees = function () {
        return this.storage.get(this.KEY);
    };
    TreeServiceProvider.prototype.editTree = function (tree) {
        var _this = this;
        return this.storage.get(this.KEY).then(function (trees) {
            if (!trees || trees.length === 0) {
                return null;
            }
            var newTrees = [];
            for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
                var i = trees_1[_i];
                if (i.id == tree.id) {
                    newTrees.push(tree);
                }
                else {
                    newTrees.push(i);
                }
            }
            return _this.storage.set(_this.KEY, newTrees);
        });
    };
    TreeServiceProvider.prototype.deleteTree = function (id) {
        var _this = this;
        return this.storage.get(this.KEY).then(function (trees) {
            if (!trees || trees.length === 0) {
                return null;
            }
            var toKeep = [];
            for (var _i = 0, trees_2 = trees; _i < trees_2.length; _i++) {
                var i = trees_2[_i];
                if (i.id !== id) {
                    toKeep.push(i);
                }
            }
            return _this.storage.set(_this.KEY, toKeep);
        });
    };
    TreeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], TreeServiceProvider);
    return TreeServiceProvider;
}());

//# sourceMappingURL=tree-service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map