(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

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


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/form-field.js":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/form-field.js ***!
  \**************************************************************/
/*! exports provided: MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return MatFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return MatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return MatFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return MatFormFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return getMatFormFieldPlaceholderConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return getMatFormFieldDuplicatedHintError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return getMatFormFieldMissingControlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return MatHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return MatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return MatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return MatSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return MatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return matFormFieldAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
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
/** @type {?} */
let nextUniqueId = 0;
/**
 * Single error message to be shown underneath the form field.
 */
class MatError {
    constructor() {
        this.id = `mat-error-${nextUniqueId++}`;
    }
}
MatError.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-error',
                host: {
                    'class': 'mat-error',
                    'role': 'alert',
                    '[attr.id]': 'id',
                }
            },] },
];
MatError.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the MatFormField.
 * \@docs-private
 * @type {?}
 */
const matFormFieldAnimations = {
    /**
     * Animation that transitions the form field's error and hint messages.
     */
    transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [
        // TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
        ]),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * An interface which allows a control to work inside of a `MatFormField`.
 * @abstract
 * @template T
 */
class MatFormFieldControl {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 * @return {?}
 */
function getMatFormFieldPlaceholderConflictError() {
    return Error('Placeholder attribute and child element were both specified.');
}
/**
 * \@docs-private
 * @param {?} align
 * @return {?}
 */
function getMatFormFieldDuplicatedHintError(align) {
    return Error(`A hint was already declared for 'align="${align}"'.`);
}
/**
 * \@docs-private
 * @return {?}
 */
function getMatFormFieldMissingControlError() {
    return Error('mat-form-field must contain a MatFormFieldControl.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let nextUniqueId$1 = 0;
/**
 * Hint text to be shown underneath the form field control.
 */
class MatHint {
    constructor() {
        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */
        this.id = `mat-hint-${nextUniqueId$1++}`;
    }
}
MatHint.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-hint',
                host: {
                    'class': 'mat-hint',
                    '[class.mat-right]': 'align == "end"',
                    '[attr.id]': 'id',
                    // Remove align attribute to prevent it from interfering with layout.
                    '[attr.align]': 'null',
                }
            },] },
];
MatHint.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The floating label for a `mat-form-field`.
 */
class MatLabel {
}
MatLabel.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-label'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * \@breaking-change 8.0.0
 */
class MatPlaceholder {
}
MatPlaceholder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: 'mat-placeholder'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Prefix to be placed in front of the form field.
 */
class MatPrefix {
}
MatPrefix.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[matPrefix]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Suffix to be placed at the end of the form field.
 */
class MatSuffix {
}
MatSuffix.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[matSuffix]',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let nextUniqueId$2 = 0;
/** @type {?} */
const floatingLabelScale = 0.75;
/** @type {?} */
const outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * \@docs-private
 */
class MatFormFieldBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/**
 * Base class to which we're applying the form field mixins.
 * \@docs-private
 * @type {?}
 */
const _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatFormFieldBase, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 * @type {?}
 */
const MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Container for form controls that applies Material Design styling and behavior.
 */
class MatFormField extends _MatFormFieldMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} labelOptions
     * @param {?} _dir
     * @param {?} _defaults
     * @param {?} _platform
     * @param {?} _ngZone
     * @param {?} _animationMode
     */
    constructor(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._defaults = _defaults;
        this._platform = _platform;
        this._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */
        this._outlineGapCalculationNeededImmediately = false;
        /**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */
        this._outlineGapCalculationNeededOnStable = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Override for the logic that disables the label animation in certain cases.
         */
        this._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */
        this._subscriptAnimationState = '';
        this._hintLabel = '';
        // Unique id for the hint label.
        this._hintLabelId = `mat-hint-${nextUniqueId$2++}`;
        // Unique id for the internal form field label.
        this._labelId = `mat-form-field-label-${nextUniqueId$2++}`;
        /* Holds the previous direction emitted by directionality service change emitter.
             This is used in updateOutlineGap() method to update the width and position of the gap in the
             outline. Only relevant for the outline appearance. The direction is getting updated in the
             UI after directionality service change emission. So the outlines gaps are getting
             updated in updateOutlineGap() method before connectionContainer child direction change
             in UI. We may get wrong calculations. So we are storing the previous direction to get the
             correct outline calculations*/
        this._previousDirection = 'ltr';
        this._labelOptions = labelOptions ? labelOptions : {};
        this.floatLabel = this._labelOptions.float || 'auto';
        this._animationsEnabled = _animationMode !== 'NoopAnimations';
        // Set the default through here so we invoke the setter on the first run.
        this.appearance = (_defaults && _defaults.appearance) ? _defaults.appearance : 'legacy';
        this._hideRequiredMarker = (_defaults && _defaults.hideRequiredMarker != null) ?
            _defaults.hideRequiredMarker : false;
    }
    /**
     * The form-field appearance style.
     * @return {?}
     */
    get appearance() { return this._appearance; }
    /**
     * @param {?} value
     * @return {?}
     */
    set appearance(value) {
        /** @type {?} */
        const oldValue = this._appearance;
        this._appearance = value || (this._defaults && this._defaults.appearance) || 'legacy';
        if (this._appearance === 'outline' && oldValue !== value) {
            this._outlineGapCalculationNeededOnStable = true;
        }
    }
    /**
     * Whether the required marker should be hidden.
     * @return {?}
     */
    get hideRequiredMarker() { return this._hideRequiredMarker; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideRequiredMarker(value) {
        this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether the floating label should always float or not.
     * @return {?}
     */
    get _shouldAlwaysFloat() {
        return this.floatLabel === 'always' && !this._showAlwaysAnimate;
    }
    /**
     * Whether the label can float or not.
     * @return {?}
     */
    get _canLabelFloat() { return this.floatLabel !== 'never'; }
    /**
     * Text for the form field hint.
     * @return {?}
     */
    get hintLabel() { return this._hintLabel; }
    /**
     * @param {?} value
     * @return {?}
     */
    set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
    }
    /**
     * Whether the label should always float, never float or float as the user types.
     *
     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
     * way to make the floating label emulate the behavior of a standard input placeholder. However
     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
     * appearances the `never` option has been disabled in favor of just using the placeholder.
     * @return {?}
     */
    get floatLabel() {
        return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set floatLabel(value) {
        if (value !== this._floatLabel) {
            this._floatLabel = value || this._labelOptions.float || 'auto';
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    get _control() {
        // TODO(crisbeto): we need this hacky workaround in order to support both Ivy
        // and ViewEngine. We should clean this up once Ivy is the default renderer.
        return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _control(value) {
        this._explicitFormFieldControl = value;
    }
    /**
     * @return {?}
     */
    get _labelChild() {
        return this._labelChildNonStatic || this._labelChildStatic;
    }
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     * @return {?}
     */
    getConnectedOverlayOrigin() {
        return this._connectionContainerRef || this._elementRef;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._validateControlChild();
        /** @type {?} */
        const control = this._control;
        if (control.controlType) {
            this._elementRef.nativeElement.classList.add(`mat-form-field-type-${control.controlType}`);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])((/** @type {?} */ (null)))).subscribe((/**
         * @return {?}
         */
        () => {
            this._validatePlaceholders();
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        }));
        // Run change detection if the value changes.
        if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @return {?}
             */
            () => this._changeDetectorRef.markForCheck()));
        }
        // Note that we have to run outside of the `NgZone` explicitly,
        // in order to avoid throwing users into an infinite loop
        // if `zone-patch-rxjs` is included.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => {
                if (this._outlineGapCalculationNeededOnStable) {
                    this.updateOutlineGap();
                }
            }));
        }));
        // Run change detection and update the outline if the suffix or prefix changes.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe((/**
         * @return {?}
         */
        () => {
            this._outlineGapCalculationNeededOnStable = true;
            this._changeDetectorRef.markForCheck();
        }));
        // Re-validate when the number of hints changes.
        this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        () => {
            this._processHints();
            this._changeDetectorRef.markForCheck();
        }));
        // Update the aria-described by when the number of errors changes.
        this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        () => {
            this._syncDescribedByIds();
            this._changeDetectorRef.markForCheck();
        }));
        if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateOutlineGap();
                this._previousDirection = this._dir.value;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this._validateControlChild();
        if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Avoid animations on load.
        this._subscriptAnimationState = 'enter';
        this._changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */
    _shouldForward(prop) {
        /** @type {?} */
        const ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
    }
    /**
     * @return {?}
     */
    _hasPlaceholder() {
        return !!(this._control && this._control.placeholder || this._placeholderChild);
    }
    /**
     * @return {?}
     */
    _hasLabel() {
        return !!this._labelChild;
    }
    /**
     * @return {?}
     */
    _shouldLabelFloat() {
        return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
    }
    /**
     * @return {?}
     */
    _hideControlPlaceholder() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this.appearance === 'legacy' && !this._hasLabel() ||
            this._hasLabel() && !this._shouldLabelFloat();
    }
    /**
     * @return {?}
     */
    _hasFloatingLabel() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    }
    /**
     * Determines whether to display hints or errors.
     * @return {?}
     */
    _getDisplayedMessages() {
        return (this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState) ? 'error' : 'hint';
    }
    /**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */
    _animateAndLockLabel() {
        if (this._hasFloatingLabel() && this._canLabelFloat) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe((/**
                 * @return {?}
                 */
                () => {
                    this._showAlwaysAnimate = false;
                }));
            }
            this.floatLabel = 'always';
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     * @private
     * @return {?}
     */
    _validatePlaceholders() {
        if (this._control.placeholder && this._placeholderChild) {
            throw getMatFormFieldPlaceholderConflictError();
        }
    }
    /**
     * Does any extra processing that is required when handling the hints.
     * @private
     * @return {?}
     */
    _processHints() {
        this._validateHints();
        this._syncDescribedByIds();
    }
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     * @private
     * @return {?}
     */
    _validateHints() {
        if (this._hintChildren) {
            /** @type {?} */
            let startHint;
            /** @type {?} */
            let endHint;
            this._hintChildren.forEach((/**
             * @param {?} hint
             * @return {?}
             */
            (hint) => {
                if (hint.align === 'start') {
                    if (startHint || this.hintLabel) {
                        throw getMatFormFieldDuplicatedHintError('start');
                    }
                    startHint = hint;
                }
                else if (hint.align === 'end') {
                    if (endHint) {
                        throw getMatFormFieldDuplicatedHintError('end');
                    }
                    endHint = hint;
                }
            }));
        }
    }
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     * @private
     * @return {?}
     */
    _syncDescribedByIds() {
        if (this._control) {
            /** @type {?} */
            let ids = [];
            if (this._getDisplayedMessages() === 'hint') {
                /** @type {?} */
                const startHint = this._hintChildren ?
                    this._hintChildren.find((/**
                     * @param {?} hint
                     * @return {?}
                     */
                    hint => hint.align === 'start')) : null;
                /** @type {?} */
                const endHint = this._hintChildren ?
                    this._hintChildren.find((/**
                     * @param {?} hint
                     * @return {?}
                     */
                    hint => hint.align === 'end')) : null;
                if (startHint) {
                    ids.push(startHint.id);
                }
                else if (this._hintLabel) {
                    ids.push(this._hintLabelId);
                }
                if (endHint) {
                    ids.push(endHint.id);
                }
            }
            else if (this._errorChildren) {
                ids = this._errorChildren.map((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => error.id));
            }
            this._control.setDescribedByIds(ids);
        }
    }
    /**
     * Throws an error if the form field's control is missing.
     * @protected
     * @return {?}
     */
    _validateControlChild() {
        if (!this._control) {
            throw getMatFormFieldMissingControlError();
        }
    }
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     * @return {?}
     */
    updateOutlineGap() {
        /** @type {?} */
        const labelEl = this._label ? this._label.nativeElement : null;
        if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length ||
            !labelEl.textContent.trim()) {
            return;
        }
        if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
        }
        // If the element is not present in the DOM, the outline gap will need to be calculated
        // the next time it is checked and in the DOM.
        if (!(/** @type {?} */ (document.documentElement)).contains(this._elementRef.nativeElement)) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
        }
        /** @type {?} */
        let startWidth = 0;
        /** @type {?} */
        let gapWidth = 0;
        /** @type {?} */
        const container = this._connectionContainerRef.nativeElement;
        /** @type {?} */
        const startEls = container.querySelectorAll('.mat-form-field-outline-start');
        /** @type {?} */
        const gapEls = container.querySelectorAll('.mat-form-field-outline-gap');
        if (this._label && this._label.nativeElement.children.length) {
            /** @type {?} */
            const containerRect = container.getBoundingClientRect();
            // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.
            if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
            }
            /** @type {?} */
            const containerStart = this._getStartEnd(containerRect);
            /** @type {?} */
            const labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
            /** @type {?} */
            let labelWidth = 0;
            for (const child of labelEl.children) {
                labelWidth += child.offsetWidth;
            }
            startWidth = labelStart - containerStart - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
        }
        for (let i = 0; i < startEls.length; i++) {
            startEls.item(i).style.width = `${startWidth}px`;
        }
        for (let i = 0; i < gapEls.length; i++) {
            gapEls.item(i).style.width = `${gapWidth}px`;
        }
        this._outlineGapCalculationNeededOnStable =
            this._outlineGapCalculationNeededImmediately = false;
    }
    /**
     * Gets the start end of the rect considering the current directionality.
     * @private
     * @param {?} rect
     * @return {?}
     */
    _getStartEnd(rect) {
        return this._previousDirection === 'rtl' ? rect.right : rect.left;
    }
}
MatFormField.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-form-field',
                exportAs: 'matFormField',
                template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content><span>{{_control.placeholder}}</span></ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
                // MatInput is a directive and can't have styles, so we need to include its styles here
                // in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
                // big deal for people who aren't using MatInput.
                styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
                animations: [matFormFieldAnimations.transitionMessages],
                host: {
                    'class': 'mat-form-field',
                    '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
                    '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
                    '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
                    '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
                    '[class.mat-form-field-invalid]': '_control.errorState',
                    '[class.mat-form-field-can-float]': '_canLabelFloat',
                    '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
                    '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
                    '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
                    '[class.mat-form-field-disabled]': '_control.disabled',
                    '[class.mat-form-field-autofilled]': '_control.autofilled',
                    '[class.mat-focused]': '_control.focused',
                    '[class.mat-accent]': 'color == "accent"',
                    '[class.mat-warn]': 'color == "warn"',
                    '[class.ng-untouched]': '_shouldForward("untouched")',
                    '[class.ng-touched]': '_shouldForward("touched")',
                    '[class.ng-pristine]': '_shouldForward("pristine")',
                    '[class.ng-dirty]': '_shouldForward("dirty")',
                    '[class.ng-valid]': '_shouldForward("valid")',
                    '[class.ng-invalid]': '_shouldForward("invalid")',
                    '[class.ng-pending]': '_shouldForward("pending")',
                    '[class._mat-animation-noopable]': '!_animationsEnabled',
                },
                inputs: ['color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatFormField.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"],] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] }
];
MatFormField.propDecorators = {
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideRequiredMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hintLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    floatLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    underlineRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['underline', { static: false },] }],
    _connectionContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['connectionContainer', { static: true },] }],
    _inputContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputContainer', { static: false },] }],
    _label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['label', { static: false },] }],
    _controlNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatFormFieldControl, { static: false },] }],
    _controlStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatFormFieldControl, { static: true },] }],
    _labelChildNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel, { static: false },] }],
    _labelChildStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel, { static: true },] }],
    _placeholderChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatPlaceholder, { static: false },] }],
    _errorChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatError,] }],
    _hintChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatHint,] }],
    _prefixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatPrefix,] }],
    _suffixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatSuffix,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatFormFieldModule {
}
MatFormFieldModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"],
                ],
                exports: [
                    MatError,
                    MatFormField,
                    MatHint,
                    MatLabel,
                    MatPlaceholder,
                    MatPrefix,
                    MatSuffix,
                ],
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


