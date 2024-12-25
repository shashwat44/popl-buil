function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feedback-feedback-module"], {
  /***/
  "./node_modules/@angular/material/esm2015/dialog.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/dialog.js ***!
    \**********************************************************/

  /*! exports provided: MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog, throwMatDialogContentAlreadyAttachedError, MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogConfig, MatDialogRef, matDialogAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015DialogJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
      return MatDialogModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
      return MAT_DIALOG_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
      return MAT_DIALOG_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
      return MAT_DIALOG_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
      return MatDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
      return throwMatDialogContentAlreadyAttachedError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
      return MatDialogContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
      return MatDialogClose;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
      return MatDialogTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
      return MatDialogContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
      return MatDialogActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
      return MatDialogConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
      return MatDialogRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
      return matDialogAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Configuration for opening a modal dialog with the MatDialog service.
     * @template D
     */


    var MatDialogConfig = function MatDialogConfig() {
      _classCallCheck(this, MatDialogConfig);

      /**
       * The ARIA role of the dialog element.
       */
      this.role = 'dialog';
      /**
       * Custom class for the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the dialog has a backdrop.
       */

      this.hasBackdrop = true;
      /**
       * Custom class for the backdrop.
       */

      this.backdropClass = '';
      /**
       * Whether the user can use escape or clicking on the backdrop to close the modal.
       */

      this.disableClose = false;
      /**
       * Width of the dialog.
       */

      this.width = '';
      /**
       * Height of the dialog.
       */

      this.height = '';
      /**
       * Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw.
       */

      this.maxWidth = '80vw';
      /**
       * Data being injected into the child component.
       */

      this.data = null;
      /**
       * ID of the element that describes the dialog.
       */

      this.ariaDescribedBy = null;
      /**
       * ID of the element that labels the dialog.
       */

      this.ariaLabelledBy = null;
      /**
       * Aria label to assign to the dialog element.
       */

      this.ariaLabel = null;
      /**
       * Whether the dialog should focus the first focusable element on open.
       */

      this.autoFocus = true;
      /**
       * Whether the dialog should restore focus to the
       * previously-focused element, after it's closed.
       */

      this.restoreFocus = true;
      /**
       * Whether the dialog should close when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var animationBody = [// Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0,
      transform: 'scale(0.7)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'none'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'none',
      opacity: 1
    }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })))];
    /**
     * Animations used by MatDialog.
     * \@docs-private
     * @type {?}
     */

    var matDialogAnimations = {
      /**
       * Animation that is applied on the dialog container by defalt.
       */
      dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('dialogContainer', animationBody),

      /**
       * @deprecated \@breaking-change 8.0.0 Use `matDialogAnimations.dialogContainer` instead.
       */
      slideDialog: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDialog', animationBody)
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception for the case when a ComponentPortal is
     * attached to a DomPortalOutlet without an origin.
     * \@docs-private
     * @return {?}
     */

    function throwMatDialogContentAlreadyAttachedError() {
      throw Error('Attempting to attach dialog content after content is already attached');
    }
    /**
     * Internal component that wraps user-provided dialog content.
     * Animation is based on https://material.io/guidelines/motion/choreography.html.
     * \@docs-private
     */


    var MatDialogContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
      _inherits(MatDialogContainer, _angular_cdk_portal__);

      var _super = _createSuper(MatDialogContainer);

      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _changeDetectorRef
       * @param {?} _document
       * @param {?} _config
       */
      function MatDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, _config) {
        var _this;

        _classCallCheck(this, MatDialogContainer);

        _this = _super.call(this);
        _this._elementRef = _elementRef;
        _this._focusTrapFactory = _focusTrapFactory;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._document = _document;
        _this._config = _config;
        /**
         * Element that was focused before the dialog was opened. Save this to restore upon close.
         */

        _this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * State of the dialog animation.
         */

        _this._state = 'enter';
        /**
         * Emits when an animation state changes.
         */

        _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this._ariaLabelledBy = _config.ariaLabelledBy || null;
        return _this;
      }
      /**
       * Attach a ComponentPortal as content to this dialog container.
       * @template T
       * @param {?} portal Portal to be attached as the dialog content.
       * @return {?}
       */


      _createClass(MatDialogContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a TemplatePortal as content to this dialog container.
         * @template C
         * @param {?} portal Portal to be attached as the dialog content.
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          if (this._portalOutlet.hasAttached()) {
            throwMatDialogContentAlreadyAttachedError();
          }

          this._savePreviouslyFocusedElement();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Moves the focus inside the focus trap.
         * @private
         * @return {?}
         */

      }, {
        key: "_trapFocus",
        value: function _trapFocus() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;

          if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(element);
          } // If we were to attempt to focus immediately, then the content of the dialog would not yet be
          // ready in instances where change detection has to run first. To deal with this, we simply
          // wait for the microtask queue to be empty.


          if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
          } else {
            /** @type {?} */
            var activeElement = this._document.activeElement; // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.

            if (activeElement !== element && !element.contains(activeElement)) {
              element.focus();
            }
          }
        }
        /**
         * Restores focus to the element that was focused before the dialog opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_restoreFocus",
        value: function _restoreFocus() {
          /** @type {?} */
          var toFocus = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

          if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            toFocus.focus();
          }

          if (this._focusTrap) {
            this._focusTrap.destroy();
          }
        }
        /**
         * Saves a reference to the element that was focused before the dialog was opened.
         * @private
         * @return {?}
         */

      }, {
        key: "_savePreviouslyFocusedElement",
        value: function _savePreviouslyFocusedElement() {
          var _this2 = this;

          if (this._document) {
            this._elementFocusedBeforeDialogWasOpened =
            /** @type {?} */
            this._document.activeElement; // Note that there is no focus method when rendering on the server.

            if (this._elementRef.nativeElement.focus) {
              // Move focus onto the dialog immediately in order to prevent the user from accidentally
              // opening multiple dialogs at the same time. Needs to be async, because the element
              // may not be focusable immediately.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                return _this2._elementRef.nativeElement.focus();
              });
            }
          }
        }
        /**
         * Callback, invoked whenever an animation on the host completes.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationDone",
        value: function _onAnimationDone(event) {
          if (event.toState === 'enter') {
            this._trapFocus();
          } else if (event.toState === 'exit') {
            this._restoreFocus();
          }

          this._animationStateChanged.emit(event);
        }
        /**
         * Callback, invoked when an animation on the host starts.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onAnimationStart",
        value: function _onAnimationStart(event) {
          this._animationStateChanged.emit(event);
        }
        /**
         * Starts the dialog exit animation.
         * @return {?}
         */

      }, {
        key: "_startExitAnimation",
        value: function _startExitAnimation() {
          this._state = 'exit'; // Mark the container for check so it can react if the
          // view container is using OnPush change detection.

          this._changeDetectorRef.markForCheck();
        }
      }]);

      return MatDialogContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["BasePortalOutlet"]);

    MatDialogContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-dialog-container',
        template: "<ng-template cdkPortalOutlet></ng-template>",
        styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}@media (-ms-high-contrast:active){.mat-dialog-container{outline:solid 1px}}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        animations: [matDialogAnimations.dialogContainer],
        host: {
          'class': 'mat-dialog-container',
          'tabindex': '-1',
          'aria-modal': 'true',
          '[attr.id]': '_id',
          '[attr.role]': '_config.role',
          '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
          '[attr.aria-label]': '_config.ariaLabel',
          '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
          '[@dialogContainer]': '_state',
          '(@dialogContainer.start)': '_onAnimationStart($event)',
          '(@dialogContainer.done)': '_onAnimationDone($event)'
        }
      }]
    }];
    /** @nocollapse */

    MatDialogContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusTrapFactory"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: MatDialogConfig
      }];
    };

    MatDialogContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], {
          "static": true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(jelbourn): resizing
    // Counter for unique dialog ids.

    /** @type {?} */

    var uniqueId = 0;
    /**
     * Reference to a dialog opened via the MatDialog service.
     * @template T, R
     */

    var MatDialogRef = /*#__PURE__*/function () {
      /**
       * @param {?} _overlayRef
       * @param {?} _containerInstance
       * @param {?=} _location
       * @param {?=} id
       */
      function MatDialogRef(_overlayRef, _containerInstance, // @breaking-change 8.0.0 `_location` parameter to be removed.
      _location) {
        var _this3 = this;

        var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "mat-dialog-".concat(uniqueId++);

        _classCallCheck(this, MatDialogRef);

        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /**
         * Whether the user is allowed to close the dialog.
         */

        this.disableClose = this._containerInstance._config.disableClose;
        /**
         * Subject for notifying the user that the dialog has finished opening.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has finished closing.
         */

        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the dialog has started closing.
         */

        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Current state of the dialog.
         */

        this._state = 0
        /* OPEN */
        ; // Pass the id along to the container.

        _containerInstance._id = id; // Emit when opening animation completes

        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'enter';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          _this3._afterOpened.next();

          _this3._afterOpened.complete();
        }); // Dispose overlay when closing animation is complete


        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.phaseName === 'done' && event.toState === 'exit';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        function () {
          clearTimeout(_this3._closeFallbackTimeout);

          _this3._overlayRef.dispose();
        });

        _overlayRef.detachments().subscribe(
        /**
        * @return {?}
        */
        function () {
          _this3._beforeClosed.next(_this3._result);

          _this3._beforeClosed.complete();

          _this3._afterClosed.next(_this3._result);

          _this3._afterClosed.complete();

          _this3.componentInstance =
          /** @type {?} */
          null;

          _this3._overlayRef.dispose();
        });

        _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event);
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          event.preventDefault();

          _this3.close();
        });
      }
      /**
       * Close the dialog.
       * @param {?=} dialogResult Optional result to return to the dialog opener.
       * @return {?}
       */


      _createClass(MatDialogRef, [{
        key: "close",
        value: function close(dialogResult) {
          var _this4 = this;

          this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

          this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.phaseName === 'start';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this4._beforeClosed.next(dialogResult);

            _this4._beforeClosed.complete();

            _this4._state = 2
            /* CLOSED */
            ;

            _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.


            _this4._closeFallbackTimeout = setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this4._overlayRef.dispose();
            }, event.totalTime + 100);
          });

          this._containerInstance._startExitAnimation();

          this._state = 1
          /* CLOSING */
          ;
        }
        /**
         * Gets an observable that is notified when the dialog is finished opening.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this._afterOpened.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog is finished closing.
         * @return {?}
         */

      }, {
        key: "afterClosed",
        value: function afterClosed() {
          return this._afterClosed.asObservable();
        }
        /**
         * Gets an observable that is notified when the dialog has started closing.
         * @return {?}
         */

      }, {
        key: "beforeClosed",
        value: function beforeClosed() {
          return this._beforeClosed.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay's backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._overlayRef.backdropClick();
        }
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
        /**
         * Updates the dialog's position.
         * @template THIS
         * @this {THIS}
         * @param {?=} position New dialog position.
         * @return {THIS}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition(position) {
          /** @type {?} */
          var strategy =
          /** @type {?} */
          this._getPositionStrategy();

          if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
          } else {
            strategy.centerHorizontally();
          }

          if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
          } else {
            strategy.centerVertically();
          }

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Updates the dialog's width and height.
         * @template THIS
         * @this {THIS}
         * @param {?=} width New width of the dialog.
         * @param {?=} height New height of the dialog.
         * @return {THIS}
         */

      }, {
        key: "updateSize",
        value: function updateSize() {
          var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          /** @type {?} */
          this._getPositionStrategy().width(width).height(height);

          /** @type {?} */
          this._overlayRef.updatePosition();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          /** @type {?} */
          this._overlayRef.addPanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @template THIS
         * @this {THIS}
         * @param {?} classes
         * @return {THIS}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          /** @type {?} */
          this._overlayRef.removePanelClass(classes);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets an observable that is notified when the dialog is finished opening.
         * @deprecated Use `afterOpened` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "afterOpen",
        value: function afterOpen() {
          return this.afterOpened();
        }
        /**
         * Gets an observable that is notified when the dialog has started closing.
         * @deprecated Use `beforeClosed` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "beforeClose",
        value: function beforeClose() {
          return this.beforeClosed();
        }
        /**
         * Gets the current state of the dialog's lifecycle.
         * @return {?}
         */

      }, {
        key: "getState",
        value: function getState() {
          return this._state;
        }
        /**
         * Fetches the position strategy object from the overlay ref.
         * @private
         * @return {?}
         */

      }, {
        key: "_getPositionStrategy",
        value: function _getPositionStrategy() {
          return (
            /** @type {?} */
            this._overlayRef.getConfig().positionStrategy
          );
        }
      }]);

      return MatDialogRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to access the data that was passed in to a dialog.
     * @type {?}
     */


    var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatDialogData');
    /**
     * Injection token that can be used to specify default dialog options.
     * @type {?}
     */

    var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-dialog-default-options');
    /**
     * Injection token that determines the scroll handling while the dialog is open.
     * @type {?}
     */

    var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-dialog-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */


    function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.block();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_DIALOG_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]],
      useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Service to open Material Design modal dialogs.
     */

    var MatDialog = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _injector
       * @param {?} _location
       * @param {?} _defaultOptions
       * @param {?} scrollStrategy
       * @param {?} _parentDialog
       * @param {?} _overlayContainer
       */
      function MatDialog(_overlay, _injector, _location, _defaultOptions, scrollStrategy, _parentDialog, _overlayContainer) {
        var _this5 = this;

        _classCallCheck(this, MatDialog);

        this._overlay = _overlay;
        this._injector = _injector;
        this._location = _location;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */

        this.afterAllClosed =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(
        /**
        * @return {?}
        */
        function () {
          return _this5.openDialogs.length ? _this5._afterAllClosed : _this5._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
        });
        this._scrollStrategy = scrollStrategy;
      }
      /**
       * Keeps track of the currently-open dialogs.
       * @return {?}
       */


      _createClass(MatDialog, [{
        key: "open",

        /**
         * Opens a modal dialog containing the given component.
         * @template T, D, R
         * @param {?} componentOrTemplateRef Type of the component to load into the dialog,
         *     or a TemplateRef to instantiate as the dialog content.
         * @param {?=} config Extra configuration options.
         * @return {?} Reference to the newly-opened dialog.
         */
        value: function open(componentOrTemplateRef, config) {
          var _this6 = this;

          config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

          if (config.id && this.getDialogById(config.id)) {
            throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
          }
          /** @type {?} */


          var overlayRef = this._createOverlay(config);
          /** @type {?} */


          var dialogContainer = this._attachDialogContainer(overlayRef, config);
          /** @type {?} */


          var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


          if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
          }

          this.openDialogs.push(dialogRef);
          dialogRef.afterClosed().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this6._removeOpenDialog(dialogRef);
          });
          this.afterOpened.next(dialogRef);
          return dialogRef;
        }
        /**
         * Closes all of the currently-open dialogs.
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this._closeDialogs(this.openDialogs);
        }
        /**
         * Finds an open dialog by its id.
         * @param {?} id ID to use when looking up the dialog.
         * @return {?}
         */

      }, {
        key: "getDialogById",
        value: function getDialogById(id) {
          return this.openDialogs.find(
          /**
          * @param {?} dialog
          * @return {?}
          */
          function (dialog) {
            return dialog.id === id;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Only close the dialogs at this level on destroy
          // since the parent service may still be active.
          this._closeDialogs(this._openDialogsAtThisLevel);

          this._afterAllClosedAtThisLevel.complete();

          this._afterOpenedAtThisLevel.complete();
        }
        /**
         * Creates the overlay into which the dialog will be loaded.
         * @private
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the OverlayRef for the created overlay.
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = this._getOverlayConfig(config);

          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an overlay config from a dialog config.
         * @private
         * @param {?} dialogConfig The dialog configuration.
         * @return {?} The overlay configuration.
         */

      }, {
        key: "_getOverlayConfig",
        value: function _getOverlayConfig(dialogConfig) {
          /** @type {?} */
          var state$$1 = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
          });

          if (dialogConfig.backdropClass) {
            state$$1.backdropClass = dialogConfig.backdropClass;
          }

          return state$$1;
        }
        /**
         * Attaches an MatDialogContainer to a dialog's already-created overlay.
         * @private
         * @param {?} overlay Reference to the dialog's underlying overlay.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to a ComponentRef for the attached container.
         */

      }, {
        key: "_attachDialogContainer",
        value: function _attachDialogContainer(overlay, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatDialogConfig, config]]));
          /** @type {?} */

          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](MatDialogContainer, config.viewContainerRef, injector, config.componentFactoryResolver);
          /** @type {?} */

          var containerRef = overlay.attach(containerPortal);
          return containerRef.instance;
        }
        /**
         * Attaches the user-provided component to the already-created MatDialogContainer.
         * @private
         * @template T, R
         * @param {?} componentOrTemplateRef The type of component being loaded into the dialog,
         *     or a TemplateRef to instantiate as the content.
         * @param {?} dialogContainer Reference to the wrapping MatDialogContainer.
         * @param {?} overlayRef Reference to the overlay in which the dialog resides.
         * @param {?} config The dialog configuration.
         * @return {?} A promise resolving to the MatDialogRef that should be returned to the user.
         */

      }, {
        key: "_attachDialogContent",
        value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
          // Create a reference to the dialog we're creating in order to give the user a handle
          // to modify and close it.

          /** @type {?} */
          var dialogRef = new MatDialogRef(overlayRef, dialogContainer, this._location, config.id); // When the dialog backdrop is clicked, we want to close it.

          if (config.hasBackdrop) {
            overlayRef.backdropClick().subscribe(
            /**
            * @return {?}
            */
            function () {
              if (!dialogRef.disableClose) {
                dialogRef.close();
              }
            });
          }

          if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](componentOrTemplateRef,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: config.data,
              dialogRef: dialogRef
            }));
          } else {
            /** @type {?} */
            var injector = this._createInjector(config, dialogRef, dialogContainer);
            /** @type {?} */


            var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
          }

          dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
          return dialogRef;
        }
        /**
         * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
         * of a dialog to close itself and, optionally, to return a value.
         * @private
         * @template T
         * @param {?} config Config object that is used to construct the dialog.
         * @param {?} dialogRef Reference to the dialog.
         * @param {?} dialogContainer
         * @return {?} The custom injector that can be used inside the dialog.
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, dialogRef, dialogContainer) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The MatDialogContainer is injected in the portal as the MatDialogContainer and the dialog's
          // content are created out of the same ViewContainerRef and as such, are siblings for injector
          // purposes. To allow the hierarchy that is expected, the MatDialogContainer is explicitly
          // added to the injection tokens.

          /** @type {?} */

          var injectionTokens = new WeakMap([[MatDialogContainer, dialogContainer], [MAT_DIALOG_DATA, config.data], [MatDialogRef, dialogRef]]);

          if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], null))) {
            injectionTokens.set(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], {
              value: config.direction,
              change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
            });
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, injectionTokens);
        }
        /**
         * Removes a dialog from the array of open dialogs.
         * @private
         * @param {?} dialogRef Dialog to be removed.
         * @return {?}
         */

      }, {
        key: "_removeOpenDialog",
        value: function _removeOpenDialog(dialogRef) {
          /** @type {?} */
          var index = this.openDialogs.indexOf(dialogRef);

          if (index > -1) {
            this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.

            if (!this.openDialogs.length) {
              this._ariaHiddenElements.forEach(
              /**
              * @param {?} previousValue
              * @param {?} element
              * @return {?}
              */
              function (previousValue, element) {
                if (previousValue) {
                  element.setAttribute('aria-hidden', previousValue);
                } else {
                  element.removeAttribute('aria-hidden');
                }
              });

              this._ariaHiddenElements.clear();

              this._afterAllClosed.next();
            }
          }
        }
        /**
         * Hides all of the content that isn't an overlay from assistive technology.
         * @private
         * @return {?}
         */

      }, {
        key: "_hideNonDialogContentFromAssistiveTechnology",
        value: function _hideNonDialogContentFromAssistiveTechnology() {
          /** @type {?} */
          var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


          if (overlayContainer.parentElement) {
            /** @type {?} */
            var siblings = overlayContainer.parentElement.children;

            for (var i = siblings.length - 1; i > -1; i--) {
              /** @type {?} */
              var sibling = siblings[i];

              if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                sibling.setAttribute('aria-hidden', 'true');
              }
            }
          }
        }
        /**
         * Closes all of the dialogs in an array.
         * @private
         * @param {?} dialogs
         * @return {?}
         */

      }, {
        key: "_closeDialogs",
        value: function _closeDialogs(dialogs) {
          /** @type {?} */
          var i = dialogs.length;

          while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
          }
        }
      }, {
        key: "openDialogs",
        get: function get() {
          return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
        }
        /**
         * Stream that emits when a dialog has been opened.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        get: function get() {
          return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
        }
        /**
         * Stream that emits when a dialog has been opened.
         * @deprecated Use `afterOpened` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "afterOpen",
        get: function get() {
          return this.afterOpened;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_afterAllClosed",
        get: function get() {
          /** @type {?} */
          var parent = this._parentDialog;
          return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;
        }
      }]);

      return MatDialog;
    }();

    MatDialog.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }];
    /** @nocollapse */

    MatDialog.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: MatDialogConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_DIALOG_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_DIALOG_SCROLL_STRATEGY]
        }]
      }, {
        type: MatDialog,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]
      }];
    };
    /**
     * Applies default options to the dialog config.
     * @param {?=} config Config to be modified.
     * @param {?=} defaultOptions Default options provided.
     * @return {?} The new configuration object.
     */


    function _applyConfigDefaults(config, defaultOptions) {
      return Object.assign({}, defaultOptions, config);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter used to generate unique IDs for dialog elements.
     * @type {?}
     */


    var dialogElementUid = 0;
    /**
     * Button that will close the current dialog.
     */

    var MatDialogClose = /*#__PURE__*/function () {
      /**
       * @param {?} dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogClose(dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogClose);

        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /**
         * Default to "button" to prevents accidental form submits.
         */

        this.type = 'button';
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogClose, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

          if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
          }
        }
      }]);

      return MatDialogClose;
    }();

    MatDialogClose.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[mat-dialog-close], [matDialogClose]',
        exportAs: 'matDialogClose',
        host: {
          '(click)': 'dialogRef.close(dialogResult)',
          '[attr.aria-label]': 'ariaLabel || null',
          '[attr.type]': 'type'
        }
      }]
    }];
    /** @nocollapse */

    MatDialogClose.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogClose.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['aria-label']
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dialogResult: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-dialog-close']
      }],
      _matDialogClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matDialogClose']
      }]
    };
    /**
     * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
     */

    var MatDialogTitle = /*#__PURE__*/function () {
      /**
       * @param {?} _dialogRef
       * @param {?} _elementRef
       * @param {?} _dialog
       */
      function MatDialogTitle(_dialogRef, _elementRef, _dialog) {
        _classCallCheck(this, MatDialogTitle);

        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = "mat-dialog-title-".concat(dialogElementUid++);
      }
      /**
       * @return {?}
       */


      _createClass(MatDialogTitle, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (!this._dialogRef) {
            this._dialogRef =
            /** @type {?} */
            getClosestDialog(this._elementRef, this._dialog.openDialogs);
          }

          if (this._dialogRef) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var container = _this7._dialogRef._containerInstance;

              if (container && !container._ariaLabelledBy) {
                container._ariaLabelledBy = _this7.id;
              }
            });
          }
        }
      }]);

      return MatDialogTitle;
    }();

    MatDialogTitle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[mat-dialog-title], [matDialogTitle]',
        exportAs: 'matDialogTitle',
        host: {
          'class': 'mat-dialog-title',
          '[id]': 'id'
        }
      }]
    }];
    /** @nocollapse */

    MatDialogTitle.ctorParameters = function () {
      return [{
        type: MatDialogRef,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: MatDialog
      }];
    };

    MatDialogTitle.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * Scrollable content container of a dialog.
     */

    var MatDialogContent = function MatDialogContent() {
      _classCallCheck(this, MatDialogContent);
    };

    MatDialogContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
        host: {
          'class': 'mat-dialog-content'
        }
      }]
    }];
    /**
     * Container for the bottom action buttons in a dialog.
     * Stays fixed to the bottom when scrolling.
     */

    var MatDialogActions = function MatDialogActions() {
      _classCallCheck(this, MatDialogActions);
    };

    MatDialogActions.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
        host: {
          'class': 'mat-dialog-actions'
        }
      }]
    }];
    /**
     * Finds the closest MatDialogRef to an element by looking at the DOM.
     * @param {?} element Element relative to which to look for a dialog.
     * @param {?} openDialogs References to the currently-open dialogs.
     * @return {?}
     */

    function getClosestDialog(element, openDialogs) {
      /** @type {?} */
      var parent = element.nativeElement.parentElement;

      while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
      }

      return parent ? openDialogs.find(
      /**
      * @param {?} dialog
      * @return {?}
      */
      function (dialog) {
        return dialog.id ===
        /** @type {?} */
        parent.id;
      }) : null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDialogModule = function MatDialogModule() {
      _classCallCheck(this, MatDialogModule);
    };

    MatDialogModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
        exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
        declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
        providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
        entryComponents: [MatDialogContainer]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=dialog.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedbackFeedbackHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button *ngIf=\"!showSearchBox\" style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n      <ion-icon\n        style=\"margin-left: 10px\"\n        *ngIf=\"showSearchBox\"\n        (click)=\"backToNormal()\"\n        name=\"arrow-back-outline\"></ion-icon>\n    </ion-buttons>\n\n    <ion-title> FeedBack </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content-section\">\n    <ion-header class=\"page-title\">\n      <h5 class=\"title\">Please Provide Your Feedback</h5>\n    </ion-header>\n\n    <ion-list class=\"product-retting-list\">\n      <h5 class=\"rating-title\">Product Rating</h5>\n      <div class=\"ratins-box\">\n        <ion-icon\n          class=\"star-img\"\n          name=\"star\"\n          *ngFor=\"let num of [1,2,3,4,5]\"\n          (click)=\"rate(num,'productRating')\"\n          [ngStyle]=\"{'fill':getColor(num,productRating.rating)}\">\n        </ion-icon>\n        <ion-row class=\"emoji\" *ngIf=\"productRating.f\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"productRating.e\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/5.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"productRating.c\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"productRating.b\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/2.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"productRating.a\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/1.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"productRating.d\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/4.png\" />\n          </ion-col>\n        </ion-row>\n      </div>\n      <h5 class=\"rating-title\">Payment Rating</h5>\n      <div class=\"ratins-box\">\n        <ion-icon\n          class=\"star-img\"\n          name=\"star\"\n          *ngFor=\"let num of [1,2,3,4,5]\"\n          (click)=\"rate(num,'paymentRating')\"\n          [ngStyle]=\"{'fill':getColor(num,paymentRating.rating)}\">\n        </ion-icon>\n        <ion-row class=\"emoji\" *ngIf=\"paymentRating.f\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"paymentRating.e\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/5.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"paymentRating.c\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"paymentRating.b\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/2.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"paymentRating.a\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/1.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"paymentRating.d\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/4.png\" />\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <h5 class=\"rating-title\">Service Rating</h5>\n      <div class=\"ratins-box\">\n        <ion-icon\n          class=\"star-img\"\n          name=\"star\"\n          *ngFor=\"let num of [1,2,3,4,5]\"\n          (click)=\"rate(num,'serviceRating')\"\n          [ngStyle]=\"{'fill':getColor(num,serviceRating.rating)}\">\n        </ion-icon>\n        <ion-row class=\"emoji\" *ngIf=\"serviceRating.f\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"serviceRating.e\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/5.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"serviceRating.c\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"serviceRating.b\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/2.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"serviceRating.a\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/1.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"serviceRating.d\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/4.png\" />\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <h5 class=\"rating-title\">Application Rating</h5>\n      <div class=\"ratins-box\">\n        <ion-icon\n          class=\"star-img\"\n          name=\"star\"\n          *ngFor=\"let num of [1,2,3,4,5]\"\n          (click)=\"rate(num,'applicationRating')\"\n          [ngStyle]=\"{'fill':getColor(num,applicationRating.rating)}\">\n        </ion-icon>\n        <ion-row class=\"emoji\" *ngIf=\"applicationRating.f\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"applicationRating.e\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/5.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"applicationRating.c\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/3.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"applicationRating.b\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/2.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"applicationRating.a\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/1.png\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"emoji\" *ngIf=\"applicationRating.d\">\n          <ion-col style=\"text-align: center\">\n            <img class=\"emoji-img\" src=\"../../../assets/img/rating/4.png\" />\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n    <div class=\"write-review\">\n      <ion-textarea\n        rows=\"4\"\n        [(ngModel)]=\"feedback\"\n        placeholder=\" Write Your Feedback\"></ion-textarea>\n      <ion-button class=\"fixed-bottom\" (click)=\"saveFeedback()\"\n        >Submit Feedback</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/feedback/feedback-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: FeedbackPageRoutingModule */

  /***/
  function srcAppPagesFeedbackFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function () {
      return FeedbackPageRoutingModule;
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


    var _feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedback */
    "./src/app/pages/feedback/feedback.ts");

    var routes = [{
      path: '',
      component: _feedback__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
    }];

    var FeedbackPageRoutingModule = function FeedbackPageRoutingModule() {
      _classCallCheck(this, FeedbackPageRoutingModule);
    };

    FeedbackPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedbackPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback-success.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/feedback/feedback-success.ts ***!
    \****************************************************/

  /*! exports provided: FeedBackSuccessModal */

  /***/
  function srcAppPagesFeedbackFeedbackSuccessTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedBackSuccessModal", function () {
      return FeedBackSuccessModal;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FeedBackSuccessModal = /*#__PURE__*/function () {
      function FeedBackSuccessModal(router) {
        _classCallCheck(this, FeedBackSuccessModal);

        this.router = router;
      }

      _createClass(FeedBackSuccessModal, [{
        key: "goToHome",
        value: function goToHome() {
          var _this8 = this;

          setTimeout(function () {
            _this8.router.navigateByUrl('/home');
          }, 800);
        }
      }]);

      return FeedBackSuccessModal;
    }();

    FeedBackSuccessModal.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    FeedBackSuccessModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'dialog-elements-example-dialog',
      template: "\n  <div class=\"mat-dialog-content\">\n  <span class=\"feedback-thank-popup\">\n  <!-- <img src=\"../../../assets/img/logo-2.png\"> -->\n\n      Thank You For Your Feedback\n    </span>\n  </div>\n  <div class=\"mat-dialog-actions feedback-button\">\n    <ion-button mat-dialog-close class=\"mat-dialog-close\" (click)=\"goToHome()\">Okay</ion-button>\n  </div>",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.scss */
      "./src/app/pages/feedback/feedback.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], FeedBackSuccessModal);
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/feedback/feedback.module.ts ***!
    \***************************************************/

  /*! exports provided: FeedbackPageModule */

  /***/
  function srcAppPagesFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function () {
      return FeedbackPageModule;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feedback */
    "./src/app/pages/feedback/feedback.ts");
    /* harmony import */


    var _feedback_success__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feedback-success */
    "./src/app/pages/feedback/feedback-success.ts");
    /* harmony import */


    var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./feedback-routing.module */
    "./src/app/pages/feedback/feedback-routing.module.ts");

    var FeedbackPageModule = function FeedbackPageModule() {
      _classCallCheck(this, FeedbackPageModule);
    };

    FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_8__["FeedbackPageRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]],
      declarations: [_feedback__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"], _feedback_success__WEBPACK_IMPORTED_MODULE_7__["FeedBackSuccessModal"]],
      entryComponents: [_feedback_success__WEBPACK_IMPORTED_MODULE_7__["FeedBackSuccessModal"]]
    })], FeedbackPageModule);
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/feedback/feedback.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFeedbackFeedbackScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-title h5 {\n  padding: 10px 15px;\n  margin: 0px;\n  box-shadow: none;\n  background: var(--ion-gray-backgorund);\n}\n\n.page-title:after {\n  content: none;\n}\n\n.rating-title {\n  font-size: 18px;\n  font-weight: normal;\n  margin: 0px;\n  padding: 15px 0px 0px;\n}\n\n.ratins-box {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: 0px 0px 10px;\n  border-bottom: 1px solid #ccc;\n}\n\n.emoji {\n  margin-left: 50px;\n}\n\n.star-img {\n  font-size: 28px;\n}\n\n.write-review {\n  padding: 15px;\n}\n\n.write-review h5 {\n  margin-top: 0px;\n}\n\n.emoji-img {\n  height: 40px;\n  width: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.product-retting-list {\n  padding: 0px 15px;\n}\n\n.fixed-bottom {\n  --background: var(--ion-feedback-button-background);\n  width: auto;\n}\n\n.primary-detail {\n  --background: transparent;\n  margin: 0 !important;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.primary-detail::before {\n  content: \"\";\n  display: block;\n  background-color: rgba(0, 0, 0, 0.07);\n  -webkit-backdrop-filter: blur(25px);\n  backdrop-filter: blur(5px);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.primary-detail-list {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  padding: 20px 30px 30px;\n  border-radius: 5px;\n  background: #fff;\n}\n\n.primary-detail-list h4 {\n  color: #000;\n  margin: 0px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 15px;\n}\n\n.primary-detail-list h4 img {\n  width: 50px;\n  vertical-align: middle;\n}\n\nion-button {\n  width: 100%;\n}\n\nmat-dialog-container {\n  background: var(--ion-background-color) !important;\n  color: var(--ion-text-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9mZWVkYmFjay9mZWVkYmFjay5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkYmFjay9mZWVkYmFjay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0lGOztBREZBO0VBQ0UsaUJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7QUNNRjs7QURKQTtFQUNFLGFBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1NGOztBRFBBO0VBQ0UsaUJBQUE7QUNVRjs7QURSQTtFQUNFLG1EQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFJBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtBQ1VGOztBRFJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDWUY7O0FEWEU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUNhSjs7QURaSTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQ2NOOztBRFZBO0VBQ0UsV0FBQTtBQ2FGOztBRFZBO0VBQ0Usa0RBQUE7RUFDQSx1Q0FBQTtBQ2FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2suc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIGg1IHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWdyYXktYmFja2dvcnVuZCk7XG59XG4ucGFnZS10aXRsZTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG4ucmF0aW5nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTVweCAwcHggMHB4O1xufVxuLnJhdGlucy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5lbW9qaSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLnN0YXItaW1nIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLndyaXRlLXJldmlldyB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ud3JpdGUtcmV2aWV3IGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmVtb2ppLWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnByb2R1Y3QtcmV0dGluZy1saXN0IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZmVlZGJhY2stYnV0dG9uLWJhY2tncm91bmQpO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnByaW1hcnktZGV0YWlsIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lci1uZXcuanBnKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnByaW1hcnktZGV0YWlsOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwIDAgMCAvIDclKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucHJpbWFyeS1kZXRhaWwtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGg0IHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxufVxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XG59XG4iLCIucGFnZS10aXRsZSBoNSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1ncmF5LWJhY2tnb3J1bmQpO1xufVxuXG4ucGFnZS10aXRsZTphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbi5yYXRpbmctdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDBweCAwcHg7XG59XG5cbi5yYXRpbnMtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCAwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5lbW9qaSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uc3Rhci1pbWcge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi53cml0ZS1yZXZpZXcge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ud3JpdGUtcmV2aWV3IGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uZW1vamktaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wcm9kdWN0LXJldHRpbmctbGlzdCB7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZmVlZGJhY2stYnV0dG9uLWJhY2tncm91bmQpO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnByaW1hcnktZGV0YWlsIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wcmltYXJ5LWRldGFpbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJpbWFyeS1kZXRhaWwtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucHJpbWFyeS1kZXRhaWwtbGlzdCBoNCB7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnByaW1hcnktZGV0YWlsLWxpc3QgaDQgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/feedback/feedback.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/feedback/feedback.ts ***!
    \********************************************/

  /*! exports provided: FeedbackPage */

  /***/
  function srcAppPagesFeedbackFeedbackTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackPage", function () {
      return FeedbackPage;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _feedback_success__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./feedback-success */
    "./src/app/pages/feedback/feedback-success.ts");

    var FeedbackPage = /*#__PURE__*/function () {
      function FeedbackPage(_ProductService, toastController, dialog, router, _toast) {
        _classCallCheck(this, FeedbackPage);

        this._ProductService = _ProductService;
        this.toastController = toastController;
        this.dialog = dialog;
        this.router = router;
        this._toast = _toast;
        this.searchproductList = [];
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/";
        this.isCommentBoxEnable = false;
        this.boxId = "";
        this.isRated = false;
        this.showSearchBox = false;
        this.refershDefault = {
          target: {
            complete: function complete() {
              return true;
            }
          }
        };
      }

      _createClass(FeedbackPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.generateForm();
        }
      }, {
        key: "getRatingValue",
        value: function getRatingValue(property) {
          switch (property) {
            case "a":
              return 1;

            case "b":
              return 2;

            case "c":
              return 3;

            case "d":
              return 4;

            case "e":
              return 5;

            case "f":
              return 0;
          }
        }
      }, {
        key: "saveFeedback",
        value: function saveFeedback() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this9 = this;

            var productRating, property, _paymentRating, _property, serviceRating, _property2, appRating, _property3, toast;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    for (property in this.productRating) {
                      console.log(this.productRating[property]);

                      if (this.productRating[property] == true) {
                        console.log("res : ", property);
                        productRating = this.getRatingValue(property);
                      }
                    }

                    for (_property in this.paymentRating) {
                      console.log(this.paymentRating[_property]);

                      if (this.paymentRating[_property] == true) {
                        console.log("res : ", _property);
                        _paymentRating = this.getRatingValue(_property);
                      }
                    }

                    for (_property2 in this.serviceRating) {
                      console.log(this.serviceRating[_property2]);

                      if (this.serviceRating[_property2] == true) {
                        console.log("res : ", _property2);
                        serviceRating = this.getRatingValue(_property2);
                      }
                    }

                    for (_property3 in this.applicationRating) {
                      console.log(this.applicationRating[_property3]);

                      if (this.applicationRating[_property3] == true) {
                        console.log("res : ", _property3);
                        appRating = this.getRatingValue(_property3);
                      }
                    }

                    if (this.isRated) {
                      _context2.next = 10;
                      break;
                    }

                    _context2.next = 7;
                    return this._toast.create({
                      message: "Please Provide your feedback",
                      duration: 3000,
                      color: "warning",
                      position: "bottom",
                      animated: true
                    });

                  case 7:
                    toast = _context2.sent;
                    toast.present();
                    return _context2.abrupt("return");

                  case 10:
                    console.log("productRating", productRating);

                    this._ProductService.feedback({
                      UserId: localStorage.getItem("userId"),
                      productRating: productRating,
                      PaymentRating: _paymentRating,
                      ServiceRating: serviceRating,
                      ApplicationRating: appRating,
                      feedback: this.feedback
                    }).subscribe(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(data);
                                this.generateForm();
                                this.dialog.open(_feedback_success__WEBPACK_IMPORTED_MODULE_7__["FeedBackSuccessModal"]); // this.router.navigateByUrl('/home')

                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
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
        key: "generateForm",
        value: function generateForm() {
          this.productRating = {
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: true,
            rating: 0
          };
          this.paymentRating = {
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: true,
            rating: 0
          };
          this.serviceRating = {
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: true,
            rating: 0
          };
          this.applicationRating = {
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: true,
            rating: 0
          };
          this.feedback = "";
        }
      }, {
        key: "rate",
        value: function rate(index, id) {
          this.isRated = true;
          console.log(index, id);
          this[id]["rating"] = index;

          switch (index) {
            case 1:
              this[id]["a"] = true;
              this[id]["b"] = false;
              this[id]["c"] = false;
              this[id]["d"] = false;
              this[id]["e"] = false;
              this[id]["f"] = false;
              break;

            case 2:
              this[id]["a"] = false;
              this[id]["b"] = true;
              this[id]["c"] = false;
              this[id]["d"] = false;
              this[id]["e"] = false;
              this[id]["f"] = false;
              break;

            case 3:
              this[id]["a"] = false;
              this[id]["b"] = false;
              this[id]["c"] = true;
              this[id]["d"] = false;
              this[id]["e"] = false;
              this[id]["f"] = false;
              break;

            case 4:
              this[id]["a"] = false;
              this[id]["b"] = false;
              this[id]["c"] = false;
              this[id]["d"] = true;
              this[id]["e"] = false;
              this[id]["f"] = false;
              break;

            case 5:
              this[id]["a"] = false;
              this[id]["b"] = false;
              this[id]["c"] = false;
              this[id]["d"] = false;
              this[id]["e"] = true;
              this[id]["f"] = false;
              break;

            default:
              this[id]["a"] = false;
              this[id]["b"] = false;
              this[id]["c"] = false;
              this[id]["d"] = false;
              this[id]["e"] = false;
              this[id]["f"] = true;
          }
        }
      }, {
        key: "isAboveRating",
        value: function isAboveRating(index, rating) {
          return index > rating;
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
        key: "getSubCategoryList",
        value: function getSubCategoryList() {
          var _this10 = this;

          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.refershDefault;

          this._ProductService.listSubCategory().subscribe(function (data) {
            _this10.SubCategoryList = data.SubCategoryList;
            console.log(data, "--------------------------", _this10.SubCategoryList);

            if (event) {}

            setTimeout(function () {
              console.log("Async operation has ended");
              event.target.complete();
            }, 1500);
          });
        }
      }]);

      return FeedbackPage;
    }();

    FeedbackPage.ctorParameters = function () {
      return [{
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-feedback",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.scss */
      "./src/app/pages/feedback/feedback.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], FeedbackPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-feedback-feedback-module-es5.js.map