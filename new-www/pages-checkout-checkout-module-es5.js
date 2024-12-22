function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckoutCheckoutHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color: white;\"></ion-menu-button> -->\n      <!-- <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px;\">\n      </ion-menu-button> -->\n      <ion-back-button defaultHref=\"/address/{{cartId}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Order Summary </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content color=\"light\">\n  <ion-grid class=\"order-summry-grid\">\n    <ion-card *ngIf=\"addressData\">\n      <p class=\"order-location\">\n        <ion-icon name=\"location-outline\"></ion-icon>\n        Deliver to {{addressData.customerName}}, {{addressData.pincode}} &nbsp;\n        <a routerLink=\"/address/{{cartId}}\">\n          <ion-icon style=\"font-size: 18px\" name=\"create-outline\"></ion-icon>\n        </a>\n      </p>\n    </ion-card>\n    <ion-card>\n      <div class=\"price-detail-box\">\n        <h6>PRICE DETAILS</h6>\n        <p>\n          <span>Price ({{cartList.length}} item)</span>\n          <span><i class=\"fa fa-rupee\"></i>{{orderTotal}}</span>\n        </p>\n        <p><span>Delivery</span> <span class=\"text-green\">Free</span></p>\n        <p class=\"price-totle\">\n          <span style=\"font-weight: 400\">Amount Payble</span>\n          <span\n            ><b style=\"font-weight: 500\"\n              ><i class=\"fa fa-rupee\"></i>{{orderTotal}}</b\n            ></span\n          >\n        </p>\n        <hr />\n        <p class=\"tag-line\" *ngFor=\"let offers of _offerList | slice :0:2\">\n          <span *ngIf=\"offers.isRewardSetting\">\n            <img src=\"../../../assets/img/tag.svg\" /> Get\n            {{offers.discountedAmount}} if your purchase amount reached to\n            {{offers.minAmount}} <br />\n          </span>\n        </p>\n        <hr />\n        <p class=\"save-price text-green\" *ngIf=\"rewarddiscount\">\n          You will Got <i class=\"fa fa-rupee\"></i> {{rewarddiscount}} on this\n          order ( Reward Applied Successfully)\n        </p>\n      </div>\n    </ion-card>\n    <div class=\"order-summery-list\">\n      <ion-card *ngFor=\"let list of cartList\">\n        <ion-row>\n          <ion-col size=\"8\">\n            <div class=\"checkout-item\">\n              <h6 class=\"product-name\">\n                <img\n                  class=\"vegIcon\"\n                  *ngIf=\"list.isVeg\"\n                  src=\"../../../../../assets/img/vag.png\"\n                  class=\"vagnon-image\"\n                />\n                <img\n                  class=\"vegIcon\"\n                  *ngIf=\"!list.isVeg\"\n                  src=\"../../../../../assets/img/nonvag.png\"\n                  class=\"vagnon-image\"\n                />\n                {{list.productId.productName}}\n              </h6>\n              <p class=\"recently-view-star\">\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" /> <b>4</b>\n              </p>\n              <span *ngIf=\"!list.productId.discount\"\n                >₹ {{list.productId.price}}\n              </span>\n              <span *ngIf=\"list.productId.discount\"\n                >₹ {{list.discountedPrice }} &nbsp;<s\n                  *ngIf=\"list.productId.discount\"\n                  >₹ {{list.productId.price}}</s\n                >\n              </span><br><br>\n              <span  *ngIf=\"list.productId.discount\">Total Item Cost : ₹ {{list.discountedPrice * list.productCount }}\n            </span>\n            <span  *ngIf=\"!list.productId.discount\">Total Item Cost : ₹ {{list.productId.price * list.productCount }}\n            </span>\n\n              <!-- <p class=\"offer-text\">\n              1 offer applied - 7 offers avaliable\n            </p>\n            <p class=\"tag-line\">\n              <img src=\"../../../assets/img/tag.svg\" /> shop ₹400 more save\n              extra 10% off\n            </p> -->\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img\n              routerLink=\"/productDetails/{{list.productId._id}}\"\n              class=\"checkout-pro-img\"\n              [src]=\"list.productId.imageVarients[0]\"\n            />\n            <!-- <span class=\"offer\" *ngIf=\"list.discount\">{{list.discount}} OFF</span> -->\n            <div *ngIf=\"list.productCount > 1\" class=\"plus-button\">\n              <span (click)=\"cartAction('remove',list)\" class=\"minus\">-</span>\n              &nbsp;&nbsp;{{list.productCount}}&nbsp;&nbsp;\n              <span (click)=\"cartAction('add',list)\" class=\"plus\">+</span>\n            </div>\n            <div *ngIf=\"list.productCount <= 1\" class=\"plus-button\">\n              <span class=\"minus\"></span>\n              &nbsp;&nbsp;{{list.productCount}}&nbsp;&nbsp;\n              <span (click)=\"cartAction('add',list)\" class=\"plus\">+</span>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n    <ion-card>\n      <div class=\"deliver-to\" *ngIf=\"addressData\">\n        <h4>Delivery To</h4>\n        <h6 style=\"text-transform: capitalize\">{{addressData.customerName}}</h6>\n        <p style=\"line-height: 21px\" class=\"address\">\n          {{addressData.houseNo}}, {{addressData.street}},\n          {{addressData.address}}, {{addressData.area}},\n          <span style=\"text-transform: capitalize\"\n            >{{addressData.city}}, {{addressData.state}},\n            {{addressData.pincode}} , {{addressData.country}}</span\n          >\n        </p>\n        Expected delivery on\n        <span class=\"ship-date\">{{todayDate}}</span>\n      </div>\n    </ion-card>\n\n    <ion-card>\n      <div class=\"deliver-to\" *ngIf=\"_offerList.length\">\n            <p class=\"animate__animated tag-line \"  [ngClass]=\"{  'animate__flash' : flashoffer }\" >\n              <img src=\"../../../assets/img/tag.svg\" /> shop ₹{{_offerList[0].minAmount -  orderTotal  | number : '1.2-2'}} more save\n              extra ₹{{_offerList[0].discountedAmount }} off\n            </p>\n      </div>\n    </ion-card>\n    <ion-card>\n      <div class=\"deliver-to\" *ngIf=\"this.userData.loyaltyCardNumber != ''\">\n            <p >\n              Loyality Card Coins &nbsp; <ion-button\n              style=\"margin-top: -9px;\"\n              [disabled]=\"offerApplied\"\n              class=\"apply-btn\"\n              (click)=\"claimCoins()\"\n              type=\"button\"\n              >Claim</ion-button>\n            </p>\n      </div>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <span class=\"offer-heading\" (click)=\"openOfferModal()\"\n          >Check Available Offers</span\n        >\n        <div class=\"check-offer\">\n          <input\n            class=\"apply-coupn\"\n            [(ngModel)]=\"coupncode\"\n            type=\"text\"\n            placeholder=\"Enter Coupn Code\"\n          />\n          <ion-button\n            [disabled]=\"offerApplied\"\n            class=\"apply-btn\"\n            (click)=\"apply()\"\n            type=\"button\"\n            >Apply</ion-button\n          >\n        </div>\n      </ion-card-content>\n      <span *ngIf=\"invalidCoupnError && !coupnAppliedMsg\" style=\"color: red;padding: 0px 0px 0px 15px;\">Invalid Coupn Code</span>\n      <span *ngIf=\"coupnAppliedMsg\" style=\"color: green;padding: 0px 0px 0px 15px;\"> Successfully Coupon Applied , You got ₹{{offerDiscounAmount}} Instant Discount </span>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"4\">\n            Item Value<br />\n            Delievry<br />\n            Coupn Applied<br />\n            Reward Discount <br />\n            <span *ngIf=\"isEnoughBalance\">loyalty Card Coins</span>\n            Tax\n          </ion-col>\n          <ion-col size=\"8\">\n            <div style=\"float: right !important\">\n              &nbsp;&nbsp;{{itemValue}}<br />\n              &nbsp;&nbsp;0.00<br />\n              - {{offerDiscounAmount}}<br />\n              - {{rewarddiscount}}.00<br />\n              <span *ngIf=\"isEnoughBalance\">- 100.00<br /></span>\n              &nbsp;&nbsp;0.00\n            </div>\n          </ion-col>\n          <hr />\n          <ion-col size=\"4\">\n            <h5 class=\"order-total\" style=\"font-size: 20px\">Order Total</h5>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div\n              class=\"order-total\"\n              style=\"float: right !important; font-size: 24px\"\n            >\n              {{orderTotal - (rewarddiscount + offerDiscounAmount) | number:'1.2-2'}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <p class=\"processedButton\" expand=\"full\" color=\"success\" (click)=\"payment()\">\n    <span>₹ {{orderTotal - rewarddiscount | number:'1.2-2'}}</span>\n    <span>Continue <img src=\"../../../assets/img/next.svg\" /></span>\n  </p>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/modal/checkOutOffer.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/modal/checkOutOffer.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckoutModalCheckOutOfferHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon style=\"font-size:23px;\" (click)=\"closeModel()\" name=\"arrow-back-outline\"></ion-icon>\n      <ion-icon style=\"margin-left: 10px;\" *ngIf=\"showSearchBox\" (click)=\"backToNormal()\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title >\n      CSD CAR\n    </ion-title>\n\n\n  </ion-toolbar>\n <ion-searchbar   *ngIf=\"showSearchBox\" spellcheck=\"true\" ></ion-searchbar>\n</ion-header>\n<ion-content>\n  <!-- <ion-item >\n    <ion-label>Filters</ion-label>\n    <ion-select interface=\"popover\" placeholder=\"Select Filter\" [(ngModel)]=\"filter\"\n    (ngModelChange)=\"onFilterChange()\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"true\">Show Reward Offers</ion-select-option>\n      <ion-select-option value=\"false\">Show Coupons </ion-select-option>\n    </ion-select>\n  </ion-item> -->\n<section class=\"total-points\">\n  <ion-item-group class=\"total-points-group\">\n    <p>Redeem Total Points</p>\n    <h2>{{reedemCount}}</h2>\n  </ion-item-group>\n</section>\n<ion-list class=\"offer-list\">\n  <ion-grid class=\"horizontalPadding\">\n    <ion-row>\n      <ion-card class=\"offer-card\" *ngFor=\"let list of _offerList\">\n        <div class=\"rotate-heading\">\n          <span *ngIf=\"!list.isRewardSetting\"> COUPON </span>\n          <span *ngIf=\"list.isRewardSetting\"> REWARD </span>\n        </div>\n        <div class=\"offer-content\">\n          <div class=\"offer-top\">\n            <ion-thumbnail >\n              <svg style=\"enable-background:new 0 0 512.001 512.001;\" id=\"fix_1\" class=\"offer-img\" *ngIf=\"list.isRewardSetting\" enable-background=\"new 0 0 24 24\" height=\"512\" viewBox=\"0 0 24 24\" width=\"512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m20.5 13h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5z\"></path><path d=\"m19.5 24h-15c-.827 0-1.5-.673-1.5-1.5v-5c0-.276.224-.5.5-.5s.5.224.5.5v5c0 .275.224.5.5.5h15c.276 0 .5-.225.5-.5v-5c0-.276.224-.5.5-.5s.5.224.5.5v5c0 .827-.673 1.5-1.5 1.5z\"></path><path d=\"m12 24c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5s.5.224.5.5v11c0 .276-.224.5-.5.5z\"></path><path d=\"m23.5 18h-7.934c-.523 0-1.016-.278-1.286-.728l-2.709-4.516c-.093-.154-.095-.347-.006-.503s.255-.253.435-.253h8.5c.176 0 .338.092.429.243l3 5c.093.154.095.347.006.503-.089.157-.255.254-.435.254zm-10.617-5 2.254 3.758c.09.149.255.242.429.242h7.05l-2.4-4z\"></path><path d=\"m8.434 18h-7.934c-.18 0-.346-.097-.435-.254-.089-.156-.086-.349.006-.503l3-5c.091-.151.253-.243.429-.243h8.5c.18 0 .346.097.435.254.089.156.086.349-.006.503l-2.709 4.514c-.27.451-.763.729-1.286.729zm-7.051-1h7.05c.175 0 .339-.093.43-.243l2.254-3.757h-7.334z\"></path><path d=\"m12 11c-3.033 0-5.5-2.468-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.468 5.5 5.5-2.467 5.5-5.5 5.5zm0-10c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z\"></path><path d=\"m12.25 8.5h-1.75c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.75c.414 0 .75-.337.75-.75s-.336-.75-.75-.75h-.5c-.965 0-1.75-.785-1.75-1.75s.785-1.75 1.75-1.75h1.75c.276 0 .5.224.5.5s-.224.5-.5.5h-1.75c-.414 0-.75.337-.75.75s.336.75.75.75h.5c.965 0 1.75.785 1.75 1.75s-.785 1.75-1.75 1.75z\"></path><path d=\"m12 9.4c-.276 0-.5-.224-.5-.5v-.9c0-.276.224-.5.5-.5s.5.224.5.5v.9c0 .277-.224.5-.5.5z\"></path><path d=\"m12 3.5c-.276 0-.5-.224-.5-.5v-.9c0-.276.224-.5.5-.5s.5.224.5.5v.9c0 .276-.224.5-.5.5z\"></path></svg>\n              <!-- <img class=\"offer-img\" *ngIf=\"list.isRewardSetting\" src=\"../../../assets/img/default_reward.png\"> -->\n              <svg *ngIf=\"!list.isRewardSetting\" class=\"offer-img\" xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Capa_1\" style=\"enable-background:new 0 0 512.001 512.001;\" version=\"1.1\" viewBox=\"0 0 512.001 512.001\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\"><g><g><path d=\"M507.606,4.394c-5.857-5.858-15.356-5.858-21.214,0l-43.69,43.69c-2.686-1.28-5.52-2.311-8.479-3.05L298.452,11.491 c-15.246-3.811-31.622,0.724-42.735,11.837L13.16,265.486c-17.545,17.546-17.545,46.096,0,63.643l169.713,169.712 c17.546,17.546,46.096,17.547,63.643,0l242.158-242.558c11.113-11.113,15.649-27.489,11.836-42.736l-33.542-135.77 c-0.74-2.958-1.77-5.793-3.05-8.479l43.69-43.69C513.464,19.75,513.464,10.252,507.606,4.394z M471.403,220.825 c1.271,5.082-0.241,10.54-3.945,14.245L225.3,477.627c-5.849,5.849-15.366,5.849-21.215,0L34.373,307.914 c-5.849-5.849-5.849-15.366,0-21.215L276.931,44.542c2.837-2.837,6.703-4.388,10.641-4.388c1.204,0,2.415,0.145,3.604,0.442 l127.53,31.483l-36.125,36.125c-16.725-7.966-37.384-5.044-51.21,8.782c-17.547,17.547-17.547,46.096,0,63.643 c8.772,8.773,20.297,13.16,31.821,13.16c11.523,0,23.048-4.386,31.82-13.16c13.829-13.828,16.75-34.486,8.782-51.211 l36.125-36.125L471.403,220.825z M373.799,159.416c-5.848,5.848-15.365,5.849-21.214,0c-5.848-5.848-5.848-15.366,0-21.214 c2.925-2.925,6.765-4.386,10.607-4.386c3.84,0,7.682,1.462,10.605,4.385l0.001,0.001l0.001,0.001 C379.648,144.051,379.647,153.568,373.799,159.416z\"></path></g></g><g><g><path d=\"M246.514,180.63c-17.546-17.546-46.096-17.546-63.643,0c-17.545,17.546-17.545,46.096,0,63.643 c17.546,17.546,46.097,17.546,63.643,0C264.061,226.726,264.061,198.177,246.514,180.63z M225.301,223.058\n                c-5.849,5.849-15.366,5.849-21.214,0c-5.848-5.849-5.85-15.366-0.001-21.214c5.849-5.848,15.365-5.849,21.215,0\n                C231.149,207.692,231.149,217.209,225.301,223.058z\"></path></g></g><g><g><path d=\"M267.728,329.128c-17.587-17.587-46.052-17.589-63.642,0c-17.547,17.547-17.547,46.096,0,63.643\n                c17.588,17.587,46.053,17.59,63.642,0C285.275,375.224,285.275,346.675,267.728,329.128z M246.514,371.557\n                c-5.861,5.862-15.352,5.863-21.214,0c-5.848-5.848-5.848-15.366,0-21.214c5.862-5.862,15.352-5.863,21.214,0\n                C252.362,356.191,252.362,365.707,246.514,371.557z\"></path></g></g><g><g><path d=\"M335.673,274.437c-0.915-8.234-8.333-14.168-16.566-13.253l-190.926,21.214c-8.234,0.915-14.168,8.331-13.253,16.566\n                c0.853,7.671,7.347,13.346,14.891,13.346c0.553,0,1.113-0.031,1.675-0.093l190.927-21.214\n                C330.655,290.087,336.589,282.671,335.673,274.437z\"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n          </ion-thumbnail>\n            <span  [ngClass]=\"{  'coupon-card-etting' : !list.isRewardSetting }\">\n\n              <span  *ngIf=\"list.isRewardSetting\">Shop for ₹{{list.minAmount}} or more and Get ₹{{list.discountedAmount}} instant\n                discount on Total Bill</span>\n\n              <span *ngIf=\"!list.isRewardSetting\">Use {{list.couponCode}} and Get ₹{{list.discountedAmount}} instant                discount on Total Bill</span>\n\n              <strong class=\"cost-price\">Cost: 200</strong>\n            </span>\n          </div>\n          <ion-row class=\"offer-bottom\">\n            <ion-col>\n              <span>Expired Date</span>\n              <span>{{list.expireDate | date : 'dd MMM yyyy'}}</span>\n            </ion-col>\n            <ion-col>\n              <ion-button *ngIf=\"!list.isRewardSetting\" (click)=\"copy(list.couponCode)\"  style=\"width: 144px;\" shape=\"round\">{{list.couponCode}}&nbsp;&nbsp;<ion-icon name=\"copy-outline\"></ion-icon></ion-button>\n              <ion-button *ngIf=\"list.isRewardSetting\"  [routerLink]=\"'/cart'\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\"  style=\"width: 144px;\" shape=\"round\">Reedem Now</ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-card>\n\n\n\n    <ion-row *ngIf=\"_offerList.length == 0\">\n        <!-- <span *ngIf=\"_offerList.length == 0\" class=\"noRecordsFound\">No Records Found</span> -->\n        <img src=\"../../../assets/img/no_list/no category-found.jpg\" >\n      </ion-row>\n\n    </ion-row>\n  </ion-grid>\n</ion-list>\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CheckoutPageRoutingModule */

  /***/
  function srcAppPagesCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
      return CheckoutPageRoutingModule;
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


    var _checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./checkout */
    "./src/app/pages/checkout/checkout.ts");

    var routes = [{
      path: '',
      component: _checkout__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }];

    var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
      _classCallCheck(this, CheckoutPageRoutingModule);
    };

    CheckoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/checkout/checkout.module.ts ***!
    \***************************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function srcAppPagesCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
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


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkout */
    "./src/app/pages/checkout/checkout.ts");
    /* harmony import */


    var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./checkout-routing.module */
    "./src/app/pages/checkout/checkout-routing.module.ts");
    /* harmony import */


    var _modal_checkOutOffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modal/checkOutOffer */
    "./src/app/pages/checkout/modal/checkOutOffer.ts");

    var CheckoutPageModule = function CheckoutPageModule() {
      _classCallCheck(this, CheckoutPageModule);
    };

    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_7__["CheckoutPageRoutingModule"]],
      declarations: [_checkout__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"], _modal_checkOutOffer__WEBPACK_IMPORTED_MODULE_8__["CheckOutOfferPage"]],
      entryComponents: [_modal_checkOutOffer__WEBPACK_IMPORTED_MODULE_8__["CheckOutOfferPage"]],
      providers: [_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"]]
    })], CheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/checkout/checkout.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCheckoutCheckoutScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "s {\n  font-size: 12px;\n  color: #545454cc;\n}\n\n.order-summry-grid ion-card {\n  margin: 0px;\n  margin-bottom: 10px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.17);\n  color: var(--ion-text-color);\n}\n\n.order-summry-grid {\n  padding: 0px;\n  color: var(--ion-text-color);\n  background: var(--ion-background-color);\n}\n\n.order-location {\n  padding: 0px 15px;\n  font-size: 16px;\n  color: var(--ion-text-color);\n}\n\n.order-total,\n.pay-with {\n  color: var(--ion-text-color);\n}\n\n.order-location .create-icon {\n  margin-left: 10px;\n  float: right;\n}\n\n.price-detail-box h6 {\n  font-size: 15px;\n  padding: 10px 15px;\n  border-bottom: 1px solid var(--ion-border-color);\n  margin: 0px;\n  font-weight: 500;\n}\n\n.price-detail-box p {\n  padding: 0px 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.price-detail-box .price-totle {\n  border-top: 1px solid var(--ion-border-color);\n  padding: 15px 15px 0px;\n  font-size: 18px;\n}\n\n.price-detail-box .save-price {\n  border-top: 1px solid var(--ion-border-color);\n  display: block;\n  padding-top: 15px;\n}\n\n.text-green {\n  color: var(--ion-text-green-color);\n}\n\n.checkout-item {\n  padding: 15px;\n}\n\n.product-name {\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  display: inline-block;\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.vagnon-image-small {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.recently-view-star {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.recently-view-star img {\n  width: 16px !important;\n  height: 16px;\n  margin-right: 5px;\n}\n\n.offer-text {\n  color: var(--ion-text-green-color);\n  margin: 5px 0px;\n}\n\n.tag-line img {\n  width: 14px;\n  vertical-align: middle;\n}\n\n.plus-button {\n  border: 1px solid var(--ion-border-color);\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  background: var(--ion-background-plus);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 0px;\n}\n\n.plus-button .minus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: left;\n  height: 100%;\n}\n\n.plus-button .plus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: right;\n  height: 100%;\n}\n\n.checkout-pro-img {\n  height: 80px;\n  width: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  border-radius: 5px;\n}\n\n.tag-line {\n  margin: 0px;\n}\n\n.deliver-to {\n  padding: 15px;\n}\n\n.deliver-to h4 {\n  margin-top: 0px;\n}\n\n.deliver-to p {\n  margin: 5px 0px;\n}\n\n.processedButton {\n  background-color: var(--ion-continue-background);\n  height: 100%;\n  margin: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.processedButton span {\n  color: #fff;\n}\n\n.processedButton img {\n  width: 16px;\n  vertical-align: middle;\n}\n\n.product-row + .product-row {\n  border-top: 1px solid #ccc;\n}\n\n.add-button {\n  --border-width:1px;\n  --border-color:#ccc;\n  height: 32px;\n  width: 100%;\n}\n\n.ship-date {\n  color: var(--ion-text-green-color);\n  font-size: 14px;\n}\n\n.check-offer {\n  display: flex;\n  justify-content: space-between;\n  vertical-align: middle;\n  margin-top: 8px;\n}\n\n.apply-coupn {\n  padding: 3px 8px;\n  width: 81%;\n  border: 0px;\n  outline: none;\n  background: transparent;\n  color: var(--ion-text-color);\n  background: var(--ion-background-color);\n  border: 1px #afa3a3 solid;\n}\n\n.order-summery-list ion-card {\n  margin: 0px;\n  box-shadow: none;\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.apply-btn {\n  height: 28px;\n  margin: 0px;\n  --background: var(--ion-continue-background);\n}\n\n.offer-heading {\n  color: var(--ion-text-green-color);\n  font-weight: 500;\n  font-size: 15px;\n  text-decoration: underline;\n  padding: 3px 2px;\n}\n\n.vagnon-image {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n  margin-top: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0dGOztBRERBOztFQUVFLDRCQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ09GOztBRExBO0VBQ0UsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNRRjs7QUROQTtFQUNFLDZDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQ0FBQTtBQ1VGOztBRFJBO0VBQ0UsYUFBQTtBQ1dGOztBRFRBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNZRjs7QURWQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDYUY7O0FEWEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ2NGOztBRFpBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNlRjs7QURiQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQ2lCRjs7QURmQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDa0JGOztBRGhCQTtFQUNFLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbUJGOztBRGpCQTtFQUNFLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDb0JGOztBRGxCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDcUJGOztBRG5CQTtFQUNFLFdBQUE7QUNzQkY7O0FEcEJBO0VBQ0UsYUFBQTtBQ3VCRjs7QURyQkE7RUFDRSxlQUFBO0FDd0JGOztBRHRCQTtFQUNFLGVBQUE7QUN5QkY7O0FEdkJBO0VBQ0UsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUMwQkY7O0FEeEJBO0VBQ0UsV0FBQTtBQzJCRjs7QUR6QkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUM0QkY7O0FEMUJBO0VBQ0UsMEJBQUE7QUM2QkY7O0FEMUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDNkJGOztBRDNCQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtBQzhCRjs7QUQ1QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUMrQkY7O0FEN0JBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtBQ2dDRjs7QUQ3QkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtBQ2dDSjs7QUQ1QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0FDK0JGOztBRDVCQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQytCRjs7QUQzQkE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDOEJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTRjY1xufVxuXG4ub3JkZXItc3VtbXJ5LWdyaWQgaW9uLWNhcmR7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLm9yZGVyLXN1bW1yeS1ncmlke1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cbi5vcmRlci1sb2NhdGlvbntcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5vcmRlci10b3RhbCxcbi5wYXktd2l0aHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5vcmRlci1sb2NhdGlvbiAuY3JlYXRlLWljb257XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucHJpY2UtZGV0YWlsLWJveCBoNntcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJpY2UtZGV0YWlsLWJveCBwe1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByaWNlLWRldGFpbC1ib3ggLnByaWNlLXRvdGxle1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcmljZS1kZXRhaWwtYm94IC5zYXZlLXByaWNle1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi50ZXh0LWdyZWVue1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtZ3JlZW4tY29sb3IpO1xufVxuLmNoZWNrb3V0LWl0ZW17XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ucHJvZHVjdC1uYW1le1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnZhZ25vbi1pbWFnZS1zbWFsbHtcbiAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbn1cbi5yZWNlbnRseS12aWV3LXN0YXJ7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucmVjZW50bHktdmlldy1zdGFyIGltZ3tcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5vZmZlci10ZXh0e1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtZ3JlZW4tY29sb3IpO1xuICBtYXJnaW46IDVweCAwcHg7XG59XG4udGFnLWxpbmUgaW1ne1xuICB3aWR0aDogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wbHVzLWJ1dHRvbntcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtcGx1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnBsdXMtYnV0dG9uIC5taW51c3tcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucGx1cy1idXR0b24gLnBsdXN7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jaGVja291dC1wcm8taW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udGFnLWxpbmV7XG4gIG1hcmdpbjogMHB4O1xufVxuLmRlbGl2ZXItdG97XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uZGVsaXZlci10byBoNHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmRlbGl2ZXItdG8gcHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLnByb2Nlc3NlZEJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2Nlc3NlZEJ1dHRvbiBzcGFue1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9jZXNzZWRCdXR0b24gaW1ne1xuICB3aWR0aDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wcm9kdWN0LXJvdyArIC5wcm9kdWN0LXJvd3tcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5hZGQtYnV0dG9ue1xuICAtLWJvcmRlci13aWR0aDoxcHg7XG4gIC0tYm9yZGVyLWNvbG9yOiNjY2M7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2hpcC1kYXRle1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtZ3JlZW4tY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2stb2ZmZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmFwcGx5LWNvdXBue1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICB3aWR0aDogODElO1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyIDogMXB4ICNhZmEzYTMgc29saWQ7XG59XG4ub3JkZXItc3VtbWVyeS1saXN0e1xuICBpb24tY2FyZHtcbiAgICBtYXJnaW46MHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICB9XG59XG5cbi5hcHBseS1idG57XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xufVxuXG4ub2ZmZXItaGVhZGluZ3tcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWdyZWVuLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZzogM3B4IDJweDtcbn1cblxuXG4udmFnbm9uLWltYWdle1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuIiwicyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1NDU0NTRjYztcbn1cblxuLm9yZGVyLXN1bW1yeS1ncmlkIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNyk7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5vcmRlci1zdW1tcnktZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ub3JkZXItbG9jYXRpb24ge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ub3JkZXItdG90YWwsXG4ucGF5LXdpdGgge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ub3JkZXItbG9jYXRpb24gLmNyZWF0ZS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnByaWNlLWRldGFpbC1ib3ggaDYge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByaWNlLWRldGFpbC1ib3ggcCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcmljZS1kZXRhaWwtYm94IC5wcmljZS10b3RsZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgcGFkZGluZzogMTVweCAxNXB4IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJpY2UtZGV0YWlsLWJveCAuc2F2ZS1wcmljZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4udGV4dC1ncmVlbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1ncmVlbi1jb2xvcik7XG59XG5cbi5jaGVja291dC1pdGVtIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi52YWdub24taW1hZ2Utc21hbGwge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ucmVjZW50bHktdmlldy1zdGFyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlY2VudGx5LXZpZXctc3RhciBpbWcge1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ub2ZmZXItdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1ncmVlbi1jb2xvcik7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnRhZy1saW5lIGltZyB7XG4gIHdpZHRoOiAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucGx1cy1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1wbHVzKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5wbHVzLWJ1dHRvbiAubWludXMge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBsdXMtYnV0dG9uIC5wbHVzIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hlY2tvdXQtcHJvLWltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udGFnLWxpbmUge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmRlbGl2ZXItdG8ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uZGVsaXZlci10byBoNCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmRlbGl2ZXItdG8gcCB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnByb2Nlc3NlZEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb250aW51ZS1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2Nlc3NlZEJ1dHRvbiBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wcm9jZXNzZWRCdXR0b24gaW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wcm9kdWN0LXJvdyArIC5wcm9kdWN0LXJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXdpZHRoOjFweDtcbiAgLS1ib3JkZXItY29sb3I6I2NjYztcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaXAtZGF0ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1ncmVlbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNoZWNrLW9mZmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5hcHBseS1jb3VwbiB7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGJvcmRlcjogMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXI6IDFweCAjYWZhM2EzIHNvbGlkO1xufVxuXG4ub3JkZXItc3VtbWVyeS1saXN0IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmFwcGx5LWJ0biB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xufVxuXG4ub2ZmZXItaGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1ncmVlbi1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmc6IDNweCAycHg7XG59XG5cbi52YWdub24taW1hZ2Uge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/checkout/checkout.ts ***!
    \********************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppPagesCheckoutCheckoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _modal_checkOutOffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal/checkOutOffer */
    "./src/app/pages/checkout/modal/checkOutOffer.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var CheckoutPage = /*#__PURE__*/function () {
      function CheckoutPage(_ProductService, _Router, Router, toastController, modalController, _UserData) {
        _classCallCheck(this, CheckoutPage);

        this._ProductService = _ProductService;
        this._Router = _Router;
        this.Router = Router;
        this.toastController = toastController;
        this.modalController = modalController;
        this._UserData = _UserData;
        this.cartList = [];
        this.orderTotal = 0;
        this.flashoffer = false;
        this.todayDate = new Date().toJSON().slice(0, 10);
        this.searchproductList = [];
        this.aplicableofferDiscountArr = [];
        this.rewarddiscount = 0;
        this.isSearchEnable = false;
        this.itemValue = 0;
        this._couponsList = [];
        this.offerDiscounAmount = 0.0;
        this.offerApplied = false;
        this.invalidCoupnError = false;
        this.coupnAppliedMsg = false;
        this.couponId = "";
        this.filter = false;
        this._offerList = [];
        this.userData = {
          walletBalance: 0,
          loyaltyCardNumber: ""
        };
        this.isEnoughBalance = false;
      }

      _createClass(CheckoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cartId = this._Router.snapshot.params.cartId;
          this.addressId = this._Router.snapshot.params.addressId;
          console.log(this.addressId, "addressId");
          console.log(this.cartId, "cartId");
          this.getCartList();
          this.getCouponsList();
          this.getCustomerProfile();
          this.flash(); // this.fetchOffers();
        }
      }, {
        key: "flash",
        value: function flash() {
          var _this = this;

          setInterval(function () {
            _this.flashoffer = true;
            setTimeout(function () {
              _this.flashoffer = false;
            }, 1000);
          }, 5000);
        }
      }, {
        key: "getCartList",
        value: function getCartList() {
          var _this2 = this;

          var shopId = localStorage.getItem("shopID");

          this._ProductService.cartList(localStorage.getItem("userId"), shopId).subscribe(function (data) {
            console.log(data, "cart List");
            _this2.cartList = data.length == 0 ? [] : data[0].productDetails;
            console.log("data['productDetails']", data[0]["productDetails"]);
            var total = 0;
            data[0]["productDetails"].forEach(function (val) {
              if (val.productId) {
                var discount = val.productId.discount;
                var price = val.productId.price;
                var discountedPrice = price * discount / 100;
                total = total + (price - discountedPrice) * val.productCount;
                val["discountedPrice"] = (price - discountedPrice).toFixed(2); // alert("price : " + price + "discount : " + discount  )
                // alert("discounted Price : " + discountedPrice + "final : " + val["discountedPrice"]  )
              }
            });
            console.log(total);
            _this2.orderTotal = total.toFixed(2);
            _this2.itemValue = total.toFixed(2);

            _this2._ProductService.listOffer("").subscribe(function (res) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this3 = this;

                var largest, i;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(res);

                        if (res) {
                          this._offerList = res["data"];
                        }

                        this._offerList.forEach(function (offer) {
                          if (offer.isRewardSetting && offer.minAmount <= parseInt(_this3.orderTotal)) {
                            _this3.aplicableofferDiscountArr.push(offer.discountedAmount);
                          }
                        });

                        this._offerList = this._offerList.filter(function (offer) {
                          return parseInt(offer.minAmount) > parseInt(_this3.orderTotal);
                        });

                        this._offerList.sort(function (a, b) {
                          return parseFloat(a.minAmount) - parseFloat(b.minAmount);
                        });

                        if (this.aplicableofferDiscountArr.length) {
                          largest = 0;

                          for (i = 0; i <= largest; i++) {
                            if (this.aplicableofferDiscountArr[i] > largest) {
                              largest = this.aplicableofferDiscountArr[i];
                            }
                          }

                          console.log(largest, this.aplicableofferDiscountArr, "====================");
                          this.rewarddiscount = largest;
                        }

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });

            _this2.getAddress();
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this4 = this;

          this._ProductService.getAddressDetails(localStorage.getItem("userId"), this.addressId).subscribe(function (data) {
            console.log(data, "address Data");
            _this4.addressData = data;
          });
        }
      }, {
        key: "getCouponsList",
        value: function getCouponsList() {
          var _this5 = this;

          var arr = [];

          this._ProductService.listOffer(false).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(res);

                      if (res) {
                        this._couponsList = res["data"];
                      }

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "apply",
        value: function apply() {
          var _this6 = this;

          console.log(this._couponsList);

          this._couponsList.forEach(function (offer) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.coupncode.toLowerCase() == offer.couponCode.toLowerCase())) {
                        _context3.next = 18;
                        break;
                      }

                      this.offerDiscounAmount = offer.discountedAmount;
                      this.offerDiscounAmount = this.offerDiscounAmount.toFixed(2);
                      this.couponId = offer._id;

                      if (!(this.orderTotal < this.offerDiscounAmount)) {
                        _context3.next = 10;
                        break;
                      }

                      _context3.next = 7;
                      return this.toastController.create({
                        message: "Applied Amount is invalid , Offer Can not Applied",
                        color: "warning",
                        duration: 2000
                      });

                    case 7:
                      toast = _context3.sent;
                      toast.present();
                      return _context3.abrupt("return");

                    case 10:
                      this.invalidCoupnError = false;
                      this.orderTotal = this.orderTotal - this.offerDiscounAmount;
                      this.orderTotal = this.orderTotal.toFixed(2);
                      this.offerApplied = true;
                      this.coupncode = "";
                      this.coupnAppliedMsg = true;
                      _context3.next = 20;
                      break;

                    case 18:
                      // alert("called")
                      this.invalidCoupnError = true;
                      setTimeout(function () {
                        _this7.invalidCoupnError = false;
                      }, 2000);

                    case 20:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          });
        }
      }, {
        key: "openOfferModal",
        value: function openOfferModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _modal_checkOutOffer__WEBPACK_IMPORTED_MODULE_5__["CheckOutOfferPage"],
                      componentProps: {
                        filterData: this.filter
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {}
                    });
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "failureCallback",
        value: function failureCallback(error) {
          console.log(error, "error++++++++++++++++++++");
          alert("Transaction Failed for reason " + error.RESPMSG);
          this.Router.navigateByUrl("/orderSummary/null");
        }
      }, {
        key: "fetchOffers",
        value: function fetchOffers() {
          var _this8 = this;

          var arr = [];

          this._ProductService.listOffer("").subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(res);

                      if (res) {
                        this._offerList = res["data"];
                        this._offerList = this._offerList.filter(function (offer) {
                          return parseInt(offer.minAmount) > parseInt(_this9.orderTotal);
                        });
                      }

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          });
        }
      }, {
        key: "payment",
        value: function payment() {
          var _this10 = this;

          var self = this; // self.Router.navigateByUrl(`/orderSummary/12364`);

          this._ProductService.getCheckSum({
            mobile: "8920832260",
            email: "abc@gmail.com",
            customer_id: localStorage.getItem("userId"),
            amount: this.orderTotal
          }).subscribe(function (data) {
            console.log(data, "orderData");
            var checksum = data.checksum;
            var orderId = data.payload.ORDER_ID; // let options = {
            //   REQUEST_TYPE: "DEFAULT",
            //   ENVIRONMENT: "staging",
            //   MID: "Nrrwgu05043713596268", // You would get this details from paytm after opening an account with them
            //   ORDER_ID: orderId, // Unique ID for each transaction. This info is for you to track the transaction details
            //   CUST_ID: "1000098811100", // Unique ID for your customer
            //   INDUSTRY_TYPE_ID: "Retail", // You would get this details from paytm after opening an account with them
            //   CHANNEL_ID: "WAP", // You would get this details from paytm after opening an account with them
            //   TXN_AMOUNT: "1", // Transaction amount that has to be collected
            //   WEBSITE: "WEBSTAGING", // You would get this details from paytm after opening an account with them
            //   MOBILE_NO: "8920832260", // Mobile no of customer
            //   EMAIL: "abc@gmail.com", // Email of customer
            //   CALLBACK_URL: `https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=${orderId}`, // Callback url
            //   CHECKSUMHASH: checksum,
            // };

            var options = data.payload;
            options["ENVIRONMENT"] = "staging";
            options["CHECKSUMHASH"] = checksum;
            console.log("==============>>>", options);
            paytm.startPayment(options, function (success) {
              var payload = {
                cartId: self.cartId,
                addressId: self.addressId,
                ownerId: self._ProductService.getOwnerId(),
                couponApplied: self.coupnAppliedMsg,
                rewardApplied: self.rewarddiscount ? true : false,
                coinsApplied: self.isEnoughBalance ? true : false,
                couponAmount: self.offerDiscounAmount,
                rewardAmount: self.rewarddiscount,
                coinAmount: self.isEnoughBalance ? 100 : 0,
                balance: self.userData.walletBalance + self.orderTotal - (self.rewarddiscount + self.offerDiscounAmount)
              };

              if (self.couponId) {
                payload["couponId"] = self.couponId;
              }

              console.log(JSON.stringify(success));

              self._ProductService.orderProduct(payload).subscribe(function (data) {
                console.log(data, "orderData");

                if (success.STATUS == "TXN_SUCCESS") {
                  var _orderId = data[0].saveDataInOrderTable.orderId;
                  self.Router.navigateByUrl("/orderSummary/".concat(_orderId));
                } else {
                  alert("Transaction Failed for reason " + success.RESPMSG);
                }
              });
            }, _this10.failureCallback.bind(_this10));
          });
        }
      }, {
        key: "cartAction",
        value: function cartAction(action, productData) {
          var saveForLater = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this11 = this;

            var count, payload;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    count = 0;

                    if (action == "add") {
                      count = 1;
                    } else if (action == "remove") {
                      count = -1;
                    }

                    if (saveForLater == "saveForLater") {
                      console.log("productData", productData);
                      count = -productData.productCount;
                    }

                    payload = {
                      productDetails: {
                        productId: productData.productId._id,
                        productCount: count
                      },
                      UserId: localStorage.getItem("userId"),
                      shopId: localStorage.getItem("shopID")
                    };

                    this._ProductService.addToCart(action, payload).subscribe(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (data) {
                                  this.getCartList();
                                }

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getCustomerProfile",
        value: function getCustomerProfile() {
          var _this12 = this;

          this._UserData.getCustomerDetails(localStorage.getItem("userId")).subscribe(function (data) {
            _this12.userData = data; // this.userData.walletBalance = 1000;

            console.log(_this12.userData, "---");
          });
        }
      }, {
        key: "claimCoins",
        value: function claimCoins() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var toast;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(this.userData.walletBalance >= 100)) {
                      _context8.next = 5;
                      break;
                    }

                    this.isEnoughBalance = true;
                    this.orderTotal = this.orderTotal - 100;
                    _context8.next = 11;
                    break;

                  case 5:
                    this.isEnoughBalance = false;
                    _context8.next = 8;
                    return this.toastController.create({
                      message: "You don`t have sufficent coins to claim. Min 100 coins are required",
                      duration: 3000,
                      color: "warning",
                      position: "bottom",
                      animated: true
                    });

                  case 8:
                    toast = _context8.sent;
                    toast.present();
                    return _context8.abrupt("return");

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return CheckoutPage;
    }();

    CheckoutPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]
      }];
    };

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-checkout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.scss */
      "./src/app/pages/checkout/checkout.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]])], CheckoutPage);
    /***/
  },

  /***/
  "./src/app/pages/checkout/modal/checkOutOffer.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/checkout/modal/checkOutOffer.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCheckoutModalCheckOutOfferScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noRecordsFound {\n  margin-left: 31%;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\nion-content {\n  --background:var(--ion-offer-backgorund);\n}\n\n.total-points {\n  background: var(--ion-offer-bg-color);\n  text-align: center;\n  color: #fff;\n  position: relative;\n}\n\n.total-points:after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 500px solid transparent;\n  border-right: 0px solid transparent;\n  border-bottom: 75px solid var(--ion-offer-backgorund);\n  position: absolute;\n  bottom: -3px;\n  left: -20px;\n}\n\n.total-points-group {\n  padding: 15px 0px 100px;\n}\n\n.total-points-group::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -50px;\n  height: 250px;\n  width: 250px;\n  left: -80px;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.total-points-group::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -70px;\n  height: 200px;\n  width: 200px;\n  left: 100px;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.total-points-group p {\n  margin-top: 0px;\n}\n\n.total-points-group h2 {\n  font-size: 42px;\n}\n\n.total-points-group span {\n  font-size: 16px;\n}\n\n.offer-list {\n  margin-top: -110px;\n  background: transparent;\n}\n\n.offer-card {\n  position: relative;\n  border-left: 50px solid #713D88;\n  padding: 15px 15px;\n  overflow: inherit;\n  border-radius: 10px;\n  -o-object-fit: inherit;\n     object-fit: inherit;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);\n}\n\n.rotate-heading {\n  letter-spacing: 3px;\n  position: absolute;\n  top: 46%;\n  left: -60px;\n  transform: rotate(270deg);\n  z-index: 999;\n  color: #fff;\n}\n\n.offer-content .offer-top {\n  display: flex;\n  margin-bottom: 10px;\n  color: var(--ion-text-color);\n}\n\n.offer-content .offer-top ion-thumbnail {\n  width: 160px;\n  margin-right: 15px;\n  text-align: center;\n}\n\n.offer-bottom span,\n.offer-bottom strong {\n  display: block;\n  color: var(--ion-text-color);\n}\n\n.offer-card:nth-child(2n-5) {\n  border-left-color: #4F7E91;\n}\n\n.offer-card:nth-child(3n-6) {\n  border-left-color: #1288BB;\n}\n\n.offer-card:nth-child(4n-7) {\n  border-left-color: #77B5CE;\n}\n\n.offer-bottom ion-button {\n  margin-bottom: 0px;\n  border-radius: 30px;\n  --background: #713D88;\n}\n\n.offer-card:nth-child(1) .offer-bottom ion-button {\n  --background: #77b5ce !important;\n}\n\n.offer-card:nth-child(2n-5) .offer-bottom ion-button {\n  --background: #4F7E91;\n}\n\n.offer-card:nth-child(3n-6) .offer-bottom ion-button {\n  --background: #1288BB;\n}\n\n.offer-card:nth-child(4n-7) .offer-bottom ion-button {\n  --background: #77B5CE;\n}\n\n.offer-card::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  left: -50px;\n  background-color: var(--ion-offer-backgorund);\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.offer-card::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  right: -20px;\n  background-color: var(--ion-offer-backgorund);\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.offer-card:nth-child(1) {\n  border-left-color: #77b5ce !important;\n}\n\n.offer-card:nth-child(1)::before {\n  background: var(--ion-offer-bg-color);\n}\n\n.offer-img {\n  width: 40px;\n  height: 60px;\n  margin: 0 auto;\n  fill: var(--ion-text-color);\n}\n\n.cost-price {\n  display: block;\n  color: var(--ion-bggreen-light);\n  margin-top: 5px;\n}\n\n.coupon-card-etting {\n  margin-right: 76px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9jaGVja291dC9tb2RhbC9jaGVja091dE9mZmVyLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L21vZGFsL2NoZWNrT3V0T2ZmZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3Q0FBQTtBQ0VGOztBREFBO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLHVCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtBQ1NGOztBRFBBO0VBQ0UsZUFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ1dGOztBRFRBO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSw0Q0FBQTtBQ1lGOztBRFZBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2FGOztBRFhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNjRjs7QURaQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZUY7O0FEYkE7O0VBRUUsY0FBQTtFQUNBLDRCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsMEJBQUE7QUNpQkY7O0FEZkE7RUFDRSwwQkFBQTtBQ2tCRjs7QURoQkE7RUFDRSwwQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsZ0NBQUE7QUNxQkY7O0FEbkJBO0VBQ0UscUJBQUE7QUNzQkY7O0FEcEJBO0VBQ0UscUJBQUE7QUN1QkY7O0FEckJBO0VBQ0UscUJBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUN5QkY7O0FEdkJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUMwQkY7O0FEeEJBO0VBQ0UscUNBQUE7QUMyQkY7O0FEekJBO0VBQ0UscUNBQUE7QUM0QkY7O0FEMUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUM2QkY7O0FEM0JBO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQzhCRjs7QUQzQkE7RUFDRSxrQkFBQTtBQzhCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L21vZGFsL2NoZWNrT3V0T2ZmZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub1JlY29yZHNGb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbn1cbi50b3RhbC1wb2ludHN7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50b3RhbC1wb2ludHM6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3NXB4IHNvbGlkIHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuLnRvdGFsLXBvaW50cy1ncm91cHtcbiAgcGFkZGluZzogMTVweCAwcHggMTAwcHg7XG59XG4udG90YWwtcG9pbnRzLWdyb3VwOjpiZWZvcmV7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbGVmdDogLTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi50b3RhbC1wb2ludHMtZ3JvdXA6OmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4udG90YWwtcG9pbnRzLWdyb3VwIHB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi50b3RhbC1wb2ludHMtZ3JvdXAgaDJ7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cbi50b3RhbC1wb2ludHMtZ3JvdXAgc3BhbntcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm9mZmVyLWxpc3R7XG4gIG1hcmdpbi10b3A6IC0xMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ub2ZmZXItY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjNzEzRDg4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBpbmhlcml0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbi5yb3RhdGUtaGVhZGluZ3tcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogLTYwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmY7XG59XG4ub2ZmZXItY29udGVudCAub2ZmZXItdG9we1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLm9mZmVyLWNvbnRlbnQgLm9mZmVyLXRvcCBpb24tdGh1bWJuYWlse1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9mZmVyLWJvdHRvbSBzcGFuLFxuLm9mZmVyLWJvdHRvbSBzdHJvbmd7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDJuLTUpe1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRGN0U5MTtcbn1cbi5vZmZlci1jYXJkOm50aC1jaGlsZCgzbi02KXtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMjg4QkI7XG59XG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoNG4tNyl7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNzdCNUNFO1xufVxuLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9ue1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzcxM0Q4ODtcbn1cbi5vZmZlci1jYXJkOm50aC1jaGlsZCgxKSAub2ZmZXItYm90dG9tIGlvbi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDJuLTUpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjNEY3RTkxO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDNuLTYpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjMTI4OEJCO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDRuLTcpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjNzdCNUNFO1xufVxuLm9mZmVyLWNhcmQ6OmJlZm9yZXtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGVmdDogLTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm9mZmVyLWNhcmQ6OmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICByaWdodDogLTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDEpe1xuICBib3JkZXItbGVmdC1jb2xvcjogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDEpOjpiZWZvcmV7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG59XG4ub2ZmZXItaW1ne1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmlsbDogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuLmNvc3QtcHJpY2V7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLWJnZ3JlZW4tbGlnaHQpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb3Vwb24tY2FyZC1ldHRpbmd7XG4gIG1hcmdpbi1yaWdodDogNzZweDtcbn1cbiIsIi5ub1JlY29yZHNGb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMSU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbn1cblxuLnRvdGFsLXBvaW50cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvdGFsLXBvaW50czphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3NXB4IHNvbGlkIHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4udG90YWwtcG9pbnRzLWdyb3VwIHtcbiAgcGFkZGluZzogMTVweCAwcHggMTAwcHg7XG59XG5cbi50b3RhbC1wb2ludHMtZ3JvdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbGVmdDogLTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLnRvdGFsLXBvaW50cy1ncm91cDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi50b3RhbC1wb2ludHMtZ3JvdXAgcCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRvdGFsLXBvaW50cy1ncm91cCBoMiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLnRvdGFsLXBvaW50cy1ncm91cCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ub2ZmZXItbGlzdCB7XG4gIG1hcmdpbi10b3A6IC0xMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5vZmZlci1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItbGVmdDogNTBweCBzb2xpZCAjNzEzRDg4O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBpbmhlcml0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuLnJvdGF0ZS1oZWFkaW5nIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogLTYwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vZmZlci1jb250ZW50IC5vZmZlci10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ub2ZmZXItY29udGVudCAub2ZmZXItdG9wIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub2ZmZXItYm90dG9tIHNwYW4sXG4ub2ZmZXItYm90dG9tIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMm4tNSkge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRGN0U5MTtcbn1cblxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDNuLTYpIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMjg4QkI7XG59XG5cbi5vZmZlci1jYXJkOm50aC1jaGlsZCg0bi03KSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNzdCNUNFO1xufVxuXG4ub2ZmZXItYm90dG9tIGlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogIzcxM0Q4ODtcbn1cblxuLm9mZmVyLWNhcmQ6bnRoLWNoaWxkKDEpIC5vZmZlci1ib3R0b20gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMm4tNSkgLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNEY3RTkxO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoM24tNikgLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTI4OEJCO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoNG4tNykgLm9mZmVyLWJvdHRvbSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNzdCNUNFO1xufVxuXG4ub2ZmZXItY2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGVmdDogLTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ub2ZmZXItY2FyZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICByaWdodDogLTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1vZmZlci1iYWNrZ29ydW5kKTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMSkge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzc3YjVjZSAhaW1wb3J0YW50O1xufVxuXG4ub2ZmZXItY2FyZDpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1vZmZlci1iZy1jb2xvcik7XG59XG5cbi5vZmZlci1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmlsbDogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uY29zdC1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLWJnZ3JlZW4tbGlnaHQpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jb3Vwb24tY2FyZC1ldHRpbmcge1xuICBtYXJnaW4tcmlnaHQ6IDc2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/checkout/modal/checkOutOffer.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/checkout/modal/checkOutOffer.ts ***!
    \*******************************************************/

  /*! exports provided: CheckOutOfferPage */

  /***/
  function srcAppPagesCheckoutModalCheckOutOfferTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckOutOfferPage", function () {
      return CheckOutOfferPage;
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
    /*! ../../../providers/product.services */
    "./src/app/providers/product.services.ts");
    /* harmony import */


    var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/clipboard/ngx */
    "./node_modules/@ionic-native/clipboard/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var CheckOutOfferPage = /*#__PURE__*/function () {
      function CheckOutOfferPage(_ProductService, clipboard, toastController, modalController, _Router) {
        _classCallCheck(this, CheckOutOfferPage);

        this._ProductService = _ProductService;
        this.clipboard = clipboard;
        this.toastController = toastController;
        this.modalController = modalController;
        this._Router = _Router;
        this.filter = '';
        this.searchproductList = [];
        this.reedemCount = 0;
        this._offerList = [];
        this.cartCount = 0;
        this.showSearchBox = false;
      }

      _createClass(CheckOutOfferPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.filterData, "filterData");
          this.filter = this.filterData;
          this.getProductList();
          this.fetchOffers();
          this.getCashbacks();
        }
      }, {
        key: "closeModel",
        value: function closeModel() {
          this.modalController.dismiss();
        }
      }, {
        key: "getCashbacks",
        value: function getCashbacks() {
          var _this13 = this;

          this._ProductService.getCashBacks(localStorage.getItem('userId')).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this14 = this;

              var list;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      console.log(res);

                      if (res) {
                        list = res;
                        list.forEach(function (val) {
                          _this14.reedemCount = _this14.reedemCount + val.amount;
                        });
                      }

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          });
        }
      }, {
        key: "onFilterChange",
        value: function onFilterChange() {
          console.log(this.filter);
          this.fetchOffers();
        }
      }, {
        key: "fetchOffers",
        value: function fetchOffers() {
          var _this15 = this;

          this.getCartCount();

          this._ProductService.listOffer(this.filterData).subscribe(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      console.log(res);

                      if (res) {
                        this._offerList = res["data"];
                      }

                    case 2:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          });
        }
      }, {
        key: "copy",
        value: function copy(code) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var toast;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    console.log(code, ":: code ");
                    this.clipboard.clear();
                    this.clipboard.copy(code);
                    _context11.next = 5;
                    return this.toastController.create({
                      message: "Offer Code Copied",
                      duration: 2000,
                      position: "bottom",
                      color: 'success',
                      animated: true
                    });

                  case 5:
                    toast = _context11.sent;
                    toast.present(); // this.toast.

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
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
        key: "getProductList",
        value: function getProductList() {
          var _this16 = this;

          this._ProductService.getProductList(localStorage.getItem('shopID')).subscribe(function (data) {
            _this16.productList = data;
            console.log(_this16.productList);
          });
        }
      }, {
        key: "getCartCount",
        value: function getCartCount() {
          var _this17 = this;

          var shopId = localStorage.getItem('shopID');

          this._ProductService.cartList(localStorage.getItem("userId"), shopId).subscribe(function (data) {
            if (data.length) {
              _this17.cartCount = data[0].productDetails.length;
            }
          });
        }
      }, {
        key: "openSocial",
        value: function openSocial(network, fab) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }]);

      return CheckOutOfferPage;
    }();

    CheckOutOfferPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CheckOutOfferPage.prototype, "filterData", void 0);
    CheckOutOfferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-checkOutOffer",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkOutOffer.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/modal/checkOutOffer.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkOutOffer.scss */
      "./src/app/pages/checkout/modal/checkOutOffer.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], CheckOutOfferPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-checkout-checkout-module-es5.js.map