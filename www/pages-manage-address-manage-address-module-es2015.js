(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-address-manage-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/manage-address.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/manage-address.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button *ngIf=\"!showSearchBox\" style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n      <ion-icon\n        style=\"margin-left: 10px\"\n        *ngIf=\"showSearchBox\"\n        (click)=\"backToNormal()\"\n        name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title> Manage Address </ion-title>\n\n    <ion-buttons\n      *ngIf=\"!showSearchBox\"\n      slot=\"end\"\n      routerLink=\"/search/manage-address\">\n      <ion-icon\n        style=\"margin-right: 10px; font-size: 18px\"\n        name=\"search\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/cart']\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"cart\"\n          style=\"\n            color: white;\n            width: 55px;\n            margin-left: -28px;\n            min-width: -webkit-fill-available;\n          \"></ion-icon>\n        <ion-badge\n          style=\"margin-top: -25px; margin-left: -22px; color: orange\"\n          *ngIf=\"cartCount != 0\"\n          >{{cartCount}}</ion-badge\n        >\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!isSearchEnable\">\n  <div class=\"content-section\">\n    <section class=\"add-new-address\" *ngIf=\"!isSearchEnable\">\n      <ion-button\n        class=\"add-address\"\n        expand=\"full\"\n        size=\"medium\"\n        (click)=\"openAddAdressModal()\">\n        <span style=\"font-weight: 600\"> + Add a New Address</span>\n      </ion-button>\n    </section>\n    <ion-grid>\n      <h4 class=\"page-title\">{{addressList.length}} Saved Address</h4>\n      <ion-card\n        class=\"address-card\"\n        *ngFor=\"let val of addressList;let idx = index\">\n        <ion-card-content (click)=\"onSelectionChange(val)\">\n          <h6>{{val.customerName}}</h6>\n          <h4>{{val.customerMobile}}</h4>\n          <!-- <h6>Nikhil Agarwal</h6> -->\n          <p class=\"address\">\n            {{val.houseNo}}, {{val.street}}, {{val.address}},{{val.area}},<span\n              style=\"text-transform: capitalize\"\n              >{{val.city}}, {{val.state}}, {{val.pincode}} ,\n              {{val.country}}</span\n            >\n          </p>\n          <!-- <p class=\"mobile-no\">{{val.pincode}}</p> -->\n          <ion-button class=\"edit-button\" (click)=\"openEditAdressModal(val)\"\n            >Edit</ion-button\n          >\n          <ion-button color=\"warning\" (click)=\"deleteConfirm(val._id)\"\n            >Delete</ion-button\n          >\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n    <ion-row class=\"no-orders\" *ngIf=\"addressList.length == 0\">\n      <svg\n        style=\"height: 75px; margin-top: 55px\"\n        version=\"1.0\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"1280.000000pt\"\n        height=\"1024.000000pt\"\n        viewBox=\"0 0 1280.000000 1024.000000\"\n        preserveAspectRatio=\"xMidYMid meet\">\n        <metadata></metadata>\n        <g\n          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\"\n          fill=\"#000000\"\n          stroke=\"none\">\n          <path\n            d=\"M794 10220 c-211 -31 -381 -174 -451 -379 l-22 -66 -1 -4125 c0\n-3587 2 -4132 15 -4180 51 -192 206 -346 400 -395 52 -13 451 -15 3455 -15\n3212 0 3397 1 3430 18 52 26 80 74 80 139 0 64 -18 103 -62 135 l-33 23 -3395\n5 -3395 5 -40 22 c-52 28 -89 68 -114 123 -21 45 -21 47 -21 3263 l0 3217\n5130 0 5130 0 0 -1657 c0 -1637 0 -1658 20 -1691 30 -49 75 -72 141 -72 66 0\n112 26 140 80 18 33 19 121 19 2555 0 2221 -2 2528 -15 2580 -48 190 -188 336\n-385 402 -53 17 -222 18 -5015 19 -2728 1 -4983 -2 -5011 -6z m9937 -332 c51\n-15 114 -69 142 -122 l22 -41 3 -697 3 -698 -5131 0 -5130 0 0 684 c0 741 -1\n729 55 802 13 17 48 44 77 58 l52 26 4934 0 c3716 0 4944 -3 4973 -12z\" />\n          <path\n            d=\"M1280 9571 c-82 -26 -118 -48 -183 -109 -100 -96 -147 -206 -147\n-341 1 -146 40 -242 139 -342 96 -95 202 -139 336 -139 129 1 229 38 319 121\n107 97 156 209 156 354 0 216 -128 393 -329 455 -81 26 -214 26 -291 1z m234\n-335 c20 -15 41 -44 52 -71 14 -39 15 -52 5 -87 -42 -139 -225 -153 -283 -21\n-62 139 105 272 226 179z\" />\n          <path\n            d=\"M2536 9570 c-174 -62 -293 -206 -319 -386 -42 -287 179 -544 467\n-544 136 0 251 46 341 135 162 162 187 418 59 610 -48 74 -103 120 -194 164\n-70 34 -82 36 -185 39 -91 2 -120 -1 -169 -18z m233 -328 c51 -37 73 -82 68\n-135 -5 -61 -30 -96 -89 -125 -57 -29 -105 -23 -153 19 -42 37 -59 79 -53 133\n6 54 31 90 83 116 47 25 105 22 144 -8z\" />\n          <path\n            d=\"M3826 9579 c-118 -28 -245 -133 -300 -249 -69 -142 -69 -287 -1 -426\n118 -243 409 -334 659 -207 62 32 153 122 188 189 142 264 9 597 -273 685 -66\n21 -202 24 -273 8z m190 -328 c55 -25 84 -73 84 -140 0 -45 -5 -56 -36 -91\n-48 -53 -100 -68 -160 -45 -103 39 -135 155 -67 236 49 58 109 72 179 40z\" />\n          <path\n            d=\"M1663 7049 c-118 -58 -118 -231 1 -288 l43 -21 4076 2 4076 3 28 21\nc99 74 99 204 0 278 l-28 21 -4077 3 -4077 2 -42 -21z\" />\n          <path\n            d=\"M1660 5942 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 4082 0 4082 0 33 23 c57 38 75 71 75 137 0 66 -18 99 -75 138 l-33 22\n-4076 0 c-3861 0 -4078 -1 -4111 -18z\" />\n          <path\n            d=\"M8890 5104 c-668 -102 -1236 -517 -1530 -1119 -244 -500 -272 -1095\n-75 -1616 158 -415 463 -782 847 -1016 462 -281 1032 -364 1571 -227 258 65\n524 197 742 368 l59 46 30 -29 30 -30 -17 -38 c-42 -94 -40 -207 4 -302 17\n-35 157 -181 568 -593 l545 -548 352 0 352 0 31 35 c64 73 76 110 76 225 0 95\n-3 110 -27 155 -19 36 -197 220 -655 676 -709 707 -656 664 -818 664 -71 0\n-99 -4 -132 -21 l-42 -21 -30 31 -31 32 61 79 c203 265 336 575 396 920 24\n140 24 490 0 630 -80 460 -282 848 -600 1152 -316 301 -697 487 -1129 548\n-132 19 -450 18 -578 -1z m461 -325 c601 -61 1115 -420 1374 -961 64 -133 104\n-252 136 -403 21 -96 24 -137 24 -325 0 -165 -4 -236 -18 -305 -170 -863 -930\n-1454 -1793 -1394 -604 42 -1144 408 -1409 954 -232 477 -230 1027 5 1496 169\n337 455 618 790 778 284 136 592 191 891 160z m2741 -4591 l-72 -73 -590 590\n-590 590 72 72 73 73 590 -590 590 -590 -73 -72z\" />\n          <path\n            d=\"M8255 4106 c-16 -8 -55 -40 -87 -72 -176 -183 -309 -458 -354 -734\n-23 -139 -14 -389 19 -530 58 -241 170 -454 330 -625 59 -63 80 -78 115 -86\n107 -23 202 49 202 155 0 53 -14 80 -81 158 -160 185 -244 378 -269 613 -32\n288 72 598 273 820 29 33 59 70 65 82 18 33 14 114 -7 153 -35 68 -133 99\n-206 66z\" />\n          <path\n            d=\"M1683 4849 c-69 -20 -123 -111 -108 -182 12 -53 45 -98 89 -118 40\n-18 133 -19 2846 -19 l2806 0 44 23 c50 24 90 88 90 141 0 47 -37 113 -78 138\nl-37 23 -2810 2 c-1697 1 -2823 -2 -2842 -8z\" />\n          <path\n            d=\"M1660 3732 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 2561 0 c2538 0 2561 0 2594 20 103 63 96 233 -11 284 -32 15 -240 16\n-2584 16 -2406 0 -2550 -1 -2583 -18z\" />\n          <path\n            d=\"M1692 2640 c-45 -11 -100 -66 -113 -112 -21 -78 15 -158 85 -189 43\n-19 90 -19 2603 -17 l2558 3 34 24 c37 27 70 90 71 135 0 47 -37 113 -78 138\nl-37 23 -2545 2 c-1400 0 -2560 -3 -2578 -7z\" />\n        </g>\n      </svg>\n      <span style=\"text-align: center; margin-top: 10px\">No Address Found</span>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/modal/editAddress.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/modal/editAddress.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .address-from {\n        padding: 0px 15px;\n    }\n    .fix-bottom{\n        --background: var(--ion-gocart-bg-color);\n        position: fixed;\n        bottom: 0px;\n        width: 100%;\n        margin: 0px;\n    }\n</style>\n<ion-header>\n  <ion-toolbar text-center>\n    <ion-back-button slot=\"start\" (click)=\"closeModal()\" defaultHref=\"/manage-address\" style=\"color: white;\"></ion-back-button>\n      <ion-title *ngIf=\"addressData\">Edit Address</ion-title>\n      <ion-title *ngIf=\"!addressData\">Add Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"editAddressForm\" (ngSubmit)=\"submit(editAddressForm)\">\n      <ion-grid class=\"address-from\">\n          <h5 class=\"feild-title\">Personal Details</h5>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"customerName\" placeholder=\"*Enter Full Name\"></ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-input type=\"number\" formControlName=\"customerMobile\" placeholder=\"*Mobile No\"></ion-input>\n            </ion-col>\n              <!-- <ion-col>\n                  <ion-input placeholder=\"Enter Last Name\"></ion-input>\n              </ion-col> -->\n          </ion-row>\n\n          <!-- <ion-row>\n              <ion-col>\n                  <ion-input placeholder=\"Enter Number\"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input placeholder=\"Email Address\"></ion-input>\n              </ion-col>\n          </ion-row> -->\n          <h5 class=\"feild-title\">Address Details</h5>\n          <ion-row>\n            <ion-col>\n              <ion-input type=\"number\" placeholder=\"*Pincode\" formControlName=\"pincode\"></ion-input>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"4\">\n                  <ion-input formControlName=\"houseNo\" placeholder=\"*House no\"></ion-input>\n              </ion-col>\n              <ion-col size=\"8\">\n                  <ion-input formControlName=\"address\" placeholder=\"*Apartment name\"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"street\" placeholder=\"Street details to locate you\"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"nearBy\" placeholder=\"Landmark for easy rich you\"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"area\" placeholder=\"*Area details\"></ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-input formControlName=\"state\" placeholder=\"*State\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"city\" placeholder=\"*City\"></ion-input>\n          </ion-col>\n              <!-- <ion-col>\n                  <ion-input type=\"number\" placeholder=\"*Pincode\" formControlName=\"pincode\"></ion-input>\n\n              </ion-col> -->\n          </ion-row>\n          <!-- <ion-row>\n              <ion-col class=\"select-nikename\">\n                  <ion-label>Choose nick name for this address</ion-label>\n                  <ion-button color=\"white\">Home</ion-button> <ion-button color=\"white\">Office</ion-button> <ion-button color=\"white\">Other</ion-button>\n              </ion-col>\n          </ion-row> -->\n          <!-- <ion-row>\n              <ion-item>\n                  <ion-label position=\"floating\">Pincode</ion-label>\n                  <ion-input formControlName=\"pincode\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Town/City</ion-label>\n                  <ion-input formControlName=\"city\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">State</ion-label>\n                  <ion-input formControlName=\"state\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Area,colony,Sector,village</ion-label>\n                  <ion-input formControlName=\"area\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Landmark Near By</ion-label>\n                  <ion-input formControlName=\"nearBy\"></ion-input>\n              </ion-item>\n\n          </ion-row> -->\n      </ion-grid>\n      <ion-button class=\"fix-bottom\"  *ngIf=\"addressData\" expand=\"full\" type=\"submit\">Save</ion-button>\n      <ion-button class=\"fix-bottom\"  *ngIf=\"!addressData\" expand=\"full\" type=\"submit\">Add </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/manage-address/manage-address-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/manage-address/manage-address-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manage_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-address */ "./src/app/pages/manage-address/manage-address.ts");




const routes = [
    {
        path: '',
        component: _manage_address__WEBPACK_IMPORTED_MODULE_3__["ManageAddressPage"]
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/manage-address/manage-address.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-address/manage-address.module.ts ***!
  \***************************************************************/
/*! exports provided: ManageAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressPageModule", function() { return ManageAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _manage_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-address */ "./src/app/pages/manage-address/manage-address.ts");
/* harmony import */ var _modal_editAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/editAddress */ "./src/app/pages/manage-address/modal/editAddress.ts");
/* harmony import */ var _manage_address_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-address-routing.module */ "./src/app/pages/manage-address/manage-address-routing.module.ts");