//# sourceMappingURL=form-field.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/select.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/select.js ***!
  \**********************************************************/
/*! exports provided: MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformPanel", function() { return transformPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInContent", function() { return fadeInContent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * \@docs-private
 * @type {?}
 */
const matSelectAnimations = {
    /**
     * This animation ensures the select's overlay panel animation (transformPanel) is called when
     * closing the select.
     * This is needed due to https://github.com/angular/angular/issues/23302
     */
    transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanelWrap', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()], { optional: true }))
    ]),
    /**
     * This animation transforms the select's overlay panel on and off the page.
     *
     * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
     * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
     * side to ensure the option text correctly overlaps the trigger text.
     *
     * When the panel is removed from the DOM, it simply fades out linearly.
     */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scaleY(0.8)',
            minWidth: '100%',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            // 32px = 2 * 16px padding
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 64px)',
            // 64px = 48px padding on the left + 16px padding on the right
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
    ]),
    /**
     * This animation fades in the background color and text content of the
     * select's options. It is time delayed to occur 100ms after the overlay
     * panel has transformed in.
     * @deprecated Not used anymore. To be removed.
     * \@breaking-change 8.0.0
     */
    fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
const transformPanel = matSelectAnimations.transformPanel;
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
const fadeInContent = matSelectAnimations.fadeInContent;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * \@docs-private
 * @return {?}
 */
