(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title> Contact Us </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"/csd-car/home\">Home</a></li>\n          <li  class=\"breadcrumb-item active\" aria-current=\"page\">Contact Us</li>\n        </ol>\n      </nav>\n  <div class=\"content-section\">\n    <div class=\"contact-info\">\n      <div class=\"contact-image\">\n        <img src=\"../../../assets/img/map.png\" alt=\"world-map\" />\n      </div>\n      <div class=\"contact-address\">\n        <ion-grid class=\"contect-detils\">\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"call-outline\"></ion-icon>\n            </ion-col>\n            <ion-col (click)=\"callme('9958008084')\">\n              <span>+91 9958008084</span>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"navigate-outline\"></ion-icon>\n            </ion-col>\n            <ion-col style=\"text-transform: capitalize\">\n                brar building, 1/195/2, Piru Vihar, Sadar Bazaar, Delhi Cantonment, New Delhi, Delhi 110010\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"mail-open-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <!-- contact@bookmydreamcar.in -->\n              <a\n                class=\"ion-home color-primary item\"\n                href=\"#\"\n                onclick=\"window.open('mailto:contact@csdcar.in?subject=I%20have%20a%20query','_system')\"\n                >contact@csdcar.in</a\n              >\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"earth-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <!-- <a style=\"color: black;\"  href=\"https://www.bookmydreamcar.in\"> www.bookmydreamcar.in</a> -->\n              <a href=\"https://csdcar.com\"\n                class=\"ion-home color-primary item\">\n                https://csdcar.com</a\n              >\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n          <ion-col >\n           <button class=\"btn\"> Any Help?</button>\n          </ion-col>\n          <ion-col >\n            <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n          </ion-col>\n        </ion-row> -->\n        </ion-grid>\n      </div>\n    </div>\n\n     \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/more/more.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/more/more.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n      \n    </ion-buttons>\n\n    <ion-title> More  </ion-title>\n\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"/csd-car/home\">Home</a></li>\n          <li class=\"breadcrumb-item active\">More</li>\n          <!-- <li class=\"breadcrumb-item active\" aria-current=\"page\">Team</li> -->\n        </ol>\n      </nav>\n    <ion-grid>\n      <ion-row>\n        <!-- Card 1 -->\n        <ion-col size=\"6\" size-md=\"4\" [routerLink]=\"['/csd-car/csd-car-more-pages/contact-us' ]\">\n          <ion-card >\n            <ion-card-header >\n              <ion-card-title><span>Contact Us</span></ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                Have questions? Reach out to us at support@example.com or call us at +91 9958008084.\n\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n  \n        <!-- Card 2 -->\n        <ion-col size=\"6\" size-md=\"4\" [routerLink]=\"['/csd-car-blogs' ]\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title><span>Blogs</span></ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                Stay updated with the latest on CSD cars! Explore expert reviews, buying tips, and in-depth guides to help you make informed decisions. \n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n  \n        <!-- Card 3 -->\n        <ion-col size=\"6\" size-md=\"4\" [routerLink]=\"['/privacy-policy' ]\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title><span>Privacy Policy</span></ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                Your privacy is important to us. To learn more about how we protect your data, click below to read our full Privacy Policy.\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n  \n        <!-- Card 4 -->\n        <ion-col size=\"6\" size-md=\"4\" [routerLink]=\"['/term-and-conditions' ]\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title><span>Term and Condition</span></ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Check our Term and Condition before buying.\n              To learn more about how we manage terms, click below to read our full Term and Conditions.\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n  \n        <!-- Card 5 -->\n        <!-- <ion-col size=\"6\" size-md=\"4\" [routerLink]=\"['/csd-car/csd-car-more-pages/contact-us' ]\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title><span>News and Insights</span></ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                Stay updated with the latest on CSD cars News!,Insights<br/> Explore News and Insights to help you make informed decisions.\n            </ion-card-content>\n          </ion-card>\n        </ion-col> -->\n        <ion-col size=\"6\" size-md=\"4\" [routerLink]=\"['/csd-car-help-and-support' ]\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title><span>Help & Support and FAQ</span></ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                Have questions? Check out our Frequently Asked Questions (FAQ) section for quick answers to common inquiries. \n                        </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br><br><br><br>\n    <div>\n      <ion-toolbar color=\"dark\">\n        <ion-grid>\n           \n          <ion-row>\n            <ion-col size-md=\"4\" size-sm=\"12\" class=\"footer-section\">\n              <!-- <img src=\"as\" alt=\"Fouji Adda Logo\" class=\"footer-logo\" /> -->\n              <div class=\"brand-logo\"  aria-details=\"csd car website logo\">\n                <span>CSD CAR</span>\n              </div>\n              <p>\n                Csdcar.com serves as a platform to provide information, resources, and tools for eligible individuals who want to purchase vehicles through the Canteen Stores Department.  </p>\n              <!-- <a href=\"mailto:help@foujiadda.com\" class=\"footer-email\">help@foujiadda.com</a> -->\n              <div class=\"social-icons\">\n               <a href=\"https://www.instagram.com/newcarsbestdeal_?igsh=MXZvaThhZmNqOWZzZw%3D%3D&utm_source=qr\" target=\"_blank\"><ion-icon  name=\"logo-instagram\"></ion-icon></a> \n                 <a href=\"https://www.youtube.com/@Ravibhardwaj80\" target=\"_blank\"> <ion-icon name=\"logo-youtube\"></ion-icon></a>\n  \n              </div>\n            </ion-col>\n    \n            <!-- Quick Links -->\n            <ion-col size-md=\"2\" size-sm=\"6\" class=\"footer-section\">\n              <h3>Quick Links</h3>\n              <ul>\n                <li><a href=\"/csd-car/home\">Home</a></li>\n                <li><a href=\"/csd-car/csd-car-more-pages/contact-us\">About Us</a></li>\n                <li><a href=\"/csd-car/all-csd-cars\">All Cars</a></li>\n                <li><a href=\"/csd-car/csd-car-brands\">All Car Brands</a></li>\n                <li><a href=\"/csd-car-blogs\">Blogs</a></li>\n              </ul>\n            </ion-col>\n    \n            <!-- Tools -->\n            <ion-col size-md=\"2\" size-sm=\"6\" class=\"footer-section\">\n              <h3>Tools</h3>\n              <ul>\n                <li><a href=\"https://carbazar.co.in/\" target=\"_blank\">Car Price</a></li>\n                <li><a href=\"/csd-car/csd-car-more-pages/contact-us\">Find Dealer</a></li>\n              </ul>\n            </ion-col>\n    \n            <!-- Resources -->\n            <!-- <ion-col size-md=\"2\" size-sm=\"6\" class=\"footer-section\">\n              <h3>Resources</h3>\n              <ul>\n                <li><a href=\"#\">Hospital & Polyclinics</a></li>\n                <li><a href=\"#\">Guest House</a></li>\n                <li><a href=\"#\">MCO Quota</a></li>\n                <li><a href=\"#\">Jobs</a></li>\n              </ul>\n            </ion-col> -->\n    \n            <!-- About Company -->\n            <ion-col size-md=\"2\" size-sm=\"6\" class=\"footer-section\">\n              <h3>About Company</h3>\n              <ul>\n                <li><a href=\"/csd-car/csd-car-more-pages/contact-us\">Contact Us</a></li>\n                <li><a href=\"/privacy-policy\">Privacy Policy</a></li>\n                <li><a href=\"/term-and-conditions\">Terms & Condition</a></li>\n              </ul>\n            </ion-col>\n          </ion-row>\n          <!-- Copyright -->\n          <ion-row>\n            <ion-col size=\"12\" class=\"footer-bottom\">\n              <p>&copy; 2025 Csdcar.com All Rights Reserved</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-toolbar>\n    </div>\n  </ion-content>\n\n  \n\n ");

