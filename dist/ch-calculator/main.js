(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-spacer {\n  flex: 1 1 auto;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.is-mobile .toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.is-mobile .sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n\n.active-mode {\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     [class.is-mobile]=\"mobileQuery.matches\">\n\n  <mat-toolbar class=\"toolbar\" color=\"primary\">\n    <mat-toolbar-row>\n      <button mat-icon-button (click)=\"snav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span>CH-Calculator</span>\n      <span class=\"header-spacer\"></span>\n      <!--<mat-icon>info_outline</mat-icon>-->\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a [class.active-mode]=\"mode === 0\" mat-list-item (click)=\"mode=0\">160g diéta</a>\n        <!--<a [class.active-mode]=\"mode === 1\" mat-list-item (click)=\"mode=1\">Adag kiszámolás</a>-->\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <app-ch-calculator *ngIf=\"mode === 0\"></app-ch-calculator>\n      <!--<app-ch-calculator *ngIf=\"mode === 1\"></app-ch-calculator>-->\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media) {
        this.mode = 0;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ch_calculator_ch_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ch-calculator/ch-calculator.component */ "./src/app/ch-calculator/ch-calculator.component.ts");
/* harmony import */ var _ration_calculator_ration_calculator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ration-calculator/ration-calculator.component */ "./src/app/ration-calculator/ration-calculator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _ch_calculator_ch_calculator_component__WEBPACK_IMPORTED_MODULE_6__["ChCalculatorComponent"],
                _ration_calculator_ration_calculator_component__WEBPACK_IMPORTED_MODULE_7__["RationCalculatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ch-calculator/ch-calculator.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ch-calculator/ch-calculator.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.meal-hint {*/\n  /*padding: 0 10px 30px;*/\n  /*margin-top: -10px;*/\n  /*color: #777;*/\n  /*font-weight: bold;*/\n  /*}*/\n  p {\n  padding: 20px 10px 0;\n}\n  .heading1 {\n  font-size: 14px;\n  margin-bottom: 0;\n  font-weight: bold;\n}\n  .result input {\n  color: #222;\n}\n  .meal-type-container {\n  /*background: #e4f7e4;*/\n  /*border-bottom: 1px solid #e4f7e4;*/\n  padding: 15px 0 0;\n}\n"

/***/ }),

/***/ "./src/app/ch-calculator/ch-calculator.component.html":
/*!************************************************************!*\
  !*** ./src/app/ch-calculator/ch-calculator.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"mat-typography\">\n  <div class=\"meal-type-container\">\n    <div>\n      <mat-form-field [class.half]=\"selectedMeal\">\n        <mat-select name=\"mealType\" placeholder=\"Étkezés\" [(ngModel)]=\"mealType\" (selectionChange)=\"onSelect($event)\">\n          <mat-option *ngFor=\"let meal of meals\" [value]=\"meal.value\">\n            {{ meal.viewValue }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"selectedMeal\" [class.half]=\"selectedMeal\">\n        <input matInput disabled [value]=\"'Összesen: ' + sumCh + 'g'\">\n      </mat-form-field>\n    </div>\n\n    <!--<div class=\"meal-hint\" *ngIf=\"selectedMeal\"> {{selectedMeal.hint}} g szénhidrát </div>-->\n\n    <div *ngIf=\"selectedMeal\">\n      <mat-form-field [ngClass]=\"{'half': doubleCh}\">\n        <input name=\"slowCh\" matInput placeholder=\"Bevihető LASSÚ szénhidrát\" [(ngModel)]=\"goalSlowCh\">\n      </mat-form-field>\n\n      <mat-form-field class=\"half\" *ngIf=\"doubleCh\">\n        <input name=\"quickCh\" matInput placeholder=\"Bevihető GYORS szénhidrát\" [(ngModel)]=\"goalQuickCh\">\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div *ngIf=\"selectedMeal\">\n    <p class=\"heading1\">100g tartalmaz</p>\n    <div>\n      <mat-form-field [ngClass]=\"{'half': doubleCh}\">\n        <input name=\"mealSlowCh\" matInput placeholder=\"Lassú szénhidrát\" [(ngModel)]=\"slowChPer100\">\n      </mat-form-field>\n\n      <mat-form-field class=\"half\" *ngIf=\"doubleCh\">\n        <input name=\"mealQuickCh\" matInput placeholder=\"Gyors szénhidrát\" [(ngModel)]=\"quickChPer100\">\n      </mat-form-field>\n    </div>\n\n    <p class=\"heading1\" *ngIf=\"resultSlowCh\">Ennyit egyél</p>\n    <div class=\"result\" *ngIf=\"resultSlowCh\">\n      <mat-form-field [ngClass]=\"{'half': doubleCh}\">\n        <input matInput disabled [value]=\"resultSlowCh\">\n      </mat-form-field>\n\n      <mat-form-field class=\"half\" *ngIf=\"doubleCh\">\n        <input matInput disabled [value]=\"resultQuickCh\">\n      </mat-form-field>\n    </div>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ch-calculator/ch-calculator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ch-calculator/ch-calculator.component.ts ***!
  \**********************************************************/
/*! exports provided: ChCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChCalculatorComponent", function() { return ChCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChCalculatorComponent = /** @class */ (function () {
    function ChCalculatorComponent() {
        this.meals = [
            { value: 0, viewValue: 'Reggeli (7-8:00)', doubleCh: false, slowCh: 30, quickCh: 0 },
            { value: 1, viewValue: 'Tízórai (10:00)', doubleCh: true, slowCh: 10, quickCh: 10 },
            { value: 2, viewValue: 'Ebéd (13:00)', doubleCh: true, slowCh: 30, quickCh: 20, hint: '- max 20g gyorsan felszívódó' },
            {
                value: 3, viewValue: 'Uzsonna (16:00)', doubleCh: true, slowCh: 10, quickCh: 10,
                hint: '- 20g gyorsan VAGY 10g lassú és 10g gyorsan felszívódó'
            },
            { value: 4, viewValue: 'Vacsora (19:00)', doubleCh: true, slowCh: 30, quickCh: 10, hint: '- max 10 g gyorsan felszívódó' },
            { value: 5, viewValue: 'Pótvacsora (22:00)', doubleCh: true, slowCh: 0, quickCh: 0 }
        ];
        this.mealType = null;
        this.goalQuickCh = '';
        this.goalSlowCh = '';
        this.quickChPer100 = '';
        this.slowChPer100 = '';
    }
    Object.defineProperty(ChCalculatorComponent.prototype, "selectedMeal", {
        get: function () {
            var _this = this;
            return this.meals.find(function (meal) { return meal.value === _this.mealType; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChCalculatorComponent.prototype, "doubleCh", {
        get: function () {
            return this.selectedMeal && this.selectedMeal.doubleCh;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChCalculatorComponent.prototype, "sumCh", {
        get: function () {
            return this.selectedMeal ? this.selectedMeal.slowCh + this.selectedMeal.quickCh : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChCalculatorComponent.prototype, "resultSlowCh", {
        get: function () {
            var goalSlowCh = parseFloat(this.goalSlowCh), slowChPer100 = parseFloat(this.slowChPer100);
            return (slowChPer100 && goalSlowCh) ? Math.round((goalSlowCh * 100) / slowChPer100) : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChCalculatorComponent.prototype, "resultQuickCh", {
        get: function () {
            var goalQuickCh = parseFloat(this.goalQuickCh), quickChPer100 = parseFloat(this.quickChPer100);
            return (quickChPer100 && goalQuickCh) ? Math.round((goalQuickCh * 100) / quickChPer100) : '';
        },
        enumerable: true,
        configurable: true
    });
    ChCalculatorComponent.prototype.onSelect = function (value) {
        if (this.selectedMeal) {
            this.goalSlowCh = this.selectedMeal.slowCh + '';
            this.goalQuickCh = this.selectedMeal.quickCh + '';
        }
    };
    ChCalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ch-calculator',
            template: __webpack_require__(/*! ./ch-calculator.component.html */ "./src/app/ch-calculator/ch-calculator.component.html"),
            styles: [__webpack_require__(/*! ./ch-calculator.component.css */ "./src/app/ch-calculator/ch-calculator.component.css")]
        })
    ], ChCalculatorComponent);
    return ChCalculatorComponent;
}());



/***/ }),

/***/ "./src/app/ration-calculator/ration-calculator.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/ration-calculator/ration-calculator.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ration-calculator/ration-calculator.component.html":
/*!********************************************************************!*\
  !*** ./src/app/ration-calculator/ration-calculator.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div>\n    <p>Adagok</p>\n    <button mat-button>Uj</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ration-calculator/ration-calculator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ration-calculator/ration-calculator.component.ts ***!
  \******************************************************************/
/*! exports provided: RationCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationCalculatorComponent", function() { return RationCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RationCalculatorComponent = /** @class */ (function () {
    function RationCalculatorComponent() {
    }
    RationCalculatorComponent.prototype.ngOnInit = function () {
    };
    RationCalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ration-calculator',
            template: __webpack_require__(/*! ./ration-calculator.component.html */ "./src/app/ration-calculator/ration-calculator.component.html"),
            styles: [__webpack_require__(/*! ./ration-calculator.component.css */ "./src/app/ration-calculator/ration-calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RationCalculatorComponent);
    return RationCalculatorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tiborbotos/work/ch-calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map