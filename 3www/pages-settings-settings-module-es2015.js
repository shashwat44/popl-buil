(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/@ionic-native/native-audio/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/native-audio/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: NativeAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeAudio", function() { return NativeAudio; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var NativeAudio = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "preloadSimple", {}, arguments); };
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "preloadComplex", {}, arguments); };
    NativeAudio.prototype.play = function (id, completeCallback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudio.prototype.stop = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stop", {}, arguments); };
    NativeAudio.prototype.loop = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "loop", {}, arguments); };
    NativeAudio.prototype.unload = function (id) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unload", {}, arguments); };
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudio.pluginName = "NativeAudio";
    NativeAudio.plugin = "cordova-plugin-nativeaudio";
    NativeAudio.pluginRef = "plugins.NativeAudio";
    NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudio.platforms = ["Android", "Browser", "iOS"];
    NativeAudio = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NativeAudio);
    return NativeAudio;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1hdWRpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3ZDLCtCQUFpQjs7OztJQVFoRCxtQ0FBYSxhQUFDLEVBQVUsRUFBRSxTQUFpQjtJQWMzQyxvQ0FBYyxhQUFDLEVBQVUsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtJQWMzRiwwQkFBSSxhQUFDLEVBQVUsRUFBRSxnQkFBMkI7SUFVNUMsMEJBQUksYUFBQyxFQUFVO0lBVWYsMEJBQUksYUFBQyxFQUFVO0lBVWYsNEJBQU0sYUFBQyxFQUFVO0lBV2pCLDhDQUF3QixhQUFDLEVBQVUsRUFBRSxNQUFjOzs7Ozs7SUE3RXhDLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkF2Q3hCO0VBdUNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBOYXRpdmUgQXVkaW9cbiAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgQXVkaW8gUGxheWJhY2tcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF0aXZlQXVkaW8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1hdWRpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlQXVkaW86IE5hdGl2ZUF1ZGlvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRTaW1wbGUoJ3VuaXF1ZUlkMScsICdwYXRoL3RvL2ZpbGUubXAzJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkQ29tcGxleCgndW5pcXVlSWQyJywgJ3BhdGgvdG8vZmlsZTIubXAzJywgMSwgMSwgMCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIC8vIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBkb25lIHBsYXlpbmdcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJywgKCkgPT4gY29uc29sZS5sb2coJ3VuaXF1ZUlkMSBpcyBkb25lIHBsYXlpbmcnKSk7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5sb29wKCd1bmlxdWVJZDInKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoJ3VuaXF1ZUlkMicsIDAuNikudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zdG9wKCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnVubG9hZCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF0aXZlQXVkaW8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuTmF0aXZlQXVkaW8nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5naG90cG90L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZWF1ZGlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF0aXZlQXVkaW8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhdWRpbyBmaWxlIGludG8gbWVtb3J5LiBPcHRpbWl6ZWQgZm9yIHNob3J0IGNsaXBzIC8gc2luZ2xlIHNob3RzICh1cCB0byBmaXZlIHNlY29uZHMpLiBDYW5ub3QgYmUgc3RvcHBlZCAvIGxvb3BlZC5cbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGFzc2V0UGF0aCB7c3RyaW5nfSAgdGhlIHJlbGF0aXZlIHBhdGggb3IgYWJzb2x1dGUgVVJMIChpbmx1ZGluZyBodHRwOi8vKSB0byB0aGUgYXVkaW8gYXNzZXQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZWxvYWRTaW1wbGUoaWQ6IHN0cmluZywgYXNzZXRQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhdWRpbyBmaWxlIGludG8gbWVtb3J5LiBPcHRpbWl6ZWQgZm9yIGJhY2tncm91bmQgbXVzaWMgLyBhbWJpZW50IHNvdW5kLiBVc2VzIGhpZ2hsZXZlbCBuYXRpdmUgQVBJcyB3aXRoIGEgbGFyZ2VyIGZvb3RwcmludC4gKGlPUzogQVZBdWRpb1BsYXllcikuIENhbiBiZSBzdG9wcGVkIC8gbG9vcGVkIGFuZCB1c2VkIHdpdGggbXVsdGlwbGUgdm9pY2VzLiBDYW4gYmUgZmFkZWQgaW4gYW5kIG91dCB1c2luZyB0aGUgZGVsYXkgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gYXNzZXRQYXRoIHtzdHJpbmd9ICB0aGUgcmVsYXRpdmUgcGF0aCBvciBhYnNvbHV0ZSBVUkwgKGlubHVkaW5nIGh0dHA6Ly8pIHRvIHRoZSBhdWRpbyBhc3NldC5cbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSB0aGUgdm9sdW1lIG9mIHRoZSBwcmVsb2FkZWQgc291bmQgKDAuMSB0byAxLjApXG4gICAqIEBwYXJhbSB2b2ljZXMge251bWJlcn0gdGhlIG51bWJlciBvZiBtdWx0aWNoYW5uZWwgdm9pY2VzIGF2YWlsYWJsZVxuICAgKiBAcGFyYW0gZGVsYXkge251bWJlcn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlbG9hZENvbXBsZXgoaWQ6IHN0cmluZywgYXNzZXRQYXRoOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyLCB2b2ljZXM6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGF1ZGlvIGFzc2V0XG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBjb21wbGV0ZUNhbGxiYWNrIHtGdW5jdGlvbn0gb3B0aW9uYWwuIENhbGxiYWNrIHRvIGJlIGludm9rZWQgd2hlbiBhdWRpbyBpcyBkb25lIHBsYXlpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgcGxheShpZDogc3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwbGF5aW5nIGFuIGF1ZGlvXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb3BzIGFuIGF1ZGlvIGFzc2V0IGluZmluaXRlbHksIHRoaXMgb25seSB3b3JrcyBmb3IgY29tcGxleCBhc3NldHNcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb29wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmxvYWRzIGFuIGF1ZGlvIGZpbGUgZnJvbSBtZW1vcnlcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5sb2FkKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSB2b2x1bWUgZm9yIHByZWxvYWRlZCBjb21wbGV4IGFzc2V0cy5cbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSB0aGUgdm9sdW1lIG9mIHRoZSBhdWRpbyBhc3NldCAoMC4xIHRvIDEuMClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Vm9sdW1lRm9yQ29tcGxleEFzc2V0KGlkOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"csd-car-brands\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Brand</ion-label>\n    </ion-tab-button>\n\n    <!-- <img (click)=\"playCarSound()\" style=\"    height: 54px;\n    width: 65px;\" src=\"../../../assets/img/logo-title.png\"> -->\n    <!-- <audio controls>\n      <source src=\"https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3\" type=\"audio/ogg\">\n      \n    </audio> -->\n    <ion-tab-button tab=\"all-csd-cars\">\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\n      <ion-label>All Cars</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"all-csd-cars/bike\">\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\n      <ion-label>All Bike</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"csd-car-more-pages\">\n        <ion-icon name=\"ellipsis-horizontal-circle-outline\"></ion-icon>\n      <ion-label>More</ion-label>\n    </ion-tab-button>\n \n\n  </ion-tab-bar>\n\n\n\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/pages/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/app/pages/settings/settings.ts");




