function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoryCategoryHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n      <ion-icon\n        style=\"margin-left: 10px\"\n        *ngIf=\"showSearchBox\"\n        (click)=\"backToNormal()\"\n        name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n\n    <ion-title> Brands </ion-title>\n\n    <ion-buttons\n      style=\"font-size: 18px\"\n      *ngIf=\"!showSearchBox\"\n      slot=\"end\"\n      style=\"margin-right: 10px\"\n      routerLink=\"/csd-car/search/category\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"mt-20\">\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"/csd-car/home\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Car Brands</li>\n          <!-- <li class=\"breadcrumb-item active\" aria-current=\"page\">Team</li> -->\n        </ol>\n      </nav>\n      \n  <div class=\"content-section\" style=\"padding-top: 30px\">\n    <ion-card class=\"chose-category-grid\">\n      <div\n        class=\"relative\"\n        [routerLink]=\"['/csd-car/all-csd-cars/'+list._id]\"\n        [queryParams]=\"{'brand_id': list._id , 'brand_name':list.subcategoryName}\"\n        *ngFor=\"let list of SubCategoryList\">\n        <img src=\"{{list.logo}}\" alt=\"{{list.subcategoryName}} csd price\" />\n        <p>{{list.subcategoryName}}</p>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ng-template #skeleton>\n  <ion-item *ngFor=\"let item of [1, 2, 3, 4, 5,6,7,8,9]\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n\n  <!-- </ion-list> -->\n</ng-template>\n";
    /***/
  },

  /***/
  "./src/app/pages/category/category-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/category/category-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CategoryPageRoutingModule */

  /***/
  function srcAppPagesCategoryCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function () {
      return CategoryPageRoutingModule;
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


    var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category */
    "./src/app/pages/category/category.ts");

    var routes = [{
      path: '',
      component: _category__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }];

    var CategoryPageRoutingModule = function CategoryPageRoutingModule() {
      _classCallCheck(this, CategoryPageRoutingModule);
    };

    CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/category/category.module.ts ***!
    \***************************************************/

  /*! exports provided: CategoryPageModule */

  /***/
  function srcAppPagesCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function () {
      return CategoryPageModule;
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


    var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category */
    "./src/app/pages/category/category.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _category_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./category-routing.module */
    "./src/app/pages/category/category-routing.module.ts");

    var CategoryPageModule = function CategoryPageModule() {
      _classCallCheck(this, CategoryPageModule);
    };

    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_7__["CategoryPageRoutingModule"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]],
      declarations: [_category__WEBPACK_IMPORTED_MODULE_5__["CategoryPage"]],
      entryComponents: []
    })], CategoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/category/category.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoryCategoryScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search {\n  margin-right: -16px;\n}\n\n.category h2 {\n  text-align: center;\n}\n\n.category ion-col {\n  padding: 8px;\n}\n\n.category-main .relative {\n  background-color: var(--ion-item-background);\n  padding: 15px;\n  text-align: center;\n  box-shadow: var(--ion-card-shadow);\n  border-radius: 10px;\n}\n\n.category-main .relative svg {\n  width: 80px;\n  height: 100px;\n}\n\n.category-main .relative p {\n  margin-bottom: 0px;\n  margin-top: 5px;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.category-main .relative span {\n  font-size: 12px;\n  color: #989898;\n}\n\n.cat-img {\n  height: 70px !important;\n  width: 70px !important;\n  margin: 0 auto !important;\n}\n\n.budget-label {\n  font-size: 16px;\n  margin-left: 10px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNPRjs7QURKQTtFQUNFLGVBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cbi5jYXRlZ29yeSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXRlZ29yeSBpb24tY29sIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0taW9uLWNhcmQtc2hhZG93KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHN2ZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTg5ODk4O1xufVxuLmNhdC1pbWcge1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmJ1ZGdldC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gZm9udC1mYW1pbHk6IGluaXRpYWw7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIiwiLnNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi5jYXRlZ29yeSBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhdGVnb3J5IGlvbi1jb2wge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLWlvbi1jYXJkLXNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSBzdmcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY2F0ZWdvcnktbWFpbiAucmVsYXRpdmUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5ODk4OTg7XG59XG5cbi5jYXQtaW1nIHtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5idWRnZXQtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/category/category.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/category/category.ts ***!
    \********************************************/

  /*! exports provided: CategoryPage */

  /***/
  function srcAppPagesCategoryCategoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
      return CategoryPage;
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

    var CategoryPage = /*#__PURE__*/function () {
      function CategoryPage(_ProductService) {
        _classCallCheck(this, CategoryPage);

        this._ProductService = _ProductService;
        this.SubCategoryList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/';
        this.imageAttributes = [];
        this.isDataLoaded = false;
        this.searchproductList = [];
        this.showSearchBox = false;
        this.refershDefault = {
          target: {
            complete: function complete() {
              return true;
            }
          }
        };
        this.isSearchEnable = false;
        this._editData = {
          logo: ''
        };
        this.audiIcon = "../../../../../assets/img/brand/audi.svg";
        this.bmwIcon = "../../../../../assets/img/brand/bmw.svg";
        this.hondaIcon = "../../../../../assets/img/brand/honda.svg";
        this.hyundaiIcon = "../../../../../assets/img/brand/hyundai.svg";
        this.kiaIcon = "../../../../../assets/img/brand/kia.svg";
        this.marutiIcon = "../../../../../assets/img/brand/maruti.svg";
        this.tataIcon = "../../../../../assets/img/brand/tata.svg";
        this.toyotaIcon = "../../../../../assets/img/brand/toyota.svg";
        this.othersIcon = "../../../../../assets/img/brand/others.png";
        this.nissianIcon = "../../../../../assets/img/brand/nissan.jpg";
        this.renaultIcon = "../../../../../assets/img/brand/renault.svg";
        this.volkswagenIcon = "../../../../../assets/img/brand/volkswagen.svg";
        this.mgIcon = "../../../../../assets/img/brand/mg.png";
        this.fordIcon = "../../../../../assets/img/brand/ford.svg";
        this.mahindraIcon = "../../../../../assets/img/brand/mahindra.jpg";
      }

      _createClass(CategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imageAttributes.push({
            element: 'style',
            value: 'height: 70px; width: 70px; margin: 0 auto;'
          });
          this.getSubCategoryList();
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
        key: "getSubCategoryList",
        value: function getSubCategoryList() {
          var _this = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.refershDefault;

          this._ProductService.listSubCategory().subscribe(function (data) {
            _this.SubCategoryList = data.SubCategoryList;
            _this.isDataLoaded = true;
            console.log(data, "--------------------------", _this.SubCategoryList);

            if (event) {}

            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 1500);
          });
        }
      }, {
        key: "selectImage",
        value: function selectImage(value) {
          // alert("called")
          this.images = [];
          this.images = [this.selectIcon(value)];
        }
      }, {
        key: "selectIcon",
        value: function selectIcon(icon) {
          switch (icon) {
            case "AUDI":
              return this.audiIcon;

            case "BMW":
              return this.bmwIcon;

            case "HONDA":
              return this.hondaIcon;

            case "HYUNDAI":
              return this.hyundaiIcon;

            case "KIA":
              return this.kiaIcon;

            case "MARUTI":
              return this.marutiIcon;

            case "TATA":
              return this.tataIcon;

            case "TOYOTA":
              return this.toyotaIcon;

            case "OTHERS":
              return this.othersIcon;

            case "FORD":
              return this.fordIcon;

            case "MAHINDRA":
              return this.mahindraIcon;

            case "NISSAN":
              return this.nissianIcon;

            case "VOLKSWAGEN":
              return this.volkswagenIcon;

            case "RENAULT":
              return this.renaultIcon;

            case "MG":
              return this.mgIcon;
          }
        }
      }]);

      return CategoryPage;
    }();

    CategoryPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.scss */
      "./src/app/pages/category/category.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], CategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=category-category-module-es5.js.map