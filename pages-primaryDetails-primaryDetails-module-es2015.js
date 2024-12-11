(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-primaryDetails-primaryDetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/primaryDetails/primaryDetails.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/primaryDetails/primaryDetails.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"primary-detail\">\n  <ion-list class=\"primary-detail-list\">\n    <ion-text style=\"    font-weight: 500;\n    /* font-size: larger; */\n    font-size: 15px;\">\n      <!-- <img src=\"../../../assets/img/logo-2.png\"> -->\n      Welcome to CSD CAR\n    </ion-text>\n    <!-- {{userData | json}} -->\n    <!-- <h5></h5> -->\n    <ion-item >\n      <ion-label position=\"stacked\" color=\"primary\">Full Name</ion-label>\n      <ion-input [(ngModel)]=\"name\" name=\"name\" placeholder=\"Enter Your Full Name\" type=\"text\" spellcheck=\"false\"\n      required>\n      </ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label position=\"stacked\" color=\"primary\">City</ion-label>\n      <ion-input [(ngModel)]=\"city\" name=\"name\" placeholder=\"Enter your city\" type=\"text\" spellcheck=\"false\"\n      required>\n      </ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"checkRegisteredDate()\">\n      <ion-label position=\"stacked\" color=\"primary\">Refer Code</ion-label>\n      <ion-input [(ngModel)]=\"refercode\" name=\"name\" placeholder=\"Enter Refer Code if You have\" type=\"text\" spellcheck=\"false\"\n      required>\n      </ion-input>\n    </ion-item>\n\n    <!-- <ion-item *ngIf=\"storeList.length !== 0 \">\n      <ion-label position=\"stacked\" color=\"primary\">Select Shop</ion-label>\n      <ion-select placeholder=\"Select Shop\" [(ngModel)]=\"selectShop\" (ionChange)=\"selectShopId();\">\n        <ion-select-option value=\"{{list._id}}\" *ngFor=\"let list of storeList\">\n          {{list.storeName}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item> -->\n    <br>\n\n\n    <ion-button  (click)=\"goForward()\">Go to Home Page </ion-button>\n  </ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/primaryDetails/primaryDetails-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/primaryDetails/primaryDetails-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PrimaryDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryDetailsPageRoutingModule", function() { return PrimaryDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _primaryDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./primaryDetails */ "./src/app/pages/primaryDetails/primaryDetails.ts");
/* harmony import */ var _resolver_primaryDetails_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolver/primaryDetails.resolver */ "./src/app/pages/primaryDetails/resolver/primaryDetails.resolver.ts");





const routes = [
    {
        path: '',
        component: _primaryDetails__WEBPACK_IMPORTED_MODULE_3__["PrimaryDetailsPage"],
        resolve: { users: _resolver_primaryDetails_resolver__WEBPACK_IMPORTED_MODULE_4__["PrimaryDetailsResolver"] }
    }
];
let PrimaryDetailsPageRoutingModule = class PrimaryDetailsPageRoutingModule {
};
PrimaryDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PrimaryDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/primaryDetails/primaryDetails.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/primaryDetails/primaryDetails.module.ts ***!
  \***************************************************************/
/*! exports provided: PrimaryDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryDetailsModule", function() { return PrimaryDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _primaryDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./primaryDetails */ "./src/app/pages/primaryDetails/primaryDetails.ts");
/* harmony import */ var _primaryDetails_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./primaryDetails-routing.module */ "./src/app/pages/primaryDetails/primaryDetails-routing.module.ts");
/* harmony import */ var _resolver_primaryDetails_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolver/primaryDetails.resolver */ "./src/app/pages/primaryDetails/resolver/primaryDetails.resolver.ts");









let PrimaryDetailsModule = class PrimaryDetailsModule {
};
PrimaryDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _primaryDetails_routing_module__WEBPACK_IMPORTED_MODULE_6__["PrimaryDetailsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [
            _primaryDetails__WEBPACK_IMPORTED_MODULE_5__["PrimaryDetailsPage"]
        ],
        providers: [_resolver_primaryDetails_resolver__WEBPACK_IMPORTED_MODULE_7__["PrimaryDetailsResolver"]],
        entryComponents: [_primaryDetails__WEBPACK_IMPORTED_MODULE_5__["PrimaryDetailsPage"]]
    })
], PrimaryDetailsModule);



/***/ }),

