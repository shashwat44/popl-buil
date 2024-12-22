(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~menu-menu-module~pages-feedback-feedback-module"],{

/***/ "./node_modules/@angular/cdk/esm2015/bidi.js":
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
  \***************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
    /**
     * @param {?=} _document
     */
    constructor(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            const bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            const value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Directionality.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
Directionality.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
];
/** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
    constructor() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get dir() { return this._dir; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dir(value) {
        /** @type {?} */
        const old = this._dir;
        /** @type {?} */
        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }
    /**
     * Current layout direction of the element.
     * @return {?}
     */
    get value() { return this.dir; }
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Dir.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[dir]',
                providers: [{ provide: Directionality, useExisting: Dir }],
                host: { '[attr.dir]': '_rawDir' },
                exportAs: 'dir',
            },] },
];
Dir.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BidiModule {
}
BidiModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                exports: [Dir],
                declarations: [Dir],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/cdk.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/cdk.js ***!
  \**************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
 * Current version of the Angular Component Development Kit.
 * @type {?}
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=cdk.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/overlay.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/overlay.js ***!
  \******************************************************/
/*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, validateVerticalPosition, validateHorizontalPosition, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function() { return FlexibleConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function() { return validateVerticalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function() { return validateHorizontalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
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
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
class BlockScrollStrategy {
    /**
     * @param {?} _viewportRuler
     * @param {?} document
     */
    constructor(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    attach() { }
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    enable() {
        if (this._canBeEnabled()) {
            /** @type {?} */
            const root = (/** @type {?} */ (this._document.documentElement));
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    }
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    disable() {
        if (this._isEnabled) {
            /** @type {?} */
            const html = (/** @type {?} */ (this._document.documentElement));
            /** @type {?} */
            const body = (/** @type {?} */ (this._document.body));
            /** @type {?} */
            const htmlStyle = (/** @type {?} */ (html.style));
            /** @type {?} */
            const bodyStyle = (/** @type {?} */ (body.style));
            /** @type {?} */
            const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */
            const previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _canBeEnabled() {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        /** @type {?} */
        const html = (/** @type {?} */ (this._document.documentElement));
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        /** @type {?} */
        const body = this._document.body;
        /** @type {?} */
        const viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error(`Scroll strategy has already been attached.`);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
class CloseScrollStrategy {
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?=} _config
     */
    constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = (/**
         * @return {?}
         */
        () => {
            this.disable();
            if (this._overlayRef.hasAttached()) {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => this._overlayRef.detach()));
            }
        });
    }
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    enable() {
        if (this._scrollSubscription) {
            return;
        }
        /** @type {?} */
        const stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - this._initialScrollPosition) > (/** @type {?} */ ((/** @type {?} */ (this._config)).threshold))) {
                    this._detach();
                }
                else {
                    this._overlayRef.updatePosition();
                }
            }));
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    }
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    detach() {
        this.disable();
        this._overlayRef = (/** @type {?} */ (null));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Scroll strategy that doesn't do anything.
 */
class NoopScrollStrategy {
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    enable() { }
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    disable() { }
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    attach() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some((/**
     * @param {?} containerBounds
     * @return {?}
     */
    containerBounds => {
        /** @type {?} */
        const outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */
        const outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */
        const outsideLeft = element.right < containerBounds.left;
        /** @type {?} */
        const outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    }));
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some((/**
     * @param {?} scrollContainerRect
     * @return {?}
     */
    scrollContainerRect => {
        /** @type {?} */
        const clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */
        const clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */
        const clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */
        const clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
class RepositionScrollStrategy {
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     * @param {?} _ngZone
     * @param {?=} _config
     */
    constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    enable() {
        if (!this._scrollSubscription) {
            /** @type {?} */
            const throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe((/**
             * @return {?}
             */
            () => {
                this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (this._config && this._config.autoClose) {
                    /** @type {?} */
                    const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
                    const { width, height } = this._viewportRuler.getViewportSize();
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    /** @type {?} */
                    const parentRects = [{ width, height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        this.disable();
                        this._ngZone.run((/**
                         * @return {?}
                         */
                        () => this._overlayRef.detach()));
                    }
                }
            }));
        }
    }
    /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    detach() {
        this.disable();
        this._overlayRef = (/** @type {?} */ (null));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
class ScrollStrategyOptions {
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     * @param {?} _ngZone
     * @param {?} document
     */
    constructor(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = (/**
         * @return {?}
         */
        () => new NoopScrollStrategy());
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = (/**
         * @param {?=} config
         * @return {?}
         */
        (config) => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config));
        /**
         * Block scrolling.
         */
        this.block = (/**
         * @return {?}
         */
        () => new BlockScrollStrategy(this._viewportRuler, this._document));
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = (/**
         * @param {?=} config
         * @return {?}
         */
        (config) => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config));
        this._document = document;
    }
}
ScrollStrategyOptions.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
ScrollStrategyOptions.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
/** @nocollapse */ ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initial configuration used when creating an overlay.
 */
class OverlayConfig {
    /**
     * @param {?=} config
     */
    constructor(config) {
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.disposeOnNavigation = false;
        if (config) {
            /** @type {?} */
            const configKeys = (/** @type {?} */ (Object.keys(config)));
            for (const key of configKeys) {
                if (config[key] !== undefined) {
                    // TypeScript, as of version 3.5, sees the left-hand-side of this expression
                    // as "I don't know *which* key this is, so the only valid value is the intersection
                    // of all the posible values." In this case, that happens to be `undefined`. TypeScript
                    // is not smart enough to see that the right-hand-side is actually an access of the same
                    // exact type with the same exact key, meaning that the value type must be identical.
                    // So we use `any` to work around this.
                    this[key] = (/** @type {?} */ (config[key]));
                }
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The points of the origin element and the overlay element to connect.
 */
class ConnectionPositionPair {
    /**
     * @param {?} origin
     * @param {?} overlay
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @param {?=} panelClass
     */
    constructor(origin, overlay, offsetX, offsetY, panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
}
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 * \@docs-private
 */
class ScrollingVisibility {
}
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
class ConnectedOverlayPositionChange {
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
}
/** @nocollapse */
ConnectedOverlayPositionChange.ctorParameters = () => [
    { type: ConnectionPositionPair },
    { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/**
 * Validates whether a vertical position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` +
            `Expected "top", "bottom" or "center".`);
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` +
            `Expected "start", "end" or "center".`);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
class OverlayKeyboardDispatcher {
    /**
     * @param {?} document
     */
    constructor(document) {
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */
        this._keydownListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const overlays = this._attachedOverlays;
            for (let i = overlays.length - 1; i > -1; i--) {
                // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                // We want to target the most recent overlay, rather than trying to match where the event came
                // from, because some components might open an overlay, but keep focus on a trigger element
                // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                // because we don't want overlays that don't handle keyboard events to block the ones below
                // them that do.
                if (overlays[i]._keydownEventSubscriptions > 0) {
                    overlays[i]._keydownEvents.next(event);
                    break;
                }
            }
        });
        this._document = document;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._detach();
    }
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    add(overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef);
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    }
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    remove(overlayRef) {
        /** @type {?} */
        const index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    }
    /**
     * Detaches the global keyboard event listener.
     * @private
     * @return {?}
     */
    _detach() {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);
            this._isAttached = false;
        }
    }
}
OverlayKeyboardDispatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
OverlayKeyboardDispatcher.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
/** @nocollapse */ OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayKeyboardDispatcher],
        (/** @type {?} */ (
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Container inside which all overlays will render.
 */
class OverlayContainer {
    /**
     * @param {?} document
     */
    constructor(document) {
        this._document = document;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    }
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    getContainerElement() {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @protected
     * @return {?}
     */
    _createContainer() {
        /** @type {?} */
        const containerClass = 'cdk-overlay-container';
        /** @type {?} */
        const previousContainers = this._document.getElementsByClassName(containerClass);
        // Remove any old containers. This can happen when transitioning from the server to the client.
        for (let i = 0; i < previousContainers.length; i++) {
            (/** @type {?} */ (previousContainers[i].parentNode)).removeChild(previousContainers[i]);
        }
        /** @type {?} */
        const container = this._document.createElement('div');
        container.classList.add(containerClass);
        this._document.body.appendChild(container);
        this._containerElement = container;
    }
}
OverlayContainer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
OverlayContainer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
/** @nocollapse */ OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayContainer],
        (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
    /**
     * @param {?} _portalOutlet
     * @param {?} _host
     * @param {?} _pane
     * @param {?} _config
     * @param {?} _ngZone
     * @param {?} _keyboardDispatcher
     * @param {?} _document
     * @param {?=} _location
     */
    constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._backdropClickHandler = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this._backdropClick.next(event));
        this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const subscription = this._keydownEvents.subscribe(observer);
            this._keydownEventSubscriptions++;
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._keydownEventSubscriptions--;
            });
        }));
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Amount of subscriptions to the keydown events.
         */
        this._keydownEventSubscriptions = 0;
        if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;
            this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    /**
     * The overlay's HTML element
     * @return {?}
     */
    get overlayElement() {
        return this._pane;
    }
    /**
     * The overlay's backdrop HTML element.
     * @return {?}
     */
    get backdropElement() {
        return this._backdropElement;
    }
    /**
     * Wrapper around the panel element. Can be used for advanced
     * positioning where a wrapper with specific styling is
     * required around the overlay pane.
     * @return {?}
     */
    get hostElement() {
        return this._host;
    }
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    attach(portal) {
        /** @type {?} */
        let attachResult = this._portalOutlet.attach(portal);
        if (this._positionStrategy) {
            this._positionStrategy.attach(this);
        }
        // Update the pane element with the given configuration.
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
            this._scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // The overlay could've been detached before the zone has stabilized.
            if (this.hasAttached()) {
                this.updatePosition();
            }
        }));
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        // @breaking-change 8.0.0 remove the null check for `_location`
        // once the constructor parameter is made required.
        if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe((/**
             * @return {?}
             */
            () => this.dispose()));
        }
        return attachResult;
    }
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    detach() {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
            this._scrollStrategy.disable();
        }
        /** @type {?} */
        const detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking.
        this._keyboardDispatcher.remove(this);
        // Keeping the host element in DOM the can cause scroll jank, because it still gets
        // rendered, even though it's transparent and unclickable which is why we remove it.
        this._detachContentWhenStable();
        // Stop listening for location changes.
        this._locationChanges.unsubscribe();
        return detachmentResult;
    }
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    dispose() {
        /** @type {?} */
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this.detachBackdrop();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = (/** @type {?} */ (null));
        }
        this._previousHostParent = this._pane = (/** @type {?} */ (null));
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    }
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    hasAttached() {
        return this._portalOutlet.hasAttached();
    }
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    backdropClick() {
        return this._backdropClick.asObservable();
    }
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    attachments() {
        return this._attachments.asObservable();
    }
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    detachments() {
        return this._detachments.asObservable();
    }
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    keydownEvents() {
        return this._keydownEventsObservable;
    }
    /**
     * Gets the current overlay configuration, which is immutable.
     * @return {?}
     */
    getConfig() {
        return this._config;
    }
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    updatePosition() {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    }
    /**
     * Switches to a new position strategy and updates the overlay position.
     * @param {?} strategy
     * @return {?}
     */
    updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
            return;
        }
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
        }
    }
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    updateSize(sizeConfig) {
        this._config = Object.assign({}, this._config, sizeConfig);
        this._updateElementSize();
    }
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    setDirection(dir) {
        this._config = Object.assign({}, this._config, { direction: dir });
        this._updateElementDirection();
    }
    /**
     * Add a CSS class or an array of classes to the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    addPanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
        }
    }
    /**
     * Remove a CSS class or an array of classes from the overlay pane.
     * @param {?} classes
     * @return {?}
     */
    removePanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
        }
    }
    /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    getDirection() {
        /** @type {?} */
        const direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    }
    /**
     * Switches to a new scroll strategy.
     * @param {?} strategy
     * @return {?}
     */
    updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
            return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
        }
    }
    /**
     * Updates the text direction of the overlay panel.
     * @private
     * @return {?}
     */
    _updateElementDirection() {
        this._host.setAttribute('dir', this.getDirection());
    }
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @private
     * @return {?}
     */
    _updateElementSize() {
        if (!this._pane) {
            return;
        }
        /** @type {?} */
        const style = this._pane.style;
        style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.width);
        style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.height);
        style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minWidth);
        style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minHeight);
        style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxWidth);
        style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxHeight);
    }
    /**
     * Toggles the pointer events for the overlay pane element.
     * @private
     * @param {?} enablePointer
     * @return {?}
     */
    _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    }
    /**
     * Attaches a backdrop for this overlay.
     * @private
     * @return {?}
     */
    _attachBackdrop() {
        /** @type {?} */
        const showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        }
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        (/** @type {?} */ (this._host.parentElement)).insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', this._backdropClickHandler);
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
                    if (this._backdropElement) {
                        this._backdropElement.classList.add(showingClass);
                    }
                }));
            }));
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    }
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @private
     * @return {?}
     */
    _updateStackingOrder() {
        if (this._host.nextSibling) {
            (/** @type {?} */ (this._host.parentNode)).appendChild(this._host);
        }
    }
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    detachBackdrop() {
        /** @type {?} */
        let backdropToDetach = this._backdropElement;
        if (!backdropToDetach) {
            return;
        }
        /** @type {?} */
        let timeoutId;
        /** @type {?} */
        let finishDetach = (/**
         * @return {?}
         */
        () => {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', this._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);
                if (backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
            }
            // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.
            if (this._backdropElement == backdropToDetach) {
                this._backdropElement = null;
            }
            if (this._config.backdropClass) {
                this._toggleClasses((/** @type {?} */ (backdropToDetach)), this._config.backdropClass, false);
            }
            clearTimeout(timeoutId);
        });
        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (backdropToDetach)).addEventListener('transitionend', finishDetach);
        }));
        // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.
        backdropToDetach.style.pointerEvents = 'none';
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.
        timeoutId = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(finishDetach, 500)));
    }
    /**
     * Toggles a single CSS class or an array of classes on an element.
     * @private
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    _toggleClasses(element, cssClasses, isAdd) {
        /** @type {?} */
        const classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach((/**
         * @param {?} cssClass
         * @return {?}
         */
        cssClass => {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
        }));
    }
    /**
     * Detaches the overlay content next time the zone stabilizes.
     * @private
     * @return {?}
     */
    _detachContentWhenStable() {
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            /** @type {?} */
            const subscription = this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._attachments, this._detachments)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!this._pane || !this._host || this._pane.children.length === 0) {
                    if (this._pane && this._config.panelClass) {
                        this._toggleClasses(this._pane, this._config.panelClass, false);
                    }
                    if (this._host && this._host.parentElement) {
                        this._previousHostParent = this._host.parentElement;
                        this._previousHostParent.removeChild(this._host);
                    }
                    subscription.unsubscribe();
                }
            }));
        }));
    }
    /**
     * Disposes of a scroll strategy.
     * @private
     * @return {?}
     */
    _disposeScrollStrategy() {
        /** @type {?} */
        const scrollStrategy = this._scrollStrategy;
        if (scrollStrategy) {
            scrollStrategy.disable();
            if (scrollStrategy.detach) {
                scrollStrategy.detach();
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: refactor clipping detection into a separate thing (part of scrolling module)
// TODO: doesn't handle both flexible width and height when it has to scroll along both axis.
/**
 * Class to be added to the overlay bounding box.
 * @type {?}
 */
const boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
class FlexibleConnectedPositionStrategy {
    /**
     * @param {?} connectedTo
     * @param {?} _viewportRuler
     * @param {?} _document
     * @param {?} _platform
     * @param {?} _overlayContainer
     */
    constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */
        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */
        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */
        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */
        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */
        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */
        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this._scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */
        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */
        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */
        this._offsetY = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */
        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */
        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
    }
    /**
     * Ordered list of preferred positions, from most to least desirable.
     * @return {?}
     */
    get positions() {
        return this._preferredPositions;
    }
    /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe((/**
         * @return {?}
         */
        () => {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            this._isInitialRender = true;
            this.apply();
        }));
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    apply() {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        if (this._isDisposed || !this._platform.isBrowser) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        /** @type {?} */
        const originRect = this._originRect;
        /** @type {?} */
        const overlayRect = this._overlayRect;
        /** @type {?} */
        const viewportRect = this._viewportRect;
        // Positions where the overlay will fit with flexible dimensions.
        /** @type {?} */
        const flexibleFits = [];
        // Fallback if none of the preferred positions fit within the viewport.
        /** @type {?} */
        let fallback;
        // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.
        for (let pos of this._preferredPositions) {
            // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
            /** @type {?} */
            let originPoint = this._getOriginPoint(originRect, pos);
            // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
            // overlay in this position. We use the top-left corner for calculations and later translate
            // this into an appropriate (top, left, bottom, right) style.
            /** @type {?} */
            let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            // Calculate how well the overlay would fit into the viewport with this point.
            /** @type {?} */
            let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            // If the overlay, without any further work, fits into the viewport, use this position.
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            // If the overlay has flexible dimensions, we can use this position
            // so long as there's enough space for the minimum dimensions.
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            // If the current preferred position does not fit on the screen, remember the position
            // if it has more visible area on-screen than we've seen and move onto the next preferred
            // position.
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = { overlayFit, overlayPoint, originPoint, position: pos, overlayRect };
            }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            /** @type {?} */
            let bestFit = null;
            /** @type {?} */
            let bestScore = -1;
            for (const fit of flexibleFits) {
                /** @type {?} */
                const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                }
            }
            this._isPushed = false;
            this._applyPosition((/** @type {?} */ (bestFit)).position, (/** @type {?} */ (bestFit)).origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition((/** @type {?} */ (fallback)).position, (/** @type {?} */ (fallback)).originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition((/** @type {?} */ (fallback)).position, (/** @type {?} */ (fallback)).originPoint);
    }
    /**
     * @return {?}
     */
    detach() {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
    }
    /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        // We can't use `_resetBoundingBoxStyles` here, because it resets
        // some properties to zero, rather than removing them.
        if (this._boundingBox) {
            extendStyles(this._boundingBox.style, (/** @type {?} */ ({
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: '',
            })));
        }
        if (this._pane) {
            this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = (/** @type {?} */ (null));
        this._isDisposed = true;
    }
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    reapplyLastPosition() {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            /** @type {?} */
            const lastPosition = this._lastPosition || this._preferredPositions[0];
            /** @type {?} */
            const originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @template THIS
     * @this {THIS}
     * @param {?} scrollables
     * @return {THIS}
     */
    withScrollableContainers(scrollables) {
        (/** @type {?} */ (this))._scrollables = scrollables;
        return (/** @type {?} */ (this));
    }
    /**
     * Adds new preferred positions.
     * @template THIS
     * @this {THIS}
     * @param {?} positions List of positions options for this overlay.
     * @return {THIS}
     */
    withPositions(positions) {
        (/** @type {?} */ (this))._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf((/** @type {?} */ ((/** @type {?} */ (this))._lastPosition))) === -1) {
            (/** @type {?} */ (this))._lastPosition = null;
        }
        (/** @type {?} */ (this))._validatePositions();
        return (/** @type {?} */ (this));
    }
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @template THIS
     * @this {THIS}
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {THIS}
     */
    withViewportMargin(margin) {
        (/** @type {?} */ (this))._viewportMargin = margin;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @template THIS
     * @this {THIS}
     * @param {?=} flexibleDimensions
     * @return {THIS}
     */
    withFlexibleDimensions(flexibleDimensions = true) {
        (/** @type {?} */ (this))._hasFlexibleDimensions = flexibleDimensions;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @template THIS
     * @this {THIS}
     * @param {?=} growAfterOpen
     * @return {THIS}
     */
    withGrowAfterOpen(growAfterOpen = true) {
        (/** @type {?} */ (this))._growAfterOpen = growAfterOpen;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @template THIS
     * @this {THIS}
     * @param {?=} canPush
     * @return {THIS}
     */
    withPush(canPush = true) {
        (/** @type {?} */ (this))._canPush = canPush;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @template THIS
     * @this {THIS}
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {THIS}
     */
    withLockedPosition(isLocked = true) {
        (/** @type {?} */ (this))._positionLocked = isLocked;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Reference to the new origin.
     * @return {THIS}
     */
    setOrigin(origin) {
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the X axis.
     * @return {THIS}
     */
    withDefaultOffsetX(offset) {
        (/** @type {?} */ (this))._offsetX = offset;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the Y axis.
     * @return {THIS}
     */
    withDefaultOffsetY(offset) {
        (/** @type {?} */ (this))._offsetY = offset;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @template THIS
     * @this {THIS}
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {THIS}
     */
    withTransformOriginOn(selector) {
        (/** @type {?} */ (this))._transformOriginSelector = selector;
        return (/** @type {?} */ (this));
    }
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @private
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    _getOriginPoint(originRect, pos) {
        /** @type {?} */
        let x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            /** @type {?} */
            const startX = this._isRtl() ? originRect.right : originRect.left;
            /** @type {?} */
            const endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        /** @type {?} */
        let y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x, y };
    }
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @private
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    _getOverlayPoint(originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.
        /** @type {?} */
        let overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        /** @type {?} */
        let overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    }
    /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @private
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    _getOverlayFit(point, overlay, viewport, position) {
        let { x, y } = point;
        /** @type {?} */
        let offsetX = this._getOffset(position, 'x');
        /** @type {?} */
        let offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        // How much the overlay would overflow at this position, on each side.
        /** @type {?} */
        let leftOverflow = 0 - x;
        /** @type {?} */
        let rightOverflow = (x + overlay.width) - viewport.width;
        /** @type {?} */
        let topOverflow = 0 - y;
        /** @type {?} */
        let bottomOverflow = (y + overlay.height) - viewport.height;
        // Visible parts of the element on each axis.
        /** @type {?} */
        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        /** @type {?} */
        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        /** @type {?} */
        let visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    }
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @private
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            /** @type {?} */
            const availableHeight = viewport.bottom - point.y;
            /** @type {?} */
            const availableWidth = viewport.right - point.x;
            /** @type {?} */
            const minHeight = this._overlayRef.getConfig().minHeight;
            /** @type {?} */
            const minWidth = this._overlayRef.getConfig().minWidth;
            /** @type {?} */
            const verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            /** @type {?} */
            const horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
        return false;
    }
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @private
     * @param {?} start Starting point from which the overlay is pushed.
     * @param {?} overlay Dimensions of the overlay.
     * @param {?} scrollPosition Current viewport scroll position.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    _pushOverlayOnScreen(start, overlay, scrollPosition) {
        // If the position is locked and we've pushed the overlay already, reuse the previous push
        // amount, rather than pushing it again. If we were to continue pushing, the element would
        // remain in the viewport, which goes against the expectations when position locking is enabled.
        if (this._previousPushAmount && this._positionLocked) {
            return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
            };
        }
        /** @type {?} */
        const viewport = this._viewportRect;
        // Determine how much the overlay goes outside the viewport on each
        // side, which we'll use to decide which direction to push it.
        /** @type {?} */
        const overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        /** @type {?} */
        const overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        /** @type {?} */
        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        /** @type {?} */
        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        // Amount by which to push the overlay in each axis such that it remains on-screen.
        /** @type {?} */
        let pushX = 0;
        /** @type {?} */
        let pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = start.x < this._viewportMargin ? (viewport.left - scrollPosition.left) - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = start.y < this._viewportMargin ? (viewport.top - scrollPosition.top) - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    }
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @private
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
        }
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.
        if (this._positionChanges.observers.length) {
            /** @type {?} */
            const scrollableViewProperties = this._getScrollVisibility();
            /** @type {?} */
            const changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
            this._positionChanges.next(changeEvent);
        }
        this._isInitialRender = false;
    }
    /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @private
     * @param {?} position
     * @return {?}
     */
    _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
            return;
        }
        /** @type {?} */
        const elements = (/** @type {?} */ (this._boundingBox)).querySelectorAll(this._transformOriginSelector);
        /** @type {?} */
        let xOrigin;
        /** @type {?} */
        let yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
    }
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @private
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    _calculateBoundingBoxRect(origin, position) {
        /** @type {?} */
        const viewport = this._viewportRect;
        /** @type {?} */
        const isRtl = this._isRtl();
        /** @type {?} */
        let height;
        /** @type {?} */
        let top;
        /** @type {?} */
        let bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.
            /** @type {?} */
            const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            /** @type {?} */
            const previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        // The overlay is opening 'right-ward' (the content flows to the right).
        /** @type {?} */
        const isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        // The overlay is opening 'left-ward' (the content flows to the left).
        /** @type {?} */
        const isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        /** @type {?} */
        let width;
        /** @type {?} */
        let left;
        /** @type {?} */
        let right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.
            /** @type {?} */
            const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            /** @type {?} */
            const previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: (/** @type {?} */ (top)), left: (/** @type {?} */ (left)), bottom: (/** @type {?} */ (bottom)), right: (/** @type {?} */ (right)), width, height };
    }
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @private
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    _setBoundingBoxStyles(origin, position) {
        /** @type {?} */
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        /** @type {?} */
        const styles = (/** @type {?} */ ({}));
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = '';
            styles.width = styles.height = '100%';
        }
        else {
            /** @type {?} */
            const maxHeight = this._overlayRef.getConfig().maxHeight;
            /** @type {?} */
            const maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles((/** @type {?} */ (this._boundingBox)).style, styles);
    }
    /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @private
     * @return {?}
     */
    _resetBoundingBoxStyles() {
        extendStyles((/** @type {?} */ (this._boundingBox)).style, (/** @type {?} */ ({
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        })));
    }
    /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @private
     * @return {?}
     */
    _resetOverlayElementStyles() {
        extendStyles(this._pane.style, (/** @type {?} */ ({
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: '',
        })));
    }
    /**
     * Sets positioning styles to the overlay element.
     * @private
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    _setOverlayElementStyles(originPoint, position) {
        /** @type {?} */
        const styles = (/** @type {?} */ ({}));
        if (this._hasExactPosition()) {
            /** @type {?} */
            const scrollPosition = this._viewportRuler.getViewportScrollPosition();
            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        }
        else {
            styles.position = 'static';
        }
        // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.
        /** @type {?} */
        let transformString = '';
        /** @type {?} */
        let offsetX = this._getOffset(position, 'x');
        /** @type {?} */
        let offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += `translateX(${offsetX}px) `;
        }
        if (offsetY) {
            transformString += `translateY(${offsetY}px)`;
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
            styles.maxHeight = '';
        }
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
            styles.maxWidth = '';
        }
        extendStyles(this._pane.style, styles);
    }
    /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @private
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    _getExactOverlayY(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.
        /** @type {?} */
        let styles = (/** @type {?} */ ({ top: null, bottom: null }));
        /** @type {?} */
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        /** @type {?} */
        let virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
        // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.
        overlayPoint.y -= virtualKeyboardOffset;
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            /** @type {?} */
            const documentHeight = (/** @type {?} */ (this._document.documentElement)).clientHeight;
            styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
        }
        else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.y);
        }
        return styles;
    }
    /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @private
     * @param {?} position
     * @param {?} originPoint
     * @param {?} scrollPosition
     * @return {?}
     */
    _getExactOverlayX(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        /** @type {?} */
        let styles = (/** @type {?} */ ({ left: null, right: null }));
        /** @type {?} */
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        /** @type {?} */
        let horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            /** @type {?} */
            const documentWidth = (/** @type {?} */ (this._document.documentElement)).clientWidth;
            styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
        }
        else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.x);
        }
        return styles;
    }
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @private
     * @return {?}
     */
    _getScrollVisibility() {
        // Note: needs fresh rects since the position could've changed.
        /** @type {?} */
        const originBounds = this._getOriginRect();
        /** @type {?} */
        const overlayBounds = this._pane.getBoundingClientRect();
        // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.
        /** @type {?} */
        const scrollContainerBounds = this._scrollables.map((/**
         * @param {?} scrollable
         * @return {?}
         */
        scrollable => {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        }));
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    }
    /**
     * Subtracts the amount that an element is overflowing on an axis from its length.
     * @private
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    _subtractOverflows(length, ...overflows) {
        return overflows.reduce((/**
         * @param {?} currentValue
         * @param {?} currentOverflow
         * @return {?}
         */
        (currentValue, currentOverflow) => {
            return currentValue - Math.max(currentOverflow, 0);
        }), length);
    }
    /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @private
     * @return {?}
     */
    _getNarrowedViewportRect() {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.
        /** @type {?} */
        const width = (/** @type {?} */ (this._document.documentElement)).clientWidth;
        /** @type {?} */
        const height = (/** @type {?} */ (this._document.documentElement)).clientHeight;
        /** @type {?} */
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    }
    /**
     * Whether the we're dealing with an RTL context
     * @private
     * @return {?}
     */
    _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
    }
    /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @private
     * @return {?}
     */
    _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
    }
    /**
     * Retrieves the offset of a position along the x or y axis.
     * @private
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    _getOffset(position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    }
    /**
     * Validates that the current position match the expected values.
     * @private
     * @return {?}
     */
    _validatePositions() {
        if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        }
        // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.
        this._preferredPositions.forEach((/**
         * @param {?} pair
         * @return {?}
         */
        pair => {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
        }));
    }
    /**
     * Adds a single CSS class or an array of classes on the overlay panel.
     * @private
     * @param {?} cssClasses
     * @return {?}
     */
    _addPanelClasses(cssClasses) {
        if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            cssClass => {
                if (cssClass !== '' && this._appliedPanelClasses.indexOf(cssClass) === -1) {
                    this._appliedPanelClasses.push(cssClass);
                    this._pane.classList.add(cssClass);
                }
            }));
        }
    }
    /**
     * Clears the classes that the position strategy has applied from the overlay panel.
     * @private
     * @return {?}
     */
    _clearPanelClasses() {
        if (this._pane) {
            this._appliedPanelClasses.forEach((/**
             * @param {?} cssClass
             * @return {?}
             */
            cssClass => {
                this._pane.classList.remove(cssClass);
            }));
            this._appliedPanelClasses = [];
        }
    }
    /**
     * Returns the ClientRect of the current origin.
     * @private
     * @return {?}
     */
    _getOriginRect() {
        /** @type {?} */
        const origin = this._origin;
        if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
        }
        if (origin instanceof HTMLElement) {
            return origin.getBoundingClientRect();
        }
        /** @type {?} */
        const width = origin.width || 0;
        /** @type {?} */
        const height = origin.height || 0;
        // If the origin is a point, return a client rect as if it was a 0x0 element at the point.
        return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height,
            width
        };
    }
}
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 8.0.0
 */
