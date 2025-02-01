(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"cart-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        style=\"margin-left: 10px\"\n        defaultHref=\"/{{from}}\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title> Search </ion-title>\n    <ion-buttons slot=\"end\"> </ion-buttons>\n  </ion-toolbar>\n  <div class=\"content-section\">\n    <ion-searchbar\n      animated\n      debounce=\"500\"\n      (ionClear)=\"clear()\"\n      id=\"autofocus\"\n      (ionChange)=\"search($event)\"\n      spellcheck=\"true\"></ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content *ngIf=\"isDataLoaded; else skeleton\">\n  <div class=\"content-section\">\n    <ion-list *ngIf=\"productList.length != 0\">\n      <ion-item class=\"productItem\" *ngFor=\"let list of productList\">\n        <ion-grid class=\"horizontalPadding\">\n          <ion-row>\n            <ion-col [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\">\n              <p class=\"product-img\">\n                <img\n                  [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                  *ngIf=\"list.imageVarients.length !== 0\"\n                  [src]=\"list.imageVarients[0]\"\n                  alt=\"{{list.title}} csd price - {{list.productName}}\"\n                  />\n                \n                <!-- <img\n                  [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                  *ngIf=\"list.imageVarients.length == 0\"\n                  src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png\" /> -->\n                <!-- <span class=\"offer\" *ngIf=\"list.discount\"\n                >{{list.discount}}% OFF</span\n              > -->\n              </p>\n            </ion-col>\n            <ion-col [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\">\n              <ion-label\n                ><h6\n                  class=\"product-name\"\n                  style=\"text-transform: capitalize; font-weight: 500\">\n                  {{list.productName}}\n                </h6>\n                <p class=\"ratings-star\">\n                  <!-- <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-half.png\" /> <b>{{list.rating}}</b> -->\n                </p>\n                <span>₹ {{list.price}} </span><br />\n                <ion-text class=\"cashback-label\" *ngIf=\"list.discount\"\n                  >₹ {{list.discount}} Cashback\n                </ion-text>\n                <!-- <span *ngIf=\"list.discount\"\n                >₹ {{list.discountedPrice | number:'1.2-2'}} Lack &nbsp;<s *ngIf=\"list.discount\"\n                  >₹ {{list.price}} Lack</s\n                >\n              </span> -->\n                <br /> </ion-label\n              ><br />\n            </ion-col>\n            <ion-col> </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-row *ngIf=\"productList.length == 0\">\n      <img\n        style=\"height: 101px; margin-left: 33%; margin-top: 39px\"\n        src=\"../../../assets/img/no_list/no orders.png\" alt=\"no-list-found\" />\n      <span style=\"text-align: center; margin-left: 35%; margin-top: 39px\"\n        >No Result Found</span\n      >\n    </ion-row>\n  </div>\n</ion-content>\n\n<ng-template #skeleton>\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1, 2, 3, 4, 5,6,7,8,9]\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/pages/search/search-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search/search-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/app/pages/search/search.ts");