const routes = [
    {
        path: "",
        component: _settings__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"],
        children: [
            {
                path: "home",
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule)
            },
            {
                path: "csd-car-brands",
                loadChildren: () => __webpack_require__.e(/*! import() | category-category-module */ "category-category-module").then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/pages/category/category.module.ts")).then(m => m.CategoryPageModule)
            },
            {
                path: "all-csd-cars",
                loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ../menu/menu.module */ "./src/app/pages/menu/menu.module.ts")).then(m => m.MenuPageModule),
            },
            // {
            //   path: "all-csd-cars/cars/bike",
            //   loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
            // },
            {
                path: "all-csd-cars/:id",
                loadChildren: () => __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ../menu/menu.module */ "./src/app/pages/menu/menu.module.ts")).then(m => m.MenuPageModule)
            },
            {
                path: "csd-car-details/:id",
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../productDetails/productDetails.module */ "./src/app/pages/productDetails/productDetails.module.ts")).then(m => m.ProductDetailsPageModule)
            },
            {
                path: "csd-car-more-pages",
                loadChildren: () => __webpack_require__.e(/*! import() | contact-contact-module */ "contact-contact-module").then(__webpack_require__.bind(null, /*! ../contact/contact.module */ "./src/app/pages/contact/contact.module.ts")).then(m => m.ContactPageModule)
            },
            {
                path: 'show-interest/:service/:car',
                loadChildren: () => __webpack_require__.e(/*! import() | showInterest-showInterest-module */ "showInterest-showInterest-module").then(__webpack_require__.bind(null, /*! ../showInterest/showInterest.module */ "./src/app/pages/showInterest/showInterest.module.ts")).then(m => m.ShowInterestPageModule)
            },
            {
                path: 'search/:from',
                loadChildren: () => __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ../search/search.module */ "./src/app/pages/search/search.module.ts")).then(m => m.SearchPageModule)
            },
        ],
    },
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/app/pages/settings/settings.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/settings/settings-routing.module.ts");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");