/***/ }),

/***/ "./src/app/pages/contact/contact-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/app/pages/contact/contact.ts");
/* harmony import */ var _more_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more/more */ "./src/app/pages/contact/more/more.ts");





const routes = [
    {
        path: '',
        component: _more_more__WEBPACK_IMPORTED_MODULE_4__["MorePage"]
    },
    {
        path: 'contact-us',
        component: _contact__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact */ "./src/app/pages/contact/contact.ts");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/pages/contact/contact-routing.module.ts");
/* harmony import */ var _more_more__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more/more */ "./src/app/pages/contact/more/more.ts");









let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_7__["ContactPageRoutingModule"]
        ],
        declarations: [
            _contact__WEBPACK_IMPORTED_MODULE_6__["ContactPage"],
            _more_more__WEBPACK_IMPORTED_MODULE_8__["MorePage"]
        ],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
        ]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.scss":
/*!********************************************!*\
  !*** ./src/app/pages/contact/contact.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-icon {\n  height: 20px;\n  width: 20px;\n  margin-left: 27%;\n  margin-bottom: -4px;\n}\n\n.contect-detils-row {\n  border-top: 1px solid #ccc;\n  margin-top: 10px;\n  padding-top: 10px;\n  font-size: 22px;\n}\n\n.contect-detils-icon {\n  text-align: center;\n  font-size: 30px;\n}\n\n.contact-footer {\n  background: var(--ion-continue-background);\n  color: #fff;\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 20px 0;\n}\n\n.ion-home {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNyU7XG4gIG1hcmdpbi1ib3R0b206IC00cHg7XG59XG5cbi5jb250ZWN0LWRldGlscy1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5jb250ZWN0LWRldGlscy1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uY29udGFjdC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29udGludWUtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uaW9uLWhvbWUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIubG9nby1pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcbn1cblxuLmNvbnRlY3QtZGV0aWxzLXJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uY29udGVjdC1kZXRpbHMtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY29udGFjdC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29udGludWUtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5pb24taG9tZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contact/contact.ts":
/*!******************************************!*\
  !*** ./src/app/pages/contact/contact.ts ***!
  \******************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");



let ContactPage = class ContactPage {
    constructor(callNumber) {
        this.callNumber = callNumber;
        this.isSearchEnable = false;
        this.searchproductList = [];
        this.showSearchBox = false;
    }
    ngOnInit() {
    }
    enableSearch() {
        this.showSearchBox = true;
    }
    backToNormal() {
        this.showSearchBox = false;
    }
    callme(mobile) {
        //   this.callNumber.callNumber(mobile, true)
        // .then(res => console.log('Launched dialer!', res))
        // .catch(err => console.log('Error launching dialer', err));
        window.location.href = `tel:${mobile}`;
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] }
];
ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-contact",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.scss */ "./src/app/pages/contact/contact.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]])
], ContactPage);