function getMatSelectDynamicMultipleError() {
    return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * \@docs-private
 * @return {?}
 */
function getMatSelectNonArrayValueError() {
    return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 * @return {?}
 */
function getMatSelectNonFunctionValueError() {
    return Error('`compareWith` must be a function.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let nextUniqueId = 0;
/**
 * The max height of the select's overlay panel
 * @type {?}
 */
const SELECT_PANEL_MAX_HEIGHT = 256;
/**
 * The panel's padding on the x-axis
 * @type {?}
 */
const SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's x axis padding if it is indented (e.g. there is an option group).
 * @type {?}
 */
const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The height of the select items in `em` units.
 * @type {?}
 */
const SELECT_ITEM_HEIGHT_EM = 3;
// TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 * @type {?}
 */
const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 * @type {?}
 */
const SELECT_PANEL_VIEWPORT_PADDING = 8;
/**
 * Injection token that determines the scroll handling while a select is open.
 * @type {?}
 */
const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    () => overlay.scrollStrategies.reposition());
}
/**
 * \@docs-private
 * @type {?}
 */
const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_SELECT_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
    useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Change event object that is emitted when the select value has changed.
 */
class MatSelectChange {
    /**
     * @param {?} source
     * @param {?} value
     */
    constructor(source, value) {
        this.source = source;
        this.value = value;
    }
}
// Boilerplate for applying mixins to MatSelect.
/**
 * \@docs-private
 */
class MatSelectBase {
    /**
     * @param {?} _elementRef
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
/** @type {?} */
const _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatSelectBase))));
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
class MatSelectTrigger {
}
MatSelectTrigger.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"], args: [{
                selector: 'mat-select-trigger'
            },] },
];
class MatSelect extends _MatSelectMixinBase {
    /**
     * @param {?} _viewportRuler
     * @param {?} _changeDetectorRef
     * @param {?} _ngZone
     * @param {?} _defaultErrorStateMatcher
     * @param {?} elementRef
     * @param {?} _dir
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} _parentFormField
     * @param {?} ngControl
     * @param {?} tabIndex
     * @param {?} scrollStrategyFactory
     * @param {?=} _liveAnnouncer
     */
    constructor(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer) {
        super(elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._dir = _dir;
        this._parentFormField = _parentFormField;
        this.ngControl = ngControl;
        this._liveAnnouncer = _liveAnnouncer;
        /**
         * Whether or not the overlay panel is open.
         */
        this._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */
        this._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */
        this._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */
        this._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */
        this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        /**
         * Unique id for this input.
         */
        this._uid = `mat-select-${nextUniqueId++}`;
        /**
         * Emits whenever the component is destroyed.
         */
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */
        this._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        /**
         * `View -> model callback called when select has been touched`
         */
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */
        this._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */
        this._transformOrigin = 'top';
        /**
         * Emits when the panel element is finished transforming in.
         */
        this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */
        this._disableOptionCentering = false;
        this._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */
        this.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */
        this.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */
        this.optionSelectionChanges = (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const options = this.options;
            if (options) {
                return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((/**
                 * @return {?}
                 */
                () => Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.onSelectionChange))))));
            }
            return this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((/**
             * @return {?}
             */
            () => this.optionSelectionChanges)));
        }))));
        /**
         * Event emitted when the select panel has been toggled.
         */
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */
        this._openedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((/**
         * @param {?} o
         * @return {?}
         */
        o => o)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])((/**
         * @return {?}
         */
        () => { })));
        /**
         * Event emitted when the select has been closed.
         */
        this._closedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((/**
         * @param {?} o
         * @return {?}
         */
        o => !o)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])((/**
         * @return {?}
         */
        () => { })));
        /**
         * Event emitted when the selected value has been changed by the user.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        if (this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        this._scrollStrategyFactory = scrollStrategyFactory;
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = parseInt(tabIndex) || 0;
        // Force setter to be called in case id was not specified.
        this.id = this.id;
    }
    /**
     * Whether the select is focused.
     * @return {?}
     */
    get focused() {
        return this._focused || this._panelOpen;
    }
    /**
     * @deprecated Setter to be removed as this property is intended to be readonly.
     * \@breaking-change 8.0.0
     * @param {?} value
     * @return {?}
     */
    set focused(value) {
        this._focused = value;
    }
    /**
     * Placeholder to be shown if no value has been selected.
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /**
     * Whether the component is required.
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    /**
     * Whether the user should be allowed to select multiple options.
     * @return {?}
     */
    get multiple() { return this._multiple; }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiple(value) {
        if (this._selectionModel) {
            throw getMatSelectDynamicMultipleError();
        }
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether to center the active option over the trigger.
     * @return {?}
     */
    get disableOptionCentering() { return this._disableOptionCentering; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disableOptionCentering(value) {
        this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw getMatSelectNonFunctionValueError();
        }
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /**
     * Value of the select control.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (newValue !== this._value) {
            this.writeValue(newValue);
            this._value = newValue;
        }
    }
    /**
     * Unique id of the element.
     * @return {?}
     */
    get id() { return this._id; }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.multiple);
        this.stateChanges.next();
        // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084
        this._panelDoneAnimatingStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.panelOpen) {
                this._scrollTop = 0;
                this.openedChange.emit(true);
            }
            else {
                this.openedChange.emit(false);
                this.overlayDir.offsetX = 0;
                this._changeDetectorRef.markForCheck();
            }
        }));
        this._viewportRuler.change()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this._panelOpen) {
                this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
                this._changeDetectorRef.markForCheck();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._initKeyManager();
        this._selectionModel.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.added.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => option.select()));
            event.removed.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => option.deselect()));
        }));
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this._resetOptions();
            this._initializeSelection();
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes['disabled']) {
            this.stateChanges.next();
        }
        if (changes['typeaheadDebounceInterval'] && this._keyManager) {
            this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
    }
    /**
     * Toggles the overlay panel open or closed.
     * @return {?}
     */
    toggle() {
        this.panelOpen ? this.close() : this.open();
    }
    /**
     * Opens the overlay panel.
     * @return {?}
     */
    open() {
        if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
        }
        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
        // Note: The computed font-size will be a string pixel value (e.g. "16px").
        // `parseInt` ignores the trailing 'px' and converts this to a number.
        this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
        this._panelOpen = true;
        this._keyManager.withHorizontalOrientation(null);
        this._calculateOverlayPosition();
        this._highlightCorrectOption();
        this._changeDetectorRef.markForCheck();
        // Set the font size on the panel element once it exists.
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe((/**
         * @return {?}
         */
        () => {
            if (this._triggerFontSize && this.overlayDir.overlayRef &&
                this.overlayDir.overlayRef.overlayElement) {
                this.overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`;
            }
        }));
    }
    /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    close() {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    writeValue(value) {
        if (this.options) {
            this._setSelectionByValue(value);
        }
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /**
     * Whether or not the overlay panel is open.
     * @return {?}
     */
    get panelOpen() {
        return this._panelOpen;
    }
    /**
     * The currently selected option.
     * @return {?}
     */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /**
     * The value displayed in the trigger.
     * @return {?}
     */
    get triggerValue() {
        if (this.empty) {
            return '';
        }
        if (this._multiple) {
            /** @type {?} */
            const selectedOptions = this._selectionModel.selected.map((/**
             * @param {?} option
             * @return {?}
             */
            option => option.viewValue));
            if (this._isRtl()) {
                selectedOptions.reverse();
            }
            // TODO(crisbeto): delimiter should be configurable for proper localization.
            return selectedOptions.join(', ');
        }
        return this._selectionModel.selected[0].viewValue;
    }
    /**
     * Whether the element is in RTL mode.
     * @return {?}
     */
    _isRtl() {
        return this._dir ? this._dir.value === 'rtl' : false;
    }
    /**
     * Handles all keydown events on the select.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    }
    /**
     * Handles keyboard events while the select is closed.
     * @private
     * @param {?} event
     * @return {?}
     */
    _handleClosedKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] ||
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"];
        /** @type {?} */
        const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"];
        /** @type {?} */
        const manager = this._keyManager;
        // Open the select on ALT + arrow key to match the native <select>
        if ((isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event)) || ((this.multiple || event.altKey) && isArrowKey)) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space
            this.open();
        }
        else if (!this.multiple) {
            /** @type {?} */
            const previouslySelectedOption = this.selected;
            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
            }
            else {
                manager.onKeydown(event);
            }
            /** @type {?} */
            const selectedOption = this.selected;
            // Since the value has changed, we need to announce it ourselves.
            // @breaking-change 8.0.0 remove null check for _liveAnnouncer.
            if (this._liveAnnouncer && selectedOption && previouslySelectedOption !== selectedOption) {
                // We set a duration on the live announcement, because we want the live element to be
                // cleared after a while so that users can't navigate to it using the arrow keys.
                this._liveAnnouncer.announce(((/** @type {?} */ (selectedOption))).viewValue, 10000);
            }
        }
    }
    /**
     * Handles keyboard events when the selected is open.
     * @private
     * @param {?} event
     * @return {?}
     */
    _handleOpenKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"];
        /** @type {?} */
        const manager = this._keyManager;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
            event.preventDefault();
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
        }
        else if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
        }
        else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"]) && manager.activeItem &&
            !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event)) {
            event.preventDefault();
            manager.activeItem._selectViaInteraction();
        }
        else if (this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["A"] && event.ctrlKey) {
            event.preventDefault();
            /** @type {?} */
            const hasDeselectedOptions = this.options.some((/**
             * @param {?} opt
             * @return {?}
             */
            opt => !opt.disabled && !opt.selected));
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                if (!option.disabled) {
                    hasDeselectedOptions ? option.select() : option.deselect();
                }
            }));
        }
        else {
            /** @type {?} */
            const previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);
            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
            }
        }
    }
    /**
     * @return {?}
     */
    _onFocus() {
        if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     * @return {?}
     */
    _onBlur() {
        this._focused = false;
        if (!this.disabled && !this.panelOpen) {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     * @return {?}
     */
    _onAttached() {
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.detectChanges();
            this._calculateOverlayOffsetX();
            this.panel.nativeElement.scrollTop = this._scrollTop;
        }));
    }
    /**
     * Returns the theme to be used on the panel.
     * @return {?}
     */
    _getPanelTheme() {
        return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
    }
    /**
     * Whether the select has a value.
     * @return {?}
     */
    get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
    }
    /**
     * @private
     * @return {?}
     */
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value);
            this.stateChanges.next();
        }));
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     * @private
     * @param {?} value
     * @return {?}
     */
    _setSelectionByValue(value) {
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw getMatSelectNonArrayValueError();
            }
            this._selectionModel.clear();
            value.forEach((/**
             * @param {?} currentValue
             * @return {?}
             */
            (currentValue) => this._selectValue(currentValue)));
            this._sortValues();
        }
        else {
            this._selectionModel.clear();
            /** @type {?} */
            const correspondingOption = this._selectValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this._keyManager.setActiveItem(correspondingOption);
            }
            else if (!this.panelOpen) {
                // Otherwise reset the highlighted option. Note that we only want to do this while
                // closed, because doing it while open can shift the user's focus unnecessarily.
                this._keyManager.setActiveItem(-1);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @private
     * @param {?} value
     * @return {?} Option that has the corresponding value.
     */
    _selectValue(value) {
        /** @type {?} */
        const correspondingOption = this.options.find((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            try {
                // Treat null as a special reset value.
                return option.value != null && this._compareWith(option.value, value);
            }
            catch (error) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["isDevMode"])()) {
                    // Notify developers of errors in their comparator.
                    console.warn(error);
                }
                return false;
            }
        }));
        if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    }
    /**
     * Sets up a key manager to listen to keyboard events on the overlay panel.
     * @private
     * @return {?}
     */
    _initKeyManager() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["ActiveDescendantKeyManager"](this.options)
            .withTypeAhead(this.typeaheadDebounceInterval)
            .withVerticalOrientation()
            .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
            .withAllowedModifierKeys(['shiftKey']);
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.
            this.focus();
            this.close();
        }));
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            if (this._panelOpen && this.panel) {
                this._scrollActiveOptionIntoView();
            }
            else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
                this._keyManager.activeItem._selectViaInteraction();
            }
        }));
    }
    /**
     * Drops current option subscriptions and IDs and resets from scratch.
     * @private
     * @return {?}
     */
    _resetOptions() {
        /** @type {?} */
        const changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this._onSelect(event.source, event.isUserInput);
            if (event.isUserInput && !this.multiple && this._panelOpen) {
                this.close();
                this.focus();
            }
        }));
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...this.options.map((/**
         * @param {?} option
         * @return {?}
         */
        option => option._stateChanges)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }));
        this._setOptionIds();
    }
    /**
     * Invoked when an option is clicked.
     * @private
     * @param {?} option
     * @param {?} isUserInput
     * @return {?}
     */
    _onSelect(option, isUserInput) {
        /** @type {?} */
        const wasSelected = this._selectionModel.isSelected(option);
        if (option.value == null && !this._multiple) {
            option.deselect();
            this._selectionModel.clear();
            this._propagateChanges(option.value);
        }
        else {
            if (wasSelected !== option.selected) {
                option.selected ? this._selectionModel.select(option) :
                    this._selectionModel.deselect(option);
            }
            if (isUserInput) {
                this._keyManager.setActiveItem(option);
            }
            if (this.multiple) {
                this._sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
        this.stateChanges.next();
    }
    /**
     * Sorts the selected values in the selected based on their order in the panel.
     * @private
     * @return {?}
     */
    _sortValues() {
        if (this.multiple) {
            /** @type {?} */
            const options = this.options.toArray();
            this._selectionModel.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return this.sortComparator ? this.sortComparator(a, b, options) :
                    options.indexOf(a) - options.indexOf(b);
            }));
            this.stateChanges.next();
        }
    }
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    _propagateChanges(fallbackValue) {
        /** @type {?} */
        let valueToEmit = null;
        if (this.multiple) {
            valueToEmit = ((/** @type {?} */ (this.selected))).map((/**
             * @param {?} option
             * @return {?}
             */
            option => option.value));
        }
        else {
            valueToEmit = this.selected ? ((/** @type {?} */ (this.selected))).value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(new MatSelectChange(this, valueToEmit));
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Records option IDs to pass to the aria-owns property.
     * @private
     * @return {?}
     */
    _setOptionIds() {
        this._optionIds = this.options.map((/**
         * @param {?} option
         * @return {?}
         */
        option => option.id)).join(' ');
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     * @private
     * @return {?}
     */
    _highlightCorrectOption() {
        if (this._keyManager) {
            if (this.empty) {
                this._keyManager.setFirstItemActive();
            }
            else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
        }
    }
    /**
     * Scrolls the active option into view.
     * @private
     * @return {?}
     */
    _scrollActiveOptionIntoView() {
        /** @type {?} */
        const activeOptionIndex = this._keyManager.activeItemIndex || 0;
        /** @type {?} */
        const labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
        this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
    /**
     * Focuses the select element.
     * @param {?=} options
     * @return {?}
     */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    /**
     * Gets the index of the provided option in the option list.
     * @private
     * @param {?} option
     * @return {?}
     */
    _getOptionIndex(option) {
        return this.options.reduce((/**
         * @param {?} result
         * @param {?} current
         * @param {?} index
         * @return {?}
         */
        (result, current, index) => {
            return result === undefined ? (option === current ? index : undefined) : result;
        }), undefined);
    }
    /**
     * Calculates the scroll position and x- and y-offsets of the overlay panel.
     * @private
     * @return {?}
     */
    _calculateOverlayPosition() {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */
        const items = this._getItemCount();
        /** @type {?} */
        const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */
        const scrollContainerHeight = items * itemHeight;
        // The farthest the panel can be scrolled before it hits the bottom
        /** @type {?} */
        const maxScroll = scrollContainerHeight - panelHeight;
        // If no value is selected we open the popup to the first item.
        /** @type {?} */
        let selectedOptionOffset = this.empty ? 0 : (/** @type {?} */ (this._getOptionIndex(this._selectionModel.selected[0])));
        selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
        // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.
        /** @type {?} */
        const scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this._checkOverlayWithinViewport(maxScroll);
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */
        const optionOffsetFromScrollTop = itemHeight * selectedIndex;
        /** @type {?} */
        const halfOptionHeight = itemHeight / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        /** @type {?} */
        const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
    /**
     * Returns the aria-label of the select component.
     * @return {?}
     */
    _getAriaLabel() {
        // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
        // `aria-labelledby` value by setting the ariaLabel to the placeholder.
        return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
    }
    /**
     * Returns the aria-labelledby of the select component.
     * @return {?}
     */
    _getAriaLabelledby() {
        if (this.ariaLabelledby) {
            return this.ariaLabelledby;
        }
        // Note: we use `_getAriaLabel` here, because we want to check whether there's a
        // computed label. `this.ariaLabel` is only the user-specified label.
        if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() ||
            this._getAriaLabel()) {
            return null;
        }
        return this._parentFormField._labelId || null;
    }
    /**
     * Determines the `aria-activedescendant` to be set on the host.
     * @return {?}
     */
    _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
        }
        return null;
    }
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     * @private
     * @return {?}
     */
    _calculateOverlayOffsetX() {
        /** @type {?} */
        const overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        /** @type {?} */
        const viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */
        const isRtl = this._isRtl();
        /** @type {?} */
        const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
            SELECT_PANEL_PADDING_X * 2;
        /** @type {?} */
        let offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else {
            /** @type {?} */
            let selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        // Determine how much the select overflows on each side.
        /** @type {?} */
        const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        /** @type {?} */
        const rightOverflow = overlayRect.right + offsetX - viewportSize.width
            + (isRtl ? 0 : paddingWidth);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.
        this.overlayDir.offsetX = Math.round(offsetX);
        this.overlayDir.overlayRef.updatePosition();
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     * @private
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */
        const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        /** @type {?} */
        let optionOffsetFromPanelTop;
        // Disable offset if requested by user by returning 0 as value to offset
        if (this._disableOptionCentering) {
            return 0;
        }
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this._scrollTop === maxScroll) {
            /** @type {?} */
            const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            /** @type {?} */
            const selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.
            /** @type {?} */
            let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     * @private
     * @param {?} maxScroll
     * @return {?}
     */
    _checkOverlayWithinViewport(maxScroll) {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */
        const viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */
        const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */
        const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */
        const panelHeightTop = Math.abs(this._offsetY);
        /** @type {?} */
        const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */
        const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    }
    /**
     * Adjusts the overlay panel up to fit in the viewport.
     * @private
     * @param {?} panelHeightBottom
     * @param {?} bottomSpaceAvailable
     * @return {?}
     */
    _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        /** @type {?} */
        const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = `50% bottom 0px`;
        }
    }
    /**
     * Adjusts the overlay panel down to fit in the viewport.
     * @private
     * @param {?} panelHeightTop
     * @param {?} topSpaceAvailable
     * @param {?} maxScroll
     * @return {?}
     */
    _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        /** @type {?} */
        const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = `50% top 0px`;
            return;
        }
    }
    /**
     * Sets the transform origin point based on the selected option.
     * @private
     * @return {?}
     */
    _getOriginBasedOnOption() {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */
        const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return `50% ${originY}px 0px`;
    }
    /**
     * Calculates the amount of items in the select. This includes options and group labels.
     * @private
     * @return {?}
     */
    _getItemCount() {
        return this.options.length + this.optionGroups.length;
    }
    /**
     * Calculates the height of the select's options.
     * @private
     * @return {?}
     */
    _getItemHeight() {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    onContainerClick() {
        this.focus();
        this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    get shouldLabelFloat() {
        return this._panelOpen || !this.empty;
    }
}
MatSelect.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{selector: 'mat-select',
                exportAs: 'matSelect',
                template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\u00A0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue || '\u00A0'}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div class=\"mat-select-panel-wrap\" [@transformPanelWrap]><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\" [style.transformOrigin]=\"_transformOrigin\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><ng-content></ng-content></div></div></ng-template>",
                styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'role': 'listbox',
                    '[attr.id]': 'id',
                    '[attr.tabindex]': 'tabIndex',
                    '[attr.aria-label]': '_getAriaLabel()',
                    '[attr.aria-labelledby]': '_getAriaLabelledby()',
                    '[attr.aria-required]': 'required.toString()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
                    '[attr.aria-multiselectable]': 'multiple',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                    '[class.mat-select-disabled]': 'disabled',
                    '[class.mat-select-invalid]': 'errorState',
                    '[class.mat-select-required]': 'required',
                    '[class.mat-select-empty]': 'empty',
                    'class': 'mat-select',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': '_onFocus()',
                    '(blur)': '_onBlur()',
                },
                animations: [
                    matSelectAnimations.transformPanelWrap,
                    matSelectAnimations.transformPanel
                ],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"], useExisting: MatSelect },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
                ],
            },] },
];
/** @nocollapse */
MatSelect.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"], args: [MAT_SELECT_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["LiveAnnouncer"] }
];
MatSelect.propDecorators = {
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['trigger', { static: false },] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: ['panel', { static: false },] }],
    overlayDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], { static: false },] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], { descendants: true },] }],
    optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptgroup"],] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    customTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [MatSelectTrigger, { static: false },] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    disableOptionCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"], args: ['aria-labelledby',] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    typeaheadDebounceInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    sortComparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }],
    openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }],
    _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['opened',] }],
    _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"], args: ['closed',] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatSelectModule {
}
MatSelectModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"],
                ],
                exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
                declarations: [MatSelect, MatSelectTrigger],
                providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
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


//# sourceMappingURL=select.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/advance-serach/advance-search.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/advance-serach/advance-search.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        style=\"margin-left: 10px; font-size: 21px\"\n        (click)=\"closeModel()\"\n        name=\"arrow-back-outline\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title> Advance Search </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h4 style=\"margin-left: 20px\">Price Range</h4>\n  <span *ngIf=\"timeMin2\" style=\"float: right;\n  margin-right: 23px;\n  margin-top: -29px;\n\">{{timeMin2}} Lakh  - {{timeMax2}} Lakh</span>\n  <ion-item>\n   \n    <ion-range dualKnobs=\"true\" [min]=timeMin [max]=timeMax step=\"3\" \n    snaps=\"true\" [(ngModel)]=\"time\" (ionChange)=\"setBadge(time)\" >\n    <ion-label slot=\"start\">1 Lakh</ion-label>\n      <ion-label slot=\"end\">90 Lakh</ion-label></ion-range>\n  </ion-item>\n  <br /><br>\n  <h4 style=\"margin-left: 20px\">Body Type</h4>\n  <!-- border-bottom: 3px red solid; -->\n  <ion-row>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('SEDAN')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'SEDAN'}\">\n      <img src=\"../../../../assets/img/body_type/sedan.jpg\">\n      <span>Sedan</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('SUV')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'SUV'}\">\n      \n      <img src=\"../../../../assets/img/body_type/suv.jpg\">\n      <span>SUV</span>\n    </ion-col>\n    <ion-col style=\"max-height:41px\" class=\"fuel-type\" (click)=\"selectBodyType('MICRO')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'MICRO'}\">\n      <img src=\"../../../../assets/img/body_type/micro.jpg\">\n      <span>Micro</span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('MINI_VAN')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'MINI_VAN'}\">\n      <img src=\"../../../../assets/img/body_type/minivan.jpg\">\n      <span>Mini Van</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('COUPE')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'COUPE'}\">\n      <img src=\"../../../../assets/img/body_type/coupe.jpg\">\n      <span>Coupe</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('CUV')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'CUV'}\">\n      <img src=\"../../../../assets/img/body_type/cuv.jpg\">\n      <span>CUV</span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('HATCH_BACK')\" (click)=\"selectBodyType('HATCH_BACK')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'HATCH_BACK'}\">\n      <img src=\"../../../../assets/img/body_type/hatchback.jpg\">\n      <span>Hatch Back</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('PICKUP')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'PICKUP'}\">\n      <img src=\"../../../../assets/img/body_type/pickup.jpg\">\n      <span>Pickup</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('ROADSTER')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'ROADSTER'}\">\n      <img src=\"../../../../assets/img/body_type/roadster.jpg\">\n      <span>Roadster</span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('VAN')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'VAN'}\">\n      <img src=\"../../../../assets/img/body_type/van.jpg\">\n      <span>Van</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectBodyType('CONVERTIBLE')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.body_type == 'CONVERTIBLE'}\">\n      <img src=\"../../../../assets/img/body_type/convertible.jpg\">\n      <span>Convertible</span>\n    </ion-col>\n    <ion-col >\n      <!-- <img src=\"../../../../assets/img/body_type/supercar.svg\"> -->\n      <!-- <span>Super Car</span> -->\n    </ion-col>\n  </ion-row>\n  <br /><br>\n  <h4 style=\"margin-left: 20px\">Fuel Type</h4>\n  <ion-row>\n    <ion-col class=\"fuel-type\" (click)=\"selectFuelType('Petrol')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.fuel_type == 'Petrol'}\">\n      <img src=\"../../../../assets/img/fuel_type/petrol.svg\">\n      <span>Petrol</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectFuelType('Diesel')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.fuel_type == 'Diesel'}\"><img src=\"../../../../assets/img/fuel_type/deseal.svg\"\n      >\n      <span>Diesel</span></ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectFuelType('CNG')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.fuel_type == 'CNG'}\">\n      <img src=\"../../../../assets/img/fuel_type/CNG.svg\"\n      >\n      <span>CNG</span>\n    </ion-col>\n    <ion-col class=\"fuel-type\" (click)=\"selectFuelType('ELECTRIC')\"\n    [ngClass]=\"{'active-service' : this.selectedFilters.fuel_type == 'ELECTRIC'}\">\n      <img src=\"../../../../assets/img/fuel_type/electric.svg\">\n      <span>Electric</span>\n    </ion-col>\n  </ion-row>\n  <br /><br>\n  <h4 style=\"margin-left: 20px\">Brand</h4>\n  <ion-card class=\"chose-category-grid\">\n\n    <div class=\"relative\" \n    \n    (click)=\"selectBrand(list._id)\"\n    \n    *ngFor=\"let list of SubCategoryList\"  \n    [ngClass]=\"{'active-service' : this.selectedFilters.brand_id == list._id}\">\n     \n      <img src=\"{{list.logo}}\" />\n      <p>{{list.subcategoryName}}</p>\n    </div>\n  </ion-card>\n      <br><br>\n      <!-- <ion-button expand=\"block\" color=\"success\" >Apply</ion-button> -->\n      <ion-button (click)=\"apply()\"  class=\"bottom-fix\" color=\"primary\">Apply</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/View Menu/viewMenu.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/View Menu/viewMenu.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!isBrandIdExists\"> Cars </ion-title>\n    <ion-title *ngIf=\"isBrandIdExists\" style=\"text-transform: capitalize\"\n      >{{brand_name}}</ion-title\n    >\n\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/csd-car/search/home\">\n        <ion-icon name=\"search\" style=\"color: white\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openAdvanceSearch()\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"funnel-outline\"\n          style=\"\n            color: white;\n            width: 55px;\n            margin-left: -20px;\n            min-width: -webkit-fill-available;\n          \"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-spinner style=\"margin-left: 49%;\" *ngIf=\"dataLoad\" name=\"lines\"></ion-spinner> -->\n  <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a href=\"/csd-car/home\">Home</a></li>\n        <li class=\"breadcrumb-item\"><a href=\"/csd-car/csd-car-brands\">Car Brands</a></li>\n        <li *ngIf=\"brand_name\" class=\"breadcrumb-item active\" aria-current=\"page\">{{brand_name}}</li>\n      </ol>\n    </nav>\n  <section class=\"ratings-product special-product\" *ngIf=\"productList.length\">\n    <div class=\"content-section\">\n      <ion-row>\n        <button class=\"clear-btn\" (click)=\"clearFilter()\">Clear Filter</button>\n      </ion-row>\n      <div class=\"flex-grid-4\">\n        <div *ngFor=\"let list of productList\" class=\"flex-grid-box\">\n          <div\n            class=\"ratings-slide-item\"\n            [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\">\n            <div class=\"ratings-slide-img\">\n              <img [src]=\"list.imageVarients[0]\" />\n              <p class=\"tags\">\n                <span class=\"tag tag-pink\">Exclusive</span>\n                <span *ngIf=\"list.discount\" class=\"tag tag-blue\"\n                  >₹ {{list.discount}} Cashback\n                </span>\n              </p>\n            </div>\n            <div class=\"ratings-slide-content\">\n              <h6 class=\"spacel-pro-title\">{{list.productName}}</h6>\n              <!-- <p class=\"ratings-star\">\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-half.png\" />\n              <b>{{list.rating}}</b>\n            </p> -->\n              <p class=\"ratings-slide-info\">\n                <span style=\"margin-top: -7px; margin-bottom: 20px\"\n                  >₹ {{list.price}}\n                </span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/tabMenu/tabMenu.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/tabMenu/tabMenu.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <ion-toolbar color=\"light\" style=\"position: fixed;\">\n    <ion-segment scrollable (ionchange)=\"updateTab($event)\" style=\"    height: 90px;\n    top: -10px;\n    /* font-size: small; */\n    /* margin-top: -4px; */\n    margin-bottom: -5px;\" >\n      <ion-segment-button id=\"segment-{{i}}\"   value=\"{{i}}\" *ngFor=\"let category of subcategoryList;  index as i\">\n        <ion-label ><img class=\"categroy-thumb\" src=\"{{category.logo}}\" style=\"margin-top: 10px;\">\n        <span style=\"display: -webkit-box;\" >{{category.subcategoryName}}</span></ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <ion-content>\n    <br><br><br>\n    \n    <ion-slides>\n      <ion-slide *ngFor=\"let category of subcategoryList\" style=\"margin-top: 28px;\n      margin-left: 5px;\">\n        <ion-list *ngIf=\"subcategoryList.length != 0\">\n          <ion-item-sliding id=\"item100\" *ngFor=\"let list of category.products\">\n\n            <ion-grid class=\"horizontalPadding\">\n              <ion-row style=\"left: 0;\">\n                <ion-col size=\"4\" (click)=\"reload()\">\n                  <div class=\"product-img\">\n                  <img class=\"product-thumbnail\"  [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                    *ngIf=\"list.imageVarients.length !== 0\" src=\"{{list.imageVarients[0]}}\">\n                  <img class=\"product-thumbnail\" [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                    *ngIf=\"list.imageVarients.length == 0\" src=\"https://im.rediff.com/getahead/2015/jun/29chicken.jpg\">\n\n                    <span class=\"offer\" *ngIf=\"list.discount\">{{list.discount}}% OFF</span>\n                  </div>\n                </ion-col>\n\n                <ion-col size=\"6\" [routerLink]=\"['/csd-car/csd-car-details/'+ list.id ]\">\n                  <div class=\"text-left\">\n                    <h6 class=\"product-name\">\n                      <!-- <img *ngIf=\"list.isVeg\" src=\"../../../../../assets/img/vag.png\" class=\"vagnon-image-small\">\n                      <img *ngIf=\"!list.isVeg\" src=\"../../../../../assets/img/nonvag.png\" class=\"vagnon-image-small\"> -->\n\n                      {{list.productName}}\n                    </h6>\n                      <p class=\"recently-view-star\">\n                        <!-- <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\"> -->\n                      </p>\n                      <span   >₹ {{list.price}} Lack  </span>\n                      <!-- <span *ngIf=\"list.discount\">₹ {{list.price - list.price * list.discount / 100 | number:'1.2-2' }} Lack &nbsp;<s *ngIf=\"list.discount\">₹ {{list.price}} Lack</s> </span> -->\n                      <!-- <div class=\"rating-align\" style=\"margin-top: 4px;\">\n                        <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\" [ngStyle]=\"{'fill':getColor(num,list.rating)}\">\n\n                        </ion-icon>  &nbsp;<span style=\"    font-size: 12px;\n                        position: absolute;\n                        \">({{list.rating}})</span>\n                      </div> -->\n                      <!-- <ion-button color=\"success\" style=\"    height: 26px;\n                      width: 75px;\">\n                        {{list.rating}}.0&nbsp;<ion-icon\n                          style=\"font-size: 13px;\"\n                          name=\"star\"\n                          *ngFor=\"let num of [1]\"\n                        ></ion-icon></ion-button> -->\n                  </div>\n                </ion-col>\n                <ion-col size=\"2\">\n\n\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item-sliding>\n\n        </ion-list>\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"refesh($event)\">\n          <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n          </ion-refresher-content>\n        </ion-refresher>\n\n      </ion-slide>\n    </ion-slides>\n\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/maruti-csd/maruti-csd.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/maruti-csd/maruti-csd.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        style=\"margin-left: 10px; font-size: 21px\"\n        (click)=\"closeModel()\"\n        name=\"arrow-back-outline\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title> CsdMarutiCarPage </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>The Ultimate Guide to CSD Maruti Cars and Their Prices</h1>\n  <section>\n    <p>\n        Are you in the market for a Maruti car through the Canteen Stores Department (CSD)? You're not alone! Maruti Suzuki, India's largest automobile manufacturer, is a favorite among CSD beneficiaries, offering affordable, fuel-efficient, and reliable vehicles. Here's everything you need to know about buying a Maruti car through the CSD and understanding its pricing.\n        \n        What is the CSD?\n        \n        The Canteen Stores Department (CSD) provides active and retired personnel of the armed forces, paramilitary, and defense services access to goods at subsidized prices. These include daily essentials, household appliances, and even automobiles like Maruti cars. By purchasing through CSD, eligible individuals can save significantly on vehicle costs due to exemptions on GST, excise duties, and registration charges.\n        \n        Why Choose Maruti Suzuki?\n        \n        Maruti Suzuki has been a trusted name in the Indian automotive market for decades. Known for its:\n        \n        Wide Range of Models: From compact hatchbacks like Alto and WagonR to sedans like Ciaz and SUVs like Grand Vitara, Maruti has something for everyone.\n        \n        Fuel Efficiency: Maruti’s vehicles are synonymous with fuel savings, making them a practical choice.\n        \n        Affordable Maintenance: With widespread service centers and low maintenance costs, owning a Maruti car is hassle-free.\n        \n        Resale Value: Maruti cars retain excellent resale value compared to competitors.\n        \n        Popular Maruti Cars Available in CSD\n        \n        Here’s a list of some popular Maruti Suzuki models available through CSD along with their approximate starting prices (subject to change based on location and dealer):\n        \n        Maruti Alto K10\n        \n        Price: Starting from ₹3.60 lakhs (CSD Price)\n        \n        Why Choose: Compact design, fuel-efficient engine, perfect for city drives.\n        \n        Maruti WagonR\n        \n        Price: Starting from ₹4.80 lakhs (CSD Price)\n        \n        Why Choose: Spacious interiors, tall-boy design, and excellent mileage.\n        \n        Maruti Swift\n        \n        Price: Starting from ₹5.90 lakhs (CSD Price)\n        \n        Why Choose: Sporty looks, peppy engine, and advanced features.\n        \n        Maruti Baleno\n        \n        Price: Starting from ₹6.30 lakhs (CSD Price)\n        \n        Why Choose: Premium hatchback with modern styling and a feature-rich cabin.\n        \n        Maruti Dzire\n        \n        Price: Starting from ₹6.50 lakhs (CSD Price)\n        \n        Why Choose: Compact sedan with class-leading comfort and fuel economy.\n        \n        Maruti Brezza\n        \n        Price: Starting from ₹8.30 lakhs (CSD Price)\n        \n        Why Choose: Stylish compact SUV with great ground clearance and tech features.\n        \n        Maruti Grand Vitara\n        \n        Price: Starting from ₹11.20 lakhs (CSD Price)\n        \n        Why Choose: Premium SUV with hybrid technology and bold design.\n        \n        Steps to Purchase a Maruti Car Through CSD\n        \n        Eligibility Check: Ensure you meet the CSD eligibility criteria as a serving or retired defense personnel.\n        \n        Obtain CSD Application Form: Download the form online or get it from your unit canteen.\n        \n        Choose a Model: Select the Maruti car model that fits your needs and budget.\n        \n        Quote Request: Approach an authorized Maruti CSD dealer to get a price quote.\n        \n        Document Submission: Submit all required documents, including your CSD card, salary certificate, and identification proof.\n        \n        Payment & Delivery: After approval, make the payment as per the CSD billing terms and take delivery of your car.\n        \n        Benefits of Buying Through CSD\n        \n        Substantial Savings: Avail of tax exemptions and lower dealer margins.\n        \n        Hassle-Free Registration: Dealers often assist with vehicle registration and other formalities.\n        \n        Warranty & Services: Enjoy the same manufacturer warranty and after-sales services as regular buyers.\n        \n        Final Thoughts\n        \n        Buying a Maruti car through CSD is a smart choice for defense personnel looking to own a reliable vehicle at an affordable price. With a wide range of models to choose from and significant cost savings, it’s no wonder Maruti Suzuki remains a top choice in the CSD lineup.\n        \n        Stay updated with the latest CSD prices and offers by visiting your nearest CSD-authorized Maruti dealership. Drive home your dream car today!\n    </p>\n  </section>\n\n  </ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title> Menu </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button> </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <div class=\"searchContainer\">\n      <ion-searchbar\n        [(ngModel)]=\"searchWord\"\n        placeholder=\"Search food or Restaurant\"\n        color=\"light\"\n        animated\n      >\n      </ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"viewMenu\">\n        <!-- <ion-icon name=\"mainMenu\"></ion-icon> -->\n        <ion-label>View Menu</ion-label>\n\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/pages/menu/advance-serach/advance-search.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu/advance-serach/advance-search.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fuel-type {\n  text-align: center;\n  border: 1px #DCDCDC solid;\n  background-color: #f9f9f9;\n  margin-left: 10px;\n}\n\n.bottom-fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  left: 0;\n  z-index: 99;\n  border-radius: 0px;\n  margin: 0px;\n}\n\n.chose-category-grid {\n  box-shadow: none;\n  margin: 0px;\n}\n\n.chose-category-grid .relative {\n  box-shadow: 0px 0px 10px #ccc;\n  display: inline-block;\n  width: 22%;\n  text-align: center;\n  border-radius: 10px;\n  margin-left: 10px;\n  padding: 10px;\n  margin-top: 9px;\n}\n\n.chose-category-grid .relative img {\n  width: 40px;\n  height: 40px;\n}\n\n.chose-category-grid .relative p {\n  font-size: 13px;\n}\n\n.active-service {\n  color: white;\n  border-bottom: 3px red solid;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9tZW51L2FkdmFuY2Utc2VyYWNoL2FkdmFuY2Utc2VhcmNoLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUvYWR2YW5jZS1zZXJhY2gvYWR2YW5jZS1zZWFyY2guc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FEQ0k7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ047O0FEQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREFNO0VBRUUsZUFBQTtBQ0NSOztBRElFO0VBRUksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9hZHZhbmNlLXNlcmFjaC9hZHZhbmNlLXNlYXJjaC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1ZWwtdHlwZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggI0RDRENEQyBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYm90dG9tLWZpeHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5cbi5jaG9zZS1jYXRlZ29yeS1ncmlke1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLnJlbGF0aXZle1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjIlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICAgcHtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aXZlLXNlcnZpY2V7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2U4NWE1NDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCByZWQgc29saWQ7XG4gICAgICBjb2xvcjpibGFja1xuICB9XG4gICIsIi5mdWVsLXR5cGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4ICNEQ0RDREMgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYm90dG9tLWZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNob3NlLWNhdGVnb3J5LWdyaWQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDBweDtcbn1cbi5jaG9zZS1jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cbi5jaG9zZS1jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmNob3NlLWNhdGVnb3J5LWdyaWQgLnJlbGF0aXZlIHAge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5hY3RpdmUtc2VydmljZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHJlZCBzb2xpZDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu/advance-serach/advance-search.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu/advance-serach/advance-search.ts ***!
  \*************************************************************/
/*! exports provided: AdvanceSearchModelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceSearchModelPage", function() { return AdvanceSearchModelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/product.services */ "./src/app/providers/product.services.ts");






let AdvanceSearchModelPage = class AdvanceSearchModelPage {
    constructor(_ProductService, http, Router, modalController) {
        this._ProductService = _ProductService;
        this.http = http;
        this.Router = Router;
        this.modalController = modalController;
        this.productList = [];
        this.isDataLoaded = false;
        // {
        //   price_from:
        //   price:to:
        //   brand_id:
        //   transmission:
        //   body_type
        //   fuel_type
        // }
        this.selectedFilters = {
        // body_type:'',
        // brand_id:'',
        // fuel_type:''
        };
        this.SubCategoryList = [];
        this.timeMin = 1;
        this.timeMax = 90;
        this.timeMin2 = 0;
        this.timeMax2 = 0;
        this.timeMin2 = this.timeMin;
        this.timeMax2 = this.timeMax;
    }
    ngOnInit() {
        this.getSubCategoryList();
    }
    getSubCategoryList() {
        this._ProductService.listSubCategory().subscribe((data) => {
            this.SubCategoryList = data.SubCategoryList;
        });
    }
    selectBrand(id) {
        this.selectedFilters['brand_id'] = id;
    }
    closeModel() {
        this.modalController.dismiss({
            'dismissed': true,
            'selectedFilters': this.selectedFilters
        });
    }
    setBadge(time) {
        this.timeMin2 = time.lower;
        this.timeMax2 = time.upper;
        console.log("min", this.timeMin2);
        console.log("max", this.timeMax2);
        if (this.timeMax2 && this.timeMin2) {
            this.selectedFilters['price_from'] = this.timeMin2;
            this.selectedFilters['price_to'] = this.timeMax2;
        }
    }
    selectBodyType(body_type) {
        this.selectedFilters['body_type'] = body_type;
    }
    selectFuelType(fuel_type) {
        this.selectedFilters['fuel_type'] = fuel_type;
    }
    apply() {
        this.closeModel();
        this.selectedFilters = {};
    }
};
AdvanceSearchModelPage.ctorParameters = () => [
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
AdvanceSearchModelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-advance-search",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advance-search.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/advance-serach/advance-search.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advance-search.scss */ "./src/app/pages/menu/advance-serach/advance-search.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], AdvanceSearchModelPage);



/***/ }),

/***/ "./src/app/pages/menu/components/View Menu/viewMenu.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu/components/View Menu/viewMenu.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ratings-slide-item {\n  margin: 7px;\n}\n\n.ratings-slide-img {\n  position: relative;\n}\n\n.ratings-slide-img img {\n  height: 132px;\n  border-radius: 5px;\n}\n\n.ratings-slide-img span.offer {\n  position: absolute;\n  left: -7px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.ratings-slide-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: 1px;\n  bottom: -4px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.ratings-product {\n  background-color: var(--ion-background-color);\n  padding-top: 15px;\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.ratings-product h5 {\n  margin-top: 0px;\n  padding: 0px 15px;\n  position: relative;\n}\n\n.ratings-product h5 span {\n  display: block;\n  color: #8e8e8e;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.ratings-product h5 a {\n  position: absolute;\n  right: 15px;\n  top: 8px;\n  text-decoration: none;\n  color: #2dd36f;\n}\n\n.ratings-product p.ratings-star img {\n  width: 14px !important;\n  height: 14px;\n}\n\n.ratings-product .ratings-slide-content {\n  text-align: left;\n  margin-left: 22px;\n  text-transform: capitalize;\n}\n\n.ratings-product .ratings-slide-content h5 {\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 122px;\n  display: inline-block;\n  margin: 0px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star img {\n  margin-right: 5px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star span {\n  color: #898989;\n}\n\n.ratings-product .ratings-slide-content p.ratings-slide-info {\n  margin: 5px 0px;\n  font-size: 16px;\n}\n\n.ratings-product .ratings-slide-content p.ratings-slide-info span {\n  display: block;\n  color: var(--ion-text-color);\n  font-size: 16px;\n}\n\n.special-product .ratings-slide-item {\n  margin: 0px;\n}\n\n.special-product .ratings-slide-img {\n  position: relative;\n}\n\n.special-product .ratings-slide-img img {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 90%;\n  margin-left: 20px;\n}\n\n.special-product .ratings-slide-img p.tags {\n  position: absolute;\n  bottom: 0px;\n  left: 35px;\n}\n\n.special-product .ratings-slide-img p.tags span.tag {\n  font-size: 12px;\n  padding: 5px;\n  margin-right: 10px;\n  color: #fff;\n  border-radius: 3px;\n}\n\n.tag-pink {\n  background-color: #ed5a6b;\n}\n\n.tag-blue {\n  background-color: #5197eb;\n}\n\n.my-custom-modal-css .modal-wrapper {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n\n.select-modal {\n  background: rgba(0, 0, 0, 0.5) !important;\n  padding: 20% 10% !important;\n}\n\n.clear-btn {\n  padding: 10px;\n  /* float: right; */\n  margin-top: 14px;\n  margin-right: 10px;\n  margin-bottom: 18px;\n  margin-left: 18px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9tZW51L2NvbXBvbmVudHMvVmlldyBNZW51L3ZpZXdNZW51LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUvY29tcG9uZW50cy9WaWV3IE1lbnUvdmlld01lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0FDSUY7O0FERkE7RUFDRSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ1FGOztBRE5BO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFRBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNZRjs7QURWQTtFQUNFLGlCQUFBO0FDYUY7O0FEWEE7RUFDRSxjQUFBO0FDY0Y7O0FEWkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ2VGOztBRGJBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7QUNpQkY7O0FEZkE7RUFDRSxrQkFBQTtBQ2tCRjs7QURoQkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDb0JGOztBRGxCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNxQkY7O0FEbkJBO0VBQ0UseUJBQUE7QUNzQkY7O0FEcEJBO0VBQ0UseUJBQUE7QUN1QkY7O0FEcEJBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN1QkY7O0FEcEJBO0VBQ0UseUNBQUE7RUFDQSwyQkFBQTtBQ3VCRjs7QURwQkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN1QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L2NvbXBvbmVudHMvVmlldyBNZW51L3ZpZXdNZW51LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yYXRpbmdzLXNsaWRlLWl0ZW0ge1xuICBtYXJnaW46IDdweDtcbn1cbi5yYXRpbmdzLXNsaWRlLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYXRpbmdzLXNsaWRlLWltZyBpbWcge1xuICBoZWlnaHQ6IDEzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucmF0aW5ncy1zbGlkZS1pbWcgc3Bhbi5vZmZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5yYXRpbmdzLXNsaWRlLWltZyBzcGFuLm9mZmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDFweDtcbiAgYm90dG9tOiAtNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnJhdGluZ3MtcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbi5yYXRpbmdzLXByb2R1Y3QgaDUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmF0aW5ncy1wcm9kdWN0IGg1IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM4ZThlOGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5yYXRpbmdzLXByb2R1Y3QgaDUgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMmRkMzZmO1xufVxuLnJhdGluZ3MtcHJvZHVjdCBwLnJhdGluZ3Mtc3RhciBpbWcge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHg7XG59XG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgaDUge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEyMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xufVxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgLnJhdGluZ3Mtc3RhciBzcGFuIHtcbiAgY29sb3I6ICM4OTg5ODk7XG59XG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgcC5yYXRpbmdzLXNsaWRlLWluZm8ge1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCBwLnJhdGluZ3Mtc2xpZGUtaW5mbyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zcGVjaWFsLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtaXRlbSB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWltZyBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWltZyBwLnRhZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAzNXB4O1xufVxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pbWcgcC50YWdzIHNwYW4udGFnIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi50YWctcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDVhNmI7XG59XG4udGFnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5N2ViO1xufVxuXG4ubXktY3VzdG9tLW1vZGFsLWNzcyAubW9kYWwtd3JhcHBlciB7XG4gIGhlaWdodDogMjAlO1xuICB0b3A6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgZGlzcGxheTogYmxvY2s7ICBcbn1cblxuLnNlbGVjdC1tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMCUgMTAlICAhaW1wb3J0YW50O1xufVxuXG4uY2xlYXItYnRue1xuICBwYWRkaW5nOiAxMHB4O1xuICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIGZsb2F0OiByaWdodDtcblxufSIsIi5yYXRpbmdzLXNsaWRlLWl0ZW0ge1xuICBtYXJnaW46IDdweDtcbn1cblxuLnJhdGluZ3Mtc2xpZGUtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmF0aW5ncy1zbGlkZS1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucmF0aW5ncy1zbGlkZS1pbWcgc3Bhbi5vZmZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJhdGluZ3Mtc2xpZGUtaW1nIHNwYW4ub2ZmZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMXB4O1xuICBib3R0b206IC00cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgaDUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgaDUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzhlOGU4ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IGg1IGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJkZDM2Zjtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCBwLnJhdGluZ3Mtc3RhciBpbWcge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IGg1IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMjJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgLnJhdGluZ3Mtc3RhciBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIgc3BhbiB7XG4gIGNvbG9yOiAjODk4OTg5O1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgcC5yYXRpbmdzLXNsaWRlLWluZm8ge1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IHAucmF0aW5ncy1zbGlkZS1pbmZvIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWl0ZW0ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcGVjaWFsLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtaW1nIGltZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pbWcgcC50YWdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMzVweDtcbn1cblxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pbWcgcC50YWdzIHNwYW4udGFnIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRhZy1waW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNWE2Yjtcbn1cblxuLnRhZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxOTdlYjtcbn1cblxuLm15LWN1c3RvbS1tb2RhbC1jc3MgLm1vZGFsLXdyYXBwZXIge1xuICBoZWlnaHQ6IDIwJTtcbiAgdG9wOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWxlY3QtbW9kYWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjAlIDEwJSAhaW1wb3J0YW50O1xufVxuXG4uY2xlYXItYnRuIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/menu/components/View Menu/viewMenu.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu/components/View Menu/viewMenu.ts ***!
  \*************************************************************/
/*! exports provided: ViewMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMenuPage", function() { return ViewMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _advance_serach_advance_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../advance-serach/advance-search */ "./src/app/pages/menu/advance-serach/advance-search.ts");








let ViewMenuPage = class ViewMenuPage {
    constructor(_ProductService, http, Router, modalController, route, loadingController) {
        this._ProductService = _ProductService;
        this.http = http;
        this.Router = Router;
        this.modalController = modalController;
        this.route = route;
        this.loadingController = loadingController;
        this.productList = [];
        this.isDataLoaded = false;
        this.isBrandIdExists = false;
        this.brand_name = 'Brand';
        this.dataLoad = false;
    }
    ngOnInit() {
        let brand_id = this.route.snapshot.queryParams["brand_id"];
        this.brand_name = this.route.snapshot.queryParams["brand_name"];
        console.log(this.brand_name, "brand_id");
        console.log(this.route.snapshot, "--> brand_id");
        let from = this.route.snapshot.queryParams["price_from"];
        let to = this.route.snapshot.queryParams["price_to"];
        let payload = {};
        if (from & to) {
            payload['price_from'] = from;
            payload['price_to'] = to;
        }
        if (brand_id) {
            this.isBrandIdExists = true;
            payload['brand_id'] = brand_id;
        }
        this.getProductList(payload);
    }
    ionViewWillEnter() {
        let brand_id = this.route.snapshot.queryParams["brand_id"];
        this.brand_name = this.route.snapshot.queryParams["brand_name"];
        console.log(brand_id, "brand_id");
        console.log(this.route.snapshot, "--> brand_id");
        let from = this.route.snapshot.queryParams["price_from"];
        let to = this.route.snapshot.queryParams["price_to"];
        let payload = {};
        if (from & to) {
            payload['price_from'] = from;
            payload['price_to'] = to;
        }
        if (brand_id) {
            this.isBrandIdExists = true;
            payload['brand_id'] = brand_id;
        }
        this.getProductList(payload);
    }
    getProductList(filters = {}) {
        let params = Object.keys(filters).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(filters[k])}`).join('&');
        console.log(params, "params");
        let shopId = localStorage.getItem("shopID");
        this._ProductService.getProductList(shopId, params).subscribe((data) => {
            console.log(this.productList, "this.productList");
            this.productList = data;
            this.isDataLoaded = true;
            this.productList = this.productList.map((obj) => (Object.assign({}, obj, { QTY: 0 })));
            this.presentLoading();
            this.productList.forEach((product) => {
                product.price =
                    this.convertIntoLakh(product.price);
            });
            // console.log(this.productList);
        });
    }
    convertIntoLakh(value) {
        let arr = value.split("-");
        var v1 = '';
        var v2 = '';
        if (arr.length == 2) {
            v1 = Math.abs(arr[0]);
            v2 = Math.abs(arr[1]);
            v1 = (v1 / 100000).toFixed(2);
            v2 = (v2 / 100000).toFixed(2);
        }
        else {
            v1 = Math.abs(arr[0]);
            v1 = (v1 / 100000).toFixed(2);
        }
        let second = (v2) ? " - " + v2 : '';
        return v1 + second + ' Lakh';
    }
    clearFilter() {
        this.isBrandIdExists = false;
        this.dataLoad = false;
        this.getProductList();
    }
    openAdvanceSearch() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModal = yield this.modalController.create({
                component: _advance_serach_advance_search__WEBPACK_IMPORTED_MODULE_6__["AdvanceSearchModelPage"],
                cssClass: 'select-modal'
            });
            yield myModal.present();
            const { data } = yield myModal.onWillDismiss();
            console.log(data);
            this.getProductList(data.selectedFilters);
            return;
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 700
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
ViewMenuPage.ctorParameters = () => [
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ViewMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-viewMenu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewMenu.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/View Menu/viewMenu.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewMenu.scss */ "./src/app/pages/menu/components/View Menu/viewMenu.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], ViewMenuPage);



/***/ }),

/***/ "./src/app/pages/menu/components/tabMenu/tabMenu.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/menu/components/tabMenu/tabMenu.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noRecordsFound {\n  text-align: center;\n  margin-top: 67px;\n  font-weight: bolder;\n  font-family: fantasy;\n}\n\n.select-box {\n  margin-left: 68px;\n  margin-top: 20px;\n}\n\n.searchable-list {\n  width: 100%;\n  padding: 5px;\n  margin-top: 6px;\n}\n\n.submit-btn {\n  margin-left: 62px;\n  font-size: 13px;\n}\n\n.ios page-home ion-header, .md page-home ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.ios page-home ion-navbar, .md page-home ion-navbar {\n  opacity: 0.4;\n  box-shadow: 0px 1px 13px 1px rgba(0, 0, 0, 0.77);\n}\n\n.card-details {\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.noRecordsFound {\n  text-align: center;\n  margin-top: 67px;\n  font-weight: bolder;\n  font-family: fantasy;\n}\n\n.select-box {\n  margin-left: 68px;\n  margin-top: 20px;\n}\n\n.searchable-list {\n  width: 100%;\n  padding: 5px;\n  margin-top: 6px;\n}\n\n.submit-btn {\n  margin-left: 62px;\n  font-size: 13px;\n}\n\n.ios page-home ion-header, .md page-home ion-header {\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.ios page-home ion-navbar, .md page-home ion-navbar {\n  opacity: 0.4;\n  box-shadow: 0px 1px 13px 1px rgba(0, 0, 0, 0.77);\n}\n\n.card-details {\n  color: black;\n  font-size: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 95%;\n  width: 97%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #c59805;\n}\n\n.container:hover .overlay {\n  opacity: 0.9;\n  transform: rotate(360deg);\n}\n\n.text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.box:hover {\n  background-color: #FFCCCC;\n  width: 200px;\n  height: 200px;\n  transform: rotate(180deg);\n}\n\n.product-thumbnail {\n  width: 100px;\n  margin-right: 15px;\n  width: 100%;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.product-name {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 150px;\n  display: inline-block;\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.vagnon-image-small {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.recently-view-star {\n  margin: 0px;\n}\n\n.recently-view-star img {\n  width: 14px;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.product-img {\n  position: relative;\n}\n\n.product-img span.offer {\n  position: absolute;\n  left: -10px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.product-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: 0px;\n  bottom: -5px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.add-button {\n  --border-width: 1px;\n  --border-color: #ccc;\n}\n\n.add-button span {\n  font-size: 20px;\n  margin-top: -4px;\n  margin-left: 6px;\n  color: #a56871;\n}\n\n.plus-button {\n  border: 1px solid #ccc;\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  background-color: #F6EBEF;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 0px;\n}\n\n.plus-button .minus {\n  width: 30%;\n  background-color: #fff;\n  float: left;\n}\n\n.plus-button .plus {\n  width: 30%;\n  background-color: #fff;\n  float: right;\n}\n\n.item-total {\n  position: fixed;\n  bottom: 0px;\n  background-color: #7BC242;\n  width: 100%;\n  z-index: 99;\n}\n\n.item-total ion-grid {\n  padding: 0px;\n}\n\n.item-total .coupon-row {\n  background-color: #4D9436;\n  color: #eeffc2;\n  font-size: 12px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.coupon {\n  margin: 0px;\n}\n\n.total-items {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n\ns {\n  font-size: 13px;\n  color: #545454cc;\n}\n\n.view-cart {\n  text-align: right;\n  padding: 10px;\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.view-cart img {\n  margin-left: 5px;\n  width: 20px;\n  vertical-align: middle;\n  margin-top: -4px;\n  -webkit-filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(1000%) contrast(97%);\n          filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(1000%) contrast(97%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9tZW51L2NvbXBvbmVudHMvdGFiTWVudS90YWJNZW51LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUvY29tcG9uZW50cy90YWJNZW51L3RhYk1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0UsZUFBQTtBQ0FKOztBRE9NO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtBQ0pWOztBRE9NO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0FDTFY7O0FEWUE7RUFDRSxZQUFBO0VBQWEsZUFBQTtFQUFnQixnQkFBQTtFQUFpQiwwQkFBQTtBQ05oRDs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDTkY7O0FEU0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0VBQ0UsZUFBQTtBQ05KOztBRGFNO0VBQ0ksa0NBQUE7VUFBQSwwQkFBQTtBQ1ZWOztBRGFNO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0FDWFY7O0FEa0JBO0VBQ0UsWUFBQTtFQUFhLGVBQUE7RUFBZ0IsZ0JBQUE7RUFBaUIsMEJBQUE7QUNaaEQ7O0FEcUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDbEJGOztBRHFCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSxnQ0FBQTtFQUNBLGtCQUFBO0FDbEJGOztBRHFCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ2xCRjs7QURzQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ25CRjs7QURxQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNsQkY7O0FEb0JBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNqQkY7O0FEbUJBO0VBQ0UsV0FBQTtBQ2hCRjs7QURrQkE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2ZGOztBRGlCQTtFQUNFLGdCQUFBO0FDZEY7O0FEZ0JBO0VBQ0Usa0JBQUE7QUNiRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDWkY7O0FEY0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0FDWEY7O0FEY0E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDWEY7O0FEYUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNWRjs7QURZQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVEY7O0FEV0E7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDUkY7O0FEVUE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDUEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNURjs7QURXQTtFQUNFLFlBQUE7QUNSRjs7QURVQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0FDUEY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDTkY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUdBQUE7VUFBQSxpR0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9jb21wb25lbnRzL3RhYk1lbnUvdGFiTWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubm9SZWNvcmRzRm91bmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDY3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xufVxuXG4uc2VsZWN0LWJveCB7XG4gIG1hcmdpbi1sZWZ0OiA2OHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VhcmNoYWJsZS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uc3VibWl0LWJ0bntcbiAgbWFyZ2luLWxlZnQ6IDYycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW9zLCAubWQge1xuXG4gIHBhZ2UtaG9tZSB7XG5cbiAgICAgIGlvbi1oZWFkZXIge1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgfVxuXG4gICAgICBpb24tbmF2YmFyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxM3B4IDFweCByZ2JhKDAsMCwwLDAuNzcpO1xuICAgICAgfVxuXG4gIH1cblxufVxuXG4uY2FyZC1kZXRhaWxze1xuICBjb2xvcjogYmxhY2s7Zm9udC1zaXplOiAyMHB4O2ZvbnQtd2VpZ2h0OiA2MDA7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5ub1JlY29yZHNGb3VuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG59XG5cbi5zZWxlY3QtYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDY4cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zZWFyY2hhYmxlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5zdWJtaXQtYnRue1xuICBtYXJnaW4tbGVmdDogNjJweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pb3MsIC5tZCB7XG5cbiAgcGFnZS1ob21lIHtcblxuICAgICAgaW9uLWhlYWRlciB7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICB9XG5cbiAgICAgIGlvbi1uYXZiYXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEzcHggMXB4IHJnYmEoMCwwLDAsMC43Nyk7XG4gICAgICB9XG5cbiAgfVxuXG59XG5cbi5jYXJkLWRldGFpbHN7XG4gIGNvbG9yOiBibGFjaztmb250LXNpemU6IDIwcHg7Zm9udC13ZWlnaHQ6IDYwMDt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuXG4vLyAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuaW4tc2VnbWVudCAuc2VnbWVudC1idXR0b24taGFzLWxhYmVsIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NjA3NyAhaW1wb3J0YW50O1xuLy8gICBjb2xvcjogd2hpdGU7XG4vLyB9XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDk1JTtcbiAgd2lkdGg6IDk3JTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE5NywgMTUyLCA1KTtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cblxuLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQ0NDO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi8vIFsjMUEyMzdFLCAjYjVhMWI3LCAjYWFhZmMzLCAjZGFhMzg0LCAjQTVENkE3LCAjNmM0MzMxLCAjNTU1LCAjYTg4NTA0XVxuLnByb2R1Y3QtdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZHVjdC1uYW1le1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi52YWdub24taW1hZ2Utc21hbGx7XG4gIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG59XG4ucmVjZW50bHktdmlldy1zdGFye1xuICBtYXJnaW46IDBweDtcbn1cbi5yZWNlbnRseS12aWV3LXN0YXIgaW1ne1xuICB3aWR0aDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi50ZXh0LWxlZnR7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucHJvZHVjdC1pbWd7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWltZyBzcGFuLm9mZmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtaW1nIHNwYW4ub2ZmZXI6YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogLTBweDtcbiAgYm90dG9tOiAtNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uYWRkLWJ1dHRvbntcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItY29sb3I6ICNjY2M7XG59XG4uYWRkLWJ1dHRvbiBzcGFue1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGNvbG9yOiAjYTU2ODcxO1xufVxuLnBsdXMtYnV0dG9ue1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkVCRUY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnBsdXMtYnV0dG9uIC5taW51c3tcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucGx1cy1idXR0b24gLnBsdXN7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG5cbi5pdGVtLXRvdGFse1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0JDMjQyO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG59XG4uaXRlbS10b3RhbCBpb24tZ3JpZHtcbiAgcGFkZGluZzogMHB4O1xufVxuLml0ZW0tdG90YWwgLmNvdXBvbi1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ5NDM2O1xuICBjb2xvcjogI2VlZmZjMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbn1cbi5jb3Vwb257XG4gIG1hcmdpbjogMHB4O1xufVxuLnRvdGFsLWl0ZW1zIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ze1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNTQ1NDU0Y2Ncbn1cblxuLnZpZXctY2FydHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnZpZXctY2FydCBpbWd7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBmaWx0ZXI6IGludmVydCgyNyUpIHNlcGlhKDUxJSkgc2F0dXJhdGUoMjg3OCUpIGh1ZS1yb3RhdGUoMzQ2ZGVnKSBicmlnaHRuZXNzKDEwMDAlKSBjb250cmFzdCg5NyUpO1xufVxuIiwiLm5vUmVjb3Jkc0ZvdW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2N3B4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LWZhbWlseTogZmFudGFzeTtcbn1cblxuLnNlbGVjdC1ib3gge1xuICBtYXJnaW4tbGVmdDogNjhweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNlYXJjaGFibGUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tbGVmdDogNjJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW9zIHBhZ2UtaG9tZSBpb24taGVhZGVyLCAubWQgcGFnZS1ob21lIGlvbi1oZWFkZXIge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cbi5pb3MgcGFnZS1ob21lIGlvbi1uYXZiYXIsIC5tZCBwYWdlLWhvbWUgaW9uLW5hdmJhciB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzcpO1xufVxuXG4uY2FyZC1kZXRhaWxzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubm9SZWNvcmRzRm91bmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDY3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xufVxuXG4uc2VsZWN0LWJveCB7XG4gIG1hcmdpbi1sZWZ0OiA2OHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VhcmNoYWJsZS1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA2MnB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pb3MgcGFnZS1ob21lIGlvbi1oZWFkZXIsIC5tZCBwYWdlLWhvbWUgaW9uLWhlYWRlciB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xufVxuLmlvcyBwYWdlLWhvbWUgaW9uLW5hdmJhciwgLm1kIHBhZ2UtaG9tZSBpb24tbmF2YmFyIHtcbiAgb3BhY2l0eTogMC40O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43Nyk7XG59XG5cbi5jYXJkLWRldGFpbHMge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDk1JTtcbiAgd2lkdGg6IDk3JTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzU5ODA1O1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMC45O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNDQ0M7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnByb2R1Y3QtdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnZhZ25vbi1pbWFnZS1zbWFsbCB7XG4gIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWNlbnRseS12aWV3LXN0YXIge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJlY2VudGx5LXZpZXctc3RhciBpbWcge1xuICB3aWR0aDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wcm9kdWN0LWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2R1Y3QtaW1nIHNwYW4ub2ZmZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJvZHVjdC1pbWcgc3Bhbi5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogLTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogI2NjYztcbn1cblxuLmFkZC1idXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgY29sb3I6ICNhNTY4NzE7XG59XG5cbi5wbHVzLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RUJFRjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5wbHVzLWJ1dHRvbiAubWludXMge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnBsdXMtYnV0dG9uIC5wbHVzIHtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaXRlbS10b3RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3QkMyNDI7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLml0ZW0tdG90YWwgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pdGVtLXRvdGFsIC5jb3Vwb24tcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREOTQzNjtcbiAgY29sb3I6ICNlZWZmYzI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY291cG9uIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi50b3RhbC1pdGVtcyB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxucyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NDU0NTRjYztcbn1cblxuLnZpZXctY2FydCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnZpZXctY2FydCBpbWcge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgZmlsdGVyOiBpbnZlcnQoMjclKSBzZXBpYSg1MSUpIHNhdHVyYXRlKDI4NzglKSBodWUtcm90YXRlKDM0NmRlZykgYnJpZ2h0bmVzcygxMDAwJSkgY29udHJhc3QoOTclKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/menu/components/tabMenu/tabMenu.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/menu/components/tabMenu/tabMenu.ts ***!
  \**********************************************************/
/*! exports provided: TabMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuPage", function() { return TabMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_product_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/product.services */ "./src/app/providers/product.services.ts");
/* harmony import */ var _providers_shop_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/shop.services */ "./src/app/providers/shop.services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let TabMenuPage = class TabMenuPage {
    constructor(_toast, route, _shopService, _productService, router) {
        this._toast = _toast;
        this.route = route;
        this._shopService = _shopService;
        this._productService = _productService;
        this.router = router;
        this.cartCount = 0;
        this.orderTotal = 0;
        this.addTocartCss = false;
        this.subcategoryList = [];
        this.menuList = [];
        this.addedToCartProductIds = [];
        this.searchproductList = [];
        this.showSearchBox = false;
    }
    refesh(event) {
        window.location.reload();
        setTimeout(() => {
            console.log("Async operation has ended");
            event.target.complete();
        }, 1500);
    }
    ngOnInit() {
        let _subCatId = this.route.snapshot.params.id;
        console.log(_subCatId, "_subCatId");
        if (_subCatId !== 'null') {
            this.selectedSubCategory = _subCatId;
            console.log("id is found", this.selectedSubCategory);
            this.tabAction();
            this.getSubCategoryList();
            this.getProductList();
        }
        else {
            this.makeSelectedCategoryDefault();
        }
    }
    // ngAfterViewInit(): void {
    //   this.getSubCategoryList();
    //   this.getProductList();
    // }
    reload() {
        window.location.reload();
    }
    tabAction() {
        var segment = document.querySelector("ion-segment");
        var slides = document.querySelector("ion-slides");
        segment.addEventListener("ionChange", (ev) => onSegmentChange(ev));
        slides.addEventListener("ionSlideDidChange", (ev) => onSlideDidChange(ev));
        // On Segment change slide to the matching slide
        function onSegmentChange(ev) {
            console.log("slide change", ev, ev.detail.value);
            slideTo(ev.detail.value);
        }
        function slideTo(index) {
            slides.slideTo(index);
        }
        // On Slide change update segment to the matching value
        function onSlideDidChange(ev) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var index = yield slides.getActiveIndex();
                clickSegment(index);
            });
        }
        function clickSegment(index) {
            segment.value = index;
        }
    }
    makeSelectedCategoryDefault() {
        this._shopService.listSubCategory().subscribe((data) => {
            this.subcategoryList = data.SubCategoryList;
            this.selectedSubCategory = this.subcategoryList[1]._id;
            console.log(data, "set default --------------------------", this.selectedSubCategory);
            this.tabAction();
            this.getProductList();
            this.getSubCategoryList();
        });
    }
    getProductList() {
        this._shopService
            .fetchProductList({
            shopId: "all",
        }, {
            limit: 500,
            skip: 0
        })
            .subscribe((data) => {
            this.productList = data;
            this.backupProductList = data;
            console.log(this.productList);
        });
    }
    getSubCategoryList() {
        this._shopService.listSubCategory().subscribe((data) => {
            this._shopService.getMenuList().subscribe((res) => {
                this.subcategoryList = data.SubCategoryList;
                this.subcategoryList.products = [];
                // if(this.selectedSubCategory == undefined && this.subcategoryList){
                //   this.selectedSubCategory =   this.subcategoryList[1]._id
                // }
                // console.log(data, "pp--------------------------", this.selectedSubCategory);
                this.menuList = res;
                this.mapSubCategoryList(res);
            });
        });
    }
    onKey(value) {
        console.log(value, "va");
        this.productList = this.search(value);
        if (value == "") {
            this.productList = this.backupProductList;
        }
    }
    search(value) {
        let filter = value.toLowerCase();
        return this.productList.filter((option) => option.productName.toLowerCase().startsWith(filter));
    }
    mapSubCategoryList(menuList) {
        let self = this;
        this.subcategoryList.forEach(function (val, index) {
            console.log(val, "val");
            val["products"] = [];
            menuList.forEach(function (list) {
                if (val._id == list.subcategoryIds) {
                    val.products.push({
                        id: list._id,
                        productName: list.productName,
                        price: list.price,
                        productImage: list.productImage,
                        imageVarients: list.imageVarients,
                        QTY: 0,
                        isVeg: list.isVeg,
                        discount: list.discount
                    });
                }
            });
            if (val._id == self.selectedSubCategory) {
                console.log("called update");
                self.updateTab(index);
            }
        });
        console.log(this.subcategoryList, "this.subcategoryList");
    }
    ;
    updateTab(index) {
        console.log(index, "index");
        var segment = document.querySelector("ion-segment");
        var slides = document.querySelector("ion-slides");
        slideTo(index);
        onSlideDidChange(index);
        function slideTo(index) {
            slides.slideTo(index);
        }
        // On Slide change update segment to the matching value
        function onSlideDidChange(ev) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var index = yield slides.getActiveIndex();
                clickSegment(index);
            });
        }
        function clickSegment(index) {
            segment.value = index;
        }
        var segment = document.querySelector("ion-segment");
        var slides = document.querySelector("ion-slides");
        segment.addEventListener("ionChange", (ev) => onSegmentChangeNew(ev));
        slides.addEventListener("ionSlideDidChange", (ev) => onSlideDidChangeNew(ev));
        // On Segment change slide to the matching slide
        function onSegmentChangeNew(ev) {
            console.log("slide change", ev, ev.detail.value);
            slideToNew(ev.detail.value);
        }
        function slideToNew(index) {
            slides.slideTo(index);
            // this.activeIndex= await this.slider.getActiveIndex();
            document.getElementById("segment-" + index).scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
        // On Slide change update segment to the matching value
        function onSlideDidChangeNew(ev) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var index = yield slides.getActiveIndex();
                clickSegmentNew(index);
            });
        }
        function clickSegmentNew(index) {
            segment.value = index;
        }
    }
    assignProduct() {
        this._shopService
            .assignProductToCategory({
            productId: this.selectedProduct,
            subcategoryIds: this.selectedCategory,
        })
            .subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data, "data");
            this.selectedProduct = "";
            this.selectedCategory = "";
            const toast = yield this._toast.create({
                message: data.msg,
                duration: 3000,
                color: 'secondary',
                position: "bottom",
                animated: true,
            });
            toast.present();
        }));
    }
    cartAction(action, productData, saveForLater = "") {
        console.log(productData, "productData-->");
        let count = 0;
        if (action == "add") {
            count = 1;
        }
        else if (action == "remove") {
            count = -1;
        }
        let payload = {
            productDetails: {
                productId: productData.id,
                productCount: count,
            },
            UserId: localStorage.getItem("userId"),
            shopId: localStorage.getItem('shopID'),
        };
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
    enableSearch() {
        this.showSearchBox = true;
    }
    backToNormal() {
        this.showSearchBox = false;
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
};
TabMenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_shop_services__WEBPACK_IMPORTED_MODULE_4__["ShopService"] },
    { type: _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TabMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-tabMenu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabMenu.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/tabMenu/tabMenu.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabMenu.scss */ "./src/app/pages/menu/components/tabMenu/tabMenu.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _providers_shop_services__WEBPACK_IMPORTED_MODULE_4__["ShopService"],
        _providers_product_services__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TabMenuPage);



