function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactContactHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title> Contact Us </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"content-section\">\n    <div class=\"contact-info\">\n      <div class=\"contact-image\">\n        <img src=\"../../../assets/img/map.png\" />\n      </div>\n      <div class=\"contact-address\">\n        <ion-grid class=\"contect-detils\">\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"call-outline\"></ion-icon>\n            </ion-col>\n            <ion-col (click)=\"callme('9958008084')\">\n              <span>+91 9958008084</span>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"navigate-outline\"></ion-icon>\n            </ion-col>\n            <ion-col style=\"text-transform: capitalize\">\n                brar building, 1/195/2, Piru Vihar, Sadar Bazaar, Delhi Cantonment, New Delhi, Delhi 110010\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"mail-open-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <!-- contact@bookmydreamcar.in -->\n              <a\n                class=\"ion-home color-primary item\"\n                href=\"#\"\n                onclick=\"window.open('mailto:contact@csdcar.in?subject=I%20have%20a%20query','_system')\"\n                >contact@csdcar.in</a\n              >\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"contect-detils-row\">\n            <ion-col class=\"contect-detils-icon\" size=\"2\">\n              <ion-icon name=\"earth-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <!-- <a style=\"color: black;\"  href=\"https://www.bookmydreamcar.in\"> www.bookmydreamcar.in</a> -->\n              <a\n                class=\"ion-home color-primary item\">\n                https://csdcar.com</a\n              >\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n          <ion-col >\n           <button class=\"btn\"> Any Help?</button>\n          </ion-col>\n          <ion-col >\n            <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n          </ion-col>\n        </ion-row> -->\n        </ion-grid>\n      </div>\n    </div>\n\n    <ion-footer>\n      <span class=\"contact-footer\">&nbsp;CSD CAR </span>\n    </ion-footer>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/contact/contact-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/contact/contact-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ContactPageRoutingModule */

  /***/
  function srcAppPagesContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function () {
      return ContactPageRoutingModule;
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


    var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact */
    "./src/app/pages/contact/contact.ts");

    var routes = [{
      path: '',
      component: _contact__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }];

    var ContactPageRoutingModule = function ContactPageRoutingModule() {
      _classCallCheck(this, ContactPageRoutingModule);
    };

    ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/contact/contact.module.ts ***!
    \*************************************************/

  /*! exports provided: ContactPageModule */

  /***/
  function srcAppPagesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageModule", function () {
      return ContactPageModule;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact */
    "./src/app/pages/contact/contact.ts");
    /* harmony import */


    var _contact_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact-routing.module */
    "./src/app/pages/contact/contact-routing.module.ts");

    var ContactPageModule = function ContactPageModule() {
      _classCallCheck(this, ContactPageModule);
    };

    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_7__["ContactPageRoutingModule"]],
      declarations: [_contact__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]]
    })], ContactPageModule);
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/contact/contact.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactContactScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-icon {\n  height: 20px;\n  width: 20px;\n  margin-left: 27%;\n  margin-bottom: -4px;\n}\n\n.contect-detils-row {\n  border-top: 1px solid #ccc;\n  margin-top: 10px;\n  padding-top: 10px;\n  font-size: 22px;\n}\n\n.contect-detils-icon {\n  text-align: center;\n  font-size: 30px;\n}\n\n.contact-footer {\n  background: var(--ion-continue-background);\n  color: #fff;\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 20px 0;\n}\n\n.ion-home {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3Quc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjclO1xuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xufVxuXG4uY29udGVjdC1kZXRpbHMtcm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uY29udGVjdC1kZXRpbHMtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmNvbnRhY3QtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLmlvbi1ob21lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLmxvZ28taWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNyU7XG4gIG1hcmdpbi1ib3R0b206IC00cHg7XG59XG5cbi5jb250ZWN0LWRldGlscy1yb3cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmNvbnRlY3QtZGV0aWxzLWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNvbnRhY3QtZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uaW9uLWhvbWUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/contact/contact.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/contact/contact.ts ***!
    \******************************************/

  /*! exports provided: ContactPage */

  /***/
  function srcAppPagesContactContactTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPage", function () {
      return ContactPage;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");

    var ContactPage = /*#__PURE__*/function () {
      function ContactPage(callNumber) {
        _classCallCheck(this, ContactPage);

        this.callNumber = callNumber;
        this.isSearchEnable = false;
        this.searchproductList = [];
        this.showSearchBox = false;
      }

      _createClass(ContactPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
        key: "callme",
        value: function callme(mobile) {
          //   this.callNumber.callNumber(mobile, true)
          // .then(res => console.log('Launched dialer!', res))
          // .catch(err => console.log('Error launching dialer', err));
          window.location.href = "tel:".concat(mobile);
        }
      }]);

      return ContactPage;
    }();

    ContactPage.ctorParameters = function () {
      return [{
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
      }];
    };

    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-contact",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.scss */
      "./src/app/pages/contact/contact.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]])], ContactPage);
    /***/
  }
}]);
//# sourceMappingURL=contact-contact-module-es5.js.map