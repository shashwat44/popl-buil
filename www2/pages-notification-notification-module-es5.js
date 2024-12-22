function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNotificationNotificationHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px;\">\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      CSD CAR\n    </ion-title>\n     <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/cart']\">\n        <ion-icon slot=\"icon-only\" name=\"cart\" style=\"color: white;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <div class=\"searchContainer\">\n     <ion-searchbar   [(ngModel)]=\"searchWord\" placeholder=\"Search food or Restaurant\" color=\"light\" animated>\n      </ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"../../../assets/img/noRecordsFound.jpg\" style=\"    margin-left: 27px;\">\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <!-- <thead>\n                <tr>\n                    <th>Image</th>\n                    <th>Name</th>\n                    <th>Type</th>\n                    <th class=\"text-right\">Description</th>\n                </tr>\n            </thead> -->\n      <tbody *ngIf=\"inboxList\">\n        <tr *ngFor=\"let list of inboxList\">\n          <td> <img src=\"{{list.productImage}}\" style=\"height: 50px;width: 50px;\"></td>\n          <td>{{list.productName}}</td>\n          <td>{{list.complainType}}</td>\n          <td class=\"text-right\">{{list.problemDes}}</td>\n        </tr>\n      </tbody>\n      <ion-row>\n        <span class=\"noRecordsFound\">No Records Found</span>\n      </ion-row>\n    </table>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/notification/notification-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/notification/notification-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: NotificationPageRoutingModule */

  /***/
  function srcAppPagesNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
      return NotificationPageRoutingModule;
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


    var _notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification */
    "./src/app/pages/notification/notification.ts");

    var routes = [{
      path: '',
      component: _notification__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }];

    var NotificationPageRoutingModule = function NotificationPageRoutingModule() {
      _classCallCheck(this, NotificationPageRoutingModule);
    };

    NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/notification/notification.module.ts ***!
    \***********************************************************/

  /*! exports provided: NotificationPageModule */

  /***/
  function srcAppPagesNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
      return NotificationPageModule;
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


    var _notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification */
    "./src/app/pages/notification/notification.ts");
    /* harmony import */


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/pages/notification/notification-routing.module.ts");

    var NotificationPageModule = function NotificationPageModule() {
      _classCallCheck(this, NotificationPageModule);
    };

    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_6__["NotificationPageRoutingModule"]],
      declarations: [_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]],
      entryComponents: []
    })], NotificationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/notification/notification.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNotificationNotificationScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noRecordsFound {\n  margin-left: 90px;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogOTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5ub1JlY29yZHNGb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/notification/notification.ts ***!
    \****************************************************/

  /*! exports provided: NotificationPage */

  /***/
  function srcAppPagesNotificationNotificationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
      return NotificationPage;
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

    var NotificationPage = /*#__PURE__*/function () {
      function NotificationPage(_ProductService) {
        _classCallCheck(this, NotificationPage);

        this._ProductService = _ProductService;
        this.searchproductList = [];
      }

      _createClass(NotificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllNotifications();
        }
      }, {
        key: "getAllNotifications",
        value: function getAllNotifications() {// this._ProductService.getinboxList().subscribe((data: any) => {
          //   this.inboxList = data;
          //   console.log(this.inboxList)
          // });
        }
      }]);

      return NotificationPage;
    }();

    NotificationPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.scss */
      "./src/app/pages/notification/notification.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], NotificationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-notification-notification-module-es5.js.map