(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showInterest-showInterest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showInterest/showInterest.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showInterest/showInterest.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        routerLink=\"/home\"\n        name=\"arrow-back-outline\"\n        style=\"margin-left: 14px; font-size: x-large\"></ion-icon>\n    </ion-buttons>\n    <ion-title> {{userData.service}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"search\"\n          style=\"color: white\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-searchbar   spellcheck=\"true\"  ></ion-searchbar> -->\n</ion-header>\n<ion-content>\n  <div class=\"content-section\">\n    <ion-list class=\"primary-detail-list\">\n      <br />\n      <ion-item class=\"mb-10\">\n        <ion-label position=\"stacked\" color=\"primary\">Selected Car</ion-label>\n        <ion-input\n          class=\"selected-car\"\n          [(ngModel)]=\"userData.description\"\n          name=\"name\"\n          disabled\n          type=\"text\"\n          spellcheck=\"false\">\n        </ion-input>\n      </ion-item>\n      <ion-item class=\"mb-10\">\n        <ion-label position=\"stacked\" color=\"primary\">City</ion-label>\n        <ion-input\n          [(ngModel)]=\"userData.city\"\n          name=\"name\"\n          placeholder=\"Enter Your City\"\n          type=\"text\"\n          spellcheck=\"false\">\n        </ion-input>\n      </ion-item>\n      <ion-item class=\"mb-10\">\n        <ion-label position=\"stacked\" color=\"primary\">Full Name</ion-label>\n        <ion-input\n          [(ngModel)]=\"userData.name\"\n          name=\"name\"\n          placeholder=\"Enter Your Name\"\n          type=\"text\"\n          spellcheck=\"false\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item class=\"mb-10\">\n        <ion-label position=\"stacked\" color=\"primary\">Mobile</ion-label>\n        <ion-input\n          [(ngModel)]=\"userData.mobile\"\n          name=\"name\"\n          placeholder=\"Enter your Mobile Number\"\n          type=\"number\"\n          spellcheck=\"false\">\n        </ion-input>\n      </ion-item>\n\n      <br /><br />\n      <ion-button style=\"margin-left: 17px\" (click)=\"submit()\"\n        >Get Offers\n      </ion-button>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/showInterest/showInterest-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/showInterest/showInterest-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShowInterestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInterestPageRoutingModule", function() { return ShowInterestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _showInterest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showInterest */ "./src/app/pages/showInterest/showInterest.ts");




const routes = [
    {
        path: '',
        component: _showInterest__WEBPACK_IMPORTED_MODULE_3__["ShowInterestPage"]
    }
];
let ShowInterestPageRoutingModule = class ShowInterestPageRoutingModule {
};
ShowInterestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShowInterestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/showInterest/showInterest.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/showInterest/showInterest.module.ts ***!
  \***********************************************************/
/*! exports provided: ShowInterestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInterestPageModule", function() { return ShowInterestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _showInterest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showInterest */ "./src/app/pages/showInterest/showInterest.ts");
/* harmony import */ var _showInterest_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showInterest-routing.module */ "./src/app/pages/showInterest/showInterest-routing.module.ts");







let ShowInterestPageModule = class ShowInterestPageModule {
};
ShowInterestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _showInterest_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShowInterestPageRoutingModule"]
        ],
        declarations: [
            _showInterest__WEBPACK_IMPORTED_MODULE_5__["ShowInterestPage"],
        ],
        entryComponents: []
    })
], ShowInterestPageModule);



/***/ }),

/***/ "./src/app/pages/showInterest/showInterest.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/showInterest/showInterest.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mb-10 {\n  margin-bottom: 10px;\n}\n\n.selected-car {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9zaG93SW50ZXJlc3Qvc2hvd0ludGVyZXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3dJbnRlcmVzdC9zaG93SW50ZXJlc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvd0ludGVyZXN0L3Nob3dJbnRlcmVzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1iLTEwe1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2VsZWN0ZWQtY2Fye1xuICBmb250LXdlaWdodDogNTAwO1xufSIsIi5tYi0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZWxlY3RlZC1jYXIge1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/showInterest/showInterest.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/showInterest/showInterest.ts ***!
  \****************************************************/
/*! exports provided: ShowInterestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInterestPage", function() { return ShowInterestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _providers_login_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/login.services */ "./src/app/providers/login.services.ts");