/***/ }),

/***/ "./src/app/pages/menu/maruti-csd/maruti-csd.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/menu/maruti-csd/maruti-csd.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fuel-type {\n  text-align: center;\n  border: 1px #DCDCDC solid;\n  background-color: #f9f9f9;\n  margin-left: 10px;\n}\n\n.bottom-fix {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  left: 0;\n  z-index: 99;\n  border-radius: 0px;\n  margin: 0px;\n}\n\n.chose-category-grid {\n  box-shadow: none;\n  margin: 0px;\n}\n\n.chose-category-grid .relative {\n  box-shadow: 0px 0px 10px #ccc;\n  display: inline-block;\n  width: 22%;\n  text-align: center;\n  border-radius: 10px;\n  margin-left: 10px;\n  padding: 10px;\n  margin-top: 9px;\n}\n\n.chose-category-grid .relative img {\n  width: 40px;\n  height: 40px;\n}\n\n.chose-category-grid .relative p {\n  font-size: 13px;\n}\n\n.active-service {\n  color: white;\n  border-bottom: 3px red solid;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9tZW51L21hcnV0aS1jc2QvbWFydXRpLWNzZC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW51L21hcnV0aS1jc2QvbWFydXRpLWNzZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURDSTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDTjs7QURBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRVI7O0FEQU07RUFFRSxlQUFBO0FDQ1I7O0FESUU7RUFFSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21hcnV0aS1jc2QvbWFydXRpLWNzZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1ZWwtdHlwZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggI0RDRENEQyBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYm90dG9tLWZpeHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5cbi5jaG9zZS1jYXRlZ29yeS1ncmlke1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLnJlbGF0aXZle1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNjY2M7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjIlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgICAgcHtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aXZlLXNlcnZpY2V7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2U4NWE1NDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCByZWQgc29saWQ7XG4gICAgICBjb2xvcjpibGFja1xuICB9XG4gICIsIi5mdWVsLXR5cGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4ICNEQ0RDREMgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYm90dG9tLWZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNob3NlLWNhdGVnb3J5LWdyaWQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDBweDtcbn1cbi5jaG9zZS1jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cbi5jaG9zZS1jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmNob3NlLWNhdGVnb3J5LWdyaWQgLnJlbGF0aXZlIHAge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5hY3RpdmUtc2VydmljZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHJlZCBzb2xpZDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu/maruti-csd/maruti-csd.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu/maruti-csd/maruti-csd.ts ***!
  \*****************************************************/
