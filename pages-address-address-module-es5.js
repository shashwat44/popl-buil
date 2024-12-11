function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddressAddressHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <!-- <ion-menu-button style=\"color: white;\"></ion-menu-button> -->\n            <!-- <ion-menu-button>\n              <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px;\">\n            </ion-menu-button> -->\n            <ion-back-button defaultHref=\"/cart\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            Choose Addresss\n        </ion-title>\n        <ion-buttons slot=\"end\">\n\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n<section class=\"add-new-address\">\n  <ion-button class=\"add-address\"  expand=\"full\" size=\"medium\" (click)=\"openAddAdressModal()\">\n      + Add a New Address\n  </ion-button>\n</section>\n<hr style=\"background-color: grey; \">\n<ion-button expand=\"full\" class=\"processedButton\" (click)=\"processedToCheckOutPage()\" type=\"submit\" *ngIf=\"enableCheckoutScreen\">Deliver to this address</ion-button>\n<ion-content>\n  <h4 class=\"page-title\">Select Your Address</h4>\n    <ion-grid>\n        <ion-card class=\"address-card\" *ngFor=\"let val of addressList;let idx = index\">\n            <ion-card-content (click)='onSelectionChange(val,$event)'>\n                <ion-row>\n                    <ion-col size=\"1\">\n                      <ion-checkbox id=\"box\" color=\"primary\" class=\"selectBox\" [checked]=\"val._id === selectedEntry._id\"  [value]=\"val._id\"  (change)='onSelectionChange(val,$event)' ></ion-checkbox>\n                      <!-- <div class=\"checkbox\">\n                        <label></label>\n                        <input type=\"checkbox\" >\n                      </div> -->\n                    </ion-col>\n                    <ion-col size=\"10\" >\n                      <div class=\"address-card-col\"  (click)='onSelectionChange(val,$event)'>\n                        <h6 >{{val.customerName}}</h6>\n                        <h4 >{{val.customerMobile}}</h4>\n                        <p class=\"address\">\n                          {{val.houseNo}}, {{val.street}}, {{val.address}},{{val.area}},<span style=\"text-transform: capitalize;\">{{val.city}}, {{val.state}}, {{val.pincode}} , {{val.country}}</span>\n                        </p>\n                        <!-- <p class=\"mobile-no\">{{val.pincode}}</p> -->\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <a (click)=\"openEditAdressModal(val)\" class=\"edit-address-btn\"><i class=\"fa fa-edit\"></i></a>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n\n\n    </ion-grid>\n    <ion-row class=\"no-orders\" *ngIf=\"addressList.length ==0\">\n      <svg\n      style=\"height: 75px;margin-top: 55px;\"\n      version=\"1.0\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"1280.000000pt\"\n      height=\"1024.000000pt\"\n      viewBox=\"0 0 1280.000000 1024.000000\"\n      preserveAspectRatio=\"xMidYMid meet\"\n    >\n      <metadata></metadata>\n      <g\n        transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\"\n        fill=\"#000000\"\n        stroke=\"none\"\n      >\n        <path\n          d=\"M794 10220 c-211 -31 -381 -174 -451 -379 l-22 -66 -1 -4125 c0\n-3587 2 -4132 15 -4180 51 -192 206 -346 400 -395 52 -13 451 -15 3455 -15\n3212 0 3397 1 3430 18 52 26 80 74 80 139 0 64 -18 103 -62 135 l-33 23 -3395\n5 -3395 5 -40 22 c-52 28 -89 68 -114 123 -21 45 -21 47 -21 3263 l0 3217\n5130 0 5130 0 0 -1657 c0 -1637 0 -1658 20 -1691 30 -49 75 -72 141 -72 66 0\n112 26 140 80 18 33 19 121 19 2555 0 2221 -2 2528 -15 2580 -48 190 -188 336\n-385 402 -53 17 -222 18 -5015 19 -2728 1 -4983 -2 -5011 -6z m9937 -332 c51\n-15 114 -69 142 -122 l22 -41 3 -697 3 -698 -5131 0 -5130 0 0 684 c0 741 -1\n729 55 802 13 17 48 44 77 58 l52 26 4934 0 c3716 0 4944 -3 4973 -12z\"\n        />\n        <path\n          d=\"M1280 9571 c-82 -26 -118 -48 -183 -109 -100 -96 -147 -206 -147\n-341 1 -146 40 -242 139 -342 96 -95 202 -139 336 -139 129 1 229 38 319 121\n107 97 156 209 156 354 0 216 -128 393 -329 455 -81 26 -214 26 -291 1z m234\n-335 c20 -15 41 -44 52 -71 14 -39 15 -52 5 -87 -42 -139 -225 -153 -283 -21\n-62 139 105 272 226 179z\"\n        />\n        <path\n          d=\"M2536 9570 c-174 -62 -293 -206 -319 -386 -42 -287 179 -544 467\n-544 136 0 251 46 341 135 162 162 187 418 59 610 -48 74 -103 120 -194 164\n-70 34 -82 36 -185 39 -91 2 -120 -1 -169 -18z m233 -328 c51 -37 73 -82 68\n-135 -5 -61 -30 -96 -89 -125 -57 -29 -105 -23 -153 19 -42 37 -59 79 -53 133\n6 54 31 90 83 116 47 25 105 22 144 -8z\"\n        />\n        <path\n          d=\"M3826 9579 c-118 -28 -245 -133 -300 -249 -69 -142 -69 -287 -1 -426\n118 -243 409 -334 659 -207 62 32 153 122 188 189 142 264 9 597 -273 685 -66\n21 -202 24 -273 8z m190 -328 c55 -25 84 -73 84 -140 0 -45 -5 -56 -36 -91\n-48 -53 -100 -68 -160 -45 -103 39 -135 155 -67 236 49 58 109 72 179 40z\"\n        />\n        <path\n          d=\"M1663 7049 c-118 -58 -118 -231 1 -288 l43 -21 4076 2 4076 3 28 21\nc99 74 99 204 0 278 l-28 21 -4077 3 -4077 2 -42 -21z\"\n        />\n        <path\n          d=\"M1660 5942 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 4082 0 4082 0 33 23 c57 38 75 71 75 137 0 66 -18 99 -75 138 l-33 22\n-4076 0 c-3861 0 -4078 -1 -4111 -18z\"\n        />\n        <path\n          d=\"M8890 5104 c-668 -102 -1236 -517 -1530 -1119 -244 -500 -272 -1095\n-75 -1616 158 -415 463 -782 847 -1016 462 -281 1032 -364 1571 -227 258 65\n524 197 742 368 l59 46 30 -29 30 -30 -17 -38 c-42 -94 -40 -207 4 -302 17\n-35 157 -181 568 -593 l545 -548 352 0 352 0 31 35 c64 73 76 110 76 225 0 95\n-3 110 -27 155 -19 36 -197 220 -655 676 -709 707 -656 664 -818 664 -71 0\n-99 -4 -132 -21 l-42 -21 -30 31 -31 32 61 79 c203 265 336 575 396 920 24\n140 24 490 0 630 -80 460 -282 848 -600 1152 -316 301 -697 487 -1129 548\n-132 19 -450 18 -578 -1z m461 -325 c601 -61 1115 -420 1374 -961 64 -133 104\n-252 136 -403 21 -96 24 -137 24 -325 0 -165 -4 -236 -18 -305 -170 -863 -930\n-1454 -1793 -1394 -604 42 -1144 408 -1409 954 -232 477 -230 1027 5 1496 169\n337 455 618 790 778 284 136 592 191 891 160z m2741 -4591 l-72 -73 -590 590\n-590 590 72 72 73 73 590 -590 590 -590 -73 -72z\"\n        />\n        <path\n          d=\"M8255 4106 c-16 -8 -55 -40 -87 -72 -176 -183 -309 -458 -354 -734\n-23 -139 -14 -389 19 -530 58 -241 170 -454 330 -625 59 -63 80 -78 115 -86\n107 -23 202 49 202 155 0 53 -14 80 -81 158 -160 185 -244 378 -269 613 -32\n288 72 598 273 820 29 33 59 70 65 82 18 33 14 114 -7 153 -35 68 -133 99\n-206 66z\"\n        />\n        <path\n          d=\"M1683 4849 c-69 -20 -123 -111 -108 -182 12 -53 45 -98 89 -118 40\n-18 133 -19 2846 -19 l2806 0 44 23 c50 24 90 88 90 141 0 47 -37 113 -78 138\nl-37 23 -2810 2 c-1697 1 -2823 -2 -2842 -8z\"\n        />\n        <path\n          d=\"M1660 3732 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 2561 0 c2538 0 2561 0 2594 20 103 63 96 233 -11 284 -32 15 -240 16\n-2584 16 -2406 0 -2550 -1 -2583 -18z\"\n        />\n        <path\n          d=\"M1692 2640 c-45 -11 -100 -66 -113 -112 -21 -78 15 -158 85 -189 43\n-19 90 -19 2603 -17 l2558 3 34 24 c37 27 70 90 71 135 0 47 -37 113 -78 138\nl-37 23 -2545 2 c-1400 0 -2560 -3 -2578 -7z\"\n        />\n      </g>\n    </svg>\n    <span style=\"text-align: center;margin-top: 10px;\">No Address Found</span>\n    </ion-row>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/modal/addAddress.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/modal/addAddress.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddressModalAddAddressHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    .add-address{\n        --background: var(--ion-feedback-button-background);\n        position: fixed;\n        width: 100%;\n        bottom: 0px;\n        margin: 0px;\n    }\n</style>\n\n\n<ion-header>\n  <ion-toolbar text-center>\n    <ion-back-button slot=\"start\" (click)=\"closeModal()\" defaultHref=\"/address/{{cartId}}\" style=\"color: white;\"></ion-back-button>\n      <ion-title>Edit Address</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"editAddressForm\" (ngSubmit)=\"submit(editAddressForm)\">\n      <ion-grid class=\"address-from\">\n          <h5 class=\"feild-title\">Personal Details</h5>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"customerName\" placeholder=\"*Enter Full Name\"></ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-input type=\"number\" formControlName=\"customerMobile\" placeholder=\"*Mobile No\"></ion-input>\n            </ion-col>\n              <!-- <ion-col>\n                  <ion-input placeholder=\"Enter Last Name\"></ion-input>\n              </ion-col> -->\n          </ion-row>\n          <!-- <ion-row>\n              <ion-col>\n                  <ion-input placeholder=\"Enter Number\"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input placeholder=\"Email Address\"></ion-input>\n              </ion-col>\n          </ion-row> -->\n          <h5 class=\"feild-title\">Address Details</h5>\n          <ion-row>\n            <ion-col>\n              <ion-input type=\"number\" placeholder=\"*Pincode\" formControlName=\"pincode\"></ion-input>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col size=\"4\">\n                  <ion-input formControlName=\"houseNo\" placeholder=\"*House no\"></ion-input>\n              </ion-col>\n              <ion-col size=\"8\">\n                  <ion-input formControlName=\"address\" placeholder=\"*Apartment / Sector \"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"street\" placeholder=\"Street details to locate you\"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"nearBy\" placeholder=\"Landmark for easy rich you\"></ion-input>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                  <ion-input formControlName=\"area\" placeholder=\"*Area details\"></ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-input formControlName=\"state\" placeholder=\"*State\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-input formControlName=\"city\" placeholder=\"*City\"></ion-input>\n          </ion-col>\n\n          </ion-row>\n          <!-- <ion-row>\n              <ion-col class=\"select-nikename\">\n                  <ion-label>Choose nick name for this address</ion-label>\n                  <ion-button color=\"white\">Home</ion-button> <ion-button color=\"white\">Office</ion-button> <ion-button color=\"white\">Other</ion-button>\n              </ion-col>\n          </ion-row> -->\n          <!-- <ion-row>\n              <ion-item>\n                  <ion-label position=\"floating\">Pincode</ion-label>\n                  <ion-input formControlName=\"pincode\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Town/City</ion-label>\n                  <ion-input formControlName=\"city\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">State</ion-label>\n                  <ion-input formControlName=\"state\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Area,colony,Sector,village</ion-label>\n                  <ion-input formControlName=\"area\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Landmark Near By</ion-label>\n                  <ion-input formControlName=\"nearBy\"></ion-input>\n              </ion-item>\n\n          </ion-row> -->\n      </ion-grid>\n      <ion-button class=\"add-address\" expand=\"full\" type=\"submit\">Add Address</ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/address/address-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/address/address-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddressPageRoutingModule */

  /***/
  function srcAppPagesAddressAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function () {
      return AddressPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./address */
    "./src/app/pages/address/address.ts");

    var routes = [{
      path: '',
      component: _address__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }];

    var AddressPageRoutingModule = function AddressPageRoutingModule() {
      _classCallCheck(this, AddressPageRoutingModule);
    };

    AddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/address/address.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/address/address.module.ts ***!
    \*************************************************/

  /*! exports provided: AddressPageModule */

  /***/
  function srcAppPagesAddressAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageModule", function () {
      return AddressPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./address */
    "./src/app/pages/address/address.ts");
    /* harmony import */


    var _modal_addAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal/addAddress */
    "./src/app/pages/address/modal/addAddress.ts");
    /* harmony import */


    var _address_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./address-routing.module */
    "./src/app/pages/address/address-routing.module.ts");

    var AddressPageModule = function AddressPageModule() {
      _classCallCheck(this, AddressPageModule);
    };

    AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _address_routing_module__WEBPACK_IMPORTED_MODULE_7__["AddressPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_address__WEBPACK_IMPORTED_MODULE_5__["AddressPage"], _modal_addAddress__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]],
      entryComponents: [_modal_addAddress__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
    })], AddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/address/address.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/address/address.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddressAddressScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-grid {\n  padding: 0px;\n}\n\n.processedButton {\n  margin-top: 0px;\n}\n\n.page-title {\n  margin: 0px;\n  font-weight: 560;\n  padding: 10px 15px;\n  color: var(--ion-text-color);\n}\n\n.address-card {\n  margin: 0;\n  border-radius: 0px;\n  margin-bottom: 10px;\n  box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.13);\n}\n\n.address-card-col h6 {\n  font-size: 18px;\n  color: var(--ion-text-color);\n  margin-bottom: 8px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n\n.address-card-col h4 {\n  font-size: 16px;\n  margin-top: -6px;\n  color: black;\n}\n\n.address-card-col p {\n  text-transform: capitalize;\n  font-size: 14px;\n  color: var(--ion-text-color);\n  margin-bottom: 10px;\n}\n\n.selectBox {\n  margin-top: 5px;\n  --border-color: var(--ion-text-color);\n}\n\n.add-new-address ion-button {\n  margin: 0px;\n  height: 50px;\n}\n\n.edit-address-btn {\n  font-size: 22px;\n  color: #ababab;\n}\n\n.add-address {\n  --background: var(--ion-background-color);\n  --color: var(--ion-color-tertiary);\n}\n\n.processedButton {\n  --background: var(--ion-continue-background);\n  margin: 0px;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9hZGRyZXNzL2FkZHJlc3Muc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDR0Y7O0FEREE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNLRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxxQ0FBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFDRSx5Q0FBQTtFQUNBLGtDQUFBO0FDVUY7O0FEUkE7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRyZXNzL2FkZHJlc3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnByb2Nlc3NlZEJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5wYWdlLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1NjA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5hZGRyZXNzLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cbi5hZGRyZXNzLWNhcmQtY29sIGg2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYWRkcmVzcy1jYXJkLWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmFkZHJlc3MtY2FyZC1jb2wgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc2VsZWN0Qm94IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLmFkZC1uZXctYWRkcmVzcyBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5lZGl0LWFkZHJlc3MtYnRuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2FiYWJhYjtcbn1cbi5hZGQtYWRkcmVzcyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuLnByb2Nlc3NlZEJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wcm9jZXNzZWRCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5wYWdlLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1NjA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLmFkZHJlc3MtY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuXG4uYWRkcmVzcy1jYXJkLWNvbCBoNiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFkZHJlc3MtY2FyZC1jb2wgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFkZHJlc3MtY2FyZC1jb2wgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZWxlY3RCb3gge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5hZGQtbmV3LWFkZHJlc3MgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5lZGl0LWFkZHJlc3MtYnRuIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2FiYWJhYjtcbn1cblxuLmFkZC1hZGRyZXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5wcm9jZXNzZWRCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb250aW51ZS1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogNDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/address/address.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/address/address.ts ***!
    \******************************************/

  /*! exports provided: AddressPage */

  /***/
  function srcAppPagesAddressAddressTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
      return AddressPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/product.services */
    "./src/app/providers/product.services.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_addAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal/addAddress */
    "./src/app/pages/address/modal/addAddress.ts");

    var AddressPage = /*#__PURE__*/function () {
      function AddressPage(_ProductService, modalController, _Router, Router) {
        _classCallCheck(this, AddressPage);

        this._ProductService = _ProductService;
        this.modalController = modalController;
        this._Router = _Router;
        this.Router = Router;
        this.isSearchEnable = false;
        this.addressList = [];
        this.enableCheckoutScreen = false;
        this.searchproductList = [];
        this.selectedEntry = {
          _id: ""
        };
      }

      _createClass(AddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAddress();
          this.cartId = this._Router.snapshot.params.cartId;
          console.log(this.cartId, "cartId");
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this = this;

          this._ProductService.getAddress(localStorage.getItem('userId')).subscribe(function (data) {
            _this.addressList = data;
            console.log(_this.addressList);
          });
        }
      }, {
        key: "openAddAdressModal",
        value: function openAddAdressModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modal_addAddress__WEBPACK_IMPORTED_MODULE_5__["AddAddressPage"]
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this2.getAddress();
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange(data, $event) {
          console.log($event.toElement.ariaChecked);

          if ($event.toElement.ariaChecked == 'true') {
            this.selectedEntry = Object.assign({}, this.selectedEntry, data);
          } else {
            this.selectedEntry._id = '';
          }

          console.log(this.selectedEntry, "select");

          if (this.selectedEntry._id) {
            this.enableCheckoutScreen = true;
          } else {
            this.enableCheckoutScreen = false;
          }
        }
      }, {
        key: "processedToCheckOutPage",
        value: function processedToCheckOutPage() {
          this.Router.navigateByUrl("/checkout/".concat(this.cartId, "/").concat(this.selectedEntry._id));
        }
      }, {
        key: "openEditAdressModal",
        value: function openEditAdressModal(_addressData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modal_addAddress__WEBPACK_IMPORTED_MODULE_5__["AddAddressPage"],
                      componentProps: {
                        addressData: _addressData,
                        cartId: this.cartId
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this3.getAddress();
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AddressPage;
    }();

    AddressPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.scss */
      "./src/app/pages/address/address.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AddressPage);
    /***/
  },

  /***/
  "./src/app/pages/address/modal/addAddress.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/address/modal/addAddress.ts ***!
    \***************************************************/

  /*! exports provided: AddAddressPage */

  /***/
  function srcAppPagesAddressModalAddAddressTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPage", function () {
      return AddAddressPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers_product_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/product.services */
    "./src/app/providers/product.services.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var AddAddressPage = /*#__PURE__*/function () {
      function AddAddressPage(modalController, _ProductService, toastController, _userData) {
        _classCallCheck(this, AddAddressPage);

        this.modalController = modalController;
        this._ProductService = _ProductService;
        this.toastController = toastController;
        this._userData = _userData;
        this.searchproductList = [];
      }

      _createClass(AddAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

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
            houseNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
          });
          console.log(this.addressData, "addressdata");

          if (this.addressData) {
            this.editAddressForm.patchValue(this.addressData);
          }

          this.editAddressForm.get("pincode").valueChanges.subscribe(function (pincode) {
            console.log('firstname value changed');
            console.log(pincode);

            if (JSON.stringify(pincode)) {
              if (JSON.stringify(pincode).length == 6) {
                _this4.getPinCodeDetails(JSON.stringify(pincode));
              }
            }
          });
        }
      }, {
        key: "getPinCodeDetails",
        value: function getPinCodeDetails(pincode) {
          var _this5 = this;

          this._userData.getPinodeData(pincode).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var address;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("pincode data ::", data);
                      address = data ? data[0].PostOffice ? data[0].PostOffice[0] : {} : {};
                      console.log(address, "address");
                      this.editAddressForm.get("city").setValue(address.District);
                      this.editAddressForm.get("area").setValue(address.Name);
                      this.editAddressForm.get("state").setValue(address.State);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "submit",
        value: function submit($event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var toast, _toast, _toast2, payload;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.editAddressForm.invalid) {
                      _context5.next = 6;
                      break;
                    }

                    _context5.next = 3;
                    return this.toastController.create({
                      message: 'Please Fill the Address Properly',
                      duration: 3000,
                      color: 'warning',
                      position: 'bottom',
                      animated: true
                    });

                  case 3:
                    toast = _context5.sent;
                    toast.present();
                    return _context5.abrupt("return");

                  case 6:
                    if (!(JSON.stringify(this.editAddressForm.get("customerMobile").value).length != 10)) {
                      _context5.next = 12;
                      break;
                    }

                    _context5.next = 9;
                    return this.toastController.create({
                      message: 'Mobile Number is not Valid',
                      duration: 3000,
                      color: 'warning',
                      position: 'bottom',
                      animated: true
                    });

                  case 9:
                    _toast = _context5.sent;

                    _toast.present();

                    return _context5.abrupt("return");

                  case 12:
                    if (!(JSON.stringify(this.editAddressForm.get("pincode").value).length != 6)) {
                      _context5.next = 18;
                      break;
                    }

                    _context5.next = 15;
                    return this.toastController.create({
                      message: 'Invalid Pincode',
                      duration: 3000,
                      color: 'warning',
                      position: 'bottom',
                      animated: true
                    });

                  case 15:
                    _toast2 = _context5.sent;

                    _toast2.present();

                    return _context5.abrupt("return");

                  case 18:
                    console.log($event);
                    payload = Object.assign({}, $event.value); // payload.userId = localStorage.getItem('userId');

                    console.log(payload, "payload");

                    if (this.addressData) {
                      this._userData.editAddress(this.addressData._id, payload).subscribe(function (data) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return this.toastController.create({
                                    message: 'Saved Successfully',
                                    duration: 3000,
                                    color: 'secondary',
                                    position: 'bottom',
                                    animated: true
                                  });

                                case 2:
                                  toast = _context4.sent;
                                  toast.present();
                                  this.closeModal();

                                case 5:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });
                    } else {
                      this.addAddress($event);
                    }

                  case 22:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "addAddress",
        value: function addAddress($event) {
          var _this7 = this;

          console.log($event);
          var payload = Object.assign({}, $event.value);
          payload.userId = localStorage.getItem('userId');
          console.log(payload, "payload");

          this._ProductService.SaveAddress(payload).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log("data", data);
                      _context6.next = 3;
                      return this.toastController.create({
                        message: 'Address Added',
                        duration: 3000,
                        color: 'secondary',
                        position: 'bottom',
                        animated: true
                      });

                    case 3:
                      toast = _context6.sent;
                      toast.present();
                      this.closeModal();

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    onClosedData = "Address Added";
                    _context7.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return AddAddressPage;
    }();

    AddAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddAddressPage.prototype, "addressData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], AddAddressPage.prototype, "cartId", void 0);
    AddAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modal-addresss',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addAddress.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/modal/addAddress.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], AddAddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-address-address-module-es5.js.map