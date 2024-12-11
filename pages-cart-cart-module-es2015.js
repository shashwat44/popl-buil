(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"cart-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button *ngIf=\"!showSearchBox\" style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px;\" />\n      </ion-menu-button>\n      <ion-icon\n        style=\"margin-left: 10px;\"\n        *ngIf=\"showSearchBox\"\n        (click)=\"backToNormal()\"\n        name=\"arrow-back-outline\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      Cart\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/search/cart\" *ngIf=\"!showSearchBox\">\n        <ion-icon name=\"search\" style=\"color: white;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar\n    (ionChange)=\"search($event)\"\n    *ngIf=\"showSearchBox\"\n    spellcheck=\"true\"\n  ></ion-searchbar>\n</ion-header>\n<span class=\"delivery-address\" *ngIf=\"addressData.length > 0\">\n  <ion-icon name=\"location-outline\"></ion-icon>&nbsp;<span\n    style=\"text-transform: capitalize;\"\n    *ngIf=\"addressData.length > 0\"\n  >\n    Deliver to {{addressData[0].customerName}} - {{addressData[0].city}} ,\n    {{addressData[0].pincode}}</span\n  >\n</span>\n<ion-content *ngIf=\"!isSearchEnable\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshList($event)\">\n    <ion-refresher-content\n\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-item class=\"productItem\" *ngFor=\"let cart of cartList\">\n    <ion-grid class=\"horizontalPaddthis.cartListing\">\n      <ion-row>\n        <ion-col\n          class=\"container\"\n          [routerLink]=\"['/productDetails/'+ cart.productId._id ]\"\n        >\n          <p class=\"product-img\">\n            <img\n              class=\"cart-img\"\n              *ngIf=\"cart.productId.imageVarients.length !== 0\"\n              src=\"{{cart.productId.imageVarients[0]}}\"\n            />\n            <img\n              class=\"cart-img\"\n              *ngIf=\"cart.productId.imageVarients.length == 0\"\n              src=\"https://im.rediff.com/getahead/2015/jun/29chicken.jpg\"\n            />\n            <span class=\"offer\" *ngIf=\"cart.productId.discount\"\n              >{{cart.productId.discount}}% OFF</span\n            >\n          </p>\n        </ion-col>\n        <ion-col [routerLink]=\"['/productDetails/'+ cart.productId._id  ]\">\n          <ion-label>\n            <p class=\"cart-pro-name\">\n              <img class=\"vegIcon\" *ngIf=\"cart.productId.isVeg\" src=\"../../../../../assets/img/vag.png\" class=\"vagnon-image\">\n              <img class=\"vegIcon\" *ngIf=\"!cart.productId.isVeg\" src=\"../../../../../assets/img/nonvag.png\" class=\"vagnon-image\">\n              {{cart.productId.productName}}\n            </p>\n            <p class=\"cart-rating-star\">\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <b>{{cart.productId.rating}}</b>\n            </p>\n            <!-- <span>₹&nbsp;{{cart.productId.price}} <s *ngIf=\"cart.productId.price\">₹ {{cart.productId.price}}</s></span> -->\n            <span *ngIf=\"!cart.productId.discount\"\n              >₹ {{cart.productId.price}}\n            </span>\n            <span *ngIf=\"cart.productId.discount\"\n              >₹ {{cart.discountedPrice }} &nbsp;<s\n                *ngIf=\"cart.productId.discount\"\n                >₹ {{cart.productId.price}}</s\n              >\n            </span>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <div style=\"float: right;\">\n            <div class=\"plus-button\">\n              <span class=\"minus\" (click)=\"cartAction('remove',cart)\">-</span>\n              &nbsp;&nbsp;{{cart.productCount}}&nbsp;&nbsp;\n              <span class=\"plus\" (click)=\"cartAction('add',cart)\">+</span>\n            </div>\n            <span\n              (click)=\"saveForLater('Y','add',cart)\"\n              style=\"\n                font-size: 12px;\n                cursor: pointer;\n                border: 1px solid #ccc;\n                padding: 5px 5px;\n              \"\n              >Save For Later</span\n            >\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-row *ngIf=\"cartList.length == 0\">\n    <span class=\"noRecordsFound\">Your Cart is Empty</span>\n    <div style=\"padding: 10px 15px; font-size: 14px;\">\n      You have items saved to buy later. To buy one or more now, click \"Move to\n      cart\" next to the item.\n    </div>\n  </ion-row>\n  <br />\n  <div style=\"width: 100%; height: 80px;\">\n    <b>&nbsp;&nbsp;&nbsp;Return are Easy</b><br />\n    <ion-grid class=\"horizontalPadding\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <p style=\"margin-left: 16px; font-size: 14px; margin: 0px 15px 0px;\">\n            2 Hours returns on most items as per the Badhao<br />\n            Business return Policy.\n          </p>\n        </ion-col>\n        <ion-col\n          ><img\n            style=\"height: 50px; width: 50px;\"\n            src=\"https://blog.3dcart.com/hubfs/iStock-185074242.png\"\n        /></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <br />\n\n  <section class=\"bought-together\" *ngIf=\"productList.length\">\n    <h5>Recommended Products</h5>\n    <ion-slides\n      pager=\"true\"\n      [options]=\"slideOpts\"\n      style=\"padding: 10px 20px 20px;\"\n    >\n      <ion-slide class=\"slider-ion\" *ngFor=\"let list of productList\">\n        <ion-grid class=\"bought-grid\">\n          <ion-row [routerLink]=\"['/productDetails/'+ list._id ]\">\n            <ion-col>\n              <img\n                class=\"bought-pro-img\"\n                [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                *ngIf=\"list.imageVarients.length !== 0\"\n                src=\"{{list.imageVarients[0]}}\"\n              />\n              <img\n                class=\"bought-pro-img\"\n                [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                *ngIf=\"list.imageVarients.length == 0\"\n                src=\"https://im.rediff.com/getahead/2015/jun/29chicken.jpg\"\n              />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <!-- isVeg: {{list.isVeg}} -->\n              <p class=\"trading-name\">\n                <img class=\"vegIcon\" *ngIf=\"list.isVeg\" src=\"../../../../../assets/img/vag.png\" class=\"vagnon-image\">\n                <img class=\"vegIcon\" *ngIf=\"!list.isVeg\" src=\"../../../../../assets/img/nonvag.png\" class=\"vagnon-image\">\n                {{list.productName}}\n              </p>\n              <p class=\"tranding-rating-star\">\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <strong style=\"font-weight: 600;\">{{list.rating}}</strong>\n              </p>\n              <!-- <span class=\"trading-price\">\n              ₹&nbsp;{{list.price}} <s *ngIf=\"list.discount\">₹ {{list.price}}</s>\n            </span> -->\n              <span class=\"trading-price\" *ngIf=\"!list.discount\"\n                >₹ {{list.price}}\n              </span>\n              <span class=\"trading-price\" *ngIf=\"list.discount\"\n                >₹ {{list.price - list.price * list.discount / 100 }} &nbsp;<s\n                  *ngIf=\"list.discount\"\n                  >₹ {{list.price}}</s\n                >\n              </span>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row>\n          <ion-col>\n            <ion-icon style=\"font-size: 13px;\"\n            name=\"star\"\n            *ngFor=\"let num of [1,2,3,4,5]\"\n            [ngStyle]=\"{'fill':getColor(num,list.rating)}\"\n          >\n          </ion-icon>\n          &nbsp;<span style=\"font-size: 12px;\">({{list.rating}})</span>\n        </ion-col>\n        </ion-row> -->\n          <!-- {{list.QTY}} -->\n          <ion-row style=\"height: 40px;\">\n            <ion-col\n              *ngIf=\" addedToCartProductIds.includes(list._id) && list.QTY !== 0\"\n            >\n              <div class=\"plus-button\">\n                <span class=\"minus\" (click)=\"cartActionHome('remove',list)\"\n                  >-</span\n                >\n                &nbsp;&nbsp;{{list.QTY}}&nbsp;&nbsp;\n                <span class=\"plus\" (click)=\"cartActionHome('add',list)\">+</span>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row\n            *ngIf=\"!addedToCartProductIds.includes(list._id) || list.QTY == 0\"\n            class=\"add-to-cart\"\n            ><ion-col\n              style=\"font-size: 13px; text-align: center;\"\n              (click)=\"addTocartHome(list)\"\n              >Add To Cart</ion-col\n            ></ion-row\n          >\n          <ion-row\n            *ngIf=\" addedToCartProductIds.includes(list._id) && list.QTY !== 0\"\n            class=\"add-to-cart\"\n            ><ion-col\n              (click)=\"checkout()\"\n              style=\"margin-top: -3px; font-size: 13px; text-align: center;\"\n              >Checkout&nbsp;<ion-icon\n                style=\"margin-top: 2px;\"\n                name=\"cart-outline\"\n              ></ion-icon></ion-col\n          ></ion-row>\n        </ion-grid>\n      </ion-slide>\n    </ion-slides>\n  </section>\n  <!-- <hr style=\"border-top: 1px #DCDCDC solid;\"> -->\n  <section class=\"save-letter\">\n    <h5 *ngIf=\"wishList.length !== 0\">\n      Saved For Later ({{wishList.length}} items )\n    </h5>\n    <ion-item class=\"productItem\" *ngFor=\"let cart of wishList\">\n      <ion-grid class=\"horizontalPadding\">\n        <ion-row>\n          <ion-col [routerLink]=\"['/productDetails/'+ cart.productId._id ]\">\n            <p class=\"product-img\">\n              <img\n                class=\"cart-img\"\n                *ngIf=\"cart.productId.imageVarients.length !== 0\"\n                src=\"{{cart.productId.imageVarients[0]}}\"\n              />\n              <img\n                class=\"cart-img\"\n                *ngIf=\"cart.productId.imageVarients.length == 0\"\n              />\n              <span class=\"offer\" *ngIf=\"cart.productId.discount\">{{cart.productId.discount}}% OFF</span>\n\n            </p>\n          </ion-col>\n          <ion-col [routerLink]=\"['/productDetails/'+ cart._id ]\">\n            <ion-label>\n              <p class=\"save-later-name\">\n                <img class=\"vegIcon\" *ngIf=\"cart.productId.isVeg\" src=\"../../../../../assets/img/vag.png\" class=\"vagnon-image\">\n                <img class=\"vegIcon\" *ngIf=\"!cart.productId.isVeg\" src=\"../../../../../assets/img/nonvag.png\" class=\"vagnon-image\">\n                {{cart.productId.productName}}\n              </p>\n              <p class=\"tranding-rating-star\">\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" />\n                <img src=\"../../../assets/img/star-full.png\" /> <b>{{cart.productId.rating}}</b>\n              </p>\n              <span class=\"trading-price\">\n                ₹&nbsp;{{cart.productId.price}}\n              </span>\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <div style=\"float: right; margin-top: 15px;\">\n              <ion-icon\n                style=\"margin-left: 30px;\"\n                (click)=\"saveForLater('N', 'remove', cart)\"\n                name=\"trash\"\n              >\n              </ion-icon>\n              <span class=\"move-to-cart\" (click)=\"addTocart(cart)\">\n                Move To Cart</span\n              >\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </section>\n\n  <br /><br /><br />\n  <section class=\"item-total\" *ngIf=\"cartList.length > 0\">\n    <ion-grid>\n      <!-- <ion-row class=\"coupon-row\">\n      <ion-col>\n        <p class=\"coupon\">jumbo coupon unlocked! use it to save upto <i class=\"fa fa-rupee\"></i>125</p>\n      </ion-col>\n    </ion-row> -->\n      <ion-row>\n        <ion-col size=\"6\">\n          <span class=\"total-items\"\n            >{{cartList.length}} items &nbsp;&nbsp; |&nbsp;&nbsp;\n            <i class=\"fa fa-rupee\"></i> {{orderTotal}}</span\n          >\n        </ion-col>\n        <ion-col size=\"6\">\n          <a (click)=\"checkout()\" class=\"view-cart\">\n            Checkout\n            <img class=\"cart-bag-img\" src=\"../../../../../assets/img/bag.svg\" />\n          </a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section>\n</ion-content>\n\n<!-- <ion-button class=\"proceed-button\" color=\"secondary\"\n\n  expand=\"full\" *ngIf=\"cartList.length !== 0\"  (click)=\"checkout()\">\n<ion-grid>\n  <ion-row style=\"color:black;\">\n    <ion-col size=\"1\" style=\"margin-top: 10px;\">\n      <span class=\"total-price\">₹&nbsp;{{orderTotal}}</span>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col >\n      <button class=\"btn\"  >Proceed to Buy</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n\n</ion-button>  -->\n");

