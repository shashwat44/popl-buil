function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orderSummary-orderSummary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderSummary/orderSummary.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderSummary/orderSummary.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderSummaryOrderSummaryHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" defaultHref=\"/home\" [routerLink]=\"['/home']\">\n      <ion-back-button defaultHref=\"/home\" [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!productList\">\n      Order Confirmed\n    </ion-title>\n    <ion-title *ngIf=\"productList\">\n      Order Failed\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"bg-section\">\n\n  </div>\n  <div class=\"pay-section\" style=\"margin-top: 3px;\">\n    <div class=\"pay-confirm\">\n      <img class=\"success-icon\" *ngIf=\"!productList\" src=\"../../../assets/img/checkMark1.gif\">\n      <img style=\"height:100px;\" *ngIf=\"productList\" src=\"../../../assets/img/error.png\">\n      <p class=\"thanksTitle\" *ngIf=\"!productList\">Thank You</p>\n      <p class=\"thanksTitle\" *ngIf=\"productList\">Order FAILED</p>\n      <p class=\"orderPlace\" *ngIf=\"!productList\">\n        Your Order Has Been Placed Successfully\n      </p>\n      <p class=\"orderPlace\" style=\"font-weight:500\" *ngIf=\"productList\">\n        Your Order Has Been Failed\n      </p>\n    </div>\n    <div class=\"order-track\" *ngIf=\"!productList\">\n      <p class=\"orderId\">\n        <span class=\"left\">Order Id:</span>\n        <span style=\"font-weight:500\" class=\"right\">{{orderId}}</span>\n      </p>\n      <p class=\"trackId\">\n        <span class=\"left\">Track Id :</span>\n        <span style=\"font-weight:500\" class=\"right\">sdlo3234sls</span>\n      </p>\n    </div>\n    <div class=\"order-checkd\">\n      <p class=\"emailConfirmation\"  *ngIf=\"!productList\">Please Check your registered mobile number for order confirmation and Tracking\n      </p>\n      <p class=\"estimate\"  *ngIf=\"!productList\">\n        Estimated Delivery &nbsp;: <span>{{todayDate}}, With in 2 hr</span>\n      </p>\n      <ion-button [routerLink]=\"['/orders']\" class=\"homeButton\">Order Details</ion-button>\n    </div>\n  </div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/orderSummary/orderSummary-error.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/orderSummary/orderSummary-error.ts ***!
    \**********************************************************/

  /*! exports provided: OrderErrorPage */

  /***/
  function srcAppPagesOrderSummaryOrderSummaryErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderErrorPage", function () {
      return OrderErrorPage;
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

    var OrderErrorPage = /*#__PURE__*/function () {
      function OrderErrorPage(_ProductService, modalController, _Router, Router) {
        _classCallCheck(this, OrderErrorPage);

        this._ProductService = _ProductService;
        this.modalController = modalController;
        this._Router = _Router;
        this.Router = Router;
        this.todayDate = new Date().toJSON().slice(0, 10);
      }

      _createClass(OrderErrorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orderId = this._Router.snapshot.params.orderId;
          console.log(this.orderId, "orderId");
        }
      }]);

      return OrderErrorPage;
    }();

    OrderErrorPage.ctorParameters = function () {
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

    OrderErrorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-orderSummary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orderSummary.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderSummary/orderSummary.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orderSummary.scss */
      "./src/app/pages/orderSummary/orderSummary.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], OrderErrorPage);
    /***/
  },

  /***/
  "./src/app/pages/orderSummary/orderSummary-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/orderSummary/orderSummary-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderSummaryPageRoutingModule */

  /***/
  function srcAppPagesOrderSummaryOrderSummaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSummaryPageRoutingModule", function () {
      return OrderSummaryPageRoutingModule;
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


    var _orderSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orderSummary */
    "./src/app/pages/orderSummary/orderSummary.ts");
    /* harmony import */


    var _orderSummary_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orderSummary-error */
    "./src/app/pages/orderSummary/orderSummary-error.ts");

    var routes = [{
      path: '',
      component: _orderSummary__WEBPACK_IMPORTED_MODULE_3__["OrderSummaryPage"]
    }, {
      path: 'error',
      component: _orderSummary_error__WEBPACK_IMPORTED_MODULE_4__["OrderErrorPage"]
    }];

    var OrderSummaryPageRoutingModule = function OrderSummaryPageRoutingModule() {
      _classCallCheck(this, OrderSummaryPageRoutingModule);
    };

    OrderSummaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderSummaryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/orderSummary/orderSummary.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/orderSummary/orderSummary.module.ts ***!
    \***********************************************************/

  /*! exports provided: OrderSummaryPageModule */

  /***/
  function srcAppPagesOrderSummaryOrderSummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSummaryPageModule", function () {
      return OrderSummaryPageModule;
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


    var _orderSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orderSummary */
    "./src/app/pages/orderSummary/orderSummary.ts");
    /* harmony import */


    var _orderSummary_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orderSummary-routing.module */
    "./src/app/pages/orderSummary/orderSummary-routing.module.ts");
    /* harmony import */


    var _orderSummary_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./orderSummary-error */
    "./src/app/pages/orderSummary/orderSummary-error.ts");

    var OrderSummaryPageModule = function OrderSummaryPageModule() {
      _classCallCheck(this, OrderSummaryPageModule);
    };

    OrderSummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orderSummary_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderSummaryPageRoutingModule"]],
      declarations: [_orderSummary__WEBPACK_IMPORTED_MODULE_5__["OrderSummaryPage"], _orderSummary_error__WEBPACK_IMPORTED_MODULE_7__["OrderErrorPage"]],
      entryComponents: []
    })], OrderSummaryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/orderSummary/orderSummary.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/orderSummary/orderSummary.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderSummaryOrderSummaryScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pay-confirm {\n  text-align: center;\n  border-bottom: 1px solid var(--ion-border-color);\n  padding: 30px 0px 20px;\n  margin-bottom: 30px;\n}\n\n.success-icon {\n  height: 120px;\n  width: 160px;\n  margin-top: -28px;\n}\n\n.thanksTitle {\n  text-align: center;\n  font-size: 22px;\n  margin: 0px;\n  font-weight: 500;\n}\n\n.orderPlace {\n  color: var(--ion-color-dark);\n  font-size: 15px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.order-track {\n  border-bottom: 1px solid var(--ion-border-color);\n  padding-bottom: 15px;\n  margin-bottom: 30px;\n}\n\n.orderId,\n.trackId {\n  color: var(--ion-text-color);\n  font-size: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.orderId .left,\n.trackId .left {\n  width: 100px;\n}\n\n.orderId .right,\n.trackId .right {\n  text-align: right;\n}\n\n.order-checkd {\n  text-align: center;\n}\n\n.estimate span {\n  color: var(--ion-bggreen-light);\n  display: block;\n  margin-top: 5px;\n  font-weight: 500;\n}\n\n.homeButton {\n  margin-bottom: 20px;\n  --background: var(--ion-continue-background);\n  color: #fff;\n  /* height: 50px; */\n  width: 160px;\n  /* font-weight: bold; */\n  border-radius: 5px;\n  --box-shadow: none;\n}\n\n.bg-section {\n  background-color: var(--ion-profile-bgcolor);\n  text-align: center;\n  color: var(--ion-text-color);\n  position: relative;\n  height: 250px;\n}\n\n.pay-section {\n  position: absolute;\n  top: 70px;\n  background: var(--ion-item-background);\n  width: 80%;\n  left: 50%;\n  transform: translate(-50%, 0px);\n  border-radius: 10px;\n  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.5);\n  padding: 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9vcmRlclN1bW1hcnkvb3JkZXJTdW1tYXJ5LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyU3VtbWFyeS9vcmRlclN1bW1hcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUNFRjs7QURBQTtFQUNFLGdEQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBOztFQUVFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0lGOztBREZBOztFQUVFLFlBQUE7QUNLRjs7QURIQTs7RUFFRSxpQkFBQTtBQ01GOztBREpBO0VBRUUsa0JBQUE7QUNNRjs7QURIQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01GOztBREhBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlclN1bW1hcnkvb3JkZXJTdW1tYXJ5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5LWNvbmZpcm17XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nOiAzMHB4IDBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnN1Y2Nlc3MtaWNvbntcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tdG9wOi0yOHB4XG59XG4udGhhbmtzVGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm9yZGVyUGxhY2V7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vcmRlci10cmFja3tcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5vcmRlcklkLFxuLnRyYWNrSWR7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm9yZGVySWQgLmxlZnQsXG4udHJhY2tJZCAubGVmdHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm9yZGVySWQgLnJpZ2h0LFxuLnRyYWNrSWQgLnJpZ2h0e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5vcmRlci1jaGVja2R7XG4gIC8vIG1hcmdpbjogMHB4IDMwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXN0aW1hdGUgc3BhbntcbiAgY29sb3I6IHZhcigtLWlvbi1iZ2dyZWVuLWxpZ2h0KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmhvbWVCdXR0b257XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xuICBjb2xvcjogI2ZmZjtcbiAgLyogaGVpZ2h0OiA1MHB4OyAqL1xuICB3aWR0aDogMTYwcHg7XG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5iZy1zZWN0aW9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tcHJvZmlsZS1iZ2NvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjUwcHg7XG59XG4ucGF5LXNlY3Rpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbiIsIi5wYXktY29uZmlybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nOiAzMHB4IDBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc3VjY2Vzcy1pY29uIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tdG9wOiAtMjhweDtcbn1cblxuLnRoYW5rc1RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ub3JkZXJQbGFjZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3JkZXItdHJhY2sge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ub3JkZXJJZCxcbi50cmFja0lkIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5vcmRlcklkIC5sZWZ0LFxuLnRyYWNrSWQgLmxlZnQge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5vcmRlcklkIC5yaWdodCxcbi50cmFja0lkIC5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ub3JkZXItY2hlY2tkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXN0aW1hdGUgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tYmdncmVlbi1saWdodCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ob21lQnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29udGludWUtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gIHdpZHRoOiAxNjBweDtcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYmctc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1wcm9maWxlLWJnY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuLnBheS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICB3aWR0aDogODAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/orderSummary/orderSummary.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/orderSummary/orderSummary.ts ***!
    \****************************************************/

  /*! exports provided: OrderSummaryPage */

  /***/
  function srcAppPagesOrderSummaryOrderSummaryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSummaryPage", function () {
      return OrderSummaryPage;
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

    var OrderSummaryPage = /*#__PURE__*/function () {
      function OrderSummaryPage(_ProductService, modalController, _Router, Router) {
        _classCallCheck(this, OrderSummaryPage);

        this._ProductService = _ProductService;
        this.modalController = modalController;
        this._Router = _Router;
        this.Router = Router;
        this.productList = false;
        this.error = false;
        this.todayDate = new Date().toJSON().slice(0, 10);
      }

      _createClass(OrderSummaryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orderId = this._Router.snapshot.params.orderId;
          console.log(this.orderId, "orderId");

          if (this.orderId == 'null') {
            this.productList = true;
          }
        }
      }]);

      return OrderSummaryPage;
    }();

    OrderSummaryPage.ctorParameters = function () {
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

    OrderSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-orderSummary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orderSummary.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderSummary/orderSummary.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orderSummary.scss */
      "./src/app/pages/orderSummary/orderSummary.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], OrderSummaryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-orderSummary-orderSummary-module-es5.js.map