const routes = [
    {
        path: '',
        component: _search__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "./src/app/pages/search/search.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/pages/search/search-routing.module.ts");








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_7__["SearchPageRoutingModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]
        ],
        declarations: [
            _search__WEBPACK_IMPORTED_MODULE_5__["SearchPage"],
        ],
        entryComponents: []
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/pages/search/search.scss":
/*!******************************************!*\
  !*** ./src/app/pages/search/search.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-header {\n  background-color: var(--ion-background-color);\n}\n\nion-header:after {\n  content: none !important;\n}\n\n.vagnon-image {\n  width: 18px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 18px !important;\n  border-radius: 0px !important;\n}\n\nion-searchbar {\n  --border-radius:50px;\n  color: var(--ion-text-color);\n}\n\n.search {\n  margin-right: -16px;\n}\n\n.productItem {\n  margin-left: -15px;\n}\n\n.productItem ion-col img {\n  height: 80px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.product-name {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 150px;\n  display: block;\n  margin: 0px;\n}\n\n.add-button {\n  --border-width: 1px;\n  --border-color: var(--ion-border-color);\n  width: 100%;\n  height: 32px;\n  margin: 0px;\n  color: var(--ion-text-color);\n  background-color: var(--ion-background-addbutton-rgb);\n}\n\n.plus-button {\n  border: 1px solid var(--ion-border-color);\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  background: var(--ion-background-plus);\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.plus-button .minus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: left;\n}\n\n.plus-button .plus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: right;\n}\n\n.ratings-star {\n  color: var(--ion-small-color);\n}\n\n.ratings-star img {\n  margin-right: 5px;\n  width: 14px !important;\n  height: 14px !important;\n  vertical-align: middle;\n  border-radius: 0px !important;\n}\n\n.add-button span {\n  font-size: 20px;\n  margin-top: -4px;\n  margin-left: 6px;\n  color: #a56871;\n}\n\n.product-img {\n  position: relative;\n  margin: 0px;\n  background-image: cover;\n}\n\n.product-img span.offer {\n  position: absolute;\n  left: -6px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.product-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: 0px;\n  bottom: -5px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.cashback-label {\n  color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7QUNDRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0FDSUY7O0FERkE7RUFDRSxtQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNRRjs7QUROQTtFQUNFLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHFEQUFBO0FDU0Y7O0FEUEE7RUFDRSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVUY7O0FEUkE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0FDWUY7O0FEVkE7RUFDRSw2QkFBQTtBQ2FGOztBRFhBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ2NGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7QUNZRjs7QURUQTtFQUNFLFlBQUE7QUNZRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWhlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuaW9uLWhlYWRlcjphZnRlcntcbiAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xufVxuLnZhZ25vbi1pbWFnZXtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tc2VhcmNoYmFye1xuICAtLWJvcmRlci1yYWRpdXM6NTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5zZWFyY2gge1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLnByb2R1Y3RJdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLnByb2R1Y3RJdGVtIGlvbi1jb2wgaW1ne1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByb2R1Y3QtbmFtZXtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xufVxuLmFkZC1idXR0b257XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWFkZGJ1dHRvbi1yZ2IpO1xufVxuLnBsdXMtYnV0dG9ue1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1wbHVzKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBsdXMtYnV0dG9uIC5taW51c3tcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnBsdXMtYnV0dG9uIC5wbHVze1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJhdGluZ3Mtc3RhcntcbiAgY29sb3I6IHZhcigtLWlvbi1zbWFsbC1jb2xvcik7XG59XG4ucmF0aW5ncy1zdGFyIGltZ3tcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuXG4vLyAuYWRkLWJ1dHRvbntcbi8vICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbi8vICAgLS1ib3JkZXItY29sb3I6ICNjY2M7XG4vLyB9XG4uYWRkLWJ1dHRvbiBzcGFue1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGNvbG9yOiAjYTU2ODcxO1xufVxuLnByb2R1Y3QtaW1ne1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBjb3Zlcjtcbn1cbi5wcm9kdWN0LWltZyBzcGFuLm9mZmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogLTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmNhc2hiYWNrLWxhYmVse1xuICBjb2xvcjogYnJvd247XG59IiwiLmNhcnQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pb24taGVhZGVyOmFmdGVyIHtcbiAgY29udGVudDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udmFnbm9uLWltYWdlIHtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6NTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi5wcm9kdWN0SXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLnByb2R1Y3RJdGVtIGlvbi1jb2wgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1hZGRidXR0b24tcmdiKTtcbn1cblxuLnBsdXMtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtcGx1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBsdXMtYnV0dG9uIC5taW51cyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnBsdXMtYnV0dG9uIC5wbHVzIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnJhdGluZ3Mtc3RhciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuXG4ucmF0aW5ncy1zdGFyIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGNvbG9yOiAjYTU2ODcxO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBjb3Zlcjtcbn1cblxuLnByb2R1Y3QtaW1nIHNwYW4ub2ZmZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9kdWN0LWltZyBzcGFuLm9mZmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAtNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uY2FzaGJhY2stbGFiZWwge1xuICBjb2xvcjogYnJvd247XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/search/search.ts":
/*!****************************************!*\
  !*** ./src/app/pages/search/search.ts ***!
  \****************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");






let SearchPage = class SearchPage {
    constructor(_ProductService, _Router, imageLoader) {
        this._ProductService = _ProductService;
        this._Router = _Router;
        this.imageLoader = imageLoader;
        this.productList = [];
        this.isSearchEnable = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            spaceBetween: 10,
            pagination: true,
            slidesPerView: 2,
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/";
        this.imageAttributes = [];
        this.isDataLoaded = false;
        this.cartCount = 0;
        this.addTocartCss = false;
        this.from = "/home";
        this.searchproductList = [];
    }
    ngOnInit() {
        this.imageAttributes.push({
            element: "style",
            value: "height: 73px; width: 111px;border-radius: 9%;",
        });
        console.log(this.searchbar, "-------------------");
        this.from = this._Router.snapshot.params.from;
        this.getProductList();
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log(document.getElementById("autofocus"), "box");
        this.searchbar = document.getElementById("autofocus");
        setTimeout(() => this.searchbar.setFocus(), 500);
    }
    getProductList() {
        this._ProductService
            .getProductList(localStorage.getItem("shopID"))
            .subscribe((data) => {
            this.productList = data;
            this.isDataLoaded = true;
            this.productList = this.productList.map((obj) => (Object.assign({}, obj, { QTY: 0 })));
            this.productList.forEach((product) => {
                product.price =
                    this.convertIntoLakh(product.price);
            });
            console.log(this.productList);
        });
    }
    clear() {
        this.getProductList();
    }
    getColor(index, rating) {
        if (this.isAboveRating(index, rating)) {
            return "grey";
        }
        return "gold";
    }
    isAboveRating(index, rating) {
        return index > rating;
    }
    search(query) {
        let shopId = localStorage.getItem("shopID");
        if (query.target.value.length >= 1) {
            this.isSearchEnable = true;
            this._ProductService
                .search({
                search: query.target.value,
                filter: "Product",
            }, shopId)
                .subscribe((data) => {
                console.log(data, "data");
                data.productList = data.productList.map((obj) => (Object.assign({}, obj, { QTY: 0, rating: 0 })));
                this.productList = data.productList;
                this.productList.forEach((product) => {
                    product.price =
                        this.convertIntoLakh(product.price);
                });
            });
        }
        else {
            this.clear();
        }
        if (query.target.value.length == 0) {
            this.isSearchEnable = false;
            // this.getAnalyticalData()
        }
    }
    convertIntoLakh(value) {
        console.log(value, "value");
        let arr = value.split("-");
        console.log(arr, "arr");
        var v1 = '';
        var v2 = '';
        if (arr.length == 2) {
            v1 = Math.abs(arr[0]);
            v2 = Math.abs(arr[1]);
            v1 = (v1 / 100000).toFixed(2);
            v2 = (v2 / 100000).toFixed(2);
        }
        else {
            v1 = Math.abs(arr[0]);
            v1 = (v1 / 100000).toFixed(2);
        }
        let second = (v2) ? " - " + v2 : '';
        return v1 + second + ' Lakh';
    }
};
SearchPage.ctorParameters = () => [
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderService"] }
];
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-search",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.scss */ "./src/app/pages/search/search.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderService"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map