/***/ "./src/app/pages/primaryDetails/primaryDetails.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/primaryDetails/primaryDetails.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".primary-detail {\n  --background: transparent;\n  margin: 0 !important;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-image: url(https://i.pinimg.com/originals/04/80/d3/0480d3fb8a3b2949174547f07d23e6de.jpg) !important;\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.primary-detail::before {\n  content: \"\";\n  display: block;\n  background-color: rgba(0, 0, 0, 0.07);\n  -webkit-backdrop-filter: blur(25px);\n  backdrop-filter: blur(5px);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.primary-detail-list {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  padding: 20px 30px 30px;\n  border-radius: 5px;\n  background: var(--ion-item-background);\n}\n\n.primary-detail-list h4 {\n  color: var(--ion-text-color);\n  margin: 0px;\n  border-bottom: 1px solid var(--ion-border-color);\n  padding-bottom: 15px;\n}\n\n.primary-detail-list h4 img {\n  width: 50px;\n  vertical-align: middle;\n}\n\nion-button {\n  width: 100%;\n  --background: var(--ion-gocart-bg-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9wcmltYXJ5RGV0YWlscy9wcmltYXJ5RGV0YWlscy5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmltYXJ5RGV0YWlscy9wcmltYXJ5RGV0YWlscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QUNHSjs7QURGUTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0Esb0JBQUE7QUNJWjs7QURIUTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQ0taOztBREFBO0VBQ0ksV0FBQTtFQUNBLHdDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmltYXJ5RGV0YWlscy9wcmltYXJ5RGV0YWlscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnktZGV0YWlse1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzA0LzgwL2QzLzA0ODBkM2ZiOGEzYjI5NDkxNzQ1NDdmMDdkMjNlNmRlLmpwZykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ucHJpbWFyeS1kZXRhaWw6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDclKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnByaW1hcnktZGV0YWlsLWxpc3R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICAgICAgICBoNHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ29jYXJ0LWJnLWNvbG9yKTtcbn1cbiIsIi5wcmltYXJ5LWRldGFpbCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzA0LzgwL2QzLzA0ODBkM2ZiOGEzYjI5NDkxNzQ1NDdmMDdkMjNlNmRlLmpwZykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnByaW1hcnktZGV0YWlsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcmltYXJ5LWRldGFpbC1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMjBweCAzMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG59XG4ucHJpbWFyeS1kZXRhaWwtbGlzdCBoNCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnByaW1hcnktZGV0YWlsLWxpc3QgaDQgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ29jYXJ0LWJnLWNvbG9yKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/primaryDetails/primaryDetails.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/primaryDetails/primaryDetails.ts ***!
  \********************************************************/
/*! exports provided: PrimaryDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryDetailsPage", function() { return PrimaryDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");





// import { ViewComplaintPage } from "./modal/viewComplaint";


let PrimaryDetailsPage = class PrimaryDetailsPage {
    constructor(_ProductService, modalController, _Router, Router, toastController, _UserData) {
        this._ProductService = _ProductService;
        this.modalController = modalController;
        this._Router = _Router;
        this.Router = Router;
        this.toastController = toastController;
        this._UserData = _UserData;
        this.name = null;
        this.city = null;
        this.refercode = null;
        this.storeList = [];
        this.selectedOrder = "";
        this.enableCheckoutScreen = false;
        this.searchproductList = [];
        this.selectedEntry = {
            _id: "",
        };
        this.userData = {
            fullName: "",
            byReferal: "",
            city: "",
            createdAt: new Date(),
        };
    }
    // public shop
    ngOnInit() {
        this.getStoreList();
        this.getCustomerProfile();
        // this.name = localStorage.getItem('userName')
        // console.log(this.name);
        // if(localStorage.getItem('userName')){
        //     this.isNameFieldEnable = true
        // }
        this.selectShop = localStorage.getItem('shopID') || '';
    }
    selectShopId() {
        console.log(this.selectShop, this.name);
    }
    getStoreList() {
        this._ProductService.fetchStoreList().subscribe((data) => {
            this.storeList = data.storeList;
            console.log(this.storeList);
        });
    }
    checkRegisteredDate() {
        if (this.userData) {
            if (new Date(this.userData.createdAt).setHours(0, 0, 0, 0) ==
                new Date().setHours(0, 0, 0, 0)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    goForward() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userData.fullName == null || this.userData.fullName == "") {
                if (!this.name) {
                    const toast = yield this.toastController.create({
                        message: "Please Enter Your Name",
                        duration: 3000,
                        color: 'warning',
                        position: "bottom",
                        animated: true,
                    });
                    toast.present();
                    return;
                }
            }
            if (this.userData.city == null || this.userData.city == "") {
                if (!this.city) {
                    const toast = yield this.toastController.create({
                        message: "Please Enter Your City",
                        duration: 3000,
                        color: 'warning',
                        position: "bottom",
                        animated: true,
                    });
                    toast.present();
                    return;
                }
            }
            // console.log(this.selectShop,"this.selectShop")
            // if (!this.selectShop) {
            //     const toast = await this.toastController.create({
            //       message: "Please Select Your Nearest Shop",
            //        duration: 3000,
            //       color:'warning',
            //       position: "bottom",
            //       animated: true,
            //     });
            //     toast.present();
            //     return;
            // }
            let self = this;
            let payload = Object.assign({}, {
                fullName: this.name,
                refer_code: this.refercode,
                ownerId: this._UserData.getOwnerId(),
                city: this.city
            });
            let userId = localStorage.getItem("userId");
            console.log(payload, "payload", userId);
            this._UserData
                .updateProfile(userId, payload)
                .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("data", data);
                let selctedhopData = this.storeList.filter(function (val) {
                    return val._id == self.selectShop;
                });
                console.log(selctedhopData[0].storeName, "selctedhopData");
                localStorage.setItem("userName", this.name);
                localStorage.setItem("shopID", this.selectShop);
                localStorage.setItem("shopName", selctedhopData[0].storeName);
                // const toast = await this.toastController.create({
                //   message: "You Successfully Changed you Profile",
                //    duration: 3000,
                // color:'secondary',,
                //   position: "bottom",
                //   animated: true,
                // });
                // toast.present();
                this.Router.navigateByUrl(`/home`);
            }));
        });
    }
    onSelectionChange(entry) {
        this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        console.log(this.selectedEntry, "select");
        if (this.selectedEntry) {
            this.enableCheckoutScreen = true;
        }
    }
    //  import { Router } from '@angular/router';
    //     private router: Router,
    //   this.router.navigateByUrl('/tutorial');
    processedToCheckOutPage() {
        this.Router.navigateByUrl(`/checkout/${this.cartId}/${this.selectedEntry._id}`);
    }
    selectOrders() {
        console.log(this.selectedOrder);
    }
    getCustomerProfile() {
        this._UserData
            .getCustomerDetails(localStorage.getItem("userId"))
            .subscribe((data) => {
            this.userData = data;
            console.log(this.userData, "this.userData");
            this.city = this.userData.city;
            this.name = this.userData.fullName;
            // this.name = userData.fullName;
            // console.log(this.name)
            // if(this.name){
            //     this.isNameFieldEnable = true
            // }
        });
    }
};
PrimaryDetailsPage.ctorParameters = () => [
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
];
PrimaryDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-primaryDetails",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./primaryDetails.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/primaryDetails/primaryDetails.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./primaryDetails.scss */ "./src/app/pages/primaryDetails/primaryDetails.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])
], PrimaryDetailsPage);



