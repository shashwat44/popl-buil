function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrdersHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button *ngIf=\"!showSearchBox\" style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n      <ion-icon\n        style=\"margin-left: 10px\"\n        *ngIf=\"showSearchBox\"\n        (click)=\"backToNormal()\"\n        name=\"arrow-back-outline\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title> Your Orders </ion-title>\n\n    <ion-buttons *ngIf=\"!showSearchBox\" slot=\"end\" routerLink=\"/search/orders\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/cart\">\n        <ion-icon slot=\"icon-only\" name=\"cart\" style=\"color: white\"></ion-icon>\n      </ion-button>\n      <ion-badge\n        style=\"\n          margin-top: -8px;\n          margin-left: -8px;\n          color: orange;\n          background: transparent;\n        \"\n        *ngIf=\"cartCount != 0\"\n        >{{cartCount}}</ion-badge\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"!isSearchEnable\" class=\"order-content\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"getorderList($event)\">\n    <ion-refresher-content\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid class=\"order-list\" *ngIf=\"orderList.length != 0\">\n    <!-- <ion-list-header color=\"light\"><span class=\"page_header\"> &nbsp; {{orderList.length}} &nbsp;Search Results (0.41 seconds)  </span></ion-list-header> -->\n    <ion-row *ngFor=\"let order of orderList\">\n      <div\n        class=\"order-info\"\n        [routerLink]=\"['/order-details/'+ order.orderId ]\"\n      >\n        <ion-label>\n          <h6 style=\"text-transform: capitalize\">\n            {{order.productName}} &nbsp;<span *ngIf=\"order.orderCount !== '1'\"\n              >+{{order.orderCount-1}} more</span\n            >\n          </h6>\n          <!-- <p><span class=\"active-dot\"></span>{{order.orderStatus}} </p> <span class=\"order_status\" *ngIf=\"list.orderStatus == 'PACKED'\">Packed </span> -->\n          <p class=\"order-status\" *ngIf=\"order.orderStatus == 'CREATED'\">\n            <span class=\"order-place\"></span> Order Placed\n          </p>\n          <p\n            class=\"order-status\"\n            *ngIf=\"order.orderStatus == 'OUT_FOR_DELIVERY'\"\n          >\n            <span class=\"out-delivery\"></span> Out For Delivery\n          </p>\n          <p class=\"order-status\" *ngIf=\"order.orderStatus == 'DELIVERED'\">\n            <span class=\"Deliverd\"></span> Delivered\n          </p>\n          <p class=\"order-status\" *ngIf=\"order.orderStatus == 'ON_HOLD'\">\n            <span class=\"on-hold\"></span> On Hold\n          </p>\n          <p class=\"order-status\" *ngIf=\"order.orderStatus == 'PACKED'\">\n            <span class=\"packed\"></span> Packed\n          </p>\n\n          <p class=\"order-total\">\n            <span style=\"text-transform: capitalize\">Total Order Cost</span>\n            <span class=\"total_cost\">₹ {{order.OrderTotal}}</span>\n          </p>\n          <!-- <p>{{order.productPrice}} </p> -->\n          <!-- <span style=\"float: right;\">QTY&nbsp; {{order.QTY}}</span> -->\n        </ion-label>\n        <ion-thumbnail slot=\"start\">\n          <img-loader\n            *ngIf=\"order.productId.imageVarients.length\"\n            src=\"{{order.productId.imageVarients[0]}}\"\n          >\n          </img-loader>\n          <!-- <img *ngIf=\"order.productId.imageVarients.length != 0\" src=\"{{order.productId.imageVarients[0]}}\"> -->\n\n          <!-- <img-loader *ngIf=\"!order.productId.imageVarients.length\"\n          src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOcR3YlsuwuwDc4K5LFFCo2U4mqWh8gcvW8g938ye2YC5ccUog&usqp=CAU\">\n        </img-loader> -->\n          <!-- <img *ngIf=\"order.productId.imageVarients.length == 0\"\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOcR3YlsuwuwDc4K5LFFCo2U4mqWh8gcvW8g938ye2YC5ccUog&usqp=CAU\"> -->\n        </ion-thumbnail>\n      </div>\n      <!-- <div class=\"order-ratings\"> -->\n      <!-- <ion-row> -->\n      <!-- <div class=\"rating-align\"> -->\n      <!-- {{order.rating}} -->\n      <!-- <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\" (click)=\"rate(num,order._id)\" [ngStyle]=\"{'fill':getColor(num,order.rating)}\">\n            </ion-icon> -->\n      <!-- </div> -->\n      <!-- </ion-row> -->\n      <!-- <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star\"></i> -->\n      <!-- <a routerLink=\"/review/{{order.orderId}}\">Write a Review</a> -->\n\n      <!-- </div> -->\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadOrderData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-row class=\"no-orders\" *ngIf=\"orderList.length == 0\">\n    <svg\n      style=\"height: 75px\"\n      version=\"1.0\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"1280.000000pt\"\n      height=\"1024.000000pt\"\n      viewBox=\"0 0 1280.000000 1024.000000\"\n      preserveAspectRatio=\"xMidYMid meet\"\n    >\n      <metadata></metadata>\n      <g\n        transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\"\n        fill=\"#000000\"\n        stroke=\"none\"\n      >\n        <path\n          d=\"M794 10220 c-211 -31 -381 -174 -451 -379 l-22 -66 -1 -4125 c0\n-3587 2 -4132 15 -4180 51 -192 206 -346 400 -395 52 -13 451 -15 3455 -15\n3212 0 3397 1 3430 18 52 26 80 74 80 139 0 64 -18 103 -62 135 l-33 23 -3395\n5 -3395 5 -40 22 c-52 28 -89 68 -114 123 -21 45 -21 47 -21 3263 l0 3217\n5130 0 5130 0 0 -1657 c0 -1637 0 -1658 20 -1691 30 -49 75 -72 141 -72 66 0\n112 26 140 80 18 33 19 121 19 2555 0 2221 -2 2528 -15 2580 -48 190 -188 336\n-385 402 -53 17 -222 18 -5015 19 -2728 1 -4983 -2 -5011 -6z m9937 -332 c51\n-15 114 -69 142 -122 l22 -41 3 -697 3 -698 -5131 0 -5130 0 0 684 c0 741 -1\n729 55 802 13 17 48 44 77 58 l52 26 4934 0 c3716 0 4944 -3 4973 -12z\"\n        />\n        <path\n          d=\"M1280 9571 c-82 -26 -118 -48 -183 -109 -100 -96 -147 -206 -147\n-341 1 -146 40 -242 139 -342 96 -95 202 -139 336 -139 129 1 229 38 319 121\n107 97 156 209 156 354 0 216 -128 393 -329 455 -81 26 -214 26 -291 1z m234\n-335 c20 -15 41 -44 52 -71 14 -39 15 -52 5 -87 -42 -139 -225 -153 -283 -21\n-62 139 105 272 226 179z\"\n        />\n        <path\n          d=\"M2536 9570 c-174 -62 -293 -206 -319 -386 -42 -287 179 -544 467\n-544 136 0 251 46 341 135 162 162 187 418 59 610 -48 74 -103 120 -194 164\n-70 34 -82 36 -185 39 -91 2 -120 -1 -169 -18z m233 -328 c51 -37 73 -82 68\n-135 -5 -61 -30 -96 -89 -125 -57 -29 -105 -23 -153 19 -42 37 -59 79 -53 133\n6 54 31 90 83 116 47 25 105 22 144 -8z\"\n        />\n        <path\n          d=\"M3826 9579 c-118 -28 -245 -133 -300 -249 -69 -142 -69 -287 -1 -426\n118 -243 409 -334 659 -207 62 32 153 122 188 189 142 264 9 597 -273 685 -66\n21 -202 24 -273 8z m190 -328 c55 -25 84 -73 84 -140 0 -45 -5 -56 -36 -91\n-48 -53 -100 -68 -160 -45 -103 39 -135 155 -67 236 49 58 109 72 179 40z\"\n        />\n        <path\n          d=\"M1663 7049 c-118 -58 -118 -231 1 -288 l43 -21 4076 2 4076 3 28 21\nc99 74 99 204 0 278 l-28 21 -4077 3 -4077 2 -42 -21z\"\n        />\n        <path\n          d=\"M1660 5942 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 4082 0 4082 0 33 23 c57 38 75 71 75 137 0 66 -18 99 -75 138 l-33 22\n-4076 0 c-3861 0 -4078 -1 -4111 -18z\"\n        />\n        <path\n          d=\"M8890 5104 c-668 -102 -1236 -517 -1530 -1119 -244 -500 -272 -1095\n-75 -1616 158 -415 463 -782 847 -1016 462 -281 1032 -364 1571 -227 258 65\n524 197 742 368 l59 46 30 -29 30 -30 -17 -38 c-42 -94 -40 -207 4 -302 17\n-35 157 -181 568 -593 l545 -548 352 0 352 0 31 35 c64 73 76 110 76 225 0 95\n-3 110 -27 155 -19 36 -197 220 -655 676 -709 707 -656 664 -818 664 -71 0\n-99 -4 -132 -21 l-42 -21 -30 31 -31 32 61 79 c203 265 336 575 396 920 24\n140 24 490 0 630 -80 460 -282 848 -600 1152 -316 301 -697 487 -1129 548\n-132 19 -450 18 -578 -1z m461 -325 c601 -61 1115 -420 1374 -961 64 -133 104\n-252 136 -403 21 -96 24 -137 24 -325 0 -165 -4 -236 -18 -305 -170 -863 -930\n-1454 -1793 -1394 -604 42 -1144 408 -1409 954 -232 477 -230 1027 5 1496 169\n337 455 618 790 778 284 136 592 191 891 160z m2741 -4591 l-72 -73 -590 590\n-590 590 72 72 73 73 590 -590 590 -590 -73 -72z\"\n        />\n        <path\n          d=\"M8255 4106 c-16 -8 -55 -40 -87 -72 -176 -183 -309 -458 -354 -734\n-23 -139 -14 -389 19 -530 58 -241 170 -454 330 -625 59 -63 80 -78 115 -86\n107 -23 202 49 202 155 0 53 -14 80 -81 158 -160 185 -244 378 -269 613 -32\n288 72 598 273 820 29 33 59 70 65 82 18 33 14 114 -7 153 -35 68 -133 99\n-206 66z\"\n        />\n        <path\n          d=\"M1683 4849 c-69 -20 -123 -111 -108 -182 12 -53 45 -98 89 -118 40\n-18 133 -19 2846 -19 l2806 0 44 23 c50 24 90 88 90 141 0 47 -37 113 -78 138\nl-37 23 -2810 2 c-1697 1 -2823 -2 -2842 -8z\"\n        />\n        <path\n          d=\"M1660 3732 c-43 -21 -76 -69 -85 -123 -9 -51 26 -125 74 -156 l34\n-23 2561 0 c2538 0 2561 0 2594 20 103 63 96 233 -11 284 -32 15 -240 16\n-2584 16 -2406 0 -2550 -1 -2583 -18z\"\n        />\n        <path\n          d=\"M1692 2640 c-45 -11 -100 -66 -113 -112 -21 -78 15 -158 85 -189 43\n-19 90 -19 2603 -17 l2558 3 34 24 c37 27 70 90 71 135 0 47 -37 113 -78 138\nl-37 23 -2545 2 c-1400 0 -2560 -3 -2578 -7z\"\n        />\n      </g>\n    </svg>\n    <span style=\"text-align: center;margin-top: 10px;\">No Orders Found</span>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/orders/orders-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/orders/orders-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: OrdersPageRoutingModule */

  /***/
  function srcAppPagesOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
      return OrdersPageRoutingModule;
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


    var _orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders */
    "./src/app/pages/orders/orders.ts");

    var routes = [{
      path: '',
      component: _orders__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }];

    var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
      _classCallCheck(this, OrdersPageRoutingModule);
    };

    OrdersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrdersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/orders/orders.module.ts ***!
    \***********************************************/

  /*! exports provided: OrdersPageModule */

  /***/
  function srcAppPagesOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
      return OrdersPageModule;
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


    var _orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders */
    "./src/app/pages/orders/orders.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/pages/orders/orders-routing.module.ts");

    var OrdersPageModule = function OrdersPageModule() {
      _classCallCheck(this, OrdersPageModule);
    };

    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_7__["OrdersPageRoutingModule"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]],
      declarations: [_orders__WEBPACK_IMPORTED_MODULE_5__["OrdersPage"]],
      entryComponents: []
    })], OrdersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/orders/orders.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrdersScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-content {\n  --background:var(--ion-gray-backgorund);\n}\n\n.vagnon-image {\n  width: 18px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 18px !important;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 16px;\n  background-color: transparent;\n}\n\n.table thead tr th {\n  font-size: 17px;\n  font-weight: 300;\n}\n\n.table > thead > tr > th {\n  padding: 12px 8px;\n  vertical-align: middle;\n  border-color: #ddd;\n  font-weight: 300;\n}\n\n.table > tbody > tr > td {\n  padding: 12px 8px;\n  vertical-align: middle;\n  border-color: #ddd;\n  font-weight: 300;\n  font-size: 14px;\n  color: #3c4858;\n}\n\n.table .td-actions .btn {\n  margin: 0;\n  padding: 5px;\n}\n\n.table .form-check {\n  margin: 0;\n  padding-left: 0;\n}\n\n.table .td-total {\n  font-weight: 500;\n  font-size: 17px;\n  padding-top: 20px;\n  text-align: right;\n}\n\n.table .td-price {\n  font-size: 26px;\n  font-weight: 300;\n  margin-top: 5px;\n  text-align: right;\n}\n\n.table-shopping > thead > tr > th {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #555;\n}\n\n.table-shopping .td-name {\n  min-width: 200px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1.42857143;\n}\n\n.table-shopping .td-name small {\n  color: #999;\n  font-size: 18px;\n  font-weight: 300;\n}\n\n.table-shopping .img-container {\n  width: 120px;\n  max-height: 160px;\n  overflow: hidden;\n  display: block;\n}\n\n.table-shopping .img-container img {\n  width: 100%;\n}\n\n.table-shopping > tbody > tr > td {\n  font-size: 14px;\n}\n\n.table-shopping .td-number {\n  text-align: right;\n  min-width: 150px;\n  font-size: 18px;\n}\n\n.order-list {\n  background: transparent;\n}\n\n.order-list ion-row {\n  margin: 15px 0px;\n  background-color: var(--ion-item-background);\n  box-shadow: var(--ion-card-shadow);\n}\n\n.order-list .order-info {\n  display: block;\n  width: 100%;\n  padding: 10px 15px;\n}\n\n.order-list .order-info ion-thumbnail {\n  float: right;\n  width: 100px;\n  height: 80px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.order-list .order-info ion-label {\n  float: left;\n  width: 67%;\n}\n\n.order-list .order-info ion-label h6 {\n  font-size: 18px;\n}\n\n.order-list .order-info ion-label p {\n  text-transform: lowercase;\n}\n\n.order-ratings {\n  width: 100%;\n  padding: 10px 15px;\n  border-top: 1px solid #e9dfdf;\n}\n\n.order-ratings ion-icon {\n  margin-right: 12px;\n  color: #DDDDDD;\n  font-size: 28px;\n}\n\n.order-ratings a {\n  text-decoration: none;\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n  border-radius: 5px;\n  color: #2378E9;\n  float: right;\n}\n\n.active-dot {\n  height: 8px;\n  width: 8px;\n  margin-right: 5px;\n  background-color: #27A540;\n  display: inline-block;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n\n.total_cost {\n  font-weight: 500;\n  color: var(--ion-text-color);\n  margin-left: 9px;\n}\n\n.noRecordsFound {\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.no-orders {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n}\n\n.order-status {\n  color: var(--ion-small-color);\n  text-transform: capitalize !important;\n}\n\n.order-total {\n  color: var(--ion-small-color);\n}\n\n.order-status span {\n  display: inline-block;\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n}\n\n.order-status span.order-place {\n  background-color: #d6d310;\n}\n\n.order-status span.out-delivery {\n  background-color: #ff8800;\n}\n\n.order-status span.Deliverd {\n  background-color: green;\n}\n\n.order-status span.on-hold {\n  background-color: red;\n}\n\n.order-status span.packed {\n  background-color: #d6d310;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDS0Y7O0FERkE7RUFDRSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FERkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UsdUJBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQ0FBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNVRjs7QURSQTtFQUNFLGVBQUE7QUNXRjs7QURUQTtFQUNFLHlCQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ2FGOztBRFhBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2NGOztBRFpBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2VGOztBRGJBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDZ0JGOztBRGJBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUNFLGdCQUFBO0FDZ0JKOztBRFhBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ2NGOztBRFpBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNlRjs7QURiQTtFQUNFLDZCQUFBO0VBQ0EscUNBQUE7QUNnQkY7O0FEZEE7RUFDRSw2QkFBQTtBQ2lCRjs7QURmQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2tCRjs7QURoQkE7RUFDRSx5QkFBQTtBQ21CRjs7QURqQkE7RUFDRSx5QkFBQTtBQ29CRjs7QURsQkE7RUFDRSx1QkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxxQkFBQTtBQ3NCRjs7QURwQkE7RUFDRSx5QkFBQTtBQ3VCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlci1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWdyYXktYmFja2dvcnVuZCk7XG59XG4udmFnbm9uLWltYWdle1xuICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xufVxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGZvbnQtc2l6ZTogMTdweCA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50YWJsZT50aGVhZD50cj50aHtcbiAgcGFkZGluZzogMTJweCA4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRhYmxlPnRib2R5PnRyPnRke1xuICBwYWRkaW5nOiAxMnB4IDhweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6MTRweDtcbiAgY29sb3I6ICMzYzQ4NTg7XG59XG5cbi50YWJsZSAudGQtYWN0aW9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50YWJsZSAuZm9ybS1jaGVjayB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udGFibGUgLnRkLXRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50YWJsZSAudGQtcHJpY2Uge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGFibGUtc2hvcHBpbmc+dGhlYWQ+dHI+dGgge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNTU1O1xufVxuLnRhYmxlLXNob3BwaW5nIC50ZC1uYW1lIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mztcbn1cblxuLnRhYmxlLXNob3BwaW5nIC50ZC1uYW1lIHNtYWxsIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRhYmxlLXNob3BwaW5nIC5pbWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXgtaGVpZ2h0OiAxNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YWJsZS1zaG9wcGluZyAuaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlLXNob3BwaW5nPnRib2R5PnRyPnRkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGFibGUtc2hvcHBpbmcgLnRkLW51bWJlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ub3JkZXItbGlzdHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ub3JkZXItbGlzdCBpb24tcm93e1xuICBtYXJnaW46IDE1cHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgYm94LXNoYWRvdzogdmFyKC0taW9uLWNhcmQtc2hhZG93KTtcbn1cbi5vcmRlci1saXN0IC5vcmRlci1pbmZve1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6MTBweCAxNXB4O1xufVxuLm9yZGVyLWxpc3QgLm9yZGVyLWluZm8gaW9uLXRodW1ibmFpbHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vcmRlci1saXN0IC5vcmRlci1pbmZvIGlvbi1sYWJlbHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2NyU7XG59XG4ub3JkZXItbGlzdCAub3JkZXItaW5mbyBpb24tbGFiZWwgaDZ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5vcmRlci1saXN0IC5vcmRlci1pbmZvIGlvbi1sYWJlbCBwe1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLm9yZGVyLXJhdGluZ3N7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOjEwcHggMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWRmZGY7XG59XG4ub3JkZXItcmF0aW5ncyBpb24taWNvbntcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBjb2xvcjogI0RERERERDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLm9yZGVyLXJhdGluZ3MgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzIzNzhFOTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmFjdGl2ZS1kb3R7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTU0MDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udG90YWxfY29zdHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xuXG59XG5cblxuLm5vUmVjb3Jkc0ZvdW5kIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uby1vcmRlcnN7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9yZGVyLXN0YXR1c3tcbiAgY29sb3I6IHZhcigtLWlvbi1zbWFsbC1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG4ub3JkZXItdG90YWx7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuLm9yZGVyLXN0YXR1cyBzcGFue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ub3JkZXItc3RhdHVzIHNwYW4ub3JkZXItcGxhY2V7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxMSwgMTYpO1xufVxuLm9yZGVyLXN0YXR1cyBzcGFuLm91dC1kZWxpdmVyeXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTM2LCAwKTtcbn1cbi5vcmRlci1zdGF0dXMgc3Bhbi5EZWxpdmVyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4ub3JkZXItc3RhdHVzIHNwYW4ub24taG9sZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLm9yZGVyLXN0YXR1cyBzcGFuLnBhY2tlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjExLCAxNik7XG59XG4iLCIub3JkZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tZ3JheS1iYWNrZ29ydW5kKTtcbn1cblxuLnZhZ25vbi1pbWFnZSB7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFibGUgdGhlYWQgdHIgdGgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzYzQ4NTg7XG59XG5cbi50YWJsZSAudGQtYWN0aW9ucyAuYnRuIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50YWJsZSAuZm9ybS1jaGVjayB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udGFibGUgLnRkLXRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50YWJsZSAudGQtcHJpY2Uge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50YWJsZS1zaG9wcGluZyA+IHRoZWFkID4gdHIgPiB0aCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi50YWJsZS1zaG9wcGluZyAudGQtbmFtZSB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG59XG5cbi50YWJsZS1zaG9wcGluZyAudGQtbmFtZSBzbWFsbCB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50YWJsZS1zaG9wcGluZyAuaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWF4LWhlaWdodDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFibGUtc2hvcHBpbmcgLmltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1zaG9wcGluZyA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhYmxlLXNob3BwaW5nIC50ZC1udW1iZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ub3JkZXItbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ub3JkZXItbGlzdCBpb24tcm93IHtcbiAgbWFyZ2luOiAxNXB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWlvbi1jYXJkLXNoYWRvdyk7XG59XG5cbi5vcmRlci1saXN0IC5vcmRlci1pbmZvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5vcmRlci1saXN0IC5vcmRlci1pbmZvIGlvbi10aHVtYm5haWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3JkZXItbGlzdCAub3JkZXItaW5mbyBpb24tbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDY3JTtcbn1cblxuLm9yZGVyLWxpc3QgLm9yZGVyLWluZm8gaW9uLWxhYmVsIGg2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ub3JkZXItbGlzdCAub3JkZXItaW5mbyBpb24tbGFiZWwgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5vcmRlci1yYXRpbmdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWRmZGY7XG59XG5cbi5vcmRlci1yYXRpbmdzIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBjb2xvcjogI0RERERERDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ub3JkZXItcmF0aW5ncyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzIzNzhFOTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYWN0aXZlLWRvdCB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTU0MDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udG90YWxfY29zdCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5ub1JlY29yZHNGb3VuZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby1vcmRlcnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9yZGVyLXN0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXItdG90YWwge1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cblxuLm9yZGVyLXN0YXR1cyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ub3JkZXItc3RhdHVzIHNwYW4ub3JkZXItcGxhY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkMzEwO1xufVxuXG4ub3JkZXItc3RhdHVzIHNwYW4ub3V0LWRlbGl2ZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODgwMDtcbn1cblxuLm9yZGVyLXN0YXR1cyBzcGFuLkRlbGl2ZXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5vcmRlci1zdGF0dXMgc3Bhbi5vbi1ob2xkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ub3JkZXItc3RhdHVzIHNwYW4ucGFja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDMxMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/orders/orders.ts ***!
    \****************************************/

  /*! exports provided: OrdersPage */

  /***/
  function srcAppPagesOrdersOrdersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
      return OrdersPage;
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

    var OrdersPage = /*#__PURE__*/function () {
      function OrdersPage(_ProductService) {
        _classCallCheck(this, OrdersPage);

        this._ProductService = _ProductService;
        this.orderList = [];
        this.reviewList = [];
        this.cartCount = 0;
        this.refershDefault = {
          target: {
            complete: function complete() {
              return true;
            }
          }
        };
        this.isSearchEnable = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/";
        this.searchproductList = [];
        this.showSearchBox = false;
        this.page = {
          limit: 10,
          skip: 0
        };
      }

      _createClass(OrdersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getorderList();
          this.getCartCount();
        }
      }, {
        key: "rate",
        value: function rate(index, id) {
          var _this = this;

          console.log("called", index, id);
          this.orderList.forEach(function (order) {
            if (order._id == id) {
              // this.boxId = id;
              order.rating = index;
              _this.rating = index;
            }
          });
        }
      }, {
        key: "getColor",
        value: function getColor(index, rating) {
          if (this.isAboveRating(index, rating)) {
            return "#DDDDDD";
          }

          return "gold";
        }
      }, {
        key: "isAboveRating",
        value: function isAboveRating(index, rating) {
          return index > rating;
        }
      }, {
        key: "fetchReviewList",
        value: function fetchReviewList() {
          var _this2 = this;

          var resp;

          this._ProductService.getAllReviewList(localStorage.getItem("userId")).subscribe(function (response) {
            resp = response;
            _this2.reviewList = resp;
            console.log(_this2.reviewList, "reviewList");

            _this2.mapRatingwithProducts();
          });
        }
      }, {
        key: "mapRatingwithProducts",
        value: function mapRatingwithProducts() {
          var _this3 = this;

          this.orderList.forEach(function (order) {
            _this3.reviewList.forEach(function (list) {
              if (order.orderId == list.orderId) {
                console.log("order.productId == list.productId", order.orderId, list.orderId, order.orderId == list.orderId);
                order.rating = parseInt(list.rating);
              } else {
                order.rating = 0;
              }
            });
          });
          console.log("this.orderList", this.orderList);
        }
      }, {
        key: "enableSearch",
        value: function enableSearch() {
          var _this4 = this;

          this.showSearchBox = true;
          setTimeout(function () {
            return _this4.searchbar.setFocus();
          }, 500);
        }
      }, {
        key: "backToNormal",
        value: function backToNormal() {
          this.showSearchBox = false;
        }
      }, {
        key: "refershOrders",
        value: function refershOrders() {
          this.resetPage();
          this.getorderList();
        }
      }, {
        key: "getorderList",
        value: function getorderList() {
          var _this5 = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.refershDefault;

          this._ProductService.getOrderList(this.page, localStorage.getItem("userId")).subscribe(function (response) {
            var arr = response["OrderList"];

            if (arr.length > 0) {
              _this5.orderList = _this5.uniqueByKeepLast(arr, function (it) {
                return it.orderId;
              });
            }

            console.log(_this5.orderList, "orderList");
          });

          if (event) {
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 1500);
          }
        }
      }, {
        key: "getCartCount",
        value: function getCartCount() {
          var _this6 = this;

          var shopId = localStorage.getItem("shopID");

          this._ProductService.cartList(localStorage.getItem("userId"), shopId).subscribe(function (data) {
            if (data.length !== 0) {
              _this6.cartCount = data[0].productDetails.length;
            }
          });
        }
      }, {
        key: "resetPage",
        value: function resetPage() {
          this.page = {
            limit: 10,
            skip: 0
          };
        }
      }, {
        key: "loadOrderData",
        value: function loadOrderData(event) {
          var _this7 = this;

          this.page.limit = this.page.limit;
          this.page.skip = this.page.skip + 10;

          this._ProductService.getOrderList(this.page, localStorage.getItem("userId")).subscribe(function (response) {
            console.log(_this7.orderList, "orderList");
            setTimeout(function () {
              console.log('Done');
              event.target.complete();

              if (Array.isArray(response)) {
                _this7.orderList = _this7.orderList.concat(response);
              } else {
                _this7.orderList = _this7.orderList.concat(response['OrderList']);
              }
            }, 0);
          });
        }
      }, {
        key: "uniqueByKeepLast",
        value: function uniqueByKeepLast(data, key) {
          return _toConsumableArray(new Map(data.map(function (x) {
            return [key(x), x];
          })).values());
        }
      }]);

      return OrdersPage;
    }();

    OrdersPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("autofocus", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"])], OrdersPage.prototype, "searchbar", void 0);
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-orders",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.scss */
      "./src/app/pages/orders/orders.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], OrdersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-orders-orders-module-es5.js.map