/*! exports provided: CsdMarutiCarPage1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsdMarutiCarPage1", function() { return CsdMarutiCarPage1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CsdMarutiCarPage1 = class CsdMarutiCarPage1 {
    ngOnInit() {
    }
};
CsdMarutiCarPage1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-csd-maruti-car",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./maruti-csd.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/maruti-csd/maruti-csd.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./maruti-csd.scss */ "./src/app/pages/menu/maruti-csd/maruti-csd.scss")).default]
    })
], CsdMarutiCarPage1);



/***/ }),

/***/ "./src/app/pages/menu/menu-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_View_Menu_viewMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/View Menu/viewMenu */ "./src/app/pages/menu/components/View Menu/viewMenu.ts");
/* harmony import */ var _maruti_csd_maruti_csd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maruti-csd/maruti-csd */ "./src/app/pages/menu/maruti-csd/maruti-csd.ts");




// import { WelcomePage } from '../welcome/welcome';

const routes = [
    {
        path: '',
        component: _components_View_Menu_viewMenu__WEBPACK_IMPORTED_MODULE_3__["ViewMenuPage"],
    },
    {
        path: 'maruti-csd-car-price',
        component: _maruti_csd_maruti_csd__WEBPACK_IMPORTED_MODULE_4__["CsdMarutiCarPage1"],
    },
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/app/pages/menu/menu.ts");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/pages/menu/menu-routing.module.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _components_View_Menu_viewMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/View Menu/viewMenu */ "./src/app/pages/menu/components/View Menu/viewMenu.ts");
/* harmony import */ var _providers_shop_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/shop.services */ "./src/app/providers/shop.services.ts");
/* harmony import */ var _advance_serach_advance_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advance-serach/advance-search */ "./src/app/pages/menu/advance-serach/advance-search.ts");
/* harmony import */ var _components_tabMenu_tabMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tabMenu/tabMenu */ "./src/app/pages/menu/components/tabMenu/tabMenu.ts");
/* harmony import */ var _maruti_csd_maruti_csd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./maruti-csd/maruti-csd */ "./src/app/pages/menu/maruti-csd/maruti-csd.ts");