// import { AddressPageModule } from "../address/address.module";

let ManageAddressPageModule = class ManageAddressPageModule {
};
ManageAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manage_address_routing_module__WEBPACK_IMPORTED_MODULE_7__["AddressPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [
            _manage_address__WEBPACK_IMPORTED_MODULE_5__["ManageAddressPage"],
            // AddressPageModule,
            _modal_editAddress__WEBPACK_IMPORTED_MODULE_6__["EditAddressPage"]
        ],
        entryComponents: [_modal_editAddress__WEBPACK_IMPORTED_MODULE_6__["EditAddressPage"]]
    })
], ManageAddressPageModule);



/***/ }),

/***/ "./src/app/pages/manage-address/manage-address.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/manage-address/manage-address.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-grid {\n  padding: 0px;\n}\n\n.selectBox {\n  height: 20px;\n  width: 20px;\n}\n\nh6 {\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.processedButton {\n  margin-top: -4px;\n  margin-left: -10px;\n  width: 110%;\n  text-align: center;\n}\n\n.page-title {\n  margin: 0px;\n  padding: 10px 15px;\n}\n\n.address-card {\n  margin: 0;\n  border-radius: 0px;\n  margin-bottom: 10px;\n  box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.13);\n}\n\n.address-card h6 {\n  font-size: 20px;\n  margin-bottom: 0px;\n  color: var(--ion-text-color);\n}\n\n.address-card h4 {\n  font-size: 16px;\n  margin-top: -1px;\n  color: black;\n}\n\n.address-card p {\n  text-transform: capitalize;\n  font-size: 16px;\n  color: var(--ion-text-color);\n  margin-bottom: 10px;\n}\n\n.address-card ion-button {\n  margin-right: 10px;\n}\n\n.add-new-address .add-address {\n  margin: 0px;\n  height: 50px;\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.add-address {\n  --background: var(--ion-background-color);\n  --color: var(--ion-color-tertiary);\n}\n\n.noRecordsFound {\n  margin-left: 31%;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.edit-button {\n  --background: var(--ion-gocart-bg-color);\n}\n\n.add-new-address .button-native {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9tYW5hZ2UtYWRkcmVzcy9tYW5hZ2UtYWRkcmVzcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYW5hZ2UtYWRkcmVzcy9tYW5hZ2UtYWRkcmVzcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FDS0Y7O0FESEE7RUFDRSx5Q0FBQTtFQUNBLGtDQUFBO0FDTUY7O0FESEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ01GOztBREhBO0VBQ0Usd0NBQUE7QUNNRjs7QURKQTtFQUNFLDJCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYW5hZ2UtYWRkcmVzcy9tYW5hZ2UtYWRkcmVzcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zZWxlY3RCb3gge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvY2Vzc2VkQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB3aWR0aDogMTEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2UtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICAvLyBmb250LXNpemU6IDE2cHg7XG59XG4uYWRkcmVzcy1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG59XG4uYWRkcmVzcy1jYXJkIGg2IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5hZGRyZXNzLWNhcmQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFkZHJlc3MtY2FyZCBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hZGRyZXNzLWNhcmQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hZGQtbmV3LWFkZHJlc3MgLmFkZC1hZGRyZXNzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuLmFkZC1hZGRyZXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5ub1JlY29yZHNGb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lZGl0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdvY2FydC1iZy1jb2xvcik7XG59XG4uYWRkLW5ldy1hZGRyZXNzIC5idXR0b24tbmF0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zZWxlY3RCb3gge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHJvY2Vzc2VkQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB3aWR0aDogMTEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5hZGRyZXNzLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cblxuLmFkZHJlc3MtY2FyZCBoNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uYWRkcmVzcy1jYXJkIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hZGRyZXNzLWNhcmQgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hZGRyZXNzLWNhcmQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmFkZC1uZXctYWRkcmVzcyAuYWRkLWFkZHJlc3Mge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbi5hZGQtYWRkcmVzcyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4ubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogMzElO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWRpdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1nb2NhcnQtYmctY29sb3IpO1xufVxuXG4uYWRkLW5ldy1hZGRyZXNzIC5idXR0b24tbmF0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/manage-address/manage-address.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/manage-address/manage-address.ts ***!
  \********************************************************/