class ConnectedPositionStrategy {
    /**
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?} connectedTo
     * @param {?} viewportRuler
     * @param {?} document
     * @param {?} platform
     * @param {?} overlayContainer
     */
    constructor(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer)
            .withFlexibleDimensions(false)
            .withPush(false)
            .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    get _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
    }
    /**
     * Emits an event when the connection point changes.
     * @return {?}
     */
    get onPositionChange() {
        return this._positionStrategy.positionChanges;
    }
    /**
     * Ordered list of preferred positions, from most to least desirable.
     * @return {?}
     */
    get positions() {
        return this._preferredPositions;
    }
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    }
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    dispose() {
        this._positionStrategy.dispose();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    detach() {
        this._positionStrategy.detach();
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    apply() {
        this._positionStrategy.apply();
    }
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    recalculateLastPosition() {
        this._positionStrategy.reapplyLastPosition();
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    withScrollableContainers(scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    }
    /**
     * Adds a new preferred fallback position.
     * @template THIS
     * @this {THIS}
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {THIS}
     */
    withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
        /** @type {?} */
        const position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        (/** @type {?} */ (this))._preferredPositions.push(position);
        (/** @type {?} */ (this))._positionStrategy.withPositions((/** @type {?} */ (this))._preferredPositions);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @template THIS
     * @this {THIS}
     * @param {?} dir New layout direction.
     * @return {THIS}
     */
    withDirection(dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.setDirection(dir);
        }
        else {
            (/** @type {?} */ (this))._direction = dir;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the X axis.
     * @return {THIS}
     */
    withOffsetX(offset) {
        (/** @type {?} */ (this))._positionStrategy.withDefaultOffsetX(offset);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @template THIS
     * @this {THIS}
     * @param {?} offset New offset in the Y axis.
     * @return {THIS}
     */
    withOffsetY(offset) {
        (/** @type {?} */ (this))._positionStrategy.withDefaultOffsetY(offset);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @template THIS
     * @this {THIS}
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {THIS}
     */
    withLockedPosition(isLocked) {
        (/** @type {?} */ (this))._positionStrategy.withLockedPosition(isLocked);
        return (/** @type {?} */ (this));
    }
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @template THIS
     * @this {THIS}
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {THIS}
     */
    withPositions(positions) {
        (/** @type {?} */ (this))._preferredPositions = positions.slice();
        (/** @type {?} */ (this))._positionStrategy.withPositions((/** @type {?} */ (this))._preferredPositions);
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Reference to the new origin element.
     * @return {THIS}
     */
    setOrigin(origin) {
        (/** @type {?} */ (this))._positionStrategy.setOrigin(origin);
        return (/** @type {?} */ (this));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Class to be added to the overlay pane wrapper.
 * @type {?}
 */
const wrapperClass = 'cdk-global-overlay-wrapper';
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
class GlobalPositionStrategy {
    constructor() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    attach(overlayRef) {
        /** @type {?} */
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New top offset.
     * @return {THIS}
     */
    top(value = '') {
        (/** @type {?} */ (this))._bottomOffset = '';
        (/** @type {?} */ (this))._topOffset = value;
        (/** @type {?} */ (this))._alignItems = 'flex-start';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New left offset.
     * @return {THIS}
     */
    left(value = '') {
        (/** @type {?} */ (this))._rightOffset = '';
        (/** @type {?} */ (this))._leftOffset = value;
        (/** @type {?} */ (this))._justifyContent = 'flex-start';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New bottom offset.
     * @return {THIS}
     */
    bottom(value = '') {
        (/** @type {?} */ (this))._topOffset = '';
        (/** @type {?} */ (this))._bottomOffset = value;
        (/** @type {?} */ (this))._alignItems = 'flex-end';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @template THIS
     * @this {THIS}
     * @param {?=} value New right offset.
     * @return {THIS}
     */
    right(value = '') {
        (/** @type {?} */ (this))._leftOffset = '';
        (/** @type {?} */ (this))._rightOffset = value;
        (/** @type {?} */ (this))._justifyContent = 'flex-end';
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New width for the overlay
     * @return {THIS}
     */
    width(value = '') {
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.updateSize({ width: value });
        }
        else {
            (/** @type {?} */ (this))._width = value;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 8.0.0
     * @template THIS
     * @this {THIS}
     * @param {?=} value New height for the overlay
     * @return {THIS}
     */
    height(value = '') {
        if ((/** @type {?} */ (this))._overlayRef) {
            (/** @type {?} */ (this))._overlayRef.updateSize({ height: value });
        }
        else {
            (/** @type {?} */ (this))._height = value;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {THIS}
     */
    centerHorizontally(offset = '') {
        (/** @type {?} */ (this)).left(offset);
        (/** @type {?} */ (this))._justifyContent = 'center';
        return (/** @type {?} */ (this));
    }
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @template THIS
     * @this {THIS}
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {THIS}
     */
    centerVertically(offset = '') {
        (/** @type {?} */ (this)).top(offset);
        (/** @type {?} */ (this))._alignItems = 'center';
        return (/** @type {?} */ (this));
    }
    /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    apply() {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        /** @type {?} */
        const styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        const parentStyles = this._overlayRef.hostElement.style;
        /** @type {?} */
        const config = this._overlayRef.getConfig();
        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (config.width === '100%') {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
    }
    /**
     * Cleans up the DOM changes from the position strategy.
     * \@docs-private
     * @return {?}
     */
    dispose() {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        /** @type {?} */
        const styles = this._overlayRef.overlayElement.style;
        /** @type {?} */
        const parent = this._overlayRef.hostElement;
        /** @type {?} */
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop =
            styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef = (/** @type {?} */ (null));
        this._isDisposed = true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Builder for overlay position strategy.
 */
class OverlayPositionBuilder {
    /**
     * @param {?} _viewportRuler
     * @param {?} _document
     * @param {?} _platform
     * @param {?} _overlayContainer
     */
    constructor(_viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
    }
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    global() {
        return new GlobalPositionStrategy();
    }
    /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@breaking-change 8.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    connectedTo(elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    }
    /**
     * Creates a flexible position strategy.
     * @param {?} origin Origin relative to which to position the overlay.
     * @return {?}
     */
    flexibleConnectedTo(origin) {
        return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    }
}
OverlayPositionBuilder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
OverlayPositionBuilder.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: OverlayContainer }
];
/** @nocollapse */ OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(OverlayContainer)); }, token: OverlayPositionBuilder, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Next overlay unique ID.
 * @type {?}
 */
let nextUniqueId = 0;
// Note that Overlay is *not* scoped to the app root because the ComponentFactoryResolver
// it needs is different based on where OverlayModule is imported.
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
class Overlay {
    /**
     * @param {?} scrollStrategies
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _positionBuilder
     * @param {?} _keyboardDispatcher
     * @param {?} _injector
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?} _directionality
     * @param {?=} _location
     */
    constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
    }
    /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    create(config) {
        /** @type {?} */
        const host = this._createHostElement();
        /** @type {?} */
        const pane = this._createPaneElement(host);
        /** @type {?} */
        const portalOutlet = this._createPortalOutlet(pane);
        /** @type {?} */
        const overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
    }
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    position() {
        return this._positionBuilder;
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    _createPaneElement(host) {
        /** @type {?} */
        const pane = this._document.createElement('div');
        pane.id = `cdk-overlay-${nextUniqueId++}`;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    }
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @private
     * @return {?} Newly-create host element.
     */
    _createHostElement() {
        /** @type {?} */
        const host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    }
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    _createPortalOutlet(pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]);
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
    }
}
Overlay.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"] },
];
/** @nocollapse */
Overlay.ctorParameters = () => [
    { type: ScrollStrategyOptions },
    { type: OverlayContainer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] },
    { type: OverlayPositionBuilder },
    { type: OverlayKeyboardDispatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 * @type {?}
 */
const defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/**
 * Injection token that determines the scroll handling while the connected overlay is open.
 * @type {?}
 */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
class CdkOverlayOrigin {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
CdkOverlayOrigin.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                exportAs: 'cdkOverlayOrigin',
            },] },
];
/** @nocollapse */
CdkOverlayOrigin.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
class CdkConnectedOverlay {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    /**
     * @param {?} _overlay
     * @param {?} templateRef
     * @param {?} viewContainerRef
     * @param {?} scrollStrategyFactory
     * @param {?} _dir
     */
    constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */
        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */
        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
    }
    /**
     * The offset in pixels for the overlay connection point on the x-axis
     * @return {?}
     */
    get offsetX() { return this._offsetX; }
    /**
     * @param {?} offsetX
     * @return {?}
     */
    set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
            this._updatePositionStrategy(this._position);
        }
    }
    /**
     * The offset in pixels for the overlay connection point on the y-axis
     * @return {?}
     */
    get offsetY() { return this._offsetY; }
    /**
     * @param {?} offsetY
     * @return {?}
     */
    set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
            this._updatePositionStrategy(this._position);
        }
    }
    /**
     * Whether or not the overlay should attach a backdrop.
     * @return {?}
     */
    get hasBackdrop() { return this._hasBackdrop; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasBackdrop(value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * Whether or not the overlay should be locked when scrolling.
     * @return {?}
     */
    get lockPosition() { return this._lockPosition; }
    /**
     * @param {?} value
     * @return {?}
     */
    set lockPosition(value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * Whether the overlay's width and height can be constrained to fit within the viewport.
     * @return {?}
     */
    get flexibleDimensions() { return this._flexibleDimensions; }
    /**
     * @param {?} value
     * @return {?}
     */
    set flexibleDimensions(value) {
        this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the overlay can grow after the initial open when flexible positioning is turned on.
     * @return {?}
     */
    get growAfterOpen() { return this._growAfterOpen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set growAfterOpen(value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * Whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @return {?}
     */
    get push() { return this._push; }
    /**
     * @param {?} value
     * @return {?}
     */
    set push(value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value); }
    /**
     * The associated overlay reference.
     * @return {?}
     */
    get overlayRef() {
        return this._overlayRef;
    }
    /**
     * The element's layout direction.
     * @return {?}
     */
    get dir() {
        return this._dir ? this._dir.value : 'ltr';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this._position) {
            this._updatePositionStrategy(this._position);
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
            if (changes['origin'] && this.open) {
                this._position.apply();
            }
        }
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    }
    /**
     * Creates an overlay
     * @private
     * @return {?}
     */
    _createOverlay() {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
        this._overlayRef.keydownEvents().subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.overlayKeydown.next(event);
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
                event.preventDefault();
                this._detachOverlay();
            }
        }));
    }
    /**
     * Builds the overlay config based on the directive's inputs
     * @private
     * @return {?}
     */
    _buildConfig() {
        /** @type {?} */
        const positionStrategy = this._position = this._createPositionStrategy();
        /** @type {?} */
        const overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
    }
    /**
     * Updates the state of a position strategy, based on the values of the directive inputs.
     * @private
     * @param {?} positionStrategy
     * @return {?}
     */
    _updatePositionStrategy(positionStrategy) {
        /** @type {?} */
        const positions = this.positions.map((/**
         * @param {?} currentPosition
         * @return {?}
         */
        currentPosition => ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || this.offsetX,
            offsetY: currentPosition.offsetY || this.offsetY,
            panelClass: currentPosition.panelClass || undefined,
        })));
        return positionStrategy
            .setOrigin(this.origin.elementRef)
            .withPositions(positions)
            .withFlexibleDimensions(this.flexibleDimensions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition);
    }
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @private
     * @return {?}
     */
    _createPositionStrategy() {
        /** @type {?} */
        const strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);
        this._updatePositionStrategy(strategy);
        strategy.positionChanges.subscribe((/**
         * @param {?} p
         * @return {?}
         */
        p => this.positionChange.emit(p)));
        return strategy;
    }
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    _attachOverlay() {
        if (!this._overlayRef) {
            this._createOverlay();
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                this.backdropClick.emit(event);
            }));
        }
        else {
            this._backdropSubscription.unsubscribe();
        }
    }
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @private
     * @return {?}
     */
    _detachOverlay() {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    }
}
CdkConnectedOverlay.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                exportAs: 'cdkConnectedOverlay'
            },] },
];
/** @nocollapse */
CdkConnectedOverlay.ctorParameters = () => [
    { type: Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkConnectedOverlay.propDecorators = {
    origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOrigin',] }],
    positions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPositions',] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetX',] }],
    offsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOffsetY',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayWidth',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHeight',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinWidth',] }],
    minHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayMinHeight',] }],
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayBackdropClass',] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPanelClass',] }],
    viewportMargin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayViewportMargin',] }],
    scrollStrategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayOpen',] }],
    hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] }],
    lockPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayLockPosition',] }],
    flexibleDimensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayFlexibleDimensions',] }],
    growAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayGrowAfterOpen',] }],
    push: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkConnectedOverlayPush',] }],
    backdropClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    positionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    attach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    detach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    overlayKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition());
}
/**
 * \@docs-private
 * @type {?}
 */
