function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sitemap-sitemap-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sitemap/sitemap.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sitemap/sitemap.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSitemapSitemapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sitemap</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Main Pages</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item routerLink=\"/csd-car/home\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/csd-car/csd-car-brands\">\n        <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Car Brands</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/csd-car/all-csd-cars/cars\">\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label>All Cars</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/csd-car/all-csd-cars/bike\">\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label>All Bike</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/csd-car/csd-car-more-pages/contact-us\">\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Contact</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)=\"toggleCategory('products')\">\n      <ion-card-title>\n        <ion-icon name=\"grid-outline\"></ion-icon> Products\n        <ion-icon [name]=\"isOpen.products ? 'chevron-up-outline' : 'chevron-down-outline'\" class=\"toggle-icon\"></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <div class=\"collapsible-content\" [class.open]=\"isOpen.products\">\n      <ion-list>\n        <ion-item routerLink=\"/csd-car/all-csd-cars/cars\">CSD Cars</ion-item>\n        <ion-item routerLink=\"/csd-car/all-csd-cars/bike\">CSD Bikes</ion-item>\n      </ion-list>\n    </div>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header (click)=\"toggleCategory('blog')\">\n      <ion-card-title>\n        <ion-icon name=\"newspaper-outline\"></ion-icon> Blog\n        <ion-icon [name]=\"isOpen.blog ? 'chevron-up-outline' : 'chevron-down-outline'\" class=\"toggle-icon\"></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <div class=\"collapsible-content\" [class.open]=\"isOpen.blog\">\n      <ion-list>\n        <ion-item routerLink=\"/csd-car-blogs\">CSD Car Blogs</ion-item>\n        <!-- <ion-item routerLink=\"/csd-car-blogs\">CSD Bikes</ion-item> -->\n      </ion-list>\n    </div>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Legal</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item routerLink=\"/privacy-policy\">\n        <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Privacy Policy</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/terms-conditions\">\n        <ion-icon name=\"document-text-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Terms & Conditions</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/sitemap/sitemap-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/sitemap/sitemap-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SitemapPageRoutingModule */

  /***/
  function srcAppPagesSitemapSitemapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitemapPageRoutingModule", function () {
      return SitemapPageRoutingModule;
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


    var _sitemap_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sitemap.page */
    "./src/app/pages/sitemap/sitemap.page.ts");

    var routes = [{
      path: '',
      component: _sitemap_page__WEBPACK_IMPORTED_MODULE_3__["SitemapPage"]
    }];

    var SitemapPageRoutingModule = function SitemapPageRoutingModule() {
      _classCallCheck(this, SitemapPageRoutingModule);
    };

    SitemapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SitemapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sitemap/sitemap.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/sitemap/sitemap.module.ts ***!
    \*************************************************/

  /*! exports provided: SitemapPageModule */

  /***/
  function srcAppPagesSitemapSitemapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitemapPageModule", function () {
      return SitemapPageModule;
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


    var _sitemap_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sitemap-routing.module */
    "./src/app/pages/sitemap/sitemap-routing.module.ts");
    /* harmony import */


    var _sitemap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sitemap.page */
    "./src/app/pages/sitemap/sitemap.page.ts");

    var SitemapPageModule = function SitemapPageModule() {
      _classCallCheck(this, SitemapPageModule);
    };

    SitemapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sitemap_routing_module__WEBPACK_IMPORTED_MODULE_5__["SitemapPageRoutingModule"]],
      declarations: [_sitemap_page__WEBPACK_IMPORTED_MODULE_6__["SitemapPage"]]
    })], SitemapPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sitemap/sitemap.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/sitemap/sitemap.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSitemapSitemapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  margin-bottom: 15px;\n  border-radius: 12px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\nion-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: 12px;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  transition: background 0.3s;\n}\n\nion-card-header:hover {\n  background: var(--ion-color-medium);\n}\n\nion-card-title {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: bold;\n  gap: 10px;\n}\n\n.toggle-icon {\n  margin-left: auto;\n  transition: transform 0.3s;\n}\n\n.collapsible-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out, opacity 0.3s;\n  opacity: 0;\n}\n\n.collapsible-content.open {\n  max-height: 500px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL3BhZ2VzL3NpdGVtYXAvc2l0ZW1hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpdGVtYXAvc2l0ZW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFRTtFQUNFLG1DQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrREFBQTtFQUNBLFVBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2l0ZW1hcC9zaXRlbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIH1cbiAgXG4gIGlvbi1jYXJkLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIH1cbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLnRvZ2dsZS1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgfVxuICBcbiAgLmNvbGxhcHNpYmxlLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1vdXQsIG9wYWNpdHkgMC4zcztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuY29sbGFwc2libGUtY29udGVudC5vcGVuIHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gICIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbn1cblxuaW9uLWNhcmQtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udG9nZ2xlLWljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG59XG5cbi5jb2xsYXBzaWJsZS1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jb2xsYXBzaWJsZS1jb250ZW50Lm9wZW4ge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/sitemap/sitemap.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/sitemap/sitemap.page.ts ***!
    \***********************************************/

  /*! exports provided: SitemapPage */

  /***/
  function srcAppPagesSitemapSitemapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitemapPage", function () {
      return SitemapPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SitemapPage = /*#__PURE__*/function () {
      function SitemapPage() {
        _classCallCheck(this, SitemapPage);

        this.isOpen = {
          products: false,
          blog: false
        };
      }

      _createClass(SitemapPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleCategory",
        value: function toggleCategory(category) {
          this.isOpen[category] = !this.isOpen[category];
        }
      }]);

      return SitemapPage;
    }();

    SitemapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sitemap',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sitemap.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sitemap/sitemap.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sitemap.page.scss */
      "./src/app/pages/sitemap/sitemap.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SitemapPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-sitemap-sitemap-module-es5.js.map