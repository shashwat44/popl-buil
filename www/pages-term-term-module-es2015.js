(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-term-term-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/term/term.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/term/term.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Term and Condition</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"/csd-car/home\">Home</a></li>\n          <li class=\"breadcrumb-item\"><a href=\"/csd-car/csd-car-more-pages\">More</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Term and Conditions</li>\n        </ol>\n      </nav>\n    <div style=\"padding: 20px\">\n        <h1>Terms and Conditions</h1>\n        <p>Welcome to <strong>CSD Car</strong>  These Terms and Conditions govern your use of our website <b>csdcar.com</b> . By accessing or using our site, you agree to comply with these terms.</p>\n        \n        <h2>1. Use of the Website</h2>\n        <ul>\n            <li>You must be eligible for CSD car purchases as per government norms.</li>\n            <li>You agree to provide accurate and truthful information.</li>\n            <li>Unauthorized use of the website may result in legal action.</li>\n        </ul>\n        \n        <h2>2. Purchases and Payments</h2>\n        <ul>\n            <li>All transactions are subject to verification and approval.</li>\n            <li>Prices and offers are subject to change without prior notice.</li>\n            <li>We reserve the right to refuse any purchase order.</li>\n        </ul>\n        \n        <h2>3. Intellectual Property</h2>\n        <p>All content on this website, including text, images, and logos, is our property or used with permission. Unauthorized use is strictly prohibited.</p>\n        \n        <h2>4. Limitation of Liability</h2>\n        <p>We are not liable for any damages arising from the use of this website, including inaccuracies or service interruptions.</p>\n        \n        <h2>5. Third-Party Links</h2>\n        <p>Our website may contain links to third-party sites. We do not endorse or take responsibility for their content or services.</p>\n        \n        <h2>6. Changes to Terms</h2>\n        <p>We may update these Terms and Conditions at any time. Changes will be posted on this page with an updated \"Last Updated\" date.</p>\n        \n        <h2>7. Contact Us</h2>\n        <p>If you have any questions, contact us at:</p>\n        <ul>\n            <li><strong>Email:</strong> bhardwaj.8084@gmail.com</li>\n            <li><strong>Phone:</strong>+91 9958008084 </li>\n            <li><strong>Address:</strong> Brar building, 1/195/2, Piru Vihar, Sadar Bazaar, Delhi Cantonment, New Delhi, Delhi 110010</li>\n        </ul> \n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/term/term-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/term/term-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TermPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermPageRoutingModule", function() { return TermPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _term_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term.page */ "./src/app/pages/term/term.page.ts");




const routes = [
    {
        path: '',
        component: _term_page__WEBPACK_IMPORTED_MODULE_3__["TermPage"]
    }
];
let TermPageRoutingModule = class TermPageRoutingModule {
};
TermPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/term/term.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/term/term.module.ts ***!
  \*******************************************/
/*! exports provided: TermPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermPageModule", function() { return TermPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _term_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./term-routing.module */ "./src/app/pages/term/term-routing.module.ts");
/* harmony import */ var _term_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./term.page */ "./src/app/pages/term/term.page.ts");







let TermPageModule = class TermPageModule {
};
TermPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _term_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermPageRoutingModule"]
        ],
        declarations: [_term_page__WEBPACK_IMPORTED_MODULE_6__["TermPage"]]
    })
], TermPageModule);



/***/ }),

/***/ "./src/app/pages/term/term.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/term/term.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm0vdGVybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/term/term.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/term/term.page.ts ***!
  \*****************************************/
/*! exports provided: TermPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermPage", function() { return TermPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermPage = class TermPage {
    constructor() { }
    ngOnInit() {
    }
};
TermPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-term',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./term.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/term/term.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./term.page.scss */ "./src/app/pages/term/term.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TermPage);



/***/ })

}]);
//# sourceMappingURL=pages-term-term-module-es2015.js.map