const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OverlayModule {
}
OverlayModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
                declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                providers: [
                    Overlay,
                    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                ],
            },] },
];
/**
 * @deprecated Use `OverlayModule` instead.
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
const OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"],
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
class FullscreenOverlayContainer extends OverlayContainer {
    /**
     * @param {?} _document
     */
    constructor(_document) {
        super(_document);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _createContainer() {
        super._createContainer();
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener((/**
         * @return {?}
         */
        () => this._adjustParentForFullscreenChange()));
    }
    /**
     * @private
     * @return {?}
     */
    _adjustParentForFullscreenChange() {
        if (!this._containerElement) {
            return;
        }
        /** @type {?} */
        const fullscreenElement = this.getFullscreenElement();
        /** @type {?} */
        const parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
    }
    /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    _addFullscreenChangeListener(fn) {
        /** @type {?} */
        const eventName = this._getEventName();
        if (eventName) {
            if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
            }
            this._document.addEventListener(eventName, fn);
            this._fullScreenListener = fn;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getEventName() {
        if (!this._fullScreenEventName) {
            /** @type {?} */
            const _document = (/** @type {?} */ (this._document));
            if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
            }
            else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
            }
            else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
            }
            else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
            }
        }
        return this._fullScreenEventName;
    }
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    getFullscreenElement() {
        /** @type {?} */
        const _document = (/** @type {?} */ (this._document));
        return _document.fullscreenElement ||
            _document.webkitFullscreenElement ||
            _document.mozFullScreenElement ||
            _document.msFullscreenElement ||
            null;
    }
}
FullscreenOverlayContainer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
FullscreenOverlayContainer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
/** @nocollapse */ FullscreenOverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({ factory: function FullscreenOverlayContainer_Factory() { return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: FullscreenOverlayContainer, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=overlay.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/scrolling.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/scrolling.js ***!
  \********************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
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
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
const VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
class FixedSizeVirtualScrollStrategy {
    /**
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    constructor(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    }
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onContentScrolled() {
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onContentRendered() { }
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    onRenderedOffsetChanged() { }
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    scrollToIndex(index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    }
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    _updateTotalContentSize() {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    }
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    _updateRenderedRange() {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        const scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        const firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        const renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        const viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        const dataLength = this._viewport.getDataLength();
        /** @type {?} */
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    }
}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
class CdkFixedSizeVirtualScroll {
    constructor() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    /**
     * The size of the items in the list (in pixels).
     * @return {?}
     */
    get itemSize() { return this._itemSize; }
    /**
     * @param {?} value
     * @return {?}
     */
    set itemSize(value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); }
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     * @return {?}
     */
    get minBufferPx() { return this._minBufferPx; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minBufferPx(value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); }
    /**
     * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
     * @return {?}
     */
    get maxBufferPx() { return this._maxBufferPx; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxBufferPx(value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
}
CdkFixedSizeVirtualScroll.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'cdk-virtual-scroll-viewport[itemSize]',
                providers: [{
                        provide: VIRTUAL_SCROLL_STRATEGY,
                        useFactory: _fixedSizeVirtualScrollStrategyFactory,
                        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            () => CdkFixedSizeVirtualScroll))],
                    }],
            },] },
];
CdkFixedSizeVirtualScroll.propDecorators = {
    itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
class ScrollDispatcher {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     */
    constructor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next(scrollable))));
        }
    }
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    deregister(scrollable) {
        /** @type {?} */
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    }
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            if (!this._globalSubscription) {
                this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            const subscription = auditTimeInMs > 0 ?
                this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                this._scrolled.subscribe(observer);
            this._scrolledCount++;
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._scrolledCount--;
                if (!this._scrolledCount) {
                    this._removeGlobalListener();
                }
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeGlobalListener();
        this.scrollContainers.forEach((/**
         * @param {?} _
         * @param {?} container
         * @return {?}
         */
        (_, container) => this.deregister(container)));
        this._scrolled.complete();
    }
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ancestorScrolled(elementRef, auditTimeInMs) {
        /** @type {?} */
        const ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} target
         * @return {?}
         */
        target => {
            return !target || ancestors.indexOf(target) > -1;
        })));
    }
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    getAncestorScrollContainers(elementRef) {
        /** @type {?} */
        const scrollingContainers = [];
        this.scrollContainers.forEach((/**
         * @param {?} _subscription
         * @param {?} scrollable
         * @return {?}
         */
        (_subscription, scrollable) => {
            if (this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        }));
        return scrollingContainers;
    }
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    _scrollableContainsElement(scrollable, elementRef) {
        /** @type {?} */
        let element = elementRef.nativeElement;
        /** @type {?} */
        let scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    }
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe((/**
             * @return {?}
             */
            () => this._scrolled.next()));
        }));
    }
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    }
}
ScrollDispatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
ScrollDispatcher.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
/** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
class CdkScrollable {
    /**
     * @param {?} elementRef
     * @param {?} scrollDispatcher
     * @param {?} ngZone
     * @param {?=} dir
     */
    constructor(elementRef, scrollDispatcher, ngZone, dir) {
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe(observer)))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.scrollDispatcher.register(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    elementScrolled() {
        return this._elementScrolled;
    }
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    scrollTo(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
        options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            ((/** @type {?} */ (options))).top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
            if (options.left != null) {
                ((/** @type {?} */ (options))).right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                options.left = options.right;
            }
            else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                ((/** @type {?} */ (options))).left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _applyScrollToOptions(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    }
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    measureScrollOffset(from) {
        /** @type {?} */
        const LEFT = 'left';
        /** @type {?} */
        const RIGHT = 'right';
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    }
}
CdkScrollable.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdk-scrollable], [cdkScrollable]'
            },] },
];
/** @nocollapse */
CdkScrollable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: ScrollDispatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
/**
 * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
 */
