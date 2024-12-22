function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-review-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review/review.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review/review.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReviewReviewHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button *ngIf=\"!showSearchBox\" style=\"color: white;\"></ion-menu-button> -->\n      <!-- <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px;\">\n      </ion-menu-button> -->\n      <ion-back-button defaultHref=\"/home\" style=\"color: white;\"></ion-back-button>\n      <ion-icon style=\"margin-left: 10px;\" *ngIf=\"showSearchBox\" (click)=\"backToNormal()\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      Product Review\n    </ion-title>\n\n    <ion-buttons *ngIf=\"!showSearchBox\" slot=\"end\"  routerLink=\"/search/review\" >\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-buttons>\n\n     <ion-buttons  slot=\"end\">\n      <ion-button [routerLink]=\"['/cart']\">\n        <ion-icon slot=\"icon-only\" name=\"cart\" style=\"color: white;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n <ion-searchbar   (ionChange)=\"search($event)\"  *ngIf=\"showSearchBox\" spellcheck=\"true\" ></ion-searchbar>\n</ion-header>\n\n<ion-content  *ngIf=\"!isSearchEnable\">\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"getorderList($event)\">\n    <ion-refresher-content   pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n\n  <!-- <ion-list>\n\n    <ion-list-header  color=\"light\"><span class=\"page_header\">Review Your Orders</span>\n    </ion-list-header>\n\n    <ion-item *ngFor=\"let order of orderList\" style=\"border-bottom: 1px black solid; height: auto;\">\n      <ion-grid>\n        <ion-row>\n          <ion-img class=\"center-align productImg\" src=\"{{order.productImage}}\"></ion-img>\n        </ion-row>\n        <ion-row>\n          <h6 class=\"rating-align\">{{order.productName}}</h6>\n        </ion-row>\n        <ion-row>\n          <div class=\"rating-align\">\n            <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\" (click)=\"rate(num,order._id)\" [ngStyle]=\"{'fill':getColor(num,order.rating)}\">\n            </ion-icon>\n          </div>\n        </ion-row>\n        <ion-row> -->\n          <!-- {{order._id}}  == {{boxId}} -->\n          <!-- <textarea [(ngModel)]=\"review\" placeholder=\"Write Your Review\" class=\"commentBox\" *ngIf=\"isCommentBoxEnable && order._id == boxId\"></textarea> -->\n          <!-- <ion-button class=\"rating-align\" color=\"warnin\">Write Review</ion-button> -->\n           <!-- <ion-button *ngIf=\"!isCommentBoxEnable\" class=\"rating-align\" (click)=\"openCommentBox(order._id)\" color=\"warning\">Write Review</ion-button>\n          <ion-button *ngIf=\"isCommentBoxEnable\"class=\"rating-align\" (click)=\"SubmitReview(order.productId)\" color=\"warning\">Submit</ion-button>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"isSearchEnable\">\n  <ion-list style=\"margin-top: 21px;\" *ngIf=\"searchproductList.length != 0\">\n    <ion-list-header color=\"light\"><span class=\"page_header\"> &nbsp; {{searchproductList.length}} &nbsp;Search Results (0.41 seconds)  </span></ion-list-header>\n    <ion-item *ngFor=\"let list of searchproductList\" routerLink=\"/productDetails/{{list._id}}\">\n      <ion-thumbnail slot=\"start\">\n        <img *ngIf=\"list.productImage\" src=\"{{list.productImage}}\">\n        <img *ngIf=\"!list.productImage\"\n          src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOcR3YlsuwuwDc4K5LFFCo2U4mqWh8gcvW8g938ye2YC5ccUog&usqp=CAU\">\n      </ion-thumbnail>\n      <ion-label>{{list.title}}<br>{{list.price}} &nbsp;/-</ion-label><br>\n\n    </ion-item>\n\n  </ion-list> -->\n  <!-- <ion-list style=\"margin-top: 21px;\" *ngIf=\"orderList.length != 0\">\n    <ion-list-header color=\"light\"><span class=\"page_header\"> Orders</span></ion-list-header>\n    <ion-item *ngFor=\"let list of orderList\">\n      <ion-thumbnail slot=\"start\">\n        <img *ngIf=\"list.productImage.length !== 0\" src=\"{{list.productImage}}\">\n        <img *ngIf=\"list.productImage.length == 0\"\n          src=\"https://static05.cminds.com/wp-content/uploads/edd/MTrueEditOrderS.png\">\n      </ion-thumbnail>\n      <ion-label>{{list.productName}}<br>{{list.productPrice}}</ion-label><br>\n\n    </ion-item>\n\n  </ion-list> -->\n  <!-- <ion-row *ngIf=\"searchproductList.length == 0\">\n    <span *ngIf=\"searchproductList.length == 0\" class=\"noRecordsFound\">No Records Found</span>\n    <img src=\"../../../assets/img/noRecordsFound.jpg\" style=\"margin-left: 50px;\">\n  </ion-row> -->\n  <!-- {{productDetails | json}} -->\n  <section class=\"write-review\" *ngIf=\"productDetails\">\n      <div class=\"product-img\">\n        <!-- <img [src]=\"productDetails.imageVarients[0]\"> -->\n\n<img-loader useImg [spinner]=\"true\" [src]=\"productDetails.imageVarients[0]\">\n</img-loader>\n        <p class=\"product-title\">{{productDetails.productName}}</p>\n      </div>\n      <div class=\"rating-box\">\n        <h5>Rate the product</h5>\n        <p>How did you find this product based on your usage?</p>\n        <ul>\n          <li>\n            <a >\n              <ion-icon name=\"star\" *ngFor=\"let num of [1]\" (click)=\"rate(1,productDetails._id)\" [ngStyle]=\"{'fill':getColor(1,productDetails.rating)}\">\n              </ion-icon>\n              <span>Horrible</span>\n            </a>\n          </li>\n          <li>\n            <a >\n              <ion-icon name=\"star\" *ngFor=\"let num of [1]\" (click)=\"rate(2,productDetails._id)\" [ngStyle]=\"{'fill':getColor(2,productDetails.rating)}\">\n              </ion-icon>\n              <span>Bad</span>\n            </a>\n          </li>\n          <li>\n            <a >\n              <ion-icon name=\"star\" *ngFor=\"let num of [1]\" (click)=\"rate(3,productDetails._id)\" [ngStyle]=\"{'fill':getColor(3,productDetails.rating)}\">\n              </ion-icon>\n              <span>Average</span>\n            </a>\n          </li>\n          <li>\n            <a >\n              <ion-icon name=\"star\" *ngFor=\"let num of [1]\" (click)=\"rate(4,productDetails._id)\" [ngStyle]=\"{'fill':getColor(4,productDetails.rating)}\">\n              </ion-icon>\n              <span>Good</span>\n            </a>\n          </li>\n          <li>\n            <a >\n              <ion-icon name=\"star\" *ngFor=\"let num of [1]\" (click)=\"rate(5,productDetails._id)\" [ngStyle]=\"{'fill':getColor(5,productDetails.rating)}\">\n              </ion-icon>\n              <span>Excelient</span>\n            </a>\n          </li>\n        </ul>\n        <ion-textarea [(ngModel)]=\"review\" rows=\"4\" placeholder=\"More detailed reviews got more visablilty...\"></ion-textarea>\n        <ion-button (click)=\"SubmitReview()\" class=\"bottom-fix\" color=\"primary\">Submit</ion-button>\n      </div>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/review/review-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/review/review-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ReviewPageRoutingModule */

  /***/
  function srcAppPagesReviewReviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewPageRoutingModule", function () {
      return ReviewPageRoutingModule;
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


    var _review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./review */
    "./src/app/pages/review/review.ts");

    var routes = [{
      path: '',
      component: _review__WEBPACK_IMPORTED_MODULE_3__["ReviewPage"]
    }];

    var ReviewPageRoutingModule = function ReviewPageRoutingModule() {
      _classCallCheck(this, ReviewPageRoutingModule);
    };

    ReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/review/review.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/review/review.module.ts ***!
    \***********************************************/

  /*! exports provided: ReviewPageModule */

  /***/
  function srcAppPagesReviewReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function () {
      return ReviewPageModule;
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


    var _review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./review */
    "./src/app/pages/review/review.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _review_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./review-routing.module */
    "./src/app/pages/review/review-routing.module.ts");

    var ReviewPageModule = function ReviewPageModule() {
      _classCallCheck(this, ReviewPageModule);
    };

    ReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _review_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReviewPageRoutingModule"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]],
      declarations: [_review__WEBPACK_IMPORTED_MODULE_5__["ReviewPage"]],
      entryComponents: []
    })], ReviewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/review/review.scss":
  /*!******************************************!*\
    !*** ./src/app/pages/review/review.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReviewReviewScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".productImg {\n  height: 114px;\n  width: 158px;\n}\n\n.center-align {\n  margin-left: 25%;\n}\n\n.rating-align {\n  margin-left: 31%;\n}\n\n.rating {\n  color: #ececec;\n}\n\n.rating :hover {\n  color: gold;\n}\n\n.commentBox {\n  width: 100%;\n  height: 81px;\n  margin-bottom: 20px;\n}\n\n.write-review {\n  padding: 30px 20px 0px;\n}\n\n.write-review .product-img {\n  text-align: center;\n}\n\n.write-review .product-img img {\n  max-width: 100%;\n  width: 100%;\n  height: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.write-review .product-img .product-title {\n  font-size: 18px;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n\n.rating-box {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.rating-box ul {\n  list-style: none;\n  padding: 0px;\n  padding-bottom: 30px;\n  border-bottom: 1px solid #ccc;\n}\n\n.rating-box ul li {\n  display: inline-block;\n}\n\n.rating-box ul li + li {\n  margin-left: 15px;\n}\n\n.rating-box ul li a {\n  text-decoration: none;\n  font-size: 32px;\n  display: block;\n}\n\n.rating-box ul li a i {\n  color: #E3E3E3;\n  text-shadow: 4px 3px 0px #0000008f;\n}\n\n.rating-box ul li a:hover i {\n  color: #1DBB47;\n}\n\n.rating-box ul li a span {\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n}\n\n.rating-box ion-textarea {\n  text-align: left;\n}\n\n.bottom-fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  left: 0;\n  z-index: 99;\n  border-radius: 0px;\n  margin: 0px;\n}\n\n.vagnon-image {\n  width: 18px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 18px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9yZXZpZXcvcmV2aWV3LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jldmlldy9yZXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNNRjs7QURKQTtFQUNFLHFCQUFBO0FDT0Y7O0FETEE7RUFDRSxpQkFBQTtBQ1FGOztBRE5BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FDVUY7O0FEUkE7RUFDRSxjQUFBO0FDV0Y7O0FEVEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWUY7O0FEVkE7RUFDRSxnQkFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNjRjs7QURaQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDZUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXZpZXcvcmV2aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdEltZyB7XG4gIGhlaWdodDogMTE0cHg7XG4gIHdpZHRoOiAxNThweDtcbn1cblxuXG4uY2VudGVyLWFsaWdue1xuICBtYXJnaW4tbGVmdDogMjUlXG59XG5cbi5yYXRpbmctYWxpZ257XG4gIG1hcmdpbi1sZWZ0OiAzMSVcbn1cblxuLnJhdGluZ3tcbiAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbn1cblxuLnJhdGluZyA6aG92ZXJ7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4uY29tbWVudEJveHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi53cml0ZS1yZXZpZXd7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAwcHg7XG59XG4ud3JpdGUtcmV2aWV3IC5wcm9kdWN0LWltZ3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyaXRlLXJldmlldyAucHJvZHVjdC1pbWcgaW1ne1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi53cml0ZS1yZXZpZXcgLnByb2R1Y3QtaW1nIC5wcm9kdWN0LXRpdGxle1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnJhdGluZy1ib3h7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yYXRpbmctYm94IHVse1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5yYXRpbmctYm94IHVsIGxpe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucmF0aW5nLWJveCB1bCBsaSArIGxpe1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5yYXRpbmctYm94IHVsIGxpIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yYXRpbmctYm94IHVsIGxpIGEgaXtcbiAgY29sb3I6ICNFM0UzRTM7XG4gIHRleHQtc2hhZG93OiA0cHggM3B4IDBweCAjMDAwMDAwOGY7XG59XG4ucmF0aW5nLWJveCB1bCBsaSBhOmhvdmVyIGl7XG4gIGNvbG9yOiAjMURCQjQ3IDtcbn1cbi5yYXRpbmctYm94IHVsIGxpIGEgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5yYXRpbmctYm94IGlvbi10ZXh0YXJlYXtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5ib3R0b20tZml4e1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi52YWdub24taW1hZ2V7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4iLCIucHJvZHVjdEltZyB7XG4gIGhlaWdodDogMTE0cHg7XG4gIHdpZHRoOiAxNThweDtcbn1cblxuLmNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5yYXRpbmctYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogMzElO1xufVxuXG4ucmF0aW5nIHtcbiAgY29sb3I6ICNlY2VjZWM7XG59XG5cbi5yYXRpbmcgOmhvdmVyIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi5jb21tZW50Qm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLndyaXRlLXJldmlldyB7XG4gIHBhZGRpbmc6IDMwcHggMjBweCAwcHg7XG59XG5cbi53cml0ZS1yZXZpZXcgLnByb2R1Y3QtaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud3JpdGUtcmV2aWV3IC5wcm9kdWN0LWltZyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLndyaXRlLXJldmlldyAucHJvZHVjdC1pbWcgLnByb2R1Y3QtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmF0aW5nLWJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnJhdGluZy1ib3ggdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnJhdGluZy1ib3ggdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yYXRpbmctYm94IHVsIGxpICsgbGkge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnJhdGluZy1ib3ggdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnJhdGluZy1ib3ggdWwgbGkgYSBpIHtcbiAgY29sb3I6ICNFM0UzRTM7XG4gIHRleHQtc2hhZG93OiA0cHggM3B4IDBweCAjMDAwMDAwOGY7XG59XG5cbi5yYXRpbmctYm94IHVsIGxpIGE6aG92ZXIgaSB7XG4gIGNvbG9yOiAjMURCQjQ3O1xufVxuXG4ucmF0aW5nLWJveCB1bCBsaSBhIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmF0aW5nLWJveCBpb24tdGV4dGFyZWEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYm90dG9tLWZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnZhZ25vbi1pbWFnZSB7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/review/review.ts":
  /*!****************************************!*\
    !*** ./src/app/pages/review/review.ts ***!
    \****************************************/

  /*! exports provided: ReviewPage */

  /***/
  function srcAppPagesReviewReviewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewPage", function () {
      return ReviewPage;
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
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var ReviewPage = /*#__PURE__*/function () {
      function ReviewPage(modalController, _toast, route, alertController, _ProductService, Router) {
        _classCallCheck(this, ReviewPage);

        this.modalController = modalController;
        this._toast = _toast;
        this.route = route;
        this.alertController = alertController;
        this._ProductService = _ProductService;
        this.Router = Router; // public baseUrl = environment.baseUrl + '/'

        this.review = "";
        this.orderData = [];
        this.reviewList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/";
        this.orderName = " ";
        this.isSearchEnable = false;
        this.searchproductList = [];
        this.productId = "";
        this.productDetails = null;
        this.showSearchBox = false;
        this.refershDefault = {
          target: {
            complete: function complete() {
              return true;
            }
          }
        };
        this.isCommentBoxEnable = false;
        this.boxId = "";
        this.orderRating = 0;
      }

      _createClass(ReviewPage, [{
        key: "search",
        value: function search(query) {
          var _this = this;

          if (query.target.value.length >= 2) {
            this.isSearchEnable = true;

            this._ProductService.search({
              search: query.target.value,
              filter: "Product"
            }, localStorage.getItem("shopID")).subscribe(function (data) {
              console.log(data, "data");
              _this.searchproductList = data.productList;
            });
          }

          if (query.target.value.length == 0) {
            this.isSearchEnable = false; // this.getAnalyticalData()
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.route.snapshot.params);
          this.productId = this.route.snapshot.params.productId;
          this.getProductData();
        }
      }, {
        key: "getProductData",
        value: function getProductData() {
          var _this2 = this;

          this._ProductService.getProductDetails(this.productId).subscribe(function (data) {
            _this2.productDetails = data['productData'];
            _this2.productDetails["rating"] = 0;
          });
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
        } // getorderList(event = this.refershDefault) {
        //   let resp;
        //   this._ProductService
        //     .getOrderList(localStorage.getItem("userId"))
        //     .subscribe((response: any) => {
        //       console.log
        //       // resp = response["OrderList"].map((obj) => ({ ...obj, rating: 0 }));
        //       this.orderList = response;
        //       this.orderList.forEach((order)=>{
        //         order['rating']=3;
        //       })
        //       this.fetchReviewList();
        //       console.log(this.orderList, "orderList");
        //       if (event) {
        //       }
        //       setTimeout(() => {
        //         console.log("Async operation has ended");
        //         event.target.complete();
        //       }, 1000);
        //     });
        // }

      }, {
        key: "fetchReviewList",
        value: function fetchReviewList() {
          var _this3 = this;

          var resp;

          this._ProductService.getAllReviewList(localStorage.getItem("userId")).subscribe(function (response) {
            resp = response;
            _this3.reviewList = resp;
            console.log(_this3.reviewList, "reviewList");

            _this3.mapRatingwithProducts();
          });
        }
      }, {
        key: "mapRatingwithProducts",
        value: function mapRatingwithProducts() {
          var _this4 = this;

          this.orderList.forEach(function (order) {
            _this4.reviewList.forEach(function (list) {
              if (order.productId == list.productId) {
                console.log("order.productId == list.productId", order.productId, list.productId, order.productId == list.productId);
                order.rating = list.rating;
              }
            });
          });
          console.log("this.orderList", this.orderList);
        }
      }, {
        key: "getColor",
        value: function getColor(index, rating) {
          if (this.isAboveRating(index, rating)) {
            return "#DDDDDD";
          }

          return "gold";
        }
      }, {
        key: "openCommentBox",
        value: function openCommentBox(id) {
          this.isCommentBoxEnable = true;
          this.boxId = id;
        }
      }, {
        key: "rate",
        value: function rate(index, id) {
          console.log("called", index, id);
          this.orderRating = index;
          this.productDetails.rating = index; // this.orderData.forEach((order) => {
          //   if (order._id == id) {
          //     this.boxId = id;
          //     order.rating = index;
          //     this.rating = index;
          //   }
          // });
        }
      }, {
        key: "isAboveRating",
        value: function isAboveRating(index, rating) {
          return index > rating;
        }
      }, {
        key: "SubmitReview",
        value: function SubmitReview() {
          var _this5 = this;

          var resp;

          this._ProductService.saveReview({
            review: this.review,
            userId: localStorage.getItem("userId"),
            productId: this.productDetails._id,
            rating: this.productDetails.rating
          }).subscribe(function (response) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._toast.create({
                        message: "Your review has been saved successfully",
                        duration: 3000,
                        // color:'secondary',
                        position: "bottom",
                        animated: true
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();
                      setTimeout(function () {
                        _this6.Router.navigateByUrl("/productDetails/" + _this6.productDetails._id);
                      }, 600);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }]);

      return ReviewPage;
    }();

    ReviewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-review",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./review.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/review/review.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./review.scss */
      "./src/app/pages/review/review.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ReviewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-review-review-module-es5.js.map