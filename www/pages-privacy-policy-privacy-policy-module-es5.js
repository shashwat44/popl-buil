function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-privacy-policy-privacy-policy-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrivacyPolicyPrivacyPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"/csd-car/home\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a href=\"/csd-car/csd-car-more-pages\">More</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Privacy Policy</li>\n          </ol>\n      </nav>\n  <div style=\"padding: 20px\">\n  <h1>Privacy Policy</h1>\n\n \n  <h2>1. Information We Collect</h2>\n<h3>a) Personal Information</h3>\n<ul>\n    <li>Name</li>\n    <li>Email address</li>\n    <li>Phone number</li>\n    <li>Military or service-related details (for eligibility verification)</li>\n</ul>\n<h3>b) Non-Personal Information</h3>\n<ul>\n    <li>Browser type</li>\n    <li>Pages visited</li>\n    <li>Device information</li>\n    <li>Cookies and usage data</li>\n</ul>\n\n<h2>2. How We Use Your Information</h2>\n<ul>\n    <li>To process inquiries and applications for CSD Car purchases</li>\n    <li>To verify CSD eligibility and provide services</li>\n    <li>To improve user experience on our website</li>\n    <li>To send promotional offers and updates (if opted-in)</li>\n    <li>To comply with legal obligations</li>\n</ul>\n\n<h2>3. How We Share Your Information</h2>\n<p>We do <strong>not</strong> sell or rent your personal data. However, we may share your information with:</p>\n<ul>\n    <li><strong>Authorized Dealers</strong> to facilitate car purchases</li>\n    <li><strong>Service Providers</strong> for website analytics and customer support</li>\n    <li><strong>Legal Authorities</strong> if required by law</li>\n</ul>\n\n<h2>4. Cookies and Tracking Technologies</h2>\n<p>We use cookies to:</p>\n<ul>\n    <li>Enhance website functionality</li>\n    <li>Analyze site traffic and user behavior</li>\n    <li>Provide personalized content</li>\n</ul>\n<p>You can manage cookie preferences in your browser settings.</p>\n\n<h2>5. Data Security</h2>\n<p>We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no online data transmission is 100% secure.</p>\n\n<h2>6. Your Rights</h2>\n<p>Depending on your location, you may have the right to:</p>\n<ul>\n    <li>Access, update, or delete your personal data</li>\n    <li>Opt-out of marketing communications</li>\n    <li>Request data portability</li>\n    <li>File a complaint with a data protection authority</li>\n</ul>\n<p>To exercise these rights, contact us at [Insert Contact Email].</p>\n\n<h2>7. Third-Party Links</h2>\n<p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>\n\n<h2>8. Changes to This Policy</h2>\n<p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated \"Last Updated\" date.</p>\n\n<h2>9. Contact Us</h2>\n<p>If you have any questions about this Privacy Policy, contact us at:</p>\n<ul>\n    <li><strong>Email:</strong> bhardwaj.8084@gmail.com</li>\n    <li><strong>Phone:</strong>+91 9958008084 </li>\n    <li><strong>Address:</strong> Brar building, 1/195/2, Piru Vihar, Sadar Bazaar, Delhi Cantonment, New Delhi, Delhi 110010</li>\n</ul>  \n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/privacy-policy/privacy-policy-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/privacy-policy/privacy-policy-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PrivacyPolicyPageRoutingModule */

  /***/
  function srcAppPagesPrivacyPolicyPrivacyPolicyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageRoutingModule", function () {
      return PrivacyPolicyPageRoutingModule;
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


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/pages/privacy-policy/privacy-policy.page.ts");

    var routes = [{
      path: '',
      component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyPage"]
    }];

    var PrivacyPolicyPageRoutingModule = function PrivacyPolicyPageRoutingModule() {
      _classCallCheck(this, PrivacyPolicyPageRoutingModule);
    };

    PrivacyPolicyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrivacyPolicyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/privacy-policy/privacy-policy.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/privacy-policy/privacy-policy.module.ts ***!
    \***************************************************************/

  /*! exports provided: PrivacyPolicyPageModule */

  /***/
  function srcAppPagesPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function () {
      return PrivacyPolicyPageModule;
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


    var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./privacy-policy-routing.module */
    "./src/app/pages/privacy-policy/privacy-policy-routing.module.ts");
    /* harmony import */


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/pages/privacy-policy/privacy-policy.page.ts");

    var PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
      _classCallCheck(this, PrivacyPolicyPageModule);
    };

    PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPageRoutingModule"]],
      declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })], PrivacyPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/privacy-policy/privacy-policy.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/privacy-policy/privacy-policy.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrivacyPolicyPrivacyPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/privacy-policy/privacy-policy.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/privacy-policy/privacy-policy.page.ts ***!
    \*************************************************************/

  /*! exports provided: PrivacyPolicyPage */

  /***/
  function srcAppPagesPrivacyPolicyPrivacyPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function () {
      return PrivacyPolicyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PrivacyPolicyPage = /*#__PURE__*/function () {
      function PrivacyPolicyPage() {
        _classCallCheck(this, PrivacyPolicyPage);
      }

      _createClass(PrivacyPolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyPolicyPage;
    }();

    PrivacyPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy-policy.page.scss */
      "./src/app/pages/privacy-policy/privacy-policy.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PrivacyPolicyPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-privacy-policy-privacy-policy-module-es5.js.map