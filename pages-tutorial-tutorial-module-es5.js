function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTutorialTutorialHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header no-border>\n  <ion-toolbar>\n\n  </ion-toolbar>\n</ion-header> -->\n<ion-content fullscreen=\"true\">\n  <div class=\"welcome-main\">\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"text-white\" (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\n    </ion-buttons>\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\"   pager=\"true\">\n    <ion-slide class=\"slider-1\">\n      <img src=\"../../../assets/img/welcome/buyCar.png\" class=\"slide-image\"\n       />\n      <div class=\"sldier-content\">\n        <h2 class=\"slide-title\">\n          <b>Book Your Dream Car</b>\n        </h2>\n          <p>\n            Choose Best Car as per your Budge and Get Heavy Cashbacks on Car Book Now.\n          </p>\n      </div>\n      <!-- <div class=\"next-screen\">\n        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      </div> -->\n    </ion-slide>\n\n    <ion-slide class=\"slider-2\">\n      <img src=\"../../../assets/img/welcome/insurance.png\n      \" class=\"slide-image\"  style=\"margin-top: 192px;\n      width: 247px;\n  \"/>\n      <div class=\"sldier-content\">\n      <h2 class=\"slide-title\">Car Insurance Policy</h2>\n      <p>\n        Get Best offer to take Car Insurance Policy Now </p>\n        </div>\n        <!-- <div class=\"next-screen\">\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </div> -->\n    </ion-slide>\n\n    <ion-slide class=\"slider-3\">\n      <img src=\"../../../assets/img/welcome/finance.png\" class=\"slide-image\" />\n      <div class=\"sldier-content\">\n      <h2 class=\"slide-title\">Car Loan is Available</h2>\n      <p>Don`t worry about Budget , Get Easy Emi with minimum Document </p>\n    </div>\n    <!-- <div class=\"next-screen\">\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </div> -->\n    </ion-slide>\n\n    <ion-slide class=\"slider-4\">\n      <img src=\"../../../assets/img/welcome/testdrive.png\" class=\"slide-image\"\n      style=\"    margin-top: 119px;\" />\n      <div class=\"sldier-content\">\n      <h2 class=\"slide-title\">Book Test Drive from Home</h2>\n      <p>\n        You Can Book Test Drive from your home with this application</p>\n        <ion-button class=\"continue\" fill=\"clear\" (click)=\"startApp()\">\n          Continue\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n        </div>\n    </ion-slide>\n\n\n  </ion-slides>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tutorial/resolver/welcomeResolver.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/tutorial/resolver/welcomeResolver.ts ***!
    \************************************************************/

  /*! exports provided: WelcomeResolver */

  /***/
  function srcAppPagesTutorialResolverWelcomeResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeResolver", function () {
      return WelcomeResolver;
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

    var WelcomeResolver = /*#__PURE__*/function () {
      function WelcomeResolver(_route) {
        _classCallCheck(this, WelcomeResolver);

        this._route = _route;
      }

      _createClass(WelcomeResolver, [{
        key: "resolve",
        value: function resolve(route) {
          console.log("id===============>>", route.params); // return this._subscriptionService.getOne(route.params.id).pipe(
          //   catchError((error) => {
          //   return empty();
          //   })
          // )

          console.log("localStorage.getItem('AuthToken')", localStorage.getItem("AuthToken"));

          if (localStorage.getItem("userId") && localStorage.getItem("AuthToken")) {
            this._route.navigateByUrl("/home"); // return

          }
        }
      }]);

      return WelcomeResolver;
    }();

    WelcomeResolver.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WelcomeResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WelcomeResolver);
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TutorialPageRoutingModule */

  /***/
  function srcAppPagesTutorialTutorialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPageRoutingModule", function () {
      return TutorialPageRoutingModule;
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


    var _resolver_welcomeResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resolver/welcomeResolver */
    "./src/app/pages/tutorial/resolver/welcomeResolver.ts");
    /* harmony import */


    var _tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tutorial */
    "./src/app/pages/tutorial/tutorial.ts");

    var routes = [{
      path: '',
      component: _tutorial__WEBPACK_IMPORTED_MODULE_4__["TutorialPage"],
      resolve: {
        subscriptionData: _resolver_welcomeResolver__WEBPACK_IMPORTED_MODULE_3__["WelcomeResolver"]
      }
    }];

    var TutorialPageRoutingModule = function TutorialPageRoutingModule() {
      _classCallCheck(this, TutorialPageRoutingModule);
    };

    TutorialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TutorialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
    \***************************************************/

  /*! exports provided: TutorialModule */

  /***/
  function srcAppPagesTutorialTutorialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialModule", function () {
      return TutorialModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _resolver_welcomeResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resolver/welcomeResolver */
    "./src/app/pages/tutorial/resolver/welcomeResolver.ts");
    /* harmony import */


    var _tutorial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tutorial */
    "./src/app/pages/tutorial/tutorial.ts");
    /* harmony import */


    var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tutorial-routing.module */
    "./src/app/pages/tutorial/tutorial-routing.module.ts");

    var TutorialModule = function TutorialModule() {
      _classCallCheck(this, TutorialModule);
    };

    TutorialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_6__["TutorialPageRoutingModule"]],
      declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_5__["TutorialPage"]],
      entryComponents: [_tutorial__WEBPACK_IMPORTED_MODULE_5__["TutorialPage"]],
      providers: [_resolver_welcomeResolver__WEBPACK_IMPORTED_MODULE_4__["WelcomeResolver"]]
    })], TutorialModule);
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/tutorial/tutorial.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTutorialTutorialScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.swiper-slide {\n  display: block;\n  height: 100vh;\n}\n\n.slide-title {\n  margin-top: 50px;\n  font-family: sans-serif;\n  font-size: 22px;\n  font-weight: 600;\n  border-bottom: 3px solid #ec4544;\n  padding: 12px;\n  display: inline-block;\n  margin-bottom: -11px;\n  color: black;\n}\n\n.slide-image {\n  max-height: 50%;\n  max-width: 70%;\n  margin: 152px 0 0px;\n  pointer-events: none;\n}\n\n.sldier-content {\n  position: absolute;\n  top: 68%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 85%;\n  color: #fff;\n  /* border: 1px solid #fff; */\n  padding: 15px;\n  border-radius: 10px;\n}\n\nb {\n  font-weight: 500;\n  font-family: sans-serif;\n  font-size: 22px;\n  color: #000000;\n  font-weight: 600;\n}\n\nion-buttons {\n  padding: 10px 22px;\n  position: absolute;\n  right: 0px;\n}\n\np {\n  font-size: 16px;\n  margin-top: 21px;\n  line-height: 1.5;\n  color: #706666;\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\nion-item ion-header ion-content ion-label ion-input form {\n  --background: #282c3f;\n  --color: #fff;\n}\n\nion-button.continue {\n  --background: #ee3f38;\n  color: #fff;\n  font-size: 18px;\n  height: 60px;\n  --border-radius: 45px;\n  border: 0px;\n}\n\n.welcome-main .slider-1 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  position: relative;\n}\n\n.welcome-main .slider-1::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.welcome-main .slider-2 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  position: relative;\n}\n\n.welcome-main .slider-2::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.welcome-main .slider-3 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  position: relative;\n}\n\n.welcome-main .slider-3::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.welcome-main .slider-4 {\n  background-position-y: 5px;\n  background-color: white;\n  background-position-x: center;\n  background-size: cover;\n}\n\n.welcome-main .slider-4::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.text-white {\n  color: #000000;\n}\n\n.next-screen {\n  background: #cc8620;\n  box-shadow: 0px 4px 4px rgba(32, 131, 137, 0.25);\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 70px;\n  color: #fff;\n  position: absolute;\n  bottom: 40px;\n  right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5zY3NzIiwic3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBREZFO0VBQ0UscUNBQUE7QUNJSjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUVFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURERTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBRUUsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFFRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUVFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUVFLGNBQUE7QUNIRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZWM0NTQ0O1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IC0xMXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAxNTJweCAwIDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc2xkaWVyLWNvbnRlbnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2OCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4NSU7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZmZmOyAqL1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICAvLyBmb250LWZhbWlseTogc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tYnV0dG9uc3tcbiAgcGFkZGluZzogMTBweCAyMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzcwNjY2NjtcbiAgYiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbiAgfVxufVxuXG5cbmlvbi1pdGVtIGlvbi1oZWFkZXIgaW9uLWNvbnRlbnQgaW9uLWxhYmVsIGlvbi1pbnB1dCBmb3Jte1xuICAtLWJhY2tncm91bmQ6ICMyODJjM2Y7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5pb24tYnV0dG9uLmNvbnRpbnVle1xuICAtLWJhY2tncm91bmQ6ICNlZTNmMzg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogNjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0NXB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLndlbGNvbWUtbWFpbiAuc2xpZGVyLTF7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3dlbGNvbWUvYnV5Q2FyLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZXtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gNTklKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi53ZWxjb21lLW1haW4gLnNsaWRlci0ye1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9jb3ZlcmRlbGl2ZXJ5LW1pbi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmV7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDU5JSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ud2VsY29tZS1tYWluIC5zbGlkZXItM3tcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZm9vZGFsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wNi9Jcy1HcmlsbGluZy10aGUtSGVhbHRoaWVzdC1Db29raW5nLU1ldGhvZC5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOjpiZWZvcmV7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDU5JSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ud2VsY29tZS1tYWluIC5zbGlkZXItNHtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvd2VsY29tZS1iZy00LmpwZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgJjo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyA1OSUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnRleHQtd2hpdGV7XG4gIC8vIGNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5uZXh0LXNjcmVlbntcbiAgYmFja2dyb3VuZDogI2NjODYyMDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgzMiwgMTMxLCAxMzcsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDMwcHg7XG59XG4iLCJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2VjNDU0NDtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAtMTFweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogNzAlO1xuICBtYXJnaW46IDE1MnB4IDAgMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNsZGllci1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY4JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDg1JTtcbiAgY29sb3I6ICNmZmY7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7ICovXG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nOiAxMHB4IDIycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM3MDY2NjY7XG59XG5wIGIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xufVxuXG5pb24taXRlbSBpb24taGVhZGVyIGlvbi1jb250ZW50IGlvbi1sYWJlbCBpb24taW5wdXQgZm9ybSB7XG4gIC0tYmFja2dyb3VuZDogIzI4MmMzZjtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWJ1dHRvbi5jb250aW51ZSB7XG4gIC0tYmFja2dyb3VuZDogI2VlM2YzODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4ud2VsY29tZS1tYWluIC5zbGlkZXItMSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2VsY29tZS1tYWluIC5zbGlkZXItMTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtbWFpbiAuc2xpZGVyLTIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndlbGNvbWUtbWFpbiAuc2xpZGVyLTI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZWxjb21lLW1haW4gLnNsaWRlci0zIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53ZWxjb21lLW1haW4gLnNsaWRlci0zOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VsY29tZS1tYWluIC5zbGlkZXItNCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ud2VsY29tZS1tYWluIC5zbGlkZXItNDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm5leHQtc2NyZWVuIHtcbiAgYmFja2dyb3VuZDogI2NjODYyMDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgzMiwgMTMxLCAxMzcsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tutorial/tutorial.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/tutorial/tutorial.ts ***!
    \********************************************/

  /*! exports provided: TutorialPage */

  /***/
  function srcAppPagesTutorialTutorialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TutorialPage", function () {
      return TutorialPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var TutorialPage = /*#__PURE__*/function () {
      function TutorialPage(menu, router, storage) {
        _classCallCheck(this, TutorialPage);

        this.menu = menu;
        this.router = router;
        this.storage = storage;
        this.showSkip = true;
        this.slideOpts = {
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
              };
              swiper.params = Object.assign(swiper.params, overwriteParams);
              swiper.params = Object.assign(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              var slides = swiper.slides;

              for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset$$1 = $slideEl[0].swiperSlideOffset;
                var tx = -offset$$1;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                }

                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                  opacity: slideOpacity
                }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
              }
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              var slides = swiper.slides,
                  $wrapperEl = swiper.$wrapperEl;
              slides.transition(duration);

              if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function () {
                  if (eventTriggered) return;
                  if (!swiper || swiper.destroyed) return;
                  eventTriggered = true;
                  swiper.animating = false;
                  var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                  for (var i = 0; i < triggerEvents.length; i += 1) {
                    $wrapperEl.trigger(triggerEvents[i]);
                  }
                });
              }
            }
          }
        };
        this.slideOpts1 = {
          on: {
            beforeInit: function beforeInit() {
              var swiper = this;
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "flip"));
              swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
              var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
              };
              swiper.params = Object.assign(swiper.params, overwriteParams);
              swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
              var swiper = this;
              var $ = swiper.$,
                  slides = swiper.slides,
                  rtl = swiper.rtlTranslate;

              for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;

                if (swiper.params.flipEffect.limitRotation) {
                  progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }

                var offset$$1 = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset$$1;
                var ty = 0;

                if (!swiper.isHorizontal()) {
                  ty = tx;
                  tx = 0;
                  rotateX = -rotateY;
                  rotateY = 0;
                } else if (rtl) {
                  rotateY = -rotateY;
                }

                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                if (swiper.params.flipEffect.slideShadows) {
                  // Set shadows
                  var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                  var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                  if (shadowBefore.length === 0) {
                    shadowBefore = swiper.$("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'left' : 'top', "\"></div>"));
                    $slideEl.append(shadowBefore);
                  }

                  if (shadowAfter.length === 0) {
                    shadowAfter = swiper.$("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'right' : 'bottom', "\"></div>"));
                    $slideEl.append(shadowAfter);
                  }

                  if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                  if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                }

                $slideEl.transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)"));
              }
            },
            setTransition: function setTransition(duration) {
              var swiper = this;
              var slides = swiper.slides,
                  activeIndex = swiper.activeIndex,
                  $wrapperEl = swiper.$wrapperEl;
              slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

              if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false; // eslint-disable-next-line

                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                  if (eventTriggered) return;
                  if (!swiper || swiper.destroyed) return;
                  eventTriggered = true;
                  swiper.animating = false;
                  var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                  for (var i = 0; i < triggerEvents.length; i += 1) {
                    $wrapperEl.trigger(triggerEvents[i]);
                  }
                });
              }
            }
          }
        };
      }

      _createClass(TutorialPage, [{
        key: "startApp",
        value: function startApp() {
          var _this = this;

          this.router.navigateByUrl('/login', {
            replaceUrl: true
          }).then(function () {
            return _this.storage.set('ion_did_tutorial', true);
          });
        }
      }, {
        key: "onSlideChangeStart",
        value: function onSlideChangeStart(event) {
          var _this2 = this;

          event.target.isEnd().then(function (isEnd) {
            _this2.showSkip = !isEnd;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {//   this.storage.get('ion_did_tutorial').then(res => {
          //     if (res === true) {
          //       this.router.navigateByUrl('/app/tabs/schedule', { replaceUrl: true });
          //     }
          //   });
          //   this.menu.enable(false);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          // enable the root left menu when leaving the tutorial page
          this.menu.enable(true);
        }
      }]);

      return TutorialPage;
    }();

    TutorialPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], TutorialPage.prototype, "slides", void 0);
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-tutorial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tutorial.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tutorial/tutorial.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tutorial.scss */
      "./src/app/pages/tutorial/tutorial.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], TutorialPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tutorial-tutorial-module-es5.js.map