let ShowInterestPage = class ShowInterestPage {
    constructor(_ProductService, route, Router, toastController, alertController, _LoginService) {
        this._ProductService = _ProductService;
        this.route = route;
        this.Router = Router;
        this.toastController = toastController;
        this.alertController = alertController;
        this._LoginService = _LoginService;
        this.userData = {
            name: "",
            mobile: "",
            city: "",
            title: "From Application",
            description: "",
            ownerId: "",
            service: ""
        };
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.userData.description = params.car;
            this.userData.service = params.service;
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.userData);
            let len = this.userData.mobile.toString().length;
            if (len !== 10) {
                const toast = yield this.toastController.create({
                    message: "Invalid Mobile Number",
                    duration: 3000,
                    color: 'warning',
                    position: "bottom",
                    animated: true,
                });
                toast.present();
                return;
            }
            this.sendOTP();
            this.presentAlertPrompt();
        });
    }
    presentAlertPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Verify Number',
                inputs: [
                    {
                        name: 'otp',
                        type: 'number',
                        placeholder: 'Enter OTP'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Submit',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log('Confirm Ok', data);
                            if (data.otp.toString().length !== 4) {
                                const toast = yield this.toastController.create({
                                    message: "Only 4 Digit is allowed",
                                    duration: 3000,
                                    color: 'warning',
                                    position: "bottom",
                                    animated: true,
                                });
                                toast.present();
                                return;
                            }
                            else {
                                this.verify(data.otp);
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    sendOTP() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastController.create({
                message: "OTP sent..!!",
                duration: 2000,
                color: "success",
                position: "top",
                animated: true,
            });
            this._LoginService
                .sendOTP({
                mobile: this.userData.mobile,
            })
                .subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("send OTP result", result);
            }));
        });
    }
    verify(otp) {
        let payload = {
            mobile: this.userData.mobile,
            otp: otp,
            ownerId: this._LoginService.getOwnerId(),
            isSocialLogin: false,
        };
        this.verifyOTP(payload);
    }
    verifyOTP(payload) {
        this._LoginService.verifyOTP(payload).subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (result.hasOwnProperty('otpDetails')) {
                let toast = yield this.toastController.create({
                    message: "Wrong OTP",
                    duration: 3000,
                    color: "warning",
                    position: "top",
                    animated: true,
                });
                toast.present();
                return;
            }
            // this.login.mobile = null;
            console.log("verify OTP result", result);
            console.log("_id", result.customerDetails._id);
            localStorage.setItem("userId", result.customerDetails._id);
            // localStorage.setItem("userId", "5ea4259790a47f96283ee75d");
            localStorage.setItem("AuthToken", result.authToken);
            if (this.userData.name &&
                this.userData.city &&
                this.userData.mobile &&
                this.userData.title) {
                this._ProductService.saveQuery(this.userData).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.userData = {
                        name: "",
                        mobile: "",
                        city: "",
                        title: "",
                        description: "",
                        ownerId: "",
                        service: ''
                    };
                    const toast = yield this.toastController.create({
                        message: "Thanks You for your interest",
                        duration: 3000,
                        color: 'success',
                        position: "bottom",
                        animated: true,
                    });
                    toast.present();
                    setTimeout(() => {
                        this.Router.navigateByUrl('/home');
                    }, 2000);
                }));
            }
            else {
                let toast = yield this.toastController.create({
                    message: "Please Enter All Fields",
                    duration: 3000,
                    color: "warning",
                    position: "bottom",
                    animated: true,
                });
                toast.present();
            }
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(err);
            let toast = yield this.toastController.create({
                message: "Invalid Data",
                duration: 3000,
                color: "secondary",
                position: "bottom",
                animated: true,
            });
            toast.present();
        }));
    }
};
ShowInterestPage.ctorParameters = () => [
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _providers_login_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
];
ShowInterestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "page-showInterest",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./showInterest.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/showInterest/showInterest.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./showInterest.scss */ "./src/app/pages/showInterest/showInterest.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
        _providers_login_services__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
], ShowInterestPage);



/***/ }),

/***/ "./src/app/providers/login.services.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/login.services.ts ***!
  \*********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

// import { environment } from './../../environments/environment.prod';




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.ownerId = "5f6f0e8c1f46bf3f11660245";
    }
    sendOTP(payload) {
        let response;
        return this.http.post(this.baseUrl + "/api/v1/customer/SendOTP", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    getOwnerId() {
        return this.ownerId;
    }
    verifyOTP(payload) {
        let response;
        return this.http.post(this.baseUrl + "/api/v1/customer/VerifyOTP", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            console.log(response, "response");
            return response.object;
        }));
    }
    socialMediaLogin(payload) {
        let response;
        return this.http.post(this.baseUrl + "/api/v1/customer/Register", payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            console.log(response, "response");
            return response.object;
        }));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginService);



/***/ })

}]);
//# sourceMappingURL=showInterest-showInterest-module-es2015.js.map