(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-carCompare-carCompare-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carCompare/carCompare.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carCompare/carCompare.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header\n  \n  class=\"animate__animated animate__fadeInDown\"\n>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        style=\"color: #fff\"\n        defaultHref=\"/home\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 15px\"> Car Compare </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/search/cart']\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"search\"\n          style=\"font-size: 20px\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <br />\n  <br />\n  <ion-row *ngIf=\"!firstCarData.brand && !secondCarData.brand\">\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(1)\"\n      >+ Add Car</ion-col\n    >\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(2)\"\n      >+ Add car</ion-col\n    >\n  </ion-row>\n\n  <ion-row *ngIf=\"firstCarData.brand && !secondCarData.brand\">\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(1)\"\n      >{{firstCarData.brand}}<br />{{firstCarData.variant_name}}&nbsp;<ion-icon\n        name=\"create-outline\"\n      ></ion-icon>\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      <span class=\"vs\">Vs</span></ion-col\n    >\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(2)\"\n      >+ Add car</ion-col\n    >\n  </ion-row>\n\n  <ion-row *ngIf=\"!firstCarData.brand && secondCarData.brand\">\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(1)\"\n      >+ Add Car</ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span class=\"vs\">Vs</span></ion-col\n    >\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(2)\"\n      >{{secondCarData.brand}}<br />{{secondCarData.variant_name}}&nbsp;<ion-icon\n        name=\"create-outline\"\n      ></ion-icon\n    ></ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(1)\"\n      >{{firstCarData.brand}}<br />{{firstCarData.variant_name}}&nbsp;<ion-icon\n        name=\"create-outline\"\n      ></ion-icon\n    ></ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span class=\"vs\">Vs</span></ion-col\n    >\n    <ion-col\n      style=\"text-align: center; text-transform: capitalize\"\n      (click)=\"openChooseCarModal(2)\"\n      >{{secondCarData.brand}}<br />{{secondCarData.variant_name}}&nbsp;<ion-icon\n        name=\"create-outline\"\n      ></ion-icon\n    ></ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      <img [src]=\"firstCarData.carData.imageVarients[0]\"\n    /></ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Car Image</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><img [src]=\"secondCarData.carData.imageVarients[0]\"\n    /></ion-col>\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      >₹ {{firstCarData.carData.discount}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Feb Discount</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.carData.discount}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      >₹ {{firstCarData.carData.price}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Price</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.carData.price}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      >{{firstCarData.carData.addCustomeFeatures.bhp}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>BHP</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{secondCarData.carData.addCustomeFeatures.bhp}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{firstCarData.carData.addCustomeFeatures.body_type}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Body Type</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{secondCarData.carData.addCustomeFeatures.body_type}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      >{{firstCarData.carData.addCustomeFeatures.engine}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Engine</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{secondCarData.carData.addCustomeFeatures.engine}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{firstCarData.varientData.fuel_type}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Fuel Type</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{secondCarData.varientData.fuel_type}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{firstCarData.carData.addCustomeFeatures.fuel_tank_capacity}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Fuel Tank Capacity</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{secondCarData.carData.addCustomeFeatures.fuel_tank_capacity}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{firstCarData.carData.addCustomeFeatures.seating_capacity}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Seating Capacity</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{secondCarData.carData.addCustomeFeatures.seating_capacity}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      >{{firstCarData.carData.addCustomeFeatures.transmission}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Transmission</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      {{secondCarData.carData.addCustomeFeatures.transmission}}</ion-col\n    >\n  </ion-row>\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      >₹ {{firstCarData.carData.addCustomeFeatures.corporate_discount}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Corporate Discount</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.carData.addCustomeFeatures.corporate_discount}}</ion-col\n    >\n  </ion-row>\n\n \n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{firstCarData.varientData.show_room_price}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Show Room Price</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.varientData.show_room_price}}</ion-col\n    >\n  </ion-row>\n\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{firstCarData.varientData.rto_price_delhi}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>RTO Price Delhi</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.varientData.rto_price_delhi}}</ion-col\n    >\n  </ion-row>\n\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{firstCarData.varientData.rto_price_noida}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>RTO Price Noida</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.varientData.rto_price_noida}}</ion-col\n    >\n  </ion-row>\n\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{firstCarData.varientData.rto_price_gurgaon}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>RTO Price Gurgaon</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.varientData.rto_price_gurgaon}}</ion-col\n    >\n  </ion-row>\n\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{firstCarData.varientData.insurance_price}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>Insurance Price</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.varientData.insurance_price}}</ion-col\n    >\n  </ion-row>\n\n\n\n  <br />\n  <hr\n    *ngIf=\"firstCarData.brand && secondCarData.brand\"\n    style=\"height: 2px; background-color: black\"\n  />\n  <ion-row *ngIf=\"firstCarData.brand && secondCarData.brand\">\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹  {{firstCarData.varientData.csd_price}}\n    </ion-col>\n    <ion-col style=\"text-align: center; text-transform: capitalize\"\n      ><span>CSD Price</span></ion-col\n    >\n    <ion-col style=\"text-align: center; text-transform: capitalize\">\n      ₹ {{secondCarData.varientData.csd_price}}</ion-col\n    >\n  </ion-row>\n\n \n  \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carCompare/modal/choose-car.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carCompare/modal/choose-car.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<ion-header>\n  <ion-toolbar text-center>\n    <ion-back-button slot=\"start\" (click)=\"closeModal(null)\" defaultHref=\"/compare/null\" style=\"color: white;\"></ion-back-button>\n      <ion-title  ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n \n    <ion-item>\n        <ion-label>Brand</ion-label>\n        <ion-select (ionChange)=\"selectBrand($event)\" placeholder=\"Select Brand\" value=\"\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option [value]=\"brand._id\" *ngFor=\"let brand of SubCategoryList\">{{brand.subcategoryName}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Car</ion-label>\n        <ion-select (ionChange)=\"selectCar($event)\" placeholder=\"Select car\" value=\"\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option [value]=\"product._id\" *ngFor=\"let product of productList\">{{product.productName}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Varients</ion-label>\n        <ion-select (ionChange)=\"selectVarients($event)\" placeholder=\"Select Varients\" value=\"\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option [value]=\"varient.id\" *ngFor=\"let varient of CarvarientsList\">{{varient.variant_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/carCompare/carCompare-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/carCompare/carCompare-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CarComparePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComparePageRoutingModule", function() { return CarComparePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _carCompare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carCompare */ "./src/app/pages/carCompare/carCompare.ts");




const routes = [
    {
        path: '',
        component: _carCompare__WEBPACK_IMPORTED_MODULE_3__["CarComparePage"]
    }
];
let CarComparePageRoutingModule = class CarComparePageRoutingModule {
};
CarComparePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CarComparePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/carCompare/carCompare.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/carCompare/carCompare.module.ts ***!
  \*******************************************************/
/*! exports provided: CarComparePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComparePageModule", function() { return CarComparePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _carCompare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carCompare */ "./src/app/pages/carCompare/carCompare.ts");
/* harmony import */ var _carCompare_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carCompare-routing.module */ "./src/app/pages/carCompare/carCompare-routing.module.ts");
/* harmony import */ var _modal_choose_car__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/choose-car */ "./src/app/pages/carCompare/modal/choose-car.ts");