let SettingsModule = class SettingsModule {
};
SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]],
        entryComponents: [],
        providers: [_ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeAudio"]],
        bootstrap: [_settings__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]],
    })
], SettingsModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/settings/settings.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n\n.analytis-number {\n  background: var(--ion-continue-background);\n}\n\n.popover-button {\n  position: relative;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n/* Popover Container */\n\n.popover {\n  position: absolute;\n  top: 110%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n  z-index: 10;\n  width: 200px;\n}\n\n/* Show Popover on Hover */\n\n.popover-button:hover .popover,\n.popover-button:focus-within .popover {\n  opacity: 1;\n  visibility: visible;\n}\n\n/* Links in Popover */\n\n.popover a {\n  display: block;\n  padding: 10px 15px;\n  text-decoration: none;\n  color: #007bff;\n  font-size: 14px;\n  border-bottom: 1px solid #ddd;\n}\n\n/* Remove border for the last link */\n\n.popover a:last-child {\n  border-bottom: none;\n}\n\n/* Link Hover Effect */\n\n.popover a:hover {\n  background-color: #f0f0f0;\n}\n\n/* Add Arrow */\n\n.popover::before {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-width: 8px;\n  border-style: solid;\n  border-color: transparent transparent white transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTs7O0VBR0UsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsVUFBQTtBQ0xGOztBRFVBO0VBQ0Usb0RBQUE7QUNQRjs7QURTQTtFQUNFLG1EQUFBO0FDTkY7O0FEUUE7RUFDRSxvREFBQTtBQ0xGOztBRE9BO0VBQ0Usb0RBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUVBLDRCQUFBO0FDTEY7O0FEUUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDTEY7O0FEUUE7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURTQTtFQUNFLDBDQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNORjs7QURTQSxzQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBLDBCQUFBOztBQUNBOztFQUVFLFVBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNBLHFCQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDTkY7O0FEU0Esb0NBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ05GOztBRFNBLHNCQUFBOztBQUNBO0VBQ0UseUJBQUE7QUNORjs7QURTQSxjQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3V0LWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcblxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgb3BhY2l0eTogMDtcblxuICAvLyB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uYWJvdXQtaGVhZGVyIC5tYWRpc29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcbn1cbi5hYm91dC1oZWFkZXIgLmF1c3RpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9hdXN0aW4uanBnKTtcbn1cbi5hYm91dC1oZWFkZXIgLmNoaWNhZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvY2hpY2Fnby5qcGcpO1xufVxuLmFib3V0LWhlYWRlciAuc2VhdHRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBsaW5lLWhlaWdodDogMTMwJTtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4vKlxuICogaU9TIE9ubHlcbiAqL1xuXG4uaW9zIC5hYm91dC1pbmZvIHtcbiAgLS1pb24tcGFkZGluZzogMTlweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hbmFseXRpcy1udW1iZXJ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb250aW51ZS1iYWNrZ3JvdW5kKTtcbn1cblxuLnBvcG92ZXItYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBQb3BvdmVyIENvbnRhaW5lciAqL1xuLnBvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHZpc2liaWxpdHkgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4vKiBTaG93IFBvcG92ZXIgb24gSG92ZXIgKi9cbi5wb3BvdmVyLWJ1dHRvbjpob3ZlciAucG9wb3Zlcixcbi5wb3BvdmVyLWJ1dHRvbjpmb2N1cy13aXRoaW4gLnBvcG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBMaW5rcyBpbiBQb3BvdmVyICovXG4ucG9wb3ZlciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLyogUmVtb3ZlIGJvcmRlciBmb3IgdGhlIGxhc3QgbGluayAqL1xuLnBvcG92ZXIgYTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLyogTGluayBIb3ZlciBFZmZlY3QgKi9cbi5wb3BvdmVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4vKiBBZGQgQXJyb3cgKi9cbi5wb3BvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlci13aWR0aDogOHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50O1xufVxuIiwiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5tYWRpc29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuc2VhdHRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuLypcbiAqIGlPUyBPbmx5XG4gKi9cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFuYWx5dGlzLW51bWJlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb250aW51ZS1iYWNrZ3JvdW5kKTtcbn1cblxuLnBvcG92ZXItYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBQb3BvdmVyIENvbnRhaW5lciAqL1xuLnBvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHZpc2liaWxpdHkgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4vKiBTaG93IFBvcG92ZXIgb24gSG92ZXIgKi9cbi5wb3BvdmVyLWJ1dHRvbjpob3ZlciAucG9wb3Zlcixcbi5wb3BvdmVyLWJ1dHRvbjpmb2N1cy13aXRoaW4gLnBvcG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBMaW5rcyBpbiBQb3BvdmVyICovXG4ucG9wb3ZlciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLyogUmVtb3ZlIGJvcmRlciBmb3IgdGhlIGxhc3QgbGluayAqL1xuLnBvcG92ZXIgYTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLyogTGluayBIb3ZlciBFZmZlY3QgKi9cbi5wb3BvdmVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4vKiBBZGQgQXJyb3cgKi9cbi5wb3BvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlci13aWR0aDogOHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/settings/settings.ts":
/*!********************************************!*\
  !*** ./src/app/pages/settings/settings.ts ***!
  \********************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");





let SettingsPage = class SettingsPage {
    constructor(popoverCtrl, renderer, el, nativeAudio) {
        this.popoverCtrl = popoverCtrl;
        this.renderer = renderer;
        this.el = el;
        this.nativeAudio = nativeAudio;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
            header: 'Select a Location'
        };
    }
    playCarSound() {
        var snd = new Audio("/assets/sound/car_sound.mpeg");
        snd.play().then(() => {
            console.log("played");
        });
    }
    ngAfterViewInit() {
        // Select all <ion-tab-button> elements within the <ion-tabs> container
        const tabButtons = this.el.nativeElement.querySelectorAll('ion-tab-button');
        // Iterate through each <ion-tab-button> to find the <a> tag and set the href
        tabButtons.forEach((tabButton) => {
            // Access the shadow root of the <ion-tab-button> component
            const shadowRoot = tabButton.shadowRoot;
            if (shadowRoot) {
                // Find the <a> tag inside the shadow root
                const anchorTag = shadowRoot.querySelector('a');
                if (anchorTag) {
                    // Set the href attribute based on the tab's 'tab' attribute value
                    const tabValue = tabButton.getAttribute('tab');
                    if (tabValue) {
                        // Dynamically set the href attribute to the correct route
                        this.renderer.setAttribute(anchorTag, 'href', `/csd/${tabValue}`);
                    }
                }
            }
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.scss */ "./src/app/pages/settings/settings.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map