class CdkVirtualScrollViewport extends CdkScrollable {
    /**
     * @param {?} elementRef
     * @param {?} _changeDetectorRef
     * @param {?} ngZone
     * @param {?} _scrollStrategy
     * @param {?} dir
     * @param {?} scrollDispatcher
     */
    constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        super(elementRef, scrollDispatcher, ngZone, dir);
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */
        this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => this._scrollStrategy.scrolledIndexChange.subscribe((/**
         * @param {?} index
         * @return {?}
         */
        index => Promise.resolve().then((/**
         * @return {?}
         */
        () => this.ngZone.run((/**
         * @return {?}
         */
        () => observer.next(index)))))))));
        /**
         * A stream that emits whenever the rendered range changes.
         */
        this.renderedRangeStream = this._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        this._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */
        this._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */
        this._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */
        this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        this._runAfterChangeDetection = [];
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
    }
    /**
     * The direction the viewport scrolls.
     * @return {?}
     */
    get orientation() {
        return this._orientation;
    }
    /**
     * @param {?} orientation
     * @return {?}
     */
    set orientation(orientation) {
        if (this._orientation !== orientation) {
            this._orientation = orientation;
            this._calculateSpacerSize();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._measureViewportSize();
            this._scrollStrategy.attach(this);
            this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @return {?}
             */
            () => this._scrollStrategy.onContentScrolled()));
            this._markChangeDetectionNeeded();
        }))));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        super.ngOnDestroy();
    }
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    attach(forOf) {
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._forOf = forOf;
            this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._detachedSubject)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                /** @type {?} */
                const newLength = data.length;
                if (newLength !== this._dataLength) {
                    this._dataLength = newLength;
                    this._scrollStrategy.onDataLengthChanged();
                }
                this._doChangeDetection();
            }));
        }));
    }
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    detach() {
        this._forOf = null;
        this._detachedSubject.next();
    }
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    getDataLength() {
        return this._dataLength;
    }
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    getViewportSize() {
        return this._viewportSize;
    }
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    getRenderedRange() {
        return this._renderedRange;
    }
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            this._calculateSpacerSize();
            this._markChangeDetectionNeeded();
        }
    }
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            () => this._scrollStrategy.onContentRendered()));
        }
    }
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    }
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    setRenderedContentOffset(offset, to = 'to-start') {
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        const isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        const axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += ` translate${axis}(-100%)`;
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            () => {
                if (this._renderedContentOffsetNeedsRewrite) {
                    this._renderedContentOffset -= this.measureRenderedContentSize();
                    this._renderedContentOffsetNeedsRewrite = false;
                    this.setRenderedContentOffset(this._renderedContentOffset);
                }
                else {
                    this._scrollStrategy.onRenderedOffsetChanged();
                }
            }));
        }
    }
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    scrollToOffset(offset, behavior = 'auto') {
        /** @type {?} */
        const options = { behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    }
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    scrollToIndex(index, behavior = 'auto') {
        this._scrollStrategy.scrollToIndex(index, behavior);
    }
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    measureScrollOffset(from) {
        return super.measureScrollOffset(from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    }
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    measureRenderedContentSize() {
        /** @type {?} */
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    }
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    measureRangeSize(range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    }
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    checkViewportSize() {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    }
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    _measureViewportSize() {
        /** @type {?} */
        const viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    }
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this._doChangeDetection();
            }))));
        }
    }
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    _doChangeDetection() {
        this._isChangeDetectionPending = false;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run((/**
         * @return {?}
         */
        () => this._changeDetectorRef.markForCheck()));
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        /** @type {?} */
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
            fn();
        }
    }
    /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */
    _calculateSpacerSize() {
        this._totalContentHeight =
            this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
        this._totalContentWidth =
            this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
    }
}
CdkVirtualScrollViewport.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-virtual-scroll-viewport',
                template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
                styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
                host: {
                    'class': 'cdk-virtual-scroll-viewport',
                    '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                    '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [{
                        provide: CdkScrollable,
                        useExisting: CdkVirtualScrollViewport,
                    }]
            },] },
];
/** @nocollapse */
CdkVirtualScrollViewport.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: ScrollDispatcher }
];
CdkVirtualScrollViewport.propDecorators = {
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper', { static: true },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    const el = (/** @type {?} */ (node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    const rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
class CdkVirtualForOf {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _template
     * @param {?} _differs
     * @param {?} _viewport
     * @param {?} ngZone
     */
    constructor(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */
        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
        // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([prev, cur]) => this._changeDataSource(prev, cur))), 
        // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */
        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this._data = data;
            this._onRenderedDataChange();
        }));
        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe((/**
         * @param {?} range
         * @return {?}
         */
        range => {
            this._renderedRange = range;
            ngZone.run((/**
             * @return {?}
             */
            () => this.viewChange.next(this._renderedRange)));
            this._onRenderedDataChange();
        }));
        this._viewport.attach(this);
    }
    /**
     * The DataSource to display.
     * @return {?}
     */
    get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        /** @type {?} */
        const ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["isDataSource"])(value) ? value :
            // Slice the value if its an NgIterable to ensure we're working with an array.
            new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
        this._dataSourceChanges.next(ds);
    }
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     * @return {?}
     */
    get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ?
            (/**
             * @param {?} index
             * @param {?} item
             * @return {?}
             */
            (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item)) :
            undefined;
    }
    /**
     * The template used to stamp out new elements.
     * @param {?} value
     * @return {?}
     */
    set cdkVirtualForTemplate(value) {
        if (value) {
            this._needsUpdate = true;
            this._template = value;
        }
    }
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        // The index into the list of rendered views for the first item in the range.
        /** @type {?} */
        const renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        /** @type {?} */
        const rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        /** @type {?} */
        let totalSize = 0;
        /** @type {?} */
        let i = rangeLen;
        while (i--) {
            /** @type {?} */
            const view = (/** @type {?} */ (this._viewContainerRef.get(i + renderedStartIndex)));
            /** @type {?} */
            let j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, (/** @type {?} */ (view)).rootNodes[j]);
            }
        }
        return totalSize;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            /** @type {?} */
            const changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        for (let view of this._templateCache) {
            view.destroy();
        }
    }
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    _onRenderedDataChange() {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    }
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    _changeDataSource(oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
    }
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    _updateContext() {
        /** @type {?} */
        const count = this._data.length;
        /** @type {?} */
        let i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            let view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    }
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    _applyChanges(changes) {
        // Rearrange the views to put them in the right location.
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} adjustedPreviousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (record, adjustedPreviousIndex, currentIndex) => {
            if (record.previousIndex == null) { // Item added.
                // Item added.
                /** @type {?} */
                const view = this._insertViewForNewItem((/** @type {?} */ (currentIndex)));
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                this._cacheView(this._detachView((/** @type {?} */ (adjustedPreviousIndex))));
            }
            else { // Item moved.
                // Item moved.
                /** @type {?} */
                const view = (/** @type {?} */ (this._viewContainerRef.get((/** @type {?} */ (adjustedPreviousIndex)))));
                this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        }));
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            /** @type {?} */
            const view = (/** @type {?} */ (this._viewContainerRef.get((/** @type {?} */ (record.currentIndex)))));
            view.context.$implicit = record.item;
        }));
        // Update the context variables on all items.
        /** @type {?} */
        const count = this._data.length;
        /** @type {?} */
        let i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            const view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    }
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    _cacheView(view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            /** @type {?} */
            const index = this._viewContainerRef.indexOf(view);
            // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                this._viewContainerRef.remove(index);
            }
        }
    }
    /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    _insertViewForNewItem(index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    }
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    }
    /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    _createEmbeddedViewAt(index) {
        // Note that it's important that we insert the item directly at the proper index,
        // rather than inserting it and the moving it in place, because if there's a directive
        // on the same node that injects the `ViewContainerRef`, Angular will insert another
        // comment node which can throw off the move when it's being repeated for all items.
        return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: (/** @type {?} */ (null)),
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        }, index);
    }
    /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    _insertViewFromCache(index) {
        /** @type {?} */
        const cachedView = this._templateCache.pop();
        if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    }
    /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    _detachView(index) {
        return (/** @type {?} */ (this._viewContainerRef.detach(index)));
    }
}
CdkVirtualForOf.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[cdkVirtualFor][cdkVirtualForOf]',
            },] },
];
/** @nocollapse */
CdkVirtualForOf.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
    { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CdkVirtualForOf.propDecorators = {
    cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollingModule {
}
ScrollingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
                exports: [
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                    CdkFixedSizeVirtualScroll,
                    CdkScrollable,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ],
                declarations: [
                    CdkFixedSizeVirtualScroll,
                    CdkScrollable,
                    CdkVirtualForOf,
                    CdkVirtualScrollViewport,
                ],
            },] },
];
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */
class ScrollDispatchModule {
}
ScrollDispatchModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [ScrollingModule],
                exports: [ScrollingModule],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
const DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
class ViewportRuler {
    /**
     * @param {?} _platform
     * @param {?} ngZone
     */
    constructor(_platform, ngZone) {
        this._platform = _platform;
        ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._change = _platform.isBrowser ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            this._invalidateCache = this.change().subscribe((/**
             * @return {?}
             */
            () => this._updateViewportSize()));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._invalidateCache.unsubscribe();
    }
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    getViewportSize() {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        /** @type {?} */
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = (/** @type {?} */ (null));
        }
        return output;
    }
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    getViewportRect() {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        /** @type {?} */
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height,
            width,
        };
    }
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    getViewportScrollPosition() {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        /** @type {?} */
        const documentElement = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        const documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        const top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        /** @type {?} */
        const left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top, left };
    }
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    }
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    _updateViewportSize() {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    }
}
ViewportRuler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
ViewportRuler.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=scrolling.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/core.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/core.js ***!
  \********************************************************/
/*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return AnimationDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return MatCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return MATERIAL_SANITY_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return mixinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return mixinDisableRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return mixinTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return mixinErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return mixinInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return NativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return MatNativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return MAT_DATE_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return MAT_DATE_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function() { return MAT_DATE_LOCALE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return MAT_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return NativeDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return MAT_NATIVE_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return ShowOnDirtyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return ErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function() { return MAT_HAMMER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return GestureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return setLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return MatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineSetter", function() { return MatLineSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return MatLineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return MatOptionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _countGroupLabelsBeforeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _getOptionScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return MatOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return MAT_OPTION_PARENT_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function() { return MAT_LABEL_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return MatRippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return MAT_RIPPLE_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return MatRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleState", function() { return RippleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return RippleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return defaultRippleAnimationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return RippleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return MatPseudoCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JAN", function() { return JAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEB", function() { return FEB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAR", function() { return MAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APR", function() { return APR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAY", function() { return MAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUN", function() { return JUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUL", function() { return JUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUG", function() { return AUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEP", function() { return SEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCT", function() { return OCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOV", function() { return NOV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEC", function() { return DEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return MATERIAL_SANITY_CHECKS_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk */ "./node_modules/@angular/cdk/esm2015/cdk.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
 * Current version of Angular Material.
 * @type {?}
 */
const VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 */
class AnimationCurves {
}
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/**
 * \@docs-private
 */
class AnimationDurations {
}
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
/** @type {?} */
const VERSION$2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
/**
 * \@docs-private
 * @return {?}
 */
function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @type {?}
 */
const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
class MatCommonModule {
    /**
     * @param {?} _sanityChecksEnabled
     * @param {?=} _hammerLoader
     */
    constructor(_sanityChecksEnabled, _hammerLoader) {
        this._sanityChecksEnabled = _sanityChecksEnabled;
        this._hammerLoader = _hammerLoader;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        /**
         * Whether we've already checked for HammerJs availability.
         */
        this._hasCheckedHammer = false;
        /**
         * Reference to the global `document` object.
         */
        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */
        this._window = typeof window === 'object' && window ? window : null;
        if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();
            this._checkThemeIsPresent();
            this._checkCdkVersionMatch();
            this._hasDoneGlobalChecks = true;
        }
    }
    /**
     * Whether any sanity checks are enabled
     * @private
     * @return {?}
     */
    _areChecksEnabled() {
        return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
    }
    /**
     * Whether the code is running in tests.
     * @private
     * @return {?}
     */
    _isTestEnv() {
        /** @type {?} */
        const window = (/** @type {?} */ (this._window));
        return window && (window.__karma__ || window.jasmine);
    }
    /**
     * @private
     * @return {?}
     */
    _checkDoctypeIsDefined() {
        if (this._document && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkThemeIsPresent() {
        // We need to assert that the `body` is defined, because these checks run very early
        // and the `body` won't be defined if the consumer put their scripts in the `head`.
        if (!this._document || !this._document.body || typeof getComputedStyle !== 'function') {
            return;
        }
        /** @type {?} */
        const testElement = this._document.createElement('div');
        testElement.classList.add('mat-theme-loaded-marker');
        this._document.body.appendChild(testElement);
        /** @type {?} */
        const computedStyle = getComputedStyle(testElement);
        // In some situations the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' +
                'components may not work as expected. For more info refer ' +
                'to the theming guide: https://material.angular.io/guide/theming');
        }
        this._document.body.removeChild(testElement);
    }
    /**
     * Checks whether the material version matches the cdk version
     * @private
     * @return {?}
     */
    _checkCdkVersionMatch() {
        if (VERSION$2.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$2.full + ') does not match ' +
                'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' +
                'Please ensure the versions of these two packages exactly match.');
        }
    }
    /**
     * Checks whether HammerJS is available.
     * @return {?}
     */
    _checkHammerIsAvailable() {
        if (this._hasCheckedHammer || !this._window) {
            return;
        }
        if (this._areChecksEnabled() && !((/** @type {?} */ (this._window)))['Hammer'] && !this._hammerLoader) {
            console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
        }
        this._hasCheckedHammer = true;
    }
}
MatCommonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
                exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            },] },
];
/** @nocollapse */
MatCommonModule.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MATERIAL_SANITY_CHECKS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        /**
         * @return {?}
         */
        get disabled() { return this._disabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `color` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultColor
 * @return {?}
 */
function mixinColor(base, defaultColor) {
    return class extends base {
        /**
         * @return {?}
         */
        get color() { return this._color; }
        /**
         * @param {?} value
         * @return {?}
         */
        set color(value) {
            /** @type {?} */
            const colorPalette = value || defaultColor;
            if (colorPalette !== this._color) {
                if (this._color) {
                    this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
                }
                if (colorPalette) {
                    this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
                }
                this._color = colorPalette;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            // Set the default color that can be specified from the mixin.
            this.color = defaultColor;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disableRipple` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */
        get disableRipple() { return this._disableRipple; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `tabIndex` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultTabIndex
 * @return {?}
 */
function mixinTabIndex(base, defaultTabIndex = 0) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._tabIndex = defaultTabIndex;
        }
        /**
         * @return {?}
         */
        get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
        /**
         * @param {?} value
         * @return {?}
         */
        set tabIndex(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : defaultTabIndex;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinErrorState(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether the component is in an error state.
             */
            this.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        /**
         * @return {?}
         */
        updateErrorState() {
            /** @type {?} */
            const oldState = this.errorState;
            /** @type {?} */
            const parent = this._parentFormGroup || this._parentForm;
            /** @type {?} */
            const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            /** @type {?} */
            const control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
            /** @type {?} */
            const newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinInitialized(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether this directive has been marked as initialized.
             */
            this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((/**
             * @param {?} subscriber
             * @return {?}
             */
            subscriber => {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (this._isInitialized) {
                    this._notifySubscriber(subscriber);
                }
                else {
                    (/** @type {?} */ (this._pendingSubscribers)).push(subscriber);
                }
            }));
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */
        _markInitialized() {
            if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true;
            (/** @type {?} */ (this._pendingSubscribers)).forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        }
        /**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */
        _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken for datepicker that can be used to override default locale code.
 * @type {?}
 */
const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
    providedIn: 'root',
    factory: MAT_DATE_LOCALE_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_DATE_LOCALE_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
}
/**
 * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
 * If you are importing and providing this in your code you can simply remove it.
 * @deprecated
 * \@breaking-change 8.0.0
 * @type {?}
 */
const MAT_DATE_LOCALE_PROVIDER = { provide: MAT_DATE_LOCALE, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"] };
/**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 * @template D
 */
class DateAdapter {
    constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * A stream that emits when the locale changes.
     * @return {?}
     */
    get localeChanges() { return this._localeChanges; }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    }
    /**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     * @return {?} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    sameDate(first, second) {
        if (first && second) {
            /** @type {?} */
            let firstValid = this.isValid(first);
            /** @type {?} */
            let secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(mmalerba): Remove when we no longer support safari 9.
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */
let SUPPORTS_INTL_API;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    SUPPORTS_INTL_API = typeof Intl != 'undefined';
}
catch (_a) {
    SUPPORTS_INTL_API = false;
}
/**
 * The default month names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
const ɵ0 = /**
 * @param {?} i
 * @return {?}
 */
i => String(i + 1);
/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DATE_NAMES = range(31, (ɵ0));
/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 * @type {?}
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
class NativeDateAdapter extends DateAdapter {
    /**
     * @param {?} matDateLocale
     * @param {?} platform
     */
    constructor(matDateLocale, platform) {
        super();
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */
        this.useUtcForDisplay = true;
        super.setLocale(matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return date.getMonth();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return date.getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1)))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    /**
     * @return {?}
     */
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DATE_NAMES;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return new Date(date.getTime());
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    createDate(year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        /** @type {?} */
        let result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @return {?}
     */
    today() {
        return new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object.assign({}, displayFormat, { timeZone: 'utc' });
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        /** @type {?} */
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                let date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return !isNaN(date.getTime());
    }
    /**
     * @return {?}
     */
    invalid() {
        return new Date(NaN);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    _createDateWithOverflow(year, month, date) {
        /** @type {?} */
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
    /**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    _2digit(n) {
        return ('00' + n).slice(-2);
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
        /** @type {?} */
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    }
}
NativeDateAdapter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
NativeDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATE_LOCALE,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
const MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NativeDateModule {
}
NativeDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
                providers: [
                    { provide: DateAdapter, useClass: NativeDateAdapter },
                ],
            },] },
];
const ɵ0$1 = MAT_NATIVE_DATE_FORMATS;
class MatNativeDateModule {
}
MatNativeDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [NativeDateModule],
                providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error state matcher that matches when a control is invalid and dirty.
 */
class ShowOnDirtyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    }
}
ShowOnDirtyErrorStateMatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * Provider that defines how form controls behave with regards to displaying error messages.
 */
class ErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    }
}
ErrorStateMatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @type {?}
 */
const MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
/** @type {?} */
const ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = [
    'longpress',
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft'
];
const ɵ0$2 = /**
 * @return {?}
 */
() => { }, ɵ1 = /**
 * @return {?}
 */
() => { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 * @type {?}
 */
const noopHammerInstance = {
    on: (ɵ0$2),
    off: (ɵ1),
};
/**
 * Adjusts configuration of our gesture library, Hammer.
 */
class GestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    /**
     * @param {?=} _hammerOptions
     * @param {?=} commonModule
     */
    constructor(_hammerOptions, commonModule) {
        super();
        this._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */
        this.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
        if (commonModule) {
            commonModule._checkHammerIsAvailable();
        }
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
        }
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || undefined);
        // Default Hammer Recognizers.
        /** @type {?} */
        const pan = new hammer.Pan();
        /** @type {?} */
        const swipe = new hammer.Swipe();
        /** @type {?} */
        const press = new hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        /** @type {?} */
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        /** @type {?} */
        const longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Since the slide event threshold is set to zero, the slide recognizer can fire and
        // accidentally reset the longpress recognizer. In order to make sure that the two
        // recognizers can run simultaneously but don't affect each other, we allow the slide
        // recognizer to recognize while a longpress is being processed.
        // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124
        longpress.recognizeWith(slide);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return (/** @type {?} */ (mc));
    }
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @private
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    _createRecognizer(base, options, ...inheritances) {
        /** @type {?} */
        let recognizer = new ((/** @type {?} */ (base.constructor)))(options);
        inheritances.push(base);
        inheritances.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => recognizer.recognizeWith(item)));
        return recognizer;
    }
}
GestureConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
GestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_HAMMER_OPTIONS,] }] },
    { type: MatCommonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
class MatLine {
}
MatLine.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mat-line], [matLine]',
                host: { 'class': 'mat-line' }
            },] },
];
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @param {?} lines
 * @param {?} element
 * @return {?}
 */
function setLines(lines, element) {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe((/**
     * @param {?} __0
     * @return {?}
     */
    ({ length }) => {
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);
        if (length === 2 || length === 3) {
            setClass(element, `mat-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `mat-multi-line`, true);
        }
    }));
}
/**
 * Adds or removes a class from an element.
 * @param {?} element
 * @param {?} className
 * @param {?} isAdd
 * @return {?}
 */