let CarComparePageModule = class CarComparePageModule {
};
CarComparePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carCompare_routing_module__WEBPACK_IMPORTED_MODULE_7__["CarComparePageRoutingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"]
        ],
        declarations: [
            _carCompare__WEBPACK_IMPORTED_MODULE_6__["CarComparePage"],
            _modal_choose_car__WEBPACK_IMPORTED_MODULE_8__["ChooseCarPage"]
        ],
        providers: [],
        entryComponents: [
            _modal_choose_car__WEBPACK_IMPORTED_MODULE_8__["ChooseCarPage"]
        ]
    })
], CarComparePageModule);



/***/ }),

/***/ "./src/app/pages/carCompare/carCompare.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/carCompare/carCompare.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vs {\n  background: black;\n  color: white;\n  padding: 6px;\n  border-radius: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9jYXJDb21wYXJlL2NhckNvbXBhcmUuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyQ29tcGFyZS9jYXJDb21wYXJlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhckNvbXBhcmUvY2FyQ29tcGFyZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC52c3tcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xuIH0iLCIudnMge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/carCompare/carCompare.ts":
/*!************************************************!*\
  !*** ./src/app/pages/carCompare/carCompare.ts ***!
  \************************************************/
/*! exports provided: CarComparePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComparePage", function() { return CarComparePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_choose_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/choose-car */ "./src/app/pages/carCompare/modal/choose-car.ts");