/***/ }),

/***/ "./src/app/pages/contact/more/more.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/contact/more/more.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search {\n  margin-right: -16px;\n}\n\n.category h2 {\n  text-align: center;\n}\n\n.category ion-col {\n  padding: 8px;\n}\n\n.category-main .relative {\n  background-color: var(--ion-item-background);\n  padding: 15px;\n  text-align: center;\n  box-shadow: var(--ion-card-shadow);\n  border-radius: 10px;\n}\n\n.category-main .relative svg {\n  width: 80px;\n  height: 100px;\n}\n\n.category-main .relative p {\n  margin-bottom: 0px;\n  margin-top: 5px;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.category-main .relative span {\n  font-size: 12px;\n  color: #989898;\n}\n\n.cat-img {\n  height: 70px !important;\n  width: 70px !important;\n  margin: 0 auto !important;\n}\n\n.budget-label {\n  font-size: 16px;\n  margin-left: 10px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\nion-card-title span {\n  border-bottom: 1px red solid;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3QvbW9yZS9tb3JlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvbW9yZS9tb3JlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNPRjs7QURKQTtFQUNFLGVBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURGQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvbW9yZS9tb3JlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cbi5jYXRlZ29yeSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXRlZ29yeSBpb24tY29sIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0taW9uLWNhcmQtc2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHN2ZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTg5ODk4O1xufVxuLmNhdC1pbWcge1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmJ1ZGdldC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gZm9udC1mYW1pbHk6IGluaXRpYWw7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5cbmlvbi1jYXJkLXRpdGxlIHNwYW57XG4gIGJvcmRlci1ib3R0b206IDFweCByZWQgc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59IiwiLnNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi5jYXRlZ29yeSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhdGVnb3J5IGlvbi1jb2wge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLWlvbi1jYXJkLXNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSBzdmcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2F0ZWdvcnktbWFpbiAucmVsYXRpdmUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5ODk4OTg7XG59XG5cbi5jYXQtaW1nIHtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5idWRnZXQtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJlZCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contact/more/more.ts":
/*!********************************************!*\
  !*** ./src/app/pages/contact/more/more.ts ***!
  \********************************************/
/*! exports provided: MorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePage", function() { return MorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MorePage = class MorePage {
};
MorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-more',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./more.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/more/more.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./more.scss */ "./src/app/pages/contact/more/more.scss")).default]
    })
], MorePage);



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es2015.js.map