function setClass(element, className, isAdd) {
    /** @type {?} */
    const classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @deprecated Use `setLines` instead.
 * \@breaking-change 8.0.0
 */
class MatLineSetter {
    /**
     * @param {?} lines
     * @param {?} element
     */
    constructor(lines, element) {
        setLines(lines, element);
    }
}
class MatLineModule {
}
MatLineModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatCommonModule],
                exports: [MatLine, MatCommonModule],
                declarations: [MatLine],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
const RippleState = {
    FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3,
};
RippleState[RippleState.FADING_IN] = 'FADING_IN';
RippleState[RippleState.VISIBLE] = 'VISIBLE';
RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
RippleState[RippleState.HIDDEN] = 'HIDDEN';
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
    /**
     * @param {?} _renderer
     * @param {?} element
     * @param {?} config
     */
    constructor(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */
        this.state = RippleState.HIDDEN;
    }
    /**
     * Fades out the ripple element.
     * @return {?}
     */
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 * @type {?}
 */
const defaultRippleAnimationConfig = {
    enterDuration: 450,
    exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 * @type {?}
 */
const ignoreMouseEventsTimeout = 800;
/**
 * Options that apply to all the event listeners that are bound by the ripple renderer.
 * @type {?}
 */
const passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * \@docs-private
 */
class RippleRenderer {
    /**
     * @param {?} _target
     * @param {?} _ngZone
     * @param {?} elementOrElementRef
     * @param {?} platform
     */
    constructor(_target, _ngZone, elementOrElementRef, platform) {
        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */
        this._isPointerDown = false;
        /**
         * Events to be registered on the trigger element.
         */
        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */
        this._activeRipples = new Set();
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         */
        this._onMousedown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.
            /** @type {?} */
            const isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
            /** @type {?} */
            const isSyntheticEvent = this._lastTouchStartEvent &&
                Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
            if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
                this._isPointerDown = true;
                this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
            }
        });
        /**
         * Function being called whenever the trigger is being pressed using touch.
         */
        this._onTouchStart = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!this._target.rippleDisabled) {
                // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
                // events will launch a second ripple if we don't ignore mouse events for a specific
                // time after a touchstart event.
                this._lastTouchStartEvent = Date.now();
                this._isPointerDown = true;
                // Use `changedTouches` so we skip any touches where the user put
                // their finger down, but used another finger to tap the element again.
                /** @type {?} */
                const touches = event.changedTouches;
                for (let i = 0; i < touches.length; i++) {
                    this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
                }
            }
        });
        /**
         * Function being called whenever the trigger is being released.
         */
        this._onPointerUp = (/**
         * @return {?}
         */
        () => {
            if (!this._isPointerDown) {
                return;
            }
            this._isPointerDown = false;
            // Fade-out all ripples that are visible and not persistent.
            this._activeRipples.forEach((/**
             * @param {?} ripple
             * @return {?}
             */
            ripple => {
                // By default, only ripples that are completely visible will fade out on pointer release.
                // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
                /** @type {?} */
                const isVisible = ripple.state === RippleState.VISIBLE ||
                    ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
                if (!ripple.config.persistent && isVisible) {
                    ripple.fadeOut();
                }
            }));
        });
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);
            // Specify events which need to be registered on the trigger.
            this._triggerEvents
                .set('mousedown', this._onMousedown)
                .set('mouseup', this._onPointerUp)
                .set('mouseleave', this._onPointerUp)
                .set('touchstart', this._onTouchStart)
                .set('touchend', this._onPointerUp)
                .set('touchcancel', this._onPointerUp);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param {?=} config Extra ripple options.
     * @return {?}
     */
    fadeInRipple(x, y, config = {}) {
        /** @type {?} */
        const containerRect = this._containerRect =
            this._containerRect || this._containerElement.getBoundingClientRect();
        /** @type {?} */
        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        /** @type {?} */
        const offsetX = x - containerRect.left;
        /** @type {?} */
        const offsetY = y - containerRect.top;
        /** @type {?} */
        const duration = animationConfig.enterDuration;
        /** @type {?} */
        const ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        // If the color is not set, the default CSS color will be used.
        ripple.style.backgroundColor = config.color || null;
        ripple.style.transitionDuration = `${duration}ms`;
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        /** @type {?} */
        const rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = RippleState.FADING_IN;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
            rippleRef.state = RippleState.VISIBLE;
            // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.
            if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
                rippleRef.fadeOut();
            }
        }), duration);
        return rippleRef;
    }
    /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    fadeOutRipple(rippleRef) {
        /** @type {?} */
        const wasActive = this._activeRipples.delete(rippleRef);
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        // Clear out the cached bounding rect if we have no more ripples.
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        // For ripples that are not active anymore, don't re-run the fade-out animation.
        if (!wasActive) {
            return;
        }
        /** @type {?} */
        const rippleEl = rippleRef.element;
        /** @type {?} */
        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = '0';
        rippleRef.state = RippleState.FADING_OUT;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            rippleRef.state = RippleState.HIDDEN;
            (/** @type {?} */ (rippleEl.parentNode)).removeChild(rippleEl);
        }), animationConfig.exitDuration);
    }
    /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    fadeOutAll() {
        this._activeRipples.forEach((/**
         * @param {?} ripple
         * @return {?}
         */
        ripple => ripple.fadeOut()));
    }
    /**
     * Sets up the trigger event listeners
     * @param {?} elementOrElementRef
     * @return {?}
     */
    setupTriggerEvents(elementOrElementRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);
        if (!element || element === this._triggerElement) {
            return;
        }
        // Remove all previously registered event listeners from the trigger element.
        this._removeTriggerEvents();
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._triggerEvents.forEach((/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */
            (fn, type) => {
                element.addEventListener(type, fn, passiveEventOptions);
            }));
        }));
        this._triggerElement = element;
    }
    /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @private
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    _runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(fn, delay)));
    }
    /**
     * Removes previously registered event listeners from the trigger element.
     * @return {?}
     */
    _removeTriggerEvents() {
        if (this._triggerElement) {
            this._triggerEvents.forEach((/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */
            (fn, type) => {
                (/** @type {?} */ (this._triggerElement)).removeEventListener(type, fn, passiveEventOptions);
            }));
        }
    }
}
/**
 * Enforces a style recalculation of a DOM element by computing its styles.
 * @param {?} element
 * @return {?}
 */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function distanceToFurthestCorner(x, y, rect) {
    /** @type {?} */
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    /** @type {?} */
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify the global ripple options.
 * @type {?}
 */
const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');
class MatRipple {
    /**
     * @param {?} _elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?=} globalOptions
     * @param {?=} animationMode
     */
    constructor(_elementRef, ngZone, platform, globalOptions, animationMode) {
        this._elementRef = _elementRef;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */
        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        if (animationMode === 'NoopAnimations') {
            this._globalOptions.animation = { enterDuration: 0, exitDuration: 0 };
        }
    }
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     * @return {?}
     */
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    /**
     * @param {?} trigger
     * @return {?}
     */
    set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
    }
    /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
    }
    /**
     * Ripple configuration from the directive's input values.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleConfig() {
        return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign({}, this._globalOptions.animation, this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
    }
    /**
     * Sets up the trigger event listeners if ripples are enabled.
     * @private
     * @return {?}
     */
    _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    }
    /**
     * Launches a manual ripple at the specified coordinated or just by the ripple config.
     * @param {?} configOrX
     * @param {?=} y
     * @param {?=} config
     * @return {?}
     */
    launch(configOrX, y = 0, config) {
        if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign({}, this.rippleConfig, config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign({}, this.rippleConfig, configOrX));
        }
    }
}
MatRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mat-ripple], [matRipple]',
                exportAs: 'matRipple',
                host: {
                    'class': 'mat-ripple',
                    '[class.mat-ripple-unbounded]': 'unbounded'
                }
            },] },
];
/** @nocollapse */
MatRipple.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
MatRipple.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleColor',] }],
    unbounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleUnbounded',] }],
    centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleCentered',] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleRadius',] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleAnimation',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleDisabled',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleTrigger',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatRippleModule {
}
MatRippleModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
                exports: [MatRipple, MatCommonModule],
                declarations: [MatRipple],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * \@docs-private
 */
