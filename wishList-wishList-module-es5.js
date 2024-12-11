function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishList-wishList-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishList/wishList.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishList/wishList.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWishListWishListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button *ngIf=\"!showSearchBox\" style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n      <ion-icon\n        style=\"margin-left: 10px\"\n        *ngIf=\"showSearchBox\"\n        (click)=\"backToNormal()\"\n        name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title> Favourite </ion-title>\n\n    <ion-buttons *ngIf=\"!showSearchBox\" slot=\"end\">\n      <ion-button routerLink=\"/search/wishList\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<span class=\"delivery-address\" *ngIf=\"wishList.length > 0\">\n  <span style=\"text-transform: capitalize\"\n    >Total Cars : {{wishList.length}}</span\n  >\n</span>\n\n<ion-content *ngIf=\"isDataLoaded; else skeleton\">\n  <div class=\"content-section\">\n    <ion-item class=\"productItem\" *ngFor=\"let cart of wishList\">\n      <ion-grid *ngIf=\"wishList.length !== 0\" class=\"horizontalPadding\">\n        <ion-row>\n          <ion-col\n            size=\"7\"\n            [routerLink]=\"['/productDetails/'+ cart.productId._id ]\">\n            <!-- <p class=\"product-img\"> -->\n            <img\n              class=\"wishlist-pro-img\"\n              style=\"height: 134px\"\n              *ngIf=\"cart.productId.imageVarients.length !== 0\"\n              src=\"{{cart.productId.imageVarients[0]}}\" />\n\n            <!-- <img class=\"wishlist-pro-img\" *ngIf=\"cart.productId.imageVarients.length !== 0\" src=\"{{cart.productId.imageVarients[0]}}\"> -->\n            <img\n              class=\"wishlist-pro-img\"\n              *ngIf=\"cart.productId.imageVarients == 0 \"\n              src=\"https://im.rediff.com/getahead/2015/jun/29chicken.jpg\" />\n            <!-- <span class=\"offer\" *ngIf=\"cart.productId.discount\"\n              >{{cart.productId.discount}} OFF</span\n            > -->\n            <!-- </p> -->\n          </ion-col>\n          <ion-col [routerLink]=\"['/productDetails/'+ cart._id ]\">\n            <ion-label>\n              <p class=\"wishlit-name\">\n                <!-- <img src=\"../../../assets/img/vag.png\" class=\"vagnon-image-small\">  -->\n\n                {{cart.productId.productName}}\n              </p>\n              <p class=\"wishlist-rating-star\">\n                <!-- <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" /> <strong> {{cart.productId.rating}}</strong> -->\n              </p>\n              <span class=\"wishlist-price\">\n                ₹&nbsp;{{cart.productId.price}} </span\n              ><br />\n              <ion-text class=\"cashback-label\" *ngIf=\"cart.productId.discount\"\n                >₹ {{cart.productId.discount}} Cashback\n              </ion-text>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-row class=\"no-orders\" *ngIf=\"wishList.length == 0\">\n      <svg\n        style=\"height: 75px; margin-top: 55px\"\n        version=\"1.0\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"1280.000000pt\"\n        height=\"1024.000000pt\"\n        viewBox=\"0 0 1280.000000 1024.000000\"\n        preserveAspectRatio=\"xMidYMid meet\">\n        <metadata></metadata>\n        <g\n          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\"\n          fill=\"#000000\"\n          stroke=\"none\">\n          <path\n            d=\"M794 10220 c-211 -31 -381 -174 -451 -379 l-22 -66 -1 -4125 c0\n-3587 2 -4132 15 -4180 51 -192 206 -346 400 -395 52 -13 451 -15 3455 -15\n3212 0 3397 1 3430 18 52 26 80 74 80 139 0 64 -18 103 -62 135 l-33 23 -3395\n5 -3395 5 -40 22 c-52 28 -89 68 -114 123 -21 45 -21 47 -21 3263 l0 3217\n5130 0 5130 0 0 -1657 c0 -1637 0 -1658 20 -1691 30 -49 75 -72 141 -72 66 0\n112 26 140 80 18 33 19 121 19 2555 0 2221 -2 2528 -15 2580 -48 190 -188 336\n-385 402 -53 17 -222 18 -5015 19 -2728 1 -4983 -2 -5011 -6z m9937 -332 c51\n-15 114 -69 142 -122 l22 -41 3 -697 3 -698 -5131 0 -5130 0 0 684 c0 741 -1\n729 55 802 13 17 48 44 77 58 l52 26 4934 0 c3716 0 4944 -3 4973 -12z\" />\n          <path\n            d=\"M1280 9571 c-82 -26 -118 -48 -183 -109 -100 -96 -147 -206 -147\n-341 1 -146 40 -242 139 -342 96 -95 202 -139 336 -139 129 1 229 38 319 121\n107 97 156 209 156 354 0 216 -128 393 -329 455 -81 26 -214 26 -291 1z m234\n-335 c20 -15 41 -44 52 -71 14 -39 15 -52 5 -87 -42 -139 -225 -153 -283 -21\n-62 139 105 272 226 179z\" />\n          <path\n            d=\"M2536 9570 c-174 -62 -293 -206 -319 -386 -42 -287 179 -544 467\n-544 136 0 251 46 341 135 162 162 187 418 59 610 -48 74 -103 120 -194 164\n-70 34 -82 36 -185 39 -91 2 -120 -1 -169 -18z m233 -328 c51 -37 73 -82 68\n-135 -5 -61 -30 -96 -89 -125 -57 -29 -105 -23 -153 19 -42 37 -59 79 -53 133\n6 54 31 90 83 116 47 25 105 22 144 -8z\" />\n          <path\n            d=\"M3826 9579 c-118 -28 -245 -133 -300 -249 -69 -142 -69 -287 -1 -426\n118 -243 409 -334 659 -207 62 32 153 122 188 189 142 264 9 597 -273 685 -66\n21 -202 24 -273 8z m190 -328 c55 -25 84 -73 84 -140 0 -45 -5 -56 -36 -91\n-48 -53 -100 -68 -160 -45 -103 39 -135 155 -67 236 49 58 109 72 179 40z\" />\n          <path\n            d=\"M1663 7049 c-118 -58 -118 -231 1 -288 l43 -21 4076 2 4076 3 28 21\nc99 74 99 204 0 278 l-28 21 -4077 3 -4077 2 -42 -21z\" />\n          <path\n            d=\"M1660 5942 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 4082 0 4082 0 33 23 c57 38 75 71 75 137 0 66 -18 99 -75 138 l-33 22\n-4076 0 c-3861 0 -4078 -1 -4111 -18z\" />\n          <path\n            d=\"M8890 5104 c-668 -102 -1236 -517 -1530 -1119 -244 -500 -272 -1095\n-75 -1616 158 -415 463 -782 847 -1016 462 -281 1032 -364 1571 -227 258 65\n524 197 742 368 l59 46 30 -29 30 -30 -17 -38 c-42 -94 -40 -207 4 -302 17\n-35 157 -181 568 -593 l545 -548 352 0 352 0 31 35 c64 73 76 110 76 225 0 95\n-3 110 -27 155 -19 36 -197 220 -655 676 -709 707 -656 664 -818 664 -71 0\n-99 -4 -132 -21 l-42 -21 -30 31 -31 32 61 79 c203 265 336 575 396 920 24\n140 24 490 0 630 -80 460 -282 848 -600 1152 -316 301 -697 487 -1129 548\n-132 19 -450 18 -578 -1z m461 -325 c601 -61 1115 -420 1374 -961 64 -133 104\n-252 136 -403 21 -96 24 -137 24 -325 0 -165 -4 -236 -18 -305 -170 -863 -930\n-1454 -1793 -1394 -604 42 -1144 408 -1409 954 -232 477 -230 1027 5 1496 169\n337 455 618 790 778 284 136 592 191 891 160z m2741 -4591 l-72 -73 -590 590\n-590 590 72 72 73 73 590 -590 590 -590 -73 -72z\" />\n          <path\n            d=\"M8255 4106 c-16 -8 -55 -40 -87 -72 -176 -183 -309 -458 -354 -734\n-23 -139 -14 -389 19 -530 58 -241 170 -454 330 -625 59 -63 80 -78 115 -86\n107 -23 202 49 202 155 0 53 -14 80 -81 158 -160 185 -244 378 -269 613 -32\n288 72 598 273 820 29 33 59 70 65 82 18 33 14 114 -7 153 -35 68 -133 99\n-206 66z\" />\n          <path\n            d=\"M1683 4849 c-69 -20 -123 -111 -108 -182 12 -53 45 -98 89 -118 40\n-18 133 -19 2846 -19 l2806 0 44 23 c50 24 90 88 90 141 0 47 -37 113 -78 138\nl-37 23 -2810 2 c-1697 1 -2823 -2 -2842 -8z\" />\n          <path\n            d=\"M1660 3732 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 2561 0 c2538 0 2561 0 2594 20 103 63 96 233 -11 284 -32 15 -240 16\n-2584 16 -2406 0 -2550 -1 -2583 -18z\" />\n          <path\n            d=\"M1692 2640 c-45 -11 -100 -66 -113 -112 -21 -78 15 -158 85 -189 43\n-19 90 -19 2603 -17 l2558 3 34 24 c37 27 70 90 71 135 0 47 -37 113 -78 138\nl-37 23 -2545 2 c-1400 0 -2560 -3 -2578 -7z\" />\n        </g>\n      </svg>\n      <span style=\"text-align: center; margin-top: 10px\"\n        >No Products Found</span\n      >\n    </ion-row>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"getwishList($event)\">\n      <ion-refresher-content\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n  </div>\n</ion-content>\n\n<ng-template #skeleton>\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1, 2, 3, 4, 5,6,7,8,9]\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ng-template>\n";
    /***/
  },

  /***/
  "./src/app/pages/wishList/wishList-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/wishList/wishList-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: WishListPageRoutingModule */

  /***/
  function srcAppPagesWishListWishListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListPageRoutingModule", function () {
      return WishListPageRoutingModule;
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


    var _wishList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wishList */
    "./src/app/pages/wishList/wishList.ts");

    var routes = [{
      path: '',
      component: _wishList__WEBPACK_IMPORTED_MODULE_3__["WishListPage"]
    }];

    var WishListPageRoutingModule = function WishListPageRoutingModule() {
      _classCallCheck(this, WishListPageRoutingModule);
    };

    WishListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WishListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/wishList/wishList.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/wishList/wishList.module.ts ***!
    \***************************************************/

  /*! exports provided: WishListModule */

  /***/
  function srcAppPagesWishListWishListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListModule", function () {
      return WishListModule;
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


    var _wishList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wishList */
    "./src/app/pages/wishList/wishList.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _wishList_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wishList-routing.module */
    "./src/app/pages/wishList/wishList-routing.module.ts");

    var WishListModule = function WishListModule() {
      _classCallCheck(this, WishListModule);
    };

    WishListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wishList_routing_module__WEBPACK_IMPORTED_MODULE_7__["WishListPageRoutingModule"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]],
      declarations: [_wishList__WEBPACK_IMPORTED_MODULE_5__["WishListPage"]],
      entryComponents: []
    })], WishListModule);
    /***/
  },

  /***/
  "./src/app/pages/wishList/wishList.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/wishList/wishList.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWishListWishListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-badge {\n  margin-top: -8px;\n  color: orange;\n  --background: transparent;\n}\n\n.vagnon-image-small {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.noRecordsFound {\n  margin-left: 31%;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.vagnon-image {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.move-to-cart {\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid #ccc;\n  padding: 5px 5px;\n  display: block;\n  margin-top: 12px;\n}\n\n.wishlit-name {\n  font-size: 15px;\n  font-weight: 500;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  display: block;\n  margin: 0px;\n  text-transform: capitalize;\n  color: var(--ion-text-color);\n}\n\n.trading-price {\n  font-size: 14px;\n}\n\n.wishlist-rating-star {\n  margin-top: 5px;\n  color: var(--ion-small-color);\n  font-size: 12px;\n}\n\n.wishlist-rating-star img {\n  width: 14px;\n  display: inline-block;\n  margin-right: 3px;\n}\n\n.wishlist-pro-img {\n  width: 100%;\n  height: 80px;\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.delivery-address {\n  background-color: var(--ion-gray-backgorund);\n  color: var(--ion-text-color);\n  padding: 10px 10px;\n  cursor: pointer;\n}\n\n.product-img {\n  position: relative;\n  margin: 0px;\n  background-image: cover;\n}\n\n.product-img span.offer {\n  position: absolute;\n  left: -6px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.product-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: 0px;\n  bottom: -5px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.cashback-label {\n  color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy93aXNoTGlzdC93aXNoTGlzdC5zY3NzIiwic3JjL2FwcC9wYWdlcy93aXNoTGlzdC93aXNoTGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDUUY7O0FETkE7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDU0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ1FGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7QUNVRjs7QURQQTtFQUNFLFlBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpc2hMaXN0L3dpc2hMaXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2V7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4udmFnbm9uLWltYWdlLXNtYWxse1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xufVxuLm5vUmVjb3Jkc0ZvdW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDMxJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZhZ25vbi1pbWFnZXtcbiAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1vdmUtdG8tY2FydHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLndpc2hsaXQtbmFtZXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG4udHJhZGluZy1wcmljZXtcbiAgZm9udC1zaXplOjE0cHg7XG59XG4ud2lzaGxpc3QtcmF0aW5nLXN0YXJ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1zbWFsbC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi53aXNobGlzdC1yYXRpbmctc3RhciBpbWd7XG4gIHdpZHRoOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLndpc2hsaXN0LXByby1pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uZGVsaXZlcnktYWRkcmVzc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdyYXktYmFja2dvcnVuZCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5wcm9kdWN0LWltZ3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogY292ZXI7XG59XG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtaW1nIHNwYW4ub2ZmZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMHB4O1xuICBib3R0b206IC01cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5jYXNoYmFjay1sYWJlbHtcbiAgY29sb3I6IGJyb3duO1xufSIsImlvbi1iYWRnZSB7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi52YWdub24taW1hZ2Utc21hbGwge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogMzElO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFnbm9uLWltYWdlIHtcbiAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1vdmUtdG8tY2FydCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLndpc2hsaXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4udHJhZGluZy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndpc2hsaXN0LXJhdGluZy1zdGFyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ud2lzaGxpc3QtcmF0aW5nLXN0YXIgaW1nIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi53aXNobGlzdC1wcm8taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmRlbGl2ZXJ5LWFkZHJlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ3JheS1iYWNrZ29ydW5kKTtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9kdWN0LWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGNvdmVyO1xufVxuXG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByb2R1Y3QtaW1nIHNwYW4ub2ZmZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMHB4O1xuICBib3R0b206IC01cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5jYXNoYmFjay1sYWJlbCB7XG4gIGNvbG9yOiBicm93bjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/wishList/wishList.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/wishList/wishList.ts ***!
    \********************************************/

  /*! exports provided: WishListPage */

  /***/
  function srcAppPagesWishListWishListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListPage", function () {
      return WishListPage;
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


    var _providers_product_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/product.services */
    "./src/app/providers/product.services.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");

    var WishListPage = /*#__PURE__*/function () {
      function WishListPage(_ProductService, toastController, imageLoader, imageLoaderConfig) {
        _classCallCheck(this, WishListPage);

        this._ProductService = _ProductService;
        this.toastController = toastController;
        this.imageLoader = imageLoader;
        this.imageLoaderConfig = imageLoaderConfig;
        this.wishList = [];
        this.cartCount = 0;
        this.addTocartCss = false;
        this.noRecordsFound = true;
        this.isDataLoaded = false;
        this.isSearchEnable = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/';
        this.searchproductList = [];
        this.showSearchBox = false;
        this.refershDefault = {
          target: {
            complete: function complete() {
              return true;
            }
          }
        }; // this.imageLoaderConfig.setFallbackUrl('assets/img/1.png');
      }

      _createClass(WishListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getwishList();
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
        key: "getwishList",
        value: function getwishList() {
          var _this = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.refershDefault;
          // this.imageLoader.clearCache();
          var shopId = localStorage.getItem('shopID');

          this._ProductService.getAllWishList(localStorage.getItem('userId'), shopId).subscribe(function (data) {
            console.log(data, "data");
            _this.isDataLoaded = true;

            if (data.length !== 0) {
              // setTimeout(()=>{
              _this.wishList = data[0].productDetails; // this.wishList.forEach((cart) => {
              //   cart.price =
              //     this.convertIntoLakh(cart.productId.price)
              // });
              // },2000)

              console.log(_this.wishList, "wishList");
              _this.noRecordsFound = false;
            } else {
              _this.noRecordsFound = true;
            }

            if (event) {}

            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 1500);
          });
        }
      }, {
        key: "convertIntoLakh",
        value: function convertIntoLakh(value) {
          console.log(value, "value");
          var arr = value.split("-");
          console.log(arr, "arr");
          var v1 = '';
          var v2 = '';

          if (arr.length == 2) {
            v1 = Math.abs(arr[0]);
            v2 = Math.abs(arr[1]);
            v1 = (v1 / 100000).toFixed(2);
            v2 = (v2 / 100000).toFixed(2);
          } else {
            v1 = Math.abs(arr[0]);
            v1 = (v1 / 100000).toFixed(2);
          }

          var second = v2 ? " - " + v2 : '';
          return v1 + second + ' Lakh';
        }
      }, {
        key: "onImageLoad",
        value: function onImageLoad(event) {
          console.log("loaded img", event);
        }
      }, {
        key: "removeToWishList",
        value: function removeToWishList(productData) {
          var _this2 = this;

          var payload = {
            productDetails: {
              productId: productData.productId._id
            },
            UserId: localStorage.getItem('userId'),
            shopId: localStorage.getItem('shopID')
          };
          console.log(payload);

          this._ProductService.AddToWishCart('remove', payload).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (data) {
                        console.log(data, "data");
                        this.getwishList();
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "moveTocart",
        value: function moveTocart(cart) {
          var _this3 = this;

          var payload = {
            productDetails: {
              productId: cart.productId._id,
              productCount: 1
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem('shopID')
          };

          this._ProductService.addToCart("add", payload).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!data) {
                        _context2.next = 9;
                        break;
                      }

                      this.addTocartCss = true;
                      this.removeToWishList(cart);
                      _context2.next = 5;
                      return this.toastController.create({
                        message: "Moved To Cart",
                        duration: 3000,
                        position: "bottom",
                        animated: true
                      });

                    case 5:
                      toast = _context2.sent;
                      toast.present();
                      this.getCartCount();
                      setTimeout(function () {
                        this.addTocartCss = false;
                      }, 1000);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "getCartCount",
        value: function getCartCount() {
          var _this4 = this;

          var shopId = localStorage.getItem('shopID');
          var arr = [];

          this._ProductService.cartList(localStorage.getItem("userId"), shopId).subscribe(function (data) {
            if (data.length !== 0) {
              _this4.cartCount = data[0].productDetails.length;
            }
          });
        }
      }]);

      return WishListPage;
    }();

    WishListPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderService"]
      }, {
        type: ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderConfigService"]
      }];
    };

    WishListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-wishList',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishList.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishList/wishList.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishList.scss */
      "./src/app/pages/wishList/wishList.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderService"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderConfigService"]])], WishListPage);
    /***/
  }
}]);
//# sourceMappingURL=wishList-wishList-module-es5.js.map