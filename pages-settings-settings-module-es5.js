function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
  /***/
  "./node_modules/@ionic-native/native-audio/ngx/index.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic-native/native-audio/ngx/index.js ***!
    \**************************************************************/

  /*! exports provided: NativeAudio */

  /***/
  function node_modulesIonicNativeNativeAudioNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeAudio", function () {
      return NativeAudio;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");

    var NativeAudio =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NativeAudio, _super);

      function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      NativeAudio.prototype.preloadSimple = function (id, assetPath) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "preloadSimple", {}, arguments);
      };

      NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "preloadComplex", {}, arguments);
      };

      NativeAudio.prototype.play = function (id, completeCallback) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "play", {
          "successIndex": 1,
          "errorIndex": 2
        }, arguments);
      };

      NativeAudio.prototype.stop = function (id) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stop", {}, arguments);
      };

      NativeAudio.prototype.loop = function (id) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "loop", {}, arguments);
      };

      NativeAudio.prototype.unload = function (id) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unload", {}, arguments);
      };

      NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setVolumeForComplexAsset", {}, arguments);
      };

      NativeAudio.pluginName = "NativeAudio";
      NativeAudio.plugin = "cordova-plugin-nativeaudio";
      NativeAudio.pluginRef = "plugins.NativeAudio";
      NativeAudio.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
      NativeAudio.platforms = ["Android", "Browser", "iOS"];
      NativeAudio = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NativeAudio);
      return NativeAudio;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS1hdWRpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFzQ3ZDLCtCQUFpQjs7OztJQVFoRCxtQ0FBYSxhQUFDLEVBQVUsRUFBRSxTQUFpQjtJQWMzQyxvQ0FBYyxhQUFDLEVBQVUsRUFBRSxTQUFpQixFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBYTtJQWMzRiwwQkFBSSxhQUFDLEVBQVUsRUFBRSxnQkFBMkI7SUFVNUMsMEJBQUksYUFBQyxFQUFVO0lBVWYsMEJBQUksYUFBQyxFQUFVO0lBVWYsNEJBQU0sYUFBQyxFQUFVO0lBV2pCLDhDQUF3QixhQUFDLEVBQVUsRUFBRSxNQUFjOzs7Ozs7SUE3RXhDLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkF2Q3hCO0VBdUNpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBOYXRpdmUgQXVkaW9cbiAqIEBkZXNjcmlwdGlvbiBOYXRpdmUgQXVkaW8gUGxheWJhY2tcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTmF0aXZlQXVkaW8gfSBmcm9tICdAaW9uaWMtbmF0aXZlL25hdGl2ZS1hdWRpby9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlQXVkaW86IE5hdGl2ZUF1ZGlvKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRTaW1wbGUoJ3VuaXF1ZUlkMScsICdwYXRoL3RvL2ZpbGUubXAzJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICogdGhpcy5uYXRpdmVBdWRpby5wcmVsb2FkQ29tcGxleCgndW5pcXVlSWQyJywgJ3BhdGgvdG8vZmlsZTIubXAzJywgMSwgMSwgMCkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIC8vIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZmlsZSBpcyBkb25lIHBsYXlpbmdcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJywgKCkgPT4gY29uc29sZS5sb2coJ3VuaXF1ZUlkMSBpcyBkb25lIHBsYXlpbmcnKSk7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5sb29wKCd1bmlxdWVJZDInKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoJ3VuaXF1ZUlkMicsIDAuNikudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogdGhpcy5uYXRpdmVBdWRpby5zdG9wKCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcbiAqXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnVubG9hZCgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3Msb25FcnJvcik7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTmF0aXZlQXVkaW8nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmVhdWRpbycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuTmF0aXZlQXVkaW8nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5naG90cG90L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZWF1ZGlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF0aXZlQXVkaW8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhdWRpbyBmaWxlIGludG8gbWVtb3J5LiBPcHRpbWl6ZWQgZm9yIHNob3J0IGNsaXBzIC8gc2luZ2xlIHNob3RzICh1cCB0byBmaXZlIHNlY29uZHMpLiBDYW5ub3QgYmUgc3RvcHBlZCAvIGxvb3BlZC5cbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIGFzc2V0UGF0aCB7c3RyaW5nfSAgdGhlIHJlbGF0aXZlIHBhdGggb3IgYWJzb2x1dGUgVVJMIChpbmx1ZGluZyBodHRwOi8vKSB0byB0aGUgYXVkaW8gYXNzZXQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZWxvYWRTaW1wbGUoaWQ6IHN0cmluZywgYXNzZXRQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhdWRpbyBmaWxlIGludG8gbWVtb3J5LiBPcHRpbWl6ZWQgZm9yIGJhY2tncm91bmQgbXVzaWMgLyBhbWJpZW50IHNvdW5kLiBVc2VzIGhpZ2hsZXZlbCBuYXRpdmUgQVBJcyB3aXRoIGEgbGFyZ2VyIGZvb3RwcmludC4gKGlPUzogQVZBdWRpb1BsYXllcikuIENhbiBiZSBzdG9wcGVkIC8gbG9vcGVkIGFuZCB1c2VkIHdpdGggbXVsdGlwbGUgdm9pY2VzLiBDYW4gYmUgZmFkZWQgaW4gYW5kIG91dCB1c2luZyB0aGUgZGVsYXkgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxuICAgKiBAcGFyYW0gYXNzZXRQYXRoIHtzdHJpbmd9ICB0aGUgcmVsYXRpdmUgcGF0aCBvciBhYnNvbHV0ZSBVUkwgKGlubHVkaW5nIGh0dHA6Ly8pIHRvIHRoZSBhdWRpbyBhc3NldC5cbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSB0aGUgdm9sdW1lIG9mIHRoZSBwcmVsb2FkZWQgc291bmQgKDAuMSB0byAxLjApXG4gICAqIEBwYXJhbSB2b2ljZXMge251bWJlcn0gdGhlIG51bWJlciBvZiBtdWx0aWNoYW5uZWwgdm9pY2VzIGF2YWlsYWJsZVxuICAgKiBAcGFyYW0gZGVsYXkge251bWJlcn1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJlbG9hZENvbXBsZXgoaWQ6IHN0cmluZywgYXNzZXRQYXRoOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyLCB2b2ljZXM6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGF1ZGlvIGFzc2V0XG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEBwYXJhbSBjb21wbGV0ZUNhbGxiYWNrIHtGdW5jdGlvbn0gb3B0aW9uYWwuIENhbGxiYWNrIHRvIGJlIGludm9rZWQgd2hlbiBhdWRpbyBpcyBkb25lIHBsYXlpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgcGxheShpZDogc3RyaW5nLCBjb21wbGV0ZUNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwbGF5aW5nIGFuIGF1ZGlvXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb3BzIGFuIGF1ZGlvIGFzc2V0IGluZmluaXRlbHksIHRoaXMgb25seSB3b3JrcyBmb3IgY29tcGxleCBhc3NldHNcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb29wKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmxvYWRzIGFuIGF1ZGlvIGZpbGUgZnJvbSBtZW1vcnlcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5sb2FkKGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSB2b2x1bWUgZm9yIHByZWxvYWRlZCBjb21wbGV4IGFzc2V0cy5cbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSB0aGUgdm9sdW1lIG9mIHRoZSBhdWRpbyBhc3NldCAoMC4xIHRvIDEuMClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Vm9sdW1lRm9yQ29tcGxleEFzc2V0KGlkOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsSettingsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"category\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Brand</ion-label>\n    </ion-tab-button>\n\n    <!-- <img (click)=\"playCarSound()\" style=\"    height: 54px;\n    width: 65px;\" src=\"../../../assets/img/logo-title.png\"> -->\n    <!-- <audio controls>\n      <source src=\"https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3\" type=\"audio/ogg\">\n      \n    </audio> -->\n    <ion-tab-button tab=\"menu\">\n      <ion-icon name=\"car-sport-outline\"></ion-icon>\n      <ion-label>All Cars</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"contact\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Contact Us</ion-label>\n    </ion-tab-button>\n \n\n  </ion-tab-bar>\n\n\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/settings/settings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppPagesSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
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


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings */
    "./src/app/pages/settings/settings.ts");

    var routes = [{
      path: "",
      component: _settings__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"],
      children: [{
        path: "home",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ../home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: "category",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | category-category-module */
          "category-category-module").then(__webpack_require__.bind(null,
          /*! ../category/category.module */
          "./src/app/pages/category/category.module.ts")).then(function (m) {
            return m.CategoryPageModule;
          });
        }
      }, {
        path: "menu",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | menu-menu-module */
          [__webpack_require__.e("default~menu-menu-module~pages-feedback-feedback-module"), __webpack_require__.e("menu-menu-module")]).then(__webpack_require__.bind(null,
          /*! ../menu/menu.module */
          "./src/app/pages/menu/menu.module.ts")).then(function (m) {
            return m.MenuPageModule;
          });
        }
      }, {
        path: "menu/:id",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | menu-menu-module */
          [__webpack_require__.e("default~menu-menu-module~pages-feedback-feedback-module"), __webpack_require__.e("menu-menu-module")]).then(__webpack_require__.bind(null,
          /*! ../menu/menu.module */
          "./src/app/pages/menu/menu.module.ts")).then(function (m) {
            return m.MenuPageModule;
          });
        }
      }, {
        path: "productDetails/:id",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ../productDetails/productDetails.module */
          "./src/app/pages/productDetails/productDetails.module.ts")).then(function (m) {
            return m.ProductDetailsPageModule;
          });
        }
      }, {
        path: "contact",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | contact-contact-module */
          "contact-contact-module").then(__webpack_require__.bind(null,
          /*! ../contact/contact.module */
          "./src/app/pages/contact/contact.module.ts")).then(function (m) {
            return m.ContactPageModule;
          });
        }
      }, {
        path: 'show-interest/:service/:car',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | showInterest-showInterest-module */
          "showInterest-showInterest-module").then(__webpack_require__.bind(null,
          /*! ../showInterest/showInterest.module */
          "./src/app/pages/showInterest/showInterest.module.ts")).then(function (m) {
            return m.ShowInterestPageModule;
          });
        }
      }, {
        path: 'search/:from',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-search-module */
          "search-search-module").then(__webpack_require__.bind(null,
          /*! ../search/search.module */
          "./src/app/pages/search/search.module.ts")).then(function (m) {
            return m.SearchPageModule;
          });
        }
      }, {
        path: 'wishList',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | wishList-wishList-module */
          "wishList-wishList-module").then(__webpack_require__.bind(null,
          /*! ../wishList/wishList.module */
          "./src/app/pages/wishList/wishList.module.ts")).then(function (m) {
            return m.WishListModule;
          });
        }
      }]
    }];

    var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    };

    SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.module.ts ***!
    \***************************************************/

  /*! exports provided: SettingsModule */

  /***/
  function srcAppPagesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
      return SettingsModule;
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


    var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings */
    "./src/app/pages/settings/settings.ts");
    /* harmony import */


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/pages/settings/settings-routing.module.ts");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/ngx/index.js");

    var SettingsModule = function SettingsModule() {
      _classCallCheck(this, SettingsModule);
    };

    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingsPageRoutingModule"]],
      declarations: [_settings__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]],
      entryComponents: [],
      providers: [_ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeAudio"]],
      bootstrap: [_settings__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
    })], SettingsModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/settings/settings.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsSettingsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n\n.analytis-number {\n  background: var(--ion-continue-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNERjs7QURJQTs7O0VBR0UsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBRUEsVUFBQTtBQ0xGOztBRFVBO0VBQ0Usb0RBQUE7QUNQRjs7QURTQTtFQUNFLG1EQUFBO0FDTkY7O0FEUUE7RUFDRSxvREFBQTtBQ0xGOztBRE9BO0VBQ0Usb0RBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUVBLDRCQUFBO0FDTEY7O0FEUUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDTEY7O0FEUUE7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURTQTtFQUNFLDBDQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICBvcGFjaXR5OiAwO1xuXG4gIC8vIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvbWFkaXNvbi5qcGcpO1xufVxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L3NlYXR0bGUuanBnKTtcbn1cblxuLmFib3V0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG59XG5cbi5hYm91dC1pbmZvIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi8qXG4gKiBpT1MgT25seVxuICovXG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFuYWx5dGlzLW51bWJlcntcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xufSIsImlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbi5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmFib3V0LWhlYWRlciAubWFkaXNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLmF1c3RpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9hdXN0aW4uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9jaGljYWdvLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLnNlYXR0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbn1cblxuLmFib3V0LWluZm8gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYWJvdXQtaW5mbyBwIHtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi8qXG4gKiBpT1MgT25seVxuICovXG4uaW9zIC5hYm91dC1pbmZvIHtcbiAgLS1pb24tcGFkZGluZzogMTlweDtcbn1cblxuLmlvcyAuYWJvdXQtaW5mbyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hbmFseXRpcy1udW1iZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29udGludWUtYmFja2dyb3VuZCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/settings/settings.ts ***!
    \********************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppPagesSettingsSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/ngx/index.js");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(popoverCtrl, nativeAudio) {
        _classCallCheck(this, SettingsPage);

        this.popoverCtrl = popoverCtrl;
        this.nativeAudio = nativeAudio;
        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
          header: 'Select a Location'
        };
      }

      _createClass(SettingsPage, [{
        key: "playCarSound",
        value: function playCarSound() {
          var snd = new Audio("/assets/sound/car_sound.mpeg");
          snd.play().then(function () {
            console.log("played");
          });
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.scss */
      "./src/app/pages/settings/settings.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-settings-settings-module-es5.js.map