/***/ }),

/***/ "./src/app/pages/cart/cart-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ "./src/app/pages/cart/cart.ts");




const routes = [
    {
        path: '',
        component: _cart__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart */ "./src/app/pages/cart/cart.ts");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/pages/cart/cart-routing.module.ts");







let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_6__["CartPageRoutingModule"]
        ],
        declarations: [
            _cart__WEBPACK_IMPORTED_MODULE_5__["CartPage"],
        ],
        entryComponents: []
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/pages/cart/cart.scss":
/*!**************************************!*\
  !*** ./src/app/pages/cart/cart.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cart-header {\n  background-color: var(--ion-background-color);\n}\n\n.vagnon-image {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.vagnon-image-small {\n  width: 12px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 12px !important;\n}\n\n.page_header {\n  font-size: 20px;\n}\n\n.p-img {\n  height: auto;\n  width: 100%;\n}\n\ns {\n  font-size: 12px;\n  color: var(--ion-small-color);\n}\n\n.noRecordsFound {\n  margin-left: 16px;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.bought-pro-img {\n  width: 100% !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 50px;\n}\n\n.productItem {\n  margin-left: -15px;\n}\n\n.btn {\n  background-color: orange;\n  color: white;\n  padding: 10px 10px;\n  width: 100%;\n}\n\n.slider-ion {\n  width: 121px !important;\n  box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 10px;\n}\n\n.slider-ion-offer {\n  margin-left: -5px;\n  width: 50% !important;\n  z-index: 0;\n  height: 230px;\n}\n\n.add-to-cart {\n  background-color: var(--ion-gocart-bg-color);\n  color: cornsilk;\n  border-bottom-right-radius: 11px;\n  border-bottom-left-radius: 11px;\n  width: 109%;\n  margin-top: 10px;\n  margin-left: -5px;\n  margin-bottom: -5px;\n  text-align: center;\n}\n\n.bought-together {\n  padding-top: 10px;\n  border-top: 1px solid var(--ion-border-color);\n}\n\n.bought-together h5 {\n  margin-top: 0px;\n  padding: 0px 15px;\n}\n\n.d-flex {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.proceed-button {\n  width: 102%;\n  margin-left: -3px;\n  height: 51px;\n  position: absolute;\n  bottom: -5px;\n  font-family: inherit;\n  font-size: 16px;\n  z-index: 9999;\n  box-shadow: 0px 0px 10px #0000007d;\n  --background: var(--ion-item-background);\n}\n\n.total-price {\n  color: var(--ion-text-color);\n}\n\n.cart-pro-name {\n  margin: 0px;\n  text-transform: capitalize;\n  font-weight: 500;\n  color: var(--ion-text-color);\n}\n\n.cart-img {\n  width: 100%;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.cart-rating-star {\n  color: var(--ion-small-color);\n}\n\n.cart-rating-star img {\n  width: 12px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.plus-button {\n  border: 1px solid var(--ion-border-color);\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  background: var(--ion-background-plus);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.plus-button .minus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: left;\n}\n\n.plus-button .plus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: right;\n}\n\n.trading-name {\n  font-size: 14px;\n  font-weight: 500;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 92px;\n  display: inline-block;\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.trading-price {\n  font-size: 14px;\n}\n\n.tranding-rating-star {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-small-color);\n}\n\n.tranding-rating-star img {\n  width: 9px !important;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.save-later-name {\n  font-size: 16px;\n  font-weight: 500;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  display: block;\n  margin: 0px;\n  color: var(--ion-text-color);\n  text-transform: capitalize;\n}\n\n.move-to-cart {\n  font-size: 12px;\n  cursor: pointer;\n  border: 1px solid #ccc;\n  padding: 5px 5px;\n  display: block;\n  margin-top: 12px;\n}\n\n.wishlist-pro-img {\n  width: 100%;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.product-img span.offer {\n  position: absolute;\n  left: -3px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 5px 7px;\n  top: 14px;\n  font-size: 10px;\n}\n\n.product-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: 1px;\n  bottom: -4px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.saprator-top {\n  border-top: 1px solid var(--ion-border-color);\n}\n\n.cart-list {\n  box-shadow: none;\n}\n\n.item-total {\n  position: fixed;\n  bottom: 0px;\n  background-color: var(--ion-bggreen-light);\n  width: 100%;\n  z-index: 99;\n}\n\n.item-total ion-grid {\n  padding: 0px;\n}\n\n.item-total .coupon-row {\n  background-color: #4D9436;\n  color: #eeffc2;\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.total-items {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n\n.view-cart {\n  text-align: right;\n  padding: 10px;\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.view-cart img {\n  margin-left: 5px;\n  width: 20px;\n  vertical-align: middle;\n  margin-top: -4px;\n  -webkit-filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(1000%) contrast(97%);\n          filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(1000%) contrast(97%);\n}\n\n.save-letter {\n  border-top: 1px solid var(--ion-border-color);\n}\n\n.save-letter h5 {\n  margin-top: 10px;\n  padding: 0px 15px;\n}\n\n.delivery-address {\n  background-color: var(--ion-gray-backgorund);\n  color: var(--ion-text-color);\n  padding: 10px 10px;\n  cursor: pointer;\n}\n\n.product-img {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURBQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRENBO0VBQ0UsdUJBQUE7RUFHQSxnREFBQTtFQUVBLG1CQUFBO0FDREY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUtBLGFBQUE7QUNQRjs7QURhQTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURZQTtFQUNFLGlCQUFBO0VBQ0EsNkNBQUE7QUNURjs7QURXQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0FDTkY7O0FEUUE7RUFDRSw0QkFBQTtBQ0xGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0pGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURLQTtFQUNFLDZCQUFBO0FDRkY7O0FESUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FER0E7RUFDRSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNVRjs7QURSQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7QUNXRjs7QURUQTtFQUNFLDZDQUFBO0FDWUY7O0FEVkE7RUFDRSxnQkFBQTtBQ2FGOztBRFBBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1lGOztBRFJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDV0Y7O0FEUEE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUdBQUE7VUFBQSxpR0FBQTtBQ1dGOztBRFRBO0VBQ0UsNkNBQUE7QUNZRjs7QURWQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNhRjs7QURYQTtFQUNFLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNjRjs7QURYQTtFQUNFLFdBQUE7QUNjRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtaGVhZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG4udmFnbm9uLWltYWdle1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xufVxuLnZhZ25vbi1pbWFnZS1zbWFsbHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnBhZ2VfaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucC1pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5ze1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuXG4ubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvdWdodC1wcm8taW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnByb2R1Y3RJdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uc2xpZGVyLWlvbntcbiAgd2lkdGg6IDEyMXB4ICFpbXBvcnRhbnQ7XG4gIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDVweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuMzYpO1xuICAvLyAtbW96LWJveC1zaGFkb3c6IDFweCA1cHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjM2KTtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuMzYpO1xuICAvLyBjb2xvcjogI0RDRENEQztcbiAgYm9yZGVyLXJhZGl1czogMTBweCA7XG4gIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDExcHg7XG4gIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4uc2xpZGVyLWlvbi1vZmZlcntcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgei1pbmRleDogMDtcbiAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNXB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC4zNik7XG4gIC8vIC1tb3otYm94LXNoYWRvdzogMXB4IDVweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuMzYpO1xuICAvLyBib3gtc2hhZG93OiAxcHggNXB4IDE0cHggMHB4IHJnYmEoMCwwLDAsMC4zNik7XG4gIC8vIGNvbG9yOiAjRENEQ0RDO1xuICBoZWlnaHQ6MjMwcHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHggO1xuICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMXB4O1xuICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLmFkZC10by1jYXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdvY2FydC1iZy1jb2xvcik7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDExcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDExcHg7XG4gIHdpZHRoOiAxMDklO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvdWdodC10b2dldGhlcntcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbi5ib3VnaHQtdG9nZXRoZXIgaDV7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG4uZC1mbGV4e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucHJvY2VlZC1idXR0b257XG4gIHdpZHRoOiAxMDIlO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgei1pbmRleDogOTk5OTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA3ZDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbn1cbi50b3RhbC1wcmljZXtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cbi5jYXJ0LXByby1uYW1le1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG4uY2FydC1pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2FydC1yYXRpbmctc3RhcntcbiAgY29sb3I6IHZhcigtLWlvbi1zbWFsbC1jb2xvcik7XG59XG4uY2FydC1yYXRpbmctc3RhciBpbWd7XG4gIHdpZHRoOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogNXB4IDtcbn1cbi5wbHVzLWJ1dHRvbntcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtcGx1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBsdXMtYnV0dG9uIC5taW51c3tcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnBsdXMtYnV0dG9uIC5wbHVze1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnRyYWRpbmctbmFtZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDkycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnRyYWRpbmctcHJpY2V7XG4gIGZvbnQtc2l6ZToxNHB4O1xufVxuLnRyYW5kaW5nLXJhdGluZy1zdGFye1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cbi50cmFuZGluZy1yYXRpbmctc3RhciBpbWd7XG4gIHdpZHRoOiA5cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5zYXZlLWxhdGVyLW5hbWV7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1vdmUtdG8tY2FydHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLndpc2hsaXN0LXByby1pbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4IDdweDtcbiAgdG9wOiAxNHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAxcHg7XG4gIGJvdHRvbTogLTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5zYXByYXRvci10b3B7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbi5jYXJ0LWxpc3R7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cblxuXG5cbi5pdGVtLXRvdGFse1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmdncmVlbi1saWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbn1cbi5pdGVtLXRvdGFsIGlvbi1ncmlke1xuICBwYWRkaW5nOiAwcHg7XG59XG4uaXRlbS10b3RhbCAuY291cG9uLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDk0MzY7XG4gIGNvbG9yOiAjZWVmZmMyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxufVxuXG4udG90YWwtaXRlbXMge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLnZpZXctY2FydHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udmlldy1jYXJ0IGltZ3tcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSgyODc4JSkgaHVlLXJvdGF0ZSgzNDZkZWcpIGJyaWdodG5lc3MoMTAwMCUpIGNvbnRyYXN0KDk3JSk7XG59XG4uc2F2ZS1sZXR0ZXJ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbi5zYXZlLWxldHRlciBoNXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG4uZGVsaXZlcnktYWRkcmVzc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdyYXktYmFja2dvcnVuZCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdC1pbWd7XG4gIG1hcmdpbjogMHB4O1xufVxuIiwiLmNhcnQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4udmFnbm9uLWltYWdlIHtcbiAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnZhZ25vbi1pbWFnZS1zbWFsbCB7XG4gIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlX2hlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnAtaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxucyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1zbWFsbC1jb2xvcik7XG59XG5cbi5ub1JlY29yZHNGb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm91Z2h0LXByby1pbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucHJvZHVjdEl0ZW0ge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRlci1pb24ge1xuICB3aWR0aDogMTIxcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2xpZGVyLWlvbi1vZmZlciB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMjMwcHg7XG59XG5cbi5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1nb2NhcnQtYmctY29sb3IpO1xuICBjb2xvcjogY29ybnNpbGs7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMXB4O1xuICB3aWR0aDogMTA5JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvdWdodC10b2dldGhlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbi5ib3VnaHQtdG9nZXRoZXIgaDUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvY2VlZC1idXR0b24ge1xuICB3aWR0aDogMTAyJTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGhlaWdodDogNTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwN2Q7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5jYXJ0LXByby1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uY2FydC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2FydC1yYXRpbmctc3RhciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuXG4uY2FydC1yYXRpbmctc3RhciBpbWcge1xuICB3aWR0aDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnBsdXMtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtcGx1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucGx1cy1idXR0b24gLm1pbnVzIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGx1cy1idXR0b24gLnBsdXMge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udHJhZGluZy1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDkycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4udHJhZGluZy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRyYW5kaW5nLXJhdGluZy1zdGFyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1zbWFsbC1jb2xvcik7XG59XG5cbi50cmFuZGluZy1yYXRpbmctc3RhciBpbWcge1xuICB3aWR0aDogOXB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zYXZlLWxhdGVyLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1vdmUtdG8tY2FydCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLndpc2hsaXN0LXByby1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIHRvcDogMTRweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAxcHg7XG4gIGJvdHRvbTogLTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnNhcHJhdG9yLXRvcCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmNhcnQtbGlzdCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pdGVtLXRvdGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJnZ3JlZW4tbGlnaHQpO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5pdGVtLXRvdGFsIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaXRlbS10b3RhbCAuY291cG9uLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDk0MzY7XG4gIGNvbG9yOiAjZWVmZmMyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRvdGFsLWl0ZW1zIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmlldy1jYXJ0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWV3LWNhcnQgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIGZpbHRlcjogaW52ZXJ0KDI3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSgyODc4JSkgaHVlLXJvdGF0ZSgzNDZkZWcpIGJyaWdodG5lc3MoMTAwMCUpIGNvbnRyYXN0KDk3JSk7XG59XG5cbi5zYXZlLWxldHRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnNhdmUtbGV0dGVyIGg1IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5kZWxpdmVyeS1hZGRyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdyYXktYmFja2dvcnVuZCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/cart/cart.ts":
/*!************************************!*\
  !*** ./src/app/pages/cart/cart.ts ***!
  \************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let CartPage = class CartPage {
    constructor(toastController, _ProductService, Router) {
        this.toastController = toastController;
        this._ProductService = _ProductService;
        this.Router = Router;
        this.cartList = [];
        this.wishList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/";
        this.showSearchBox = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            spaceBetween: 20,
            pagination: true,
            slidesPerView: 3,
        };
        this.productList = [];
        this.reviewList = [];
        this.refershDefault = {
            target: {
                complete: function () {
                    return true;
                },
            },
        };
        this.addressData = [];
        this.isSearchEnable = false;
        this.searchproductList = [];
        //
        // public isEnableAddQTY: Boolean = false;
        this.addedToCartProductIds = [];
    }
    ngOnInit() {
        this.refreshList();
        this.getProductList();
        this.getAddress();
        // this.getCartListHome();
        this.userName = localStorage.getItem("userName");
    }
    ionViewWillEnter() {
        this.refreshList();
    }
    enableSearch() {
        this.showSearchBox = true;
    }
    backToNormal() {
        this.showSearchBox = false;
    }
    getCartList() {
        let shopId = localStorage.getItem("shopID");
        this._ProductService
            .cartList(localStorage.getItem("userId"), shopId)
            .subscribe((data) => {
            console.log(data, "data");
            if (data.length !== 0) {
                this.cartList = data[0].productDetails;
                this.cartId = data[0]._id;
                let total = 0;
                this.cartList = data[0]["productDetails"].filter((productData) => {
                    return productData.productId !== null;
                });
                data[0]["productDetails"].forEach((val) => {
                    if (val.productId) {
                        let discount = val.productId.discount;
                        let price = val.productId.price;
                        let discountedPrice = (price * discount) / 100;
                        total = total + (price - discountedPrice) * val.productCount;
                        val["discountedPrice"] = (price - discountedPrice).toFixed(2);
                        // val['discountedPrice'] = parseFloat(val['discountedPrice'])
                    }
                });
                console.log(this.cartList, " this.cartList");
                console.log(total);
                this.orderTotal = total.toFixed(2);
            }
            else {
                this.enableBtn = true;
            }
            console.log(data);
        });
    }
    getWishList() {
        let shopId = localStorage.getItem("shopID");
        this._ProductService
            .getAllWishList(localStorage.getItem("userId"), shopId)
            .subscribe((data) => {
            console.log(data, "data");
            if (data.length !== 0) {
                this.wishList = data[0].productDetails;
                // this.cartId = data[0]._id
            }
            else {
                // this.enableBtn = true
            }
            console.log(data);
        });
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
    getProductList() {
        let shopId = localStorage.getItem("shopID");
        this._ProductService.getProductList(shopId).subscribe((data) => {
            this.fetchReviewList();
            this.productList = data;
            this.productList = this.productList.map((obj) => (Object.assign({}, obj, { QTY: 0 })));
            console.log(this.productList);
            console.log(this.productList);
            this.syncBoughtTogether();
        });
    }
    fetchReviewList() {
        let resp;
        this._ProductService
            .getAllReviewList(localStorage.getItem("userId"))
            .subscribe((response) => {
            resp = response;
            this.reviewList = resp;
            console.log(this.reviewList, "reviewList");
        });
    }
    addTocart(cart) {
        let payload = {
            productDetails: {
                productId: cart.productId._id,
                productCount: 1,
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem("shopID"),
        };
        this._ProductService
            .addToCart("add", payload)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data) {
                this.saveForLater("N", "remove", cart);
                this.syncBoughtTogether();
                // const toast = await this.toastController.create({
                //   message: "Moved To Cart",
                //   duration: 3000,
                //   color: "success",
                //   position: "bottom",
                //   animated: true,
                // });
                // toast.present();
            }
        }));
    }
    saveForLater(flag, action, cart) {
        let payload = {
            productDetails: {
                productId: cart.productId._id,
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem("shopID"),
        };
        this._ProductService
            .AddToWishCart(action, payload)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let msg = "";
            if (data) {
                if (flag == "Y") {
                    this.addedToCartProductIds = [];
                    this.cartAction("remove", cart, "saveForLater");
                    return;
                }
                this.addedToCartProductIds = [];
                this.refreshList();
                this.syncBoughtTogether();
                if (action == "add") {
                    msg = "Saved For Later";
                    // this.isProductAddedToWishList = true
                }
                else {
                    msg = "Removed From Saced For Later Products";
                    // this.isProductAddedToWishList = false
                }
                // const toast = await this.toastController.create({
                //   message: msg,
                //    duration: 3000,
                // color:'secondary',,
                //   position: 'bottom',
                //   animated: true,
                // });
                // toast.present();
            }
        }));
    }
    refreshList(event = this.refershDefault) {
        this.getCartList();
        this.getWishList();
        // this.syncBoughtTogether();
        if (event) {
        }
        setTimeout(() => {
            console.log("Async operation has ended");
            event.target.complete();
        }, 1500);
    }
    cartAction(action, productData, saveForLater = "") {
        let count = 0;
        if (action == "add") {
            count = 1;
        }
        else if (action == "remove") {
            count = -1;
            this.getProductList();
        }
        if (saveForLater == "saveForLater") {
            console.log("productData", productData);
            count = -productData.productCount;
        }
        let payload = {
            productDetails: {
                productId: productData.productId._id,
                productCount: count,
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem("shopID"),
        };
        this._ProductService
            .addToCart(action, payload)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data) {
                this.refreshList();
                this.syncBoughtTogether();
            }
        }));
    }
    syncBoughtTogether() {
        let self = this;
        let shopId = localStorage.getItem("shopID");
        this._ProductService
            .cartList(localStorage.getItem("userId"), shopId)
            .subscribe((data) => {
            console.log(data, "data");
            if (data.length !== 0) {
                let addedProductList = data[0].productDetails;
                addedProductList = data[0]["productDetails"].filter((productData) => {
                    return productData.productId !== null;
                });
                if (addedProductList.length == 0) {
                    this.addedToCartProductIds = [];
                    return;
                }
                addedProductList.forEach((productData) => {
                    this.productList.forEach((obj) => {
                        if (obj._id == productData.productId._id) {
                            console.log(productData.productCount, "productData.productCount");
                            obj.QTY = productData.productCount;
                            if (productData.productCount > 0) {
                                this.addedToCartProductIds.push(obj._id);
                            }
                            else {
                                const index = this.addedToCartProductIds.indexOf(obj._id);
                                if (index > -1) {
                                    this.addedToCartProductIds.splice(index, 1);
                                }
                            }
                        }
                    });
                    this.cartList = data[0].productDetails;
                    this.cartList = data[0]["productDetails"].filter((productData) => {
                        return productData.productId !== null;
                    });
                    this.cartId = data[0]._id;
                    let total = 0;
                    data[0]["productDetails"].forEach((val) => {
                        if (val.productId) {
                            let discount = val.productId.discount;
                            let price = val.productId.price;
                            let discountedPrice = (price * discount) / 100;
                            total = total + (price - discountedPrice) * val.productCount;
                            val["discountedPrice"] = price - discountedPrice;
                            this.productList.forEach((product, index) => {
                                if (product._id == val.productId._id) {
                                    this.productList.splice(index, 1);
                                }
                            });
                        }
                    });
                    console.log(total);
                    this.orderTotal = total.toFixed(2);
                    // this.getWishList();
                });
            }
            else {
                this.enableBtn = true;
            }
        });
    }
    checkout() {
        this.Router.navigateByUrl("/address/" + this.cartId);
    }
    getAddress() {
        this._ProductService
            .getAddress(localStorage.getItem("userId"))
            .subscribe((data) => {
            let addressList = data;
            this.addressData = data;
            console.log(addressList);
        });
    }
    removeToWishList(x) { }
    search(query) {
        let shopId = localStorage.getItem("shopID");
        if (query.target.value.length >= 2) {
            this.isSearchEnable = true;
            this._ProductService
                .search({
                search: query.target.value,
                filter: "Product",
            }, shopId)
                .subscribe((data) => {
                console.log(data, "data");
                this.searchproductList = data.productList;
            });
        }
        if (query.target.value.length == 0) {
            this.isSearchEnable = false;
            // this.getAnalyticalData()
        }
    }
    addTocartHome(productData) {
        let payload = {
            productDetails: {
                productId: productData._id,
                productCount: 1,
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem("shopID"),
        };
        this._ProductService
            .addToCart("add", payload)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.isEnableAddQTY = true;
            this.addedToCartProductIds.push(productData._id);
            if (data) {
                this.productList.forEach((obj) => {
                    if (obj._id == productData._id) {
                        obj.QTY = 1;
                    }
                });
            }
            this.getCartList();
            this.syncBoughtTogether();
            // if (data) {
            //   this.saveForLater("N", "remove", cart);
            //   const toast = await this.toastController.create({
            //     message: "Moved To Cart",
            //      duration: 3000,
            // color:'secondary',,
            //     position: "bottom",
            //     animated: true,
            //   });
            //   toast.present();
            // }
        }));
    }
    cartActionHome(action, productData, saveForLater = "") {
        let count = 0;
        if (action == "add") {
            count = 1;
        }
        else if (action == "remove") {
            count = -1;
        }
        let payload = {
            productDetails: {
                productId: productData._id,
                productCount: count,
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem("shopID"),
        };
        this._ProductService
            .addToCart(action, payload)
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data) {
                this.productList.forEach((obj) => {
                    if (obj._id == productData._id) {
                        obj.QTY = obj.QTY + count;
                    }
                });
                this.getCartList();
                this.syncBoughtTogether();
            }
        }));
    }
    getCartListHome() {
        let shopId = localStorage.getItem("shopID");
        var arr = [];
        this._ProductService
            .cartList(localStorage.getItem("userId"), shopId)
            .subscribe((data) => {
            console.log(data, "data");
            if (data.length !== 0) {
                data[0].productDetails.forEach((products) => {
                    arr.push(products.productId._id);
                    this.productList.forEach((obj) => {
                        if (obj._id == products.productId._id) {
                            console.log(products.productCount, "products.productCount");
                            obj.QTY = obj.QTY + products.productCount;
                        }
                    });
                });
                console.log(arr, "arr");
            }
            this.addedToCartProductIds = this.addedToCartProductIds.concat(arr);
            console.log(this.addedToCartProductIds, "list - cart sync");
        });
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-cart",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.scss */ "./src/app/pages/cart/cart.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module-es2015.js.map