function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWalletWalletHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"wallet-header\">\n    <ion-buttons>\n        <ion-back-button defaultHref=\"/home\" slot=\"start\"></ion-back-button>\n    </ion-buttons>\n    <h5>My Wallet</h5>\n    <p class=\"reffer-code\">\n      <span>Refer Code : {{userData.referCode}}</span>\n      <ion-icon (click)=\"copy(userData.referCode)\" name=\"copy-outline\"></ion-icon>\n      <!-- <ion-icon name=\"scan-outline\"></ion-icon> -->\n    </p>\n  </div>\n  <!-- <p>&nbsp;&nbsp;Balance : {{total}} ₹ &nbsp;<span style=\"float: right;margin-right: 15px;\">Refer Code : {{referCode}}&nbsp;<ion-icon (click)=\"copy(referCode)\" name=\"copy-outline\"></ion-icon></span></p> -->\n  <div class=\"card-img\" *ngIf=\"userData.loyaltyCardNumber != ''\">\n    <span class=\"card-bg\"></span>\n    <ion-text class=\"total-points\">WALLET</ion-text>\n    <ion-text class=\"image-text\">{{userData.fullName}}</ion-text>\n    <ion-text class=\"exp-date\">12/22</ion-text>\n    <img src=\"../../../assets/img/mastercard.png\">\n  </div>\n\n  <ion-grid class=\"product-tabs\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"item-box\">\n          <ion-text>{{userData.walletBalance}}</ion-text>\n          <h6>Total Balance</h6>\n        </div>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <div class=\"item-box\">\n          <ion-icon  (click)=\"share()\" name=\"share-social-outline\"></ion-icon>\n          <!-- <h6>Share Reercode</h6> -->\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n<!-- <ion-item class=\"productItem\" *ngFor=\"let cart of cashbackList\"> -->\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"getCashbackList($event)\">\n    <ion-refresher-content   pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n  <h5 class=\"transaction-heading\">All Transactions</h5>\n\n  <ion-grid class=\"transction-list\">\n    <ion-row style=\"width: 100%;\" *ngFor=\"let list of cashbackList\">\n      <ion-col style=\"    margin-bottom: -18px;\">\n        <ion-card>\n          <div class=\"list-item\">\n            <div class=\"left-section\">\n              <span class=\"status\">\n                <ion-icon name=\"arrow-down-outline\" style=\"transform:rotate(45deg);\"></ion-icon></span>\n              <h6>{{list.type}}</h6>\n              <!-- <p> {{list.type}}</p> -->\n              <p>   {{list.createdAt | date : 'dd MMM yyyy'}}</p>\n            </div>\n            <div class=\"right-section\">\n              <ion-text color=\"success\"><strong style=\"    font-weight: 500;\n                font-size: 16px;\">+ ₹ {{list.amount}} </strong></ion-text>\n            </div>\n          </div>\n          <!-- <div class=\"date-box\"> -->\n        <!-- {{list.createdAt | date : 'dd MMM yyyy'}} -->\n          <!-- </div> -->\n        </ion-card>\n      </ion-col>\n  </ion-row>\n\n  </ion-grid>\n  <!-- <ion-grid class=\"horizontalPadding\">\n      <ion-row *ngFor=\"let list of cashbackList\">\n\n          <ion-col style=\"color: green;\" >\n             + {{list.amount}} ₹ &nbsp;\n          </ion-col>\n          <ion-col >\n            {{list.type}}\n          </ion-col>\n          <ion-col >\n            {{list.referCode}}\n          </ion-col>\n\n      </ion-row>\n  </ion-grid> -->\n  <ion-row *ngIf=\"cashbackList.length == 0\">\n    <img src=\"../../../assets/img/no_list/no category-found.jpg\">\n</ion-row>\n<!-- </ion-item> -->\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/wallet/wallet-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: WalletPageRoutingModule */

  /***/
  function srcAppPagesWalletWalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function () {
      return WalletPageRoutingModule;
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


    var _wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wallet */
    "./src/app/pages/wallet/wallet.ts");

    var routes = [{
      path: '',
      component: _wallet__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
    }];

    var WalletPageRoutingModule = function WalletPageRoutingModule() {
      _classCallCheck(this, WalletPageRoutingModule);
    };

    WalletPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WalletPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/wallet/wallet.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/wallet/wallet.module.ts ***!
    \***********************************************/

  /*! exports provided: WalletPageModule */

  /***/
  function srcAppPagesWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
      return WalletPageModule;
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


    var _wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wallet */
    "./src/app/pages/wallet/wallet.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wallet-routing.module */
    "./src/app/pages/wallet/wallet-routing.module.ts");

    var WalletPageModule = function WalletPageModule() {
      _classCallCheck(this, WalletPageModule);
    };

    WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wallet_routing_module__WEBPACK_IMPORTED_MODULE_7__["WalletPageRoutingModule"]],
      declarations: [_wallet__WEBPACK_IMPORTED_MODULE_5__["WalletPage"]],
      providers: [_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]],
      entryComponents: []
    })], WalletPageModule);
    /***/
  },

  /***/
  "./src/app/pages/wallet/wallet.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/wallet/wallet.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWalletWalletScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noRecordsFound {\n  margin-left: 90px;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.wallet-header {\n  padding: 10px 22px 15px 15px;\n}\n\n.wallet-header ion-buttons {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n\n.wallet-header h5 {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0px;\n}\n\n.card-img {\n  text-align: center;\n  position: relative;\n}\n\n.card-img .card-bg {\n  width: 90%;\n  border-radius: 10px;\n  box-shadow: 10px 6px 10px rgba(0, 0, 0, 0.31);\n  background: linear-gradient(to right, #333333, #414141);\n  height: 190px;\n  display: block;\n  margin: 0 auto;\n}\n\n.card-img .image-text {\n  position: absolute;\n  left: 35px;\n  z-index: 1;\n  color: #fff;\n  bottom: 25px;\n  text-transform: uppercase;\n}\n\n.product-tabs {\n  border-bottom: 1px solid #ccc;\n  padding: 20px 15px;\n}\n\n.item-box {\n  text-align: center;\n  border-radius: 8px;\n  box-shadow: var(--ion-card-shadow);\n  padding: 20px 0px;\n  height: 90px;\n}\n\n.item-box ion-icon {\n  font-size: 32px;\n}\n\n.item-box h6 {\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.transction-list {\n  padding: 0px;\n}\n\n.transction-list ion-row + ion-row {\n  border-top: 1px solid #ccc;\n}\n\n.transction-list ion-card {\n  border-radius: 0px;\n  margin: 0px;\n  margin-bottom: 10px;\n  box-shadow: none;\n  background: transparent;\n}\n\n.list-item {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 5px 15px 15px;\n}\n\n.list-item .left-section {\n  width: 70%;\n}\n\n.list-item .left-section span {\n  background-color: #000;\n  height: 30px;\n  width: 31px;\n  float: left;\n  text-align: center;\n  line-height: 39px;\n  border-radius: 76%;\n  font-size: 22px;\n  color: #fff;\n  vertical-align: top;\n  margin-right: 15px;\n}\n\n.list-item .left-section span ion-icon {\n  color: #ec9e4c;\n}\n\n.list-item .left-section h6 {\n  color: var(--ion-text-color);\n  font-size: 15px;\n  margin: 0px;\n  margin-bottom: 5px;\n}\n\n.list-item .left-section p {\n  margin: -3px 0px;\n  float: left;\n  font-size: 12px;\n  color: var(--ion-text-color);\n}\n\n.date-box {\n  padding: 0px 15px 0px;\n  color: var(--ion-text-color);\n}\n\n.right-section ion-text {\n  font-size: 22px;\n}\n\n.transaction-heading {\n  padding: 0px 15px 10px;\n}\n\n.item-box ion-text {\n  font-size: 26px;\n}\n\n.reffer-code {\n  float: right;\n  margin: 12px 0px;\n}\n\n.reffer-code span {\n  display: inline-block;\n  margin: 0px 10px 0px 5px;\n  vertical-align: middle;\n  border-right: 1px solid #ccc;\n  padding-right: 10px;\n}\n\n.reffer-code ion-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.total-points {\n  position: absolute;\n  left: 35px;\n  z-index: 1;\n  color: #fff;\n  top: 20px;\n  text-transform: uppercase;\n  font-size: 18px;\n}\n\n.exp-date {\n  position: absolute;\n  left: 38px;\n  z-index: 1;\n  color: #fff;\n  bottom: 50px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.card-img img {\n  position: absolute;\n  width: 40px;\n  bottom: 30px;\n  right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy93YWxsZXQvd2FsbGV0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dhbGxldC93YWxsZXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw0QkFBQTtBQ0VGOztBRERFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREZFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSx1REFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNJSjs7QUREQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ09GOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREpBO0VBQ0UsMEJBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1FGOztBRE5BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FDU0Y7O0FEUEE7RUFDRSxVQUFBO0FDVUY7O0FEUkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1dGOztBRFRBO0VBQ0UsY0FBQTtBQ1lGOztBRFZBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDYUY7O0FEWEE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNjRjs7QURaQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7QUNlRjs7QURiQTtFQUNFLGVBQUE7QUNnQkY7O0FEZEE7RUFDRSxzQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGVBQUE7QUNrQkY7O0FEZkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNrQkY7O0FEakJFO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ21CSjs7QURqQkU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDbUJKOztBRGhCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ21CRjs7QURqQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNvQkY7O0FEbEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNxQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YWxsZXQvd2FsbGV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogOTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53YWxsZXQtaGVhZGVye1xuICBwYWRkaW5nOiAxMHB4IDIycHggMTVweCAxNXB4O1xuICBpb24tYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgaDV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cbi5jYXJkLWltZ3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5jYXJkLWJne1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzMzMzMzLCAjNDE0MTQxKTtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5pbWFnZS10ZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm90dG9tOiAyNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbi5wcm9kdWN0LXRhYnN7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG59XG4uaXRlbS1ib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1pb24tY2FyZC1zaGFkb3cpO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuLml0ZW0tYm94IGlvbi1pY29ue1xuICBmb250LXNpemU6IDMycHg7XG59XG4uaXRlbS1ib3ggaDZ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cblxuLnRyYW5zY3Rpb24tbGlzdHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnRyYW5zY3Rpb24tbGlzdCBpb24tcm93ICsgaW9uLXJvd3tcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG4udHJhbnNjdGlvbi1saXN0IGlvbi1jYXJke1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5saXN0LWl0ZW17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAxNXB4IDE1cHg7XG59XG4ubGlzdC1pdGVtIC5sZWZ0LXNlY3Rpb257XG4gIHdpZHRoOiA3MCU7XG59XG4ubGlzdC1pdGVtIC5sZWZ0LXNlY3Rpb24gc3BhbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDc2JTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmxpc3QtaXRlbSAubGVmdC1zZWN0aW9uIHNwYW4gaW9uLWljb257XG4gIGNvbG9yOiAjZWM5ZTRjO1xufVxuLmxpc3QtaXRlbSAubGVmdC1zZWN0aW9uIGg2e1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGlzdC1pdGVtIC5sZWZ0LXNlY3Rpb24gcHtcbiAgbWFyZ2luOiAtM3B4IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5kYXRlLWJveHtcbiAgcGFkZGluZzogMHB4IDE1cHggMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLnJpZ2h0LXNlY3Rpb24gaW9uLXRleHR7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi50cmFuc2FjdGlvbi1oZWFkaW5ne1xuICBwYWRkaW5nOiAwcHggMTVweCAxMHB4O1xufVxuLml0ZW0tYm94IGlvbi10ZXh0e1xuICBmb250LXNpemU6IDI2cHg7XG5cbn1cbi5yZWZmZXItY29kZXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEycHggMHB4O1xuICBzcGFue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCA1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgaW9uLWljb257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbn1cbi50b3RhbC1wb2ludHN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmV4cC1kYXRle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM4cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkLWltZyBpbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDQwcHg7XG59XG4iLCIubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogOTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndhbGxldC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDIycHggMTVweCAxNXB4O1xufVxuLndhbGxldC1oZWFkZXIgaW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi53YWxsZXQtaGVhZGVyIGg1IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNhcmQtaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZC1pbWcgLmNhcmQtYmcge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMzMzMzMywgIzQxNDE0MSk7XG4gIGhlaWdodDogMTkwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkLWltZyAuaW1hZ2UtdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvdHRvbTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnByb2R1Y3QtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG59XG5cbi5pdGVtLWJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1pb24tY2FyZC1zaGFkb3cpO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uaXRlbS1ib3ggaW9uLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5pdGVtLWJveCBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50cmFuc2N0aW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi50cmFuc2N0aW9uLWxpc3QgaW9uLXJvdyArIGlvbi1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuLnRyYW5zY3Rpb24tbGlzdCBpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDE1cHggMTVweDtcbn1cblxuLmxpc3QtaXRlbSAubGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmxpc3QtaXRlbSAubGVmdC1zZWN0aW9uIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMXB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzlweDtcbiAgYm9yZGVyLXJhZGl1czogNzYlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5saXN0LWl0ZW0gLmxlZnQtc2VjdGlvbiBzcGFuIGlvbi1pY29uIHtcbiAgY29sb3I6ICNlYzllNGM7XG59XG5cbi5saXN0LWl0ZW0gLmxlZnQtc2VjdGlvbiBoNiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxpc3QtaXRlbSAubGVmdC1zZWN0aW9uIHAge1xuICBtYXJnaW46IC0zcHggMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uZGF0ZS1ib3gge1xuICBwYWRkaW5nOiAwcHggMTVweCAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5yaWdodC1zZWN0aW9uIGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4udHJhbnNhY3Rpb24taGVhZGluZyB7XG4gIHBhZGRpbmc6IDBweCAxNXB4IDEwcHg7XG59XG5cbi5pdGVtLWJveCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLnJlZmZlci1jb2RlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEycHggMHB4O1xufVxuLnJlZmZlci1jb2RlIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5yZWZmZXItY29kZSBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRvdGFsLXBvaW50cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzVweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZXhwLWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM4cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNhcmQtaW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDQwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/wallet/wallet.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/wallet/wallet.ts ***!
    \****************************************/

  /*! exports provided: WalletPage */

  /***/
  function srcAppPagesWalletWalletTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
      return WalletPage;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");

    var WalletPage = /*#__PURE__*/function () {
      function WalletPage(_ProductService, _Router, clipboard, toastController, _UserData, platform, socialSharing) {
        _classCallCheck(this, WalletPage);

        this._ProductService = _ProductService;
        this._Router = _Router;
        this.clipboard = clipboard;
        this.toastController = toastController;
        this._UserData = _UserData;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.cashbackList = [];
        this.noRecordsFound = true;
        this.isSearchEnable = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + '/';
        this.searchproductList = [];
        this.showSearchBox = false;
        this.refershDefault = {
          target: {
            complete: function complete() {
              return true;
            }
          }
        };
        this.userData = {
          referCode: '',
          fullName: '',
          walletBalance: 0,
          loyaltyCardNumber: ''
        };
        this.total = 0;
      }

      _createClass(WalletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.referCode = this._Router.snapshot.params.referCode;
          console.log(this.referCode, "referCode");
          this.getCashBackList();
          this.getCustomerProfile();
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
        key: "copy",
        value: function copy(code) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(code, ":: code ");
                    this.clipboard.clear();
                    this.clipboard.copy(code);
                    _context.next = 5;
                    return this.toastController.create({
                      message: "refer code Copied",
                      duration: 2000,
                      position: "bottom",
                      color: 'success',
                      animated: true
                    });

                  case 5:
                    toast = _context.sent;
                    toast.present(); // this.toast.

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCustomerProfile",
        value: function getCustomerProfile() {
          var _this = this;

          this._UserData.getCustomerDetails(localStorage.getItem("userId")).subscribe(function (data) {
            _this.userData = data; //  ( this.userData.hasOwnProperty('fullName'))? '' : this.userData = "Guest"

            console.log(_this.userData, "---");
          });
        }
      }, {
        key: "getCashBackList",
        value: function getCashBackList() {
          var _this2 = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.refershDefault;
          var shopId = localStorage.getItem('shopID');

          this._ProductService.getWallet(localStorage.getItem('userId')).subscribe(function (data) {
            console.log(data, "cashback list");
            _this2.cashbackList = data;

            _this2.cashbackList.forEach(function (list) {
              _this2.total = _this2.total + parseInt(list.amount);
            });

            if (_this2.cashbackList.length !== 0) {
              console.log(_this2.cashbackList, "cashbackList");
              _this2.noRecordsFound = false;
            } else {
              _this2.noRecordsFound = true;
            }

            if (event) {}

            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 1500);
          });
        }
      }, {
        key: "share",
        value: function share() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.socialSharing.share("Use my Refer code : " + this.userData.referCode).then(function () {})["catch"](function (err) {
                      console.log(err);
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return WalletPage;
    }();

    WalletPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]
      }];
    };

    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-wallet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wallet.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wallet.scss */
      "./src/app/pages/wallet/wallet.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]])], WalletPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-wallet-wallet-module-es5.js.map