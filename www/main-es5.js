function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- [class.sweggy-theme]=\"true\" -->\n<ion-app\n  [ngClass]=\"{\n    'dark-theme': selectedTheme == 'dark-theme' ? true : false,\n    'material-dark-theme':\n      selectedTheme == 'material-dark-theme' ? true : false,\n    'cosmic-theme': selectedTheme == 'cosmic-theme' ? true : false,\n    'corporate-dark-theme':\n      selectedTheme == 'corporate-dark-theme' ? true : false,\n    'sweggy-theme': selectedTheme == 'sweggy-theme' ? true : false,\n    'light-theme': selectedTheme == 'light-theme' ? true : false\n  }\">\n  <!-- {{selectedTheme}} -->\n\n  <!-- <ion-split-pane contentId=\"main-content\"> -->\n  <ion-menu *ngIf=\"false\" contentId=\"main-content\" class=\"side-menu\">\n    <div class=\"hamburger\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 27px\" />\n        </ion-menu-button>\n      </ion-buttons>\n    </div>\n    <div class=\"menu-proile\">\n      <img\n        class=\"menu-proile-bg\"\n        src=\"https://img.freepik.com/premium-photo/yellow-blue-abstract-creative-background-blue-abstract-background-geometric-background_481527-28134.jpg\" \n        />\n      <ion-list class=\"menu-profile-content\">\n        <ion-item>\n          <ion-label >\n            <h5 class=\"user-name\">{{ userName }}</h5>\n          </ion-label>\n        </ion-item>\n        <ion-thumbnail class=\"user-profile-img\" slot=\"start\">\n          <img\n            *ngIf=\"!userImage\"\n            src=\"https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png\" />\n          <img *ngIf=\"userImage\" src=\"{{ userImage }}\" />\n        </ion-thumbnail>\n      </ion-list>\n    </div>\n\n    <ion-content>\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"refesh($event)\">\n        <ion-refresher-content\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n      </ion-refresher>\n      <div class=\"location-menu\">\n        <ion-icon name=\"location-outline\"></ion-icon>&nbsp; Gurgaon Sector - 52\n      </div>\n      <ion-list lines=\"none\">\n        <ion-menu-toggle\n          autoHide=\"false\"\n          *ngFor=\"let p of appPages; let i = index\">\n          <ion-item\n            [routerLink]=\"p.url\"\n            routerLinkActive=\"selected\"\n            routerDirection=\"root\"\n            detail=\"false\">\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list lines=\"none\" *ngIf=\"false\">\n        <ion-list-header> Account </ion-list-header>\n        <ion-menu-toggle autoHide=\"false\">\n          <ion-item\n            button\n            routerLink=\"/account\"\n            routerDirection=\"root\"\n            routerLinkActive=\"selected\"\n            detail=\"false\">\n            <ion-icon slot=\"start\" name=\"people-outline\"></ion-icon>\n            <ion-label> Your Account </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <!-- <ion-menu-toggle autoHide=\"false\">\n            <ion-item\n              button\n              routerLink=\"/orders\"\n              routerDirection=\"root\"\n              routerLinkActive=\"selected\"\n              detail=\"false\"\n            >\n              <ion-icon slot=\"start\" name=\"receipt-outline\"></ion-icon>\n              <ion-label>\n                Your Orders\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n\n        <ion-menu-toggle autoHide=\"false\">\n          <ion-item\n            routerLink=\"/wishList\"\n            routerLinkActive=\"active\"\n            routerDirection=\"root\"\n            routerLinkActive=\"selected\"\n            detail=\"false\">\n            <ion-icon slot=\"start\" name=\"heart-outline\"></ion-icon>\n            <ion-label> Favourite </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <!-- <ion-menu-toggle autoHide=\"false\">\n            <ion-item class=\"offer-svg\"\n              routerLink=\"/offers/all\"\n              routerLinkActive=\"active\"\n              routerDirection=\"root\"\n              routerLinkActive=\"selected\"\n              detail=\"false\"\n            >\n              <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512.001 512.001\" style=\"enable-background:new 0 0 512.001 512.001;\" xml:space=\"preserve\"><g><g><path d=\"M507.606,4.394c-5.857-5.858-15.356-5.858-21.214,0l-43.69,43.69c-2.686-1.28-5.52-2.311-8.479-3.05L298.452,11.491 c-15.246-3.811-31.622,0.724-42.735,11.837L13.16,265.486c-17.545,17.546-17.545,46.096,0,63.643l169.713,169.712 c17.546,17.546,46.096,17.547,63.643,0l242.158-242.558c11.113-11.113,15.649-27.489,11.836-42.736l-33.542-135.77 c-0.74-2.958-1.77-5.793-3.05-8.479l43.69-43.69C513.464,19.75,513.464,10.252,507.606,4.394z M471.403,220.825 c1.271,5.082-0.241,10.54-3.945,14.245L225.3,477.627c-5.849,5.849-15.366,5.849-21.215,0L34.373,307.914 c-5.849-5.849-5.849-15.366,0-21.215L276.931,44.542c2.837-2.837,6.703-4.388,10.641-4.388c1.204,0,2.415,0.145,3.604,0.442 l127.53,31.483l-36.125,36.125c-16.725-7.966-37.384-5.044-51.21,8.782c-17.547,17.547-17.547,46.096,0,63.643 c8.772,8.773,20.297,13.16,31.821,13.16c11.523,0,23.048-4.386,31.82-13.16c13.829-13.828,16.75-34.486,8.782-51.211 l36.125-36.125L471.403,220.825z M373.799,159.416c-5.848,5.848-15.365,5.849-21.214,0c-5.848-5.848-5.848-15.366,0-21.214 c2.925-2.925,6.765-4.386,10.607-4.386c3.84,0,7.682,1.462,10.605,4.385l0.001,0.001l0.001,0.001 C379.648,144.051,379.647,153.568,373.799,159.416z\"/>\n\t</g></g><g><g><path d=\"M246.514,180.63c-17.546-17.546-46.096-17.546-63.643,0c-17.545,17.546-17.545,46.096,0,63.643 c17.546,17.546,46.097,17.546,63.643,0C264.061,226.726,264.061,198.177,246.514,180.63z M225.301,223.058\n\t\t\tc-5.849,5.849-15.366,5.849-21.214,0c-5.848-5.849-5.85-15.366-0.001-21.214c5.849-5.848,15.365-5.849,21.215,0\n\t\t\tC231.149,207.692,231.149,217.209,225.301,223.058z\"/></g></g><g><g><path d=\"M267.728,329.128c-17.587-17.587-46.052-17.589-63.642,0c-17.547,17.547-17.547,46.096,0,63.643\n\t\t\tc17.588,17.587,46.053,17.59,63.642,0C285.275,375.224,285.275,346.675,267.728,329.128z M246.514,371.557\n\t\t\tc-5.861,5.862-15.352,5.863-21.214,0c-5.848-5.848-5.848-15.366,0-21.214c5.862-5.862,15.352-5.863,21.214,0\n\t\t\tC252.362,356.191,252.362,365.707,246.514,371.557z\"/></g></g><g><g><path d=\"M335.673,274.437c-0.915-8.234-8.333-14.168-16.566-13.253l-190.926,21.214c-8.234,0.915-14.168,8.331-13.253,16.566\n\t\t\tc0.853,7.671,7.347,13.346,14.891,13.346c0.553,0,1.113-0.031,1.675-0.093l190.927-21.214\n\t\t\tC330.655,290.087,336.589,282.671,335.673,274.437z\"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n              <ion-label style=\"margin-left: 30px;\">\n                Offers & Coupons\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n        <!-- <ion-menu-toggle autoHide=\"false\">\n            <ion-item\n              routerLink=\"/wallet\"\n              routerLinkActive=\"active\"\n              routerDirection=\"root\"\n              routerLinkActive=\"selected\"\n              detail=\"false\"\n            >\n              <ion-icon slot=\"start\" name=\"wallet-outline\"></ion-icon>\n              <ion-label>\n                Wallet\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n\n        <ion-menu-toggle autoHide=\"false\">\n          <ion-item\n            routerLink=\"/feedback\"\n            routerLinkActive=\"active\"\n            routerDirection=\"root\"\n            routerLinkActive=\"selected\"\n            detail=\"false\">\n            <ion-icon name=\"clipboard-outline\"></ion-icon>\n            <ion-label style=\"margin-left: 30px\"> Feedback </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle autoHide=\"false\">\n          <ion-item\n            (click)=\"logout()\"\n            routerLinkActive=\"active\"\n            routerDirection=\"root\"\n            routerLinkActive=\"selected\"\n            detail=\"false\">\n            <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n            <ion-label> Logout </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list lines=\"none\">\n        <ion-list-header> Contact </ion-list-header>\n        <!-- <ion-item\n            (click)=\"share()\"\n            routerLinkActive=\"selected\"\n            routerDirection=\"root\"\n            routerLinkActive=\"selected\"\n            detail=\"false\">\n            <ion-icon slot=\"start\" name=\"share-outline\"></ion-icon>\n            <ion-label> Share </ion-label>\n          </ion-item> -->\n\n        <ion-menu-toggle autoHide=\"false\">\n          <ion-item\n            button\n            routerLink=\"/csd-car/contact\"\n            routerDirection=\"root\"\n            routerLinkActive=\"selected\"\n            detail=\"false\">\n            <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\n            <ion-label> Contact Us </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <!-- <ion-menu-toggle autoHide=\"false\">\n            <ion-item button routerLink=\"/feedback\"detail=\"false\">\n              <ion-icon slot=\"start\"  name=\"chatbubbles\"></ion-icon>\n              <ion-label>\n                Give Feedback\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n      </ion-list>\n\n      <!-- <ion-list lines=\"none\"> -->\n      <!-- <ion-list-header>\n            Choose Theme\n          </ion-list-header>\n\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <select class=\"select-theme\" [(ngModel)]=\"selectedTheme\">\n              <option [value]=\"'light'\">Light - Default</option>\n              <option [value]=\"'dark-theme'\">Dark</option>\n              <option [value]=\"'material-dark-theme'\">Material-Dark</option>\n              <option [value]=\"'cosmic-theme'\">Cosmic</option>\n              <option [value]=\"'corporate-dark-theme'\">Corporate-Dark</option>\n              <option [value]=\"'sweggy-theme'\">Special</option>\n            </select>\n          </ion-item> -->\n      <!-- <ion-item>\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <ion-label>\n              Cosmic\n            </ion-label>\n            <ion-toggle [(ngModel)]=\"dark\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <ion-label>\n              Material Dark\n            </ion-label>\n            <ion-toggle [(ngModel)]=\"dark\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <ion-label>\n              Corparate\n            </ion-label>\n            <ion-toggle [(ngModel)]=\"dark\"></ion-toggle>\n          </ion-item> -->\n      <!-- </ion-list> -->\n    </ion-content>\n  </ion-menu>\n\n  <ion-header *ngIf=\"false\" class=\"animate__animated animate__fadeInDown\">\n    \n    <ion-toolbar class=\"home-header\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button>\n          <img\n            (click)=\"toggleMenu()\"\n            src=\"../../../assets/img/menu-bar.png\"\n            style=\"width: 22px\" />\n        </ion-menu-button>\n      </ion-buttons>\n      <ion-title style=\"font-size: 15px\">\n        <input\n          type=\"text\"\n          placeholder=\"  e.g Verna\"\n          routerLink=\"/csd-car/search/home\"\n          class=\"search-bar\"\n          name=\"\"\n          id=\"\" />\n        <br />\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/wishList']\">\n          <ion-icon\n            class=\"animate__animated\"\n            slot=\"icon-only\"\n            name=\"heart-outline\"\n            style=\"\n              color: white;\n              width: 55px;\n              min-width: -webkit-fill-available;\n            \"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-router-outlet id=\"main-content\"> </ion-router-outlet>\n  <div class=\"whatsapp-btn\">\n    \n    <a href=\"https://wa.me/+919958008084\" target=\"_blank\">\n    <img src=\"../assets/img/csd-car-owner-whatsapp-btn.png\" alt=\"csd-car-owner-whatsapp-btn\" />\n\n    </a>\n  </div><br><br>\n  <div class=\"youtube-btn\">\n    \n    <a href=\"https://www.youtube.com/@Ravibhardwaj80\" target=\"_blank\">\n    <img src=\"../assets/img/youtube-logo.webp\" alt=\"csd-car-youtube-social-media-btn\"  target=\"_blank\" />\n\n    </a>\n  </div>\n  <div class=\"instagram-btn\">\n    \n      <a href=\"https://www.instagram.com/newcarsbestdeal_?igsh=MXZvaThhZmNqOWZzZw%3D%3D&utm_source=qr\" target=\"_blank\">\n      <img src=\"../assets/img/Instagram_icon.webp\" alt=\"csd-car-instagram-social-media-btn\"  target=\"_blank\" />\n  \n      </a>\n    </div>\n  <!-- </ion-split-pane> -->\n \n  \n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/app-spinner/page-loader/page-loader.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/app-spinner/page-loader/page-loader.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreAppSpinnerPageLoaderPageLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loader-main\" *ngIf=\"show\">\n  <div class=\"loader\" id=\"loader-4\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"not-found-container\">\n    <h1 class=\"error-code\">404</h1>\n    <p class=\"error-message\">Oops! The page you're looking for doesn't exist.</p>\n    <a routerLink=\"/\" class=\"home-link\">Go Back to Home</a>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productDetails/productDetails.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productDetails/productDetails.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductDetailsProductDetailsHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header\n  *ngIf=\"isHeaderShow || !isDataLoaded\"\n  class=\"animate__animated animate__fadeInDown\"\n>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        style=\"color: #fff\"\n        defaultHref=\"/csd-car/home\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 15px\"> CSD CAR </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/search/cart']\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"search\"\n          style=\"font-size: 20px\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-searchbar spellcheck=\"true\" routerLink=\"/search/home\"></ion-searchbar> -->\n</ion-header>\n<ion-content\n  *ngIf=\"isDataLoaded; else skeleton\"\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"onScroll($event)\"\n>\n\n  <section class=\"header\" *ngIf=\"!isHeaderShow\">\n    <div class=\"top-left\">\n      <ion-buttons slot=\"start\">\n        <ion-button style=\"margin-top: 8px\">\n          <!-- <ion-icon name=\"arrow-back-outline\" style=\"color: #fff;\"></ion-icon> -->\n          <ion-back-button\n            style=\"color: #fff\"\n            defaultHref=\"/csd-car/home\"\n          ></ion-back-button>\n        </ion-button>\n        <!-- <a href=\"/home\" style=\"color: #fff;font-size: 20px;padding: 6px;\"><i class=\"fa fa-chevron-left\"></i></a> -->\n      </ion-buttons>\n    </div>\n\n    <div class=\"top-right\">\n      <ion-buttons style=\"margin-top: 8px\">\n        <ion-button routerLink=\"/csd-car/search/cart\">\n          <ion-icon name=\"search\" style=\"color: white\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n  </section>\n\n  <ion-slides id=\"slider-box\" [options]=\"productDetialSlider\" pager=\"true\">\n    <ion-slide\n      class=\"category-grid\"\n      *ngFor=\"let img of productDetails.imageVarients \"\n    >\n      <img class=\"bnr-img\" *ngIf=\"img\" alt=\"csd-car-{{img}}\" src=\"{{img}}\" />\n    </ion-slide>\n  </ion-slides>\n  <div class=\"content-section\">\n    <ion-card class=\"p-body\">\n      <div class=\"product-heading\">\n        <ion-grid>\n          <ion-row style=\"margin-top: -10px\">\n            <ion-col size=\"9\">\n              <h5 class=\"product-main-title\">{{productDetails.title}}</h5>\n              <h5 class=\"product-main-title\">{{productDetails.productName}}</h5>\n              <div class=\"price-detail\">\n                <div class=\"left-detail\">\n                  <strong class=\"prodcut-dis\"\n                    >₹ {{productDetails.price }}</strong\n                  >\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"3\">\n              <div class=\"right-detail\">\n                <ion-icon\n                  name=\"heart-outline\"\n                  *ngIf=\"!isProductAddedToWishList\"\n                  class=\"heart\"\n                  (click)=\"AddToWishList('add')\"\n                ></ion-icon>\n                <ion-icon\n                  name=\"heart\"\n                  *ngIf=\"isProductAddedToWishList\"\n                  class=\"heart\"\n                  (click)=\"AddToWishList('remove')\"\n                ></ion-icon>\n\n                <!-- <ion-button style=\"margin-left: -69px;\n                    height: 29px;\n                    font-size: 11px;\" routerLink=\"/compare/{{productDetails._id}}\" shape=\"round\" fill=\"outline\">Compare</ion-button> -->\n                <!-- <ion-icon name=\"share-outline\"></ion-icon> -->\n                <!-- <ion-icon class=\"share-outline\" name=\"share-outline\"></ion-icon> -->\n                <!-- <ion-icon (click)=\"share()\" class=\"share-outline\" name=\"arrow-redo-outline\"></ion-icon> -->\n\n                <br /><br /><br /><br />\n                <ion-label class=\"choose_city\">Registration City</ion-label>\n\n                <ion-select class=\"rto_location\" [(ngModel)]=\"rto_location\">\n                  <ion-select-option value=\"Bharat\"\n                    >Bharat (BH)</ion-select-option\n                  >\n                  <ion-select-option value=\"Delhi\">Delhi</ion-select-option>\n                  <ion-select-option value=\"Uttar Pradesh\"\n                    >UP</ion-select-option\n                  >\n                  <ion-select-option value=\"Haryana\">Haryana</ion-select-option>\n                </ion-select>\n              </div>\n            </ion-col>\n\n            <span\n              style=\"\n                  margin-left: 10p;\n                  background-color: brown;\n                  color: #fff;\n                  padding: 5px;\n                \"\n              *ngIf=\"productDetails.discount\"\n              >₹ {{productDetails.discount}} Cashback</span\n            >\n            <br /><br />\n            <ion-button\n              style=\"background: rgb(38, 44, 63);color:white; padding:  10px 10px;border-radius: 4px;\"\n              href=\"tel:9958008084\"\n            >\n            Enquiry Now\n            </ion-button>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n\n      <!-- <ion-grid>\n        <ion-row>\n          <ion-col class=\"avalable-offer-text\">\n            <strong> Available offers</strong>\n            <ul>\n              <li>Free Home Test Drive</li>\n              <li *ngIf=\"productDetails.discount\">\n                <span *ngIf=\"productDetails.discount !== 0\"\n                  >{{productDetails.discount}} % Discount Available</span\n                >\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n    </ion-card>\n\n    <!-- <hr class=\"seperator-head\"><br> -->\n    <ion-grid class=\"product-tabs\" *ngIf=\"false\">\n      <h4 style=\"margin-left: 19px\">Key Specification</h4>\n      <ion-row>\n        <ion-col size=\"4\">\n          <div class=\"item-box\">\n            <ion-icon name=\"speedometer-outline\"></ion-icon>\n            <p>Mileage (upto)</p>\n            <h6 *ngIf=\"productDetails.milage != 0\">\n              {{productDetails.milage}} kmpl\n            </h6>\n            <h6 *ngIf=\"productDetails.milage == 0\">--</h6>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"item-box\">\n            <ion-icon name=\"cog-outline\"></ion-icon>\n            <p>Engine</p>\n            <h6>{{productDetails.addCustomeFeatures.engine}} CC</h6>\n            <p></p>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"item-box\">\n            <ion-icon name=\"flash-outline\"></ion-icon>\n            <p>BHP</p>\n            <h6>{{productDetails.addCustomeFeatures.bhp}}</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          size=\"4\"\n          class=\"tab\"\n          [ngClass]=\"{ 'active-tab': varientsTab  }\"\n          (click)=\"varientsTabClick()\"\n          >Price & Varients</ion-col\n        >\n        <ion-col\n          style=\"padding-top: 17px\"\n          class=\"tab\"\n          [ngClass]=\"{ 'active-tab' : overViewTab  }\"\n          (click)=\"overViewTabClick()\"\n          ><span>Overview</span></ion-col\n        >\n        <ion-col\n          style=\"padding-top: 17px\"\n          class=\"tab\"\n          [ngClass]=\"{ 'active-tab': priceTab  }\"\n          (click)=\"priceTabClick()\"\n          ><span>Offers</span></ion-col\n        >\n\n        <ion-col\n          style=\"padding-top: 17px\"\n          class=\"tab\"\n          [ngClass]=\"{ 'active-tab': featureTab  }\"\n          (click)=\"featureTabClick()\"\n          class=\"tab\"\n        >\n          <span>Spec.</span></ion-col\n        >\n      </ion-row>\n    </ion-grid>\n\n    <ion-card class=\"p-body\" *ngIf=\"priceTab\">\n      <!-- <h4 style=\"margin-left: 10px;\">Price</h4> -->\n\n      <div class=\"row\" *ngIf=\"productDetails.discount\">\n        <div class=\"float-left\">\n          <ion-label class=\"label-bold\">Cashback</ion-label>\n          <ion-text *ngIf=\"productDetails.discount\"\n            >₹ {{productDetails.discount}} Cashback\n          </ion-text>\n          <ion-text *ngIf=\"!productDetails.discount\">-- </ion-text>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"priceTab\">\n        <div class=\"float-left\">\n          <ion-label class=\"label-bold\">Exchange Price</ion-label>\n          <ion-text\n            *ngIf=\"productDetails.addCustomeFeatures?.exchange_price_from\"\n            >₹ {{productDetails.addCustomeFeatures?.exchange_price_from}}\n          </ion-text>\n          <ion-text\n            *ngIf=\"!productDetails.addCustomeFeatures?.exchange_price_from\"\n            >--\n          </ion-text>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"priceTab\">\n        <div class=\"float-left\">\n          <ion-label class=\"label-bold\">Corporate Discount</ion-label>\n          <ion-text\n            *ngIf=\"productDetails.addCustomeFeatures?.corporate_discount\"\n            >₹ {{productDetails.addCustomeFeatures?.corporate_discount}}\n          </ion-text>\n          <ion-text\n            *ngIf=\"!productDetails.addCustomeFeatures?.corporate_discount\"\n            >--\n          </ion-text>\n        </div>\n      </div>\n      <br /><br /><br />\n    </ion-card>\n\n    <ion-card class=\"p-body\" *ngIf=\"overViewTab\">\n      <!-- <h4 style=\"margin-left: 10px;\">OverView</h4> -->\n      <div class=\"row\" *ngIf=\"productDetails.addCustomeFeatures?.color\">\n        <ion-label class=\"label-bold\">Colors</ion-label><br />\n        <!-- <div class=\"float-left\"> -->\n        <ion-row>\n          <ion-col *ngFor=\"let c of productDetails.addCustomeFeatures?.color\">\n            <span>{{c | uppercase}}</span>\n            <div class=\"circle\" [ngStyle]=\"{'background-color' : c}\"></div>\n          </ion-col>\n        </ion-row>\n        <!-- </div> -->\n      </div>\n      <div class=\"row\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Title</ion-label><br /><br />\n          <ion-text>{{productDetails.title}}</ion-text>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Name</ion-label><br /><br />\n          <ion-text>{{productDetails.productName}}</ion-text>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Price</ion-label><br /><br />\n          <ion-text>₹ {{productDetails.price}} </ion-text>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"overViewTab\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Body Type</ion-label><br /><br />\n          <ion-text *ngIf=\"productDetails.addCustomeFeatures?.body_type\"\n            >{{productDetails.addCustomeFeatures?.body_type}}\n          </ion-text>\n          <ion-text *ngIf=\"!productDetails.addCustomeFeatures?.body_type\"\n            >--\n          </ion-text>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"overViewTab\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Transmission</ion-label><br /><br />\n          <ion-text *ngIf=\"productDetails.transmission_type\"\n            >{{productDetails.transmission_type}}\n          </ion-text>\n          <ion-text *ngIf=\"!productDetails.transmission_type\">-- </ion-text>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"overViewTab\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Fuel Type</ion-label><br /><br />\n          <ion-text *ngIf=\"productDetails.fuel_type\"\n            >{{productDetails.fuel_type}}\n          </ion-text>\n          <ion-text *ngIf=\"!productDetails.fuel_type\">-- </ion-text>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"overViewTab\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Fuel Tank Capacity</ion-label\n          ><br /><br />\n          <ion-text\n            *ngIf=\"productDetails.addCustomeFeatures?.fuel_tank_capacity\"\n            >{{productDetails.addCustomeFeatures?.fuel_tank_capacity}}\n            lt</ion-text\n          >\n          <ion-text\n            *ngIf=\"!productDetails.addCustomeFeatures?.fuel_tank_capacity\"\n            >--\n          </ion-text>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"row flex-inline-column-row\">\n          <ion-label class=\"label-bold\">Description</ion-label>\n          <ion-text *ngIf=\"productDetails.productDescription\"\n            >{{productDetails.productDescription}}</ion-text\n          >\n          <ion-text *ngIf=\"!productDetails.productDescription\">-- </ion-text>\n        </div>\n      </div>\n      <br /><br />\n      <!-- <div class=\"row\" *ngIf=\"overViewTab\">\n      <div class=\"float-left\">\n        <ion-label>Fuel Type</ion-label>\n        <ion-text *ngIf=\"productDetails.addCustomeFeatures?.fuel_type\"\n          >{{productDetails.addCustomeFeatures?.fuel_type}}\n        </ion-text>\n        <ion-text *ngIf=\"!productDetails.addCustomeFeatures?.fuel_type\"\n          >--\n        </ion-text>\n      </div>\n    </div> -->\n      <!--\n    <div class=\"row\">\n      <div class=\"float-left\">\n        <ion-label>Seating Capacity</ion-label>\n        <ion-text>₹ {{productDetails.addCustomeFeatures.seatcing_capacity}} </ion-text>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"float-left\">\n        <ion-label>Transmission</ion-label>\n        <ion-text>₹ {{productDetails.addCustomeFeatures.tranmission}} </ion-text>\n      </div>\n    </div> -->\n\n      <!-- <div class=\"row\" *ngFor=\"let features of productDetails.addCustomeFeatures | keyvalue\">\n      <div class=\"float-left\">\n        <ion-label style=\"text-transform: capitalize;\">{{features.key}}</ion-label>\n        <ion-text style=\"text-transform: capitalize;\"> {{features.value}}</ion-text>\n      </div>\n    </div> -->\n\n      <!-- <div class=\"row\" *ngIf=\"overViewTab\">\n      <div class=\"float-left\">\n        <ion-label>Recommanded</ion-label>\n        <ion-text class=\"status-green\" *ngIf=\"isRecommanded\">YES</ion-text>\n        <ion-text class=\"status-red\" *ngIf=\"!isRecommanded\">NO</ion-text>\n      </div>\n      <div class=\"float-right\" *ngIf=\"overViewTab\">\n        <ion-label>Total Order</ion-label>\n        <ion-text> {{productDetails.totalOrder}}</ion-text>\n      </div>\n    </div> -->\n\n      <div class=\"row\" *ngIf=\"overViewTab\">\n        <!-- <div class=\"float-left\">\n        <ion-label>Car Body type</ion-label>\n        <ion-text *ngIf=\"productDetails.isVeg\">\n          <img src=\"../../../../../assets/img/vag.png\" style=\"width: 14px\" />\n          Veg Food</ion-text\n        >\n        <ion-text *ngIf=\"!productDetails.isVeg\"\n          ><img\n            src=\"../../../../../assets/img/nonvag.png\"\n            style=\"width: 14px\"\n          />\n          NonVeg Food</ion-text\n        >\n      </div> -->\n        <!-- <div class=\"float-right\">\n        <ion-label>Rating</ion-label>\n        <ion-text>\n          {{this.productDetails.rating | number : '1.2-2'}}\n          <ion-icon name=\"star\"></ion-icon\n        ></ion-text>\n      </div> -->\n      </div>\n    </ion-card>\n    <!-- \n  <div class=\"ratings-section\" *ngIf=\"overViewTab\">\n    <ion-grid>\n      <h5>Ratings & Reviews</h5>\n      <ion-row style=\"color: black\">\n        <ion-col>\n          <div class=\"rating-left\">\n            <h2>\n              {{this.productDetails.rating | number : '1.2-2'}}\n              <ion-icon name=\"star\"></ion-icon>\n            </h2>\n            <p>{{reviewList.length}} ratings an reviews</p>\n          </div>\n        </ion-col>\n\n        <ion-col style=\"border-left: 1px #dcdcdc solid\">\n          <div class=\"rating-right\">\n            <p>\n              <span class=\"star\">5 <ion-icon name=\"star\"></ion-icon></span>\n              <span class=\"bar bg-success fivestar\"></span>\n              <span class=\"small\"> &nbsp;&nbsp;{{starRating[4]}}</span>\n            </p>\n            <p>\n              <span class=\"star\">4 <ion-icon name=\"star\"></ion-icon></span>\n              <span class=\"bar bg-success fourstar\"></span>\n              <span class=\"small\"> &nbsp;&nbsp;{{starRating[3]}}</span>\n            </p>\n            <p>\n              <span class=\"star\">3 <ion-icon name=\"star\"></ion-icon></span>\n              <span class=\"bar bg-success threestar\"></span>\n              <span class=\"small\">&nbsp;&nbsp;{{starRating[2]}}</span>\n            </p>\n            <p>\n              <span class=\"star\">2 <ion-icon name=\"star\"></ion-icon></span>\n              <span class=\"bar bg-orange twostar\"></span>\n              <span class=\"small\">&nbsp;&nbsp;{{starRating[1]}}</span>\n            </p>\n            <p>\n              <span class=\"star\">1 <ion-icon name=\"star\"></ion-icon></span>\n              <span class=\"bar bg-pink onestar\"></span>\n              <span class=\"small\">&nbsp;&nbsp;{{starRating[0]}}</span>\n            </p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <div class=\"ratting-list\">\n        <p class=\"title\">\n          {{this.productDetails.rating | number : '1.2-2'}} user ratting\n          <span class=\"float-rigt\"> </span>\n        </p>\n        <ul>\n          <li *ngFor=\"let rate of reviewList | slice:0:2\">\n            <h4>\n              <span>{{rate.rating}} <ion-icon name=\"star\"></ion-icon></span>\n              {{rate.review}}\n            </h4>\n            <p>\n              {{rate.review | slice :0:20}}<a *ngIf=\"rate.review.length > 20\"\n                >...more</a\n              >\n            </p>\n          </li>\n        </ul>\n        <p class=\"viwe-all\">\n          <a\n            style=\"color: seagreen\"\n            routerLink=\"/products/product-review/{{productDetails._id}}\"\n            class=\"see_more\"\n            *ngIf=\"reviewList.length != 0\"\n            ><span>All {{reviewList.length}} reviews</span\n            ><ion-icon name=\"arrow-forward-outline\"></ion-icon\n          ></a>\n        </p>\n      </div>\n    </ion-grid>\n  </div> -->\n\n    <!-- <ion-grid *ngIf=\"overViewTab\">\n    <ion-row *ngIf=\"reviewList.length == 0\">\n      <img\n        style=\"height: 29px; margin-left: 48%\"\n        src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSewipHQyiGNL2wASIpDP38vJTT158U7Mfc5z_KQm-QX9HxnA3S&usqp=CAU\"\n      />\n    </ion-row>\n    <ion-row>\n      <ion-col> </ion-col>\n      <ion-col size=\"9\">\n        <p style=\"margin-left: 10%\" *ngIf=\"reviewList.length == 0\">\n          No Reviews Found\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n    <ion-card class=\"p-body\" *ngIf=\"varientsTab\">\n      <mat-accordion\n        *ngFor=\"let data of productDetails.addCustomeFeatures?.varients\"\n      >\n        <!-- #enddocregion basic-panel -->\n        <mat-expansion-panel\n          (opened)=\"panelOpenState = true\"\n          (closed)=\"panelOpenState = false\"\n          style=\"margin-bottom: 12px\"\n        >\n          <mat-expansion-panel-header>\n            <!-- <mat-panel-title>\n              <h5 style=\"color: black;text-transform: capitalize;\" *ngIf=\"!data.transmission\">{{data.variant_name}} </h5>\n              <h5 style=\"color: black;text-transform: capitalize;\" *ngIf=\"data.transmission\">{{data.variant_name}} AT </h5>\n                <br>\n              <span class=\"accordian-subLabel\" *ngIf=\"!data.transmission\">{{data.fuel_type}} • Manual    • {{productDetails.addCustomeFeatures.engine}} CC • {{productDetails.addCustomeFeatures.bhp}} bhp  </span>\n              <span class=\"accordian-subLabel\" *ngIf=\"data.transmission\">{{data.fuel_type}}  • Automatic • {{productDetails.addCustomeFeatures.engine}} CC • {{productDetails.addCustomeFeatures.bhp}} bhp  </span>\n              <hr>\n              <span class=\"accordian-subLabel accordian-price\">\n                <span style=\"color: black;\">On Road Price -</span> ₹ {{ data.show_room_price + data.rto_price_delhi + data.insurance_price }}Lakh</span>\n            </mat-panel-title> -->\n            <mat-panel-title>\n              <h5\n                style=\"color: black; text-transform: capitalize\"\n                *ngIf=\"!data.transmission\"\n              >\n                {{data.variant_name}} ( ₹\n                {{numDifferentiation(data.show_room_price)}} )\n              </h5>\n              <h5\n                style=\"color: black; text-transform: capitalize\"\n                *ngIf=\"data.transmission\"\n              >\n                {{data.variant_name}} AT ( ₹\n                {{numDifferentiation(data.show_room_price)}} )\n              </h5>\n            </mat-panel-title>\n            <mat-panel-description>\n              <!-- <span class=\"accordian-subLabel\" *ngIf=\"!data.transmission\">{{data.fuel_type}} • Manual    • {{productDetails.addCustomeFeatures.engine}} CC • {{productDetails.addCustomeFeatures.bhp}} bhp  </span> -->\n              <!-- <span class=\"accordian-subLabel\" *ngIf=\"data.transmission\">{{data.fuel_type}}  • Automatic • {{productDetails.addCustomeFeatures.engine}} CC • {{productDetails.addCustomeFeatures.bhp}} bhp  </span> -->\n              <!-- <hr> -->\n              <!-- <span class=\"accordian-subLabel accordian-price\">\n                 ₹ {{ data.show_room_price                                                 + data.rto_price_delhi + data.insurance_price }}Lakh</span> -->\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <div class=\"row flex-inline-column-row\">\n            <ion-label>Fuel Type</ion-label>\n            <ion-text *ngIf=\"data.fuel_type\"> {{data.fuel_type}}</ion-text>\n            <ion-text *ngIf=\"!data.fuel_type\">-- </ion-text>\n          </div>\n          <div class=\"row flex-inline-column-row\">\n            <ion-label>Transmission</ion-label>\n            <ion-text *ngIf=\"data.transmission\">Automatic </ion-text>\n            <ion-text *ngIf=\"!data.transmission\">Manual </ion-text>\n          </div>\n          <!-- <div class=\"row flex-inline-column-row\">\n            <ion-label>Milage</ion-label>\n            <ion-text *ngIf=\"data.mileage\"> ₹ {{data.mileage}}</ion-text>\n            <ion-text *ngIf=\"!data.mileage\">-- </ion-text>\n          </div> -->\n          <!-- <div class=\"row flex-inline-column-row\">\n            <ion-label class=\"varient-inner-label\">CSD Price</ion-label>\n            <ion-text class=\"varient-inner-val\" *ngIf=\"data.csd_price\">\n              ₹ {{data.csd_price}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.csd_price\">-- </ion-text>\n          </div> -->\n          <div class=\"row flex-inline-column-row\">\n            <ion-label>Csd Price</ion-label>\n            <ion-text *ngIf=\"data.show_room_price\">\n              ₹ {{formatMoney(data.show_room_price)}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.show_room_price\">-- </ion-text>\n          </div>\n          <div\n            class=\"row flex-inline-column-row\"\n            *ngIf=\"rto_location == 'Bharat'\"\n          >\n            <ion-label>RTO Price Bharat (BH)</ion-label>\n            <ion-text *ngIf=\"data.rto_price_bh\">\n              ₹ {{formatMoney(data.rto_price_bh)}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.rto_price_bh\">-- </ion-text>\n          </div>\n          <div\n            class=\"row flex-inline-column-row\"\n            *ngIf=\"rto_location == 'Delhi'\"\n          >\n            <ion-label>RTO Price Delhi</ion-label>\n            <ion-text *ngIf=\"data.rto_price_delhi\">\n              ₹ {{formatMoney(data.rto_price_delhi)}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.rto_price_delhi\">-- </ion-text>\n          </div>\n          <div\n            class=\"row flex-inline-column-row\"\n            *ngIf=\"rto_location == 'Uttar Pradesh'\"\n          >\n            <ion-label>RTO Price Uttar Pradesh</ion-label>\n            <ion-text *ngIf=\"data.rto_price_noida\">\n              ₹ {{formatMoney(data.rto_price_noida)}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.rto_price_noida\">-- </ion-text>\n          </div>\n          <div\n            class=\"row flex-inline-column-row\"\n            *ngIf=\"rto_location == 'Haryana'\"\n          >\n            <ion-label>RTO Price Haryana</ion-label>\n            <ion-text *ngIf=\"data.rto_price_gurgaon\">\n              ₹ {{formatMoney(data.rto_price_gurgaon)}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.rto_price_gurgaon\">-- </ion-text>\n          </div>\n\n          <div class=\"row flex-inline-column-row\">\n            <ion-label>Insurance Price</ion-label>\n            <ion-text *ngIf=\"data.insurance_price\">\n              ₹ {{formatMoney(data.insurance_price)}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.insurance_price\">-- </ion-text>\n          </div>\n          <!-- <div class=\"row flex-inline-column-row tcs_price\">\n            <ion-label>TCS</ion-label>\n            <ion-text *ngIf=\"data.TCS\"> ₹ {{formatMoney(data.TCS)}}</ion-text>\n            <ion-text *ngIf=\"!data.TCS\">-- </ion-text>\n          </div> -->\n\n          <div class=\"row flex-inline-column-row\">\n            <ion-label>Other Charges</ion-label>\n            <ion-text *ngIf=\"data.other_price\">\n              ₹ {{formatMoney(data.other_price)}}</ion-text\n            >\n            <ion-text *ngIf=\"!data.other_price\">-- </ion-text>\n          </div>\n          <!-- <ion-row  >\n              <ion-col size=\"6\">\n                <ion-label position=\"floating\">Entitle Category</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n                  <div> JCOs  <img\n                  *ngIf=\"data.jcos\"\n                  src=\"../../../assets/img/yes.png\"\n                  style=\"height: 30px; width:40px\"\n                />\n                <img\n                  *ngIf=\"!data.jcos\"\n                  src=\"../../../assets/img/cancel.png\"\n                  style=\"height: 20px; width:20px\"\n                /></div>\n                </ion-col>\n                </ion-row> -->\n\n                <br/>\n          <div class=\"row\">\n            <ion-label>Entitle Category</ion-label>\n\n            <div>\n              <ion-label position=\"floating\">\n                JCOs\n                <!-- <ion-checkbox type=\"checkbox\" style=\"text-align: right; border: none\" class=\"form-control\"\n                        [(ngModel)]=\"data.jcos\" disabled=\"true\" name=\"jcos\"\n                        placeholder=\"Jcos\"></ion-checkbox>  --> </ion-label\n              >&nbsp;&nbsp;\n              <!-- {{data.jcos}} -->\n              <img\n                *ngIf=\"data.jcos\"\n                src=\"../../../assets/img/yes.png\"\n                alt=\"yes\"\n                style=\"height: 30px; width:40px\"\n              />\n              <img\n                *ngIf=\"!data.jcos\"\n                src=\"../../../assets/img/cancel.png\"\n                alt=\"no\"\n                style=\"height: 20px; width:20px\"\n              />\n              <ion-label position=\"floating\">\n                ORs\n                <!-- <ion-checkbox\n                  type=\"checkbox\"\n                  style=\"text-align: right; border: none\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"data.ors\"\n                  disabled=\"true\"\n                  name=\"ors\"\n                  placeholder=\"Ors\"\n                ></ion-checkbox\n              > -->\n                <img\n                  *ngIf=\"data.ors\"\n                  src=\"../../../assets/img/yes.png\"\n                  alt=\"yes\"\n                  style=\"height: 30px; width:40px\"\n                />\n                <img\n                  *ngIf=\"!data.ors\"\n                  src=\"../../../assets/img/cancel.png\"\n                  alt=\"no\"\n                  style=\"height: 20px; width:20px\"\n                />\n              </ion-label>\n            </div>\n          </div>\n          <br />\n\n          <!-- <div class=\"row flex-inline-column-row\">\n            <ion-label>Optional</ion-label>\n            <ion-text *ngIf=\"data.TCS\"> ₹ {{data.TCS}}</ion-text>\n            <ion-text *ngIf=\"!data.TCS\">-- </ion-text>\n          </div> -->\n          <!-- <hr style=\"height: 1px; background-color: rgb(110, 109, 109)\" /> -->\n          <div class=\"row flex-inline-column-row bold-text\">\n            <ion-label>On Road Price</ion-label>\n            <ion-text *ngIf=\"rto_location == 'Bharat'\">\n              ₹ {{formatMoney(data.show_room_price + data.insurance_price +\n              data.rto_price_bh + int(data.other_price) + int(data.TCS ?\n              data.TCS : 0)) }}</ion-text\n            >\n\n            <ion-text *ngIf=\"rto_location == 'Delhi'\">\n              ₹ {{formatMoney(data.show_room_price + data.insurance_price +\n              data.rto_price_delhi + int(data.other_price) + int(data.TCS ?\n              data.TCS : 0)) }}</ion-text\n            >\n            <ion-text *ngIf=\"rto_location == 'Uttar Pradesh'\">\n              ₹ {{formatMoney(data.show_room_price + data.insurance_price +\n              data.rto_price_noida + int(data.other_price)+ int(data.TCS ?\n              data.TCS : 0)) }}</ion-text\n            >\n            <ion-text *ngIf=\"rto_location == 'Haryana'\">\n              ₹ {{formatMoney(data.show_room_price + data.insurance_price +\n              data.rto_price_gurgaon + int(data.other_price)+ int(data.TCS ?\n              data.TCS : 0)) }}</ion-text\n            >\n          </div>\n\n          <!-- <hr style=\"height: 1px; background-color: black\" /> -->\n\n          <!-- <div class=\"row flex-inline-column-row\">\n            <ion-label class=\"varient-inner-label\">Dealer Discount</ion-label>\n            <ion-text class=\"varient-inner-val\" *ngIf=\"data.consumer_discount\" style=\"color: rgb(205, 67, 67);\">\n             <b> ₹ {{formatMoney(data.consumer_discount)}}</b></ion-text>\n            <ion-text *ngIf=\"!data.consumer_discount\">-- </ion-text>\n          </div> -->\n          <div class=\"row flex-inline-column-row bold-text\">\n            <ion-label>Extra Discount</ion-label>\n            <ion-text *ngIf=\"data.extra_discount\">\n              <b> ₹ {{formatMoney(data.extra_discount)}} </b></ion-text\n            >\n            <!-- <ion-text *ngIf=\"!data.consumer_discount\">-- </ion-text> -->\n          </div>\n          <hr style=\"height: 1px; background-color: black\" />\n\n          <div class=\"row flex-inline-column-row final_price \">\n            <ion-label>Final Price</ion-label>\n            <ion-text *ngIf=\"rto_location == 'Bharat'\">\n              ₹ {{formatMoney((data.show_room_price + data.insurance_price +\n              data.rto_price_bh + int(data.other_price) + int(data.TCS ?\n              data.TCS : 0)) - int(data.extra_discount)) }}</ion-text\n            >\n\n            <ion-text *ngIf=\"rto_location == 'Delhi'\">\n              ₹ {{formatMoney((data.show_room_price + data.insurance_price +\n              data.rto_price_delhi + int(data.other_price) + int(data.TCS ?\n              data.TCS : 0)) - int(data.extra_discount)) }}</ion-text\n            >\n            <ion-text *ngIf=\"rto_location == 'Uttar Pradesh'\">\n              ₹ {{formatMoney((data.show_room_price + data.insurance_price +\n              data.rto_price_noida + int(data.other_price) + int(data.TCS ?\n              data.TCS : 0)) - int(data.extra_discount))}}</ion-text\n            >\n            <ion-text *ngIf=\"rto_location == 'Haryana'\">\n              ₹ {{formatMoney((data.show_room_price + data.insurance_price +\n              data.rto_price_gurgaon + int(data.other_price) + int(data.TCS ?\n              data.TCS : 0) ) - int(data.extra_discount))}}</ion-text\n            >\n          </div>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <br /><br /><br /><br /><br /><br />\n    </ion-card>\n\n    <ion-card class=\"p-body\" *ngIf=\"featureTab\">\n      <mat-accordion\n        *ngFor=\"let data of productDetails.addCustomeFeatures?.varients\"\n      >\n        <mat-expansion-panel\n          (opened)=\"panelOpenState = true\"\n          (closed)=\"panelOpenState = false\"\n          style=\"margin-bottom: 12px\"\n        >\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <h5\n                style=\"color: black; text-transform: capitalize\"\n                *ngIf=\"!data.transmission\"\n              >\n                {{data.variant_name}}\n              </h5>\n              <h5\n                style=\"color: black; text-transform: capitalize\"\n                *ngIf=\"data.transmission\"\n              >\n                {{data.variant_name}} AT\n              </h5>\n            </mat-panel-title>\n            <mat-panel-description> </mat-panel-description>\n          </mat-expansion-panel-header>\n          <br />\n          <h2 style=\"margin-left: 10px\">Interior</h2>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Power Window Rear</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.power_window_rear\"\n                style=\"height: 24px;  float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n               \n              />\n              <img\n                style=\"height: 24px;  float: right\"\n                *ngIf=\"!data.power_window_rear\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n                 \n              />\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\" sizeMd=\"6\">\n              <ion-label position=\"floating\">Power Window Front</ion-label>\n            </ion-col>\n            <ion-col size=\"4\" sizeMd=\"6\" class=\"icon-sign\">\n              <img\n                *ngIf=\"data?.power_window_front\"\n                style=\"height: 24px; \"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px;  float: right\"\n                *ngIf=\"!data.power_window_front\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n          </ion-row>\n\n          <!-- <ion-row class=\"add-detail-row\">\n            <ion-col  size=\"8\" sizeMd=\"6\" sizeMd=\"6\">\n              <ion-label position=\"floating\">Power Window Rear</ion-label>\n            </ion-col>\n            <ion-col size=\"4\" sizeMd=\"6\" class=\"icon-sign\">\n              <img *ngIf=\"data?.power_window_rear\" style=\"height: 24px;  float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\" />\n              <img style=\"height: 24px;  float: right\" *ngIf=\"!data.power_window_rear\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\" />\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\" sizeMd=\"6\" sizeMd=\"6\">\n              <ion-label position=\"floating\">Power Window Front</ion-label>\n            </ion-col>\n            <ion-col size=\"4\" sizeMd=\"6\" class=\"icon-sign\">\n              <img *ngIf=\"data?.power_window_front\" style=\"height: 30px; \"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\" />\n              <img style=\"height: 30px;\" *ngIf=\"!data.power_window_front\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\" />\n            </ion-col>\n          </ion-row> -->\n\n          <!-- //------------// -->\n\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Air Conditioner</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <span\n                style=\"height: 24px;  float: right\"\n                *ngIf=\"data?.air_conditioner != 'NO'\"\n              >\n                {{data?.air_conditioner}}\n              </span>\n              <img\n                style=\"height: 24px;  float: right\"\n                *ngIf=\"data.air_conditioner == 'NO'\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Side Mirror Adjustment</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.side_mirror_adjustment\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.side_mirror_adjustment\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Music</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.music\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.music\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Touch Screen</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.touch_screen\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.touch_screen\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Infotainment</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.infotainment\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.infotainment\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Bluetooth</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.bluetooth\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.bluetooth\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\"\n                >Steering Mounted Controls</ion-label\n              >\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.streaing_mount_control\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.streaing_mount_control\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Rear Ac</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.rear_ac\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.rear_ac\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Parking Camera</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.parking_camera\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.parking_camera\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Arm Rest</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.arm_rest\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.arm_rest\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <br />\n          <h6 style=\"margin-left: 10px\">Exterior</h6>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Sunroof</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.sunroof\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.sunroof\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Wheel Cover</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.wheel_covers\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.wheel_covers\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Back Wiper</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.back_wiper\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.back_wiper\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Defogger</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.di_fogger\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.di_fogger\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Alloy Wheel</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <span\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"data?.aloewheel != 'NO'\"\n              >\n                {{data?.aloewheel}}\n              </span>\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"data?.aloewheel == 'NO'\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Alloy Shape</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <span\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"data?.aloe_style_shape != 'NO'\"\n              >\n                {{data?.aloe_style_shape}}\n              </span>\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Central Locking</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <span\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"data?.central_locking != 'NO'\"\n              >\n                {{data?.central_locking}}\n              </span>\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Projector Headlamp</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.project_headlamp\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.project_headlamp\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">DRL</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.drl\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.drl\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Fog Lamp</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.flog_lamp\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.flog_lamp\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\"\n                >Electric Auto Adjust ORVM</ion-label\n              >\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.ORVM\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.ORVM\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <br />\n          <h6 style=\"margin-left: 10px\">Safety</h6>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Air Bags</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <span\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"data?.airbags != 'NO'\"\n              >\n                {{data?.airbags}}\n              </span>\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"data?.airbags == 'NO'\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">ABS</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.ABS\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.ABS\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">EBD</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.EBD\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.EBD\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Break</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <span\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"data?.break != 'NO'\"\n              >\n                {{data?.break}}\n              </span>\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Seat Belt</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.seat_bealt\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.seat_bealt\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Parking Sensor</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.parking_sensor\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.parking_sensor\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\">Inside Rear View Mirror</ion-label>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.rearview_mirrror\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.rearview_mirrror\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\"\n                >Driver Seat Belt Reminder</ion-label\n              >\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.seat_bealt_reminder_driver\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.seat_bealt_reminder_driver\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n            <ion-col size=\"6\"></ion-col>\n          </ion-row>\n          <ion-row class=\"add-detail-row\">\n            <ion-col size=\"8\">\n              <ion-label position=\"floating\"\n                >Passenger Seat Belt Reminder</ion-label\n              >\n            </ion-col>\n            <ion-col size=\"4\">\n              <img\n                *ngIf=\"data?.seat_bealt_reminder_passenger\"\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                src=\"../../../../../assets/img/orderCheck.png\"\n                alt=\"check\"\n              />\n              <img\n                style=\"height: 24px; margin-top: 15px; float: right\"\n                *ngIf=\"!data.seat_bealt_reminder_passenger\"\n                src=\"../../../../../assets/img/error.png\"\n                alt=\"not-check\"\n              />\n            </ion-col>\n          </ion-row>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <br /><br /><br /><br /><br /><br />\n    </ion-card>\n    <div class=\"cta-footer-bar\">\n      <div>\n        <ion-button\n          style=\"width: 100%\"\n          href=\"tel:9958008084\"\n          >Enquiry Now\n        </ion-button>\n      </div>\n      <div\n        size=\"2\"\n        style=\"\n          padding: 12px 13px;\n          max-height: 36px;\n          width: 40px;\n          margin-top: 3px;\n          margin-right: 10px;\n          background: rgb(38, 44, 63);\n          border-radius: 4px;\n        \"\n      >\n        <ion-icon\n          (click)=\"callme('9958008084')\"\n          class=\"call-now\"\n          name=\"call-outline\"\n        ></ion-icon>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ng-template #skeleton>\n  <ion-list>\n    <ion-item *ngFor=\"let item of [1, 2, 3, 4, 5,6,7,8,9]\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts"); // import { SupportComponent } from './support/support.component';


    var routes = [{
      path: '',
      redirectTo: 'csd-car/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      data: {
        title: 'Home | csd car App',
        description: 'Welcome to the homepage of our csd car App.'
      }
    }, // {
    //   path: 'account',
    //   loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
    // },
    {
      path: 'csd-car-blogs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-notification-notification-module */
        "pages-notification-notification-module").then(__webpack_require__.bind(null,
        /*! ./pages/notification/notification.module */
        "./src/app/pages/notification/notification.module.ts")).then(function (m) {
          return m.NotificationPageModule;
        });
      }
    }, // {
    //   path: 'compare/:id',
    //   loadChildren: () => import('./pages/carCompare/carCompare.module').then(m => m.CarComparePageModule)
    // },
    {
      path: 'csd-car-help-and-support',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-EVP-EVP-module */
        "pages-EVP-EVP-module").then(__webpack_require__.bind(null,
        /*! ./pages/EVP/EVP.module */
        "./src/app/pages/EVP/EVP.module.ts")).then(function (m) {
          return m.EVPPageModule;
        });
      }
    }, // {
    //   path: 'show-interest/:service/:car',
    //   loadChildren: () => import('./pages/showInterest/showInterest.module').then(m => m.ShowInterestPageModule)
    // },
    {
      path: 'menu/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-menu-menu-module */
        "menu-menu-module").then(__webpack_require__.bind(null,
        /*! ./pages/menu/menu.module */
        "./src/app/pages/menu/menu.module.ts")).then(function (m) {
          return m.MenuPageModule;
        });
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-menu-menu-module */
        "menu-menu-module").then(__webpack_require__.bind(null,
        /*! ./pages/menu/menu.module */
        "./src/app/pages/menu/menu.module.ts")).then(function (m) {
          return m.MenuPageModule;
        });
      }
    }, {
      path: 'search/:from',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-search-search-module */
        "search-search-module").then(__webpack_require__.bind(null,
        /*! ./pages/search/search.module */
        "./src/app/pages/search/search.module.ts")).then(function (m) {
          return m.SearchPageModule;
        });
      }
    }, // {
    //   path: 'profile',
    //   loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
    // },
    {
      path: 'csd-car-more-pages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-contact-contact-module */
        "contact-contact-module").then(__webpack_require__.bind(null,
        /*! ./pages/contact/contact.module */
        "./src/app/pages/contact/contact.module.ts")).then(function (m) {
          return m.ContactPageModule;
        });
      }
    }, {
      path: 'csd-car-brands',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-category-module */
        "category-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/category/category.module */
        "./src/app/pages/category/category.module.ts")).then(function (m) {
          return m.CategoryPageModule;
        });
      }
    }, {
      path: 'csd-car-details/:id',
      // component:ProductDetailsPage
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/productDetails/productDetails.module */
        "./src/app/pages/productDetails/productDetails.module.ts")).then(function (m) {
          return m.ProductDetailsPageModule;
        });
      }
    }, {
      path: 'csd-car',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-settings-module */
        "pages-settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/settings.module */
        "./src/app/pages/settings/settings.module.ts")).then(function (m) {
          return m.SettingsModule;
        });
      }
    }, {
      path: 'sitemap',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-sitemap-sitemap-module */
        "pages-sitemap-sitemap-module").then(__webpack_require__.bind(null,
        /*! ./pages/sitemap/sitemap.module */
        "./src/app/pages/sitemap/sitemap.module.ts")).then(function (m) {
          return m.SitemapPageModule;
        });
      }
    }, {
      path: 'privacy-policy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-privacy-policy-privacy-policy-module */
        "pages-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
        /*! ./pages/privacy-policy/privacy-policy.module */
        "./src/app/pages/privacy-policy/privacy-policy.module.ts")).then(function (m) {
          return m.PrivacyPolicyPageModule;
        });
      }
    }, {
      path: 'term-and-conditions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-term-term-module */
        "pages-term-term-module").then(__webpack_require__.bind(null,
        /*! ./pages/term/term.module */
        "./src/app/pages/term/term.module.ts")).then(function (m) {
          return m.TermPageModule;
        });
      }
    }, // { path: 'csd-car-help-and-support', component: SupportComponent }, 
    {
      path: '404',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }, {
      path: '**',
      redirectTo: '/404'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background);\n}\n\n/* Remove background transitions for switching themes */\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\n.bg-transparent {\n  background: transparent !important;\n}\n\nion-menu.md ion-list-header {\n  padding-left: 18px;\n  padding-right: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 450;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: var(--ion-select-menu-bgcolor);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-text-color);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n/*\n * iOS Menu\n*/\n\nion-menu.ios ion-list-header {\n  padding-left: 16px;\n  padding-right: 16px;\n  color: var(--ion-text-color);\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\n.menu-proile {\n  position: relative;\n}\n\n.menu-proile:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 0px solid transparent;\n  border-right: 405px solid transparent;\n  border-bottom: 120px solid var(--ion-background-color-rgba);\n  bottom: 3px;\n  left: -2px;\n}\n\n.menu-proile-bg {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.menu-profile-content {\n  position: absolute;\n  bottom: 0px;\n  background: transparent;\n  padding: 15px 0px 5px !important;\n  width: 100%;\n}\n\n.menu-profile-content ion-item {\n  --background: transparent;\n  border: 0px;\n  overflow: inherit;\n}\n\n.menu-profile-content .user-profile-img {\n  position: absolute;\n  right: 10px;\n  bottom: 15px;\n  margin: 0px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.user-name {\n  font-size: 18px !important;\n  font-weight: bold !important;\n  text-transform: capitalize;\n}\n\n.location-menu {\n  padding: 0px 15px 15px;\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\nng-otp-input .wrapper input {\n  background: transparent;\n  outline: none;\n}\n\n.select-theme {\n  padding: 5px 1px 6px 8px;\n  border: none;\n  color: var(--ion-text-color) !important;\n  outline: none;\n  width: 100%;\n  background: var(--ion-item-background);\n}\n\n.feedback-thank-popup {\n  display: block;\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.feedback-thank-popup img {\n  width: 50px;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n\n.feedback-button {\n  justify-content: center;\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.feedback-button .mat-dialog-close {\n  width: 100%;\n  --background: var(--ion-gocart-bg-color);\n}\n\n.offer-svg svg {\n  fill: var(--ion-text-color);\n  width: 24px;\n}\n\n.whatsapp-btn {\n  position: fixed;\n  top: 70%;\n  color: #fff;\n  right: 0;\n}\n\n.whatsapp-btn img {\n  height: 46px;\n  width: 42px;\n}\n\n.whatsapp-btn a {\n  text-decoration: none;\n  color: #fff;\n}\n\n.youtube-btn {\n  position: fixed;\n  top: 75%;\n  color: #fff;\n  right: -14px;\n}\n\n.youtube-btn img {\n  height: 70px;\n  width: 70px;\n}\n\n.youtube-btn a {\n  text-decoration: none;\n  color: #fff;\n}\n\n.instagram-btn {\n  position: fixed;\n  top: 83%;\n  color: #fff;\n  right: -2px;\n}\n\n.instagram-btn img {\n  height: 40px;\n  width: 42px;\n}\n\n.instagram-btn a {\n  text-decoration: none;\n  color: #fff;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 10;\n}\n\n.footer-logo {\n  width: 120px;\n  margin-bottom: 10px;\n}\n\n.footer-section {\n  margin-bottom: 20px;\n}\n\n.footer-section h3 {\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n  color: #d9d9d9;\n}\n\n.footer-section p {\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n\n.footer-email {\n  color: #ffffff;\n  font-weight: bold;\n  display: inline-block;\n  margin: 10px 0;\n  text-decoration: none;\n}\n\n.footer-section ul {\n  list-style: none;\n  padding: 0;\n}\n\n.footer-section ul li {\n  margin-bottom: 8px;\n}\n\n.footer-section ul li a {\n  text-decoration: none;\n  color: #d9d9d9;\n  font-size: 0.9rem;\n}\n\n.footer-section ul li a:hover {\n  color: #ffffff;\n}\n\n.social-icons ion-icon {\n  font-size: 1.5rem;\n  margin-right: 10px;\n  color: white;\n  cursor: pointer;\n}\n\n.footer-bottom {\n  text-align: center;\n  font-size: 0.8rem;\n  margin-top: 10px;\n  color: #d9d9d9;\n  border-top: 1px solid #3a6f47;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUVBLHdDQUFBO0FDQUY7O0FER0EsdURBQUE7O0FBS0E7RUFDRSxpQ0FBQTtBQ0pGOztBRE9BOztDQUFBOztBQUdBO0VBQ0UsZUFBQTtBQ0pGOztBRE1BO0VBQ0Usa0NBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLDRDQUFBO0FDSkY7O0FET0E7RUFDRSwrQkFBQTtBQ0pGOztBRE9BOztFQUVFLDRCQUFBO0FDSkY7O0FET0E7RUFDRSxnREFBQTtBQ0pGOztBRE9BOztDQUFBOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsK0JBQUE7QUNKRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDR0Y7O0FEREE7RUFDRSxzQkFBQTtFQUNBLGdEQUFBO0FDSUY7O0FEREE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUNJRjs7QUREQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURIQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLHdDQUFBO0FDT0Y7O0FETEE7RUFDRSwyQkFBQTtFQUNBLFdBQUE7QUNRRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNPRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDT0Y7O0FESkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNPRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNPRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDT0Y7O0FESkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNPRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNPRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDT0Y7O0FESkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNPRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xufVxuXG4vKiBSZW1vdmUgYmFja2dyb3VuZCB0cmFuc2l0aW9ucyBmb3Igc3dpdGNoaW5nIHRoZW1lcyAqL1xuLy8gaW9uLW1lbnUgaW9uLWl0ZW0ge1xuLy8gLS10cmFuc2l0aW9uOiBub25lO1xuLy8gfVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBNZW51XG4qL1xuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG5cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1zZWxlY3QtbWVudS1iZ2NvbG9yKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cblxuLypcbiAqIGlPUyBNZW51XG4qL1xuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWVudS1wcm9pbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVudS1wcm9pbGU6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNDA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEyMHB4IHNvbGlkIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYmEpO1xuICBib3R0b206IDNweDtcbiAgbGVmdDogLTJweDtcbn1cbi5tZW51LXByb2lsZS1iZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5tZW51LXByb2ZpbGUtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxNXB4IDBweCA1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVudS1wcm9maWxlLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG4ubWVudS1wcm9maWxlLWNvbnRlbnQgLnVzZXItcHJvZmlsZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udXNlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmxvY2F0aW9uLW1lbnUge1xuICBwYWRkaW5nOiAwcHggMTVweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbm5nLW90cC1pbnB1dCAud3JhcHBlciBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VsZWN0LXRoZW1lIHtcbiAgcGFkZGluZzogNXB4IDFweCA2cHggOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xufVxuLmZlZWRiYWNrLXRoYW5rLXBvcHVwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZlZWRiYWNrLXRoYW5rLXBvcHVwIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZmVlZGJhY2stYnV0dG9uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLmZlZWRiYWNrLWJ1dHRvbiAubWF0LWRpYWxvZy1jbG9zZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1nb2NhcnQtYmctY29sb3IpO1xufVxuLm9mZmVyLXN2ZyBzdmcge1xuICBmaWxsOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG5cbi53aGF0c2FwcC1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDo3MCU7IFxuICBjb2xvcjogI2ZmZjtcbiAgcmlnaHQ6IDA7XG4gIFxufVxuLndoYXRzYXBwLWJ0biBpbWd7XG4gIGhlaWdodDogNDZweDtcbiAgd2lkdGg6IDQycHg7XG59XG5cbi53aGF0c2FwcC1idG4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi55b3V0dWJlLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3NSU7XG4gIGNvbG9yOiAjZmZmO1xuICByaWdodDogLTE0cHg7XG4gIFxufVxuLnlvdXR1YmUtYnRuIGltZ3tcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLnlvdXR1YmUtYnRuIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW5zdGFncmFtLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA4MyU7XG4gIGNvbG9yOiAjZmZmO1xuICByaWdodDogLTJweDtcbiAgXG59XG4uaW5zdGFncmFtLWJ0biBpbWd7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQycHg7XG59XG5cbi5pbnN0YWdyYW0tYnRuIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8vIGlvbi1mb290ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE0NzJhOyAvKiBNYXRjaCB0aGUgZ3JlZW4gY29sb3IgKi9cbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAyMHB4IDA7XG4vLyB9XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZm9vdGVyLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb290ZXItc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb290ZXItc2VjdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogI2Q5ZDlkOTtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmZvb3Rlci1lbWFpbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vdGVyLXNlY3Rpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZm9vdGVyLXNlY3Rpb24gdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5mb290ZXItc2VjdGlvbiB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5mb290ZXItc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zb2NpYWwtaWNvbnMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvb3Rlci1ib3R0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTZmNDc7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIiwiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xufVxuXG4vKiBSZW1vdmUgYmFja2dyb3VuZCB0cmFuc2l0aW9ucyBmb3Igc3dpdGNoaW5nIHRoZW1lcyAqL1xuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tc2VsZWN0LW1lbnUtYmdjb2xvcik7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbi8qXG4gKiBpT1MgTWVudVxuKi9cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWVudS1wcm9pbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tZW51LXByb2lsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDQwNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMjBweCBzb2xpZCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2JhKTtcbiAgYm90dG9tOiAzcHg7XG4gIGxlZnQ6IC0ycHg7XG59XG5cbi5tZW51LXByb2lsZS1iZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm1lbnUtcHJvZmlsZS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDE1cHggMHB4IDVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtcHJvZmlsZS1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4ubWVudS1wcm9maWxlLWNvbnRlbnQgLnVzZXItcHJvZmlsZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi51c2VyLW5hbWUge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5sb2NhdGlvbi1tZW51IHtcbiAgcGFkZGluZzogMHB4IDE1cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG5uZy1vdHAtaW5wdXQgLndyYXBwZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlbGVjdC10aGVtZSB7XG4gIHBhZGRpbmc6IDVweCAxcHggNnB4IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbn1cblxuLmZlZWRiYWNrLXRoYW5rLXBvcHVwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZlZWRiYWNrLXRoYW5rLXBvcHVwIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mZWVkYmFjay1idXR0b24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mZWVkYmFjay1idXR0b24gLm1hdC1kaWFsb2ctY2xvc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ29jYXJ0LWJnLWNvbG9yKTtcbn1cblxuLm9mZmVyLXN2ZyBzdmcge1xuICBmaWxsOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4ud2hhdHNhcHAtYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDcwJTtcbiAgY29sb3I6ICNmZmY7XG4gIHJpZ2h0OiAwO1xufVxuXG4ud2hhdHNhcHAtYnRuIGltZyB7XG4gIGhlaWdodDogNDZweDtcbiAgd2lkdGg6IDQycHg7XG59XG5cbi53aGF0c2FwcC1idG4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi55b3V0dWJlLWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3NSU7XG4gIGNvbG9yOiAjZmZmO1xuICByaWdodDogLTE0cHg7XG59XG5cbi55b3V0dWJlLWJ0biBpbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4ueW91dHViZS1idG4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pbnN0YWdyYW0tYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDgzJTtcbiAgY29sb3I6ICNmZmY7XG4gIHJpZ2h0OiAtMnB4O1xufVxuXG4uaW5zdGFncmFtLWJ0biBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MnB4O1xufVxuXG4uaW5zdGFncmFtLWJ0biBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5mb290ZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjZDlkOWQ5O1xufVxuXG4uZm9vdGVyLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uZm9vdGVyLWVtYWlsIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItc2VjdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb290ZXItc2VjdGlvbiB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZDlkOWQ5O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNvY2lhbC1pY29ucyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyLWJvdHRvbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZDlkOWQ5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzNhNmY0NztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _providers_product_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./providers/product.services */
    "./src/app/providers/product.services.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
    // import { FCM } from "@ionic-native/fcm/ngx";


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(menu, platform, router, splashScreen, statusBar, storage, userData, swUpdate, _UserData, location, imageLoaderConfig, _ProductService, alertController, appVersion, // private keyboard: Keyboard,
      // private fcm: FCM,
      // private push: Push,
      toastCtrl, socialSharing, titleService, metaService, activatedRoute) {
        _classCallCheck(this, AppComponent);

        this.menu = menu;
        this.platform = platform;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.userData = userData;
        this.swUpdate = swUpdate;
        this._UserData = _UserData;
        this.location = location;
        this.imageLoaderConfig = imageLoaderConfig;
        this._ProductService = _ProductService;
        this.alertController = alertController;
        this.appVersion = appVersion;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.titleService = titleService;
        this.metaService = metaService;
        this.activatedRoute = activatedRoute;
        this.showSpash = true;
        this.selectedTheme = "light";
        this.userName = "Guest";
        this.userImage = "";
        this.appPages = [{
          title: "Home",
          url: "/csd-car/home",
          icon: "home-outline"
        }, {
          title: "All Cars",
          url: "/csd-car/all-csd-cars",
          icon: "car-sport-outline"
        }, {
          title: "Brands",
          url: "/csd-car/category",
          icon: "apps"
        }];
        this.loggedIn = false;
        this.dark = false;
        this.storeList = [];
        this.searchproductList = [];

        if (!localStorage.getItem("AuthToken")) {
          this.registerTempUser();
        } // disable spinners by default, you can add [spinner]="true" to a specific component instance later on to override this


        imageLoaderConfig.enableSpinner(true);
        console.log(imageLoaderConfig.spinnerEnabled, "imageLoaderConfig.spinnerEnabled");
        imageLoaderConfig.spinnerColor = "red"; // set the maximum concurrent connections to 10

        imageLoaderConfig.setConcurrency(10); // this could be useful while trying to debug issues with the component

        imageLoaderConfig.enableDebugMode(); // imageLoaderConfig.setDisplay('inline-block');
        // imageLoaderConfig.useImageTag(true);

        imageLoaderConfig.setBackgroundSize("cover");
        this.imageLoaderConfig.setConcurrency(5);
        this.imageLoaderConfig.setMaximumCacheSize(200 * 1024 * 1024); // set max size to 20MB

        this.imageLoaderConfig.setMaximumCacheAge(365 * 24 * 60 * 60 * 1000); // 7 days

        this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
        this.imageLoaderConfig.setFileNameCachedWithExtension(true);
      }

      _createClass(AppComponent, [{
        key: "registerTempUser",
        value: function registerTempUser() {
          var _this = this;

          var tempName = Math.random();
          tempName = tempName.toString().slice(5, 10);
          var payload = {
            name: "Guest" + tempName,
            fullName: "Guest" + tempName,
            email: "guest" + tempName + "@a2zcar.in",
            password: "guest",
            mobile: "1000000000"
          };

          this._ProductService.registerTempUser(payload).subscribe(function (result) {
            // console.log("00 result", result);
            console.log("_id", result.customerDetails._id);
            localStorage.setItem("userId", result.customerDetails._id);
            localStorage.setItem("AuthToken", result.authToken);
            console.log(localStorage.getItem("AuthToken"));

            _this.initializeApp();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            if (window.location.href.includes("home")) {
              navigator["app"].exitApp();
            } else {
              _this2.location.back();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])(function () {
            return _this3.activatedRoute;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["mergeMap"])(function (route) {
            return route.data;
          })).subscribe(function (data) {
            // Update Title
            if (data['title']) {
              _this3.titleService.setTitle(data['title']);
            } // Update Meta Description


            if (data['description']) {
              _this3.metaService.updateTag({
                name: 'description',
                content: data['description']
              });
            }
          });
        }
      }, {
        key: "checkApplicationUpadte",
        value: function checkApplicationUpadte() {
          var _this4 = this;

          this.platform.ready().then(function () {
            var appVersion = "";

            _this4._ProductService.getAdminProfile().subscribe(function (result) {
              if (result) {
                var adminProfile = result["data"];
                console.log("admin profile", adminProfile);

                if (adminProfile) {
                  appVersion = adminProfile.appVersion;
                  var currentVersion = "";

                  _this4.appVersion.getVersionNumber().then(function (data) {
                    currentVersion = data; // console.log(
                    //   currentVersion.toString() == appVersion,
                    //   "currentVersion.toString() == appVersion"
                    // );
                    // console.log(
                    //   currentVersion.toString(),
                    //   appVersion,
                    //   "currentVersion.toString() == appVersion"
                    // );
                    // console.log(
                    //   typeof currentVersion.toString(),
                    //   typeof appVersion,
                    //   "currentVersion.toString() == appVersion"
                    // );

                    if (currentVersion.toString() == appVersion) {
                      localStorage.setItem("appVersion", appVersion);
                    } else {
                      _this4.openUpdateAvailableDialog();
                    }
                  });
                }
              }
            });
          });
        }
      }, {
        key: "openUpdateAvailableDialog",
        value: function openUpdateAvailableDialog() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.appVersion, "app version");
                    _context.next = 3;
                    return this.alertController.create({
                      cssClass: "Update Available",
                      header: "Update Available",
                      message: "Please Update application for Latest Features",
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("Confirm Cancel: blah");
                        }
                      }, {
                        text: "Update Now",
                        handler: function handler() {
                          window.open("https://play.google.com/store/apps/details?id=com.carClient.bookMyDreamCar", "_system");
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // pushsetup(){
        //   const options: PushOptions = {
        //     android: {
        //       senderID:"35150350528"
        //     },
        //     ios: {
        //         alert: 'true',
        //         badge: true,
        //         sound: 'false'
        //     },
        //  }
        //  const pushObject: PushObject = this.push.init(options);
        //  pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
        //  pushObject.on('registration').subscribe((deviceData: any) => {
        //    console.log('Device registered', deviceData);
        //    this._UserData
        //    .updateProfile('5ea4259790a47f96283ee75d', {
        //      device_token : deviceData.registrationId || ''
        //    })
        //    .subscribe(async (data: any) => {
        //      console.log("data", data);
        //     //  alert("success" + deviceData.registrationId )
        //    });
        //   });
        //  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
        // }

      }, {
        key: "refesh",
        value: function refesh($event) {
          this.shopName = localStorage.getItem("shopName"); // this._UserData
          //   .getCustomerDetails(localStorage.getItem("userId"))
          //   .subscribe((data: any) => {
          //     console.log(data, "---");
          //     this.userImage = data.CustomerImage;
          //     this.userName = data.fullName;
          //     $event.target.complete();
          //   });
        }
      }, {
        key: "getStoreList",
        value: function getStoreList() {
          var _this5 = this;

          this._ProductService.fetchStoreList().subscribe(function (data) {
            _this5.storeList = data.storeList;
            localStorage.setItem("shopID", _this5.storeList.length ? _this5.storeList[0]._id : null); // console.log(this.storeList);
          });
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this6 = this;

          this.platform.ready().then(function () {
            _this6.shopName = localStorage.getItem("shopName"); // this.statusBar.styleDefault();

            if (!window.AndroidNotch) {
              _this6.statusBar.hide();
            } else {
              _this6.statusBar.backgroundColorByHexString("#282b3d");

              _this6.statusBar.styleLightContent();
            }

            if (window.cordova && window.cordova.plugins.Keyboard) {// alert(window.cordova.plugins)
              // Keyboard.show();
              // window.cordova.plugins.Keyboard.enableProdMode(true);
            }

            _this6.splashScreen.hide();

            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(10000).subscribe(function () {
              return _this6.showSpash = false;
            });

            if (localStorage.getItem("AuthToken")) {
              _this6.getStoreList();

              _this6.checkApplicationUpadte(); // this._UserData
              //   .getCustomerDetails(localStorage.getItem("userId"))
              //   .subscribe((data: any) => {
              //     console.log(data, "---");
              //     this.userImage = data.CustomerImage;
              //     this.userName = data.fullName;
              //   });

            } // this.pushsetup()

          }); //   this.fcm.subscribeToTopic("marketing");
          //   this.fcm.getToken().then((token) => {
          //     // backend.registerToken(token);
          //     console.log("getToken" + token)
          //   });
          //   this.fcm.onNotification().subscribe((data) => {
          //     if (data.wasTapped) {
          //       console.log("Received in background");
          //     } else {
          //       console.log("Received in foreground");
          //     }
          //   });
          //   this.fcm.onTokenRefresh().subscribe((token) => {
          //     // backend.registerToken(token);
          //      console.log("refersh Token" + token)
          //   });
        } // checkLoginStatus() {
        //   return this.userData.isLoggedIn().then(loggedIn => {
        //     return this.updateLoggedInStatus(loggedIn);
        //   });
        // }
        // updateLoggedInStatus(loggedIn: boolean) {
        //   setTimeout(() => {
        //     this.loggedIn = loggedIn;
        //   }, 300);
        // }
        // listenForLoginEvents() {
        //   window.addEventListener("user:login", () => {
        //     this.updateLoggedInStatus(true);
        //   });
        //   window.addEventListener("user:signup", () => {
        //     this.updateLoggedInStatus(true);
        //   });
        //   window.addEventListener("user:logout", () => {
        //     this.updateLoggedInStatus(false);
        //   });
        // }

      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("userId");
          localStorage.removeItem("AuthToken");
          return this.router.navigateByUrl("/csd-car/home");
        } // openTutorial() {
        //   this.menu.enable(false);
        //   this.storage.set("ion_did_tutorial", false);
        //   this.router.navigateByUrl("/tutorial");
        // }

      }, {
        key: "share",
        value: function share() {
          var _this7 = this;

          this.platform.ready().then(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.socialSharing.share("Download a 2 z Car to get Best offer now - " + "https://play.google.com/store/apps/details?id=com.carClient.bookMyDreamCar").then(function () {})["catch"](function (err) {
                        console.log(err);
                      });

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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.backButtonSubscription.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"]
      }, {
        type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
      }, {
        type: ionic_image_loader__WEBPACK_IMPORTED_MODULE_11__["ImageLoaderConfigService"]
      }, {
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_13__["ProductService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_14__["AppVersion"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["Title"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["Meta"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"], _providers_user_data__WEBPACK_IMPORTED_MODULE_8__["UserData"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_11__["ImageLoaderConfigService"], _providers_product_services__WEBPACK_IMPORTED_MODULE_13__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_14__["AppVersion"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["Meta"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_productDetails_productDetails_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/productDetails/productDetails.module */
    "./src/app/pages/productDetails/productDetails.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _app_core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../app/core/interceptors/token.interceptor */
    "./src/app/core/interceptors/token.interceptor.ts");
    /* harmony import */


    var _app_core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../app/core/interceptors/jwt.interceptor */
    "./src/app/core/interceptors/jwt.interceptor.ts");
    /* harmony import */


    var _app_core_app_spinner_app_spinner_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../app/core/app-spinner/app-spinner.module */
    "./src/app/core/app-spinner/app-spinner.module.ts");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js"); // import { Push } from '@ionic-native/push/ngx';
    // import { Facebook } from '@ionic-native/facebook/ngx';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _pages_productDetails_productDetails_module__WEBPACK_IMPORTED_MODULE_15__["ProductDetailsPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _app_core_app_spinner_app_spinner_module__WEBPACK_IMPORTED_MODULE_20__["AppSpinnerModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), ionic_image_loader__WEBPACK_IMPORTED_MODULE_21__["IonicImageLoader"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_25__["SocialSharing"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _app_core_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _app_core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"],
        multi: true
      }, _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__["WebView"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_23__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_24__["FileOpener"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_26__["AppVersion"] // SocialSharing
      // Facebook
      ],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/app-spinner/app-spinner.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/app-spinner/app-spinner.module.ts ***!
    \********************************************************/

  /*! exports provided: AppSpinnerModule */

  /***/
  function srcAppCoreAppSpinnerAppSpinnerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSpinnerModule", function () {
      return AppSpinnerModule;
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


    var _page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-loader/page-loader.component */
    "./src/app/core/app-spinner/page-loader/page-loader.component.ts");
    /* harmony import */


    var _page_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-loader.service */
    "./src/app/core/app-spinner/page-loader.service.ts");

    var AppSpinnerModule = function AppSpinnerModule() {
      _classCallCheck(this, AppSpinnerModule);
    };

    AppSpinnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_3__["PageLoaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      providers: [_page_loader_service__WEBPACK_IMPORTED_MODULE_4__["PageLoaderService"]],
      exports: [_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_3__["PageLoaderComponent"]]
    })], AppSpinnerModule);
    /***/
  },

  /***/
  "./src/app/core/app-spinner/page-loader.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/app-spinner/page-loader.service.ts ***!
    \*********************************************************/

  /*! exports provided: PageLoaderService */

  /***/
  function srcAppCoreAppSpinnerPageLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLoaderService", function () {
      return PageLoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageLoaderService = /*#__PURE__*/function () {
      function PageLoaderService() {
        _classCallCheck(this, PageLoaderService);

        // tslint:disable-next-line:variable-name
        this._loaderState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.counter = 0;
      }

      _createClass(PageLoaderService, [{
        key: "enable",
        value: function enable() {
          this.counter++;
          var loaderState = {
            show: true
          };

          this._loaderState.emit(loaderState);
        }
      }, {
        key: "disable",
        value: function disable() {
          var loaderState = {
            show: false
          }; // const loaderState = new LoaderState();
          // loaderState.show = false;
          // this._loaderState.emit(<LoaderState>loaderState);

          this.counter--;

          if (this.counter === 0) {
            this._loaderState.emit(loaderState);
          } else if (this.counter < 0) {
            console.warn('Counter is stuck, value can not be less then zero. Please check you have enabled & disabled the loader in pairs');
            this.counter = 0;

            this._loaderState.emit(loaderState);
          }
        }
      }, {
        key: "next",
        value: function next(value) {
          if (value) {
            this.enable();
          } else {
            this.disable();
          }
        }
      }, {
        key: "loaderState",
        get: function get() {
          return this._loaderState.asObservable();
        }
      }]);

      return PageLoaderService;
    }();

    PageLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageLoaderService);
    /***/
  },

  /***/
  "./src/app/core/app-spinner/page-loader/page-loader.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/core/app-spinner/page-loader/page-loader.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreAppSpinnerPageLoaderPageLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Loader Start */\n.loader-main {\n  background: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  z-index: 999999999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -webkit-animation: fadein 0.5s;\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0.5s;\n}\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.loader {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n#loader-4 span {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border-radius: 100%;\n  background-color: #3498db;\n  margin: 35px 5px;\n  opacity: 0;\n}\n#loader-4 span:nth-child(1) {\n  -webkit-animation: opacitychange 1s ease-in-out infinite;\n          animation: opacitychange 1s ease-in-out infinite;\n}\n#loader-4 span:nth-child(2) {\n  -webkit-animation: opacitychange 1s ease-in-out 0.33s infinite;\n          animation: opacitychange 1s ease-in-out 0.33s infinite;\n}\n#loader-4 span:nth-child(3) {\n  -webkit-animation: opacitychange 1s ease-in-out 0.66s infinite;\n          animation: opacitychange 1s ease-in-out 0.66s infinite;\n}\n@-webkit-keyframes opacitychange {\n  0%, 100% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n}\n@keyframes opacitychange {\n  0%, 100% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n}\n/* Loader End */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL2NvcmUvYXBwLXNwaW5uZXIvcGFnZS1sb2FkZXIvcGFnZS1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvYXBwLXNwaW5uZXIvcGFnZS1sb2FkZXIvcGFnZS1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQzRCLGlCQUFBO0VBQ0Qsc0JBQUE7RUFDRCxpQkFBQTtFQUMxQixzQkFBQTtBQ0lGO0FERkE7RUFDRTtJQUFPLFVBQUE7RUNNUDtFRExBO0lBQU8sVUFBQTtFQ1FQO0FBQ0Y7QURYQTtFQUNFO0lBQU8sVUFBQTtFQ01QO0VETEE7SUFBTyxVQUFBO0VDUVA7QUFDRjtBRFBBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUtBLGdDQUFBO0FDU0Y7QUROQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDU0Y7QUROQTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUNTRjtBRE5BO0VBQ0UsOERBQUE7VUFBQSxzREFBQTtBQ1NGO0FETkE7RUFDRSw4REFBQTtVQUFBLHNEQUFBO0FDU0Y7QUROQTtFQUNFO0lBQ0UsVUFBQTtFQ1NGO0VETkE7SUFDRSxVQUFBO0VDUUY7QUFDRjtBRGZBO0VBQ0U7SUFDRSxVQUFBO0VDU0Y7RUROQTtJQUNFLFVBQUE7RUNRRjtBQUNGO0FETkEsZUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwLXNwaW5uZXIvcGFnZS1sb2FkZXIvcGFnZS1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMb2FkZXIgU3RhcnQgKi9cbi5sb2FkZXItbWFpbntcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIC41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAuNXM7IC8qIEZpcmVmb3ggPCAxNiAqL1xuICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gLjVzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuICAtby1hbmltYXRpb246IGZhZGVpbiAuNXM7IC8qIE9wZXJhIDwgMTIuMSAqL1xuICBhbmltYXRpb246IGZhZGVpbiAuNXM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG4ubG9hZGVye1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNsb2FkZXItNCBzcGFue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIG1hcmdpbjogMzVweCA1cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNsb2FkZXItNCBzcGFuOm50aC1jaGlsZCgxKXtcbiAgYW5pbWF0aW9uOiBvcGFjaXR5Y2hhbmdlIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4jbG9hZGVyLTQgc3BhbjpudGgtY2hpbGQoMil7XG4gIGFuaW1hdGlvbjogb3BhY2l0eWNoYW5nZSAxcyBlYXNlLWluLW91dCAwLjMzcyBpbmZpbml0ZTtcbn1cblxuI2xvYWRlci00IHNwYW46bnRoLWNoaWxkKDMpe1xuICBhbmltYXRpb246IG9wYWNpdHljaGFuZ2UgMXMgZWFzZS1pbi1vdXQgMC42NnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgb3BhY2l0eWNoYW5nZXtcbiAgMCUsIDEwMCV7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDYwJXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBMb2FkZXIgRW5kICovXG4iLCIvKiBMb2FkZXIgU3RhcnQgKi9cbi5sb2FkZXItbWFpbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk5OTk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gIC8qIEZpcmVmb3ggPCAxNiAqL1xuICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLyogT3BlcmEgPCAxMi4xICovXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmxvYWRlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuI2xvYWRlci00IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG4gIG1hcmdpbjogMzVweCA1cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNsb2FkZXItNCBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbjogb3BhY2l0eWNoYW5nZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuI2xvYWRlci00IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uOiBvcGFjaXR5Y2hhbmdlIDFzIGVhc2UtaW4tb3V0IDAuMzNzIGluZmluaXRlO1xufVxuXG4jbG9hZGVyLTQgc3BhbjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb246IG9wYWNpdHljaGFuZ2UgMXMgZWFzZS1pbi1vdXQgMC42NnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgb3BhY2l0eWNoYW5nZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogTG9hZGVyIEVuZCAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/app-spinner/page-loader/page-loader.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/core/app-spinner/page-loader/page-loader.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageLoaderComponent */

  /***/
  function srcAppCoreAppSpinnerPageLoaderPageLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function () {
      return PageLoaderComponent;
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


    var _page_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../page-loader.service */
    "./src/app/core/app-spinner/page-loader.service.ts");

    var PageLoaderComponent = /*#__PURE__*/function () {
      function PageLoaderComponent(loaderService) {
        _classCallCheck(this, PageLoaderComponent);

        this.loaderService = loaderService;
        this.show = false;
      }

      _createClass(PageLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.subscription = this.loaderService.loaderState.subscribe(function (state) {
            _this8.show = state.show;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return PageLoaderComponent;
    }();

    PageLoaderComponent.ctorParameters = function () {
      return [{
        type: _page_loader_service__WEBPACK_IMPORTED_MODULE_2__["PageLoaderService"]
      }];
    };

    PageLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/app-spinner/page-loader/page-loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-loader.component.scss */
      "./src/app/core/app-spinner/page-loader/page-loader.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_page_loader_service__WEBPACK_IMPORTED_MODULE_2__["PageLoaderService"]])], PageLoaderComponent);
    /***/
  },

  /***/
  "./src/app/core/interceptors/jwt.interceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
    \******************************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppCoreInterceptorsJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(router, toastController) {
        _classCallCheck(this, JwtInterceptor);

        this.router = router;
        this.toastController = toastController;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this9 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {// do stuff with response if you want
            }
          }, function (err) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"])) {
                        _context3.next = 8;
                        break;
                      }

                      if (!(err.status === 401)) {
                        _context3.next = 8;
                        break;
                      }

                      _context3.next = 4;
                      return this.toastController.create({
                        message: "Session Expired",
                        position: "top",
                        duration: 3000
                      });

                    case 4:
                      toast = _context3.sent;
                      _context3.next = 7;
                      return toast.present();

                    case 7:
                      this.logout();

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("userId");
          localStorage.removeItem("AuthToken");
          return this.router.navigateByUrl("/login");
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/core/interceptors/token.interceptor.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/interceptors/token.interceptor.ts ***!
    \********************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppCoreInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor() {
        _classCallCheck(this, TokenInterceptor);

        this.isLoading = false;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = request.clone({
            setHeaders: {
              __authorization_x_token: localStorage.getItem("AuthToken") || ''
            }
          });
          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/not-found/not-found.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".not-found-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  text-align: center;\n  background: linear-gradient(135deg, #ff7e5f, #feb47b);\n  /* Vibrant gradient */\n  color: #fff;\n  font-family: Arial, sans-serif;\n}\n\n.error-code {\n  font-size: 8rem;\n  font-weight: bold;\n  margin: 0;\n}\n\n.error-message {\n  font-size: 1.5rem;\n  margin: 10px 0 20px;\n}\n\n.home-link {\n  display: inline-block;\n  padding: 10px 20px;\n  border-radius: 5px;\n  background-color: #fff;\n  color: #ff7e5f;\n  text-decoration: none;\n  font-weight: bold;\n  transition: background-color 0.3s, color 0.3s;\n}\n\n.home-link:hover {\n  background-color: #ff7e5f;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFBdUQscUJBQUE7RUFDdkQsV0FBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDRUo7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7QUNFSjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtZm91bmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY3ZTVmLCAjZmViNDdiKTsgLyogVmlicmFudCBncmFkaWVudCAqL1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgLmVycm9yLWNvZGUge1xuICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xuICB9XG4gIFxuICAuaG9tZS1saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjZmY3ZTVmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG4gIH1cbiAgXG4gIC5ob21lLWxpbms6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdlNWY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgIiwiLm5vdC1mb3VuZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY3ZTVmLCAjZmViNDdiKTtcbiAgLyogVmlicmFudCBncmFkaWVudCAqL1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uZXJyb3ItY29kZSB7XG4gIGZvbnQtc2l6ZTogOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMjBweDtcbn1cblxuLmhvbWUtbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmY3ZTVmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG59XG5cbi5ob21lLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZTVmO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/not-found/not-found.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/pages/productDetails/productDetails-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/productDetails/productDetails-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductDetailsPageRoutingModule */

  /***/
  function srcAppPagesProductDetailsProductDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPageRoutingModule", function () {
      return ProductDetailsPageRoutingModule;
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


    var _productDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./productDetails */
    "./src/app/pages/productDetails/productDetails.ts");

    var routes = [{
      path: '',
      component: _productDetails__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsPage"]
    }];

    var ProductDetailsPageRoutingModule = function ProductDetailsPageRoutingModule() {
      _classCallCheck(this, ProductDetailsPageRoutingModule);
    };

    ProductDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/productDetails/productDetails.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/productDetails/productDetails.module.ts ***!
    \***************************************************************/

  /*! exports provided: ProductDetailsPageModule */

  /***/
  function srcAppPagesProductDetailsProductDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function () {
      return ProductDetailsPageModule;
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


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _productDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./productDetails */
    "./src/app/pages/productDetails/productDetails.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _productDetails_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./productDetails-routing.module */
    "./src/app/pages/productDetails/productDetails-routing.module.ts");

    var ProductDetailsPageModule = function ProductDetailsPageModule() {
      _classCallCheck(this, ProductDetailsPageModule);
    };

    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _productDetails_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsPageRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"]],
      declarations: [_productDetails__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]],
      entryComponents: []
    })], ProductDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/productDetails/productDetails.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/productDetails/productDetails.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductDetailsProductDetailsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".discount-pirce {\n  font-size: 14px;\n  color: #fafafa;\n  background: linear-gradient(90deg, #ff708d, #ff3d71);\n  padding: 2px 7px;\n  display: inline-block;\n  margin: 10px 0px;\n  border-radius: 3px;\n}\n\n.select-size-text {\n  color: var(--ion-text-color);\n  font-size: 16px;\n}\n\n.avalable-offer-text {\n  color: var(--ion-small-color);\n}\n\n.vagnon-image {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.vagnon-image-small {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.header {\n  position: fixed;\n  width: 100%;\n  padding: 5px 10px;\n  background: linear-gradient(to top, rgba(6, 0, 0, 0) 0, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%);\n  z-index: 999;\n}\n\n.card-img {\n  height: 200px;\n  width: 100%;\n  margin-left: -20px;\n}\n\n.cart-button {\n  margin-left: 70px;\n}\n\n.product-price {\n  font-size: 23px;\n  font-weight: bolder;\n  margin-left: 70px;\n  padding-bottom: 15px;\n}\n\n.heart {\n  height: 30px;\n  width: 30px;\n  color: var(--ion-heart-color);\n}\n\n.disc-tag {\n  font-size: 14px;\n  color: #fafafa;\n  background: var(--ion-heart-color);\n  padding: 2px 7px;\n  display: inline-block;\n  margin: 10px 0px;\n}\n\n.top-left {\n  float: left;\n}\n\n/* Top right text */\n\n.top-right {\n  float: right;\n}\n\n.p-body {\n  position: relative;\n  z-index: 1;\n}\n\n.p-des {\n  margin-left: -15px;\n  margin-top: -14px;\n}\n\n/* Bottom left text */\n\n.bottom-left {\n  position: absolute;\n  top: 150px;\n  left: 19px;\n  color: white;\n  font-weight: bolder;\n  z-index: 1;\n  text-shadow: 0px 0px 10px #000;\n}\n\n.bottom-left img {\n  width: 20px;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.slider-ion {\n  width: 121px !important;\n  box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.36);\n  border-radius: 10px;\n  background-color: var(--ion-card-background-color);\n  margin-right: 20px;\n}\n\n.trading-product {\n  background-color: var(--ion-background-color);\n  padding-top: 15px;\n  border-bottom: 1px solid var(--ion-border-color);\n  padding-bottom: 10px;\n}\n\n.trading-product h5 {\n  margin: 0px;\n  padding: 0px 15px;\n}\n\n.trading-product .trading-product-item {\n  text-align: left;\n}\n\n.trading-product .trading-product-item .item-img {\n  border-radius: 10px;\n  height: 170px !important;\n}\n\n.trading-product-item p {\n  margin: 0px;\n}\n\n.ratings-product {\n  background-color: var(--ion-background-color);\n  border-top: 1px solid var(--ion-border-color);\n  padding-top: 15px;\n}\n\n.ratings-product h5 {\n  margin-top: 0px;\n  padding: 0px 15px;\n  font-size: 18px;\n  color: var(--ion-text-color);\n  font-weight: 500;\n  margin-bottom: 15px;\n  position: relative;\n}\n\n.ratings-product h5 span {\n  display: block;\n  color: #8e8e8e;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.ratings-product h5 a {\n  position: absolute;\n  right: 15px;\n  top: 8px;\n  text-decoration: none;\n  color: #2dd36f;\n}\n\n.ratings-product p.ratings-star img {\n  width: 14px !important;\n  height: 14px;\n}\n\n.ratings-product .ratings-slide-content {\n  text-align: left;\n}\n\n.ratings-product .ratings-slide-content h5 {\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 122px;\n  display: inline-block;\n}\n\n.ratings-product .ratings-slide-content .ratings-star {\n  margin: 5px 0px;\n  font-size: 14px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star img {\n  margin-right: 5px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star span {\n  color: #898989;\n}\n\n.ratings-product .ratings-slide-content p.ratings-slide-info {\n  margin: 5px 0px;\n  font-size: 16px;\n}\n\n.ratings-product .ratings-slide-content p.ratings-slide-info span {\n  display: block;\n  color: var(--ion-text-color);\n  font-size: 16px;\n}\n\n.ratings-slide-item {\n  margin-right: 15px;\n}\n\n.ratings-slide-img img {\n  width: 100%;\n  height: 132px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.ratings-slide-img span.offer {\n  position: absolute;\n  left: -7px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.ratings-slide-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: -2px;\n  bottom: -8px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 20px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.ratings-product {\n  padding-top: 15px;\n  border-top: 1px solid var(--ion-border-color);\n}\n\n.ratings-product h5 {\n  margin-top: 0px;\n  padding: 0px 15px;\n  position: relative;\n}\n\n.add-to-cart {\n  background-color: var(--ion-gocart-bg-color);\n  color: cornsilk;\n  border-bottom-right-radius: 11px;\n  border-bottom-left-radius: 11px;\n  /* height: 27px; */\n  width: 109%;\n  margin-top: 10px;\n  margin-left: -5px;\n  margin-bottom: -5px;\n  text-align: center;\n}\n\n.select-size {\n  color: #000;\n  margin-left: 10px;\n  font-weight: 500;\n}\n\n.select-size ion-col {\n  background-color: var(--ion-background-color);\n  color: var(--ion-text-color);\n  margin-right: 10px;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 5px;\n}\n\n.select-size ion-col.active {\n  border: 1px solid var(--ion-select-size-bgcolor);\n  box-shadow: 0px 0px 10px #ccc;\n  background-color: var(--ion-select-size-bgcolor);\n  color: #fff;\n}\n\n.select-size ion-col span {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.ratings-section {\n  border-top: 1px solid var(--ion-border-color);\n}\n\n.ratings-section ion-grid {\n  background-color: var(--ion-background-color);\n}\n\n.ratings-section ion-grid h5 {\n  margin-top: 0px;\n  padding: 10px 15px 0px;\n  font-size: 18px;\n  color: var(--ion-text-color);\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n\n.rating-left {\n  text-align: center;\n}\n\n.rating-left h2 {\n  font-size: 24px;\n  color: var(--ion-text-color);\n}\n\n.rating-left p {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n}\n\n.rating-right {\n  padding: 0px 15px;\n}\n\n.rating-right p {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n\n.rating-right p .star {\n  width: 24px;\n  color: var(--ion-text-color);\n}\n\n.rating-right p .bar {\n  width: 47%;\n  height: 8px;\n  background-color: #ccc;\n  border-radius: 30px;\n  position: relative;\n  overflow: hidden;\n}\n\n.rating-right p .small {\n  width: 36px;\n  color: var(--ion-text-color);\n}\n\n.rating-right p .bar::before {\n  content: \"\";\n  display: block;\n  position: relative;\n}\n\n.bg-success::before {\n  background-color: #28a542;\n}\n\n.bg-orange::before {\n  background-color: #fe9e04;\n}\n\n.bg-pink::before {\n  background-color: #fa4343;\n}\n\n.rating-right p .fivestar::before {\n  width: 100%;\n  height: 100%;\n}\n\n.rating-right p .fourstar::before {\n  width: 60%;\n  height: 100%;\n}\n\n.rating-right p .threestar::before {\n  width: 40%;\n  height: 100%;\n}\n\n.rating-right p .twostar::before {\n  width: 20%;\n  height: 100%;\n}\n\n.rating-right p .onestar::before {\n  width: 10%;\n  height: 100%;\n}\n\n.ratting-list {\n  padding: 0px 15px;\n}\n\n.ratting-list .title {\n  border-bottom: 1px solid var(--ion-border-color);\n  padding-bottom: 10px;\n  color: var(--ion-text-color);\n}\n\n.ratting-list ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.ratting-list ul li h4 {\n  font-size: 18px;\n}\n\n.ratting-list ul li h4 span {\n  background-color: #27a541;\n  color: #fff;\n  padding: 7px 15px;\n  font-size: 14px;\n  border-radius: 5px;\n  vertical-align: middle;\n  font-weight: normal;\n  display: inline-block;\n}\n\n.ratting-list ul li {\n  border-bottom: 1px solid var(--ion-border-color);\n  margin-bottom: 15px;\n  padding-bottom: 15px;\n}\n\n.ratting-list ul li p a {\n  color: #1190b5;\n}\n\n.ratting-list p.viwe-all a {\n  display: flex;\n  justify-content: space-between;\n  font-weight: bold;\n  text-decoration: none;\n  color: var(--ion-text-color);\n}\n\n.trading-name {\n  font-size: 14px;\n  font-weight: 500;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 92px;\n  display: inline-block;\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.trading-price {\n  font-size: 14px;\n}\n\n.tranding-rating-star {\n  font-size: 14px;\n  margin: 0px;\n}\n\n.tranding-rating-star img {\n  width: 12px;\n  display: inline-block;\n  margin-right: 3px;\n  vertical-align: middle;\n}\n\n.trading-pro-img {\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n\n.tranding-price {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.tranding-price s {\n  font-size: 10px !important;\n  margin-left: 5px;\n}\n\n.product-main-title {\n  margin-top: 0px;\n  text-transform: capitalize;\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-text-color);\n}\n\n.product-rating {\n  color: var(--ion-color-light);\n}\n\n.product-rating img {\n  width: 15px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.product-rating strong {\n  font-size: 18px;\n  vertical-align: middle;\n  color: var(--ion-text-color);\n}\n\n.float-rigt {\n  float: right;\n}\n\n.cart-button {\n  width: 100%;\n  margin-left: 0;\n  height: 51px;\n  position: absolute;\n  bottom: -5px;\n  font-family: inherit;\n  font-size: 16px;\n  background: #8a3738;\n  z-index: 999;\n}\n\n.go-to-cart {\n  width: 100%;\n  margin-left: 0;\n  height: 51px;\n  position: absolute;\n  bottom: -5px;\n  font-family: inherit;\n  font-size: 16px;\n  z-index: 999;\n  --background: var(--ion-go-cart-color);\n}\n\n.plus-button {\n  border: 1px solid var(--ion-border-color);\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  background: var(--ion-background-plus);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.plus-button .minus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: left;\n}\n\n.plus-button .plus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: right;\n}\n\n.product-dis {\n  font-size: 14px;\n  text-transform: capitalize;\n  color: black;\n}\n\n.bought-pro-img {\n  height: 80px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\ns {\n  font-size: 12px;\n  color: var(--ion-small-color);\n}\n\n.prodcut-dis {\n  font-size: 14px;\n  text-transform: capitalize;\n  color: black;\n}\n\n.share-outline {\n  display: block;\n  font-size: 30px;\n  margin-top: 10px;\n  float: right;\n  color: var(--ion-small-color);\n}\n\n.item-total {\n  position: fixed;\n  bottom: 0px;\n  background-color: var(--ion-bggreen-light);\n  width: 100%;\n  z-index: 99;\n}\n\n.total-items {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n\n.view-cart {\n  text-align: right;\n  padding: 10px;\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.p-body {\n  position: relative;\n  z-index: 1;\n  box-shadow: none;\n  border-top: 1px solid var(--ion-border-color);\n  --background: transparent;\n  border-radius: 0px;\n}\n\n.p-body .row {\n  clear: both;\n  padding: 15px 0px;\n  overflow: hidden;\n  margin-bottom: -16px;\n}\n\n.p-body ion-label {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n}\n\n.p-body ion-text {\n  color: var(--ion-text-color);\n  font-size: 16px;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n.tab {\n  background: #f5f5f5;\n  padding: 10px;\n  text-align: center;\n  border-right: white 3px solid;\n  cursor: pointer;\n}\n\n.product-tabs {\n  padding: 0px 0px 5px;\n}\n\n.item-box {\n  text-align: center;\n  border-radius: 8px;\n  box-shadow: var(--ion-card-shadow);\n  padding: 10px;\n  border: 1px solid var(--ion-border-color);\n}\n\n.item-box ion-icon {\n  font-size: 21px;\n}\n\n.item-box h6 {\n  font-size: 14px;\n  margin: 3px 0px;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.item-box p {\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 12px;\n}\n\n.product-heading {\n  margin-top: 20px;\n}\n\n.seperator-head {\n  background-color: grey;\n  height: 1px;\n  margin-top: -20px;\n}\n\n.active-tab {\n  background-color: #e4e3df;\n  border-bottom: 3px solid #db3932;\n}\n\n.accordian-subLabel {\n  position: absolute;\n  color: #948c8c;\n}\n\n.accordian-price {\n  margin-top: 23px;\n  color: brown;\n  font-weight: 500;\n  /* margin-top: 66px; */\n  font-size: small;\n}\n\n.rto_location {\n  width: 100px;\n  color: #262c3f;\n  font-weight: 600;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.call-now {\n  font-size: 22px;\n  padding-bottom: -10px;\n  color: white;\n  margin-top: -4px;\n  margin-left: 5px;\n}\n\n.varient-inner-val {\n  color: brown !important;\n  font-weight: 500;\n}\n\n.varient-inner-label {\n  color: #5b5bff !important;\n}\n\n.call-box {\n  padding: 12px 13px;\n  background: #262c3f !important;\n  max-height: 36px;\n  margin-top: 10px;\n}\n\n.choose_city {\n  color: #262c3f !important;\n  margin-top: -6px;\n}\n\n.circle {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-top: 10px;\n  border: 1px #838080 solid;\n  background-color: black;\n}\n\n.price-detail {\n  display: flex;\n  justify-content: space-between;\n}\n\n.price-detail .right-detail {\n  text-align: center;\n  margin-top: -20px;\n}\n\n#slider-box .bnr-img {\n  width: 100%;\n  height: 230px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 620px) {\n  #slider-box .bnr-img {\n    height: 190px;\n  }\n}\n\n.cta-footer-bar {\n  display: flex;\n  gap: 20px;\n  margin: 0 20px 30px;\n}\n\n.cta-footer-bar > div:first-child {\n  flex: 0 0 200px;\n}\n\n.cta-footer-bar > div:last-child {\n  flex: 0 0 55px;\n}\n\n.flex-inline-column-row {\n  display: flex !important;\n  justify-content: space-between;\n}\n\n@media (min-width: 620px) {\n  .flex-inline-column-row {\n    display: flex !important;\n    margin-right: 56%;\n  }\n}\n\n.label-bold {\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: #000 !important;\n}\n\n.add-detail-row {\n  border-bottom: 1px solid #ddd;\n}\n\n.icon-sign {\n  text-align: left;\n}\n\n@media (max-width: 620px) {\n  .icon-sign {\n    text-align: right;\n  }\n}\n\n.discount_extra {\n  color: #1b9c20 !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n}\n\n.discount_extra ion-label {\n  color: #1b9c20 !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n}\n\n.final_price {\n  color: #3c8f3f !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n}\n\n.final_price ion-label, .final_price ion-text {\n  color: #3c8f3f !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n}\n\n.tcs_price {\n  color: brown !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n}\n\n.tcs_price ion-label, .tcs_price ion-text {\n  color: brown !important;\n  font-weight: bold !important;\n  font-size: 18px !important;\n}\n\n.bold-text {\n  font-weight: bold !important;\n}\n\n.bold-text ion-label, .bold-text ion-text {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvUmF2aS1Qcm9qZWN0cy9ibWRjLWNsaWVudC9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3REZXRhaWxzL3Byb2R1Y3REZXRhaWxzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3REZXRhaWxzL3Byb2R1Y3REZXRhaWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHdHQUFBO0VBSUEsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsNkJBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURPQSxtQkFBQTs7QUFDQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUdFLGtCQUFBO0VBQ0EsVUFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBLHFCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURTQTtFQUNFLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUNBLG9CQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0FDTkY7O0FEU0E7RUFDRSw2Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNORjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7QUNORjs7QURTQTtFQUNFLGNBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0FDTkY7O0FEU0E7RUFDRSxpQkFBQTtFQUNBLDZDQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFNBO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURVQTtFQUNFLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0UsNkNBQUE7QUNQRjs7QURVQTtFQUNFLDZDQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FDUEY7O0FEVUE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNQRjs7QURVQTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtBQ1BGOztBRFVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSx5QkFBQTtBQ1BGOztBRFVBO0VBQ0UseUJBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxnREFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUNQRjs7QURVQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUEY7O0FEVUE7RUFDRSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDUEY7O0FEVUE7RUFDRSw2QkFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FDUEY7O0FEVUE7RUFDRSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0FDUEY7O0FEVUE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQ1BGOztBRFVBO0VBSUUsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ1ZGOztBRGFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNWRjs7QURhQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDVkY7O0FEY0E7RUFJRSwwQkFBQTtFQUNBLDJCQUFBO0FDZEY7O0FEa0JBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDZkY7O0FEa0JBO0VBQ0UsV0FBQTtBQ2ZGOztBRGtCQTtFQUNFLFlBQUE7QUNmRjs7QURrQkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ2ZGOztBRGtCQTtFQUNFLG9CQUFBO0FDZkY7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FDZkY7O0FEa0JBO0VBQ0UsZUFBQTtBQ2ZGOztBRGtCQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZGOztBRGtCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNmRjs7QURrQkE7RUFDRSxnQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDZkY7O0FEa0JBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtBQ2ZGOztBRGtCQTtFQUVFLGtCQUFBO0VBQ0EsY0FBQTtBQ2hCRjs7QURtQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDaEJGOztBRG1CQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDaEJGOztBRG1CQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UseUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDaEJGOztBRG1CQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ2hCRjs7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJKOztBRG9CQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2pCRjs7QURtQkU7RUFMRjtJQU1JLGFBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDaEJGOztBRGtCRTtFQUNFLGVBQUE7QUNoQko7O0FEbUJFO0VBQ0UsY0FBQTtBQ2pCSjs7QURzQkE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0FDbkJGOztBRHNCQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxpQkFBQTtFQ25CRjtBQUNGOztBRHNCQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ3BCRjs7QURzQkE7RUFDRSw2QkFBQTtBQ25CRjs7QURxQkE7RUFBVyxnQkFBQTtBQ2pCWDs7QURrQkE7RUFEQTtJQUVFLGlCQUFBO0VDZkE7QUFDRjs7QURrQkE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNmRjs7QURpQkU7RUFDRSx5QkFBQTtFQUNGLDRCQUFBO0VBQ0EsMEJBQUE7QUNmRjs7QURvQkE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNqQkY7O0FEbUJFO0VBQ0UseUJBQUE7RUFDRiw0QkFBQTtFQUNBLDBCQUFBO0FDakJGOztBRHFCQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ2xCRjs7QURvQkU7RUFDRSx1QkFBQTtFQUNGLDRCQUFBO0VBQ0EsMEJBQUE7QUNsQkY7O0FEc0JBO0VBQ0UsNEJBQUE7QUNuQkY7O0FEb0JFO0VBQ0UsNEJBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0RGV0YWlscy9wcm9kdWN0RGV0YWlscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2NvdW50LXBpcmNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY3MDhkLCAjZmYzZDcxKTtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zZWxlY3Qtc2l6ZS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXZhbGFibGUtb2ZmZXItdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuXG4udmFnbm9uLWltYWdlIHtcbiAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLnZhZ25vbi1pbWFnZS1zbWFsbCB7XG4gIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCxcbiAgICAgIHJnYmEoNiwgMCwgMCwgMCkgMCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC40KSA1MCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuNykgMTAwJSk7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLmNhcnQtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIC8vIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oZWFydCB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIC8vIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1oZWFydC1jb2xvcik7XG59XG5cbi5kaXNjLXRhZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1oZWFydC1jb2xvcik7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnRvcC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8qIFRvcCByaWdodCB0ZXh0ICovXG4udG9wLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucC1ib2R5IHtcbiAgLy8gbWFyZ2luLXRvcDogLTQwcHg7XG4gIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucC1kZXMge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xufVxuXG4vKiBCb3R0b20gbGVmdCB0ZXh0ICovXG4uYm90dG9tLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDE5cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgei1pbmRleDogMTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwO1xufVxuXG4uYm90dG9tLWxlZnQgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2xpZGVyLWlvbiB7XG4gIHdpZHRoOiAxMjFweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAxcHggNXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jYXJkLWJhY2tncm91bmQtY29sb3IpO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi50cmFkaW5nLXByb2R1Y3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udHJhZGluZy1wcm9kdWN0IGg1IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4udHJhZGluZy1wcm9kdWN0IC50cmFkaW5nLXByb2R1Y3QtaXRlbSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50cmFkaW5nLXByb2R1Y3QgLnRyYWRpbmctcHJvZHVjdC1pdGVtIC5pdGVtLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTcwcHggIWltcG9ydGFudDtcbn1cblxuLnRyYWRpbmctcHJvZHVjdC1pdGVtIHAge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCBoNSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IGg1IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM4ZThlOGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCBoNSBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyZGQzNmY7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgcC5yYXRpbmdzLXN0YXIgaW1nIHtcbiAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgaDUge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEyMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCAucmF0aW5ncy1zdGFyIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCAucmF0aW5ncy1zdGFyIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgLnJhdGluZ3Mtc3RhciBzcGFuIHtcbiAgY29sb3I6ICM4OTg5ODk7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCBwLnJhdGluZ3Mtc2xpZGUtaW5mbyB7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgcC5yYXRpbmdzLXNsaWRlLWluZm8gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yYXRpbmdzLXNsaWRlLWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5yYXRpbmdzLXNsaWRlLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnJhdGluZ3Mtc2xpZGUtaW1nIHNwYW4ub2ZmZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC03cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yYXRpbmdzLXNsaWRlLWltZyBzcGFuLm9mZmVyOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAtMnB4O1xuICBib3R0b206IC04cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCBoNSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC10by1jYXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdvY2FydC1iZy1jb2xvcik7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDExcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDExcHg7XG4gIC8qIGhlaWdodDogMjdweDsgKi9cbiAgd2lkdGg6IDEwOSU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3Qtc2l6ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNlbGVjdC1zaXplIGlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbi5zZWxlY3Qtc2l6ZSBpb24tY29sLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1zZWxlY3Qtc2l6ZS1iZ2NvbG9yKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1zZWxlY3Qtc2l6ZS1iZ2NvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWxlY3Qtc2l6ZSBpb24tY29sIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucmF0aW5ncy1zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4ucmF0aW5ncy1zZWN0aW9uIGlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucmF0aW5ncy1zZWN0aW9uIGlvbi1ncmlkIGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5yYXRpbmctbGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJhdGluZy1sZWZ0IGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ucmF0aW5nLWxlZnQgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmF0aW5nLXJpZ2h0IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5yYXRpbmctcmlnaHQgcCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yYXRpbmctcmlnaHQgcCAuc3RhciB7XG4gIHdpZHRoOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ucmF0aW5nLXJpZ2h0IHAgLmJhciB7XG4gIHdpZHRoOiA0NyU7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yYXRpbmctcmlnaHQgcCAuc21hbGwge1xuICB3aWR0aDogMzZweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLnJhdGluZy1yaWdodCBwIC5iYXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmctc3VjY2Vzczo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTU0Mjtcbn1cblxuLmJnLW9yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlOWUwNDtcbn1cblxuLmJnLXBpbms6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTQzNDM7XG59XG5cbi5yYXRpbmctcmlnaHQgcCAuZml2ZXN0YXI6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yYXRpbmctcmlnaHQgcCAuZm91cnN0YXI6OmJlZm9yZSB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJhdGluZy1yaWdodCBwIC50aHJlZXN0YXI6OmJlZm9yZSB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJhdGluZy1yaWdodCBwIC50d29zdGFyOjpiZWZvcmUge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yYXRpbmctcmlnaHQgcCAub25lc3Rhcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmF0dGluZy1saXN0IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5yYXR0aW5nLWxpc3QgLnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLnJhdHRpbmctbGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yYXR0aW5nLWxpc3QgdWwgbGkgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5yYXR0aW5nLWxpc3QgdWwgbGkgaDQgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2E1NDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJhdHRpbmctbGlzdCB1bCBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5yYXR0aW5nLWxpc3QgdWwgbGkgcCBhIHtcbiAgY29sb3I6ICMxMTkwYjU7XG59XG5cbi5yYXR0aW5nLWxpc3QgcC52aXdlLWFsbCBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4udHJhZGluZy1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDkycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4udHJhZGluZy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRyYW5kaW5nLXJhdGluZy1zdGFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnRyYW5kaW5nLXJhdGluZy1zdGFyIGltZyB7XG4gIHdpZHRoOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udHJhZGluZy1wcm8taW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmFuZGluZy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRyYW5kaW5nLXByaWNlIHMge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnByb2R1Y3QtbWFpbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5wcm9kdWN0LXJhdGluZyBpbWcge1xuICB3aWR0aDogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLmZsb2F0LXJpZ3Qge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYXJ0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogIzhhMzczODtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uZ28tdG8tY2FydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgaGVpZ2h0OiA1MXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgei1pbmRleDogOTk5O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1nby1jYXJ0LWNvbG9yKTtcbn1cblxuLnBsdXMtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtcGx1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucGx1cy1idXR0b24gLm1pbnVzIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGx1cy1idXR0b24gLnBsdXMge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZHVjdC1kaXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ib3VnaHQtcHJvLWltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5zIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cblxuLnByb2RjdXQtZGlzIHtcbiAgLy8gZm9udC1zaXplOiAxOHB4O1xuICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1zbWFsbC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNoYXJlLW91dGxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuXG4uaXRlbS10b3RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iZ2dyZWVuLWxpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4udG90YWwtaXRlbXMge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52aWV3LWNhcnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnAtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5wLWJvZHkgLnJvdyB7XG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnAtYm9keSBpb24tbGFiZWwge1xuICAvLyBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbiAgLy8gZGlzcGxheTogYmxvY2s7XG4gIC8vIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcblxufVxuXG4ucC1ib2R5IGlvbi10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50YWIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogd2hpdGUgM3B4IHNvbGlkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9kdWN0LXRhYnMge1xuICBwYWRkaW5nOiAwcHggMHB4IDVweDtcbn1cblxuLml0ZW0tYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWlvbi1jYXJkLXNoYWRvdyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4uaXRlbS1ib3ggaW9uLWljb24ge1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5pdGVtLWJveCBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAzcHggMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pdGVtLWJveCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByb2R1Y3QtaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zZXBlcmF0b3ItaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmFjdGl2ZS10YWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlM2RmO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RiMzkzMjtcbn1cblxuLmFjY29yZGlhbi1zdWJMYWJlbCB7XG4gIC8vIG1hcmdpbi10b3A6IDQ0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM5NDhjOGM7XG59XG5cbi5hY2NvcmRpYW4tcHJpY2Uge1xuICBtYXJnaW4tdG9wOiAyM3B4O1xuICBjb2xvcjogYnJvd247XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC8qIG1hcmdpbi10b3A6IDY2cHg7ICovXG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5ydG9fbG9jYXRpb24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjMjYyYzNmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FsbC1ub3cge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udmFyaWVudC1pbm5lci12YWwge1xuICBjb2xvcjogYnJvd24gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnZhcmllbnQtaW5uZXItbGFiZWwge1xuICBjb2xvcjogIzViNWJmZiAhaW1wb3J0YW50O1xufVxuXG4uY2FsbC1ib3gge1xuICBwYWRkaW5nOiAxMnB4IDEzcHg7XG4gIGJhY2tncm91bmQ6ICMyNjJjM2YgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNob29zZV9jaXR5IHtcbiAgY29sb3I6ICMyNjJjM2YgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggcmdiKDEzMSwgMTI4LCAxMjgpIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnByaWNlLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAucmlnaHQtZGV0YWlsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbn1cblxuI3NsaWRlci1ib3ggLmJuci1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgfVxufVxuXG4uY3RhLWZvb3Rlci1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogMCAyMHB4IDMwcHg7XG5cbiAgJj5kaXY6Zmlyc3QtY2hpbGQge1xuICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgfVxuXG4gICY+ZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXg6IDAgMCA1NXB4O1xuICB9XG59XG5cblxuLmZsZXgtaW5saW5lLWNvbHVtbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYyMHB4KSB7XG4gIC5mbGV4LWlubGluZS1jb2x1bW4tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1NiU7XG4gIH1cbn1cblxuLmxhYmVsLWJvbGR7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4uYWRkLWRldGFpbC1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5pY29uLXNpZ257dGV4dC1hbGlnbjogbGVmdDtcbkBtZWRpYShtYXgtd2lkdGg6NjIwcHgpe1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbn1cblxuLmRpc2NvdW50X2V4dHJhe1xuICBjb2xvcjogIzFiOWMyMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXG4gIGlvbi1sYWJlbHtcbiAgICBjb2xvcjogIzFiOWMyMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuLmZpbmFsX3ByaWNle1xuICBjb2xvcjogIzNjOGYzZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXG4gIGlvbi1sYWJlbCxpb24tdGV4dHtcbiAgICBjb2xvcjogIzNjOGYzZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi50Y3NfcHJpY2V7XG4gIGNvbG9yOiBicm93biAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXG4gIGlvbi1sYWJlbCxpb24tdGV4dHtcbiAgICBjb2xvcjogYnJvd24gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYm9sZC10ZXh0e1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBpb24tbGFiZWwsaW9uLXRleHR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgfVxufSIsIi5kaXNjb3VudC1waXJjZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNzA4ZCwgI2ZmM2Q3MSk7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc2VsZWN0LXNpemUtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmF2YWxhYmxlLW9mZmVyLXRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cblxuLnZhZ25vbi1pbWFnZSB7XG4gIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi52YWdub24taW1hZ2Utc21hbGwge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoNiwgMCwgMCwgMCkgMCwgcmdiYSgwLCAwLCAwLCAwLjQpIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjcpIDEwMCUpO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5jYXJkLWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5jYXJ0LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uaGVhcnQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWhlYXJ0LWNvbG9yKTtcbn1cblxuLmRpc2MtdGFnIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWhlYXJ0LWNvbG9yKTtcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4udG9wLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLyogVG9wIHJpZ2h0IHRleHQgKi9cbi50b3AtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wLWRlcyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbi8qIEJvdHRvbSBsZWZ0IHRleHQgKi9cbi5ib3R0b20tbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMTlweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDA7XG59XG5cbi5ib3R0b20tbGVmdCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zbGlkZXItaW9uIHtcbiAgd2lkdGg6IDEyMXB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNhcmQtYmFja2dyb3VuZC1jb2xvcik7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnRyYWRpbmctcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50cmFkaW5nLXByb2R1Y3QgaDUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi50cmFkaW5nLXByb2R1Y3QgLnRyYWRpbmctcHJvZHVjdC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRyYWRpbmctcHJvZHVjdCAudHJhZGluZy1wcm9kdWN0LWl0ZW0gLml0ZW0taW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xufVxuXG4udHJhZGluZy1wcm9kdWN0LWl0ZW0gcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgaDUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzhlOGU4ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IGg1IGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJkZDM2Zjtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCBwLnJhdGluZ3Mtc3RhciBpbWcge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCBoNSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTIycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIge1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCAucmF0aW5ncy1zdGFyIHNwYW4ge1xuICBjb2xvcjogIzg5ODk4OTtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IHAucmF0aW5ncy1zbGlkZS1pbmZvIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCBwLnJhdGluZ3Mtc2xpZGUtaW5mbyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnJhdGluZ3Mtc2xpZGUtaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnJhdGluZ3Mtc2xpZGUtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucmF0aW5ncy1zbGlkZS1pbWcgc3Bhbi5vZmZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJhdGluZ3Mtc2xpZGUtaW1nIHNwYW4ub2ZmZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogLTJweDtcbiAgYm90dG9tOiAtOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgaDUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGQtdG8tY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1nb2NhcnQtYmctY29sb3IpO1xuICBjb2xvcjogY29ybnNpbGs7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMXB4O1xuICAvKiBoZWlnaHQ6IDI3cHg7ICovXG4gIHdpZHRoOiAxMDklO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VsZWN0LXNpemUge1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zZWxlY3Qtc2l6ZSBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zZWxlY3Qtc2l6ZSBpb24tY29sLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1zZWxlY3Qtc2l6ZS1iZ2NvbG9yKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1zZWxlY3Qtc2l6ZS1iZ2NvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWxlY3Qtc2l6ZSBpb24tY29sIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucmF0aW5ncy1zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4ucmF0aW5ncy1zZWN0aW9uIGlvbi1ncmlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4ucmF0aW5ncy1zZWN0aW9uIGlvbi1ncmlkIGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5yYXRpbmctbGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJhdGluZy1sZWZ0IGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ucmF0aW5nLWxlZnQgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmF0aW5nLXJpZ2h0IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5yYXRpbmctcmlnaHQgcCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yYXRpbmctcmlnaHQgcCAuc3RhciB7XG4gIHdpZHRoOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ucmF0aW5nLXJpZ2h0IHAgLmJhciB7XG4gIHdpZHRoOiA0NyU7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yYXRpbmctcmlnaHQgcCAuc21hbGwge1xuICB3aWR0aDogMzZweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbn1cblxuLnJhdGluZy1yaWdodCBwIC5iYXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iZy1zdWNjZXNzOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNTQyO1xufVxuXG4uYmctb3JhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU5ZTA0O1xufVxuXG4uYmctcGluazo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNDM0Mztcbn1cblxuLnJhdGluZy1yaWdodCBwIC5maXZlc3Rhcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJhdGluZy1yaWdodCBwIC5mb3Vyc3Rhcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmF0aW5nLXJpZ2h0IHAgLnRocmVlc3Rhcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmF0aW5nLXJpZ2h0IHAgLnR3b3N0YXI6OmJlZm9yZSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJhdGluZy1yaWdodCBwIC5vbmVzdGFyOjpiZWZvcmUge1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yYXR0aW5nLWxpc3Qge1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLnJhdHRpbmctbGlzdCAudGl0bGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ucmF0dGluZy1saXN0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJhdHRpbmctbGlzdCB1bCBsaSBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnJhdHRpbmctbGlzdCB1bCBsaSBoNCBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YTU0MTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmF0dGluZy1saXN0IHVsIGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnJhdHRpbmctbGlzdCB1bCBsaSBwIGEge1xuICBjb2xvcjogIzExOTBiNTtcbn1cblxuLnJhdHRpbmctbGlzdCBwLnZpd2UtYWxsIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi50cmFkaW5nLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi50cmFkaW5nLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udHJhbmRpbmctcmF0aW5nLXN0YXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udHJhbmRpbmctcmF0aW5nLXN0YXIgaW1nIHtcbiAgd2lkdGg6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50cmFkaW5nLXByby1pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRyYW5kaW5nLXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udHJhbmRpbmctcHJpY2UgcyB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucHJvZHVjdC1tYWluLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ucHJvZHVjdC1yYXRpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvZHVjdC1yYXRpbmcgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4uZmxvYXQtcmlndCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNhcnQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBoZWlnaHQ6IDUxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjOGEzNzM4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5nby10by1jYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBoZWlnaHQ6IDUxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB6LWluZGV4OiA5OTk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWdvLWNhcnQtY29sb3IpO1xufVxuXG4ucGx1cy1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1wbHVzKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wbHVzLWJ1dHRvbiAubWludXMge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wbHVzLWJ1dHRvbiAucGx1cyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wcm9kdWN0LWRpcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJvdWdodC1wcm8taW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbnMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tc21hbGwtY29sb3IpO1xufVxuXG4ucHJvZGN1dC1kaXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaGFyZS1vdXRsaW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cblxuLml0ZW0tdG90YWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmdncmVlbi1saWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLnRvdGFsLWl0ZW1zIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmlldy1jYXJ0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4ucC1ib2R5IC5yb3cge1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IC0xNnB4O1xufVxuXG4ucC1ib2R5IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59XG5cbi5wLWJvZHkgaW9uLXRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mbG9hdC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRhYiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiB3aGl0ZSAzcHggc29saWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3QtdGFicyB7XG4gIHBhZGRpbmc6IDBweCAwcHggNXB4O1xufVxuXG4uaXRlbS1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogdmFyKC0taW9uLWNhcmQtc2hhZG93KTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbi5pdGVtLWJveCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLml0ZW0tYm94IGg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDNweCAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLml0ZW0tYm94IHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJvZHVjdC1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNlcGVyYXRvci1oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uYWN0aXZlLXRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGUzZGY7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGIzOTMyO1xufVxuXG4uYWNjb3JkaWFuLXN1YkxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzk0OGM4Yztcbn1cblxuLmFjY29yZGlhbi1wcmljZSB7XG4gIG1hcmdpbi10b3A6IDIzcHg7XG4gIGNvbG9yOiBicm93bjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLyogbWFyZ2luLXRvcDogNjZweDsgKi9cbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLnJ0b19sb2NhdGlvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgY29sb3I6ICMyNjJjM2Y7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYWxsLW5vdyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi52YXJpZW50LWlubmVyLXZhbCB7XG4gIGNvbG9yOiBicm93biAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udmFyaWVudC1pbm5lci1sYWJlbCB7XG4gIGNvbG9yOiAjNWI1YmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jYWxsLWJveCB7XG4gIHBhZGRpbmc6IDEycHggMTNweDtcbiAgYmFja2dyb3VuZDogIzI2MmMzZiAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2hvb3NlX2NpdHkge1xuICBjb2xvcjogIzI2MmMzZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCAjODM4MDgwIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnByaWNlLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcmljZS1kZXRhaWwgLnJpZ2h0LWRldGFpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbiNzbGlkZXItYm94IC5ibnItaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjMwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gICNzbGlkZXItYm94IC5ibnItaW1nIHtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9XG59XG5cbi5jdGEtZm9vdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAwIDIwcHggMzBweDtcbn1cbi5jdGEtZm9vdGVyLWJhciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGZsZXg6IDAgMCAyMDBweDtcbn1cbi5jdGEtZm9vdGVyLWJhciA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgZmxleDogMCAwIDU1cHg7XG59XG5cbi5mbGV4LWlubGluZS1jb2x1bW4tcm93IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MjBweCkge1xuICAuZmxleC1pbmxpbmUtY29sdW1uLXJvdyB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogNTYlO1xuICB9XG59XG4ubGFiZWwtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtZGV0YWlsLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uaWNvbi1zaWduIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAuaWNvbi1zaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4uZGlzY291bnRfZXh0cmEge1xuICBjb2xvcjogIzFiOWMyMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbi5kaXNjb3VudF9leHRyYSBpb24tbGFiZWwge1xuICBjb2xvcjogIzFiOWMyMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmZpbmFsX3ByaWNlIHtcbiAgY29sb3I6ICMzYzhmM2YgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4uZmluYWxfcHJpY2UgaW9uLWxhYmVsLCAuZmluYWxfcHJpY2UgaW9uLXRleHQge1xuICBjb2xvcjogIzNjOGYzZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnRjc19wcmljZSB7XG4gIGNvbG9yOiBicm93biAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cbi50Y3NfcHJpY2UgaW9uLWxhYmVsLCAudGNzX3ByaWNlIGlvbi10ZXh0IHtcbiAgY29sb3I6IGJyb3duICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cbi5ib2xkLXRleHQgaW9uLWxhYmVsLCAuYm9sZC10ZXh0IGlvbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/productDetails/productDetails.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/productDetails/productDetails.ts ***!
    \********************************************************/

  /*! exports provided: ProductDetailsPage */

  /***/
  function srcAppPagesProductDetailsProductDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function () {
      return ProductDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_product_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/product.services */
    "./src/app/providers/product.services.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");

    var ProductDetailsPage = /*#__PURE__*/function () {
      function ProductDetailsPage(_ProductService, route, toastController, platform, socialSharing, callNumber) {
        _classCallCheck(this, ProductDetailsPage);

        this._ProductService = _ProductService;
        this.route = route;
        this.toastController = toastController;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.callNumber = callNumber;
        this.productList = [];
        this.isDataLoaded = false;
        this.reviewList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "/";
        this.isHeaderShow = false;
        this.isProductAddedToWishList = false;
        this.productDetails = {
          title: "",
          productDescription: "",
          productImage: "",
          price: ""
        };
        this.slideOpts = {
          initialSlide: 0,
          speed: 400,
          spaceBetween: 20,
          pagination: true,
          slidesPerView: 2
        };
        this.productId = '';
        this.rto_location = 'Bharat';
        this.isSearchEnable = false;
        this.searchproductList = []; // tslint:disable-next-line: member-ordering

        this.productDetialSlider = {
          initialSlide: 0,
          speed: 400,
          spaceBetween: 0,
          pagination: true,
          pager: true,
          slidesPerView: 1,
          slideShadows: true
        };
        this.isHalf = false;
        this.isFull = false;
        this.showSearchBox = false;
        this.proDetSlide = {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: false
        };
        this.sliderNearyou = {
          slidesPerView: 1.9,
          centeredSlides: false
        };
        this.overViewTab = false;
        this.priceTab = false;
        this.varientsTab = true;
        this.featureTab = false;

        this.formatMoney = function (amount) {
          if (!amount) return;
          var val = "" + amount.toFixed(0);
          var reverse = val.split("").reverse().join("");
          var arr = reverse.split("");
          var finalArr = [];
          arr.forEach(function (_char, index) {
            finalArr.push(_char);

            if (index == 2) {
              finalArr.push(",");
            }

            if (arr.length > 5 && index == 4) {
              finalArr.push(",");
            }
          });
          return finalArr.reverse().join("");
        };
      }

      _createClass(ProductDetailsPage, [{
        key: "editLocation",
        value: function editLocation() {}
      }, {
        key: "share",
        value: function share() {
          var _this10 = this;

          this.platform.ready().then(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.socialSharing.share("https://play.google.com/store/apps/details?id=com.badhaobusiness.prototype").then(function () {})["catch"](function (err) {
                        console.log(err);
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          });
        }
      }, {
        key: "onScroll",
        value: function onScroll(data) {
          // console.log(data.detail.scrollTop,"scrollTop")
          var scrollPoint = data.detail.scrollTop || 0;

          if (scrollPoint > 170) {
            this.isHeaderShow = true;
          }

          if (scrollPoint < 200) {
            this.isHeaderShow = false;
          }
        }
      }, {
        key: "callme",
        value: function callme(phoneNumber) {
          //   this.callNumber.callNumber(mobile, true)
          // .then(res => console.log('Launched dialer!', res))
          // .catch(err => console.log('Error launching dialer', err));
          window.location.href = "tel:".concat(phoneNumber);
        }
      }, {
        key: "getProductList",
        value: function getProductList() {
          var _this11 = this;

          var shopId = localStorage.getItem("shopID");

          this._ProductService.getProductList(shopId).subscribe(function (data) {
            // this.fetchReviewList();
            _this11.productList = data;
            _this11.productList = _this11.productList.map(function (obj) {
              return Object.assign({}, obj, {
                QTY: 0,
                rating: 0
              });
            });

            _this11.productList.forEach(function (product, index) {
              product.discountedPrice = product.price - product.price * product.discount / 100;

              if (product._id == _this11.productId) {
                _this11.productList.splice(index, 1);
              }
            });

            console.log(_this11.productList);
          });
        }
      }, {
        key: "numDifferentiation",
        value: function numDifferentiation(value) {
          var val = Math.abs(value);

          if (val >= 10000000) {
            val = (val / 10000000).toFixed(2) + ' Cr';
          } else if (val >= 100000) {
            val = (val / 100000).toFixed(2) + ' Lakh';
          }

          return val;
        }
      }, {
        key: "selectprice",
        value: function selectprice(price) {
          if (price == "half") {
            this.isHalf = true;
            this.isFull = false;
          } else {
            this.isHalf = false;
            this.isFull = true;
          }
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
        key: "formateDate",
        value: function formateDate(date) {
          var d = new Date(date);
          var ye = new Intl.DateTimeFormat("en", {
            year: "numeric"
          }).format(d);
          var mo = new Intl.DateTimeFormat("en", {
            month: "short"
          }).format(d);
          var da = new Intl.DateTimeFormat("en", {
            day: "2-digit"
          }).format(d);
          var Finaldate = "".concat(da, "-").concat(mo, "-").concat(ye);
          console.log("Finaldate", Finaldate);
          return Finaldate;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.route.params.subscribe(function (params) {
            _this12.getProductList();

            _this12.productId = params["id"];

            _this12._ProductService.getProductDetails(params["id"]).subscribe(function (results) {
              _this12.isDataLoaded = true; // this.productDetails = data[0];

              _this12.productDetails = results["productData"];
              _this12.productDetails["createdAt"] = _this12.formateDate(_this12.productDetails.createdAt);
              _this12.productDetails["totalOrder"] = results["totalOrder"].length;
              _this12.productDetails['discountedPrice'] = _this12.productDetails.price - _this12.productDetails.price * _this12.productDetails.discount / 100;
              _this12.productDetails.price = _this12.convertIntoLakh(_this12.productDetails.price);
              _this12.productDetails['transmission_type'] = _this12.getTransmissionType();
              _this12.productDetails['fuel_type'] = _this12.getFuelType();
              _this12.productDetails['milage'] = _this12.getMilage();

              _this12.sortVarients();

              _this12.labelFormatter(); // this.reviewList = results["reviewData"];


              if (document.getElementById("slider-box")) {
                document.getElementById("slider-box").scrollIntoView();
              }

              _this12.productDetails["QTY"] = 0;

              _this12._ProductService.getAllWishList(localStorage.getItem("userId"), localStorage.getItem("shopID")).subscribe(function (list) {
                if (list.length == 0) {
                  _this12.isProductAddedToWishList = false;
                } else {
                  var isProductIdExistsInWishList = list[0].productDetails.filter(function (e) {
                    return e.productId == params["id"];
                  });

                  if (isProductIdExistsInWishList.length !== 0) {
                    _this12.isProductAddedToWishList = true;
                  }
                }
              });
            });
          }); // this.getCartList();

          this.getwishList();
        }
      }, {
        key: "getMilage",
        value: function getMilage() {
          if (this.productDetails.addCustomeFeatures.varients) {
            var mileages = [];
            this.productDetails.addCustomeFeatures.varients.forEach(function (details) {
              console.log("details", details.mileage);

              var _mileageVal = !details.mileage ? 0 : details.mileage;

              if (!mileages.includes(_mileageVal)) {
                mileages.push(_mileageVal);
              }
            });
            console.log(mileages, "mileages");
            return Math.max.apply(Math, mileages);
          } else {
            return '--';
          }
        }
      }, {
        key: "getFuelType",
        value: function getFuelType() {
          if (this.productDetails.addCustomeFeatures.varients) {
            var types = [];
            this.productDetails.addCustomeFeatures.varients.forEach(function (details) {
              if (!types.includes(details.fuel_type)) {
                types.push(details.fuel_type);
              }
            });
            return types.join(" , ");
          } else {
            return '--';
          }
        }
      }, {
        key: "getTransmissionType",
        value: function getTransmissionType() {
          if (this.productDetails.addCustomeFeatures.varients) {
            var types = [];
            this.productDetails.addCustomeFeatures.varients.forEach(function (details) {
              var _transmission = details.transmission ? 'Automatic' : 'Manual';

              if (!types.includes(_transmission)) {
                types.push(_transmission);
              }
            });
            return types.join(" , ");
          } else {
            return '--';
          }
        }
      }, {
        key: "convertIntoLakh",
        value: function convertIntoLakh(value) {
          console.log(value, "value");
          var arr = value.split("-");
          console.log(arr, "arr");
          var v1 = '';
          var v2 = '';

          if (arr.length == 2) {
            v1 = Math.abs(arr[0]);
            v2 = Math.abs(arr[1]);
            v1 = (v1 / 100000).toFixed(2);
            v2 = (v2 / 100000).toFixed(2);
          } else {
            v1 = Math.abs(arr[0]);
            v1 = (v1 / 100000).toFixed(2);
          }

          var second = v2 ? " - " + v2 : '';
          return v1 + second + ' Lakh';
        }
      }, {
        key: "labelFormatter",
        value: function labelFormatter() {// this.productDetails.addCustomeFeatures
        }
      }, {
        key: "AddToWishList",
        value: function AddToWishList(action) {
          var _this13 = this;

          var payload = {
            productDetails: {
              productId: this.productDetails._id
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem("shopID")
          };

          this._ProductService.AddToWishCart(action, payload).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var msg;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      msg = "";

                      if (data) {
                        if (action == "add") {
                          msg = "Added To WishList";
                          this.isProductAddedToWishList = true;
                        } else {
                          msg = "Removed To WishList";
                          this.isProductAddedToWishList = false;
                        } // // const toast = await this.toastController.create({
                        // //   message: msg,
                        // //   duration: 3000,
                        // //   color: "success",
                        // //   position: "bottom",
                        // //   animated: true,
                        // // });
                        // toast.present();

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
        key: "getwishList",
        value: function getwishList() {
          var _this14 = this;

          var shopId = localStorage.getItem("shopID");

          this._ProductService.getAllWishList(localStorage.getItem("userId"), shopId).subscribe(function (data) {
            console.log(data, "data");

            if (data.length !== 0) {
              var wishList = data[0].productDetails;
              wishList.forEach(function (list) {
                if (list.productId) {
                  if (list.productId._id == _this14.productDetails._id) {
                    _this14.isProductAddedToWishList = true;
                  }
                }
              });
            }
          });
        }
      }, {
        key: "overViewTabClick",
        value: function overViewTabClick() {
          this.overViewTab = true;
          this.priceTab = false;
          this.varientsTab = false;
          this.featureTab = false;
        }
      }, {
        key: "priceTabClick",
        value: function priceTabClick() {
          this.overViewTab = false;
          this.priceTab = true;
          this.varientsTab = false;
          this.featureTab = false;
        }
      }, {
        key: "varientsTabClick",
        value: function varientsTabClick() {
          this.overViewTab = false;
          this.priceTab = false;
          this.varientsTab = true;
          this.featureTab = false;
        }
      }, {
        key: "featureTabClick",
        value: function featureTabClick() {
          this.overViewTab = false;
          this.priceTab = false;
          this.varientsTab = false;
          this.featureTab = true;
        }
      }, {
        key: "sortVarients",
        value: function sortVarients() {
          console.log(this.productDetails.addCustomeFeatures.varients, "productDetails.addCustomeFeatures?.varients");
          this.productDetails.addCustomeFeatures.varients.forEach(function (element) {
            if (element.order) {
              element.order = parseInt(element.order);
            } else {
              element.order = 10;
            }
          });
          var data = this.productDetails.addCustomeFeatures.varients.sort(function (a, b) {
            return a.order - b.order;
          });
          this.productDetails.addCustomeFeatures.varients = JSON.parse(JSON.stringify(data));
        }
      }, {
        key: "int",
        value: function int(val) {
          if (val) {
            return parseInt(val);
          }

          return 0;
        }
      }]);

      return ProductDetailsPage;
    }();

    ProductDetailsPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]
      }];
    };

    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "page-productDetails",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./productDetails.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productDetails/productDetails.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./productDetails.scss */
      "./src/app/pages/productDetails/productDetails.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]])], ProductDetailsPage);
    /***/
  },

  /***/
  "./src/app/providers/product.services.ts":
  /*!***********************************************!*\
    !*** ./src/app/providers/product.services.ts ***!
    \***********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppProvidersProductServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.ownerId = "5f6f0e8c1f46bf3f11660245";
      } // public shopId = "5e683e91ec56557a4c2fdf62";
      // public shopId = "5e92d76158e229ab644e6b94";
      // public shopId = localStorage.getItem('shopID')


      _createClass(ProductService, [{
        key: "getProductList",
        value: function getProductList(shopId) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var url = this.baseUrl + "/api/v1/Customer/".concat(this.ownerId, "/5f6f25f41f46bf3f11660246/ProductsList/food/100/0?&").concat(params);
          console.log(url, "url");
          var response;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getHotDealProductList",
        value: function getHotDealProductList() {
          // let url = this.baseUrl + `/api/v1/admin/${this.ownerId}/5f6f25f41f46bf3f11660246/ProductsList/food/100/0?&isHotDeal=true`
          var url = this.baseUrl + "/api/v1/admin/all/5f6f0e8c1f46bf3f11660245/ProductsList/20/0?&isHotDeal=true&filter=";
          console.log(url, "url");
          var response;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "registerTempUser",
        value: function registerTempUser(payload) {
          payload.ownerId = this.ownerId;
          var response;
          return this.http.post(this.baseUrl + '/api/v1/customer/Register', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            console.log(response, "response");
            return response.object;
          }));
        }
      }, {
        key: "getWallet",
        value: function getWallet(userId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/Customer/getWallet/".concat(this.ownerId, "/").concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "listOffer",
        value: function listOffer(filter) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/listOffer/5f6f0e8c1f46bf3f11660245?&filter=".concat(filter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getCashBacks",
        value: function getCashBacks(userId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/Customer/getReedemCashback/".concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getOwnerId",
        value: function getOwnerId() {
          return this.ownerId;
        }
      }, {
        key: "getProductDetails",
        value: function getProductDetails(productId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/getProductDetails/".concat(productId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "addToCart",
        value: function addToCart(action, payload) {
          var response;
          return this.http.put(this.baseUrl + "/api/v1/customer/Cart/".concat(action), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "cartList",
        value: function cartList(userId, shopId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/customer/CartList/".concat(userId, "/").concat(shopId, "/0/10")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getCheckSum",
        value: function getCheckSum(payload) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/Customer/Payment/".concat(payload.mobile, "/").concat(payload.email, "/").concat(payload.customer_id, "/").concat(payload.amount)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "AddToWishCart",
        value: function AddToWishCart(action, payload) {
          var response;
          return this.http.put(this.baseUrl + "/api/v1/customer/WishListCart/".concat(action), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getAllWishList",
        value: function getAllWishList(userId, shopId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/customer/GetAllWishLists/".concat(userId, "/").concat(shopId, "/0/10")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "SaveAddress",
        value: function SaveAddress(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/common/saveAddress", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getAddress",
        value: function getAddress(userId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/common/getAddress/".concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getAddressDetails",
        value: function getAddressDetails(userId, addressId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/common/getAddressDetails/".concat(userId, "/").concat(addressId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "listSubCategory",
        value: function listSubCategory() {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/listSubCategory/".concat(this.ownerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "listIns",
        value: function listIns() {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/Insurance").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "orderProduct",
        value: function orderProduct(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/customer/createOrder", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "saveQuery",
        value: function saveQuery(payload) {
          payload.ownerId = this.ownerId;
          var response;
          return this.http.post(this.baseUrl + "/api/v1/customer/saveQuery", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getOrderList",
        value: function getOrderList(page, userId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/Customer/getOrderList/".concat(userId, "/").concat(page.limit, "/").concat(page.skip)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "createComplaint",
        value: function createComplaint(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/Customer/SaveUserComplaint", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getAllReviewList",
        value: function getAllReviewList(userId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/Customer/ProductReviewList/".concat(userId, "/100/0")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "saveReview",
        value: function saveReview(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/Customer/GiveProductReview", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "search",
        value: function search(filter, shopId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/".concat(this.ownerId, "/").concat(shopId, "/customer/search?search=").concat(filter.search, "&filter=").concat(filter.filter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getOrderDetails",
        value: function getOrderDetails(orderId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/getOrderData/".concat(orderId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "fetchStoreList",
        value: function fetchStoreList() {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/getAllStore/".concat(this.ownerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "feedback",
        value: function feedback(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/Customer/GiveFeedBack", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getAdminProfile",
        value: function getAdminProfile() {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/profile/getAdminProfile/".concat(this.ownerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        } //

      }, {
        key: "listCategory",
        value: function listCategory() {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/listCategory").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "createCategory",
        value: function createCategory(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/admin/createCategory", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "editCategory",
        value: function editCategory(id, payload) {
          var response;
          return this.http.put(this.baseUrl + "/api/v1/admin/editCategory/".concat(id), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          var response;
          return this.http["delete"](this.baseUrl + "/api/v1/admin/deleteCategory/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        } //

      }, {
        key: "fetchProductList",
        value: function fetchProductList(params) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/".concat(params.shopId, "/ProductsList/all/all/10/0")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "fetchProductListMenu",
        value: function fetchProductListMenu(params, page) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/".concat(params.shopId, "/").concat(this.ownerId, "/ProductsList/").concat(page.limit, "/").concat(page.skip, "?&filter=").concat(params.filter)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "createSubCategory",
        value: function createSubCategory(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/admin/createSubCategory", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "editSubCategory",
        value: function editSubCategory(id, payload) {
          var response;
          return this.http.put(this.baseUrl + "/api/v1/admin/editSubCategory/".concat(id), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "deleteSubCategory",
        value: function deleteSubCategory(id) {
          var response;
          return this.http["delete"](this.baseUrl + "/api/v1/admin/deleteSubCategory/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "assignProductToCategory",
        value: function assignProductToCategory(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/admin/addCategoryToProduct", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getMenuList",
        value: function getMenuList() {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/admin/getMenuList").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ProductService);
    /***/
  },

  /***/
  "./src/app/providers/user-data.ts":
  /*!****************************************!*\
    !*** ./src/app/providers/user-data.ts ***!
    \****************************************/

  /*! exports provided: UserData */

  /***/
  function srcAppProvidersUserDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserData", function () {
      return UserData;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var UserData = /*#__PURE__*/function () {
      function UserData(http) {
        _classCallCheck(this, UserData);

        this.http = http;
        this.favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.ownerId = "5f6f0e8c1f46bf3f11660245"; // public baseUrl: String = "//localhost:3000"

        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
      }

      _createClass(UserData, [{
        key: "getCustomerDetails",
        value: function getCustomerDetails(userId) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/Customer/ViewProfile/".concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getPinodeData",
        value: function getPinodeData(pinode) {
          var response;
          return this.http.get(this.baseUrl + "/api/v1/customer/ValidatePincode/".concat(pinode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(userId, payload) {
          var response;
          return this.http.put(this.baseUrl + "/api/v1/Customer/ProfileUpdate/".concat(userId), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "getOwnerId",
        value: function getOwnerId() {
          return this.ownerId;
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(payload) {
          var response;
          return this.http.post(this.baseUrl + "/api/v1/Admin/saveAllImages", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "deleteAddress",
        value: function deleteAddress(addressId) {
          var response;
          return this.http["delete"](this.baseUrl + "/api/v1/Customer/deleteAddress/".concat(addressId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }, {
        key: "editAddress",
        value: function editAddress(addressId, payload) {
          var response;
          return this.http.put(this.baseUrl + "/api/v1/Customer/editAddress/".concat(addressId), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            response = data;
            return response.object;
          }));
        }
      }]);

      return UserData;
    }();

    UserData.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserData);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      baseUrl: "https://api.csdcar.com",
      // baseUrl:"http://18.222.219.166:3000",
      // baseUrl:"http://52.15.169.139:3000",
      // baseUrl:   "//localhost:3000",
      FACEBOOK_CLIENT_KEY: '279933619944607',
      // GOOGLE_CLIENT_KEY: '134691487730-7kbj094ot3peru5pfqa9b8fqtvtu7tl5.apps.googleusercontent.com',
      GOOGLE_CLIENT_KEY: '372864392547-h40v4bb5dubm6rgdq5nut1mheghdqp0m.apps.googleusercontent.com'
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/shashwat/Documents/Ravi-Projects/bmdc-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map