/***/ }),

/***/ "./src/app/pages/primaryDetails/resolver/primaryDetails.resolver.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/primaryDetails/resolver/primaryDetails.resolver.ts ***!
  \**************************************************************************/
/*! exports provided: PrimaryDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryDetailsResolver", function() { return PrimaryDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/user-data */ "./src/app/providers/user-data.ts");





let PrimaryDetailsResolver = class PrimaryDetailsResolver {
    constructor(_route, _ProductService, _UserData) {
        this._route = _route;
        this._ProductService = _ProductService;
        this._UserData = _UserData;
    }
    resolve(route) {
        return this.checkGoToHome();
    }
    getStoreList() {
        this._ProductService.fetchStoreList().subscribe((data) => {
            let storeList = data.storeList;
            alert("bhn");
            console.log(storeList, "list--");
            if (storeList.length == 1) {
                this._route.navigateByUrl("/home");
                localStorage.setItem("shopID", storeList[0]._id);
                return true;
            }
            else {
                return true;
            }
        });
    }
    checkGoToHome() {
        this.getCustomerProfile();
    }
    getCustomerProfile() {
        this._UserData
            .getCustomerDetails(localStorage.getItem("userId"))
            .subscribe((data) => {
            this.userData = data;
            console.log(this.userData, "this.userData");
            if (this.userData.city && this.userData.fullName) {
                this._route.navigateByUrl("/home");
            }
        });
    }
};
PrimaryDetailsResolver.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"] }
];
PrimaryDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])
], PrimaryDetailsResolver);



/***/ })

}]);
//# sourceMappingURL=pages-primaryDetails-primaryDetails-module-es2015.js.map