let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_6__["MenuPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        ],
        declarations: [
            _menu__WEBPACK_IMPORTED_MODULE_5__["MenuPage"],
            _advance_serach_advance_search__WEBPACK_IMPORTED_MODULE_10__["AdvanceSearchModelPage"],
            _components_View_Menu_viewMenu__WEBPACK_IMPORTED_MODULE_8__["ViewMenuPage"],
            _components_tabMenu_tabMenu__WEBPACK_IMPORTED_MODULE_11__["TabMenuPage"],
            _maruti_csd_maruti_csd__WEBPACK_IMPORTED_MODULE_12__["CsdMarutiCarPage1"]
        ],
        providers: [_providers_shop_services__WEBPACK_IMPORTED_MODULE_9__["ShopService"]],
        entryComponents: [_advance_serach_advance_search__WEBPACK_IMPORTED_MODULE_10__["AdvanceSearchModelPage"]
        ]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.scss":
/*!**************************************!*\
  !*** ./src/app/pages/menu/menu.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n * Material Design uses the ripple for activated\n * so only style the iOS activated background\n */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFFQSwwQ0FBQTtBQ0FGOztBREdBOzs7RUFBQTs7QUFJQTtFQUNFLDBEQUFBO0FDQUY7O0FEaUJFO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRFlFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRE9FO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBREVFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREhFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ01KOztBRFJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRGJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURsQkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDcUJKOztBRHZCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUMwQko7O0FENUJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQytCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2ZmZik7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjZjJmMmYyKTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG5cbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcbiAqL1xuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG59XG5cbiRjYXRlZ29yaWVzOiAoXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXG4gIHRvb2xpbmc6ICNmZTRjNTIsXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxuICBkZXNpZ246ICNmZWQwMzUsXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxuICBmb29kOiAjM2JjN2M0LFxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG4iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcbiAqL1xuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9aW9uaWNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9YW5ndWxhcl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWMyODJiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Y29tbXVuaWNhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOGU4ZDkzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9dG9vbGluZ10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmU0YzUyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9c2VydmljZXNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZkOGIyZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRlc2lnbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmVkMDM1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9d29ya3Nob3BdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY5YmI3YjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWZvb2RdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNiYzdjNDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRvY3VtZW50YXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2IxNmJlMztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPW5hdmlnYXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2MDBjYztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu/menu.ts":
/*!************************************!*\
  !*** ./src/app/pages/menu/menu.ts ***!
  \************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuPage = class MenuPage {
    constructor() {
        this.isSearchEnable = false;
        this.searchproductList = [];
    }
    ngOnInit() {
    }
};
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.scss */ "./src/app/pages/menu/menu.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuPage);



/***/ }),