/*! exports provided: ManageAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressPage", function() { return ManageAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_editAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/editAddress */ "./src/app/pages/manage-address/modal/editAddress.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");










let ManageAddressPage = class ManageAddressPage {
    constructor(_ProductService, modalController, _Router, Router, _userData, toastController, alertController) {
        this._ProductService = _ProductService;
        this.modalController = modalController;
        this._Router = _Router;
        this.Router = Router;
        this._userData = _userData;
        this.toastController = toastController;
        this.alertController = alertController;
        this.addressList = [];
        this.enableCheckoutScreen = false;
        this.isSearchEnable = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + '/';
        this.searchproductList = [];
        this.showSearchBox = false;
        this.selectedEntry = {
            _id: ""
        };
        this.cartCount = 0;
    }
    search(query) {
        if (query.target.value.length >= 2) {
            this.isSearchEnable = true;
            this._ProductService.search({
                search: query.target.value,
                filter: 'Product'
            }, localStorage.getItem('shopID')).subscribe((data) => {
                console.log(data, "data");
                this.searchproductList = data.productList;
            });
        }
        if (query.target.value.length == 0) {
            this.isSearchEnable = false;
            // this.getAnalyticalData()
        }
    }
    ngOnInit() {
        this.getAddress();
        this.getCartCount();
        this.cartId = this._Router.snapshot.params.cartId;
        console.log(this.cartId, "cartId");
    }
    enableSearch() {
        this.showSearchBox = true;
    }
    backToNormal() {
        this.showSearchBox = false;
    }
    getAddress() {
        this._ProductService.getAddress(localStorage.getItem('userId')).subscribe((data) => {
            this.addressList = data;
            console.log(this.addressList);
        });
    }
    deleteConfirm(addressId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are You Sure You Want To delete ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            this.deleteAddress(addressId);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openAddAdressModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_editAddress__WEBPACK_IMPORTED_MODULE_5__["EditAddressPage"]
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.getAddress();
                }
            });
            return yield modal.present();
        });
    }
    openEditAdressModal(_addressData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_editAddress__WEBPACK_IMPORTED_MODULE_5__["EditAddressPage"],
                componentProps: {
                    addressData: _addressData
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.getAddress();
                }
            });
            return yield modal.present();
        });
    }
    onSelectionChange(entry) {
        this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        console.log(this.selectedEntry, "select");
        if (this.selectedEntry) {
            this.enableCheckoutScreen = true;
        }
    }
    processedToCheckOutPage() {
        this.Router.navigateByUrl(`/checkout/${this.cartId}/${this.selectedEntry._id}`);
    }
    deleteAddress(addressId) {
        this._userData.deleteAddress(addressId).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getAddress();
            const toast = yield this.toastController.create({
                message: 'Address Deleted',
                duration: 3000,
                color: 'secondary',
                position: 'bottom',
                animated: true,
            });
            toast.present();
        }));
    }
    getCartCount() {
        let shopId = localStorage.getItem('shopID');
        var arr = [];
        this._ProductService
            .cartList(localStorage.getItem("userId"), shopId)
            .subscribe((data) => {
            if (data.length !== 0) {
                if (data.length) {
                    this.cartCount = data[0].productDetails.length;
                }
            }
        });
    }
};
ManageAddressPage.ctorParameters = () => [
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ManageAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-manage-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-address.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/manage-address.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-address.scss */ "./src/app/pages/manage-address/manage-address.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ManageAddressPage);



/***/ }),