class MatPseudoCheckbox {
    /**
     * @param {?=} _animationMode
     */
    constructor(_animationMode) {
        this._animationMode = _animationMode;
        /**
         * Display state of the checkbox.
         */
        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */
        this.disabled = false;
    }
}
MatPseudoCheckbox.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'mat-pseudo-checkbox',
                styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
                template: '',
                host: {
                    'class': 'mat-pseudo-checkbox',
                    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                },
            },] },
];
/** @nocollapse */
MatPseudoCheckbox.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
MatPseudoCheckbox.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatPseudoCheckboxModule {
}
MatPseudoCheckboxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                exports: [MatPseudoCheckbox],
                declarations: [MatPseudoCheckbox]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatOptgroup.
/**
 * \@docs-private
 */
class MatOptgroupBase {
}
/** @type {?} */
const _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
/** @type {?} */
let _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `mat-option`.
 */
class MatOptgroup extends _MatOptgroupMixinBase {
    constructor() {
        super(...arguments);
        /**
         * Unique id for the underlying label.
         */
        this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    }
}
MatOptgroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-optgroup',
                exportAs: 'matOptgroup',
                template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled'],
                styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
                host: {
                    'class': 'mat-optgroup',
                    'role': 'group',
                    '[class.mat-optgroup-disabled]': 'disabled',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-labelledby]': '_labelId',
                }
            },] },
];
MatOptgroup.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Event object emitted by MatOption when selected or deselected.
 */
class MatOptionSelectionChange {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
/**
 * Injection token used to provide the parent component to options.
 * @type {?}
 */
const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
/**
 * Single option inside of a `<mat-select>` element.
 */
class MatOption {
    /**
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _parent
     * @param {?} group
     */
    constructor(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */
        this.id = `mat-option-${_uniqueIdCounter++}`;
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * Whether the wrapping component is in multiple selection mode.
     * @return {?}
     */
    get multiple() { return this._parent && this._parent.multiple; }
    /**
     * Whether or not the option is currently selected.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * Whether the option is disabled.
     * @return {?}
     */
    get disabled() { return (this.group && this.group.disabled) || this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    /**
     * Whether ripples for the option are disabled.
     * @return {?}
     */
    get disableRipple() { return this._parent && this._parent.disableRipple; }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     * @return {?}
     */
    get viewValue() {
        // TODO(kara): Add input property alternative for node envs.
        return (this._getHostElement().textContent || '').trim();
    }
    /**
     * Selects the option.
     * @return {?}
     */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Deselects the option.
     * @return {?}
     */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Sets focus onto this option.
     * @param {?=} _origin
     * @param {?=} options
     * @return {?}
     */
    focus(_origin, options) {
        // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
        // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
        /** @type {?} */
        const element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus(options);
        }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setActiveStyles() {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setInactiveStyles() {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    getLabel() {
        return this.viewValue;
    }
    /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     * @return {?}
     */
    _selectViaInteraction() {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    }
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     * @return {?}
     */
    _getAriaSelected() {
        return this.selected || (this.multiple ? false : null);
    }
    /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /**
     * Gets the host DOM element.
     * @return {?}
     */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
            /** @type {?} */
            const viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;
                this._stateChanges.next();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * Emits the selection change event.
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
}
MatOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-option',
                exportAs: 'matOption',
                host: {
                    'role': 'option',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[class.mat-selected]': 'selected',
                    '[class.mat-option-multiple]': 'multiple',
                    '[class.mat-active]': 'active',
                    '[id]': 'id',
                    '[attr.aria-selected]': '_getAriaSelected()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[class.mat-option-disabled]': 'disabled',
                    '(click)': '_selectViaInteraction()',
                    '(keydown)': '_handleKeydown($event)',
                    'class': 'mat-option',
                },
                styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
                template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_OPTION_PARENT_COMPONENT,] }] },
    { type: MatOptgroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatOption.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onSelectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/**
 * Counts the amount of option group labels that precede the specified option.
 * \@docs-private
 * @param {?} optionIndex Index of the option at which to start counting.
 * @param {?} options Flat list of all of the options.
 * @param {?} optionGroups Flat list of all of the option groups.
 * @return {?}
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        /** @type {?} */
        let optionsArray = options.toArray();
        /** @type {?} */
        let groups = optionGroups.toArray();
        /** @type {?} */
        let groupCounter = 0;
        for (let i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * \@docs-private
 * @param {?} optionIndex Index of the option to be scrolled into the view.
 * @param {?} optionHeight Height of the options.
 * @param {?} currentScrollPosition Current scroll position of the panel.
 * @param {?} panelHeight Height of the panel.
 * @return {?}
 */
function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
    /** @type {?} */
    const optionOffset = optionIndex * optionHeight;
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatOptionModule {
}
MatOptionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule],
                exports: [MatOption, MatOptgroup],
                declarations: [MatOption, MatOptgroup]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken that can be used to specify the global label options.
 * @type {?}
 */
const MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * When constructing a Date, the month is zero-based. This can be confusing, since people are
 * used to seeing them one-based. So we create these aliases to make writing the tests easier.
 * \@docs-private
 * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
 * @type {?}
 */
const JAN = 0;
/** @type {?} */
const FEB = 1;
/** @type {?} */
const MAR = 2;
/** @type {?} */
const APR = 3;
/** @type {?} */
const MAY = 4;
/** @type {?} */
const JUN = 5;
/** @type {?} */
const JUL = 6;
/** @type {?} */
const AUG = 7;
/** @type {?} */
const SEP = 8;
/** @type {?} */
const OCT = 9;
/** @type {?} */
const NOV = 10;
/** @type {?} */
const DEC = 11;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=core.js.map


/***/ })

}]);
//# sourceMappingURL=default~menu-menu-module~pages-feedback-feedback-module-es2015.js.map