let CarComparePage = class CarComparePage {
    constructor(toastController, modalController) {
        this.toastController = toastController;
        this.modalController = modalController;
        this.firstCarData = {
            id: 1,
            brand: '',
            car_name: '',
            variant_name: '',
            carData: {},
            varientData: {}
        };
        this.secondCarData = {
            id: 2,
            brand: '',
            car_name: '',
            variant_name: '',
            carData: {},
            varientData: {}
        };
    }
    ngOnInit() {
    }
    openChooseCarModal(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_choose_car__WEBPACK_IMPORTED_MODULE_3__["ChooseCarPage"]
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data) {
                    console.log(dataReturned);
                    let CarObj = dataReturned;
                    if (id == 1) {
                        this.firstCarData = {
                            id: 1,
                            brand: CarObj.data.brand,
                            car_name: CarObj.data.productName,
                            variant_name: CarObj.data.selectedVarients[0]['variant_name'],
                            carData: CarObj.data.car_data,
                            varientData: CarObj.data.selectedVarients[0]
                        };
                    }
                    if (id == 2) {
                        this.secondCarData = {
                            id: 2,
                            brand: CarObj.data.brand,
                            car_name: CarObj.data.productName,
                            variant_name: CarObj.data.selectedVarients[0]['variant_name'],
                            carData: CarObj.data.car_data,
                            varientData: CarObj.data.selectedVarients[0]
                        };
                    }
                }
            });
            return yield modal.present();
        });
    }
};
CarComparePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
CarComparePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-carCompare",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carCompare.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carCompare/carCompare.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carCompare.scss */ "./src/app/pages/carCompare/carCompare.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], CarComparePage);



/***/ }),

/***/ "./src/app/pages/carCompare/modal/choose-car.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/carCompare/modal/choose-car.ts ***!
  \******************************************************/
/*! exports provided: ChooseCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCarPage", function() { return ChooseCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/product.services */ "./src/app/providers/product.services.ts");




let ChooseCarPage = class ChooseCarPage {
    constructor(modalController, _ProductService) {
        this.modalController = modalController;
        this._ProductService = _ProductService;
        this.SubCategoryList = [];
        this.productList = [];
        this.CarvarientsList = [];
        this.getSubCategoryList();
    }
    ngOnInit() { }
    getSubCategoryList() {
        this._ProductService.listSubCategory().subscribe((data) => {
            this.SubCategoryList = data.SubCategoryList;
        });
    }
    getProductList(filters = {}) {
        let params = Object.keys(filters)
            .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(filters[k])}`)
            .join("&");
        console.log(params, "params");
        let shopId = localStorage.getItem("shopID");
        this._ProductService
            .getProductList(shopId, params)
            .subscribe((data) => {
            console.log(this.productList, "this.productList");
            this.productList = data;
        });
    }
    selectBrand(event) {
        console.log(event, "event");
        let brand_id = event.target.value;
        let payload = {};
        if (brand_id) {
            payload["brand_id"] = brand_id;
            this.selectedBrand = this.SubCategoryList.filter((data) => {
                return data._id == brand_id;
            })[0];
        }
        this.getProductList(payload);
    }
    selectCar(event) {
        console.log(event, "event");
        let car_id = event.target.value;
        let payload = {};
        if (car_id) {
            this.selectedProductData = this.productList.filter((data) => {
                return data._id == car_id;
            })[0];
            console.log(this.selectedProductData, "selectedProductData");
            this.CarvarientsList = this.selectedProductData.addCustomeFeatures.varients;
        }
        this.getProductList(payload);
    }
    selectVarients(event) {
        let variant_id = event.target.value;
        if (variant_id) {
            this.selectedVarients = this.CarvarientsList.filter((data) => {
                return data.id == variant_id;
            });
            this.closeModal({
                brand: this.selectedBrand.subcategoryName,
                car_data: this.selectedProductData,
                selectedVarients: this.selectedVarients
            });
        }
    }
    closeModal(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const onClosedData = data;
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
ChooseCarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ChooseCarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "modal-choose-car",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choose-car.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/carCompare/modal/choose-car.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], ChooseCarPage);



/***/ })

}]);
//# sourceMappingURL=pages-carCompare-carCompare-module-es2015.js.map