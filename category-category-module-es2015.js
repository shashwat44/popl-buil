(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n      <ion-icon\n        style=\"margin-left: 10px\"\n        *ngIf=\"showSearchBox\"\n        (click)=\"backToNormal()\"\n        name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n\n    <ion-title> Brands </ion-title>\n\n    <ion-buttons\n      style=\"font-size: 18px\"\n      *ngIf=\"!showSearchBox\"\n      slot=\"end\"\n      style=\"margin-right: 10px\"\n      routerLink=\"/tabs/search/category\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"mt-20\">\n  <div class=\"content-section\" style=\"padding-top: 30px\">\n    <ion-card class=\"chose-category-grid\">\n      <div\n        class=\"relative\"\n        [routerLink]=\"['/tabs/menu/'+list._id]\"\n        [queryParams]=\"{'brand_id': list._id , 'brand_name':list.subcategoryName}\"\n        *ngFor=\"let list of SubCategoryList\">\n        <img src=\"{{list.logo}}\" />\n        <p>{{list.subcategoryName}}</p>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ng-template #skeleton>\n  <ion-item *ngFor=\"let item of [1, 2, 3, 4, 5,6,7,8,9]\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n\n  <!-- </ion-list> -->\n</ng-template>\n");

/***/ }),

/***/ "./src/app/pages/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./src/app/pages/category/category.ts");




const routes = [
    {
        path: '',
        component: _category__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category */ "./src/app/pages/category/category.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/pages/category/category-routing.module.ts");








let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_7__["CategoryPageRoutingModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]
        ],
        declarations: [
            _category__WEBPACK_IMPORTED_MODULE_5__["CategoryPage"],
        ],
        entryComponents: []
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/pages/category/category.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/category/category.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search {\n  margin-right: -16px;\n}\n\n.category h2 {\n  text-align: center;\n}\n\n.category ion-col {\n  padding: 8px;\n}\n\n.category-main .relative {\n  background-color: var(--ion-item-background);\n  padding: 15px;\n  text-align: center;\n  box-shadow: var(--ion-card-shadow);\n  border-radius: 10px;\n}\n\n.category-main .relative svg {\n  width: 80px;\n  height: 100px;\n}\n\n.category-main .relative p {\n  margin-bottom: 0px;\n  margin-top: 5px;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.category-main .relative span {\n  font-size: 12px;\n  color: #989898;\n}\n\n.cat-img {\n  height: 70px !important;\n  width: 70px !important;\n  margin: 0 auto !important;\n}\n\n.budget-label {\n  font-size: 16px;\n  margin-left: 10px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDRSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDT0Y7O0FESkE7RUFDRSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG4uY2F0ZWdvcnkgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2F0ZWdvcnkgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLWlvbi1jYXJkLXNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSBzdmcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk4OTg5ODtcbn1cbi5jYXQtaW1nIHtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5idWRnZXQtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIC8vIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiIsIi5zZWFyY2gge1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4uY2F0ZWdvcnkgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXRlZ29yeSBpb24tY29sIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY2F0ZWdvcnktbWFpbiAucmVsYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1pb24tY2FyZC1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2F0ZWdvcnktbWFpbiAucmVsYXRpdmUgc3ZnIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5jYXRlZ29yeS1tYWluIC5yZWxhdGl2ZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNhdGVnb3J5LW1haW4gLnJlbGF0aXZlIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTg5ODk4O1xufVxuXG4uY2F0LWltZyB7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYnVkZ2V0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/category/category.ts":
/*!********************************************!*\
  !*** ./src/app/pages/category/category.ts ***!
  \********************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let CategoryPage = class CategoryPage {
    constructor(_ProductService) {
        this._ProductService = _ProductService;
        this.SubCategoryList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/';
        this.imageAttributes = [];
        this.isDataLoaded = false;
        this.searchproductList = [];
        this.showSearchBox = false;
        this.refershDefault = {
            target: {
                complete: function () {
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
    ngOnInit() {
        this.imageAttributes.push({
            element: 'style',
            value: 'height: 70px; width: 70px; margin: 0 auto;'
        });
        this.getSubCategoryList();
    }
    enableSearch() {
        this.showSearchBox = true;
    }
    backToNormal() {
        this.showSearchBox = false;
    }
    getSubCategoryList(event = this.refershDefault) {
        this._ProductService.listSubCategory().subscribe((data) => {
            this.SubCategoryList = data.SubCategoryList;
            this.isDataLoaded = true;
            console.log(data, "--------------------------", this.SubCategoryList);
            if (event) { }
            setTimeout(() => {
                console.log('Async operation has ended');
                event.target.complete();
            }, 1500);
        });
    }
    selectImage(value) {
        // alert("called")
        this.images = [];
        this.images = [this.selectIcon(value)];
    }
    selectIcon(icon) {
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
};
CategoryPage.ctorParameters = () => [
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.scss */ "./src/app/pages/category/category.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map