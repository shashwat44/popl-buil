(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"!isBrandIdExists\"> Cars </ion-title>\n    <ion-title *ngIf=\"isBrandIdExists\" style=\"text-transform: capitalize\"\n      >{{brand_name}}</ion-title\n    >\n\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/tabs/search/home\">\n        <ion-icon name=\"search\" style=\"color: white\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openAdvanceSearch()\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"funnel-outline\"\n          style=\"\n            color: white;\n            width: 55px;\n            margin-left: -20px;\n            min-width: -webkit-fill-available;\n          \"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-spinner style=\"margin-left: 49%;\" *ngIf=\"dataLoad\" name=\"lines\"></ion-spinner> -->\n\n  <section class=\"ratings-product special-product\" *ngIf=\"productList.length\">\n    <div class=\"content-section\">\n      <ion-row>\n        <button class=\"clear-btn\" (click)=\"clearFilter()\">Clear Filter</button>\n      </ion-row>\n      <div class=\"flex-grid-4\">\n        <div *ngFor=\"let list of productList\" class=\"flex-grid-box\">\n          <div\n            class=\"ratings-slide-item\"\n            [routerLink]=\"['/tabs/productDetails/'+ list._id ]\">\n            <div class=\"ratings-slide-img\">\n              <img [src]=\"list.imageVarients[0]\" />\n              <p class=\"tags\">\n                <span class=\"tag tag-pink\">Exclusive</span>\n                <span *ngIf=\"list.discount\" class=\"tag tag-blue\"\n                  >₹ {{list.discount}} Cashback\n                </span>\n              </p>\n            </div>\n            <div class=\"ratings-slide-content\">\n              <h6 class=\"spacel-pro-title\">{{list.productName}}</h6>\n              <!-- <p class=\"ratings-star\">\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-half.png\" />\n              <b>{{list.rating}}</b>\n            </p> -->\n              <p class=\"ratings-slide-info\">\n                <span style=\"margin-top: -7px; margin-bottom: 20px\"\n                  >₹ {{list.price}}\n                </span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/tabMenu/tabMenu.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/components/tabMenu/tabMenu.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n  <ion-toolbar color=\"light\" style=\"position: fixed;\">\n    <ion-segment scrollable (ionchange)=\"updateTab($event)\" style=\"    height: 90px;\n    top: -10px;\n    /* font-size: small; */\n    /* margin-top: -4px; */\n    margin-bottom: -5px;\" >\n      <ion-segment-button id=\"segment-{{i}}\"   value=\"{{i}}\" *ngFor=\"let category of subcategoryList;  index as i\">\n        <ion-label ><img class=\"categroy-thumb\" src=\"{{category.logo}}\" style=\"margin-top: 10px;\">\n        <span style=\"display: -webkit-box;\" >{{category.subcategoryName}}</span></ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <ion-content>\n    <br><br><br>\n    \n    <ion-slides>\n      <ion-slide *ngFor=\"let category of subcategoryList\" style=\"margin-top: 28px;\n      margin-left: 5px;\">\n        <ion-list *ngIf=\"subcategoryList.length != 0\">\n          <ion-item-sliding id=\"item100\" *ngFor=\"let list of category.products\">\n\n            <ion-grid class=\"horizontalPadding\">\n              <ion-row style=\"left: 0;\">\n                <ion-col size=\"4\" (click)=\"reload()\">\n                  <div class=\"product-img\">\n                  <img class=\"product-thumbnail\"  [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                    *ngIf=\"list.imageVarients.length !== 0\" src=\"{{list.imageVarients[0]}}\">\n                  <img class=\"product-thumbnail\" [ngStyle]=\"{'opacity' : list.Status == 'OUT_OF_STOCK' ? 0.4 : 1}\"\n                    *ngIf=\"list.imageVarients.length == 0\" src=\"https://im.rediff.com/getahead/2015/jun/29chicken.jpg\">\n\n                    <span class=\"offer\" *ngIf=\"list.discount\">{{list.discount}}% OFF</span>\n                  </div>\n                </ion-col>\n\n                <ion-col size=\"6\" [routerLink]=\"['/productDetails/'+ list.id ]\">\n                  <div class=\"text-left\">\n                    <h6 class=\"product-name\">\n                      <!-- <img *ngIf=\"list.isVeg\" src=\"../../../../../assets/img/vag.png\" class=\"vagnon-image-small\">\n                      <img *ngIf=\"!list.isVeg\" src=\"../../../../../assets/img/nonvag.png\" class=\"vagnon-image-small\"> -->\n\n                      {{list.productName}}\n                    </h6>\n                      <p class=\"recently-view-star\">\n                        <!-- <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\">\n                        <img src=\"../../../../../assets/img/star-full.png\"> -->\n                      </p>\n                      <span   >₹ {{list.price}} Lack  </span>\n                      <!-- <span *ngIf=\"list.discount\">₹ {{list.price - list.price * list.discount / 100 | number:'1.2-2' }} Lack &nbsp;<s *ngIf=\"list.discount\">₹ {{list.price}} Lack</s> </span> -->\n                      <!-- <div class=\"rating-align\" style=\"margin-top: 4px;\">\n                        <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\" [ngStyle]=\"{'fill':getColor(num,list.rating)}\">\n\n                        </ion-icon>  &nbsp;<span style=\"    font-size: 12px;\n                        position: absolute;\n                        \">({{list.rating}})</span>\n                      </div> -->\n                      <!-- <ion-button color=\"success\" style=\"    height: 26px;\n                      width: 75px;\">\n                        {{list.rating}}.0&nbsp;<ion-icon\n                          style=\"font-size: 13px;\"\n                          name=\"star\"\n                          *ngFor=\"let num of [1]\"\n                        ></ion-icon></ion-button> -->\n                  </div>\n                </ion-col>\n                <ion-col size=\"2\">\n\n\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </ion-item-sliding>\n\n        </ion-list>\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"refesh($event)\">\n          <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n          </ion-refresher-content>\n        </ion-refresher>\n\n      </ion-slide>\n    </ion-slides>\n\n  </ion-content>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button style=\"color: white;\"></ion-menu-button> -->\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title> Menu </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button> </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <div class=\"searchContainer\">\n      <ion-searchbar\n        [(ngModel)]=\"searchWord\"\n        placeholder=\"Search food or Restaurant\"\n        color=\"light\"\n        animated\n      >\n      </ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"viewMenu\">\n        <!-- <ion-icon name=\"mainMenu\"></ion-icon> -->\n        <ion-label>View Menu</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n\n\n");

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




const routes = [
    {
        path: '',
        component: _components_View_Menu_viewMenu__WEBPACK_IMPORTED_MODULE_3__["ViewMenuPage"],
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
            _components_tabMenu_tabMenu__WEBPACK_IMPORTED_MODULE_11__["TabMenuPage"]
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