/***/ "./src/app/providers/shop.services.ts":
/*!********************************************!*\
  !*** ./src/app/providers/shop.services.ts ***!
  \********************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let ShopService = class ShopService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.ownerId = "5f6f0e8c1f46bf3f11660245";
    }
    // public ownerId = "5e9aa109812172ce284f5a1a";
    fetchStoreList() {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/getAllStore/${this.ownerId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    createStore(payload) {
        let response;
        payload.ownerId = this.ownerId;
        return this.http
            .post(this.baseUrl + `/api/v1/admin/createStore`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    getCategoryProducts(id) {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/getCategoryProducts/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    fetchProductList(params, page) {
        let response;
        return this.http
            .get(this.baseUrl +
            `/api/v1/admin/${params.shopId}/${this.ownerId}/ProductsList/${page.limit}/${page.skip}?&filter=${params.filter}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    fetchInventryList(filter, page) {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/inventry/listInventry/${this.ownerId}/${filter}/${page.limit}/${page.skip}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    getAllReviewList() {
        let response;
        return this.http.get(this.baseUrl + `/api/v1/admin/ProductReviewList/100/0`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    saveProduct(payload) {
        let response;
        payload.ownerId = this.ownerId;
        return this.http
            .post(this.baseUrl + `/api/v1/admin/SaveProducts`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    deleteShop(storeId) {
        let response;
        return this.http
            .delete(this.baseUrl + `/api/v1/admin/deleteShop/${storeId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    fetchStoreDetails(storeId) {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/getStoreDetails/${storeId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    editStoreDetails(payload) {
        let response;
        return this.http.put(this.baseUrl + `/api/v1/admin/editShop`, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    removeProductFromCategory(productId, subCategoryId) {
        let response;
        return this.http.put(this.baseUrl + `/api/v1/admin/removeProductFromCategory/${productId}/${subCategoryId}`, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    deleteProduct(productId) {
        let response;
        return this.http
            .delete(this.baseUrl + `/api/v1/admin/DeleteProduct/${productId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    fetchProductDetails(productId) {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/getProductDetails/${productId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    editProductDetails(payload) {
        let response;
        return this.http
            .put(this.baseUrl + `/api/v1/admin/EditProduct`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    fetchReviewList() {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/ProductReviewList/10/0`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    orderUpdate(payload) {
        let response;
        return this.http
            .put(this.baseUrl + `/api/v1/admin/shipMentManagement/OrderUpdate`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    AddProductToShop(payload) {
        let response;
        return this.http
            .put(this.baseUrl + `/api/v1/admin/AddProductToShop`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    updateOffer(payload) {
        let response;
        return this.http
            .put(this.baseUrl + `/api/v1/admin/updateOffer`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    createOffer(payload) {
        let response;
        return this.http
            .post(this.baseUrl + `/api/v1/admin/createOffer`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    listOffer() {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/listOffer`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    deleteOffer(id) {
        let response;
        return this.http
            .delete(this.baseUrl + `/api/v1/admin/deleteOffer/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    editOffer(payload, id) {
        let response;
        return this.http
            .put(this.baseUrl + `/api/v1/admin/editOffer/${id}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    removeProductFromShop(productId, shopId) {
        let response;
        return this.http
            .delete(this.baseUrl + `/api/v1/admin/DeleteShopProduct/${productId}/${shopId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    getOrderDetails(orderId) {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/getOrderData/${orderId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    listCategory() {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/listCategory/${this.ownerId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    createCategory(payload) {
        let response;
        return this.http
            .post(this.baseUrl + `/api/v1/admin/createCategory`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    editCategory(id, payload) {
        let response;
        return this.http
            .put(this.baseUrl + `/api/v1/admin/editCategory/${id}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    deleteCategory(id) {
        let response;
        return this.http
            .delete(this.baseUrl + `/api/v1/admin/deleteCategory/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    //
    listSubCategory() {
        let response;
        return this.http
            .get(this.baseUrl + `/api/v1/admin/listSubCategory/${this.ownerId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    createSubCategory(payload) {
        let response;
        return this.http
            .post(this.baseUrl + `/api/v1/admin/createSubCategory`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    editSubCategory(id, payload) {
        let response;
        return this.http
            .put(this.baseUrl + `/api/v1/admin/editSubCategory/${id}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    deleteSubCategory(id) {
        let response;
        return this.http
            .delete(this.baseUrl + `/api/v1/admin/deleteSubCategory/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    assignProductToCategory(payload) {
        let response;
        return this.http
            .post(this.baseUrl + `/api/v1/admin/addCategoryToProduct`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    getMenuList() {
        let response;
        return this.http.get(this.baseUrl + `/api/v1/admin/getMenuList`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    getAnalytics(filter) {
        let response;
        return this.http.get(this.baseUrl + `/api/v1/admin/analytics/${filter}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    // getWallet(userId){
    //   let ow
    //   let response;
    //   return this.http.get(this.baseUrl + `/api/v1/Customer/getWallet/${ownerId}/${userId}`).pipe(
    //     map((data) => {
    //       response = data;
    //       return response.object;
    //     })
    //   );
    // }
    updateProductStatus(id, payload) {
        let response;
        return this.http
            .patch(this.baseUrl + `/api/v1/admin/updateProductStatus/${id}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    uploadImage(payload) {
        let response;
        return this.http
            .post(this.baseUrl + `/api/v1/Admin/saveAllImages`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
    SaveInventry(payload) {
        payload['ownerId'] = this.ownerId;
        let response;
        return this.http
            .post(this.baseUrl + `/api/v1/admin/inventry/AddMoney`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            response = data;
            return response.object;
        }));
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShopService);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map