function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offers-offers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOffersOffersHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px;\">\n      </ion-menu-button>\n      <ion-icon style=\"margin-left: 10px;\" *ngIf=\"showSearchBox\" (click)=\"backToNormal()\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title >\n      CSD CAR\n    </ion-title>\n\n    <ion-buttons *ngIf=\"!showSearchBox\" slot=\"end\" >\n      <ion-button routerLink=\"/search/offers\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n     <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/cart']\">\n        <ion-icon slot=\"icon-only\" name=\"cart\" style=\"color: white;\"></ion-icon>\n      </ion-button>\n      <ion-badge style=\"margin-top: -8px;margin-left: -10px;\n        color: orange; background: transparent;\" *ngIf=\"cartCount != 0\">{{cartCount}}</ion-badge>\n\n    </ion-buttons>\n  </ion-toolbar>\n <ion-searchbar   *ngIf=\"showSearchBox\" spellcheck=\"true\" ></ion-searchbar>\n</ion-header>\n<ion-content>\n  <ion-item >\n    <ion-label>Filters</ion-label>\n    <ion-select interface=\"popover\" placeholder=\"Select Filter\" [(ngModel)]=\"filter\"\n    (ngModelChange)=\"onFilterChange()\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"true\">Show Reward Offers</ion-select-option>\n      <ion-select-option value=\"false\">Show Coupons </ion-select-option>\n    </ion-select>\n  </ion-item>\n<section class=\"total-points\">\n  <ion-item-group class=\"total-points-group\">\n    <p>Redeem Total Points</p>\n    <h2>{{reedemCount}}</h2>\n  </ion-item-group>\n</section>\n<ion-list class=\"offer-list\">\n  <ion-grid class=\"horizontalPadding\">\n    <ion-row>\n      <ion-card class=\"offer-card\" *ngFor=\"let list of _offerList\">\n        <div class=\"rotate-heading\">\n          <span *ngIf=\"!list.isRewardSetting\"> COUPON </span>\n          <span *ngIf=\"list.isRewardSetting\"> REWARD </span>\n        </div>\n        <div class=\"offer-content\">\n          <div class=\"offer-top\">\n            <ion-thumbnail >\n              <svg style=\"enable-background:new 0 0 512.001 512.001;\" id=\"fix_1\" class=\"offer-img\" *ngIf=\"list.isRewardSetting\" enable-background=\"new 0 0 24 24\" height=\"512\" viewBox=\"0 0 24 24\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m20.5 13h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5z\"></path><path d=\"m19.5 24h-15c-.827 0-1.5-.673-1.5-1.5v-5c0-.276.224-.5.5-.5s.5.224.5.5v5c0 .275.224.5.5.5h15c.276 0 .5-.225.5-.5v-5c0-.276.224-.5.5-.5s.5.224.5.5v5c0 .827-.673 1.5-1.5 1.5z\"></path><path d=\"m12 24c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5s.5.224.5.5v11c0 .276-.224.5-.5.5z\"></path><path d=\"m23.5 18h-7.934c-.523 0-1.016-.278-1.286-.728l-2.709-4.516c-.093-.154-.095-.347-.006-.503s.255-.253.435-.253h8.5c.176 0 .338.092.429.243l3 5c.093.154.095.347.006.503-.089.157-.255.254-.435.254zm-10.617-5 2.254 3.758c.09.149.255.242.429.242h7.05l-2.4-4z\"></path><path d=\"m8.434 18h-7.934c-.18 0-.346-.097-.435-.254-.089-.156-.086-.349.006-.503l3-5c.091-.151.253-.243.429-.243h8.5c.18 0 .346.097.435.254.089.156.086.349-.006.503l-2.709 4.514c-.27.451-.763.729-1.286.729zm-7.051-1h7.05c.175 0 .339-.093.43-.243l2.254-3.757h-7.334z\"></path><path d=\"m12 11c-3.033 0-5.5-2.468-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.468 5.5 5.5-2.467 5.5-5.5 5.5zm0-10c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z\"></path><path d=\"m12.25 8.5h-1.75c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.75c.414 0 .75-.337.75-.75s-.336-.75-.75-.75h-.5c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75h1.75c.276 0 .5.224.5.5s-.224.5-.5.5h-1.75c-.414 0-.75.337-.75.75s.336.75.75.75h.5c.965 0 1.75.785 1.75 1.75s-.785 1.75-1.75 1.75z\"></path><path d=\"m12 9.4c-.276 0-.5-.224-.5-.5v-.9c0-.276.224-.5.5-.5s.5.224.5.5v.9c0 .277-.224.5-.5.5z\"></path><path d=\"m12 3.5c-.276 0-.5-.224-.5-.5v-.9c0-.276.224-.5.5-.5s.5.224.5.5v.9c0 .276-.224.5-.5.5z\"></path></svg>\n              <!-- <img class=\"offer-img\" *ngIf=\"list.isRewardSetting\" src=\"../../../assets/img/default_reward.png\"> -->\n              <svg *ngIf=\"!list.isRewardSetting\" class=\"offer-img\" xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Capa_1\" style=\"enable-background:new 0 0 512.001 512.001;\" version=\"1.1\" viewBox=\"0 0 512.001 512.001\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\"><g><g><path d=\"M507.606,4.394c-5.857-5.858-15.356-5.858-21.214,0l-43.69,43.69c-2.686-1.28-5.52-2.311-8.479-3.05L298.452,11.491 c-15.246-3.811-31.622,0.724-42.735,11.837L13.16,265.486c-17.545,17.546-17.545,46.096,0,63.643l169.713,169.712 c17.546,17.546,46.096,17.547,63.643,0l242.158-242.558c11.113-11.113,15.649-27.489,11.836-42.736l-33.542-135.77 c-0.74-2.958-1.77-5.793-3.05-8.479l43.69-43.69C513.464,19.75,513.464,10.252,507.606,4.394z M471.403,220.825 c1.271,5.082-0.241,10.54-3.945,14.245L225.3,477.627c-5.849,5.849-15.366,5.849-21.215,0L34.373,307.914 c-5.849-5.849-5.849-15.366,0-21.215L276.931,44.542c2.837-2.837,6.703-4.388,10.641-4.388c1.204,0,2.415,0.145,3.604,0.442 l127.53,31.483l-36.125,36.125c-16.725-7.966-37.384-5.044-51.21,8.782c-17.547,17.547-17.547,46.096,0,63.643 c8.772,8.773,20.297,13.16,31.821,13.16c11.523,0,23.048-4.386,31.82-13.16c13.829-13.828,16.75-34.486,8.782-51.211 l36.125-36.125L471.403,220.825z M373.799,159.416c-5.848,5.848-15.365,5.849-21.214,0c-5.848-5.848-5.848-15.366,0-21.214 c2.925-2.925,6.765-4.386,10.607-4.386c3.84,0,7.682,1.462,10.605,4.385l0.001,0.001l0.001,0.001 C379.648,144.051,379.647,153.568,373.799,159.416z\"></path></g></g><g><g><path d=\"M246.514,180.63c-17.546-17.546-46.096-17.546-63.643,0c-17.545,17.546-17.545,46.096,0,63.643 c17.546,17.546,46.097,17.546,63.643,0C264.061,226.726,264.061,198.177,246.514,180.63z M225.301,223.058\n                c-5.849,5.849-15.366,5.849-21.214,0c-5.848-5.849-5.85-15.366-0.001-21.214c5.849-5.848,15.365-5.849,21.215,0\n                C231.149,207.692,231.149,217.209,225.301,223.058z\"></path></g></g><g><g><path d=\"M267.728,329.128c-17.587-17.587-46.052-17.589-63.642,0c-17.547,17.547-17.547,46.096,0,63.643\n                c17.588,17.587,46.053,17.59,63.642,0C285.275,375.224,285.275,346.675,267.728,329.128z M246.514,371.557\n                c-5.861,5.862-15.352,5.863-21.214,0c-5.848-5.848-5.848-15.366,0-21.214c5.862-5.862,15.352-5.863,21.214,0\n                C252.362,356.191,252.362,365.707,246.514,371.557z\"></path></g></g><g><g><path d=\"M335.673,274.437c-0.915-8.234-8.333-14.168-16.566-13.253l-190.926,21.214c-8.234,0.915-14.168,8.331-13.253,16.566\n                c0.853,7.671,7.347,13.346,14.891,13.346c0.553,0,1.113-0.031,1.675-0.093l190.927-21.214\n                C330.655,290.087,336.589,282.671,335.673,274.437z\"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n          </ion-thumbnail>\n            <span  [ngClass]=\"{  'coupon-card-etting' : !list.isRewardSetting }\">\n\n              <span  *ngIf=\"list.isRewardSetting\">Shop for ₹{{list.minAmount}} or more and Get ₹{{list.discountedAmount}} instant\n                discount on Total Bill</span>\n\n              <span *ngIf=\"!list.isRewardSetting\">Use {{list.couponCode}} and Get ₹{{list.discountedAmount}} instant                discount on Total Bill</span>\n\n              <strong class=\"cost-price\">Instant Discount: ₹{{list.discountedAmount}}</strong>\n            </span>\n          </div>\n          <ion-row class=\"offer-bottom\">\n            <ion-col>\n              <span>Expired Date</span>\n              <span>{{list.expireDate | date : 'dd MMM yyyy'}}</span>\n            </ion-col>\n            <ion-col>\n              <ion-button *ngIf=\"!list.isRewardSetting\" (click)=\"copy(list.couponCode)\"  style=\"width: 144px;\" shape=\"round\">{{list.couponCode}}&nbsp;&nbsp;<ion-icon name=\"copy-outline\"></ion-icon></ion-button>\n              <ion-button *ngIf=\"list.isRewardSetting\"  [routerLink]=\"'/cart'\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\"  style=\"width: 144px;\" shape=\"round\">Reedem Now</ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-card>\n\n\n\n    <ion-row class=\"no-orders\" *ngIf=\"_offerList.length == 0\">\n      <svg\n      style=\"height: 75px;margin-top: 55px;\"\n      version=\"1.0\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"1280.000000pt\"\n      height=\"1024.000000pt\"\n      viewBox=\"0 0 1280.000000 1024.000000\"\n      preserveAspectRatio=\"xMidYMid meet\"\n    >\n      <metadata></metadata>\n      <g\n        transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\"\n        fill=\"#000000\"\n        stroke=\"none\"\n      >\n        <path\n          d=\"M794 10220 c-211 -31 -381 -174 -451 -379 l-22 -66 -1 -4125 c0\n-3587 2 -4132 15 -4180 51 -192 206 -346 400 -395 52 -13 451 -15 3455 -15\n3212 0 3397 1 3430 18 52 26 80 74 80 139 0 64 -18 103 -62 135 l-33 23 -3395\n5 -3395 5 -40 22 c-52 28 -89 68 -114 123 -21 45 -21 47 -21 3263 l0 3217\n5130 0 5130 0 0 -1657 c0 -1637 0 -1658 20 -1691 30 -49 75 -72 141 -72 66 0\n112 26 140 80 18 33 19 121 19 2555 0 2221 -2 2528 -15 2580 -48 190 -188 336\n-385 402 -53 17 -222 18 -5015 19 -2728 1 -4983 -2 -5011 -6z m9937 -332 c51\n-15 114 -69 142 -122 l22 -41 3 -697 3 -698 -5131 0 -5130 0 0 684 c0 741 -1\n729 55 802 13 17 48 44 77 58 l52 26 4934 0 c3716 0 4944 -3 4973 -12z\"\n        />\n        <path\n          d=\"M1280 9571 c-82 -26 -118 -48 -183 -109 -100 -96 -147 -206 -147\n-341 1 -146 40 -242 139 -342 96 -95 202 -139 336 -139 129 1 229 38 319 121\n107 97 156 209 156 354 0 216 -128 393 -329 455 -81 26 -214 26 -291 1z m234\n-335 c20 -15 41 -44 52 -71 14 -39 15 -52 5 -87 -42 -139 -225 -153 -283 -21\n-62 139 105 272 226 179z\"\n        />\n        <path\n          d=\"M2536 9570 c-174 -62 -293 -206 -319 -386 -42 -287 179 -544 467\n-544 136 0 251 46 341 135 162 162 187 418 59 610 -48 74 -103 120 -194 164\n-70 34 -82 36 -185 39 -91 2 -120 -1 -169 -18z m233 -328 c51 -37 73 -82 68\n-135 -5 -61 -30 -96 -89 -125 -57 -29 -105 -23 -153 19 -42 37 -59 79 -53 133\n6 54 31 90 83 116 47 25 105 22 144 -8z\"\n        />\n        <path\n          d=\"M3826 9579 c-118 -28 -245 -133 -300 -249 -69 -142 -69 -287 -1 -426\n118 -243 409 -334 659 -207 62 32 153 122 188 189 142 264 9 597 -273 685 -66\n21 -202 24 -273 8z m190 -328 c55 -25 84 -73 84 -140 0 -45 -5 -56 -36 -91\n-48 -53 -100 -68 -160 -45 -103 39 -135 155 -67 236 49 58 109 72 179 40z\"\n        />\n        <path\n          d=\"M1663 7049 c-118 -58 -118 -231 1 -288 l43 -21 4076 2 4076 3 28 21\nc99 74 99 204 0 278 l-28 21 -4077 3 -4077 2 -42 -21z\"\n        />\n        <path\n          d=\"M1660 5942 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 4082 0 4082 0 33 23 c57 38 75 71 75 137 0 66 -18 99 -75 138 l-33 22\n-4076 0 c-3861 0 -4078 -1 -4111 -18z\"\n        />\n        <path\n          d=\"M8890 5104 c-668 -102 -1236 -517 -1530 -1119 -244 -500 -272 -1095\n-75 -1616 158 -415 463 -782 847 -1016 462 -281 1032 -364 1571 -227 258 65\n524 197 742 368 l59 46 30 -29 30 -30 -17 -38 c-42 -94 -40 -207 4 -302 17\n-35 157 -181 568 -593 l545 -548 352 0 352 0 31 35 c64 73 76 110 76 225 0 95\n-3 110 -27 155 -19 36 -197 220 -655 676 -709 707 -656 664 -818 664 -71 0\n-99 -4 -132 -21 l-42 -21 -30 31 -31 32 61 79 c203 265 336 575 396 920 24\n140 24 490 0 630 -80 460 -282 848 -600 1152 -316 301 -697 487 -1129 548\n-132 19 -450 18 -578 -1z m461 -325 c601 -61 1115 -420 1374 -961 64 -133 104\n-252 136 -403 21 -96 24 -137 24 -325 0 -165 -4 -236 -18 -305 -170 -863 -930\n-1454 -1793 -1394 -604 42 -1144 408 -1409 954 -232 477 -230 1027 5 1496 169\n337 455 618 790 778 284 136 592 191 891 160z m2741 -4591 l-72 -73 -590 590\n-590 590 72 72 73 73 590 -590 590 -590 -73 -72z\"\n        />\n        <path\n          d=\"M8255 4106 c-16 -8 -55 -40 -87 -72 -176 -183 -309 -458 -354 -734\n-23 -139 -14 -389 19 -530 58 -241 170 -454 330 -625 59 -63 80 -78 115 -86\n107 -23 202 49 202 155 0 53 -14 80 -81 158 -160 185 -244 378 -269 613 -32\n288 72 598 273 820 29 33 59 70 65 82 18 33 14 114 -7 153 -35 68 -133 99\n-206 66z\"\n        />\n        <path\n          d=\"M1683 4849 c-69 -20 -123 -111 -108 -182 12 -53 45 -98 89 -118 40\n-18 133 -19 2846 -19 l2806 0 44 23 c50 24 90 88 90 141 0 47 -37 113 -78 138\nl-37 23 -2810 2 c-1697 1 -2823 -2 -2842 -8z\"\n        />\n        <path\n          d=\"M1660 3732 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 2561 0 c2538 0 2561 0 2594 20 103 63 96 233 -11 284 -32 15 -240 16\n-2584 16 -2406 0 -2550 -1 -2583 -18z\"\n        />\n        <path\n          d=\"M1692 2640 c-45 -11 -100 -66 -113 -112 -21 -78 15 -158 85 -189 43\n-19 90 -19 2603 -17 l2558 3 34 24 c37 27 70 90 71 135 0 47 -37 113 -78 138\nl-37 23 -2545 2 c-1400 0 -2560 -3 -2578 -7z\"\n        />\n      </g>\n    </svg>\n    <span style=\"text-align: center;margin-top: 10px;\">No Offers Found</span>\n      </ion-row>\n\n    </ion-row>\n  </ion-grid>\n</ion-list>\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/offers/offers-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/offers/offers-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: OffersPageRoutingModule */

  /***/
  function srcAppPagesOffersOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function () {
      return OffersPageRoutingModule;
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


    var _offers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./offers */
    "./src/app/pages/offers/offers.ts");

    var routes = [{
      path: '',
      component: _offers__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }];

    var OffersPageRoutingModule = function OffersPageRoutingModule() {
      _classCallCheck(this, OffersPageRoutingModule);
    };

    OffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/offers/offers.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/offers/offers.module.ts ***!
    \***********************************************/

  /*! exports provided: OffersPageModule */

  /***/
  function srcAppPagesOffersOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageModule", function () {
      return OffersPageModule;
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


    var _offers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offers */
    "./src/app/pages/offers/offers.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _offers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./offers-routing.module */
    "./src/app/pages/offers/offers-routing.module.ts");

    var OffersPageModule = function OffersPageModule() {
      _classCallCheck(this, OffersPageModule);
    };

    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_7__["OffersPageRoutingModule"]],
      declarations: [_offers__WEBPACK_IMPORTED_MODULE_5__["OffersPage"]],
      entryComponents: [],
      providers: [_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]]
    })], OffersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/offers/offers.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/offers/offers.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOffersOffersScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noRecordsFound {\n  margin-left: 31%;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\nion-content {\n  --background:var(--ion-offer-backgorund);\n}\n\n.total-points {\n  background: var(--ion-offer-bg-color);\n  text-align: center;\n  color: #fff;\n  position: relative;\n}\n\n.total-points:after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 500px solid transparent;\n  border-right: 0px solid transparent;\n  border-bottom: 75px solid var(--ion-offer-backgorund);\n  position: absolute;\n  bottom: -3px;\n  left: -20px;\n}\n\n.total-points-group {\n  padding: 15px 0px 100px;\n}\n\n.total-points-group::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -50px;\n  height: 250px;\n  width: 250px;\n  left: -80px;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.total-points-group::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -70px;\n  height: 200px;\n  width: 200px;\n  left: 100px;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.total-points-group p {\n  margin-top: 0px;\n}\n\n.total-points-group h2 {\n  font-size: 42px;\n}\n\n.total-points-group span {\n  font-size: 16px;\n}\n\n.offer-list {\n  margin-top: -110px;\n  background: transparent;\n}\n\n.offer-card {\n  position: relative;\n  border-left: 50px solid #713D88;\n  padding: 15px 15px;\n  overflow: inherit;\n  border-radius: 10px;\n  -o-object-fit: inherit;\n     object-fit: inherit;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);\n}\n\n.rotate-heading {\n  letter-spacing: 3px;\n  position: absolute;\n  top: 46%;\n  left: -60px;\n  transform: rotate(270deg);\n  z-index: 999;\n  color: #fff;\n}\n\n.offer-content .offer-top {\n  display: flex;\n  margin-bottom: 10px;\n  color: var(--ion-text-color);\n}\n\n.offer-content .offer-top ion-thumbnail {\n  width: 160px;\n  margin-right: 15px;\n  text-align: center;\n}\n\n.offer-bottom span,\n.offer-bottom strong {\n  display: block;\n  color: var(--ion-text-color);\n}\n\n.offer-card:nth-child(2n-5) {\n  border-left-color: #4F7E91;\n}\n\n.offer-card:nth-child(3n-6) {\n  border-left-color: #1288BB;\n}\n\n.offer-card:nth-child(4n-7) {\n  border-left-color: #77B5CE;\n}\n\n.offer-bottom ion-button {\n  margin-bottom: 0px;\n  border-radius: 30px;\n  --background: #713D88;\n}\n\n.offer-card:nth-child(1) .offer-bottom ion-button {\n  --background: #77b5ce !important;\n}\n\n.offer-card:nth-child(2n-5) .offer-bottom ion-button {\n  --background: #4F7E91;\n}\n\n.offer-card:nth-child(3n-6) .offer-bottom ion-button {\n  --background: #1288BB;\n}\n\n.offer-card:nth-child(4n-7) .offer-bottom ion-button {\n  --background: #77B5CE;\n}\n\n.offer-card::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  left: -50px;\n  background-color: var(--ion-offer-backgorund);\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.offer-card::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  right: -20px;\n  background-color: var(--ion-offer-backgorund);\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.offer-card:nth-child(1) {\n  border-left-color: #77b5ce !important;\n}\n\n.offer-card:nth-child(1)::before {\n  background: var(--ion-offer-bg-color);\n}\n\n.offer-img {\n  width: 40px;\n  height: 60px;\n  margin: 0 auto;\n  fill: var(--ion-text-color);\n}\n\n.cost-price {\n  display: block;\n  color: var(--ion-bggreen-light);\n  margin-top: 5px;\n}\n\n.coupon-card-etting {\n  margin-right: 76px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9vZmZlcnMvb2ZmZXJzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29mZmVycy9vZmZlcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3Q0FBQTtBQ0VGOztBREFBO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLHVCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtBQ1NGOztBRFBBO0VBQ0UsZUFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ1dGOztBRFRBO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSw0Q0FBQTtBQ1lGOztBRFZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2FGOztBRFhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNjRjs7QURaQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZUY7O0FEYkE7O0VBRUUsY0FBQTtFQUNBLDRCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsMEJBQUE7QUNpQkY7O0FEZkE7RUFDRSwwQkFBQTtBQ2tCRjs7QURoQkE7RUFDRSwwQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsZ0NBQUE7QUNxQkY7O0FEbkJBO0VBQ0UscUJBQUE7QUNzQkY7O0FEcEJBO0VBQ0UscUJBQUE7QUN1QkY7O0FEckJBO0VBQ0UscUJBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUN5QkY7O0FEdkJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUMwQkY7O0FEeEJBO0VBQ0UscUNBQUE7QUMyQkY7O0FEekJBO0VBQ0UscUNBQUE7QUM0QkY7O0FEMUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUM2QkY7O0FEM0JBO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQzhCRjs7QUQzQkE7RUFDRSxrQkFBQTtBQzhCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29mZmVycy9vZmZlcnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub1JlY29yZHNGb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbn1cbi50b3RhbC1wb2ludHN7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50b3RhbC1wb2ludHM6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3NXB4IHNvbGlkIHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuLnRvdGFsLXBvaW50cy1ncm91cHtcbiAgcGFkZGluZzogMTVweCAwcHggMTAwcHg7XG59XG4udG90YWwtcG9pbnRzLWdyb3VwOjpiZWZvcmV7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbGVmdDogLTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi50b3RhbC1wb2ludHMtZ3JvdXA6OmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4udG90YWwtcG9pbnRzLWdyb3VwIHB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi50b3RhbC1wb2ludHMtZ3JvdXAgaDJ7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cbi50b3RhbC1wb2ludHMtZ3JvdXAgc3BhbntcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm9mZmVyLWxpc3R7XG4gIG1hcmdpbi10b3A6IC0xMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ub2ZmZXItY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjNzEzRDg4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBpbmhlcml0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbi5yb3RhdGUtaGVhZGluZ3tcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogLTYwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmY7XG59XG4ub2ZmZXItY29udGVudCAub2ZmZXItdG9we1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLm9mZmVyLWNvbnRlbnQgLm9mZmVyLXRvcCBpb24tdGh1bWJuYWlse1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9mZmVyLWJvdHRvbSBzcGFuLFxuLm9mZmVyLWJvdHRvbSBzdHJvbmd7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDJuLTUpe1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRGN0U5MTtcbn1cbi5vZmZlci1jYXJkOm50aC1jaGlsZCgzbi02KXtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMjg4QkI7XG59XG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoNG4tNyl7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNzdCNUNFO1xufVxuLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9ue1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzcxM0Q4ODtcbn1cbi5vZmZlci1jYXJkOm50aC1jaGlsZCgxKSAub2ZmZXItYm90dG9tIGlvbi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDJuLTUpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjNEY3RTkxO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDNuLTYpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjMTI4OEJCO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDRuLTcpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjNzdCNUNFO1xufVxuLm9mZmVyLWNhcmQ6OmJlZm9yZXtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGVmdDogLTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm9mZmVyLWNhcmQ6OmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICByaWdodDogLTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDEpe1xuICBib3JkZXItbGVmdC1jb2xvcjogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDEpOjpiZWZvcmV7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG59XG4ub2ZmZXItaW1ne1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmlsbDogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLmNvc3QtcHJpY2V7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLWJnZ3JlZW4tbGlnaHQpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb3Vwb24tY2FyZC1ldHRpbmd7XG4gIG1hcmdpbi1yaWdodDogNzZweDtcbn1cbiIsIi5ub1JlY29yZHNGb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbn1cblxuLnRvdGFsLXBvaW50cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvdGFsLXBvaW50czphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3NXB4IHNvbGlkIHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4udG90YWwtcG9pbnRzLWdyb3VwIHtcbiAgcGFkZGluZzogMTVweCAwcHggMTAwcHg7XG59XG5cbi50b3RhbC1wb2ludHMtZ3JvdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbGVmdDogLTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLnRvdGFsLXBvaW50cy1ncm91cDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi50b3RhbC1wb2ludHMtZ3JvdXAgcCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRvdGFsLXBvaW50cy1ncm91cCBoMiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLnRvdGFsLXBvaW50cy1ncm91cCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ub2ZmZXItbGlzdCB7XG4gIG1hcmdpbi10b3A6IC0xMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5vZmZlci1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjNzEzRDg4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBpbmhlcml0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuLnJvdGF0ZS1oZWFkaW5nIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogLTYwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vZmZlci1jb250ZW50IC5vZmZlci10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ub2ZmZXItY29udGVudCAub2ZmZXItdG9wIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub2ZmZXItYm90dG9tIHNwYW4sXG4ub2ZmZXItYm90dG9tIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMm4tNSkge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRGN0U5MTtcbn1cblxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDNuLTYpIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMjg4QkI7XG59XG5cbi5vZmZlci1jYXJkOm50aC1jaGlsZCg0bi03KSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNzdCNUNFO1xufVxuXG4ub2ZmZXItYm90dG9tIGlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzcxM0Q4ODtcbn1cblxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDEpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMm4tNSkgLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNEY3RTkxO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoM24tNikgLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTI4OEJCO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoNG4tNykgLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzdCNUNFO1xufVxuXG4ub2ZmZXItY2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGVmdDogLTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ub2ZmZXItY2FyZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICByaWdodDogLTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMSkge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG59XG5cbi5vZmZlci1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmlsbDogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uY29zdC1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLWJnZ3JlZW4tbGlnaHQpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb3Vwb24tY2FyZC1ldHRpbmcge1xuICBtYXJnaW4tcmlnaHQ6IDc2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/offers/offers.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/offers/offers.ts ***!
    \****************************************/

  /*! exports provided: OffersPage */

  /***/
  function srcAppPagesOffersOffersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPage", function () {
      return OffersPage;
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


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var OffersPage = /*#__PURE__*/function () {
      function OffersPage(_ProductService, clipboard, toastController, _Router) {
        _classCallCheck(this, OffersPage);

        this._ProductService = _ProductService;
        this.clipboard = clipboard;
        this.toastController = toastController;
        this._Router = _Router;
        this.filter = '';
        this.searchproductList = [];
        this.reedemCount = 0;
        this._offerList = [];
        this.cartCount = 0;
        this.showSearchBox = false;
      }

      _createClass(OffersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filter = this._Router.snapshot.params.filter == 'all' ? '' : this._Router.snapshot.params.filter; // if(filter){
          // }
          // console.log(this.orderId, "orderId")

          this.getProductList();
          this.fetchOffers();
          this.getCashbacks();
        }
      }, {
        key: "getCashbacks",
        value: function getCashbacks() {
          var _this = this;

          this._ProductService.getCashBacks(localStorage.getItem('userId')).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var list;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(res);

                      if (res) {
                        list = res['data'];

                        if (list) {
                          list.forEach(function (val) {
                            _this2.reedemCount = _this2.reedemCount + val.amount;
                          });
                        }
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          });
        }
      }, {
        key: "onFilterChange",
        value: function onFilterChange() {
          console.log(this.filter);
          this.fetchOffers();
        }
      }, {
        key: "fetchOffers",
        value: function fetchOffers() {
          var _this3 = this;

          this.getCartCount();

          this._ProductService.listOffer(this.filter).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var arr;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(res);

                      if (res) {
                        this._offerList = res["data"];
                        arr = [];

                        this._offerList.forEach(function (offer) {
                          if (new Date(offer.expireDate).getTime() > new Date().getTime()) {
                            console.log(offer.expireDate);
                            arr.push(offer);
                          }
                        });

                        console.log(arr.length);
                        this._offerList = arr;
                      }

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "copy",
        value: function copy(code) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(code, ":: code ");
                    this.clipboard.clear();
                    this.clipboard.copy(code);
                    _context3.next = 5;
                    return this.toastController.create({
                      message: "Offer Code Copied",
                      duration: 2000,
                      position: "bottom",
                      color: 'success',
                      animated: true
                    });

                  case 5:
                    toast = _context3.sent;
                    toast.present(); // this.toast.

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "enableSearch",
        value: function enableSearch() {
          this.showSearchBox = true;
        }
      }, {
        key: "backToNormal",
        value: function backToNormal() {
          this.showSearchBox = false;
        }
      }, {
        key: "getProductList",
        value: function getProductList() {
          var _this4 = this;

          this._ProductService.getProductList(localStorage.getItem('shopID')).subscribe(function (data) {
            _this4.productList = data;
            console.log(_this4.productList);
          });
        }
      }, {
        key: "getCartCount",
        value: function getCartCount() {
          var _this5 = this;

          var shopId = localStorage.getItem('shopID');

          this._ProductService.cartList(localStorage.getItem("userId"), shopId).subscribe(function (data) {
            if (data.length) {
              _this5.cartCount = data[0].productDetails.length;
            }
          });
        }
      }, {
        key: "openSocial",
        value: function openSocial(network, fab) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }]);

      return OffersPage;
    }();

    OffersPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-offers",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offers.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offers.scss */
      "./src/app/pages/offers/offers.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], OffersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-offers-offers-module-es5.js.map