/***/ "./src/app/pages/manage-address/modal/editAddress.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-address/modal/editAddress.ts ***!
  \***********************************************************/
/*! exports provided: EditAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressPage", function() { return EditAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/user-data */ "./src/app/providers/user-data.ts");







let EditAddressPage = class EditAddressPage {
    constructor(modalController, _ProductService, toastController, _userData) {
        this.modalController = modalController;
        this._ProductService = _ProductService;
        this.toastController = toastController;
        this._userData = _userData;
        this.searchproductList = [];
    }
    ngOnInit() {
        this.editAddressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            nearBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            customerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            customerMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            houseNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        // this.getCartCount()
        console.log(this.addressData, "addressdata");
        if (this.addressData) {
            this.editAddressForm.patchValue(this.addressData);
        }
        this.editAddressForm.get("pincode").valueChanges.subscribe(pincode => {
            console.log('firstname value changed');
            console.log(pincode);
            if (JSON.stringify(pincode)) {
                if (JSON.stringify(pincode).length == 6) {
                    this.getPinCodeDetails(JSON.stringify(pincode));
                }
            }
        });
    }
    getPinCodeDetails(pincode) {
        this._userData.getPinodeData(pincode).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("pincode data ::", data);
            let address = (data) ? (data[0].PostOffice) ? data[0].PostOffice[0] : {} : {};
            console.log(address, "address");
            this.editAddressForm.get("city").setValue(address.District);
            this.editAddressForm.get("area").setValue(address.Name);
            this.editAddressForm.get("state").setValue(address.State);
        }));
    }
    submit($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.editAddressForm.invalid) {
                const toast = yield this.toastController.create({
                    message: 'Please Fill the Address Properly',
                    duration: 3000,
                    color: 'warning',
                    position: 'bottom',
                    animated: true,
                });
                toast.present();
                return;
            }
            if (JSON.stringify(this.editAddressForm.get("customerMobile").value).length != 10) {
                const toast = yield this.toastController.create({
                    message: 'Mobile Number is not Valid',
                    duration: 3000,
                    color: 'warning',
                    position: 'bottom',
                    animated: true,
                });
                toast.present();
                return;
            }
            if (JSON.stringify(this.editAddressForm.get("pincode").value).length != 6) {
                const toast = yield this.toastController.create({
                    message: 'Invalid Pincode',
                    duration: 3000,
                    color: 'warning',
                    position: 'bottom',
                    animated: true,
                });
                toast.present();
                return;
            }
            console.log($event);
            let payload = Object.assign({}, $event.value);
            // payload.userId = localStorage.getItem('userId');
            console.log(payload, "payload");
            if (payload.customerName == "") {
                let toast = yield this.toastController.create({
                    message: "Please Add Cusomer Name",
                    duration: 3000,
                    color: 'warning',
                    position: "bottom",
                    animated: true,
                });
                toast.present();
                return;
            }
            if (payload.houseNo == "" || payload.city == "" || payload.state == "" || payload.address == "") {
                let toast = yield this.toastController.create({
                    message: "Address is Invalid",
                    duration: 3000,
                    color: 'warning',
                    position: "bottom",
                    animated: true,
                });
                toast.present();
                return;
            }
            if (!payload.pincode) {
                let toast = yield this.toastController.create({
                    message: "Pincode is invalid",
                    duration: 3000,
                    color: 'warning',
                    position: "bottom",
                    animated: true,
                });
                toast.present();
                return;
            }
            if (this.addressData) {
                this._userData.editAddress(this.addressData._id, payload).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const toast = yield this.toastController.create({
                        message: 'Saved Successfully',
                        duration: 3000,
                        color: 'success',
                        position: 'bottom',
                        animated: true,
                    });
                    toast.present();
                    this.closeModal();
                }));
            }
            else {
                this.addAddress($event);
            }
        });
    }
    addAddress($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log($event);
            let payload = Object.assign({}, $event.value);
            payload.userId = localStorage.getItem('userId');
            console.log(payload, "payload");
            this._ProductService.SaveAddress(payload).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("data", data);
                const toast = yield this.toastController.create({
                    message: 'Address Added',
                    duration: 3000,
                    color: 'secondary',
                    position: 'bottom',
                    animated: true,
                });
                toast.present();
                this.closeModal();
            }));
        });
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const onClosedData = "Address Added";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
EditAddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditAddressPage.prototype, "addressData", void 0);
EditAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modal-editAddress',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editAddress.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/modal/editAddress.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])
], EditAddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-manage-address-manage-address-module-es2015.js.map