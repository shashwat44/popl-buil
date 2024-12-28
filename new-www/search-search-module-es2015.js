(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"cart-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        style=\"margin-left: 10px\"\n        defaultHref=\"/{{from}}\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title> Search </ion-title>\n    <ion-buttons slot=\"end\"> </ion-buttons>\n  </ion-toolbar>\n  <div class=\"content-section\">\n    <ion-searchbar\n      animated\n      debounce=\"500\"\n      (ionClear)=\"clear()\"\n      id=\"autofocus\"\n      (ionChange)=\"search($event)\"\n      spellcheck=\"true\"></ion-searchbar>\n  </div>\n</ion-header>\n\n<ion-content *ngIf=\"isDataLoaded; else skeleton\">\n  <div class=\"content-section\">\n    <ion-list *ngIf=\"productList.length != 0\">\n      <ion-item class=\"productItem\" *ngFor=\"let list of productList\">\n        <ion-grid class=\"horizontalPadding\">\n          <ion-row>\n            <ion-col [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\">\n              <p class=\"product-img\">\n                <img-loader\n                  useImg\n                  [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                  *ngIf=\"list.imageVarients.length !== 0\"\n                  [src]=\"list.imageVarients[0]\"\n                  [imgAttributes]=\"imageAttributes\">\n                </img-loader>\n                <img\n                  [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                  *ngIf=\"list.imageVarients.length == 0\"\n                  src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png\" />\n                <!-- <span class=\"offer\" *ngIf=\"list.discount\"\n                >{{list.discount}}% OFF</span\n              > -->\n              </p>\n            </ion-col>\n            <ion-col [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\">\n              <ion-label\n                ><h6\n                  class=\"product-name\"\n                  style=\"text-transform: capitalize; font-weight: 500\">\n                  {{list.productName}}\n                </h6>\n                <p class=\"ratings-star\">\n                  <!-- <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-half.png\" /> <b>{{list.rating}}</b> -->\n                </p>\n                <span>₹ {{list.price}} </span><br />\n                <ion-text class=\"cashback-label\" *ngIf=\"list.discount\"\n                  >₹ {{list.discount}} Cashback\n                </ion-text>\n                <!-- <span *ngIf=\"list.discount\"\n                >₹ {{list.discountedPrice | number:'1.2-2'}} Lack &nbsp;<s *ngIf=\"list.discount\"\n                  >₹ {{list.price}} Lack</s\n                >\n              </span> -->\n                <br /> </ion-label\n              ><br />\n            </ion-col>\n            <ion-col> </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-row *ngIf=\"productList.length == 0\">\n      <img\n        style=\"height: 101px; margin-left: 33%; margin-top: 39px\"\n        src=\"../../../assets/img/no_list/no orders.png\" />\n      <span style=\"text-align: center; margin-left: 35%; margin-top: 39px\"\n        >No Result Found</span\n      >\n    </ion-row>\n  </div>\n</ion-content>\n\n<ng-template #skeleton>\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1, 2, 3, 4, 5,6,7,8,9]\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ng-template>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".cart-header {\n  background-color: var(--ion-background-color);\n}\n\nion-header:after {\n  content: none !important;\n}\n\n.vagnon-image {\n  width: 18px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 18px !important;\n  border-radius: 0px !important;\n}\n\nion-searchbar {\n  --border-radius:50px;\n  color: var(--ion-text-color);\n}\n\n.search {\n  margin-right: -16px;\n}\n\n.productItem {\n  margin-left: -15px;\n}\n\n.productItem ion-col img {\n  height: 80px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.product-name {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 150px;\n  display: block;\n  margin: 0px;\n}\n\n.add-button {\n  --border-width: 1px;\n  --border-color: var(--ion-border-color);\n  width: 100%;\n  height: 32px;\n  margin: 0px;\n  color: var(--ion-text-color);\n  background-color: var(--ion-background-addbutton-rgb);\n}\n\n.plus-button {\n  border: 1px solid var(--ion-border-color);\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  background: var(--ion-background-plus);\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.plus-button .minus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: left;\n}\n\n.plus-button .plus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: right;\n}\n\n.ratings-star {\n  color: var(--ion-small-color);\n}\n\n.ratings-star img {\n  margin-right: 5px;\n  width: 14px !important;\n  height: 14px !important;\n  vertical-align: middle;\n  border-radius: 0px !important;\n}\n\n.add-button span {\n  font-size: 20px;\n  margin-top: -4px;\n  margin-left: 6px;\n  color: #a56871;\n}\n\n.product-img {\n  position: relative;\n  margin: 0px;\n  background-image: cover;\n}\n\n.product-img span.offer {\n  position: absolute;\n  left: -6px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.product-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: 0px;\n  bottom: -5px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.cashback-label {\n  color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0dGOztBRERBO0VBQ0Usb0JBQUE7RUFDQSw0QkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDUUY7O0FETkE7RUFDRSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxxREFBQTtBQ1NGOztBRFBBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1VGOztBRFJBO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFRBO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBQ1lGOztBRFZBO0VBQ0UsNkJBQUE7QUNhRjs7QURYQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUNjRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDV0Y7O0FEVEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0FDWUY7O0FEVEE7RUFDRSxZQUFBO0FDWUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbmlvbi1oZWFkZXI6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi52YWdub24taW1hZ2V7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLXNlYXJjaGJhcntcbiAgLS1ib3JkZXItcmFkaXVzOjUwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG4uc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cbi5wcm9kdWN0SXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5wcm9kdWN0SXRlbSBpb24tY29sIGltZ3tcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wcm9kdWN0LW5hbWV7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDBweDtcbn1cbi5hZGQtYnV0dG9ue1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1hZGRidXR0b24tcmdiKTtcbn1cbi5wbHVzLWJ1dHRvbntcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtcGx1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wbHVzLWJ1dHRvbiAubWludXN7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogbGVmdDtcbn1cbi5wbHVzLWJ1dHRvbiAucGx1c3tcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5yYXRpbmdzLXN0YXJ7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuLnJhdGluZ3Mtc3RhciBpbWd7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gLmFkZC1idXR0b257XG4vLyAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4vLyAgIC0tYm9yZGVyLWNvbG9yOiAjY2NjO1xuLy8gfVxuLmFkZC1idXR0b24gc3BhbntcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBjb2xvcjogI2E1Njg3MTtcbn1cbi5wcm9kdWN0LWltZ3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogY292ZXI7XG59XG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtaW1nIHNwYW4ub2ZmZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMHB4O1xuICBib3R0b206IC01cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5jYXNoYmFjay1sYWJlbHtcbiAgY29sb3I6IGJyb3duO1xufSIsIi5jYXJ0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuaW9uLWhlYWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnZhZ25vbi1pbWFnZSB7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOjUwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4ucHJvZHVjdEl0ZW0ge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5wcm9kdWN0SXRlbSBpb24tY29sIGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtYWRkYnV0dG9uLXJnYik7XG59XG5cbi5wbHVzLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLXBsdXMpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wbHVzLWJ1dHRvbiAubWludXMge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wbHVzLWJ1dHRvbiAucGx1cyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yYXRpbmdzLXN0YXIge1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cblxuLnJhdGluZ3Mtc3RhciBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWRkLWJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBjb2xvcjogI2E1Njg3MTtcbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogY292ZXI7XG59XG5cbi5wcm9kdWN0LWltZyBzcGFuLm9mZmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogLTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmNhc2hiYWNrLWxhYmVsIHtcbiAgY29sb3I6IGJyb3duO1xufSJdfQ== */");

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