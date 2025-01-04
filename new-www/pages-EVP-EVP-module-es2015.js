(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-EVP-EVP-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/EVP/EVP.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/EVP/EVP.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar class=\"home-header\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button> </ion-menu-button>\n      <div class=\"brand-logo\" aria-details=\"csd car website logo\">\n        <span>CSD CAR</span>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title>Frequently Asked Questions</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <ion-accordion-group>\n                    <ion-accordion toggle>\n                        <ion-item slot=\"header\">\n                            <ion-label>Who can purchase cars from a CSD dealer?</ion-label>\n                        </ion-item>\n                        <div class=\"ion-padding\" slot=\"content\">\n                            Only eligible individuals such as Army ,navy, coastguard , airforce ,Assam ,rafiles \n                            Board road organisation can purchase cars through CSD.\n                        </div>\n                    </ion-accordion>\n\n                    <ion-accordion toggle>\n                        <ion-item slot=\"header\">\n                            <ion-label>What documents are required for a CSD car purchase?</ion-label>\n                        </ion-item>\n                        <div class=\"ion-padding\" slot=\"content\">\n                            Required documents include your Grocery Card, PAN Card, Aadhar Card and other documents.\n                        </div>\n                    </ion-accordion>\n\n                    <ion-accordion toggle>\n                        <ion-item slot=\"header\">\n                            <ion-label>Are CSD cars cheaper than regular cars?</ion-label>\n                        </ion-item>\n                        <div class=\"ion-padding\" slot=\"content\">\n                            Yes, cars purchased through CSD dealers are exempt from certain taxes, making them more affordable than regular market prices.\n                        </div>\n                    </ion-accordion>\n\n                    <ion-accordion toggle>\n                        <ion-item slot=\"header\">\n                            <ion-label>Can I finance my CSD car purchase?</ion-label>\n                        </ion-item>\n                        <div class=\"ion-padding\" slot=\"content\">\n                            Yes, financing options are available through various banks. Ensure that the bank is familiar with the CSD process.\n                        </div>\n                    </ion-accordion>\n\n                    <ion-accordion toggle>\n                        <ion-item slot=\"header\">\n                            <ion-label>How long does it take to deliver a car through CSD?</ion-label>\n                        </ion-item>\n                        <div class=\"ion-padding\" slot=\"content\">\n                            Delivery times vary depending on the availability of the model and the processing of your documentation. Typically, it takes 3-7 days.\n                        </div>\n                    </ion-accordion>\n                </ion-accordion-group>\n            </ion-card-content>\n        </ion-card>\n    </ion-content>");

/***/ }),

/***/ "./src/app/pages/EVP/EVP-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/EVP/EVP-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EVPPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVPPageRoutingModule", function() { return EVPPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _EVP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EVP */ "./src/app/pages/EVP/EVP.ts");




const routes = [
    {
        path: '',
        component: _EVP__WEBPACK_IMPORTED_MODULE_3__["EVPPage"]
    }
];
let EVPPageRoutingModule = class EVPPageRoutingModule {
};
EVPPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EVPPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/EVP/EVP.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/EVP/EVP.module.ts ***!
  \*****************************************/
/*! exports provided: EVPPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVPPageModule", function() { return EVPPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _EVP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EVP */ "./src/app/pages/EVP/EVP.ts");
/* harmony import */ var _EVP_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EVP-routing.module */ "./src/app/pages/EVP/EVP-routing.module.ts");







let EVPPageModule = class EVPPageModule {
};
EVPPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _EVP_routing_module__WEBPACK_IMPORTED_MODULE_6__["EVPPageRoutingModule"]
        ],
        declarations: [
            _EVP__WEBPACK_IMPORTED_MODULE_5__["EVPPage"],
        ],
        entryComponents: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // Add this line
    })
], EVPPageModule);



/***/ }),

/***/ "./src/app/pages/EVP/EVP.scss":
/*!************************************!*\
  !*** ./src/app/pages/EVP/EVP.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".brand-logo span {\n  color: #fff !important;\n  font-size: 20px !important;\n  font-weight: 600 !important;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9FVlAvRVZQLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0VWUC9FVlAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9FVlAvRVZQLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmQtbG9nbyBzcGFuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4iLCIuYnJhbmQtbG9nbyBzcGFuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/EVP/EVP.ts":
/*!**********************************!*\
  !*** ./src/app/pages/EVP/EVP.ts ***!
  \**********************************/
/*! exports provided: EVPPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVPPage", function() { return EVPPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EVPPage = class EVPPage {
};
EVPPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-EVP",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./EVP.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/EVP/EVP.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./EVP.scss */ "./src/app/pages/EVP/EVP.scss")).default]
    })
], EVPPage);



/***/ })

}]);
//# sourceMappingURL=pages-EVP-EVP-module-es2015.js.map