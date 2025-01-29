function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/dom7/dom7.esm.js":
  /*!***************************************!*\
    !*** ./node_modules/dom7/dom7.esm.js ***!
    \***************************************/

  /*! exports provided: default, $, add, addClass, animate, animationEnd, append, appendTo, attr, blur, change, children, click, closest, css, data, dataset, detach, each, empty, eq, filter, find, focus, focusin, focusout, hasClass, height, hide, html, index, insertAfter, insertBefore, is, keydown, keypress, keyup, mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseover, mouseup, next, nextAll, off, offset, on, once, outerHeight, outerWidth, parent, parents, prepend, prependTo, prev, prevAll, prop, remove, removeAttr, removeClass, removeData, resize, scroll, scrollLeft, scrollTo, scrollTop, show, siblings, stop, styles, submit, text, toggleClass, touchend, touchmove, touchstart, transform, transition, transitionEnd, trigger, val, value, width */

  /***/
  function node_modulesDom7Dom7EsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "$", function () {
      return $;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "add", function () {
      return add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addClass", function () {
      return addClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animate", function () {
      return animate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animationEnd", function () {
      return animationEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "append", function () {
      return append;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appendTo", function () {
      return appendTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "attr", function () {
      return attr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "blur", function () {
      return blur;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "change", function () {
      return change;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "children", function () {
      return children;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "click", function () {
      return click;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "closest", function () {
      return closest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "css", function () {
      return css;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "data", function () {
      return data;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataset", function () {
      return dataset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "detach", function () {
      return detach;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "each", function () {
      return each;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "empty", function () {
      return empty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eq", function () {
      return eq;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filter", function () {
      return filter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "find", function () {
      return find;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focus", function () {
      return focus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusin", function () {
      return focusin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "focusout", function () {
      return focusout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasClass", function () {
      return hasClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "height", function () {
      return height;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hide", function () {
      return hide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "html", function () {
      return html;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "index", function () {
      return index;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insertAfter", function () {
      return insertAfter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insertBefore", function () {
      return insertBefore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "is", function () {
      return is;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keydown", function () {
      return keydown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keypress", function () {
      return keypress;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "keyup", function () {
      return keyup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mousedown", function () {
      return mousedown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseenter", function () {
      return mouseenter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseleave", function () {
      return mouseleave;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mousemove", function () {
      return mousemove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseout", function () {
      return mouseout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseover", function () {
      return mouseover;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mouseup", function () {
      return mouseup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "next", function () {
      return next;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nextAll", function () {
      return nextAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "off", function () {
      return off;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "offset", function () {
      return offset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "on", function () {
      return on;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "once", function () {
      return once;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "outerHeight", function () {
      return outerHeight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "outerWidth", function () {
      return outerWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parent", function () {
      return parent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parents", function () {
      return parents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prepend", function () {
      return prepend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prependTo", function () {
      return prependTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prev", function () {
      return prev;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prevAll", function () {
      return prevAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "prop", function () {
      return prop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "remove", function () {
      return remove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeAttr", function () {
      return removeAttr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeClass", function () {
      return removeClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeData", function () {
      return removeData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resize", function () {
      return resize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scroll", function () {
      return scroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollLeft", function () {
      return scrollLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollTo", function () {
      return scrollTo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "scrollTop", function () {
      return scrollTop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "show", function () {
      return show;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "siblings", function () {
      return siblings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stop", function () {
      return stop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "submit", function () {
      return submit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "text", function () {
      return text;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleClass", function () {
      return toggleClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchend", function () {
      return touchend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchmove", function () {
      return touchmove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "touchstart", function () {
      return touchstart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transform", function () {
      return transform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transition", function () {
      return transition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transitionEnd", function () {
      return transitionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trigger", function () {
      return trigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "val", function () {
      return val;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "value", function () {
      return value;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "width", function () {
      return width;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /**
     * Dom7 3.0.0
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: November 9, 2020
     */


    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }
    /* eslint-disable no-proto */


    function makeReactive(obj) {
      var proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get: function get() {
          return proto;
        },
        set: function set(value) {
          proto.__proto__ = value;
        }
      });
    }

    var Dom7 = /*#__PURE__*/function (_Array) {
      _inheritsLoose(Dom7, _Array);

      function Dom7(items) {
        var _this;

        _this = _Array.call.apply(_Array, [this].concat(items)) || this;
        makeReactive(_assertThisInitialized(_this));
        return _this;
      }

      return Dom7;
    }( /*#__PURE__*/_wrapNativeSuper(Array));

    function arrayFlat(arr) {
      if (arr === void 0) {
        arr = [];
      }

      var res = [];
      arr.forEach(function (el) {
        if (Array.isArray(el)) {
          res.push.apply(res, arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }

    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
      var uniqueArray = [];

      for (var i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }

      return uniqueArray;
    }

    function toCamelCase(string) {
      return string.toLowerCase().replace(/-(.)/g, function (match, group) {
        return group.toUpperCase();
      });
    }

    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }

      var a = [];
      var res = context.querySelectorAll(selector);

      for (var i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }

      return a;
    }

    function $(selector, context) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var arr = [];

      if (!context && selector instanceof Dom7) {
        return selector;
      }

      if (!selector) {
        return new Dom7(arr);
      }

      if (typeof selector === 'string') {
        var html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          var tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;

          for (var i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);

      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }

      return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype;

    function addClass() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        var _el$classList;

        (_el$classList = el.classList).add.apply(_el$classList, classNames);
      });
      return this;
    }

    function removeClass() {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        var _el$classList2;

        (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
      });
      return this;
    }

    function toggleClass() {
      for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classes[_key3] = arguments[_key3];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        classNames.forEach(function (className) {
          el.classList.toggle(className);
        });
      });
    }

    function hasClass() {
      for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        classes[_key4] = arguments[_key4];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      return arrayFilter(this, function (el) {
        return classNames.filter(function (className) {
          return el.classList.contains(className);
        }).length > 0;
      }).length > 0;
    }

    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs


      for (var i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (var attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    }

    function removeAttr(attr) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    }

    function prop(props, value) {
      if (arguments.length === 1 && typeof props === 'string') {
        // Get prop
        if (this[0]) return this[0][props];
      } else {
        // Set props
        for (var i = 0; i < this.length; i += 1) {
          if (arguments.length === 2) {
            // String
            this[i][props] = value;
          } else {
            // Object
            for (var propName in props) {
              this[i][propName] = props[propName];
            }
          }
        }

        return this;
      }

      return this;
    }

    function data(key, value) {
      var el;

      if (typeof value === 'undefined') {
        el = this[0];
        if (!el) return undefined; // Get value

        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute("data-" + key);

        if (dataKey) {
          return dataKey;
        }

        return undefined;
      } // Set value


      for (var i = 0; i < this.length; i += 1) {
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
        el.dom7ElementDataStorage[key] = value;
      }

      return this;
    }

    function removeData(key) {
      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
          el.dom7ElementDataStorage[key] = null;
          delete el.dom7ElementDataStorage[key];
        }
      }
    }

    function dataset() {
      var el = this[0];
      if (!el) return undefined;
      var dataset = {}; // eslint-disable-line

      if (el.dataset) {
        for (var dataKey in el.dataset) {
          dataset[dataKey] = el.dataset[dataKey];
        }
      } else {
        for (var i = 0; i < el.attributes.length; i += 1) {
          var _attr = el.attributes[i];

          if (_attr.name.indexOf('data-') >= 0) {
            dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
          }
        }
      }

      for (var key in dataset) {
        if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
      }

      return dataset;
    }

    function val(value) {
      if (typeof value === 'undefined') {
        // get value
        var el = this[0];
        if (!el) return undefined;

        if (el.multiple && el.nodeName.toLowerCase() === 'select') {
          var values = [];

          for (var i = 0; i < el.selectedOptions.length; i += 1) {
            values.push(el.selectedOptions[i].value);
          }

          return values;
        }

        return el.value;
      } // set value


      for (var _i = 0; _i < this.length; _i += 1) {
        var _el = this[_i];

        if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
          for (var j = 0; j < _el.options.length; j += 1) {
            _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
          }
        } else {
          _el.value = value;
        }
      }

      return this;
    }

    function value(value) {
      return this.val(value);
    }

    function transform(transform) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }

      return this;
    }

    function transition(duration) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
      }

      return this;
    }

    function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      if (!capture) capture = false;

      function handleLiveEvent(e) {
        var target = e.target;
        if (!target) return;
        var eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          var _parents = $(target).parents(); // eslint-disable-line


          for (var k = 0; k < _parents.length; k += 1) {
            if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
          }
        }
      }

      function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      var events = eventType.split(' ');
      var j;

      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            var event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener: listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            var _event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

            el.dom7LiveListeners[_event].push({
              listener: listener,
              proxyListener: handleLiveEvent
            });

            el.addEventListener(_event, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      if (!capture) capture = false;
      var events = eventType.split(' ');

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var handlers = void 0;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (var k = handlers.length - 1; k >= 0; k -= 1) {
              var handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function once() {
      var dom = this;

      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var eventName = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventName = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      function onceHandler() {
        for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          eventArgs[_key8] = arguments[_key8];
        }

        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);

        if (onceHandler.dom7proxy) {
          delete onceHandler.dom7proxy;
        }
      }

      onceHandler.dom7proxy = listener;
      return dom.on(eventName, targetSelector, onceHandler, capture);
    }

    function trigger() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      var events = args[0].split(' ');
      var eventData = args[1];

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];

          if (window.CustomEvent) {
            var evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter(function (data, dataIndex) {
              return dataIndex > 0;
            });
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }

      return this;
    }

    function transitionEnd(callback) {
      var dom = this;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }

      if (callback) {
        dom.on('transitionend', fireCallBack);
      }

      return this;
    }

    function animationEnd(callback) {
      var dom = this;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('animationend', fireCallBack);
      }

      if (callback) {
        dom.on('animationend', fireCallBack);
      }

      return this;
    }

    function width() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

      if (this[0] === window) {
        return window.innerWidth;
      }

      if (this.length > 0) {
        return parseFloat(this.css('width'));
      }

      return null;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          var _styles = this.styles();

          return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function height() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

      if (this[0] === window) {
        return window.innerHeight;
      }

      if (this.length > 0) {
        return parseFloat(this.css('height'));
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          var _styles2 = this.styles();

          return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = document.body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop = el === window ? window.scrollY : el.scrollTop;
        var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }

      return null;
    }

    function hide() {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.display = 'none';
      }

      return this;
    }

    function show() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (el.style.display === 'none') {
          el.style.display = '';
        }

        if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
          // Still not visible
          el.style.display = 'block';
        }
      }

      return this;
    }

    function styles() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }

    function css(props, value) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (var _prop in props) {
              this[i].style[_prop] = props[_prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    }

    function each(callback) {
      if (!callback) return this;
      this.forEach(function (el, index) {
        callback.apply(el, [el, index]);
      });
      return this;
    }

    function filter(callback) {
      var result = arrayFilter(this, callback);
      return $(result);
    }

    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    }

    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var el = this[0];
      var compareWith;
      var i;
      if (!el || typeof selector === 'undefined') return false;

      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      if (selector === document) {
        return el === document;
      }

      if (selector === window) {
        return el === window;
      }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      return false;
    }

    function index() {
      var child = this[0];
      var i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }

        return i;
      }

      return undefined;
    }

    function eq(index) {
      if (typeof index === 'undefined') return this;
      var length = this.length;

      if (index > length - 1) {
        return $([]);
      }

      if (index < 0) {
        var returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }

      return $([this[index]]);
    }

    function append() {
      var newChild;
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

      for (var k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

        for (var i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (var j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }

    function appendTo(parent) {
      $(parent).append(this);
      return this;
    }

    function prepend(newChild) {
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var i;
      var j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    }

    function prependTo(parent) {
      $(parent).prepend(this);
      return this;
    }

    function insertBefore(selector) {
      var before = $(selector);

      for (var i = 0; i < this.length; i += 1) {
        if (before.length === 1) {
          before[0].parentNode.insertBefore(this[i], before[0]);
        } else if (before.length > 1) {
          for (var j = 0; j < before.length; j += 1) {
            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
          }
        }
      }
    }

    function insertAfter(selector) {
      var after = $(selector);

      for (var i = 0; i < this.length; i += 1) {
        if (after.length === 1) {
          after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        } else if (after.length > 1) {
          for (var j = 0; j < after.length; j += 1) {
            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
          }
        }
      }
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }

          return $([]);
        }

        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function nextAll(selector) {
      var nextEls = [];
      var el = this[0];
      if (!el) return $([]);

      while (el.nextElementSibling) {
        var _next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(_next).is(selector)) nextEls.push(_next);
        } else nextEls.push(_next);

        el = _next;
      }

      return $(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        var el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }

          return $([]);
        }

        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function prevAll(selector) {
      var prevEls = [];
      var el = this[0];
      if (!el) return $([]);

      while (el.previousElementSibling) {
        var _prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(_prev).is(selector)) prevEls.push(_prev);
        } else prevEls.push(_prev);

        el = _prev;
      }

      return $(prevEls);
    }

    function siblings(selector) {
      return this.nextAll(selector).add(this.prevAll(selector));
    }

    function parent(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(parents);
    }

    function parents(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var _parent = this[i].parentNode; // eslint-disable-line

        while (_parent) {
          if (selector) {
            if ($(_parent).is(selector)) parents.push(_parent);
          } else {
            parents.push(_parent);
          }

          _parent = _parent.parentNode;
        }
      }

      return $(parents);
    }

    function closest(selector) {
      var closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return $([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      var foundElements = [];

      for (var i = 0; i < this.length; i += 1) {
        var found = this[i].querySelectorAll(selector);

        for (var j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return $(foundElements);
    }

    function children(selector) {
      var children = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var childNodes = this[i].children;

        for (var j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return $(children);
    }

    function remove() {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }

      return this;
    }

    function detach() {
      return this.remove();
    }

    function add() {
      var dom = this;
      var i;
      var j;

      for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        els[_key10] = arguments[_key10];
      }

      for (i = 0; i < els.length; i += 1) {
        var toAdd = $(els[i]);

        for (j = 0; j < toAdd.length; j += 1) {
          dom.push(toAdd[j]);
        }
      }

      return dom;
    }

    function empty() {
      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (el.nodeType === 1) {
          for (var j = 0; j < el.childNodes.length; j += 1) {
            if (el.childNodes[j].parentNode) {
              el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            }
          }

          el.textContent = '';
        }
      }

      return this;
    }

    function scrollTo() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var left = args[0],
          top = args[1],
          duration = args[2],
          easing = args[3],
          callback = args[4];

      if (args.length === 4 && typeof easing === 'function') {
        callback = easing;
        left = args[0];
        top = args[1];
        duration = args[2];
        callback = args[3];
        easing = args[4];
      }

      if (typeof easing === 'undefined') easing = 'swing';
      return this.each(function animate() {
        var el = this;
        var currentTop;
        var currentLeft;
        var maxTop;
        var maxLeft;
        var newTop;
        var newLeft;
        var scrollTop; // eslint-disable-line

        var scrollLeft; // eslint-disable-line

        var animateTop = top > 0 || top === 0;
        var animateLeft = left > 0 || left === 0;

        if (typeof easing === 'undefined') {
          easing = 'swing';
        }

        if (animateTop) {
          currentTop = el.scrollTop;

          if (!duration) {
            el.scrollTop = top;
          }
        }

        if (animateLeft) {
          currentLeft = el.scrollLeft;

          if (!duration) {
            el.scrollLeft = left;
          }
        }

        if (!duration) return;

        if (animateTop) {
          maxTop = el.scrollHeight - el.offsetHeight;
          newTop = Math.max(Math.min(top, maxTop), 0);
        }

        if (animateLeft) {
          maxLeft = el.scrollWidth - el.offsetWidth;
          newLeft = Math.max(Math.min(left, maxLeft), 0);
        }

        var startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;

        function render(time) {
          if (time === void 0) {
            time = new Date().getTime();
          }

          if (startTime === null) {
            startTime = time;
          }

          var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
          var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
          var done;
          if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
          if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

          if (animateTop && newTop > currentTop && scrollTop >= newTop) {
            el.scrollTop = newTop;
            done = true;
          }

          if (animateTop && newTop < currentTop && scrollTop <= newTop) {
            el.scrollTop = newTop;
            done = true;
          }

          if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
            el.scrollLeft = newLeft;
            done = true;
          }

          if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
            el.scrollLeft = newLeft;
            done = true;
          }

          if (done) {
            if (callback) callback();
            return;
          }

          if (animateTop) el.scrollTop = scrollTop;
          if (animateLeft) el.scrollLeft = scrollLeft;
          window.requestAnimationFrame(render);
        }

        window.requestAnimationFrame(render);
      });
    } // scrollTop(top, duration, easing, callback) {


    function scrollTop() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var top = args[0],
          duration = args[1],
          easing = args[2],
          callback = args[3];

      if (args.length === 3 && typeof easing === 'function') {
        top = args[0];
        duration = args[1];
        callback = args[2];
        easing = args[3];
      }

      var dom = this;

      if (typeof top === 'undefined') {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
      }

      return dom.scrollTo(undefined, top, duration, easing, callback);
    }

    function scrollLeft() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var left = args[0],
          duration = args[1],
          easing = args[2],
          callback = args[3];

      if (args.length === 3 && typeof easing === 'function') {
        left = args[0];
        duration = args[1];
        callback = args[2];
        easing = args[3];
      }

      var dom = this;

      if (typeof left === 'undefined') {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
      }

      return dom.scrollTo(left, undefined, duration, easing, callback);
    }

    function animate(initialProps, initialParams) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var els = this;
      var a = {
        props: Object.assign({}, initialProps),
        params: Object.assign({
          duration: 300,
          easing: 'swing' // or 'linear'

          /* Callbacks
          begin(elements)
          complete(elements)
          progress(elements, complete, remaining, start, tweenValue)
          */

        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress: function easingProgress(easing, progress) {
          if (easing === 'swing') {
            return 0.5 - Math.cos(progress * Math.PI) / 2;
          }

          if (typeof easing === 'function') {
            return easing(progress);
          }

          return progress;
        },
        stop: function stop() {
          if (a.frameId) {
            window.cancelAnimationFrame(a.frameId);
          }

          a.animating = false;
          a.elements.each(function (el) {
            var element = el;
            delete element.dom7AnimateInstance;
          });
          a.que = [];
        },
        done: function done(complete) {
          a.animating = false;
          a.elements.each(function (el) {
            var element = el;
            delete element.dom7AnimateInstance;
          });
          if (complete) complete(els);

          if (a.que.length > 0) {
            var que = a.que.shift();
            a.animate(que[0], que[1]);
          }
        },
        animate: function animate(props, params) {
          if (a.animating) {
            a.que.push([props, params]);
            return a;
          }

          var elements = []; // Define & Cache Initials & Units

          a.elements.each(function (el, index) {
            var initialFullValue;
            var initialValue;
            var unit;
            var finalValue;
            var finalFullValue;
            if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
            elements[index] = {
              container: el
            };
            Object.keys(props).forEach(function (prop) {
              initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
              initialValue = parseFloat(initialFullValue);
              unit = initialFullValue.replace(initialValue, '');
              finalValue = parseFloat(props[prop]);
              finalFullValue = props[prop] + unit;
              elements[index][prop] = {
                initialFullValue: initialFullValue,
                initialValue: initialValue,
                unit: unit,
                finalValue: finalValue,
                finalFullValue: finalFullValue,
                currentValue: initialValue
              };
            });
          });
          var startTime = null;
          var time;
          var elementsDone = 0;
          var propsDone = 0;
          var done;
          var began = false;
          a.animating = true;

          function render() {
            time = new Date().getTime();
            var progress;
            var easeProgress; // let el;

            if (!began) {
              began = true;
              if (params.begin) params.begin(els);
            }

            if (startTime === null) {
              startTime = time;
            }

            if (params.progress) {
              // eslint-disable-next-line
              params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
            }

            elements.forEach(function (element) {
              var el = element;
              if (done || el.done) return;
              Object.keys(props).forEach(function (prop) {
                if (done || el.done) return;
                progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                easeProgress = a.easingProgress(params.easing, progress);
                var _el$prop = el[prop],
                    initialValue = _el$prop.initialValue,
                    finalValue = _el$prop.finalValue,
                    unit = _el$prop.unit;
                el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                var currentValue = el[prop].currentValue;

                if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                  el.container.style[prop] = finalValue + unit;
                  propsDone += 1;

                  if (propsDone === Object.keys(props).length) {
                    el.done = true;
                    elementsDone += 1;
                  }

                  if (elementsDone === elements.length) {
                    done = true;
                  }
                }

                if (done) {
                  a.done(params.complete);
                  return;
                }

                el.container.style[prop] = currentValue + unit;
              });
            });
            if (done) return; // Then call

            a.frameId = window.requestAnimationFrame(render);
          }

          a.frameId = window.requestAnimationFrame(render);
          return a;
        }
      };

      if (a.elements.length === 0) {
        return els;
      }

      var animateInstance;

      for (var i = 0; i < a.elements.length; i += 1) {
        if (a.elements[i].dom7AnimateInstance) {
          animateInstance = a.elements[i].dom7AnimateInstance;
        } else a.elements[i].dom7AnimateInstance = a;
      }

      if (!animateInstance) {
        animateInstance = a;
      }

      if (initialProps === 'stop') {
        animateInstance.stop();
      } else {
        animateInstance.animate(a.props, a.params);
      }

      return els;
    }

    function stop() {
      var els = this;

      for (var i = 0; i < els.length; i += 1) {
        if (els[i].dom7AnimateInstance) {
          els[i].dom7AnimateInstance.stop();
        }
      }
    }

    var noTrigger = 'resize scroll'.split(' ');

    function shortcut(name) {
      function eventHandler() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (typeof args[0] === 'undefined') {
          for (var i = 0; i < this.length; i += 1) {
            if (noTrigger.indexOf(name) < 0) {
              if (name in this[i]) this[i][name]();else {
                $(this[i]).trigger(name);
              }
            }
          }

          return this;
        }

        return this.on.apply(this, [name].concat(args));
      }

      return eventHandler;
    }

    var click = shortcut('click');
    var blur = shortcut('blur');
    var focus = shortcut('focus');
    var focusin = shortcut('focusin');
    var focusout = shortcut('focusout');
    var keyup = shortcut('keyup');
    var keydown = shortcut('keydown');
    var keypress = shortcut('keypress');
    var submit = shortcut('submit');
    var change = shortcut('change');
    var mousedown = shortcut('mousedown');
    var mousemove = shortcut('mousemove');
    var mouseup = shortcut('mouseup');
    var mouseenter = shortcut('mouseenter');
    var mouseleave = shortcut('mouseleave');
    var mouseout = shortcut('mouseout');
    var mouseover = shortcut('mouseover');
    var touchstart = shortcut('touchstart');
    var touchend = shortcut('touchend');
    var touchmove = shortcut('touchmove');
    var resize = shortcut('resize');
    var scroll = shortcut('scroll');
    /* harmony default export */

    __webpack_exports__["default"] = $;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar class=\"home-header\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button> </ion-menu-button>\n      <div class=\"brand-logo\" aria-details=\"csd car website logo\">\n        <span>CSD CAR</span>\n      </div>\n    </ion-buttons>\n\n    <ion-title style=\"font-size: 15px\" class=\"text-right\">\n      <span class=\"top-search-field\">\n        <!-- <img\n          alt=\"csd car menu\"\n            (click)=\"toggleMenu()\"\n            src=\"../../../assets/img/menu-bar.png\"\n            style=\"width: 22px\"\n            onerror=\"this.onerror=null;this.src='https://placehold.co/400x300';\"\n            \n            /> -->\n        <input\n          type=\"text\"\n          placeholder=\"  Creta\"\n          routerLink=\"/csd-car/search/home\"\n          class=\"search-bar\"\n          name=\"\"\n          id=\"\"\n        />\n        <ion-icon\n          name=\"search\"\n          class=\"search-icon\"\n          style=\"color: #000\"\n        ></ion-icon>\n      </span>\n      <br />\n    </ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/csd-car/wishList']\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"heart-outline\"\n          style=\"\n            color: white;\n            width: 55px;\n            min-width: -webkit-fill-available;\n          \"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  *ngIf=\"isDataLoaded; else skeleton\"\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"onScroll($event)\"\n>\n  <!-- <ion-col> -->\n  <!-- <h4>Slide change</h4>\n    <swiper direction=\"horizontal\" (slideChange)=\"onSlideChange($event)\">\n      <ng-template *ngFor=\"let item of hotDealList\" swiperSlide>\n        <div>{{ item.title }} </div>\n        <div class=\"trading-product-img\" [routerLink]=\"['/csd-car-details/'+ item._id ]\">\n          <img class=\"item-img\" src=\"{{item.imageVarients[0]}}\" />\n          <p class=\"tags\">\n            <span class=\"tag tag-blue\" *ngIf=\"item.discount\">₹ {{item.discount}} Cashback\n            </span>\n          </p>\n        </div>\n      </ng-template>\n    </swiper> -->\n\n  <ion-slides class=\"img-slide\" [options]=\"productDetialSlider\" pager=\"true\">\n    <ion-slide *ngFor=\"let item of hotDealList\">\n      <ion-grid>\n        <ion-row>\n          <!-- Content Section -->\n          <ion-col size=\"12\" size-md=\"4\">\n            <div class=\"slide-container\">\n              <p class=\"banner-title\">\n                <ion-label *ngFor=\"let con of item.productDescription\">\n                  {{ con }}\n                </ion-label>\n                <br>\n                    <a href=\"tel:+919958008084\" class=\"call-button\">\n                      📞  <b>9958008084</b> (Call Now)\n                    </a>\n              </p>\n            </div>\n          </ion-col>\n\n          <!-- Image Section -->\n          <ion-col size=\"12\" size-md=\"6\">\n            <img\n              class=\"banner-image\"\n              [src]=\"item.productImage\"\n              alt=\"CSD Car Banner\"\n            />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- </ion-col> -->\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"refershpage($event)\">\n    <ion-refresher-content\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n  <div class=\"content-section\">\n    <ion-grid>\n      <ion-row class=\"service-section\">\n        <ion-col\n          class=\"service-content\"\n          [ngClass]=\"{'active-service' : this.service.new_car}\"\n          (click)=\"openService('new_car')\"\n        >\n          <div>\n            <ion-icon name=\"car-sport-outline\"></ion-icon>\n            <p class=\"tab-title\">New Cars</p>\n          </div>\n        </ion-col>\n        <ion-col\n          class=\"service-content\"\n          [ngClass]=\"{'active-service' : this.service.get_insurance}\"\n          (click)=\"openService('get_insurance')\"\n        >\n          <div>\n            <ion-icon name=\"wallet-outline\"></ion-icon>\n            <p class=\"tab-title\">Loan Offers</p>\n          </div>\n        </ion-col>\n        <ion-col\n          class=\"service-content\"\n          (click)=\"openService('test_drive')\"\n          [ngClass]=\"{'active-service' : this.service.test_drive}\"\n        >\n          <div>\n            <ion-icon name=\"car-outline\"></ion-icon>\n            <p class=\"tab-title\">Hot Deals</p>\n          </div>\n        </ion-col>\n        <ion-col\n          class=\"service-content\"\n          (click)=\"openService('store_details')\"\n          [ngClass]=\"{'active-service' : this.service.store_details}\"\n        >\n          <div>\n            <ion-icon name=\"location-outline\"></ion-icon>\n            <p class=\"tab-title\">Store</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid id=\"new-csd-car-budget\" *ngIf=\"service.new_car\">\n      <h5 class=\"budget-label\">Choose Your Budget</h5>\n      <ion-row>\n        <ion-col\n          aria-details=\"csd car budget range 1 to 5 lakh\"\n          [routerLink]=\"['/csd-car/all-csd-cars']\"\n          [queryParams]=\"{'price_from': 1, 'price_to':5}\"\n          class=\"budget-box\"\n          >1-5 Lakh</ion-col\n        >\n        <ion-col\n          aria-details=\"csd car budget range 5 to 10 lakh\"\n          [routerLink]=\"['/csd-car/all-csd-cars']\"\n          [queryParams]=\"{'price_from': 5, 'price_to':9}\"\n          class=\"budget-box\"\n          >5-10 Lakh</ion-col\n        >\n        <ion-col\n          aria-details=\"csd car budget range 10 to 15 lakh\"\n          [routerLink]=\"['/csd-car/all-csd-cars']\"\n          [queryParams]=\"{'price_from': 10, 'price_to':15}\"\n          class=\"budget-box\"\n          >10-15 Lakh</ion-col\n        >\n        <!-- <ion-col [routerLink]=\"['/menu']\" [queryParams]=\"{'price_from': 5, 'price_to':10}\" class=\"budget-box\">10-15 Lakh</ion-col> --> </ion-row\n      >&nbsp;\n      <ion-row style=\"margin-top: -10px\">\n        <ion-col\n          aria-details=\"csd car budget range 15 to 20 lakh\"\n          [routerLink]=\"['/csd-car/all-csd-cars']\"\n          [queryParams]=\"{'price_from': 15, 'price_to':20}\"\n          class=\"budget-box\"\n          >15-20 Lakh</ion-col\n        >\n        <ion-col\n          aria-details=\"csd car budget range 20 to 30 lakh\"\n          [routerLink]=\"['/csd-car/all-csd-cars']\"\n          [queryParams]=\"{'price_from': 20, 'price_to':30}\"\n          class=\"budget-box\"\n          >20-30 Lakh</ion-col\n        >\n        <ion-col\n          aria-details=\"csd car budget range 30 to 50 lakh\"\n          [routerLink]=\"['/menu']\"\n          [queryParams]=\"{'price_from': 30, 'price_to':50}\"\n          class=\"budget-box\"\n          >30-50 Lakh</ion-col\n        >\n      </ion-row>\n      <br />\n      <ion-row>\n        <!-- <ion-col routerLink=\"/category\" size=\"5\" class=\"more-filters\"\n          >\n          <ion-icon name=\"grid-outline\"></ion-icon> Search By Brand</ion-col\n        > -->\n        <ion-col></ion-col>\n        <ion-col routerLink=\"/csd-car/all-csd-cars\" class=\"more-filters\"\n          ><ion-icon name=\"options-outline\"></ion-icon> All Cars</ion-col\n        >\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid id=\"insurance\" *ngIf=\"service.get_insurance\">\n      <h5 class=\"budget-label\">Check Loan Offers</h5>\n      <!-- <ion-item>\n        <ion-label>Select Bank</ion-label>\n        <ion-select [(ngModel)]=\"selectedIns\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option [value]=\"x\" *ngFor=\"let x of InsList\">{{x.Bank}}</ion-select-option>\n\n        </ion-select>\n      </ion-item> -->\n\n      <!-- {{selectedIns | json}} -->\n\n      <!-- &nbsp; -->\n      <div class=\"flex-container\">\n        <div *ngFor=\"let selectedIns of InsList\" class=\"flex-container\">\n          <div style=\"width: 280px !important\">\n            <ion-col>\n              <img\n                alt=\"CSD car bank offers and best csd prices\"\n                [src]=\"selectedIns.Logo\"\n                style=\"height: 60px; width: 70px; margin: 10px 10px\"\n              />\n            </ion-col>\n            <ion-col>\n              <div style=\"margin-left: 20px\">\n                <div><b>Bank :</b> &nbsp;&nbsp;&nbsp;{{selectedIns.Bank}}</div>\n                <br />\n                <div>\n                  <b>Interest Rate :</b> &nbsp;&nbsp;{{selectedIns.Roi}} %\n                </div>\n                <br />\n                <div>\n                  <b>Cashback : </b>&nbsp;<b style=\"color: rgb(205, 67, 67)\"\n                    >{{selectedIns.Cashback}}% </b\n                  >of Loan amount\n                </div>\n                <br />\n              </div>\n            </ion-col>\n            <!-- <ion-col size=\"4\"></ion-col> -->\n          </div>\n        </div>\n      </div>\n\n      <!-- <ion-row style=\"margin-top: -15px\">\n        <ion-input\n          [(ngModel)]=\"queryPayload.car_name\"\n          placeholder=\"  Car Name / Model\"></ion-input>\n        <input\n          [routerLink]=\"['/show-interest/'+'Insurance/'+this.queryPayload.brand+' '+this.queryPayload.car_name]\"\n          type=\"button\"\n          value=\"Submit\"\n          class=\"insurance-btn\" />\n      </ion-row> -->\n    </ion-grid>\n\n    <ion-grid id=\"test-drive\" *ngIf=\"service.test_drive\">\n      <h5 class=\"budget-label\">Hot Deals</h5>\n      <!-- <ion-item>\n        <ion-label>Select Brand</ion-label>\n        <ion-select [(ngModel)]=\"queryPayload.brand\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option value=\"Honda\">Honda</ion-select-option>\n          <ion-select-option value=\"Hyundai\">Hyundai</ion-select-option>\n          <ion-select-option value=\"Toyata\">Toyata</ion-select-option>\n          <ion-select-option value=\"Maruti\">Maruti</ion-select-option>\n          <ion-select-option value=\"Honda\">Honda</ion-select-option>\n          <ion-select-option value=\"Hyundai\">Hyundai</ion-select-option>\n          <ion-select-option value=\"Toyata\">Toyata</ion-select-option>\n          <ion-select-option value=\"Maruti\">Maruti</ion-select-option>\n        </ion-select>\n      </ion-item>\n      &nbsp;\n      <ion-row style=\"margin-top: -15px\">\n        <ion-input [(ngModel)]=\"queryPayload.car_name\" placeholder=\"  Car Name / Model\"></ion-input>\n        <input [routerLink]=\"['/show-interest/'+'Test Drive/'+this.queryPayload.brand+' '+this.queryPayload.car_name]\"\n          type=\"button\" value=\"Submit\" class=\"insurance-btn\" />\n      </ion-row> -->\n      <div *ngFor=\"let item of hotDealList\" id=\"csd-offer-section\">\n        <div>\n          <div\n            style=\"display: flex; align-items: center\"\n            class=\"trading-product-img\"\n            style=\"width: 100%\"\n            [routerLink]=\"['/csd-car/csd-car-details/'+ item._id ]\"\n          >\n            <img\n              alt=\"csd car hot deals and offers\"\n              style=\"    height: 107px;\n              width: 142px\"\n              class=\"item-img\"\n              src=\"{{item.imageVarients[0]}}\"\n            />\n          </div>\n          <div>\n            <b style=\"font-weight: 300 !important; font-weight: 500;\"\n              >{{ item.productName }}</b\n            >\n            <p style=\"font-weight: 300; font-size: 14px\">\n              {{ item.title }}\n            </p>\n          </div>\n        </div>\n      </div>\n    </ion-grid>\n\n    <ion-grid id=\"store-details\" *ngIf=\"service.store_details\">\n      <h5 class=\"budget-label\">Store Details</h5>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-icon name=\"navigate-outline\"></ion-icon>&nbsp;&nbsp;\n          <span class=\"store-detail\" style=\"font-size: 14px\">\n            Brar building, 1/195/2, Piru Vihar, Sadar Bazaar, Delhi Cantonment,\n            New Delhi, Delhi 110010\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-icon name=\"mail-outline\"></ion-icon>\n          <span class=\"store-detail\"\n            ><a\n              class=\"ion-home color-primary item\"\n              href=\"#\"\n              onclick=\"window.open('mailto:contact@csdcar.in?subject=I%20have%20a%20query','_system')\"\n              >contact@csdcar.in</a\n            ></span\n          >\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n          <span class=\"store-detail\">\n            <a (href)=\"callme('9958008084')\" style=\"font-size: 14px\">\n              +91 9958008084</a\n            >\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <hr style=\"background-color: #dcdcdc; height: 3px\" />\n\n    <section class=\"section-padding brand-section\">\n      <div class=\"content-section\">\n        <h5 class=\"section-heading\">Choose Brand</h5>\n        <ion-card class=\"chose-category-grid\">\n          <div\n            class=\"relative\"\n            [routerLink]=\"['/csd-car/all-csd-cars/ +list._id']\"\n            [queryParams]=\"{'brand_id': list._id, 'brand_name':list.subcategoryName}\"\n            routerLinkActive=\"selected\"\n            routerDirection=\"root\"\n            detail=\"false\"\n            *ngFor=\"let list of SubCategoryList\"\n          >\n            <img alt=\"csd car category list\" src=\"{{list.logo}}\" />\n            <p class=\"brand-name\">{{list.subcategoryName}}</p>\n          </div>\n        </ion-card>\n      </div>\n    </section>\n\n    <section class=\"trading-product_ section-padding\">\n      <h5 class=\"section-heading text-center\">Explore. Choose. Drive.</h5>\n      <ion-card>\n        <ion-item href=\"#\" class=\"ion-activated\">\n          <ion-icon name=\"wallet-outline\" slot=\"start\"></ion-icon>\n          <ion-label [routerLink]=\"['/csd-car/all-csd-cars']\"\n            >Guaranteed offers on every car</ion-label\n          >\n        </ion-item>\n\n        <ion-item href=\"#\">\n          <ion-icon name=\"pricetag-outline\" slot=\"start\"></ion-icon>\n          <ion-label [routerLink]=\"['/csd-car/show-interest/Book Car/--']\"\n            >Book car and Get delivery at your home</ion-label\n          >\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"cube-outline\" slot=\"start\"></ion-icon>\n          <ion-label [routerLink]=\"['/csd-car/csd-car-brands']\"\n            >All Brands under one roof</ion-label\n          >\n        </ion-item>\n\n        <ion-item class=\"ion-activated\">\n          <ion-icon name=\"speedometer-outline\" slot=\"start\"></ion-icon>\n          <ion-label [routerLink]=\"['/csd-car/show-interest/Book Car/--']\"\n            >Test drive</ion-label\n          >\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Car loan</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n          <ion-label [routerLink]=\"['/csd-car/show-interest/Insurance/--']\"\n            >Car insurance</ion-label\n          >\n        </ion-item>\n      </ion-card>\n    </section>\n  </div>\n  <section class=\"trading-product section-padding\" *ngIf=\"productList.length\">\n    <div class=\"content-section\">\n      <h5 class=\"section-heading\">Popular Cars</h5>\n      <!-- <ion-slides [options]=\"sliderFeatured\" style=\"padding: 15px 0px\"> -->\n      <div class=\"flex-grid-4\">\n        <div\n          class=\"category-grid flex-grid-box\"\n          *ngFor=\"let list of productList | slice:0:5\"\n        >\n          <div class=\"trading-product-item\">\n            <div\n              class=\"trading-product-img\"\n              [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\"\n            >\n              <img\n                alt=\"CSD {{list.productName}} available at subsidized prices\"\n                class=\"item-img\"\n                src=\"{{list.imageVarients[0]}}\"\n              />\n              <p class=\"tags\">\n                <span class=\"tag tag-blue\" *ngIf=\"list.discount\"\n                  >₹ {{list.discount}} Cashback\n                </span>\n              </p>\n            </div>\n            <p class=\"popular-label\">&nbsp;&nbsp;{{list.productName}}</p>\n            <span style=\"font-size: 14px; margin-left: 2px\"\n              >&nbsp;&nbsp;₹ {{list.price}}\n            </span>\n            <!-- <span *ngIf=\"list.discount\"\n            >₹ {{list.discountedPrice |number:'1.2-2'}} Lack &nbsp;<s\n              *ngIf=\"list.discount\"\n              >₹ {{list.price}} Lack</s\n            >\n          </span> -->\n            <!-- <br> -->\n\n            <!-- <span style=\"font-size: 12px;\">&nbsp;&nbsp;12 BHP | 17 M | 1200 CC</span> -->\n          </div>\n        </div>\n      </div>\n      <!-- </ion-slides> -->\n    </div>\n  </section>\n  <!-- <section class=\"trading-product\">\n    <h5>Offers</h5>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\" routerLink=\"/offers/all\">\n          <div class=\"offer-item offer-item-one\">\n            <p><b>all</b> offers</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" routerLink=\"/offers/false\">\n          <div class=\"offer-item offer-item-two\">\n            <p>\n              <small>New</small>\n              <b>Coupons</b>\n            </p>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" routerLink=\"/offers/true\">\n          <div class=\"offer-item offer-item-three\">\n            <p><b [routerLink]=\"['/menu']\">Explore More</b></p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </section> -->\n\n  <section class=\"ratings-product section-padding\" *ngIf=\"false\">\n    <h5>\n      Recommended <span>Car For You</span>\n      <a\n        [routerLink]=\"'/menu'\"\n        routerLinkActive=\"selected\"\n        routerDirection=\"root\"\n        detail=\"false\"\n        >See all</a\n      >\n    </h5>\n    <ion-slides [options]=\"sliderNearyou\" style=\"padding: 0px 20px 10px\">\n      <ion-slide *ngFor=\"let list of recomendedList | slice:0:15\">\n        <div class=\"ratings-slide-item\">\n          <div\n            class=\"ratings-slide-img\"\n            routerLink=\"/csd-car/csd-car-details/{{list._id}}\"\n          >\n            <img\n              alt=\"CSD Recommended - {{list.productName}} available at best prices in delhi and Gurgaon\"\n              [src]=\"list.imageVarients[0]\"\n            />\n            <!-- <span class=\"offer\" *ngIf=\"list.discount\">\n              {{list.discount}}% OFF</span\n            > -->\n          </div>\n          <div\n            class=\"ratings-slide-content\"\n            routerLink=\"/csd-car//csd-car-details/{{list._id}}\"\n          >\n            <!-- <h5 style=\"text-transform: capitalize\">{{list.productName}}</h5> -->\n            <!-- <p class=\"ratings-star\">\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-half.png\" />\n\n              <b>{{list.rating}}</b>\n            </p> -->\n            <!-- <p class=\"ratings-slide-info\">\n              <span *ngIf=\"!list.discount\">₹ {{list.price}} Lack </span>\n              <span *ngIf=\"list.discount\"\n                >₹ {{list.discountedPrice |number :'1.2-2' }} Lack &nbsp;<s\n                  *ngIf=\"list.discount\"\n                  >₹ {{list.price}} Lack</s\n                >\n              </span>\n            </p> -->\n            <p class=\"popular-label\">\n              &nbsp;&nbsp;{{list.productName}}<br />\n              <span style=\"font-size: 14px; margin-left: 2px\"\n                >&nbsp;&nbsp;₹ {{list.price}}\n              </span>\n            </p>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </section>\n\n  <section\n    class=\"ratings-product special-product section-padding\"\n    *ngIf=\"productList.length\"\n  >\n    <div class=\"content-section\">\n      <h5 class=\"section-heading\">Car Collections</h5>\n      <div class=\"flex-grid-4\">\n        <div\n          *ngFor=\"let list of productList | slice:0:5\"\n          class=\"slide-left-align flex-grid-box\"\n        >\n          <div\n            class=\"ratings-slide-item\"\n            [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\"\n          >\n            <div class=\"ratings-slide-img\">\n              <img\n                alt=\"CSD {{list.productName}} available at lowest prices\"\n                [src]=\"list.imageVarients[0]\"\n              />\n              <p class=\"tags\">\n                <!-- <span class=\"tag tag-pink\">Exclusive</span> -->\n                <span *ngIf=\"list.discount\" class=\"tag tag-blue\"\n                  >₹ {{list.discount}} Cashback\n                </span>\n              </p>\n            </div>\n            <div class=\"ratings-slide-content\">\n              <p class=\"popular-label\">\n                &nbsp;&nbsp;{{list.productName}}<br />\n                <span style=\"font-size: 14px; margin-left: 2px\"\n                  >&nbsp;&nbsp;₹ {{list.price}}\n                </span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section\n    class=\"ratings-product special-product\"\n    *ngIf=\"productList.length\"\n    style=\"display: none\"\n  >\n    <!-- <h5>BROWSE CAR BY</h5>\n    <ion-row>\n      <ion-col\n        ><ion-card style=\"height: 77px\">\n          <ion-card-header [routerLink]=\"['/category']\">\n            <ion-card-title class=\"browse-by\"\n              ><ion-icon\n                style=\"font-size: 23px\"\n                name=\"star-half-outline\"\n              ></ion-icon>\n              &nbsp; Brand</ion-card-title\n            >\n          </ion-card-header>\n\n          <ion-card-content> </ion-card-content> </ion-card\n      ></ion-col>\n      <ion-col\n        ><ion-card>\n          <ion-card-header [routerLink]=\"['/menu/null']\">\n            <ion-card-title class=\"browse-by\"\n              ><ion-icon\n                style=\"font-size: 23px\"\n                name=\"car-sport-outline\"\n              ></ion-icon>\n              &nbsp; Price</ion-card-title\n            >\n          </ion-card-header>\n\n          <ion-card-content> </ion-card-content> </ion-card\n      ></ion-col>\n    </ion-row> -->\n    <!-- <ion-row>\n      <ion-col \n        ><ion-card style=\"height: 77px;\">\n          <ion-card-header>\n            <ion-card-title class=\"browse-by\"><ion-icon style=\"font-size: 23px;\" name=\"pricetag-outline\"></ion-icon> &nbsp; Price</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content> </ion-card-content> </ion-card\n      ></ion-col>\n      <ion-col\n        ><ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"browse-by\"><ion-icon style=\"font-size: 23px;\" name=\"water-outline\"></ion-icon> &nbsp; Fuel Type</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content> </ion-card-content> </ion-card\n      ></ion-col>\n    </ion-row> -->\n    <ion-row *ngIf=\"false\">\n      <ion-col\n        ><ion-card>\n          <ion-item>\n            <img\n              src=\"https://www.dsf.my/wp-content/uploads/2019/11/Honda-City-Turbo-front-view_1.jpg?v=1574672618\"\n              class=\"short-list\"\n              alt=\"\"\n            />\n            <ion-label>Honda City v MT</ion-label>\n            <ion-button [routerLink]=\"['/menu']\" fill=\"outline\" slot=\"end\"\n              >View</ion-button\n            >\n          </ion-item>\n\n          <ion-card-content>\n            The All-New City is smartly styled with dignified stature and\n            superior technological prowess...\n          </ion-card-content>\n        </ion-card></ion-col\n      >\n    </ion-row>\n  </section>\n\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col>\n      <!-- <iframe width=\"1000\" height=\"500\" src=\"https://www.youtube.com/embed/R1v3Xnz-IB0?si=fQpXLXywWdKbU0D9\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" \n    rel=\"0\" controls=\"0\" showinfo=\"0\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe> -->\n\n      <iframe\n        width=\"1000\"\n        height=\"500\"\n        src=\"https://www.youtube-nocookie.com/embed/R1v3Xnz-IB0?rel=0&controls=0&showinfo=0\"\n        title=\"YouTube video player\"\n        frameborder=\"0\"\n        allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n        referrerpolicy=\"strict-origin-when-cross-origin\"\n        allowfullscreen\n      >\n      </iframe>\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n  </ion-row>\n\n  <div>\n    <a href=\"tel:+919958008084\" class=\"call-button\" style=\"margin-left: 20%;\n    background-color: cadetblue;\">\n      📞 Call Now 9958008084\n    </a>\n  </div>\n  <!-- <div class=\"cta-container\"> -->\n    <!-- <ion-grid>\n    <ion-row style=\"background:#22080e\">\n      <ion-col> 👍 </ion-col>\n      <ion-col> <a href=\"#\" class=\"cta-button\">Book Now!</a> </ion-col>\n      <ion-col> 👍  </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <!-- </div> -->\n\n  <p class=\"subtitle\">For Business Success!</p>\n  <section\n    class=\"ratings-product special-product latest-cars section-padding\"\n    *ngIf=\"productList.length\"\n  >\n    <div class=\"content-section\">\n      <h5 class=\"section-heading\">Latest Cars</h5>\n      <div class=\"flex-grid-4\">\n        <div\n          class=\"flex-grid-box\"\n          *ngFor=\"let list of productList | slice: productList.length-5 :productList.length \"\n        >\n          <div\n            class=\"ratings-slide-item\"\n            [routerLink]=\"['/csd-car/csd-car-details/'+ list._id ]\"\n          >\n            <div class=\"ratings-slide-img\">\n              <img\n                alt=\"CSD car - {{list.productName}} available at discounted prices\"\n                [src]=\"list.imageVarients[0]\"\n              />\n              <p class=\"tags\">\n                <!-- <span class=\"tag tag-pink\">Exclusive</span> -->\n                <span *ngIf=\"list.discount\" class=\"tag tag-blue\"\n                  >₹ {{list.discount}} Cashback\n                </span>\n              </p>\n            </div>\n            <div\n              class=\"ratings-slide-content\"\n              style=\"margin-bottom: 20px; margin-top: 3px; line-height: 12px\"\n            >\n              <h6 class=\"spacel-pro-title\">{{list.productName}}</h6>\n              <!-- <p class=\"ratings-star\">\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-full.png\" />\n              <img src=\"../../../assets/img/star-half.png\" />\n              <b>{{list.rating}}</b>\n            </p> -->\n              <p class=\"ratings-slide-info\">\n                <span>₹ {{list.price}} </span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ion-content>\n\n<ng-template #skeleton>\n  <div style=\"height: 200px; width: 100%; border: 1p black solid\">\n    <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n  </div>\n  <div>\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    </div>\n\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-item *ngFor=\"let item of [1, 2, 3,4]\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n\n  <!-- </ion-list> -->\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/ssr-window/ssr-window.esm.js":
  /*!***************************************************!*\
    !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
    \***************************************************/

  /*! exports provided: extend, getDocument, getWindow, ssrDocument, ssrWindow */

  /***/
  function node_modulesSsrWindowSsrWindowEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extend", function () {
      return extend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDocument", function () {
      return getDocument;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWindow", function () {
      return getWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ssrDocument", function () {
      return ssrDocument;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ssrWindow", function () {
      return ssrWindow;
    });
    /**
     * SSR Window 3.0.0
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: November 9, 2020
     */

    /* eslint-disable no-param-reassign */


    function isObject(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend(target, src) {
      if (target === void 0) {
        target = {};
      }

      if (src === void 0) {
        src = {};
      }

      Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
          extend(target[key], src[key]);
        }
      });
    }

    var ssrDocument = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ''
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS: function createElementNS() {
        return {};
      },
      importNode: function importNode() {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };

    function getDocument() {
      var doc = typeof document !== 'undefined' ? document : {};
      extend(doc, ssrDocument);
      return doc;
    }

    var ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState: function replaceState() {},
        pushState: function pushState() {},
        go: function go() {},
        back: function back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return '';
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
      matchMedia: function matchMedia() {
        return {};
      },
      requestAnimationFrame: function requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }

        return setTimeout(callback, 0);
      },
      cancelAnimationFrame: function cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }

        clearTimeout(id);
      }
    };

    function getWindow() {
      var win = typeof window !== 'undefined' ? window : {};
      extend(win, ssrWindow);
      return win;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/angular/fesm2015/swiper_angular.js":
  /*!****************************************************************!*\
    !*** ./node_modules/swiper/angular/fesm2015/swiper_angular.js ***!
    \****************************************************************/

  /*! exports provided: SwiperComponent, SwiperModule, SwiperSlideDirective */

  /***/
  function node_modulesSwiperAngularFesm2015Swiper_angularJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperComponent", function () {
      return SwiperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperModule", function () {
      return SwiperModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwiperSlideDirective", function () {
      return SwiperSlideDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var swiper_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! swiper/core */
    "./node_modules/swiper/swiper.esm.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isShowEl(val, obj, el) {
      return coerceBooleanProperty(val) === true && obj && !obj.el || !(typeof obj !== 'boolean' && obj.el !== (el === null || el === void 0 ? void 0 : el.nativeElement) && (typeof obj.el === 'string' || typeof obj.el === 'object'));
    }

    function extend(target, src) {
      var noExtend = ['__proto__', 'constructor', 'prototype'];
      Object.keys(src).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      }).forEach(function (key) {
        if (typeof target[key] === 'undefined') {
          target[key] = src[key];
          return;
        }

        if (target[key] && !src[key]) {
          return;
        }

        if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
          if (src[key].__swiper__) target[key] = src[key];else extend(target[key], src[key]);
        } else {
          target[key] = src[key];
        }
      });
    }

    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }

    var ignoreNgOnChanges = ['pagination', 'navigation', 'scrollbar', 'virtual'];

    function setProperty(val) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (isObject(val)) {
        return val;
      }

      if (coerceBooleanProperty(val) === true) {
        return obj;
      }

      return false;
    }
    /* underscore in name -> watch for changes */


    var paramsList = ['init', '_direction', 'touchEventsTarget', 'initialSlide', '_speed', 'cssMode', 'updateOnWindowResize', 'resizeObserver', 'nested', 'focusableElements', '_width', '_height', 'preventInteractionOnTransition', 'userAgent', 'url', '_edgeSwipeDetection', '_edgeSwipeThreshold', '_freeMode', '_freeModeMomentum', '_freeModeMomentumRatio', '_freeModeMomentumBounce', '_freeModeMomentumBounceRatio', '_freeModeMomentumVelocityRatio', '_freeModeSticky', '_freeModeMinimumVelocity', '_autoHeight', 'setWrapperSize', 'virtualTranslate', '_effect', 'breakpoints', '_spaceBetween', '_slidesPerView', '_slidesPerColumn', '_slidesPerColumnFill', '_slidesPerGroup', '_slidesPerGroupSkip', '_centeredSlides', '_centeredSlidesBounds', '_slidesOffsetBefore', '_slidesOffsetAfter', 'normalizeSlideIndex', '_centerInsufficientSlides', '_watchOverflow', 'roundLengths', 'touchRatio', 'touchAngle', 'simulateTouch', '_shortSwipes', '_longSwipes', 'longSwipesRatio', 'longSwipesMs', '_followFinger', 'allowTouchMove', '_threshold', 'touchMoveStopPropagation', 'touchStartPreventDefault', 'touchStartForcePreventDefault', 'touchReleaseOnEdges', 'uniqueNavElements', '_resistance', '_resistanceRatio', '_watchSlidesProgress', '_watchSlidesVisibility', '_grabCursor', 'preventClicks', 'preventClicksPropagation', '_slideToClickedSlide', '_preloadImages', 'updateOnImagesReady', '_loop', '_loopAdditionalSlides', '_loopedSlides', '_loopFillGroupWithBlank', 'loopPreventsSlide', '_allowSlidePrev', '_allowSlideNext', '_swipeHandler', '_noSwiping', 'noSwipingClass', 'noSwipingSelector', 'passiveListeners', 'containerModifierClass', 'slideClass', 'slideBlankClass', 'slideActiveClass', 'slideDuplicateActiveClass', 'slideVisibleClass', 'slideDuplicateClass', 'slideNextClass', 'slideDuplicateNextClass', 'slidePrevClass', 'slideDuplicatePrevClass', 'wrapperClass', 'runCallbacksOnInit', 'observer', 'observeParents', 'observeSlideChildren', // modules
    'a11y', 'autoplay', '_controller', 'coverflowEffect', 'cubeEffect', 'fadeEffect', 'flipEffect', 'hashNavigation', 'history', 'keyboard', 'lazy', 'mousewheel', '_navigation', '_pagination', 'parallax', '_scrollbar', '_thumbs', 'virtual', 'zoom']; // eslint-disable-next-line

    var ɵ0 = function ɵ0(key) {
      return key.replace(/_/, '');
    };

    var allowedParams = paramsList.map(ɵ0);

    function getParams() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var params = {
        on: {}
      };
      var passedParams = {};
      extend(params, swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"].defaults);
      extend(params, swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"].extendedDefaults);
      params._emitClasses = true;
      var rest = {};
      Object.keys(obj).forEach(function (key) {
        var _key = key.replace(/^_/, '');

        if (typeof obj[_key] === 'undefined') return;

        if (allowedParams.indexOf(_key) >= 0) {
          if (isObject(obj[_key])) {
            params[_key] = {};
            passedParams[_key] = {};
            extend(params[_key], obj[_key]);
            extend(passedParams[_key], obj[_key]);
          } else {
            params[_key] = obj[_key];
            passedParams[_key] = obj[_key];
          }
        } else {
          rest[_key] = obj[_key];
        }
      });
      return {
        params: params,
        passedParams: passedParams,
        rest: rest
      };
    }

    var SwiperSlideDirective = /*#__PURE__*/function () {
      function SwiperSlideDirective(template) {
        _classCallCheck(this, SwiperSlideDirective);

        this.template = template;
        this["class"] = '';
        this.slideData = {
          isActive: false,
          isPrev: false,
          isNext: false,
          isVisible: false,
          isDuplicate: false
        };
      }

      _createClass2(SwiperSlideDirective, [{
        key: "_hasClass",
        value: function _hasClass(classNames) {
          var _this2 = this;

          return classNames.some(function (className) {
            return _this2._classNames.indexOf(className) >= 0;
          });
        }
      }, {
        key: "zoom",
        set: function set(val) {
          this._zoom = coerceBooleanProperty(val);
        },
        get: function get() {
          return this._zoom;
        }
      }, {
        key: "classNames",
        get: function get() {
          return this._classNames;
        },
        set: function set(val) {
          if (this._classNames === val) {
            return;
          }

          this._classNames = val;
          this.slideData = {
            isActive: this._hasClass(['swiper-slide-active', 'swiper-slide-duplicate-active']),
            isVisible: this._hasClass(['swiper-slide-visible']),
            isDuplicate: this._hasClass(['swiper-slide-duplicate']),
            isPrev: this._hasClass(['swiper-slide-prev', 'swiper-slide-duplicate-prev']),
            isNext: this._hasClass(['swiper-slide-next', 'swiper-slide-duplicate-next'])
          };
        }
      }]);

      return SwiperSlideDirective;
    }();

    SwiperSlideDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[swiperSlide]'
      }]
    }];

    SwiperSlideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    SwiperSlideDirective.propDecorators = {
      virtualIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "class": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      zoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var SwiperComponent = /*#__PURE__*/function () {
      function SwiperComponent(_ngZone, elementRef, _changeDetectorRef, _platformId) {
        var _this3 = this;

        _classCallCheck(this, SwiperComponent);

        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._platformId = _platformId;
        this.slideClass = 'swiper-slide';
        this.wrapperClass = 'swiper-wrapper';
        this.showNavigation = true;
        this.showPagination = true;
        this.showScrollbar = true; // prettier-ignore

        this.s__beforeBreakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s__containerClasses = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s__slideClass = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s__swiper = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_afterInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_autoplay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_autoplayStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_autoplayStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_beforeDestroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_beforeInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_beforeLoopFix = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_beforeResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_beforeSlideChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_beforeTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_changeDirection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_doubleTap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_doubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_fromEdge = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_hashChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_hashSet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_imagesReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_init = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_keyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_lazyImageLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_lazyImageReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_loopFix = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_momentumBounce = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_navigationHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_navigationShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_observerUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_orientationchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_paginationHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_paginationRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_paginationShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_paginationUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_progress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_reachBeginning = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_reachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_realIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_scrollbarDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_scrollbarDragMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_scrollbarDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_setTransition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_setTranslate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slideChangeTransitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slideChangeTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slideNextTransitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slideNextTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slidePrevTransitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slidePrevTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slideResetTransitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slideResetTransitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_sliderMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_sliderFirstMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slidesLengthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_slidesGridLengthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_snapGridLengthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_snapIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_tap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_toEdge = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_touchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_touchMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_touchMoveOpposite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_touchStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_transitionEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_transitionStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // prettier-ignore

        this.s_swiper = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.indexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._activeSlides = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.containerClasses = 'swiper-container';

        this.slidesChanges = function (val) {
          _this3.slides = val.map(function (slide, index) {
            slide.slideIndex = index;
            slide.classNames = _this3.slideClass;
            return slide;
          });

          if (_this3.loop && !_this3.loopedSlides) {
            _this3.calcLoopedSlides();
          }

          if (!_this3.virtual) {
            _this3.prependSlides = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this3.slides.slice(_this3.slides.length - _this3.loopedSlides));
            _this3.appendSlides = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this3.slides.slice(0, _this3.loopedSlides));
          } else if (_this3.swiperRef && _this3.swiperRef.virtual) {
            _this3._ngZone.runOutsideAngular(function () {
              _this3.swiperRef.virtual.slides = _this3.slides;

              _this3.swiperRef.virtual.update(true);
            });
          }

          _this3._changeDetectorRef.detectChanges();
        };

        this.style = null;

        this.updateVirtualSlides = function (virtualData) {
          // TODO: type virtualData
          if (!_this3.swiperRef || _this3.currentVirtualData && _this3.currentVirtualData.from === virtualData.from && _this3.currentVirtualData.to === virtualData.to && _this3.currentVirtualData.offset === virtualData.offset) {
            return;
          }

          _this3.style = _this3.swiperRef.isHorizontal() ? _defineProperty({}, _this3.swiperRef.rtlTranslate ? 'right' : 'left', "".concat(virtualData.offset, "px")) : {
            top: "".concat(virtualData.offset, "px")
          };
          _this3.currentVirtualData = virtualData;

          _this3._activeSlides.next(virtualData.slides);

          _this3._ngZone.run(function () {
            _this3._changeDetectorRef.detectChanges();
          });

          _this3._ngZone.runOutsideAngular(function () {
            _this3.swiperRef.updateSlides();

            _this3.swiperRef.updateProgress();

            _this3.swiperRef.updateSlidesClasses();

            if (_this3.swiperRef.lazy && _this3.swiperRef.params.lazy['enabled']) {
              _this3.swiperRef.lazy.load();
            }

            _this3.swiperRef.virtual.update(true);
          });

          return;
        };
      }

      _createClass2(SwiperComponent, [{
        key: "_setElement",
        value: function _setElement(el, ref, update) {
          var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'el';

          if (!el || !ref) {
            return;
          }

          if (ref && el.nativeElement) {
            if (ref[key] === el.nativeElement) {
              return;
            }

            ref[key] = el.nativeElement;
          }

          var updateObj = {};
          updateObj[update] = true;
          this.updateInitSwiper(updateObj);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _getParams = getParams(this),
              params = _getParams.params;

          Object.assign(this, params);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          this.childrenSlidesInit();
          this.initSwiper();

          this._changeDetectorRef.detectChanges();

          setTimeout(function () {
            _this4.s_swiper.emit(_this4.swiperRef);
          });
        }
      }, {
        key: "childrenSlidesInit",
        value: function childrenSlidesInit() {
          this.slidesChanges(this.slidesEl);
          this.slidesEl.changes.subscribe(this.slidesChanges);
        }
      }, {
        key: "initSwiper",
        value: function initSwiper() {
          var _this5 = this;

          var _getParams2 = getParams(this),
              swiperParams = _getParams2.params,
              passedParams = _getParams2.passedParams;

          Object.assign(this, swiperParams);

          this._ngZone.runOutsideAngular(function () {
            swiperParams.init = false;

            if (!swiperParams.virtual) {
              swiperParams.observer = true;
            }

            swiperParams.onAny = function (event) {
              var emitter = _this5["s_".concat(event)];

              if (emitter) {
                for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
                  args[_key11 - 1] = arguments[_key11];
                }

                emitter.emit.apply(emitter, args);
              }
            };

            Object.assign(swiperParams.on, {
              _containerClasses: function _containerClasses(swiper, classes) {
                this.containerClasses = classes;
              },
              _slideClasses: function _slideClasses(_, updated) {
                updated.forEach(function (_ref3, index) {
                  var slideEl = _ref3.slideEl,
                      classNames = _ref3.classNames;
                  var slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index')) || index;

                  if (_this5.virtual) {
                    var virtualSlide = _this5.slides.find(function (item) {
                      return item.virtualIndex && item.virtualIndex === slideIndex;
                    });

                    if (virtualSlide) {
                      virtualSlide.classNames = classNames;
                      return;
                    }
                  }

                  if (_this5.slides[slideIndex]) {
                    _this5.slides[slideIndex].classNames = classNames;
                  }
                });

                _this5._changeDetectorRef.detectChanges();
              }
            });
            var swiperRef = new swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"](swiperParams);

            swiperRef.loopCreate = function () {};

            swiperRef.loopDestroy = function () {};

            if (swiperParams.loop) {
              swiperRef.loopedSlides = _this5.loopedSlides;
            }

            if (swiperRef.virtual && swiperRef.params.virtual.enabled) {
              swiperRef.virtual.slides = _this5.slides;
              var extendWith = {
                cache: false,
                renderExternal: _this5.updateVirtualSlides,
                renderExternalUpdate: false
              };
              extend(swiperRef.params.virtual, extendWith);
              extend(swiperRef.originalParams.virtual, extendWith);
            }

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this5._platformId)) {
              _this5.swiperRef = swiperRef.init(_this5.elementRef.nativeElement);

              if (_this5.swiperRef.virtual && _this5.swiperRef.params.virtual.enabled) {
                _this5.swiperRef.virtual.update(true);
              }

              _this5._changeDetectorRef.detectChanges();

              swiperRef.on('slideChange', function () {
                _this5.indexChange.emit(_this5.swiperRef.realIndex);
              });
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changedParams) {
          this.updateSwiper(changedParams);

          this._changeDetectorRef.detectChanges();
        }
      }, {
        key: "updateInitSwiper",
        value: function updateInitSwiper(changedParams) {
          var _this6 = this;

          if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
            return;
          }

          this._ngZone.runOutsideAngular(function () {
            var _this6$swiperRef = _this6.swiperRef,
                currentParams = _this6$swiperRef.params,
                pagination = _this6$swiperRef.pagination,
                navigation = _this6$swiperRef.navigation,
                scrollbar = _this6$swiperRef.scrollbar,
                virtual = _this6$swiperRef.virtual,
                thumbs = _this6$swiperRef.thumbs;

            if (changedParams.pagination) {
              if (_this6.pagination && typeof _this6.pagination !== 'boolean' && _this6.pagination.el && pagination && !pagination.el) {
                _this6.updateParameter('pagination', _this6.pagination);

                pagination.init();
                pagination.render();
                pagination.update();
              } else {
                pagination.destroy();
                pagination.el = null;
              }
            }

            if (changedParams.scrollbar) {
              if (_this6.scrollbar && typeof _this6.scrollbar !== 'boolean' && _this6.scrollbar.el && scrollbar && !scrollbar.el) {
                _this6.updateParameter('scrollbar', _this6.scrollbar);

                scrollbar.init();
                scrollbar.updateSize();
                scrollbar.setTranslate();
              } else {
                scrollbar.destroy();
                scrollbar.el = null;
              }
            }

            if (changedParams.navigation) {
              if (_this6.navigation && typeof _this6.navigation !== 'boolean' && _this6.navigation.prevEl && _this6.navigation.nextEl && navigation && !navigation.prevEl && !navigation.nextEl) {
                _this6.updateParameter('navigation', _this6.navigation);

                navigation.init();
                navigation.update();
              } else if (navigation.prevEl && navigation.nextEl) {
                navigation.destroy();
                navigation.nextEl = null;
                navigation.prevEl = null;
              }
            }

            if (changedParams.thumbs && _this6.thumbs && _this6.thumbs.swiper) {
              _this6.updateParameter('thumbs', _this6.thumbs);

              var initialized = thumbs.init();
              if (initialized) thumbs.update(true);
            }

            if (changedParams.controller && _this6.controller && _this6.controller.control) {
              _this6.swiperRef.controller.control = _this6.controller.control;
            }

            _this6.swiperRef.update();
          });
        }
      }, {
        key: "updateSwiper",
        value: function updateSwiper(changedParams) {
          var _this7 = this;

          this._ngZone.runOutsideAngular(function () {
            var _a, _b;

            if (changedParams.config) {
              return;
            }

            if (!(changedParams && _this7.swiperRef && !_this7.swiperRef.destroyed)) {
              return;
            }

            for (var key in changedParams) {
              if (ignoreNgOnChanges.indexOf(key) >= 0) {
                continue;
              }

              var newValue = (_b = (_a = changedParams[key]) === null || _a === void 0 ? void 0 : _a.currentValue) !== null && _b !== void 0 ? _b : changedParams[key];

              _this7.updateParameter(key, newValue);
            }

            if (changedParams.allowSlideNext) {
              _this7.swiperRef.allowSlideNext = _this7.allowSlideNext;
            }

            if (changedParams.allowSlidePrev) {
              _this7.swiperRef.allowSlidePrev = _this7.allowSlidePrev;
            }

            if (changedParams.direction) {
              _this7.swiperRef.changeDirection(_this7.direction, false);
            }

            if (changedParams.breakpoints) {
              if (_this7.loop && !_this7.loopedSlides) {
                _this7.calcLoopedSlides();
              }

              _this7.swiperRef.currentBreakpoint = null;

              _this7.swiperRef.setBreakpoint();
            }

            if (changedParams.thumbs || changedParams.controller) {
              _this7.updateInitSwiper(changedParams);
            }

            _this7.swiperRef.update();
          });
        }
      }, {
        key: "calcLoopedSlides",
        value: function calcLoopedSlides() {
          if (!this.loop) {
            return;
          }

          var slidesPerViewParams = this.slidesPerView;

          if (this.breakpoints) {
            var breakpoint = swiper_core__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.getBreakpoint(this.breakpoints);
            var breakpointOnlyParams = breakpoint in this.breakpoints ? this.breakpoints[breakpoint] : undefined;

            if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
              slidesPerViewParams = breakpointOnlyParams.slidesPerView;
            }
          }

          if (slidesPerViewParams === 'auto') {
            this.loopedSlides = this.slides.length;
            return this.slides.length;
          }

          var loopedSlides = this.loopedSlides || slidesPerViewParams;
          loopedSlides += this.loopAdditionalSlides;

          if (loopedSlides > this.slides.length) {
            loopedSlides = this.slides.length;
          }

          this.loopedSlides = loopedSlides;
          return loopedSlides;
        }
      }, {
        key: "updateParameter",
        value: function updateParameter(key, value) {
          if (!(this.swiperRef && !this.swiperRef.destroyed)) {
            return;
          }

          var _key = key.replace(/^_/, '');

          var isCurrentParamObj = isObject(this.swiperRef.params[_key]);

          if (Object.keys(this.swiperRef.modules).indexOf(_key) >= 0) {
            var defaultParams = this.swiperRef.modules[_key].params[_key];

            if (isCurrentParamObj) {
              extend(this.swiperRef.params[_key], defaultParams);
            } else {
              this.swiperRef.params[_key] = defaultParams;
            }
          }

          if (isCurrentParamObj && isObject(value)) {
            extend(this.swiperRef.params[_key], value);
          } else {
            this.swiperRef.params[_key] = value;
          }
        }
      }, {
        key: "setIndex",
        value: function setIndex(index, speed, silent) {
          var _this8 = this;

          if (!this.isSwiperActive) {
            this.initialSlide = index;
            return;
          }

          if (index === this.swiperRef.activeIndex) {
            return;
          }

          this._ngZone.runOutsideAngular(function () {
            if (_this8.loop) {
              _this8.swiperRef.slideToLoop(index, speed, !silent);
            } else {
              _this8.swiperRef.slideTo(index, speed, !silent);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this9 = this;

          this._ngZone.runOutsideAngular(function () {
            var _a;

            (_a = _this9.swiperRef) === null || _a === void 0 ? void 0 : _a.destroy(true, false);
          });
        }
      }, {
        key: "navigation",
        set: function set(val) {
          var _a, _b, _c;

          var currentNext = typeof this._navigation !== 'boolean' ? (_a = this._navigation) === null || _a === void 0 ? void 0 : _a.nextEl : null;
          var currentPrev = typeof this._navigation !== 'boolean' ? (_b = this._navigation) === null || _b === void 0 ? void 0 : _b.prevEl : null;
          this._navigation = setProperty(val, {
            nextEl: currentNext || null,
            prevEl: currentPrev || null
          });
          this.showNavigation = !(coerceBooleanProperty(val) !== true || this._navigation && typeof this._navigation !== 'boolean' && this._navigation.prevEl !== ((_c = this._prevElRef) === null || _c === void 0 ? void 0 : _c.nativeElement) && (this._navigation.prevEl !== null || this._navigation.nextEl !== null) && (typeof this._navigation.nextEl === 'string' || typeof this._navigation.prevEl === 'string' || typeof this._navigation.nextEl === 'object' || typeof this._navigation.prevEl === 'object'));
        },
        get: function get() {
          return this._navigation;
        }
      }, {
        key: "pagination",
        set: function set(val) {
          var _a;

          var current = typeof this._pagination !== 'boolean' ? (_a = this._pagination) === null || _a === void 0 ? void 0 : _a.el : null;
          this._pagination = setProperty(val, {
            el: current || null
          });
          this.showPagination = isShowEl(val, this._pagination, this._paginationElRef);
        },
        get: function get() {
          return this._pagination;
        }
      }, {
        key: "scrollbar",
        set: function set(val) {
          var _a;

          var current = typeof this._scrollbar !== 'boolean' ? (_a = this._scrollbar) === null || _a === void 0 ? void 0 : _a.el : null;
          this._scrollbar = setProperty(val, {
            el: current || null
          });
          this.showScrollbar = isShowEl(val, this._scrollbar, this._scrollbarElRef);
        },
        get: function get() {
          return this._scrollbar;
        }
      }, {
        key: "virtual",
        set: function set(val) {
          this._virtual = setProperty(val);
        },
        get: function get() {
          return this._virtual;
        }
      }, {
        key: "index",
        set: function set(index) {
          this.setIndex(index);
        }
      }, {
        key: "config",
        set: function set(val) {
          this.updateSwiper(val);

          var _getParams3 = getParams(val),
              params = _getParams3.params;

          Object.assign(this, params);
        }
      }, {
        key: "prevElRef",
        set: function set(el) {
          this._prevElRef = el;

          this._setElement(el, this.navigation, 'navigation', 'prevEl');
        }
      }, {
        key: "nextElRef",
        set: function set(el) {
          this._nextElRef = el;

          this._setElement(el, this.navigation, 'navigation', 'nextEl');
        }
      }, {
        key: "scrollbarElRef",
        set: function set(el) {
          this._scrollbarElRef = el;

          this._setElement(el, this.scrollbar, 'scrollbar');
        }
      }, {
        key: "paginationElRef",
        set: function set(el) {
          this._paginationElRef = el;

          this._setElement(el, this.pagination, 'pagination');
        }
      }, {
        key: "activeSlides",
        get: function get() {
          if (this.virtual) {
            return this._activeSlides;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.slides);
        }
      }, {
        key: "zoomContainerClass",
        get: function get() {
          return typeof this.zoom !== 'boolean' ? this.zoom.containerClass : 'swiper-zoom-container';
        }
      }, {
        key: "isSwiperActive",
        get: function get() {
          return this.swiperRef && !this.swiperRef.destroyed;
        }
      }]);

      return SwiperComponent;
    }();

    SwiperComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'swiper, [swiper]',
        template: "<ng-content select=\"[slot=container-start]\"></ng-content>\n<ng-container *ngIf=\"navigation && showNavigation\">\n  <div class=\"swiper-button-prev\" #prevElRef></div>\n  <div class=\"swiper-button-next\" #nextElRef></div>\n</ng-container>\n<div *ngIf=\"scrollbar && showScrollbar\" class=\"swiper-scrollbar\" #scrollbarElRef></div>\n<div *ngIf=\"pagination && showPagination\" class=\"swiper-pagination\" #paginationElRef></div>\n<div [ngClass]=\"wrapperClass\" [attr.id]=\"id\">\n  <ng-content select=\"[slot=wrapper-start]\"></ng-content>\n  <ng-template *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: prependSlides,\n        key: 'prepend'\n      }\n    \"></ng-template>\n  <ng-template *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: activeSlides,\n        key: ''\n      }\n    \"></ng-template>\n  <ng-template *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: appendSlides,\n        key: 'append'\n      }\n    \"></ng-template>\n  <ng-content select=\"[slot=wrapper-end]\"></ng-content>\n</div>\n<ng-content select=\"[slot=container-end]\"></ng-content>\n\n<ng-template #slidesTemplate let-loopSlides=\"loopSlides\" let-slideKey=\"key\">\n  <div *ngFor=\"let slide of loopSlides | async\" [ngClass]=\"\n      (slide.class ? slide.class + ' ' : '') +\n      slideClass +\n      (slideKey !== '' ? ' ' + slideDuplicateClass : '')\n    \" [attr.data-swiper-slide-index]=\"slide.virtualIndex ? slide.virtualIndex : slide.slideIndex\" [style]=\"style\"\n    [ngSwitch]=\"slide.zoom\">\n    <div *ngSwitchCase=\"true\" [ngClass]=\"zoomContainerClass\">\n      <ng-template [ngTemplateOutlet]=\"slide.template\" [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"></ng-template>\n    </div>\n    <ng-container *ngSwitchDefault>\n      <ng-template [ngTemplateOutlet]=\"slide.template\" [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: ["\n      swiper {\n        display: block;\n      }\n    "]
      }]
    }];

    SwiperComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };

    SwiperComponent.propDecorators = {
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchEventsTarget: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialSlide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      speed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cssMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      updateOnWindowResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resizeObserver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nested: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focusableElements: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      preventInteractionOnTransition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      userAgent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      url: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      edgeSwipeDetection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      edgeSwipeThreshold: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeModeMomentum: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeModeMomentumRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeModeMomentumBounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeModeMomentumBounceRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeModeMomentumVelocityRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeModeSticky: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeModeMinimumVelocity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      setWrapperSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtualTranslate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      effect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      breakpoints: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      spaceBetween: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidesPerView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidesPerColumn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidesPerColumnFill: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidesPerGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidesPerGroupSkip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      centeredSlides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      centeredSlidesBounds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidesOffsetBefore: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidesOffsetAfter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      normalizeSlideIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      centerInsufficientSlides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      watchOverflow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      roundLengths: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchAngle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      simulateTouch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shortSwipes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      longSwipes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      longSwipesRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      longSwipesMs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      followFinger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      allowTouchMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      threshold: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchMoveStopPropagation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchStartPreventDefault: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchStartForcePreventDefault: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      touchReleaseOnEdges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      uniqueNavElements: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resistance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resistanceRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      watchSlidesProgress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      watchSlidesVisibility: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      grabCursor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      preventClicks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      preventClicksPropagation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideToClickedSlide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      preloadImages: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      updateOnImagesReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loopAdditionalSlides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loopedSlides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loopFillGroupWithBlank: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loopPreventsSlide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      allowSlidePrev: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      allowSlideNext: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      swipeHandler: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      noSwiping: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      noSwipingClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      noSwipingSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      passiveListeners: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      containerModifierClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideBlankClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideDuplicateActiveClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideVisibleClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideDuplicateClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideNextClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideDuplicateNextClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slidePrevClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideDuplicatePrevClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      wrapperClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      runCallbacksOnInit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      observeParents: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      observeSlideChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      a11y: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoplay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      controller: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      coverflowEffect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cubeEffect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fadeEffect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      flipEffect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hashNavigation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      history: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      keyboard: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lazy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mousewheel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      parallax: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      thumbs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      zoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      "class": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrollbar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtual: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      index: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      s__beforeBreakpoint: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['_beforeBreakpoint']
      }],
      s__containerClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['_containerClasses']
      }],
      s__slideClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['_slideClass']
      }],
      s__swiper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['_swiper']
      }],
      s_activeIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['activeIndexChange']
      }],
      s_afterInit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['afterInit']
      }],
      s_autoplay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['autoplay']
      }],
      s_autoplayStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['autoplayStart']
      }],
      s_autoplayStop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['autoplayStop']
      }],
      s_beforeDestroy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['beforeDestroy']
      }],
      s_beforeInit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['beforeInit']
      }],
      s_beforeLoopFix: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['beforeLoopFix']
      }],
      s_beforeResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['beforeResize']
      }],
      s_beforeSlideChangeStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['beforeSlideChangeStart']
      }],
      s_beforeTransitionStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['beforeTransitionStart']
      }],
      s_breakpoint: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['breakpoint']
      }],
      s_changeDirection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['changeDirection']
      }],
      s_click: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['click']
      }],
      s_doubleTap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['doubleTap']
      }],
      s_doubleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['doubleClick']
      }],
      s_destroy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['destroy']
      }],
      s_fromEdge: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['fromEdge']
      }],
      s_hashChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['hashChange']
      }],
      s_hashSet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['hashSet']
      }],
      s_imagesReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['imagesReady']
      }],
      s_init: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['init']
      }],
      s_keyPress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['keyPress']
      }],
      s_lazyImageLoad: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['lazyImageLoad']
      }],
      s_lazyImageReady: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['lazyImageReady']
      }],
      s_loopFix: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['loopFix']
      }],
      s_momentumBounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['momentumBounce']
      }],
      s_navigationHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['navigationHide']
      }],
      s_navigationShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['navigationShow']
      }],
      s_observerUpdate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['observerUpdate']
      }],
      s_orientationchange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['orientationchange']
      }],
      s_paginationHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['paginationHide']
      }],
      s_paginationRender: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['paginationRender']
      }],
      s_paginationShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['paginationShow']
      }],
      s_paginationUpdate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['paginationUpdate']
      }],
      s_progress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['progress']
      }],
      s_reachBeginning: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['reachBeginning']
      }],
      s_reachEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['reachEnd']
      }],
      s_realIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['realIndexChange']
      }],
      s_resize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['resize']
      }],
      s_scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scroll']
      }],
      s_scrollbarDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scrollbarDragEnd']
      }],
      s_scrollbarDragMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scrollbarDragMove']
      }],
      s_scrollbarDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scrollbarDragStart']
      }],
      s_setTransition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['setTransition']
      }],
      s_setTranslate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['setTranslate']
      }],
      s_slideChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slideChange']
      }],
      s_slideChangeTransitionEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slideChangeTransitionEnd']
      }],
      s_slideChangeTransitionStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slideChangeTransitionStart']
      }],
      s_slideNextTransitionEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slideNextTransitionEnd']
      }],
      s_slideNextTransitionStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slideNextTransitionStart']
      }],
      s_slidePrevTransitionEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slidePrevTransitionEnd']
      }],
      s_slidePrevTransitionStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slidePrevTransitionStart']
      }],
      s_slideResetTransitionStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slideResetTransitionStart']
      }],
      s_slideResetTransitionEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slideResetTransitionEnd']
      }],
      s_sliderMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['sliderMove']
      }],
      s_sliderFirstMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['sliderFirstMove']
      }],
      s_slidesLengthChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slidesLengthChange']
      }],
      s_slidesGridLengthChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['slidesGridLengthChange']
      }],
      s_snapGridLengthChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['snapGridLengthChange']
      }],
      s_snapIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['snapIndexChange']
      }],
      s_tap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['tap']
      }],
      s_toEdge: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['toEdge']
      }],
      s_touchEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['touchEnd']
      }],
      s_touchMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['touchMove']
      }],
      s_touchMoveOpposite: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['touchMoveOpposite']
      }],
      s_touchStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['touchStart']
      }],
      s_transitionEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['transitionEnd']
      }],
      s_transitionStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['transitionStart']
      }],
      s_update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['update']
      }],
      s_zoomChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['zoomChange']
      }],
      s_swiper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['swiper']
      }],
      indexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      prevElRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['prevElRef', {
          "static": false
        }]
      }],
      nextElRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['nextElRef', {
          "static": false
        }]
      }],
      scrollbarElRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['scrollbarElRef', {
          "static": false
        }]
      }],
      paginationElRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['paginationElRef', {
          "static": false
        }]
      }],
      slidesEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [SwiperSlideDirective, {
          descendants: false,
          emitDistinctChangesOnly: true
        }]
      }],
      containerClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class']
      }]
    };

    var SwiperModule = function SwiperModule() {
      _classCallCheck(this, SwiperModule);
    };

    SwiperModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [SwiperComponent, SwiperSlideDirective],
        exports: [SwiperComponent, SwiperSlideDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /*
     * Public API Surface of angular
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=swiper_angular.js.map

    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/a11y/a11y.js":
  /*!*********************************************************!*\
    !*** ./node_modules/swiper/esm/components/a11y/a11y.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsA11yA11yJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var A11y = {
      getRandomNumber: function getRandomNumber(size) {
        if (size === void 0) {
          size = 16;
        }

        var randomChar = function randomChar() {
          return Math.round(16 * Math.random()).toString(16);
        };

        return 'x'.repeat(size).replace(/x/g, randomChar);
      },
      makeElFocusable: function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
        return $el;
      },
      makeElNotFocusable: function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
        return $el;
      },
      addElRole: function addElRole($el, role) {
        $el.attr('role', role);
        return $el;
      },
      addElRoleDescription: function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
        return $el;
      },
      addElControls: function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
        return $el;
      },
      addElLabel: function addElLabel($el, label) {
        $el.attr('aria-label', label);
        return $el;
      },
      addElId: function addElId($el, id) {
        $el.attr('id', id);
        return $el;
      },
      addElLive: function addElLive($el, live) {
        $el.attr('aria-live', live);
        return $el;
      },
      disableEl: function disableEl($el) {
        $el.attr('aria-disabled', true);
        return $el;
      },
      enableEl: function enableEl($el) {
        $el.attr('aria-disabled', false);
        return $el;
      },
      onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        var swiper = this;
        var params = swiper.params.a11y;
        var $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target);

        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }

          if (swiper.isEnd) {
            swiper.a11y.notify(params.lastSlideMessage);
          } else {
            swiper.a11y.notify(params.nextSlideMessage);
          }
        }

        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }

          if (swiper.isBeginning) {
            swiper.a11y.notify(params.firstSlideMessage);
          } else {
            swiper.a11y.notify(params.prevSlideMessage);
          }
        }

        if (swiper.pagination && $targetEl.is(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(swiper.params.pagination.bulletClass))) {
          $targetEl[0].click();
        }
      },
      notify: function notify(message) {
        var swiper = this;
        var notification = swiper.a11y.liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      },
      updateNavigation: function updateNavigation() {
        var swiper = this;
        if (swiper.params.loop || !swiper.navigation) return;
        var _swiper$navigation = swiper.navigation,
            $nextEl = _swiper$navigation.$nextEl,
            $prevEl = _swiper$navigation.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            swiper.a11y.disableEl($prevEl);
            swiper.a11y.makeElNotFocusable($prevEl);
          } else {
            swiper.a11y.enableEl($prevEl);
            swiper.a11y.makeElFocusable($prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            swiper.a11y.disableEl($nextEl);
            swiper.a11y.makeElNotFocusable($nextEl);
          } else {
            swiper.a11y.enableEl($nextEl);
            swiper.a11y.makeElFocusable($nextEl);
          }
        }
      },
      updatePagination: function updatePagination() {
        var swiper = this;
        var params = swiper.params.a11y;

        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.bullets.each(function (bulletEl) {
            var $bulletEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bulletEl);
            swiper.a11y.makeElFocusable($bulletEl);

            if (!swiper.params.pagination.renderBullet) {
              swiper.a11y.addElRole($bulletEl, 'button');
              swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
          });
        }
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.a11y;
        swiper.$el.append(swiper.a11y.liveRegion); // Container

        var $containerEl = swiper.$el;

        if (params.containerRoleDescriptionMessage) {
          swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        }

        if (params.containerMessage) {
          swiper.a11y.addElLabel($containerEl, params.containerMessage);
        } // Wrapper


        var $wrapperEl = swiper.$wrapperEl;
        var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
        var live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        swiper.a11y.addElId($wrapperEl, wrapperId);
        swiper.a11y.addElLive($wrapperEl, live); // Slide

        if (params.itemRoleDescriptionMessage) {
          swiper.a11y.addElRoleDescription(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), params.itemRoleDescriptionMessage);
        }

        swiper.a11y.addElRole(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), params.slideRole);
        var slidesLength = swiper.params.loop ? swiper.slides.filter(function (el) {
          return !el.classList.contains(swiper.params.slideDuplicateClass);
        }).length : swiper.slides.length;
        swiper.slides.each(function (slideEl, index) {
          var $slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl);
          var slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
          var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          swiper.a11y.addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation

        var $nextEl;
        var $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl && $nextEl.length) {
          swiper.a11y.makeElFocusable($nextEl);

          if ($nextEl[0].tagName !== 'BUTTON') {
            swiper.a11y.addElRole($nextEl, 'button');
            $nextEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
          }

          swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
          swiper.a11y.addElControls($nextEl, wrapperId);
        }

        if ($prevEl && $prevEl.length) {
          swiper.a11y.makeElFocusable($prevEl);

          if ($prevEl[0].tagName !== 'BUTTON') {
            swiper.a11y.addElRole($prevEl, 'button');
            $prevEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
          }

          swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
          swiper.a11y.addElControls($prevEl, wrapperId);
        } // Pagination


        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.on('keydown', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
        var $nextEl;
        var $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl) {
          $nextEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
        }

        if ($prevEl) {
          $prevEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
        } // Pagination


        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.off('keydown', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'a11y',
      params: {
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          a11y: _extends({}, A11y, {
            liveRegion: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
          })
        });
      },
      on: {
        afterInit: function afterInit(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.init();
          swiper.a11y.updateNavigation();
        },
        toEdge: function toEdge(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updateNavigation();
        },
        fromEdge: function fromEdge(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updatePagination();
        },
        destroy: function destroy(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.destroy();
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/autoplay/autoplay.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/autoplay/autoplay.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsAutoplayAutoplayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }
    /* eslint no-underscore-dangle: "off" */


    var Autoplay = {
      run: function run() {
        var swiper = this;
        var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        var delay = swiper.params.autoplay.delay;

        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }

        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
          var autoplayResult;

          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.isBeginning) {
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else {
              swiper.autoplay.stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isEnd) {
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }

          if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
            swiper.autoplay.run();
          }
        }, delay);
      },
      start: function start() {
        var swiper = this;
        if (typeof swiper.autoplay.timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        swiper.emit('autoplayStart');
        swiper.autoplay.run();
        return true;
      },
      stop: function stop() {
        var swiper = this;
        if (!swiper.autoplay.running) return false;
        if (typeof swiper.autoplay.timeout === 'undefined') return false;

        if (swiper.autoplay.timeout) {
          clearTimeout(swiper.autoplay.timeout);
          swiper.autoplay.timeout = undefined;
        }

        swiper.autoplay.running = false;
        swiper.emit('autoplayStop');
        return true;
      },
      pause: function pause(speed) {
        var swiper = this;
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.paused = true;

        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          swiper.autoplay.run();
        } else {
          ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
            swiper.$wrapperEl[0].addEventListener(event, swiper.autoplay.onTransitionEnd);
          });
        }
      },
      onVisibilityChange: function onVisibilityChange() {
        var swiper = this;
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

        if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
          swiper.autoplay.pause();
        }

        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
          swiper.autoplay.run();
          swiper.autoplay.paused = false;
        }
      },
      onTransitionEnd: function onTransitionEnd(e) {
        var swiper = this;
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
          swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
        });
        swiper.autoplay.paused = false;

        if (!swiper.autoplay.running) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.run();
        }
      },
      onMouseEnter: function onMouseEnter() {
        var swiper = this;

        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }

        ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
          swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
        });
      },
      onMouseLeave: function onMouseLeave() {
        var swiper = this;

        if (swiper.params.autoplay.disableOnInteraction) {
          return;
        }

        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      },
      attachMouseEvents: function attachMouseEvents() {
        var swiper = this;

        if (swiper.params.autoplay.pauseOnMouseEnter) {
          swiper.$el.on('mouseenter', swiper.autoplay.onMouseEnter);
          swiper.$el.on('mouseleave', swiper.autoplay.onMouseLeave);
        }
      },
      detachMouseEvents: function detachMouseEvents() {
        var swiper = this;
        swiper.$el.off('mouseenter', swiper.autoplay.onMouseEnter);
        swiper.$el.off('mouseleave', swiper.autoplay.onMouseLeave);
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'autoplay',
      params: {
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false,
          pauseOnMouseEnter: false
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          autoplay: _extends({}, Autoplay, {
            running: false,
            paused: false
          })
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.autoplay.enabled) {
            swiper.autoplay.start();
            var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
            document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
            swiper.autoplay.attachMouseEvents();
          }
        },
        beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
          if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.pause(speed);
            } else {
              swiper.autoplay.stop();
            }
          }
        },
        sliderFirstMove: function sliderFirstMove(swiper) {
          if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.pause();
            }
          }
        },
        touchEnd: function touchEnd(swiper) {
          if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.run();
          }
        },
        destroy: function destroy(swiper) {
          swiper.autoplay.detachMouseEvents();

          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
          }

          var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
          document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/controller/controller.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/controller/controller.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsControllerControllerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }
    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */


    var Controller = {
      LinearSpline: function LinearSpline(x, y) {
        var binarySearch = function search() {
          var maxIndex;
          var minIndex;
          var guess;
          return function (array, val) {
            minIndex = -1;
            maxIndex = array.length;

            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;

              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }

            return maxIndex;
          };
        }();

        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.

        var i1;
        var i3;

        this.interpolate = function interpolate(x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };

        return this;
      },
      // xxx: for now i will just save one spline function to to
      getInterpolateFunction: function getInterpolateFunction(c) {
        var swiper = this;

        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      },
      setTranslate: function setTranslate(_setTranslate, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var multiplier;
        var controlledTranslate;
        var Swiper = swiper.constructor;

        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

          if (swiper.params.controller.by === 'slide') {
            swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out

            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }

          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }

          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }

        if (Array.isArray(controlled)) {
          for (var i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        var Swiper = swiper.constructor;
        var controlled = swiper.controller.control;
        var i;

        function setControlledTransition(c) {
          c.setTransition(duration, swiper);

          if (duration !== 0) {
            c.transitionStart();

            if (c.params.autoHeight) {
              Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
                c.updateAutoHeight();
              });
            }

            c.$wrapperEl.transitionEnd(function () {
              if (!controlled) return;

              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }

              c.transitionEnd();
            });
          }
        }

        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'controller',
      params: {
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'

        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
          controller: _extends({
            control: swiper.params.controller.control
          }, Controller)
        });
      },
      on: {
        update: function update(swiper) {
          if (!swiper.controller.control) return;

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        resize: function resize(swiper) {
          if (!swiper.controller.control) return;

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        observerUpdate: function observerUpdate(swiper) {
          if (!swiper.controller.control) return;

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        setTranslate: function setTranslate(swiper, translate, byController) {
          if (!swiper.controller.control) return;
          swiper.controller.setTranslate(translate, byController);
        },
        setTransition: function setTransition(swiper, duration, byController) {
          if (!swiper.controller.control) return;
          swiper.controller.setTransition(duration, byController);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreBreakpointsGetBreakpointJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return getBreakpoint;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");

    function getBreakpoint(breakpoints, base, containerEl) {
      if (base === void 0) {
        base = 'window';
      }

      if (!breakpoints || base === 'container' && !containerEl) return undefined;
      var breakpoint = false;
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
      var points = Object.keys(breakpoints).map(function (point) {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          var minRatio = parseFloat(point.substr(1));
          var value = currentHeight * minRatio;
          return {
            value: value,
            point: point
          };
        }

        return {
          value: point,
          point: point
        };
      });
      points.sort(function (a, b) {
        return parseInt(a.value, 10) - parseInt(b.value, 10);
      });

      for (var i = 0; i < points.length; i += 1) {
        var _points$i = points[i],
            point = _points$i.point,
            value = _points$i.value;

        if (base === 'window') {
          if (window.matchMedia("(min-width: " + value + "px)").matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/breakpoints/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/breakpoints/index.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreBreakpointsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./setBreakpoint */
    "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js");
    /* harmony import */


    var _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./getBreakpoint */
    "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      setBreakpoint: _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__["default"],
      getBreakpoint: _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreBreakpointsSetBreakpointJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return setBreakpoint;
    });
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function setBreakpoint() {
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          initialized = swiper.initialized,
          _swiper$loopedSlides = swiper.loopedSlides,
          loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
          params = swiper.params,
          $el = swiper.$el;
      var breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

      var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') return;

          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var wasMultiRow = params.slidesPerColumn > 1;
      var isMultiRow = breakpointParams.slidesPerColumn > 1;
      var wasEnabled = params.enabled;

      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + "multirow");

        if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') {
          $el.addClass(params.containerModifierClass + "multirow-column");
        }

        swiper.emitContainerClasses();
      }

      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.params, breakpointParams);
      var isEnabled = swiper.params.enabled;
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });

      if (wasEnabled && !isEnabled) {
        swiper.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper.enable();
      }

      swiper.currentBreakpoint = breakpoint;
      swiper.emit('_beforeBreakpoint', breakpointParams);

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/check-overflow/index.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/check-overflow/index.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreCheckOverflowIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    function checkOverflow() {
      var swiper = this;
      var params = swiper.params;
      var wasLocked = swiper.isLocked;
      var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

      if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
        swiper.isLocked = lastSlidePosition <= swiper.size;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }

      swiper.allowSlideNext = !swiper.isLocked;
      swiper.allowSlidePrev = !swiper.isLocked; // events

      if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        if (swiper.navigation) swiper.navigation.update();
      }
    }
    /* harmony default export */


    __webpack_exports__["default"] = {
      checkOverflow: checkOverflow
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/classes/addClasses.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/classes/addClasses.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreClassesAddClassesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return addClasses;
    });

    function prepareClasses(entries, prefix) {
      var resultClasses = [];
      entries.forEach(function (item) {
        if (typeof item === 'object') {
          Object.keys(item).forEach(function (classNames) {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === 'string') {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }

    function addClasses() {
      var swiper = this;
      var classNames = swiper.classNames,
          params = swiper.params,
          rtl = swiper.rtl,
          $el = swiper.$el,
          device = swiper.device,
          support = swiper.support; // prettier-ignore

      var suffixes = prepareClasses(['initialized', params.direction, {
        'pointer-events': support.pointerEvents && !support.touch
      }, {
        'free-mode': params.freeMode
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'multirow': params.slidesPerColumn > 1
      }, {
        'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }], params.containerModifierClass);
      classNames.push.apply(classNames, suffixes);
      $el.addClass([].concat(classNames).join(' '));
      swiper.emitContainerClasses();
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/classes/index.js":
  /*!******************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/classes/index.js ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreClassesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _addClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./addClasses */
    "./node_modules/swiper/esm/components/core/classes/addClasses.js");
    /* harmony import */


    var _removeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./removeClasses */
    "./node_modules/swiper/esm/components/core/classes/removeClasses.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      addClasses: _addClasses__WEBPACK_IMPORTED_MODULE_0__["default"],
      removeClasses: _removeClasses__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/classes/removeClasses.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/classes/removeClasses.js ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreClassesRemoveClassesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return removeClasses;
    });

    function removeClasses() {
      var swiper = this;
      var $el = swiper.$el,
          classNames = swiper.classNames;
      $el.removeClass(classNames.join(' '));
      swiper.emitContainerClasses();
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/core-class.js":
  /*!***************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/core-class.js ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreCoreClassJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");
    /* harmony import */


    var _utils_get_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/get-support */
    "./node_modules/swiper/esm/utils/get-support.js");
    /* harmony import */


    var _utils_get_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../utils/get-device */
    "./node_modules/swiper/esm/utils/get-device.js");
    /* harmony import */


    var _utils_get_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils/get-browser */
    "./node_modules/swiper/esm/utils/get-browser.js");
    /* harmony import */


    var _modules_resize_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modules/resize/resize */
    "./node_modules/swiper/esm/modules/resize/resize.js");
    /* harmony import */


    var _modules_observer_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modules/observer/observer */
    "./node_modules/swiper/esm/modules/observer/observer.js");
    /* harmony import */


    var _modular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./modular */
    "./node_modules/swiper/esm/components/core/modular.js");
    /* harmony import */


    var _events_emitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./events-emitter */
    "./node_modules/swiper/esm/components/core/events-emitter.js");
    /* harmony import */


    var _update_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./update/index */
    "./node_modules/swiper/esm/components/core/update/index.js");
    /* harmony import */


    var _translate_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./translate/index */
    "./node_modules/swiper/esm/components/core/translate/index.js");
    /* harmony import */


    var _transition_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./transition/index */
    "./node_modules/swiper/esm/components/core/transition/index.js");
    /* harmony import */


    var _slide_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./slide/index */
    "./node_modules/swiper/esm/components/core/slide/index.js");
    /* harmony import */


    var _loop_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./loop/index */
    "./node_modules/swiper/esm/components/core/loop/index.js");
    /* harmony import */


    var _grab_cursor_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./grab-cursor/index */
    "./node_modules/swiper/esm/components/core/grab-cursor/index.js");
    /* harmony import */


    var _manipulation_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./manipulation/index */
    "./node_modules/swiper/esm/components/core/manipulation/index.js");
    /* harmony import */


    var _events_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./events/index */
    "./node_modules/swiper/esm/components/core/events/index.js");
    /* harmony import */


    var _breakpoints_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./breakpoints/index */
    "./node_modules/swiper/esm/components/core/breakpoints/index.js");
    /* harmony import */


    var _classes_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./classes/index */
    "./node_modules/swiper/esm/components/core/classes/index.js");
    /* harmony import */


    var _images_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./images/index */
    "./node_modules/swiper/esm/components/core/images/index.js");
    /* harmony import */


    var _check_overflow_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./check-overflow/index */
    "./node_modules/swiper/esm/components/core/check-overflow/index.js");
    /* harmony import */


    var _defaults__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./defaults */
    "./node_modules/swiper/esm/components/core/defaults.js");

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    /* eslint no-param-reassign: "off" */


    var prototypes = {
      modular: _modular__WEBPACK_IMPORTED_MODULE_8__["default"],
      eventsEmitter: _events_emitter__WEBPACK_IMPORTED_MODULE_9__["default"],
      update: _update_index__WEBPACK_IMPORTED_MODULE_10__["default"],
      translate: _translate_index__WEBPACK_IMPORTED_MODULE_11__["default"],
      transition: _transition_index__WEBPACK_IMPORTED_MODULE_12__["default"],
      slide: _slide_index__WEBPACK_IMPORTED_MODULE_13__["default"],
      loop: _loop_index__WEBPACK_IMPORTED_MODULE_14__["default"],
      grabCursor: _grab_cursor_index__WEBPACK_IMPORTED_MODULE_15__["default"],
      manipulation: _manipulation_index__WEBPACK_IMPORTED_MODULE_16__["default"],
      events: _events_index__WEBPACK_IMPORTED_MODULE_17__["default"],
      breakpoints: _breakpoints_index__WEBPACK_IMPORTED_MODULE_18__["default"],
      checkOverflow: _check_overflow_index__WEBPACK_IMPORTED_MODULE_21__["default"],
      classes: _classes_index__WEBPACK_IMPORTED_MODULE_19__["default"],
      images: _images_index__WEBPACK_IMPORTED_MODULE_20__["default"]
    };
    var extendedDefaults = {};

    var Swiper = /*#__PURE__*/function () {
      function Swiper() {
        var el;
        var params;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
          params = args[0];
        } else {
          el = args[0];
          params = args[1];
        }

        if (!params) params = {};
        params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, params);
        if (el && !params.el) params.el = el;

        if (params.el && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).length > 1) {
          var swipers = [];
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).each(function (containerEl) {
            var newParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        } // Swiper Instance


        var swiper = this;
        swiper.__swiper__ = true;
        swiper.support = Object(_utils_get_support__WEBPACK_IMPORTED_MODULE_3__["getSupport"])();
        swiper.device = Object(_utils_get_device__WEBPACK_IMPORTED_MODULE_4__["getDevice"])({
          userAgent: params.userAgent
        });
        swiper.browser = Object(_utils_get_browser__WEBPACK_IMPORTED_MODULE_5__["getBrowser"])();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];

        if (typeof swiper.modules === 'undefined') {
          swiper.modules = {};
        }

        Object.keys(swiper.modules).forEach(function (moduleName) {
          var module = swiper.modules[moduleName];

          if (module.params) {
            var moduleParamName = Object.keys(module.params)[0];
            var moduleParams = module.params[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) return;

            if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
              params[moduleParamName] = {
                auto: true
              };
            }

            if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

            if (params[moduleParamName] === true) {
              params[moduleParamName] = {
                enabled: true
              };
            }

            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
              params[moduleParamName].enabled = true;
            }

            if (!params[moduleParamName]) params[moduleParamName] = {
              enabled: false
            };
          }
        }); // Extend defaults with modules params

        var swiperParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, _defaults__WEBPACK_IMPORTED_MODULE_22__["default"]);
        swiper.useParams(swiperParams); // Extend defaults with passed params

        swiper.params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, swiper.params);
        swiper.passedParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, params); // add event listeners

        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach(function (eventName) {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }

        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        } // Save Dom lib


        swiper.$ = _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"]; // Extend Swiper

        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(swiper, {
          enabled: swiper.params.enabled,
          el: el,
          // Classes
          classNames: [],
          // Slides
          slides: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal: function isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical: function isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            var desktop = ['mousedown', 'mousemove', 'mouseup'];

            if (swiper.support.pointerEvents) {
              desktop = ['pointerdown', 'pointermove', 'pointerup'];
            }

            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            focusableElements: swiper.params.focusableElements,
            // Last click time
            lastClickTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        }); // Install Modules

        swiper.useModules();
        swiper.emit('_swiper'); // Init

        if (swiper.params.init) {
          swiper.init();
        } // Return app instance


        return swiper;
      }

      var _proto = Swiper.prototype;

      _proto.enable = function enable() {
        var swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;

        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }

        swiper.emit('enable');
      };

      _proto.disable = function disable() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;

        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }

        swiper.emit('disable');
      };

      _proto.setProgress = function setProgress(progress, speed) {
        var swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        var min = swiper.minTranslate();
        var max = swiper.maxTranslate();
        var current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      };

      _proto.emitContainerClasses = function emitContainerClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var classes = swiper.el.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', classes.join(' '));
      };

      _proto.getSlideClasses = function getSlideClasses(slideEl) {
        var swiper = this;
        return slideEl.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      };

      _proto.emitSlidesClasses = function emitSlidesClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var updates = [];
        swiper.slides.each(function (slideEl) {
          var classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl: slideEl,
            classNames: classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      };

      _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
        var swiper = this;
        var params = swiper.params,
            slides = swiper.slides,
            slidesGrid = swiper.slidesGrid,
            swiperSize = swiper.size,
            activeIndex = swiper.activeIndex;
        var spv = 1;

        if (params.centeredSlides) {
          var slideSize = slides[activeIndex].swiperSlideSize;
          var breakLoop;

          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }

          for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
            if (slides[_i] && !breakLoop) {
              slideSize += slides[_i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
            if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
              spv += 1;
            }
          }
        }

        return spv;
      };

      _proto.update = function update() {
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var snapGrid = swiper.snapGrid,
            params = swiper.params; // Breakpoints

        if (params.breakpoints) {
          swiper.setBreakpoint();
        }

        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        var translated;

        if (swiper.params.freeMode) {
          setTranslate();

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }

          if (!translated) {
            setTranslate();
          }
        }

        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }

        swiper.emit('update');
      };

      _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }

        var swiper = this;
        var currentDirection = swiper.params.direction;

        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }

        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }

        swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(function (slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      };

      _proto.mount = function mount(el) {
        var swiper = this;
        if (swiper.mounted) return true; // Find el

        var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el || swiper.params.el);
        el = $el[0];

        if (!el) {
          return false;
        }

        el.swiper = swiper;

        var getWrapperSelector = function getWrapperSelector() {
          return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
        };

        var getWrapper = function getWrapper() {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            var res = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

            res.children = function (options) {
              return $el.children(options);
            };

            return res;
          }

          return $el.children(getWrapperSelector());
        }; // Find Wrapper


        var $wrapperEl = getWrapper();

        if ($wrapperEl.length === 0 && swiper.params.createElements) {
          var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
          var wrapper = document.createElement('div');
          $wrapperEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper);
          wrapper.className = swiper.params.wrapperClass;
          $el.append(wrapper);
          $el.children("." + swiper.params.slideClass).each(function (slideEl) {
            $wrapperEl.append(slideEl);
          });
        }

        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
      };

      _proto.init = function init(el) {
        var swiper = this;
        if (swiper.initialized) return swiper;
        var mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint

        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes


        swiper.addClasses(); // Create loop

        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size


        swiper.updateSize(); // Update slides

        swiper.updateSlides();

        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor


        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide


        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        } // Attach events


        swiper.attachEvents(); // Init Flag

        swiper.initialized = true; // Emit

        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      };

      _proto.destroy = function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }

        if (cleanStyles === void 0) {
          cleanStyles = true;
        }

        var swiper = this;
        var params = swiper.params,
            $el = swiper.$el,
            $wrapperEl = swiper.$wrapperEl,
            slides = swiper.slides;

        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }

        swiper.emit('beforeDestroy'); // Init Flag

        swiper.initialized = false; // Detach events

        swiper.detachEvents(); // Destroy loop

        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles


        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');

          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }

        swiper.emit('destroy'); // Detach emitter events

        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["deleteProps"])(swiper);
        }

        swiper.destroyed = true;
        return null;
      };

      Swiper.extendDefaults = function extendDefaults(newDefaults) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(extendedDefaults, newDefaults);
      };

      Swiper.installModule = function installModule(module) {
        if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
        var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
        Swiper.prototype.modules[name] = module;
      };

      Swiper.use = function use(module) {
        if (Array.isArray(module)) {
          module.forEach(function (m) {
            return Swiper.installModule(m);
          });
          return Swiper;
        }

        Swiper.installModule(module);
        return Swiper;
      };

      _createClass(Swiper, null, [{
        key: "extendedDefaults",
        get: function get() {
          return extendedDefaults;
        }
      }, {
        key: "defaults",
        get: function get() {
          return _defaults__WEBPACK_IMPORTED_MODULE_22__["default"];
        }
      }]);

      return Swiper;
    }();

    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([_modules_resize_resize__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_observer_observer__WEBPACK_IMPORTED_MODULE_7__["default"]]);
    /* harmony default export */

    __webpack_exports__["default"] = Swiper;
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/defaults.js":
  /*!*************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/defaults.js ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreDefaultsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: false,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Free mode
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      breakpointsBase: 'window',
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: false,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      // NS
      containerModifierClass: 'swiper-container-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/events-emitter.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events-emitter.js ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsEmitterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* eslint-disable no-underscore-dangle */

    /* harmony default export */


    __webpack_exports__["default"] = {
      on: function on(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function (event) {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },
      once: function once(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;

        function onceHandler() {
          self.off(events, onceHandler);

          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          handler.apply(self, args);
        }

        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },
      onAny: function onAny(handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';

        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }

        return self;
      },
      offAny: function offAny(handler) {
        var self = this;
        if (!self.eventsAnyListeners) return self;
        var index = self.eventsAnyListeners.indexOf(handler);

        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }

        return self;
      },
      off: function off(events, handler) {
        var self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(function (event) {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(function (eventHandler, index) {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },
      emit: function emit() {
        var self = this;
        if (!self.eventsListeners) return self;
        var events;
        var data;
        var context;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }

        data.unshift(context);
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(function (eventHandler) {
              eventHandler.apply(context, [event].concat(data));
            });
          }

          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(function (eventHandler) {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/events/index.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events/index.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _onTouchStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./onTouchStart */
    "./node_modules/swiper/esm/components/core/events/onTouchStart.js");
    /* harmony import */


    var _onTouchMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./onTouchMove */
    "./node_modules/swiper/esm/components/core/events/onTouchMove.js");
    /* harmony import */


    var _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./onTouchEnd */
    "./node_modules/swiper/esm/components/core/events/onTouchEnd.js");
    /* harmony import */


    var _onResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./onResize */
    "./node_modules/swiper/esm/components/core/events/onResize.js");
    /* harmony import */


    var _onClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./onClick */
    "./node_modules/swiper/esm/components/core/events/onClick.js");
    /* harmony import */


    var _onScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./onScroll */
    "./node_modules/swiper/esm/components/core/events/onScroll.js");

    var dummyEventAttached = false;

    function dummyEventListener() {}

    function attachEvents() {
      var swiper = this;
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          device = swiper.device,
          support = swiper.support;
      swiper.onTouchStart = _onTouchStart__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
      swiper.onTouchMove = _onTouchMove__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
      swiper.onTouchEnd = _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);

      if (params.cssMode) {
        swiper.onScroll = _onScroll__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);
      }

      swiper.onClick = _onClick__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);
      var capture = !!params.nested; // Touch Events

      if (!support.touch && support.pointerEvents) {
        el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture: capture
          } : capture);
          el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }

          if (!dummyEventAttached) {
            document.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
          }
        }

        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
          el.addEventListener('mousedown', swiper.onTouchStart, false);
          document.addEventListener('mousemove', swiper.onTouchMove, capture);
          document.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.addEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.addEventListener('scroll', swiper.onScroll);
      } // Resize handler


      if (params.updateOnWindowResize) {
        swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"], true);
      } else {
        swiper.on('observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"], true);
      }
    }

    function detachEvents() {
      var swiper = this;
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          device = swiper.device,
          support = swiper.support;
      var capture = !!params.nested; // Touch Events

      if (!support.touch && support.pointerEvents) {
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
        }

        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
          el.removeEventListener('mousedown', swiper.onTouchStart, false);
          document.removeEventListener('mousemove', swiper.onTouchMove, capture);
          document.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.removeEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.removeEventListener('scroll', swiper.onScroll);
      } // Resize handler


      swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }
    /* harmony default export */


    __webpack_exports__["default"] = {
      attachEvents: attachEvents,
      detachEvents: detachEvents
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/events/onClick.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events/onClick.js ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsOnClickJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return onClick;
    });

    function onClick(e) {
      var swiper = this;
      if (!swiper.enabled) return;

      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();

        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/events/onResize.js":
  /*!********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events/onResize.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsOnResizeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return onResize;
    });

    function onResize() {
      var swiper = this;
      var params = swiper.params,
          el = swiper.el;
      if (el && el.offsetWidth === 0) return; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks


      var allowSlideNext = swiper.allowSlideNext,
          allowSlidePrev = swiper.allowSlidePrev,
          snapGrid = swiper.snapGrid; // Disable locks on resize

      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize


      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/events/onScroll.js":
  /*!********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events/onScroll.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsOnScrollJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return onScroll;
    });

    function onScroll() {
      var swiper = this;
      var wrapperEl = swiper.wrapperEl,
          rtlTranslate = swiper.rtlTranslate,
          enabled = swiper.enabled;
      if (!enabled) return;
      swiper.previousTranslate = swiper.translate;

      if (swiper.isHorizontal()) {
        if (rtlTranslate) {
          swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
        } else {
          swiper.translate = -wrapperEl.scrollLeft;
        }
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line


      if (swiper.translate === -0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }

      swiper.emit('setTranslate', swiper.translate, false);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/events/onTouchEnd.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events/onTouchEnd.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsOnTouchEndJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return onTouchEnd;
    });
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function onTouchEnd(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate,
          $wrapperEl = swiper.$wrapperEl,
          slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid,
          enabled = swiper.enabled;
      if (!enabled) return;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }

      data.allowTouchCallbacks = false;

      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }

        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor


      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff


      var touchEndTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
      var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

      if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);

        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
        if (!swiper.destroyed) swiper.allowClick = true;
      });

      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }

      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      var currentPos;

      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }

          return;
        }

        if (params.freeModeMomentum) {
          if (data.velocities.length > 1) {
            var lastMoveEvent = data.velocities.pop();
            var velocityEvent = data.velocities.pop();
            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;

            if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }

          swiper.velocity *= params.freeModeMomentumVelocityRatio;
          data.velocities.length = 0;
          var momentumDuration = 1000 * params.freeModeMomentumRatio;
          var momentumDistance = swiper.velocity * momentumDuration;
          var newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
          var needsLoopFix;

          if (newPosition < swiper.maxTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }

              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeModeSticky) {
            var nextSlide;

            for (var j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }

            newPosition = -newPosition;
          }

          if (needsLoopFix) {
            swiper.once('transitionEnd', function () {
              swiper.loopFix();
            });
          } // Fix duration


          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }

            if (params.freeModeSticky) {
              // If freeModeSticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
          }

          if (params.freeModeMomentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              swiper.emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(function () {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(function () {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);

            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.emit('_freeModeNoMomentumRelease');
            swiper.updateProgress(newPosition);
          }

          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        } else if (params.freeMode) {
          swiper.emit('_freeModeNoMomentumRelease');
        }

        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        return;
      } // Find current slide


      var stopIndex = 0;
      var groupSize = swiper.slidesSizesGrid[0];

      for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (typeof slidesGrid[i + _increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + _increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      } // Find current slide size


      var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }

        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + increment);
          }

          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/events/onTouchMove.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events/onTouchMove.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsOnTouchMoveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return onTouchMove;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function onTouchMove(event) {
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate,
          enabled = swiper.enabled;
      if (!enabled) return;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }

        return;
      }

      if (data.isTouchEvent && e.type !== 'touchmove') return;
      var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }

      if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;

        if (data.isTouched) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
        }

        return;
      }

      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }

      if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }

      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      var diffX = touches.currentX - touches.startX;
      var diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

      if (typeof data.isScrolling === 'undefined') {
        var touchAngle;

        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }

      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }

      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }

      if (!data.startMoving) {
        return;
      }

      swiper.allowClick = false;

      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }

      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop) {
          swiper.loopFix();
        }

        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);

        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }

        data.allowMomentumBounce = false; // Grab Cursor

        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }

        swiper.emit('sliderFirstMove', e);
      }

      swiper.emit('sliderMove', e);
      data.isMoved = true;
      var diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      var disableParentSwiper = true;
      var resistanceRatio = params.resistanceRatio;

      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }

      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      } // Threshold


      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) return; // Update active index in free mode

      if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }

        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])()
        });
      } // Update progress


      swiper.updateProgress(data.currentTranslate); // Update translate

      swiper.setTranslate(data.currentTranslate);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/events/onTouchStart.js":
  /*!************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/events/onTouchStart.js ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreEventsOnTouchStartJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return onTouchStart;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd


    function closestElement(selector, base) {
      if (base === void 0) {
        base = this;
      }

      function __closestFrom(el) {
        if (!el || el === Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])() || el === Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        var found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
      }

      return __closestFrom(base);
    }

    function onTouchStart(event) {
      var swiper = this;
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          enabled = swiper.enabled;
      if (!enabled) return;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }

      var e = event;
      if (e.originalEvent) e = e.originalEvent;
      var $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
      }

      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return; // change target el for shadow root component

      var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

      if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
        $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(event.path[0]);
      }

      var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
      var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
      }

      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      var startX = touches.currentX;
      var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
          event.preventDefault();
        } else {
          return;
        }
      }

      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;

      if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($targetEl.is(data.focusableElements)) preventDefault = false;

        if (document.activeElement && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
          document.activeElement.blur();
        }

        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
          e.preventDefault();
        }
      }

      swiper.emit('touchStart', e);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/grab-cursor/index.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/grab-cursor/index.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreGrabCursorIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./setGrabCursor */
    "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js");
    /* harmony import */


    var _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./unsetGrabCursor */
    "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      setGrabCursor: _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__["default"],
      unsetGrabCursor: _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreGrabCursorSetGrabCursorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return setGrabCursor;
    });

    function setGrabCursor(moving) {
      var swiper = this;
      if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      var el = swiper.el;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreGrabCursorUnsetGrabCursorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return unsetGrabCursor;
    });

    function unsetGrabCursor() {
      var swiper = this;

      if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }

      swiper.el.style.cursor = '';
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/images/index.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/images/index.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreImagesIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./loadImage */
    "./node_modules/swiper/esm/components/core/images/loadImage.js");
    /* harmony import */


    var _preloadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./preloadImages */
    "./node_modules/swiper/esm/components/core/images/preloadImages.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      loadImage: _loadImage__WEBPACK_IMPORTED_MODULE_0__["default"],
      preloadImages: _preloadImages__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/images/loadImage.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/images/loadImage.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreImagesLoadImageJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return loadImage;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var image;

      function onReady() {
        if (callback) callback();
      }

      var isPicture = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];

      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (sizes) {
            image.sizes = sizes;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/images/preloadImages.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/images/preloadImages.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreImagesPreloadImagesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return preloadImages;
    });

    function preloadImages() {
      var swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');

      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update();
          swiper.emit('imagesReady');
        }
      }

      for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/loop/index.js":
  /*!***************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/loop/index.js ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreLoopIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _loopCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./loopCreate */
    "./node_modules/swiper/esm/components/core/loop/loopCreate.js");
    /* harmony import */


    var _loopFix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./loopFix */
    "./node_modules/swiper/esm/components/core/loop/loopFix.js");
    /* harmony import */


    var _loopDestroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loopDestroy */
    "./node_modules/swiper/esm/components/core/loop/loopDestroy.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      loopCreate: _loopCreate__WEBPACK_IMPORTED_MODULE_0__["default"],
      loopFix: _loopFix__WEBPACK_IMPORTED_MODULE_1__["default"],
      loopDestroy: _loopDestroy__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/loop/loopCreate.js":
  /*!********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/loop/loopCreate.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreLoopLoopCreateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return loopCreate;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");

    function loopCreate() {
      var swiper = this;
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
      var slides = $wrapperEl.children("." + params.slideClass);

      if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

        if (blankSlidesNum !== params.slidesPerGroup) {
          for (var i = 0; i < blankSlidesNum; i += 1) {
            var blankNode = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
            $wrapperEl.append(blankNode);
          }

          slides = $wrapperEl.children("." + params.slideClass);
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;

      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }

      var prependSlides = [];
      var appendSlides = [];
      slides.each(function (el, index) {
        var slide = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

        if (index < swiper.loopedSlides) {
          appendSlides.push(el);
        }

        if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
          prependSlides.push(el);
        }

        slide.attr('data-swiper-slide-index', index);
      });

      for (var _i = 0; _i < appendSlides.length; _i += 1) {
        $wrapperEl.append(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }

      for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
        $wrapperEl.prepend(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/loop/loopDestroy.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/loop/loopDestroy.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreLoopLoopDestroyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return loopDestroy;
    });

    function loopDestroy() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          slides = swiper.slides;
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
      slides.removeAttr('data-swiper-slide-index');
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/loop/loopFix.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/loop/loopFix.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreLoopLoopFixJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return loopFix;
    });

    function loopFix() {
      var swiper = this;
      swiper.emit('beforeLoopFix');
      var activeIndex = swiper.activeIndex,
          slides = swiper.slides,
          loopedSlides = swiper.loopedSlides,
          allowSlidePrev = swiper.allowSlidePrev,
          allowSlideNext = swiper.allowSlideNext,
          snapGrid = swiper.snapGrid,
          rtl = swiper.rtlTranslate;
      var newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      var snapTranslate = -snapGrid[activeIndex];
      var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;

        var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (_slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }

      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/manipulation/addSlide.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/manipulation/addSlide.js ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreManipulationAddSlideJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return addSlide;
    });

    function addSlide(index, slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }

      var baseLength = swiper.slides.length;

      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }

      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }

      var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      var slidesBuffer = [];

      for (var i = baseLength - 1; i >= index; i -= 1) {
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (var _i = 0; _i < slides.length; _i += 1) {
          if (slides[_i]) $wrapperEl.append(slides[_i]);
        }

        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
        $wrapperEl.append(slidesBuffer[_i2]);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/manipulation/appendSlide.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreManipulationAppendSlideJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return appendSlide;
    });

    function appendSlide(slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params;

      if (params.loop) {
        swiper.loopDestroy();
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/manipulation/index.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/manipulation/index.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreManipulationIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _appendSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./appendSlide */
    "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js");
    /* harmony import */


    var _prependSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./prependSlide */
    "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js");
    /* harmony import */


    var _addSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./addSlide */
    "./node_modules/swiper/esm/components/core/manipulation/addSlide.js");
    /* harmony import */


    var _removeSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./removeSlide */
    "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js");
    /* harmony import */


    var _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./removeAllSlides */
    "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      appendSlide: _appendSlide__WEBPACK_IMPORTED_MODULE_0__["default"],
      prependSlide: _prependSlide__WEBPACK_IMPORTED_MODULE_1__["default"],
      addSlide: _addSlide__WEBPACK_IMPORTED_MODULE_2__["default"],
      removeSlide: _removeSlide__WEBPACK_IMPORTED_MODULE_3__["default"],
      removeAllSlides: _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/manipulation/prependSlide.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreManipulationPrependSlideJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return prependSlide;
    });

    function prependSlide(slides) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;

      if (params.loop) {
        swiper.loopDestroy();
      }

      var newActiveIndex = activeIndex + 1;

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }

      swiper.slideTo(newActiveIndex, 0, false);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreManipulationRemoveAllSlidesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return removeAllSlides;
    });

    function removeAllSlides() {
      var swiper = this;
      var slidesIndexes = [];

      for (var i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }

      swiper.removeSlide(slidesIndexes);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/manipulation/removeSlide.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreManipulationRemoveSlideJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return removeSlide;
    });

    function removeSlide(slidesIndexes) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }

      var newActiveIndex = activeIndexBuffer;
      var indexToRemove;

      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (var i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/modular.js":
  /*!************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/modular.js ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreModularJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      useParams: function useParams(instanceParams) {
        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName]; // Extend params

          if (module.params) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(instanceParams, module.params);
          }
        });
      },
      useModules: function useModules(modulesParams) {
        if (modulesParams === void 0) {
          modulesParams = {};
        }

        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName];
          var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

          if (module.on && instance.on) {
            Object.keys(module.on).forEach(function (moduleEventName) {
              instance.on(moduleEventName, module.on[moduleEventName]);
            });
          } // Module create callback


          if (module.create) {
            module.create.bind(instance)(moduleParams);
          }
        });
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/index.js ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _slideTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./slideTo */
    "./node_modules/swiper/esm/components/core/slide/slideTo.js");
    /* harmony import */


    var _slideToLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./slideToLoop */
    "./node_modules/swiper/esm/components/core/slide/slideToLoop.js");
    /* harmony import */


    var _slideNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./slideNext */
    "./node_modules/swiper/esm/components/core/slide/slideNext.js");
    /* harmony import */


    var _slidePrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slidePrev */
    "./node_modules/swiper/esm/components/core/slide/slidePrev.js");
    /* harmony import */


    var _slideReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./slideReset */
    "./node_modules/swiper/esm/components/core/slide/slideReset.js");
    /* harmony import */


    var _slideToClosest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./slideToClosest */
    "./node_modules/swiper/esm/components/core/slide/slideToClosest.js");
    /* harmony import */


    var _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slideToClickedSlide */
    "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      slideTo: _slideTo__WEBPACK_IMPORTED_MODULE_0__["default"],
      slideToLoop: _slideToLoop__WEBPACK_IMPORTED_MODULE_1__["default"],
      slideNext: _slideNext__WEBPACK_IMPORTED_MODULE_2__["default"],
      slidePrev: _slidePrev__WEBPACK_IMPORTED_MODULE_3__["default"],
      slideReset: _slideReset__WEBPACK_IMPORTED_MODULE_4__["default"],
      slideToClosest: _slideToClosest__WEBPACK_IMPORTED_MODULE_5__["default"],
      slideToClickedSlide: _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/slideNext.js":
  /*!********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/slideNext.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideSlideNextJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return slideNext;
    });
    /* eslint no-unused-vars: "off" */


    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating,
          enabled = swiper.enabled;
      if (!enabled) return swiper;
      var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/slidePrev.js":
  /*!********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/slidePrev.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideSlidePrevJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return slidePrev;
    });
    /* eslint no-unused-vars: "off" */


    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          rtlTranslate = swiper.rtlTranslate,
          enabled = swiper.enabled;
      if (!enabled) return swiper;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      var translate = rtlTranslate ? swiper.translate : -swiper.translate;

      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }

      var normalizedTranslate = normalize(translate);
      var normalizedSnapGrid = snapGrid.map(function (val) {
        return normalize(val);
      });
      var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

      if (typeof prevSnap === 'undefined' && params.cssMode) {
        snapGrid.forEach(function (snap) {
          if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
        });
      }

      var prevIndex;

      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      }

      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/slideReset.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/slideReset.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideSlideResetJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return slideReset;
    });
    /* eslint no-unused-vars: "off" */


    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/slideTo.js":
  /*!******************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/slideTo.js ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideSlideToJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return slideTo;
    });

    function slideTo(index, speed, runCallbacks, internal, initial) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (typeof index !== 'number' && typeof index !== 'string') {
        throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
      }

      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        var indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */

        var isValidNumber = isFinite(indexAsNumber);

        if (!isValidNumber) {
          throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.


        index = indexAsNumber;
      }

      var swiper = this;
      var slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      var params = swiper.params,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          previousIndex = swiper.previousIndex,
          activeIndex = swiper.activeIndex,
          rtl = swiper.rtlTranslate,
          wrapperEl = swiper.wrapperEl,
          enabled = swiper.enabled;

      if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }

      var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      var translate = -snapGrid[snapIndex]; // Update progress

      swiper.updateProgress(translate); // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          var normalizedTranslate = -Math.floor(translate * 100);
          var normalizedGird = Math.floor(slidesGrid[i] * 100);
          var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGird) {
            slideIndex = i;
          }
        }
      } // Directions locks


      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }

        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }

      var direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height

        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }

        swiper.updateSlidesClasses();

        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }

        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }

        return false;
      }

      if (params.cssMode) {
        var isH = swiper.isHorizontal();
        var t = -translate;

        if (rtl) {
          t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
        }

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;

            wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
              swiper.onSlideToWrapperTransitionEnd = null;
              delete swiper.onSlideToWrapperTransitionEnd;
              swiper.transitionEnd(runCallbacks, direction);
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
      }

      return true;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideSlideToClickedSlideJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return slideToClickedSlide;
    });
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function slideToClickedSlide() {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl;
      var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      var slideToIndex = swiper.clickedIndex;
      var realIndex;

      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/slideToClosest.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/slideToClosest.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideSlideToClosestJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return slideToClosest;
    });
    /* eslint no-unused-vars: "off" */


    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (threshold === void 0) {
        threshold = 0.5;
      }

      var swiper = this;
      var index = swiper.activeIndex;
      var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];

        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        var prevSnap = swiper.snapGrid[snapIndex - 1];
        var _currentSnap = swiper.snapGrid[snapIndex];

        if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }

      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/slide/slideToLoop.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/slide/slideToLoop.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreSlideSlideToLoopJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return slideToLoop;
    });

    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var newIndex = index;

      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }

      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/transition/index.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/transition/index.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTransitionIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _setTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./setTransition */
    "./node_modules/swiper/esm/components/core/transition/setTransition.js");
    /* harmony import */


    var _transitionStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./transitionStart */
    "./node_modules/swiper/esm/components/core/transition/transitionStart.js");
    /* harmony import */


    var _transitionEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./transitionEnd */
    "./node_modules/swiper/esm/components/core/transition/transitionEnd.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      setTransition: _setTransition__WEBPACK_IMPORTED_MODULE_0__["default"],
      transitionStart: _transitionStart__WEBPACK_IMPORTED_MODULE_1__["default"],
      transitionEnd: _transitionEnd__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/transition/setTransition.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/transition/setTransition.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTransitionSetTransitionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return setTransition;
    });

    function setTransition(duration, byController) {
      var swiper = this;

      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }

      swiper.emit('setTransition', duration, byController);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/transition/transitionEnd.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/transition/transitionEnd.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTransitionTransitionEndJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return transitionEnd;
    });

    function transitionEnd(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var activeIndex = swiper.activeIndex,
          previousIndex = swiper.previousIndex,
          params = swiper.params;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit('transitionEnd');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionEnd');
          return;
        }

        swiper.emit('slideChangeTransitionEnd');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionEnd');
        } else {
          swiper.emit('slidePrevTransitionEnd');
        }
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/transition/transitionStart.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/transition/transitionStart.js ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTransitionTransitionStartJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return transitionStart;
    });

    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var activeIndex = swiper.activeIndex,
          params = swiper.params,
          previousIndex = swiper.previousIndex;
      if (params.cssMode) return;

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit('transitionStart');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionStart');
          return;
        }

        swiper.emit('slideChangeTransitionStart');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionStart');
        } else {
          swiper.emit('slidePrevTransitionStart');
        }
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/translate/getTranslate.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/translate/getTranslate.js ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTranslateGetTranslateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return getSwiperTranslate;
    });
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function getSwiperTranslate(axis) {
      if (axis === void 0) {
        axis = this.isHorizontal() ? 'x' : 'y';
      }

      var swiper = this;
      var params = swiper.params,
          rtl = swiper.rtlTranslate,
          translate = swiper.translate,
          $wrapperEl = swiper.$wrapperEl;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }

      if (params.cssMode) {
        return translate;
      }

      var currentTranslate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getTranslate"])($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/translate/index.js":
  /*!********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/translate/index.js ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTranslateIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _getTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./getTranslate */
    "./node_modules/swiper/esm/components/core/translate/getTranslate.js");
    /* harmony import */


    var _setTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./setTranslate */
    "./node_modules/swiper/esm/components/core/translate/setTranslate.js");
    /* harmony import */


    var _minTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./minTranslate */
    "./node_modules/swiper/esm/components/core/translate/minTranslate.js");
    /* harmony import */


    var _maxTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./maxTranslate */
    "./node_modules/swiper/esm/components/core/translate/maxTranslate.js");
    /* harmony import */


    var _translateTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./translateTo */
    "./node_modules/swiper/esm/components/core/translate/translateTo.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      getTranslate: _getTranslate__WEBPACK_IMPORTED_MODULE_0__["default"],
      setTranslate: _setTranslate__WEBPACK_IMPORTED_MODULE_1__["default"],
      minTranslate: _minTranslate__WEBPACK_IMPORTED_MODULE_2__["default"],
      maxTranslate: _maxTranslate__WEBPACK_IMPORTED_MODULE_3__["default"],
      translateTo: _translateTo__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/translate/maxTranslate.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/translate/maxTranslate.js ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTranslateMaxTranslateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return maxTranslate;
    });

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/translate/minTranslate.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/translate/minTranslate.js ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTranslateMinTranslateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return minTranslate;
    });

    function minTranslate() {
      return -this.snapGrid[0];
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/translate/setTranslate.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/translate/setTranslate.js ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTranslateSetTranslateJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return setTranslate;
    });

    function setTranslate(translate, byController) {
      var swiper = this;
      var rtl = swiper.rtlTranslate,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          wrapperEl = swiper.wrapperEl,
          progress = swiper.progress;
      var x = 0;
      var y = 0;
      var z = 0;

      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
      }

      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }

      swiper.emit('setTranslate', swiper.translate, byController);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/translate/translateTo.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/translate/translateTo.js ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreTranslateTranslateToJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return translateTo;
    });

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      if (translate === void 0) {
        translate = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (translateBounds === void 0) {
        translateBounds = true;
      }

      var swiper = this;
      var params = swiper.params,
          wrapperEl = swiper.wrapperEl;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var minTranslate = swiper.minTranslate();
      var maxTranslate = swiper.maxTranslate();
      var newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

      swiper.updateProgress(newTranslate);

      if (params.cssMode) {
        var isH = swiper.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;

            wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;

              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/index.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/index.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _updateSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./updateSize */
    "./node_modules/swiper/esm/components/core/update/updateSize.js");
    /* harmony import */


    var _updateSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./updateSlides */
    "./node_modules/swiper/esm/components/core/update/updateSlides.js");
    /* harmony import */


    var _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./updateAutoHeight */
    "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js");
    /* harmony import */


    var _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./updateSlidesOffset */
    "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js");
    /* harmony import */


    var _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./updateSlidesProgress */
    "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js");
    /* harmony import */


    var _updateProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./updateProgress */
    "./node_modules/swiper/esm/components/core/update/updateProgress.js");
    /* harmony import */


    var _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./updateSlidesClasses */
    "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js");
    /* harmony import */


    var _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./updateActiveIndex */
    "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js");
    /* harmony import */


    var _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./updateClickedSlide */
    "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js");
    /* harmony default export */


    __webpack_exports__["default"] = {
      updateSize: _updateSize__WEBPACK_IMPORTED_MODULE_0__["default"],
      updateSlides: _updateSlides__WEBPACK_IMPORTED_MODULE_1__["default"],
      updateAutoHeight: _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__["default"],
      updateSlidesOffset: _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__["default"],
      updateSlidesProgress: _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__["default"],
      updateProgress: _updateProgress__WEBPACK_IMPORTED_MODULE_5__["default"],
      updateSlidesClasses: _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__["default"],
      updateActiveIndex: _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__["default"],
      updateClickedSlide: _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__["default"]
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateActiveIndex.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateActiveIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateActiveIndex;
    });
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function updateActiveIndex(newActiveIndex) {
      var swiper = this;
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      var slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid,
          params = swiper.params,
          previousIndex = swiper.activeIndex,
          previousRealIndex = swiper.realIndex,
          previousSnapIndex = swiper.snapIndex;
      var activeIndex = newActiveIndex;
      var snapIndex;

      if (typeof activeIndex === 'undefined') {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex


        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }

      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }

      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }

        return;
      } // Get real index


      var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');

      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }

      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateAutoHeight.js ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateAutoHeightJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateAutoHeight;
    });

    function updateAutoHeight(speed) {
      var swiper = this;
      var activeSlides = [];
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var newHeight = 0;
      var i;

      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      }

      var getSlideByIndex = function getSlideByIndex(index) {
        if (isVirtual) {
          return swiper.slides.filter(function (el) {
            return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
          })[0];
        }

        return swiper.slides.eq(index)[0];
      }; // Find slides currently in view


      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          swiper.visibleSlides.each(function (slide) {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper.activeIndex));
      } // Find new height from highest slide in view


      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          var height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height


      if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateClickedSlide.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateClickedSlideJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateClickedSlide;
    });
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");

    function updateClickedSlide(e) {
      var swiper = this;
      var params = swiper.params;
      var slide = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + params.slideClass)[0];
      var slideFound = false;
      var slideIndex;

      if (slide) {
        for (var i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }

      if (slide && slideFound) {
        swiper.clickedSlide = slide;

        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = slideIndex;
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }

      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateProgress.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateProgress.js ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateProgressJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateProgress;
    });
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function updateProgress(translate) {
      var swiper = this;

      if (typeof translate === 'undefined') {
        var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }

      var params = swiper.params;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      var progress = swiper.progress,
          isBeginning = swiper.isBeginning,
          isEnd = swiper.isEnd;
      var wasBeginning = isBeginning;
      var wasEnd = isEnd;

      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }

      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd
      });
      if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }

      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }

      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }

      swiper.emit('progress', progress);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateSize.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateSize.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateSizeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateSize;
    });
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function updateSize() {
      var swiper = this;
      var width;
      var height;
      var $el = swiper.$el;

      if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }

      if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }

      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings


      width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
      height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
      });
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateSlides.js":
  /*!************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateSlides.js ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateSlidesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateSlides;
    });
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function updateSlides() {
      var swiper = this;

      function getDirectionLabel(property) {
        if (swiper.isHorizontal()) {
          return property;
        } // prettier-ignore


        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }

      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }

      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl,
          swiperSize = swiper.size,
          rtl = swiper.rtlTranslate,
          wrongRTL = swiper.wrongRTL;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      var slides = $wrapperEl.children("." + swiper.params.slideClass);
      var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      var snapGrid = [];
      var slidesGrid = [];
      var slidesSizesGrid = [];
      var offsetBefore = params.slidesOffsetBefore;

      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }

      var offsetAfter = params.slidesOffsetAfter;

      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }

      var previousSnapGridLength = swiper.snapGrid.length;
      var previousSlidesGridLength = swiper.slidesGrid.length;
      var spaceBetween = params.spaceBetween;
      var slidePosition = -offsetBefore;
      var prevSlideSize = 0;
      var index = 0;

      if (typeof swiperSize === 'undefined') {
        return;
      }

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }

      swiper.virtualSize = -spaceBetween; // reset margins

      if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
      });
      var slidesNumberEvenToRows;

      if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        }

        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
        }
      } // Calc slides


      var slideSize;
      var slidesPerColumn = params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

      for (var i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        var slide = slides.eq(i);

        if (params.slidesPerColumn > 1) {
          // Set slides order
          var newSlideOrderIndex = void 0;
          var column = void 0;
          var row = void 0;

          if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
            var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
            var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
            var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
            slide.css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex
            });
          } else if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - column * slidesPerColumn;

            if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
              row += 1;

              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
          }

          slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
        }

        if (slide.css('display') === 'none') continue; // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          var slideStyles = getComputedStyle(slide[0]);
          var currentTransform = slide[0].style.transform;
          var currentWebKitTransform = slide[0].style.webkitTransform;

          if (currentTransform) {
            slide[0].style.transform = 'none';
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }

          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            var width = getDirectionPropertyValue(slideStyles, 'width');
            var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
            var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
            var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
            var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
            var boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              var _slide$ = slide[0],
                  clientWidth = _slide$.clientWidth,
                  offsetWidth = _slide$.offsetWidth;
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }

          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }

          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);

          if (slides[i]) {
            slides[i].style[getDirectionLabel('width')] = slideSize + "px";
          }
        }

        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }

        slidesSizesGrid.push(slideSize);

        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }

      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      var newSlidesGrid;

      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });
      }

      if (params.setWrapperSize) {
        var _$wrapperEl$css;

        $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
      }

      if (params.slidesPerColumn > 1) {
        var _$wrapperEl$css2;

        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
        $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

        if (params.centeredSlides) {
          newSlidesGrid = [];

          for (var _i = 0; _i < snapGrid.length; _i += 1) {
            var slidesGridItem = snapGrid[_i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }

          snapGrid = newSlidesGrid;
        }
      } // Remove last grid elements depending on width


      if (!params.centeredSlides) {
        newSlidesGrid = [];

        for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
          var _slidesGridItem = snapGrid[_i2];
          if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

          if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(_slidesGridItem);
          }
        }

        snapGrid = newSlidesGrid;

        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }

      if (snapGrid.length === 0) snapGrid = [0];

      if (params.spaceBetween !== 0) {
        var _slides$filter$css;

        var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter(function (_, slideIndex) {
          if (!params.cssMode) return true;

          if (slideIndex === slides.length - 1) {
            return false;
          }

          return true;
        }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        var allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        var maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(function (snap) {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        var _allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        _allSlidesSize -= params.spaceBetween;

        if (_allSlidesSize < swiperSize) {
          var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
          snapGrid.forEach(function (snap, snapIndex) {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach(function (snap, snapIndex) {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
      });

      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }

      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }

      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateSlidesOffset();
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateSlidesClassesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateSlidesClasses;
    });

    function updateSlidesClasses() {
      var swiper = this;
      var slides = swiper.slides,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex,
          realIndex = swiper.realIndex;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
      var activeSlide;

      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes


      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide


      var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide


      var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }

      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        }

        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        }
      }

      swiper.emitSlidesClasses();
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateSlidesOffsetJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateSlidesOffset;
    });

    function updateSlidesOffset() {
      var swiper = this;
      var slides = swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsCoreUpdateUpdateSlidesProgressJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return updateSlidesProgress;
    });
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");

    function updateSlidesProgress(translate) {
      if (translate === void 0) {
        translate = this && this.translate || 0;
      }

      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides,
          rtl = swiper.rtlTranslate;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      var offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides

      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];

      for (var i = 0; i < slides.length; i += 1) {
        var slide = slides[i];
        var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

        if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
          var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
          var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
          var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

          if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
          }
        }

        slide.progress = rtl ? -slideProgress : slideProgress;
      }

      swiper.visibleSlides = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsEffectCoverflowEffectCoverflowJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Coverflow = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var swiperWidth = swiper.width,
            swiperHeight = swiper.height,
            slides = swiper.slides,
            slidesSizesGrid = swiper.slidesSizesGrid;
        var params = swiper.params.coverflowEffect;
        var isHorizontal = swiper.isHorizontal();
        var transform = swiper.translate;
        var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        var rotate = isHorizontal ? params.rotate : -params.rotate;
        var translate = params.depth; // Each slide offset from center

        for (var i = 0, length = slides.length; i < length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideSize = slidesSizesGrid[i];
          var slideOffset = $slideEl[0].swiperSlideOffset;
          var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
          var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

          var translateZ = -translate * Math.abs(offsetMultiplier);
          var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }

          var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

          if (params.slideShadows) {
            // Set shadows
            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
              $slideEl.append($shadowBeforeEl);
            }

            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append($shadowAfterEl);
            }

            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'effect-coverflow',
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          coverflowEffect: _extends({}, Coverflow)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'coverflow') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'coverflow') return;
          swiper.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'coverflow') return;
          swiper.coverflowEffect.setTransition(duration);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/effect-cube/effect-cube.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/effect-cube/effect-cube.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsEffectCubeEffectCubeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Cube = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el,
            $wrapperEl = swiper.$wrapperEl,
            slides = swiper.slides,
            swiperWidth = swiper.width,
            swiperHeight = swiper.height,
            rtl = swiper.rtlTranslate,
            swiperSize = swiper.size,
            browser = swiper.browser;
        var params = swiper.params.cubeEffect;
        var isHorizontal = swiper.isHorizontal();
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var wrapperRotate = 0;
        var $cubeShadowEl;

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }

            $cubeShadowEl.css({
              height: swiperWidth + "px"
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideIndex = i;

          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }

          var slideAngle = slideIndex * 90;
          var round = Math.floor(slideAngle / 360);

          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }

          var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          var tx = 0;
          var ty = 0;
          var tz = 0;

          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }

          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }

          $slideEl.transform(transform);

          if (params.slideShadows) {
            // Set shadows
            var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if (shadowBefore.length === 0) {
              shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
              $slideEl.append(shadowBefore);
            }

            if (shadowAfter.length === 0) {
              shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append(shadowAfter);
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }

        $wrapperEl.css({
          '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
          } else {
            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            var scale1 = params.shadowScale;
            var scale2 = params.shadowScale / multiplier;
            var offset = params.shadowOffset;
            $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
          }
        }

        var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var $el = swiper.$el,
            slides = swiper.slides;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'effect-cube',
      params: {
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          cubeEffect: _extends({}, Cube)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'cube') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "cube");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: false,
            virtualTranslate: true
          };
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'cube') return;
          swiper.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'cube') return;
          swiper.cubeEffect.setTransition(duration);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/effect-fade/effect-fade.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/effect-fade/effect-fade.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsEffectFadeEffectFadeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Fade = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = swiper.slides.eq(i);
          var offset = $slideEl[0].swiperSlideOffset;
          var tx = -offset;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          var ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }

          var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl.css({
            opacity: slideOpacity
          }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
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
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'effect-fade',
      params: {
        fadeEffect: {
          crossFade: false
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
          fadeEffect: _extends({}, Fade)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'fade') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "fade");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.params, overwriteParams);
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'fade') return;
          swiper.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'fade') return;
          swiper.fadeEffect.setTransition(duration);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/effect-flip/effect-flip.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/effect-flip/effect-flip.js ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsEffectFlipEffectFlipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Flip = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides,
            rtl = swiper.rtlTranslate;

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var progress = $slideEl[0].progress;

          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }

          var offset = $slideEl[0].swiperSlideOffset;
          var rotate = -180 * progress;
          var rotateY = rotate;
          var rotateX = 0;
          var tx = -offset;
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
              shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
              $slideEl.append(shadowBefore);
            }

            if (shadowAfter.length === 0) {
              shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append(shadowAfter);
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }

          $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
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
            if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'effect-flip',
      params: {
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          flipEffect: _extends({}, Flip)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'flip') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "flip");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'flip') return;
          swiper.flipEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'flip') return;
          swiper.flipEffect.setTransition(duration);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsHashNavigationHashNavigationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var HashNavigation = {
      onHashChange: function onHashChange() {
        var swiper = this;
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        swiper.emit('hashChange');
        var newHash = document.location.hash.replace('#', '');
        var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

        if (newHash !== activeSlideHash) {
          var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
          if (typeof newIndex === 'undefined') return;
          swiper.slideTo(newIndex);
        }
      },
      setHash: function setHash() {
        var swiper = this;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
          window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || false);
          swiper.emit('hashSet');
        } else {
          var slide = swiper.slides.eq(swiper.activeIndex);
          var hash = slide.attr('data-hash') || slide.attr('data-history');
          document.location.hash = hash || '';
          swiper.emit('hashSet');
        }
      },
      init: function init() {
        var swiper = this;
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        swiper.hashNavigation.initialized = true;
        var hash = document.location.hash.replace('#', '');

        if (hash) {
          var speed = 0;

          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHash = slide.attr('data-hash') || slide.attr('data-history');

            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }

        if (swiper.params.hashNavigation.watchState) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', swiper.hashNavigation.onHashChange);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

        if (swiper.params.hashNavigation.watchState) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', swiper.hashNavigation.onHashChange);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'hash-navigation',
      params: {
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
          hashNavigation: _extends({
            initialized: false
          }, HashNavigation)
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.init();
          }
        },
        destroy: function destroy(swiper) {
          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.destroy();
          }
        },
        'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
          if (swiper.hashNavigation.initialized) {
            swiper.hashNavigation.setHash();
          }
        },
        slideChange: function slideChange(swiper) {
          if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
            swiper.hashNavigation.setHash();
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/history/history.js":
  /*!***************************************************************!*\
    !*** ./node_modules/swiper/esm/components/history/history.js ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsHistoryHistoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var History = {
      init: function init() {
        var swiper = this;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        if (!swiper.params.history) return;

        if (!window.history || !window.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }

        var history = swiper.history;
        history.initialized = true;
        history.paths = History.getPathValues(swiper.params.url);
        if (!history.paths.key && !history.paths.value) return;
        history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

        if (!swiper.params.history.replaceState) {
          window.removeEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      setHistoryPopState: function setHistoryPopState() {
        var swiper = this;
        swiper.history.paths = History.getPathValues(swiper.params.url);
        swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
      },
      getPathValues: function getPathValues(urlOverride) {
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var location;

        if (urlOverride) {
          location = new URL(urlOverride);
        } else {
          location = window.location;
        }

        var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
          return part !== '';
        });
        var total = pathArray.length;
        var key = pathArray[total - 2];
        var value = pathArray[total - 1];
        return {
          key: key,
          value: value
        };
      },
      setHistory: function setHistory(key, index) {
        var swiper = this;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        if (!swiper.history.initialized || !swiper.params.history.enabled) return;
        var location;

        if (swiper.params.url) {
          location = new URL(swiper.params.url);
        } else {
          location = window.location;
        }

        var slide = swiper.slides.eq(index);
        var value = History.slugify(slide.attr('data-history'));

        if (swiper.params.history.root.length > 0) {
          var root = swiper.params.history.root;
          if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
          value = root + "/" + key + "/" + value;
        } else if (!location.pathname.includes(key)) {
          value = key + "/" + value;
        }

        var currentState = window.history.state;

        if (currentState && currentState.value === value) {
          return;
        }

        if (swiper.params.history.replaceState) {
          window.history.replaceState({
            value: value
          }, null, value);
        } else {
          window.history.pushState({
            value: value
          }, null, value);
        }
      },
      slugify: function slugify(text) {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      },
      scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
        var swiper = this;

        if (value) {
          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHistory = History.slugify(slide.attr('data-history'));

            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'history',
      params: {
        history: {
          enabled: false,
          root: '',
          replaceState: false,
          key: 'slides'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          history: _extends({}, History)
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.history.enabled) {
            swiper.history.init();
          }
        },
        destroy: function destroy(swiper) {
          if (swiper.params.history.enabled) {
            swiper.history.destroy();
          }
        },
        'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
          if (swiper.history.initialized) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        },
        slideChange: function slideChange(swiper) {
          if (swiper.history.initialized && swiper.params.cssMode) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/keyboard/keyboard.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/keyboard/keyboard.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsKeyboardKeyboardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }
    /* eslint-disable consistent-return */


    var Keyboard = {
      handle: function handle(event) {
        var swiper = this;
        if (!swiper.enabled) return;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        var kc = e.keyCode || e.charCode;
        var pageUpDown = swiper.params.keyboard.pageUpDown;
        var isPageUp = pageUpDown && kc === 33;
        var isPageDown = pageUpDown && kc === 34;
        var isArrowLeft = kc === 37;
        var isArrowRight = kc === 39;
        var isArrowUp = kc === 38;
        var isArrowDown = kc === 40; // Directions locks

        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }

        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }

        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }

        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }

        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          var inView = false; // Check that swiper should be inside of visible area of window

          if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
            return undefined;
          }

          var $el = swiper.$el;
          var swiperWidth = $el[0].clientWidth;
          var swiperHeight = $el[0].clientHeight;
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var swiperOffset = swiper.$el.offset();
          if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
          var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

          for (var i = 0; i < swiperCoord.length; i += 1) {
            var point = swiperCoord[i];

            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

              inView = true;
            }
          }

          if (!inView) return undefined;
        }

        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if (isPageDown || isArrowDown) swiper.slideNext();
          if (isPageUp || isArrowUp) swiper.slidePrev();
        }

        swiper.emit('keyPress', kc);
        return undefined;
      },
      enable: function enable() {
        var swiper = this;
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (swiper.keyboard.enabled) return;
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = true;
      },
      disable: function disable() {
        var swiper = this;
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (!swiper.keyboard.enabled) return;
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = false;
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'keyboard',
      params: {
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
          keyboard: _extends({
            enabled: false
          }, Keyboard)
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.keyboard.enabled) {
            swiper.keyboard.enable();
          }
        },
        destroy: function destroy(swiper) {
          if (swiper.keyboard.enabled) {
            swiper.keyboard.disable();
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/lazy/lazy.js":
  /*!*********************************************************!*\
    !*** ./node_modules/swiper/esm/components/lazy/lazy.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsLazyLazyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Lazy = {
      loadInSlide: function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) {
          loadInDuplicate = true;
        }

        var swiper = this;
        var params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
        var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images.push($slideEl[0]);
        }

        if ($images.length === 0) return;
        $images.each(function (imageEl) {
          var $imageEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl);
          $imageEl.addClass(params.loadingClass);
          var background = $imageEl.attr('data-background');
          var src = $imageEl.attr('data-src');
          var srcset = $imageEl.attr('data-srcset');
          var sizes = $imageEl.attr('data-sizes');
          var $pictureEl = $imageEl.parent('picture');
          swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

            if (background) {
              $imageEl.css('background-image', "url(\"" + background + "\")");
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }

              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }

              if ($pictureEl.length) {
                $pictureEl.children('source').each(function (sourceEl) {
                  var $source = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceEl);

                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }

              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }

            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find("." + params.preloaderClass).remove();

            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }

            swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });
          swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      },
      load: function load() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            swiperParams = swiper.params,
            slides = swiper.slides,
            activeIndex = swiper.activeIndex;
        var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        var params = swiperParams.lazy;
        var slidesPerView = swiperParams.slidesPerView;

        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }

        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
              return true;
            }
          } else if (slides[index]) return true;

          return false;
        }

        function slideIndex(slideEl) {
          if (isVirtual) {
            return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index');
          }

          return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
        }

        if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

        if (swiper.params.watchSlidesVisibility) {
          $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
            var index = isVirtual ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index') : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) swiper.lazy.loadInSlide(i);
          }
        } else {
          swiper.lazy.loadInSlide(activeIndex);
        }

        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            var amount = params.loadPrevNextAmount;
            var spv = slidesPerView;
            var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

            for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
              if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
            } // Prev Slides


            for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
              if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
            }
          } else {
            var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
            if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
            var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
            if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
          }
        }
      },
      checkInViewOnLoad: function checkInViewOnLoad() {
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var $scrollElement = swiper.params.lazy.scrollingElement ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.lazy.scrollingElement) : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window);
        var isWindow = $scrollElement[0] === window;
        var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        var swiperOffset = swiper.$el.offset();
        var rtl = swiper.rtlTranslate;
        var inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];

          if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;
          }
        }

        var passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (inView) {
          swiper.lazy.load();
          $scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad, passiveListener);
        } else if (!swiper.lazy.scrollHandlerAttached) {
          swiper.lazy.scrollHandlerAttached = true;
          $scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad, passiveListener);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'lazy',
      params: {
        lazy: {
          checkInView: false,
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
          lazy: _extends({
            initialImageLoaded: false
          }, Lazy)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
            swiper.params.preloadImages = false;
          }
        },
        init: function init(swiper) {
          if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
            if (swiper.params.lazy.checkInView) {
              swiper.lazy.checkInViewOnLoad();
            } else {
              swiper.lazy.load();
            }
          }
        },
        scroll: function scroll(swiper) {
          if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
            swiper.lazy.load();
          }
        },
        'scrollbarDragMove resize _freeModeNoMomentumRelease': function lazyLoad(swiper) {
          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        transitionStart: function transitionStart(swiper) {
          if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
              swiper.lazy.load();
            }
          }
        },
        transitionEnd: function transitionEnd(swiper) {
          if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            swiper.lazy.load();
          }
        },
        slideChange: function slideChange(swiper) {
          var _swiper$params = swiper.params,
              lazy = _swiper$params.lazy,
              cssMode = _swiper$params.cssMode,
              watchSlidesVisibility = _swiper$params.watchSlidesVisibility,
              watchSlidesProgress = _swiper$params.watchSlidesProgress,
              touchReleaseOnEdges = _swiper$params.touchReleaseOnEdges,
              resistanceRatio = _swiper$params.resistanceRatio;

          if (lazy.enabled && (cssMode || (watchSlidesVisibility || watchSlidesProgress) && (touchReleaseOnEdges || resistanceRatio === 0))) {
            swiper.lazy.load();
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/mousewheel/mousewheel.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/mousewheel/mousewheel.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsMousewheelMousewheelJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");
    /* eslint-disable consistent-return */


    function isEventSupported() {
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var eventName = 'onwheel';
      var isSupported = (eventName in document);

      if (!isSupported) {
        var element = document.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
      }

      if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      document.implementation.hasFeature('', '') !== true) {
        // This is the only way to test support for the `wheel` event in IE9+.
        isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
      }

      return isSupported;
    }

    var Mousewheel = {
      lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
      lastEventBeforeSnap: undefined,
      recentWheelEvents: [],
      event: function event() {
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
        return isEventSupported() ? 'wheel' : 'mousewheel';
      },
      normalize: function normalize(e) {
        // Reasonable defaults
        var PIXEL_STEP = 10;
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;
        var sX = 0;
        var sY = 0; // spinX, spinY

        var pX = 0;
        var pY = 0; // pixelX, pixelY
        // Legacy

        if ('detail' in e) {
          sY = e.detail;
        }

        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }

        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }

        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll


        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }

        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;

        if ('deltaY' in e) {
          pY = e.deltaY;
        }

        if ('deltaX' in e) {
          pX = e.deltaX;
        }

        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }

        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined


        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }

        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }

        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
      },
      handleMouseLeave: function handleMouseLeave() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
      },
      handle: function handle(event) {
        var e = event;
        var disableParentSwiper = true;
        var swiper = this;
        if (!swiper.enabled) return;
        var params = swiper.params.mousewheel;

        if (swiper.params.cssMode) {
          e.preventDefault();
        }

        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
        }

        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        var delta = 0;
        var rtlFactor = swiper.rtlTranslate ? -1 : 1;
        var data = Mousewheel.normalize(e);

        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }

        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions

        var positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.

        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

        if (!swiper.params.freeMode) {
          // Register the new event in a variable which stores the relevant data
          var newEvent = {
            time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events

          var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }

          var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.

          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              swiper.mousewheel.animateSlider(newEvent);
            }
          } else {
            swiper.mousewheel.animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.


          if (swiper.mousewheel.releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          var _newEvent = {
            time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
          var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

          if (!ignoreWheelEvents) {
            swiper.mousewheel.lastEventBeforeSnap = undefined;

            if (swiper.params.loop) {
              swiper.loopFix();
            }

            var position = swiper.getTranslate() + delta * params.sensitivity;
            var wasBeginning = swiper.isBeginning;
            var wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }

            if (swiper.params.freeModeSticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(swiper.mousewheel.timeout);
              swiper.mousewheel.timeout = undefined;
              var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

              if (_recentWheelEvents.length >= 15) {
                _recentWheelEvents.shift(); // only store the last N events

              }

              var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

              var firstEvent = _recentWheelEvents[0];

              _recentWheelEvents.push(_newEvent);

              if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                _recentWheelEvents.splice(0);
              } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                _recentWheelEvents.splice(0);

                swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }

              if (!swiper.mousewheel.timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
                  var snapToThreshold = 0.5;
                  swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                  _recentWheelEvents.splice(0);

                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event


            if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
          }
        }

        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      },
      animateSlider: function animateSlider(newEvent) {
        var swiper = this;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

        if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
          // Prevent if delta of wheel scroll delta is below configured threshold
          return false;
        }

        if (this.params.mousewheel.thresholdTime && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
          // Prevent if time between scrolls is below configured threshold
          return false;
        } // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).


        if (newEvent.delta >= 6 && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - swiper.mousewheel.lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.


        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time


        swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

        return false;
      },
      releaseScroll: function releaseScroll(newEvent) {
        var swiper = this;
        var params = swiper.params.mousewheel;

        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }

        return false;
      },
      enable: function enable() {
        var swiper = this;
        var event = Mousewheel.event();

        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
          return true;
        }

        if (!event) return false;
        if (swiper.mousewheel.enabled) return false;
        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
        }

        target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
        target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
        target.on(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = true;
        return true;
      },
      disable: function disable() {
        var swiper = this;
        var event = Mousewheel.event();

        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
          return true;
        }

        if (!event) return false;
        if (!swiper.mousewheel.enabled) return false;
        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
        }

        target.off(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = false;
        return true;
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'mousewheel',
      params: {
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
          mousewheel: {
            enabled: false,
            lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
            lastEventBeforeSnap: undefined,
            recentWheelEvents: [],
            enable: Mousewheel.enable,
            disable: Mousewheel.disable,
            handle: Mousewheel.handle,
            handleMouseEnter: Mousewheel.handleMouseEnter,
            handleMouseLeave: Mousewheel.handleMouseLeave,
            animateSlider: Mousewheel.animateSlider,
            releaseScroll: Mousewheel.releaseScroll
          }
        });
      },
      on: {
        init: function init(swiper) {
          if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
            swiper.mousewheel.disable();
          }

          if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
        },
        destroy: function destroy(swiper) {
          if (swiper.params.cssMode) {
            swiper.mousewheel.enable();
          }

          if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/navigation/navigation.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/navigation/navigation.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsNavigationNavigationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Navigation = {
      toggleEl: function toggleEl($el, disabled) {
        $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
        if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
      },
      update: function update() {
        // Update Navigation Buttons
        var swiper = this;
        var params = swiper.params.navigation;
        var toggleEl = swiper.navigation.toggleEl;
        if (swiper.params.loop) return;
        var _swiper$navigation = swiper.navigation,
            $nextEl = _swiper$navigation.$nextEl,
            $prevEl = _swiper$navigation.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            toggleEl($prevEl, true);
          } else {
            toggleEl($prevEl, false);
          }

          if (swiper.params.watchOverflow && swiper.enabled) {
            $prevEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            toggleEl($nextEl, true);
          } else {
            toggleEl($nextEl, false);
          }

          if (swiper.params.watchOverflow && swiper.enabled) {
            $nextEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }
      },
      onPrevClick: function onPrevClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.navigation;
        swiper.params.navigation = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["createElementIfNotDefined"])(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        var $nextEl;
        var $prevEl;

        if (params.nextEl) {
          $nextEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.nextEl);

          if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
            $nextEl = swiper.$el.find(params.nextEl);
          }
        }

        if (params.prevEl) {
          $prevEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.prevEl);

          if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
            $prevEl = swiper.$el.find(params.prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', swiper.navigation.onNextClick);
        }

        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', swiper.navigation.onPrevClick);
        }

        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.navigation, {
          $nextEl: $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl: $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });

        if (!swiper.enabled) {
          if ($nextEl) $nextEl.addClass(params.lockClass);
          if ($prevEl) $prevEl.addClass(params.lockClass);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var _swiper$navigation2 = swiper.navigation,
            $nextEl = _swiper$navigation2.$nextEl,
            $prevEl = _swiper$navigation2.$prevEl;

        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', swiper.navigation.onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }

        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', swiper.navigation.onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'navigation',
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          navigation: _extends({}, Navigation)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.navigation.init();
          swiper.navigation.update();
        },
        toEdge: function toEdge(swiper) {
          swiper.navigation.update();
        },
        fromEdge: function fromEdge(swiper) {
          swiper.navigation.update();
        },
        destroy: function destroy(swiper) {
          swiper.navigation.destroy();
        },
        'enable disable': function enableDisable(swiper) {
          var _swiper$navigation3 = swiper.navigation,
              $nextEl = _swiper$navigation3.$nextEl,
              $prevEl = _swiper$navigation3.$prevEl;

          if ($nextEl) {
            $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
          }

          if ($prevEl) {
            $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
          }
        },
        click: function click(swiper, e) {
          var _swiper$navigation4 = swiper.navigation,
              $nextEl = _swiper$navigation4.$nextEl,
              $prevEl = _swiper$navigation4.$prevEl;
          var targetEl = e.target;

          if (swiper.params.navigation.hideOnClick && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).is($prevEl) && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            var isHidden;

            if ($nextEl) {
              isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            } else if ($prevEl) {
              isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            }

            if (isHidden === true) {
              swiper.emit('navigationShow');
            } else {
              swiper.emit('navigationHide');
            }

            if ($nextEl) {
              $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            }

            if ($prevEl) {
              $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/pagination/pagination.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/swiper/esm/components/pagination/pagination.js ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsPaginationPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Pagination = {
      update: function update() {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el; // Current/Total

        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }

          if (current > total - 1) current -= total;
          if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types


        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          var bullets = swiper.pagination.bullets;
          var firstIndex;
          var lastIndex;
          var midIndex;

          if (params.dynamicBullets) {
            swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

              if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (swiper.pagination.dynamicBulletIndex < 0) {
                swiper.pagination.dynamicBulletIndex = 0;
              }
            }

            firstIndex = current - swiper.pagination.dynamicBulletIndex;
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }

          bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

          if ($el.length > 1) {
            bullets.each(function (bullet) {
              var $bullet = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
              var bulletIndex = $bullet.index();

              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }

              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(params.bulletActiveClass + "-main");
                }

                if (bulletIndex === firstIndex) {
                  $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                }

                if (bulletIndex === lastIndex) {
                  $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              }
            });
          } else {
            var $bullet = bullets.eq(current);
            var bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);

            if (params.dynamicBullets) {
              var $firstDisplayedBullet = bullets.eq(firstIndex);
              var $lastDisplayedBullet = bullets.eq(lastIndex);

              for (var i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(params.bulletActiveClass + "-main");
              }

              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                  for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                    bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                  }

                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                } else {
                  $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                  $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              } else {
                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          }

          if (params.dynamicBullets) {
            var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
            var offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
          }
        }

        if (params.type === 'fraction') {
          $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.currentClass)).text(params.formatFractionCurrent(current + 1));
          $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.totalClass)).text(params.formatFractionTotal(total));
        }

        if (params.type === 'progressbar') {
          var progressbarDirection;

          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }

          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;

          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }

          $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
        }

        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          swiper.emit('paginationRender', $el[0]);
        } else {
          swiper.emit('paginationUpdate', $el[0]);
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      },
      render: function render() {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        var paginationHTML = '';

        if (params.type === 'bullets') {
          var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

          if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }

          for (var i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
            }
          }

          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.bulletClass));
        }

        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
          }

          $el.html(paginationHTML);
        }

        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
          }

          $el.html(paginationHTML);
        }

        if (params.type !== 'custom') {
          swiper.emit('paginationRender', swiper.pagination.$el[0]);
        }
      },
      init: function init() {
        var swiper = this;
        swiper.params.pagination = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["createElementIfNotDefined"])(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
          el: 'swiper-pagination'
        });
        var params = swiper.params.pagination;
        if (!params.el) return;
        var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
        if ($el.length === 0) return;

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper.$el.find(params.el);
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass("" + params.modifierClass + params.type + "-dynamic");
          swiper.pagination.dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.bulletClass), function onClick(e) {
            e.preventDefault();
            var index = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          });
        }

        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.pagination, {
          $el: $el,
          el: $el[0]
        });

        if (!swiper.enabled) {
          $el.addClass(params.lockClass);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

        if (params.clickable) {
          $el.off('click', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.bulletClass));
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'pagination',
      params: {
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(number) {
            return number;
          },
          formatFractionTotal: function formatFractionTotal(number) {
            return number;
          },
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          modifierClass: 'swiper-pagination-',
          // NEW
          currentClass: 'swiper-pagination-current',
          totalClass: 'swiper-pagination-total',
          hiddenClass: 'swiper-pagination-hidden',
          progressbarFillClass: 'swiper-pagination-progressbar-fill',
          progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
          clickableClass: 'swiper-pagination-clickable',
          // NEW
          lockClass: 'swiper-pagination-lock'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          pagination: _extends({
            dynamicBulletIndex: 0
          }, Pagination)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        },
        activeIndexChange: function activeIndexChange(swiper) {
          if (swiper.params.loop) {
            swiper.pagination.update();
          } else if (typeof swiper.snapIndex === 'undefined') {
            swiper.pagination.update();
          }
        },
        snapIndexChange: function snapIndexChange(swiper) {
          if (!swiper.params.loop) {
            swiper.pagination.update();
          }
        },
        slidesLengthChange: function slidesLengthChange(swiper) {
          if (swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        snapGridLengthChange: function snapGridLengthChange(swiper) {
          if (!swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        destroy: function destroy(swiper) {
          swiper.pagination.destroy();
        },
        'enable disable': function enableDisable(swiper) {
          var $el = swiper.pagination.$el;

          if ($el) {
            $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
          }
        },
        click: function click(swiper, e) {
          var targetEl = e.target;

          if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

            if (isHidden === true) {
              swiper.emit('paginationShow');
            } else {
              swiper.emit('paginationHide');
            }

            swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/parallax/parallax.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/swiper/esm/components/parallax/parallax.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsParallaxParallaxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Parallax = {
      setTransform: function setTransform(el, progress) {
        var swiper = this;
        var rtl = swiper.rtl;
        var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
        var rtlFactor = rtl ? -1 : 1;
        var p = $el.attr('data-swiper-parallax') || '0';
        var x = $el.attr('data-swiper-parallax-x');
        var y = $el.attr('data-swiper-parallax-y');
        var scale = $el.attr('data-swiper-parallax-scale');
        var opacity = $el.attr('data-swiper-parallax-opacity');

        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }

        if (x.indexOf('%') >= 0) {
          x = parseInt(x, 10) * progress * rtlFactor + "%";
        } else {
          x = x * progress * rtlFactor + "px";
        }

        if (y.indexOf('%') >= 0) {
          y = parseInt(y, 10) * progress + "%";
        } else {
          y = y * progress + "px";
        }

        if (typeof opacity !== 'undefined' && opacity !== null) {
          var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }

        if (typeof scale === 'undefined' || scale === null) {
          $el.transform("translate3d(" + x + ", " + y + ", 0px)");
        } else {
          var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el,
            slides = swiper.slides,
            progress = swiper.progress,
            snapGrid = swiper.snapGrid;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
          swiper.parallax.setTransform(el, progress);
        });
        slides.each(function (slideEl, slideIndex) {
          var slideProgress = slideEl.progress;

          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }

          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
        });
      },
      setTransition: function setTransition(duration) {
        if (duration === void 0) {
          duration = this.params.speed;
        }

        var swiper = this;
        var $el = swiper.$el;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
          var $parallaxEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'parallax',
      params: {
        parallax: {
          enabled: false
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          parallax: _extends({}, Parallax)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (!swiper.params.parallax.enabled) return;
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        init: function init(swiper) {
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTranslate();
        },
        setTranslate: function setTranslate(swiper) {
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTransition(duration);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/scrollbar/scrollbar.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/swiper/esm/components/scrollbar/scrollbar.js ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsScrollbarScrollbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Scrollbar = {
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar,
            rtl = swiper.rtlTranslate,
            progress = swiper.progress;
        var dragSize = scrollbar.dragSize,
            trackSize = scrollbar.trackSize,
            $dragEl = scrollbar.$dragEl,
            $el = scrollbar.$el;
        var params = swiper.params.scrollbar;
        var newSize = dragSize;
        var newPos = (trackSize - dragSize) * progress;

        if (rtl) {
          newPos = -newPos;

          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }

        if (swiper.isHorizontal()) {
          $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
          $dragEl[0].style.width = newSize + "px";
        } else {
          $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
          $dragEl[0].style.height = newSize + "px";
        }

        if (params.hide) {
          clearTimeout(swiper.scrollbar.timeout);
          $el[0].style.opacity = 1;
          swiper.scrollbar.timeout = setTimeout(function () {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
      },
      updateSize: function updateSize() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar;
        var $dragEl = scrollbar.$dragEl,
            $el = scrollbar.$el;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        var divider = swiper.size / swiper.virtualSize;
        var moveDivider = divider * (trackSize / swiper.size);
        var dragSize;

        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }

        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = dragSize + "px";
        } else {
          $dragEl[0].style.height = dragSize + "px";
        }

        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }

        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }

        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
          trackSize: trackSize,
          divider: divider,
          moveDivider: moveDivider,
          dragSize: dragSize
        });

        if (swiper.params.watchOverflow && swiper.enabled) {
          scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function getPointerPosition(e) {
        var swiper = this;

        if (swiper.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }

        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar,
            rtl = swiper.rtlTranslate;
        var $el = scrollbar.$el,
            dragSize = scrollbar.dragSize,
            trackSize = scrollbar.trackSize,
            dragStartPos = scrollbar.dragStartPos;
        var positionRatio;
        positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);

        if (rtl) {
          positionRatio = 1 - positionRatio;
        }

        var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el,
            $dragEl = scrollbar.$dragEl;
        swiper.scrollbar.isTouched = true;
        swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        scrollbar.setDragPosition(e);
        clearTimeout(swiper.scrollbar.dragTimeout);
        $el.transition(0);

        if (params.hide) {
          $el.css('opacity', 1);
        }

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }

        swiper.emit('scrollbarDragStart', e);
      },
      onDragMove: function onDragMove(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el,
            $dragEl = scrollbar.$dragEl;
        if (!swiper.scrollbar.isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        scrollbar.setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        swiper.emit('scrollbarDragMove', e);
      },
      onDragEnd: function onDragEnd(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        if (!swiper.scrollbar.isTouched) return;
        swiper.scrollbar.isTouched = false;

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }

        if (params.hide) {
          clearTimeout(swiper.scrollbar.dragTimeout);
          swiper.scrollbar.dragTimeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }

        swiper.emit('scrollbarDragEnd', e);

        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      },
      enableDraggable: function enableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var scrollbar = swiper.scrollbar,
            touchEventsTouch = swiper.touchEventsTouch,
            touchEventsDesktop = swiper.touchEventsDesktop,
            params = swiper.params,
            support = swiper.support;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (!target) return;

        if (!support.touch) {
          target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      disableDraggable: function disableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var scrollbar = swiper.scrollbar,
            touchEventsTouch = swiper.touchEventsTouch,
            touchEventsDesktop = swiper.touchEventsDesktop,
            params = swiper.params,
            support = swiper.support;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (!target) return;

        if (!support.touch) {
          target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      init: function init() {
        var swiper = this;
        var scrollbar = swiper.scrollbar,
            $swiperEl = swiper.$el;
        swiper.params.scrollbar = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["createElementIfNotDefined"])($swiperEl, swiper.params.scrollbar, swiper.params.createElements, {
          el: 'swiper-scrollbar'
        });
        var params = swiper.params.scrollbar;
        if (!params.el) return;
        var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }

        var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

        if ($dragEl.length === 0) {
          $dragEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
          $el.append($dragEl);
        }

        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
          $el: $el,
          el: $el[0],
          $dragEl: $dragEl,
          dragEl: $dragEl[0]
        });

        if (params.draggable) {
          scrollbar.enableDraggable();
        }

        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.disableDraggable();
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'scrollbar',
      params: {
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
          scrollbar: _extends({
            isTouched: false,
            timeout: null,
            dragTimeout: null
          }, Scrollbar)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.scrollbar.init();
          swiper.scrollbar.updateSize();
          swiper.scrollbar.setTranslate();
        },
        update: function update(swiper) {
          swiper.scrollbar.updateSize();
        },
        resize: function resize(swiper) {
          swiper.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate(swiper) {
          swiper.scrollbar.updateSize();
        },
        setTranslate: function setTranslate(swiper) {
          swiper.scrollbar.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          swiper.scrollbar.setTransition(duration);
        },
        'enable disable': function enableDisable(swiper) {
          var $el = swiper.scrollbar.$el;

          if ($el) {
            $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
          }
        },
        destroy: function destroy(swiper) {
          swiper.scrollbar.destroy();
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/thumbs/thumbs.js":
  /*!*************************************************************!*\
    !*** ./node_modules/swiper/esm/components/thumbs/thumbs.js ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsThumbsThumbsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Thumbs = {
      init: function init() {
        var swiper = this;
        var thumbsParams = swiper.params.thumbs;
        if (swiper.thumbs.initialized) return false;
        swiper.thumbs.initialized = true;
        var SwiperClass = swiper.constructor;

        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(thumbsParams.swiper)) {
          swiper.thumbs.swiper = new SwiperClass(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false
          }));
          swiper.thumbs.swiperCreated = true;
        }

        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
        return true;
      },
      onThumbClick: function onThumbClick() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var clickedIndex = thumbsSwiper.clickedIndex;
        var clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        var slideToIndex;

        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }

        if (swiper.params.loop) {
          var currentIndex = swiper.activeIndex;

          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }

          var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
          var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
          if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
        }

        swiper.slideTo(slideToIndex);
      },
      update: function update(initial) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          var currentThumbsIndex = thumbsSwiper.activeIndex;
          var newThumbsIndex;
          var direction;

          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line

              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to


            var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
            var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();

            if (typeof prevThumbsIndex === 'undefined') {
              newThumbsIndex = nextThumbsIndex;
            } else if (typeof nextThumbsIndex === 'undefined') {
              newThumbsIndex = prevThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = nextThumbsIndex;
            } else {
              newThumbsIndex = prevThumbsIndex;
            }

            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }

          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }

          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
            }

            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        } // Activate thumbs


        var thumbsToActivate = 1;
        var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }

        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }

        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);

        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (var i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
          }
        } else {
          for (var _i = 0; _i < thumbsToActivate; _i += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
          }
        }
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'thumbs',
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-container-thumbs'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
          thumbs: _extends({
            swiper: null,
            initialized: false
          }, Thumbs)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          var thumbs = swiper.params.thumbs;
          if (!thumbs || !thumbs.swiper) return;
          swiper.thumbs.init();
          swiper.thumbs.update(true);
        },
        slideChange: function slideChange(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        update: function update(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        resize: function resize(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        observerUpdate: function observerUpdate(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        setTransition: function setTransition(swiper, duration) {
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) return;
          thumbsSwiper.setTransition(duration);
        },
        beforeDestroy: function beforeDestroy(swiper) {
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) return;

          if (swiper.thumbs.swiperCreated && thumbsSwiper) {
            thumbsSwiper.destroy();
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/virtual/virtual.js":
  /*!***************************************************************!*\
    !*** ./node_modules/swiper/esm/components/virtual/virtual.js ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsVirtualVirtualJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Virtual = {
      update: function update(force) {
        var swiper = this;
        var _swiper$params = swiper.params,
            slidesPerView = _swiper$params.slidesPerView,
            slidesPerGroup = _swiper$params.slidesPerGroup,
            centeredSlides = _swiper$params.centeredSlides;
        var _swiper$params$virtua = swiper.params.virtual,
            addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
            addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
        var _swiper$virtual = swiper.virtual,
            previousFrom = _swiper$virtual.from,
            previousTo = _swiper$virtual.to,
            slides = _swiper$virtual.slides,
            previousSlidesGrid = _swiper$virtual.slidesGrid,
            renderSlide = _swiper$virtual.renderSlide,
            previousOffset = _swiper$virtual.offset;
        swiper.updateActiveIndex();
        var activeIndex = swiper.activeIndex || 0;
        var offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        var slidesAfter;
        var slidesBefore;

        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
          slidesBefore = slidesPerGroup + addSlidesBefore;
        }

        var from = Math.max((activeIndex || 0) - slidesBefore, 0);
        var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.virtual, {
          from: from,
          to: to,
          offset: offset,
          slidesGrid: swiper.slidesGrid
        });

        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();

          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        }

        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, offset + "px");
          }

          swiper.updateProgress();
          return;
        }

        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset: offset,
            from: from,
            to: to,
            slides: function getSlides() {
              var slidesToRender = [];

              for (var i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }

              return slidesToRender;
            }()
          });

          if (swiper.params.virtual.renderExternalUpdate) {
            onRendered();
          }

          return;
        }

        var prependIndexes = [];
        var appendIndexes = [];

        if (force) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
        } else {
          for (var i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
            }
          }
        }

        for (var _i = 0; _i < slides.length; _i += 1) {
          if (_i >= from && _i <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(_i);
            } else {
              if (_i > previousTo) appendIndexes.push(_i);
              if (_i < previousFrom) prependIndexes.push(_i);
            }
          }
        }

        appendIndexes.forEach(function (index) {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort(function (a, b) {
          return b - a;
        }).forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
        onRendered();
      },
      renderSlide: function renderSlide(slide, index) {
        var swiper = this;
        var params = swiper.params.virtual;

        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }

        var $slideEl = params.renderSlide ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
      },
      appendSlide: function appendSlide(slides) {
        var swiper = this;

        if (typeof slides === 'object' && 'length' in slides) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.push(slides[i]);
          }
        } else {
          swiper.virtual.slides.push(slides);
        }

        swiper.virtual.update(true);
      },
      prependSlide: function prependSlide(slides) {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var newActiveIndex = activeIndex + 1;
        var numberOfNewSlides = 1;

        if (Array.isArray(slides)) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
          }

          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }

        if (swiper.params.virtual.cache) {
          var cache = swiper.virtual.cache;
          var newCache = {};
          Object.keys(cache).forEach(function (cachedIndex) {
            var $cachedEl = cache[cachedIndex];
            var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
            }

            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }

        swiper.virtual.update(true);
        swiper.slideTo(newActiveIndex, 0);
      },
      removeSlide: function removeSlide(slidesIndexes) {
        var swiper = this;
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        var activeIndex = swiper.activeIndex;

        if (Array.isArray(slidesIndexes)) {
          for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);

            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }

            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }

          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }

        swiper.virtual.update(true);
        swiper.slideTo(activeIndex, 0);
      },
      removeAllSlides: function removeAllSlides() {
        var swiper = this;
        swiper.virtual.slides = [];

        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }

        swiper.virtual.update(true);
        swiper.slideTo(0, 0);
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: true,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          virtual: _extends({}, Virtual, {
            slides: swiper.params.virtual.slides,
            cache: {}
          })
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (!swiper.params.virtual.enabled) return;
          swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
          var overwriteParams = {
            watchSlidesProgress: true
          };
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);

          if (!swiper.params.initialSlide) {
            swiper.virtual.update();
          }
        },
        setTranslate: function setTranslate(swiper) {
          if (!swiper.params.virtual.enabled) return;
          swiper.virtual.update();
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/components/zoom/zoom.js":
  /*!*********************************************************!*\
    !*** ./node_modules/swiper/esm/components/zoom/zoom.js ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmComponentsZoomZoomJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/dom */
    "./node_modules/swiper/esm/utils/dom.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Zoom = {
      // Calc Scale From Multi-touches
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var x1 = e.targetTouches[0].pageX;
        var y1 = e.targetTouches[0].pageY;
        var x2 = e.targetTouches[1].pageX;
        var y2 = e.targetTouches[1].pageY;
        var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
      },
      // Events
      onGestureStart: function onGestureStart(e) {
        var swiper = this;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;

        if (!support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }

          zoom.fakeGestureTouched = true;
          gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
        }

        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest("." + swiper.params.slideClass);
          if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }

        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }

        swiper.zoom.isScaling = true;
      },
      onGestureChange: function onGestureChange(e) {
        var swiper = this;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (!support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }

          zoom.fakeGestureMoved = true;
          gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          if (e.type === 'gesturechange') zoom.onGestureStart(e);
          return;
        }

        if (support.gestures) {
          zoom.scale = e.scale * zoom.currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
        }

        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
        }

        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
        }

        gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      },
      onGestureEnd: function onGestureEnd(e) {
        var swiper = this;
        var device = swiper.device;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (!support.gestures) {
          if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
            return;
          }

          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
            return;
          }

          zoom.fakeGestureTouched = false;
          zoom.fakeGestureMoved = false;
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        zoom.currentScale = zoom.scale;
        zoom.isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
      },
      onTouchStart: function onTouchStart(e) {
        var swiper = this;
        var device = swiper.device;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      },
      onTouchMove: function onTouchMove(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image,
            velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;

        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTranslate"])(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTranslate"])(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag


        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (!image.isMoved && !zoom.isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }

          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }

        if (e.cancelable) {
          e.preventDefault();
        }

        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
        }

        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
        }

        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
        }

        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
        } // Velocity


        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
      },
      onTouchEnd: function onTouchEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image,
            velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }

        image.isTouched = false;
        image.isMoved = false;
        var momentumDurationX = 300;
        var momentumDurationY = 300;
        var momentumDistanceX = velocity.x * momentumDurationX;
        var newPositionX = image.currentX + momentumDistanceX;
        var momentumDistanceY = velocity.y * momentumDurationY;
        var newPositionY = image.currentY + momentumDistanceY; // Fix duration

        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag

        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
      },
      onTransitionEnd: function onTransitionEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }

          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }

          zoom.scale = 1;
          zoom.currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      },
      // Toggle Zoom
      toggle: function toggle(e) {
        var swiper = this;
        var zoom = swiper.zoom;

        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoom.out();
        } else {
          // Zoom In
          zoom["in"](e);
        }
      },
      "in": function _in(e) {
        var swiper = this;
        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture,
            image = zoom.image;

        if (!gesture.$slideEl) {
          if (e && e.target) {
            gesture.$slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest("." + swiper.params.slideClass);
          }

          if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
              gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
            } else {
              gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
          }

          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        gesture.$slideEl.addClass("" + params.zoomedSlideClass);
        var touchX;
        var touchY;
        var offsetX;
        var offsetY;
        var diffX;
        var diffY;
        var translateX;
        var translateY;
        var imageWidth;
        var imageHeight;
        var scaledWidth;
        var scaledHeight;
        var translateMinX;
        var translateMinY;
        var translateMaxX;
        var translateMaxY;
        var slideWidth;
        var slideHeight;

        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }

        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left + window.scrollX;
          offsetY = gesture.$slideEl.offset().top + window.scrollY;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;

          if (translateX < translateMinX) {
            translateX = translateMinX;
          }

          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }

          if (translateY < translateMinY) {
            translateY = translateMinY;
          }

          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }

        gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      },
      out: function out() {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;

        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }

          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
        gesture.$slideEl = undefined;
      },
      toggleGestures: function toggleGestures(method) {
        var swiper = this;
        var zoom = swiper.zoom;
        var selector = zoom.slideSelector,
            passive = zoom.passiveListener;
        swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
        swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
        swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
      },
      enableGestures: function enableGestures() {
        if (this.zoom.gesturesEnabled) return;
        this.zoom.gesturesEnabled = true;
        this.zoom.toggleGestures('on');
      },
      disableGestures: function disableGestures() {
        if (!this.zoom.gesturesEnabled) return;
        this.zoom.gesturesEnabled = false;
        this.zoom.toggleGestures('off');
      },
      // Attach/Detach Events
      enable: function enable() {
        var swiper = this;
        var support = swiper.support;
        var zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass;
        swiper.zoom.passiveListener = passiveListener;
        swiper.zoom.slideSelector = slideSelector; // Scale image

        if (support.gestures) {
          swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
      },
      disable: function disable() {
        var swiper = this;
        var zoom = swiper.zoom;
        if (!zoom.enabled) return;
        var support = swiper.support;
        swiper.zoom.enabled = false;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass; // Scale image

        if (support.gestures) {
          swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'zoom',
      params: {
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
          zoom: _extends({
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3
            },
            image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
            }
          }, Zoom)
        });
        var scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
          get: function get() {
            return scale;
          },
          set: function set(value) {
            if (scale !== value) {
              var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
              var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
              swiper.emit('zoomChange', value, imageEl, slideEl);
            }

            scale = value;
          }
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.zoom.enabled) {
            swiper.zoom.enable();
          }
        },
        destroy: function destroy(swiper) {
          swiper.zoom.disable();
        },
        touchStart: function touchStart(swiper, e) {
          if (!swiper.zoom.enabled) return;
          swiper.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(swiper, e) {
          if (!swiper.zoom.enabled) return;
          swiper.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(swiper, e) {
          if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
            swiper.zoom.toggle(e);
          }
        },
        transitionEnd: function transitionEnd(swiper) {
          if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
            swiper.zoom.onTransitionEnd();
          }
        },
        slideChange: function slideChange(swiper) {
          if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
            swiper.zoom.onTransitionEnd();
          }
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/modules/observer/observer.js":
  /*!**************************************************************!*\
    !*** ./node_modules/swiper/esm/modules/observer/observer.js ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmModulesObserverObserverJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var Observer = {
      attach: function attach(target, options) {
        if (options === void 0) {
          options = {};
        }

        var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
        var swiper = this;
        var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        var observer = new ObserverFunc(function (mutations) {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            swiper.emit('observerUpdate', mutations[0]);
            return;
          }

          var observerUpdate = function observerUpdate() {
            swiper.emit('observerUpdate', mutations[0]);
          };

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        swiper.observer.observers.push(observer);
      },
      init: function init() {
        var swiper = this;
        if (!swiper.support.observer || !swiper.params.observer) return;

        if (swiper.params.observeParents) {
          var containerParents = swiper.$el.parents();

          for (var i = 0; i < containerParents.length; i += 1) {
            swiper.observer.attach(containerParents[i]);
          }
        } // Observe container


        swiper.observer.attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper

        swiper.observer.attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.observers.forEach(function (observer) {
          observer.disconnect();
        });
        swiper.observer.observers = [];
      }
    };
    /* harmony default export */

    __webpack_exports__["default"] = {
      name: 'observer',
      params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      },
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
          observer: _extends({}, Observer, {
            observers: []
          })
        });
      },
      on: {
        init: function init(swiper) {
          swiper.observer.init();
        },
        destroy: function destroy(swiper) {
          swiper.observer.destroy();
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/modules/resize/resize.js":
  /*!**********************************************************!*\
    !*** ./node_modules/swiper/esm/modules/resize/resize.js ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmModulesResizeResizeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/swiper/esm/utils/utils.js");

    var supportsResizeObserver = function supportsResizeObserver() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      return typeof window.ResizeObserver !== 'undefined';
    };
    /* harmony default export */


    __webpack_exports__["default"] = {
      name: 'resize',
      create: function create() {
        var swiper = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
          resize: {
            observer: null,
            createObserver: function createObserver() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.resize.observer = new ResizeObserver(function (entries) {
                var width = swiper.width,
                    height = swiper.height;
                var newWidth = width;
                var newHeight = height;
                entries.forEach(function (_ref) {
                  var contentBoxSize = _ref.contentBoxSize,
                      contentRect = _ref.contentRect,
                      target = _ref.target;
                  if (target && target !== swiper.el) return;
                  newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                  newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });

                if (newWidth !== width || newHeight !== height) {
                  swiper.resize.resizeHandler();
                }
              });
              swiper.resize.observer.observe(swiper.el);
            },
            removeObserver: function removeObserver() {
              if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
                swiper.resize.observer.unobserve(swiper.el);
                swiper.resize.observer = null;
              }
            },
            resizeHandler: function resizeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('beforeResize');
              swiper.emit('resize');
            },
            orientationChangeHandler: function orientationChangeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('orientationchange');
            }
          }
        });
      },
      on: {
        init: function init(swiper) {
          var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

          if (swiper.params.resizeObserver && supportsResizeObserver()) {
            swiper.resize.createObserver();
            return;
          } // Emit resize


          window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

          window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function destroy(swiper) {
          var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
          swiper.resize.removeObserver();
          window.removeEventListener('resize', swiper.resize.resizeHandler);
          window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        }
      }
    };
    /***/
  },

  /***/
  "./node_modules/swiper/esm/utils/dom.js":
  /*!**********************************************!*\
    !*** ./node_modules/swiper/esm/utils/dom.js ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSwiperEsmUtilsDomJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dom7 */
    "./node_modules/dom7/dom7.esm.js");

    var Methods = {
      addClass: dom7__WEBPACK_IMPORTED_MODULE_0__["addClass"],
      removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
      hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
      toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
      attr: dom7__WEBPACK_IMPORTED_MODULE_0__["attr"],
      removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
      transform: dom7__WEBPACK_IMPORTED_MODULE_0__["transform"],
      transition: dom7__WEBPACK_IMPORTED_MODULE_0__["transition"],
      on: dom7__WEBPACK_IMPORTED_MODULE_0__["on"],
      off: dom7__WEBPACK_IMPORTED_MODULE_0__["off"],
      trigger: dom7__WEBPACK_IMPORTED_MODULE_0__["trigger"],
      transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
      outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
      outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
      styles: dom7__WEBPACK_IMPORTED_MODULE_0__["styles"],
      offset: dom7__WEBPACK_IMPORTED_MODULE_0__["offset"],
      css: dom7__WEBPACK_IMPORTED_MODULE_0__["css"],
      each: dom7__WEBPACK_IMPORTED_MODULE_0__["each"],
      html: dom7__WEBPACK_IMPORTED_MODULE_0__["html"],
      text: dom7__WEBPACK_IMPORTED_MODULE_0__["text"],
      is: dom7__WEBPACK_IMPORTED_MODULE_0__["is"],
      index: dom7__WEBPACK_IMPORTED_MODULE_0__["index"],
      eq: dom7__WEBPACK_IMPORTED_MODULE_0__["eq"],
      append: dom7__WEBPACK_IMPORTED_MODULE_0__["append"],
      prepend: dom7__WEBPACK_IMPORTED_MODULE_0__["prepend"],
      next: dom7__WEBPACK_IMPORTED_MODULE_0__["next"],
      nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
      prev: dom7__WEBPACK_IMPORTED_MODULE_0__["prev"],
      prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
      parent: dom7__WEBPACK_IMPORTED_MODULE_0__["parent"],
      parents: dom7__WEBPACK_IMPORTED_MODULE_0__["parents"],
      closest: dom7__WEBPACK_IMPORTED_MODULE_0__["closest"],
      find: dom7__WEBPACK_IMPORTED_MODULE_0__["find"],
      children: dom7__WEBPACK_IMPORTED_MODULE_0__["children"],
      filter: dom7__WEBPACK_IMPORTED_MODULE_0__["filter"],
      remove: dom7__WEBPACK_IMPORTED_MODULE_0__["remove"]
    };
    Object.keys(Methods).forEach(function (methodName) {
      Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__["$"].fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });
    /* harmony default export */

    __webpack_exports__["default"] = dom7__WEBPACK_IMPORTED_MODULE_0__["$"];
    /***/
  },

  /***/
  "./node_modules/swiper/esm/utils/get-browser.js":
  /*!******************************************************!*\
    !*** ./node_modules/swiper/esm/utils/get-browser.js ***!
    \******************************************************/

  /*! exports provided: getBrowser */

  /***/
  function node_modulesSwiperEsmUtilsGetBrowserJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBrowser", function () {
      return getBrowser;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");

    var browser;

    function calcBrowser() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

      function isSafari() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isEdge: !!window.navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }

    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }

      return browser;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/utils/get-device.js":
  /*!*****************************************************!*\
    !*** ./node_modules/swiper/esm/utils/get-device.js ***!
    \*****************************************************/

  /*! exports provided: getDevice */

  /***/
  function node_modulesSwiperEsmUtilsGetDeviceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDevice", function () {
      return getDevice;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");
    /* harmony import */


    var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./get-support */
    "./node_modules/swiper/esm/utils/get-support.js");

    var device;

    function calcDevice(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          userAgent = _ref.userAgent;

      var support = Object(_get_support__WEBPACK_IMPORTED_MODULE_1__["getSupport"])();
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var platform = window.navigator.platform;
      var ua = userAgent || window.navigator.userAgent;
      var device = {
        ios: false,
        android: false
      };
      var screenWidth = window.screen.width;
      var screenHeight = window.screen.height;
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      var windows = platform === 'Win32';
      var macos = platform === 'MacIntel'; // iPadOs 13 fix

      var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

      if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android


      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object


      return device;
    }

    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }

      if (!device) {
        device = calcDevice(overrides);
      }

      return device;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/utils/get-support.js":
  /*!******************************************************!*\
    !*** ./node_modules/swiper/esm/utils/get-support.js ***!
    \******************************************************/

  /*! exports provided: getSupport */

  /***/
  function node_modulesSwiperEsmUtilsGetSupportJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSupport", function () {
      return getSupport;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");

    var support;

    function calcSupport() {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      return {
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
        observer: function checkObserver() {
          return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
        }(),
        passiveListener: function checkPassiveListener() {
          var supportsPassive = false;

          try {
            var opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get: function get() {
                supportsPassive = true;
              }
            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }

    function getSupport() {
      if (!support) {
        support = calcSupport();
      }

      return support;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/esm/utils/utils.js":
  /*!************************************************!*\
    !*** ./node_modules/swiper/esm/utils/utils.js ***!
    \************************************************/

  /*! exports provided: deleteProps, nextTick, now, getTranslate, isObject, extend, bindModuleMethods, getComputedStyle, classesToSelector, createElementIfNotDefined */

  /***/
  function node_modulesSwiperEsmUtilsUtilsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteProps", function () {
      return deleteProps;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nextTick", function () {
      return nextTick;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "now", function () {
      return now;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTranslate", function () {
      return getTranslate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isObject", function () {
      return isObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "extend", function () {
      return extend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bindModuleMethods", function () {
      return bindModuleMethods;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getComputedStyle", function () {
      return getComputedStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "classesToSelector", function () {
      return classesToSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createElementIfNotDefined", function () {
      return createElementIfNotDefined;
    });
    /* harmony import */


    var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ssr-window */
    "./node_modules/ssr-window/ssr-window.esm.js");

    function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }

        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }

    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }

      return setTimeout(callback, delay);
    }

    function now() {
      return Date.now();
    }

    function getComputedStyle(el) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var style;

      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }

      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }

      if (!style) {
        style = el.style;
      }

      return style;
    }

    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }

      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      var matrix;
      var curTransform;
      var transformMatrix;
      var curStyle = getComputedStyle(el, null);

      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) {
            return a.replace(',', '.');
          }).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
          else curTransform = parseFloat(matrix[4]);
      }

      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
          else curTransform = parseFloat(matrix[5]);
      }

      return curTransform || 0;
    }

    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }

      return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend() {
      var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
      var noExtend = ['__proto__', 'constructor', 'prototype'];

      for (var i = 1; i < arguments.length; i += 1) {
        var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
            return noExtend.indexOf(key) < 0;
          });

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};

                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }

      return to;
    }

    function bindModuleMethods(instance, obj) {
      Object.keys(obj).forEach(function (key) {
        if (isObject(obj[key])) {
          Object.keys(obj[key]).forEach(function (subKey) {
            if (typeof obj[key][subKey] === 'function') {
              obj[key][subKey] = obj[key][subKey].bind(instance);
            }
          });
        }

        instance[key] = obj[key];
      });
    }

    function classesToSelector(classes) {
      if (classes === void 0) {
        classes = '';
      }

      return "." + classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
      .replace(/ /g, '.');
    }

    function createElementIfNotDefined($container, params, createElements, checkProps) {
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

      if (createElements) {
        Object.keys(checkProps).forEach(function (key) {
          if (!params[key] && params.auto === true) {
            var element = document.createElement('div');
            element.className = checkProps[key];
            $container.append(element);
            params[key] = element;
          }
        });
      }

      return params;
    }
    /***/

  },

  /***/
  "./node_modules/swiper/swiper.esm.js":
  /*!*******************************************!*\
    !*** ./node_modules/swiper/swiper.esm.js ***!
    \*******************************************/

  /*! exports provided: Swiper, default, Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs */

  /***/
  function node_modulesSwiperSwiperEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./esm/components/core/core-class */
    "./node_modules/swiper/esm/components/core/core-class.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Swiper", function () {
      return _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./esm/components/virtual/virtual */
    "./node_modules/swiper/esm/components/virtual/virtual.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Virtual", function () {
      return _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./esm/components/keyboard/keyboard */
    "./node_modules/swiper/esm/components/keyboard/keyboard.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Keyboard", function () {
      return _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__["default"];
    });
    /* harmony import */


    var _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./esm/components/mousewheel/mousewheel */
    "./node_modules/swiper/esm/components/mousewheel/mousewheel.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Mousewheel", function () {
      return _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /* harmony import */


    var _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./esm/components/navigation/navigation */
    "./node_modules/swiper/esm/components/navigation/navigation.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Navigation", function () {
      return _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["default"];
    });
    /* harmony import */


    var _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./esm/components/pagination/pagination */
    "./node_modules/swiper/esm/components/pagination/pagination.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__["default"];
    });
    /* harmony import */


    var _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./esm/components/scrollbar/scrollbar */
    "./node_modules/swiper/esm/components/scrollbar/scrollbar.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Scrollbar", function () {
      return _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"];
    });
    /* harmony import */


    var _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./esm/components/parallax/parallax */
    "./node_modules/swiper/esm/components/parallax/parallax.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Parallax", function () {
      return _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__["default"];
    });
    /* harmony import */


    var _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./esm/components/zoom/zoom */
    "./node_modules/swiper/esm/components/zoom/zoom.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Zoom", function () {
      return _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__["default"];
    });
    /* harmony import */


    var _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./esm/components/lazy/lazy */
    "./node_modules/swiper/esm/components/lazy/lazy.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Lazy", function () {
      return _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__["default"];
    });
    /* harmony import */


    var _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./esm/components/controller/controller */
    "./node_modules/swiper/esm/components/controller/controller.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Controller", function () {
      return _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__["default"];
    });
    /* harmony import */


    var _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./esm/components/a11y/a11y */
    "./node_modules/swiper/esm/components/a11y/a11y.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "A11y", function () {
      return _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__["default"];
    });
    /* harmony import */


    var _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./esm/components/history/history */
    "./node_modules/swiper/esm/components/history/history.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "History", function () {
      return _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__["default"];
    });
    /* harmony import */


    var _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./esm/components/hash-navigation/hash-navigation */
    "./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HashNavigation", function () {
      return _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__["default"];
    });
    /* harmony import */


    var _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./esm/components/autoplay/autoplay */
    "./node_modules/swiper/esm/components/autoplay/autoplay.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Autoplay", function () {
      return _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__["default"];
    });
    /* harmony import */


    var _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./esm/components/effect-fade/effect-fade */
    "./node_modules/swiper/esm/components/effect-fade/effect-fade.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EffectFade", function () {
      return _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__["default"];
    });
    /* harmony import */


    var _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./esm/components/effect-cube/effect-cube */
    "./node_modules/swiper/esm/components/effect-cube/effect-cube.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EffectCube", function () {
      return _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__["default"];
    });
    /* harmony import */


    var _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./esm/components/effect-flip/effect-flip */
    "./node_modules/swiper/esm/components/effect-flip/effect-flip.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EffectFlip", function () {
      return _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__["default"];
    });
    /* harmony import */


    var _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./esm/components/effect-coverflow/effect-coverflow */
    "./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EffectCoverflow", function () {
      return _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__["default"];
    });
    /* harmony import */


    var _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./esm/components/thumbs/thumbs */
    "./node_modules/swiper/esm/components/thumbs/thumbs.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Thumbs", function () {
      return _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__["default"];
    });
    /**
     * Swiper 6.8.4
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * https://swiperjs.com
     *
     * Copyright 2014-2021 Vladimir Kharlampidi
     *
     * Released under the MIT License
     *
     * Released on: August 23, 2021
     */

    /***/

  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home */
    "./src/app/pages/home/home.ts");

    var routes = [{
      path: '',
      component: _home__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home */
    "./src/app/pages/home/home.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! swiper/angular */
    "./node_modules/swiper/angular/fesm2015/swiper_angular.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_8__["SwiperModule"]],
      declarations: [_home__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
      providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]],
      entryComponents: []
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.scss":
  /*!**************************************!*\
    !*** ./src/app/pages/home/home.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vagnon-image {\n  width: 18px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 18px !important;\n}\n\n.vagnon-image-small {\n  width: 14px !important;\n  display: inline-block;\n  vertical-align: middle;\n  height: 14px !important;\n}\n\n.header {\n  position: fixed;\n  width: 100%;\n  padding: 5px 10px;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%);\n  z-index: 999;\n}\n\n.banner-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.main-slider:after {\n  content: \"\";\n  display: block;\n  box-shadow: 0 92px 0 0 var(--ion-background-color);\n  bottom: 35px;\n  z-index: 1;\n  width: 115%;\n  height: 201px;\n  left: -30px;\n}\n\n.category-main {\n  background-color: var(--ion-background-color);\n  padding: 5px 0px 0;\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.p-img {\n  height: 78px;\n  width: 100%;\n}\n\n.noRecordsFound {\n  margin-left: 31%;\n  margin-top: 30px;\n  font-size: 15px;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\n.main-slider ion-slide img {\n  width: 100% !important;\n  height: 360px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.productItem {\n  margin-left: -15px;\n}\n\n.productItem ion-col img.recent-product-img {\n  height: 80px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n\n.menu-btn {\n  background-color: var(--ion-continue-background);\n  border-radius: 2em;\n  border: none;\n  color: white;\n  width: 170px;\n  position: fixed;\n  left: 50%;\n  bottom: 12px;\n  text-align: center;\n  font-size: 10px;\n  transform: translate(-50%, 0px);\n}\n\n.top-left {\n  position: absolute;\n  top: 3px;\n  left: 16px;\n  color: white;\n  font-weight: bolder;\n  display: flex;\n}\n\n.slider-ion {\n  width: 121px !important;\n  box-shadow: 1px 5px 14px 0px rgba(0, 0, 0, 0.7);\n  border-radius: 10px;\n  background-color: var(--ion-card-background-color);\n}\n\n.slider-ion-offer {\n  margin-left: -5px;\n  width: 50% !important;\n  z-index: 0;\n  height: 230px;\n}\n\n/*the container must be positioned relative:*/\n\n.custom-select {\n  position: relative;\n  font-family: Arial;\n}\n\n.custom-select select {\n  display: none;\n  /*hide original SELECT element:*/\n}\n\n.select-selected {\n  background-color: DodgerBlue;\n}\n\n/*style the arrow inside the select element:*/\n\n.select-selected:after {\n  position: absolute;\n  content: \"\";\n  top: 14px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-color: #fff transparent transparent transparent;\n}\n\n/*point the arrow upwards when the select box is open (active):*/\n\n.select-selected.select-arrow-active:after {\n  border-color: transparent transparent #fff transparent;\n  top: 7px;\n}\n\n/*style the items (options), including the selected item:*/\n\n.select-items div,\n.select-selected {\n  color: #ffffff;\n  padding: 8px 16px;\n  border: 1px solid transparent;\n  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n/*style items (options):*/\n\n.select-items {\n  position: absolute;\n  background-color: DodgerBlue;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99;\n}\n\n/*hide the items when the select box is closed:*/\n\n.select-hide {\n  display: none;\n}\n\n.select-items div:hover,\n.same-as-selected {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.animate__animated.animate__bounce {\n  --animate-duration: 5s;\n}\n\n.main-slider-col {\n  display: block;\n  padding: 0px;\n}\n\n.slider-content {\n  position: absolute;\n  background-color: var(--ion-item-background);\n  width: 90%;\n  bottom: 10px;\n  z-index: 9;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);\n}\n\n.slider-content .slider-content-top {\n  padding: 10px 15px;\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.slider-content .slider-content-top h4 {\n  margin-top: 0px;\n}\n\n.slider-content .slider-content-top p {\n  margin: 0px;\n  color: var(--ion-color-secondary);\n  font-size: 14px;\n}\n\n.category-list {\n  background: #f4f5f8;\n}\n\n.category-grid {\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n}\n\n.category-grid .relative {\n  height: 99px;\n  width: 120px;\n  margin: -14px auto;\n  text-transform: capitalize;\n  text-align: center;\n  font-size: 12px;\n  /* border: 1px black solid; */\n  box-shadow: 2px 4px #efefef;\n  margin-bottom: 25px;\n}\n\n.category-grid .relative ion-img {\n  height: 62px;\n  background-color: var(--ion-item-background);\n  color: var(--ion-text-color);\n  padding: 15px;\n}\n\n.category-grid .relative p {\n  margin-bottom: 0px;\n  margin-top: 5px;\n  font-size: 16px;\n}\n\n.trading-product {\n  background-color: var(--ion-background-color);\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.trading-product h5 {\n  margin: 0px;\n}\n\n.trading-product .trading-product-item {\n  text-align: left;\n  width: 100%;\n}\n\n.trading-product .trading-product-item .item-img {\n  border-radius: 10px;\n  height: 190px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 620px) {\n  .trading-product .trading-product-item .item-img {\n    height: auto !important;\n  }\n}\n\n.trading-product-item p {\n  margin: 0px;\n}\n\n.offer-item {\n  height: 120px;\n  background-color: #fff;\n  border-radius: 10px;\n  font-size: 28px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.offer-item p {\n  margin: 0px;\n  text-transform: uppercase;\n}\n\n.offer-item small,\n.offer-item b {\n  display: block;\n}\n\n.offer-item small {\n  text-transform: initial;\n}\n\n.offer-item b {\n  font-size: 20px;\n  text-shadow: 5px 0px 5px #3e3e3e;\n}\n\n.offer-item p img {\n  height: 140px !important;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.offer-item-one {\n  background-image: linear-gradient(to bottom, #1f4037, #99f2c8);\n  color: #fff;\n  height: 89px;\n}\n\n.offer-item-two {\n  background-image: linear-gradient(to bottom, #c33764, #1d2672);\n  color: #fff;\n  height: 89px;\n}\n\n.offer-item-three {\n  background-image: linear-gradient(to bottom, #e8e8e8, #bd4742);\n  height: 89px;\n  color: #fff;\n}\n\n.ratings-slide-item {\n  margin: 7px;\n}\n\n.ratings-slide-img {\n  position: relative;\n}\n\n.ratings-slide-img img {\n  height: 132px;\n  border-radius: 5px;\n}\n\n.ratings-slide-img span.offer {\n  position: absolute;\n  left: -7px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.ratings-slide-img span.offer:after {\n  content: \"\";\n  display: block;\n  left: 1px;\n  bottom: -4px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n.ratings-product {\n  background-color: var(--ion-background-color);\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.ratings-product h5 {\n  margin-top: 0px;\n  position: relative;\n}\n\n.ratings-product h5 span {\n  display: block;\n  color: #8e8e8e;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.ratings-product h5 a {\n  position: absolute;\n  right: 15px;\n  top: 8px;\n  text-decoration: none;\n  color: #2dd36f;\n}\n\n.ratings-product p.ratings-star img {\n  width: 14px !important;\n  height: 14px;\n}\n\n.ratings-product .ratings-slide-content {\n  text-align: left;\n}\n\n.ratings-product .ratings-slide-content h5 {\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 122px;\n  display: inline-block;\n  margin: 0px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star img {\n  margin-right: 5px;\n}\n\n.ratings-product .ratings-slide-content .ratings-star span {\n  color: #898989;\n}\n\n.ratings-product .ratings-slide-content p.ratings-slide-info {\n  margin: 5px 0px;\n  font-size: 16px;\n}\n\n.ratings-product .ratings-slide-content p.ratings-slide-info span {\n  display: block;\n  color: var(--ion-text-color);\n  font-size: 16px;\n}\n\n.special-product .ratings-slide-item {\n  margin: 0px;\n}\n\n.special-product .ratings-slide-img {\n  position: relative;\n}\n\n.special-product .ratings-slide-img img {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media (max-width: 620px) {\n  .special-product .ratings-slide-img img {\n    max-height: 200px;\n    height: 100%;\n    width: 100%;\n  }\n}\n\n.special-product .ratings-slide-img p.tags {\n  position: absolute;\n  bottom: 0px;\n  left: 10px;\n}\n\n.special-product .ratings-slide-img p.tags span.tag {\n  font-size: 12px;\n  padding: 5px;\n  margin-right: 10px;\n  color: #fff;\n  border-radius: 3px;\n}\n\n.tag-pink {\n  background-color: #ed5a6b;\n}\n\n.tag-blue {\n  background-color: #5197eb;\n}\n\n.trading-product .trading-grid {\n  padding: 5px;\n}\n\n.trading-pro-img {\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.tranding-rating-star {\n  margin: 0px;\n  width: 100%;\n}\n\n.tranding-rating-star img {\n  width: 9px;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.tranding-rating-star strong {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n/* Top right text */\n\n.top-right {\n  float: right;\n}\n\n.featured-listing {\n  padding-top: 15px;\n  border-bottom: 1px solid var(--ion-border-color);\n}\n\n.featured-listing h5 {\n  margin-top: 0px;\n  padding: 0px 15px;\n}\n\n.featured-listing .featured-grid {\n  padding: 5px;\n}\n\n.add-to-cart {\n  background-color: var(--ion-gocart-bg-color);\n  color: cornsilk;\n  border-bottom-right-radius: 11px;\n  border-bottom-left-radius: 11px;\n  /* height: 27px; */\n  width: 109%;\n  margin-top: 10px;\n  margin-left: -5px;\n  margin-bottom: -5px;\n  text-align: center;\n}\n\n.product-name {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 150px;\n  display: inline-block;\n  margin: 0px;\n}\n\n.cart-btn {\n  padding: 0px;\n}\n\n.search ion-searchbar {\n  --box-shadow: none;\n}\n\n.trading-product-img {\n  position: relative;\n}\n\n.trading-product-img p.tags {\n  position: absolute;\n  bottom: 20px;\n  left: 10px;\n}\n\n.trading-product-img p.tags span.tag {\n  font-size: 12px;\n  padding: 5px;\n  margin-right: 10px;\n  background-color: #5197eb;\n  color: #fff;\n  border-radius: 3px;\n}\n\n.trading-name {\n  font-size: 14px;\n  font-weight: 600;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 92px;\n  display: inline-block;\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.trading-price {\n  font-size: 14px;\n}\n\n.plus-button {\n  border: 1px solid var(--ion-border-color);\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  background: var(--ion-background-plus);\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 0px;\n}\n\n.plus-button .minus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: left;\n}\n\n.plus-button .plus {\n  width: 30%;\n  background-color: var(--ion-item-background);\n  float: right;\n}\n\n.recently-view-star {\n  margin: 0px;\n}\n\n.recently-view-star img {\n  width: 14px;\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.add-button {\n  --border-width: 1px;\n  --border-color: var(--ion-border-color);\n  width: 100%;\n  height: 32px;\n  margin: 0px;\n  color: var(--ion-text-color);\n  background-color: var(--ion-background-addbutton-rgb);\n}\n\n.add-button span {\n  font-size: 20px;\n  margin-top: -4px;\n  margin-left: 6px;\n  color: #a56871;\n}\n\n.spacel-pro-title {\n  padding: 0px;\n  margin: 0px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  display: inline-block;\n  margin: 0px;\n  text-transform: capitalize;\n}\n\n.ios .cartIcon {\n  margin-top: -2px !important;\n  color: white;\n}\n\n.cartIcon {\n  margin-top: -11px !important;\n  color: white;\n}\n\n.add-button-main {\n  display: block;\n  width: 100%;\n}\n\n.home-header {\n  --background: var(--ion-toolbar-background);\n}\n\ns {\n  font-size: 12px;\n  color: var(--ion-small-color);\n}\n\n.cart-number {\n  color: orange;\n  background: transparent;\n  padding: 10px 0px;\n  position: absolute;\n  right: 10px;\n  top: 1px;\n}\n\n.product-offer-label {\n  margin: 0px;\n  position: relative;\n}\n\n.product-offer-label .offer {\n  position: absolute;\n  left: -7px;\n  background-color: rgba(0, 0, 0, 0.72);\n  z-index: 1;\n  color: #fff;\n  padding: 7px 10px;\n  top: 10px;\n  font-size: 12px;\n}\n\n.product-offer-label .offer:after {\n  content: \"\";\n  display: block;\n  left: 1px;\n  bottom: -4px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid rgba(0, 0, 0, 0.72);\n  transform: rotate(45deg);\n}\n\n/* Custom Skeleton Line Height and Margin */\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n\n.search-bar {\n  height: 35px;\n  max-width: 300px;\n  width: 100%;\n  border-radius: 4px;\n  border: none;\n}\n\n@media (max-width: 475px) {\n  .search-bar {\n    max-width: 150px;\n    padding-right: 30px;\n  }\n}\n\n.top-search-field {\n  position: relative;\n}\n\n.top-search-field ion-icon.search-icon {\n  position: absolute;\n  top: 2px;\n  right: 9px;\n}\n\n.browse-by {\n  text-align: center;\n  margin-top: 10px;\n  margin-left: 23px;\n  display: inline-flex;\n}\n\n.short-list {\n  height: 69px;\n  width: 140px;\n  margin-right: 20px;\n  margin-top: 16px;\n  margin-bottom: 12px;\n}\n\n.service-content {\n  text-align: center;\n  height: 87px;\n  background-color: white;\n  font-size: 12px;\n  margin-left: 7px;\n  border: 1px #dad7d7 solid;\n  border-bottom-color: orange;\n  border-bottom-width: 4px;\n  -webkit-border-top-left-radius: 15px;\n  -webkit-border-top-right-radius: 15px;\n  -moz-border-radius-topleft: 15px;\n  -moz-border-radius-topright: 15px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.service-section {\n  margin-top: -42px;\n}\n\n.service-content ion-icon {\n  font-size: xx-large;\n}\n\n.budget-box {\n  text-align: center;\n  border: 1px solid #dcdcdc;\n  font-size: small;\n  margin-left: 10px;\n}\n\n@media (min-width: 768px) {\n  .budget-box {\n    padding: 10px;\n  }\n}\n\n.budget-label {\n  font-size: 16px;\n  margin-left: 10px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.more-filters {\n  font-size: 14px;\n  text-align: center;\n  color: brown;\n  margin-top: 8px;\n}\n\n.insurance-btn {\n  background-color: #db3932;\n  color: white;\n  height: 32px;\n  margin-right: 10px;\n  font-size: 14px;\n  margin-top: 9px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n}\n\n.active-service {\n  background-color: #e85a54;\n  color: white;\n  border-bottom-color: #db3932;\n}\n\n.popular-label {\n  text-transform: capitalize;\n  font-weight: 500;\n  font-size: 14px;\n  margin-top: 5px;\n  margin-left: -6px;\n}\n\n.banner-image img {\n  max-height: 540px;\n  height: 100%;\n  margin-top: -23px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n.trading-product,\n.latest-cars {\n  background-color: #f9f9f9;\n}\n\n.brand-section {\n  background-color: rgba(219, 45, 46, 0.07);\n}\n\n.store-detail {\n  margin-left: 10px;\n}\n\n@media (min-width: 768px) {\n  .service-content .tab-title {\n    font-size: 14px;\n    margin-top: 10px;\n  }\n\n  .latest-cars .ratings-slide-item {\n    max-width: 335px;\n  }\n\n  .brand-name {\n    font-size: 14px !important;\n    color: #000;\n  }\n\n  .slide-left-align {\n    justify-content: left;\n  }\n}\n\n.brand-logo span {\n  color: #fff !important;\n  font-size: 20px !important;\n  font-weight: 600 !important;\n  margin-left: 20px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  margin: 5px;\n}\n\n.swiper-container {\n  width: 100%;\n  height: 450px;\n  margin-bottom: 50px;\n  position: relative;\n}\n\n.slide-container {\n  position: relative;\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.img-slide {\n  border-bottom: 1px #DCDCDC solid;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);\n  border-radius: 10px;\n  /* Rounded corners for a modern look */\n  overflow: hidden;\n  /* Ensure no content spills outside the rounded corners */\n  background: #ffffff;\n  /* White background to make the shadow more visible */\n}\n\n.img-slide:hover {\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 0.3s ease-in-out;\n  /* Smooth transition on hover */\n}\n\n/* .swiper-slide {\n  background: #f1f1f1;\n  color: #000;\n  text-align: center;\n  line-height: 300px;\n} */\n\n.bg-yellow {\n  background-color: yellow;\n}\n\n.transition {\n  transition: background 0.25s ease, color 0.25s ease;\n}\n\n.active-slide {\n  background-color: green;\n  color: #fff;\n}\n\n.bg-blue {\n  background-color: blue;\n  color: #fff;\n}\n\n.banner-container {\n  position: relative;\n}\n\n.banner-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  /* Ensures the image covers the area while maintaining aspect ratio */\n  display: block;\n  /* Removes extra spacing from inline images */\n  margin-top: -36px;\n}\n\n.banner-title {\n  padding: 22px;\n  font-weight: 600;\n  font-size: 30px;\n  text-transform: uppercase;\n  width: 100%;\n  max-width: 400px;\n  display: block;\n  text-align: center;\n  height: 100%;\n  margin-top: 22%;\n}\n\n@media (max-width: 768px) {\n  .swiper-container {\n    height: 350px;\n  }\n\n  .banner-title {\n    font-size: 21px;\n    padding: 17px;\n  }\n\n  ion-label {\n    margin-bottom: 10px;\n  }\n}\n\n.call-button {\n  display: inline-block;\n  background-color: #28a745;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  text-decoration: none;\n  padding: 12px 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: 0.3s ease-in-out;\n}\n\n.call-button:hover {\n  background-color: #218838;\n  transform: scale(1.05);\n}\n\n.call-icon {\n  margin-right: 8px;\n}\n\n.cta-container {\n  margin-top: 100px;\n  position: relative;\n}\n\n.cta-button {\n  display: inline-block;\n  background-color: red;\n  color: white;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  padding: 15px 40px;\n  border-radius: 40px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  transition: 0.3s ease-in-out;\n}\n\n.cta-button:hover {\n  background-color: darkred;\n  transform: scale(1.05);\n}\n\n.thumb {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 24px;\n}\n\n.thumb.left {\n  left: -50px;\n}\n\n.thumb.right {\n  right: -50px;\n}\n\n.subtitle {\n  margin-top: 10px;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx3R0FBQTtFQU1BLFlBQUE7QUNGRjs7QURJQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDREY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUdBLGtEQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNGRjs7QURJQTtFQUNFLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNJRjs7QUREQTtFQUNFLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNJRjs7QURGQSw2Q0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7RUFBZSxnQ0FBQTtBQ09qQjs7QURMQTtFQUNFLDRCQUFBO0FDUUY7O0FETkEsNkNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxzREFBQTtBQ1NGOztBRFBBLGdFQUFBOztBQUNBO0VBQ0Usc0RBQUE7RUFDQSxRQUFBO0FDVUY7O0FEUEEsMERBQUE7O0FBQ0E7O0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvRUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ1VGOztBRFBBLHlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNVRjs7QURQQSxnREFBQTs7QUFDQTtFQUNFLGFBQUE7QUNVRjs7QURQQTs7RUFFRSxvQ0FBQTtBQ1VGOztBRFBBO0VBQ0Usc0JBQUE7QUNVRjs7QURSQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ1lGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxnREFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtBQ2NGOztBRFpBO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ2VGOztBRGJBO0VBQ0UsbUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDaUJGOztBRGZBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDa0JGOztBRGhCQTtFQUNFLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQ21CRjs7QURqQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDb0JGOztBRGpCQTtFQUNFLDZDQUFBO0VBQ0EsZ0RBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsV0FBQTtBQ3FCRjs7QURuQkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNzQkY7O0FEcEJBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUN1QkY7O0FEdEJFO0VBSkY7SUFLSSx1QkFBQTtFQ3lCRjtBQUNGOztBRHZCQTtFQUNFLFdBQUE7QUMwQkY7O0FEeEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDMkJGOztBRHpCQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQzRCRjs7QUQxQkE7O0VBRUUsY0FBQTtBQzZCRjs7QUQzQkE7RUFDRSx1QkFBQTtBQzhCRjs7QUQ1QkE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUMrQkY7O0FEN0JBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ2dDRjs7QUQ5QkE7RUFDRSw4REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaUNGOztBRC9CQTtFQUNFLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNrQ0Y7O0FEL0JBO0VBQ0UsOERBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2tDRjs7QUQvQkE7RUFDRSxXQUFBO0FDa0NGOztBRGhDQTtFQUNFLGtCQUFBO0FDbUNGOztBRGpDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ29DRjs7QURsQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ3FDRjs7QURuQ0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0FDc0NGOztBRHBDQTtFQUNFLDZDQUFBO0VBQ0EsZ0RBQUE7QUN1Q0Y7O0FEckNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDd0NGOztBRHRDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDeUNGOztBRHZDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUMwQ0Y7O0FEeENBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDMkNGOztBRHpDQTtFQUNFLGdCQUFBO0FDNENGOztBRDFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQzZDRjs7QUQzQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQzhDRjs7QUQ1Q0E7RUFDRSxpQkFBQTtBQytDRjs7QUQ3Q0E7RUFDRSxjQUFBO0FDZ0RGOztBRDlDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDaURGOztBRC9DQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNrREY7O0FEaERBO0VBQ0UsV0FBQTtBQ21ERjs7QURqREE7RUFDRSxrQkFBQTtBQ29ERjs7QURsREE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3FERjs7QURwREU7RUFIRjtJQUlJLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUN1REY7QUFDRjs7QURyREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDd0RGOztBRHREQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUN5REY7O0FEdkRBO0VBQ0UseUJBQUE7QUMwREY7O0FEeERBO0VBQ0UseUJBQUE7QUMyREY7O0FEekRBO0VBQ0UsWUFBQTtBQzRERjs7QUQxREE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQzZERjs7QUQzREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQzhERjs7QUQ1REE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQytERjs7QUQ3REE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNnRUY7O0FEN0RBLG1CQUFBOztBQUNBO0VBQ0UsWUFBQTtBQ2dFRjs7QUQ5REE7RUFDRSxpQkFBQTtFQUNBLGdEQUFBO0FDaUVGOztBRC9EQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2tFRjs7QURoRUE7RUFDRSxZQUFBO0FDbUVGOztBRGpFQTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ29FRjs7QURsRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDcUVGOztBRG5FQTtFQUNFLFlBQUE7QUNzRUY7O0FEcEVBO0VBQ0Usa0JBQUE7QUN1RUY7O0FEckVBO0VBQ0Usa0JBQUE7QUN3RUY7O0FEdEVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3lFRjs7QUR2RUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUMwRUY7O0FEeEVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDMkVGOztBRHpFQTtFQUNFLGVBQUE7QUM0RUY7O0FEMUVBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM2RUY7O0FEM0VBO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtBQzhFRjs7QUQ1RUE7RUFDRSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0FDK0VGOztBRDdFQTtFQUNFLFdBQUE7QUNnRkY7O0FEOUVBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNpRkY7O0FEL0VBO0VBQ0UsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EscURBQUE7QUNrRkY7O0FEaEZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbUZGOztBRGhGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FDbUZGOztBRGpGQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ29GRjs7QURqRkE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNvRkY7O0FEakZBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNvRkY7O0FEbEZBO0VBQ0UsMkNBQUE7QUNxRkY7O0FEbEZBO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FDcUZGOztBRGxGQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ3FGRjs7QURuRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNzRkY7O0FEcEZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUN1RkY7O0FEckZBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtBQ3dGRjs7QURyRkEsMkNBQUE7O0FBQ0E7RUFDRSxpQkFBQTtBQ3dGRjs7QURyRkE7RUFDRSxrQkFBQTtBQ3dGRjs7QURyRkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDd0ZGOztBRHZGRTtFQU5GO0lBT0ksZ0JBQUE7SUFDQSxtQkFBQTtFQzBGRjtBQUNGOztBRHhGQTtFQUNFLGtCQUFBO0FDMkZGOztBRDFGRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUM0Rko7O0FEekZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUM0RkY7O0FEekZBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM0RkY7O0FEekZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUM0RkY7O0FEekZBO0VBQ0UsaUJBQUE7QUM0RkY7O0FEekZBO0VBQ0UsbUJBQUE7QUM0RkY7O0FEekZBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUM0RkY7O0FEM0ZFO0VBTEY7SUFNSSxhQUFBO0VDOEZGO0FBQ0Y7O0FEM0ZBO0VBQ0UsZUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQzZGRjs7QUQxRkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQzZGRjs7QUQxRkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDNkZGOztBRDFGQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDNkZGOztBRDFGQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDNkZGOztBRDFGRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDNkZKOztBRDFGQTs7RUFFRSx5QkFBQTtBQzZGRjs7QUQzRkE7RUFDRSx5Q0FBQTtBQzhGRjs7QUQ1RkE7RUFDRSxpQkFBQTtBQytGRjs7QUQ3RkE7RUFFSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQytGSjs7RUQzRkU7SUFDRSxnQkFBQTtFQzhGSjs7RUQzRkE7SUFDRSwwQkFBQTtJQUNBLFdBQUE7RUM4RkY7O0VENUZBO0lBQ0UscUJBQUE7RUMrRkY7QUFDRjs7QUQ1RkE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQzhGRjs7QUQzRkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQzhGRjs7QUQxRkE7RUFDRSx5QkFBQTtFQUVBLFdBQUE7QUM0RkY7O0FEdEZBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDeUZGOztBRHZGQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDMEZGOztBRHhGQTtFQUlFLGdDQUFBO0VBQ0EsdUVBQUE7RUFDQSxtQkFBQTtFQUFxQixzQ0FBQTtFQUNyQixnQkFBQTtFQUFrQix5REFBQTtFQUNsQixtQkFBQTtFQUFxQixxREFBQTtBQzJGdkI7O0FEckZBO0VBQ0Usd0VBQUE7RUFDQSx1Q0FBQTtFQUF5QywrQkFBQTtBQ3lGM0M7O0FEdEZBOzs7OztHQUFBOztBQU9BO0VBQ0Usd0JBQUE7QUN3RkY7O0FEdEZBO0VBQ0UsbURBQUE7QUN5RkY7O0FEdkZBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FDMEZGOztBRHhGQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQzJGRjs7QUR4RkE7RUFDRSxrQkFBQTtBQzJGRjs7QUR4RkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFBbUIscUVBQUE7RUFDbkIsY0FBQTtFQUFnQiw2Q0FBQTtFQUVoQixpQkFBQTtBQzRGRjs7QUR6RkE7RUFHRSxhQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBRUEseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3dGRjs7QUR0RkE7RUFDRTtJQUNFLGFBQUE7RUN5RkY7O0VEdEZBO0lBRUUsZUFBQTtJQUNBLGFBQUE7RUN3RkY7O0VEckZBO0lBQ0UsbUJBQUE7RUN3RkY7QUFDRjs7QURwRkE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7QUNzRkY7O0FEbkZBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQ3NGRjs7QURuRkE7RUFDRSxpQkFBQTtBQ3NGRjs7QURsRkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDcUZGOztBRGxGQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtBQ3FGRjs7QURsRkE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FDcUZGOztBRGxGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ3FGRjs7QURsRkE7RUFDRSxXQUFBO0FDcUZGOztBRGxGQTtFQUNFLFlBQUE7QUNxRkY7O0FEbEZBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDcUZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFnbm9uLWltYWdlIHtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbn1cbi52YWdub24taW1hZ2Utc21hbGwge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xufVxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gdG9wLFxuICAgIHJnYmEoMCwgMCwgMCwgMCkgMCxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCkgNTAlLFxuICAgIHJnYmEoMCwgMCwgMCwgMC43KSAxMDAlXG4gICk7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5iYW5uZXItaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ubWFpbi1zbGlkZXI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDkycHggMCAwIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm90dG9tOiAzNXB4O1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTE1JTtcbiAgaGVpZ2h0OiAyMDFweDtcbiAgbGVmdDogLTMwcHg7XG59XG4uY2F0ZWdvcnktbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4IDBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG4ucC1pbWcge1xuICBoZWlnaHQ6IDc4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogMzElO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLXNsaWRlciBpb24tc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wcm9kdWN0SXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5wcm9kdWN0SXRlbSBpb24tY29sIGltZy5yZWNlbnQtcHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1lbnUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbnRpbnVlLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTcwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpO1xufVxuXG4udG9wLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbGlkZXItaW9uIHtcbiAgd2lkdGg6IDEyMXB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTRweCAwcHggcmdiKDAgMCAwIC8gNzAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNhcmQtYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5zbGlkZXItaW9uLW9mZmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAyMzBweDtcbn1cbi8qdGhlIGNvbnRhaW5lciBtdXN0IGJlIHBvc2l0aW9uZWQgcmVsYXRpdmU6Ki9cbi5jdXN0b20tc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG4uY3VzdG9tLXNlbGVjdCBzZWxlY3Qge1xuICBkaXNwbGF5OiBub25lOyAvKmhpZGUgb3JpZ2luYWwgU0VMRUNUIGVsZW1lbnQ6Ki9cbn1cbi5zZWxlY3Qtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlO1xufVxuLypzdHlsZSB0aGUgYXJyb3cgaW5zaWRlIHRoZSBzZWxlY3QgZWxlbWVudDoqL1xuLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogJyc7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4vKnBvaW50IHRoZSBhcnJvdyB1cHdhcmRzIHdoZW4gdGhlIHNlbGVjdCBib3ggaXMgb3BlbiAoYWN0aXZlKToqL1xuLnNlbGVjdC1zZWxlY3RlZC5zZWxlY3QtYXJyb3ctYWN0aXZlOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICB0b3A6IDdweDtcbn1cblxuLypzdHlsZSB0aGUgaXRlbXMgKG9wdGlvbnMpLCBpbmNsdWRpbmcgdGhlIHNlbGVjdGVkIGl0ZW06Ki9cbi5zZWxlY3QtaXRlbXMgZGl2LFxuLnNlbGVjdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLCAwLCAwLCAwLjEpIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKnN0eWxlIGl0ZW1zIChvcHRpb25zKToqL1xuLnNlbGVjdC1pdGVtcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbi8qaGlkZSB0aGUgaXRlbXMgd2hlbiB0aGUgc2VsZWN0IGJveCBpcyBjbG9zZWQ6Ki9cbi5zZWxlY3QtaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3QtaXRlbXMgZGl2OmhvdmVyLFxuLnNhbWUtYXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19ib3VuY2Uge1xuICAtLWFuaW1hdGUtZHVyYXRpb246IDVzO1xufVxuLm1haW4tc2xpZGVyLWNvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uc2xpZGVyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICB3aWR0aDogOTAlO1xuICBib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGVyLWNvbnRlbnQtdG9wIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG4uc2xpZGVyLWNvbnRlbnQgLnNsaWRlci1jb250ZW50LXRvcCBoNCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5zbGlkZXItY29udGVudCAuc2xpZGVyLWNvbnRlbnQtdG9wIHAge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2F0ZWdvcnktbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG4uY2F0ZWdvcnktZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSB7XG4gIGhlaWdodDogOTlweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IC0xNHB4IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXG4gIGJveC1zaGFkb3c6IDJweCA0cHggI2VmZWZlZjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSBpb24taW1nIHtcbiAgaGVpZ2h0OiA2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRyYWRpbmctcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuLnRyYWRpbmctcHJvZHVjdCBoNSB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnRyYWRpbmctcHJvZHVjdCAudHJhZGluZy1wcm9kdWN0LWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi50cmFkaW5nLXByb2R1Y3QgLnRyYWRpbmctcHJvZHVjdC1pdGVtIC5pdGVtLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTkwcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4udHJhZGluZy1wcm9kdWN0LWl0ZW0gcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLm9mZmVyLWl0ZW0ge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub2ZmZXItaXRlbSBwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ub2ZmZXItaXRlbSBzbWFsbCxcbi5vZmZlci1pdGVtIGIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5vZmZlci1pdGVtIHNtYWxsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG59XG4ub2ZmZXItaXRlbSBiIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXNoYWRvdzogNXB4IDBweCA1cHggIzNlM2UzZTtcbn1cbi5vZmZlci1pdGVtIHAgaW1nIHtcbiAgaGVpZ2h0OiAxNDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ub2ZmZXItaXRlbS1vbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMWY0MDM3LCAjOTlmMmM4KTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogODlweDtcbn1cbi5vZmZlci1pdGVtLXR3byB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNjMzM3NjQsICMxZDI2NzIpO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA4OXB4O1xufVxuXG4ub2ZmZXItaXRlbS10aHJlZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlOGU4ZTgsICNiZDQ3NDIpO1xuICBoZWlnaHQ6IDg5cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmF0aW5ncy1zbGlkZS1pdGVtIHtcbiAgbWFyZ2luOiA3cHg7XG59XG4ucmF0aW5ncy1zbGlkZS1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmF0aW5ncy1zbGlkZS1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnJhdGluZ3Mtc2xpZGUtaW1nIHNwYW4ub2ZmZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC03cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucmF0aW5ncy1zbGlkZS1pbWcgc3Bhbi5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMXB4O1xuICBib3R0b206IC00cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4ucmF0aW5ncy1wcm9kdWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG4ucmF0aW5ncy1wcm9kdWN0IGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmF0aW5ncy1wcm9kdWN0IGg1IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM4ZThlOGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5yYXRpbmdzLXByb2R1Y3QgaDUgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMmRkMzZmO1xufVxuLnJhdGluZ3MtcHJvZHVjdCBwLnJhdGluZ3Mtc3RhciBpbWcge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHg7XG59XG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IGg1IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMjJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbn1cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCAucmF0aW5ncy1zdGFyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCAucmF0aW5ncy1zdGFyIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIgc3BhbiB7XG4gIGNvbG9yOiAjODk4OTg5O1xufVxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IHAucmF0aW5ncy1zbGlkZS1pbmZvIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucmF0aW5ncy1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWNvbnRlbnQgcC5yYXRpbmdzLXNsaWRlLWluZm8gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWl0ZW0ge1xuICBtYXJnaW46IDBweDtcbn1cbi5zcGVjaWFsLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pbWcgaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pbWcgcC50YWdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMTBweDtcbn1cbi5zcGVjaWFsLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtaW1nIHAudGFncyBzcGFuLnRhZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4udGFnLXBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1YTZiO1xufVxuLnRhZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxOTdlYjtcbn1cbi50cmFkaW5nLXByb2R1Y3QgLnRyYWRpbmctZ3JpZCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi50cmFkaW5nLXByby1pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnRyYW5kaW5nLXJhdGluZy1zdGFyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRyYW5kaW5nLXJhdGluZy1zdGFyIGltZyB7XG4gIHdpZHRoOiA5cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udHJhbmRpbmctcmF0aW5nLXN0YXIgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBUb3AgcmlnaHQgdGV4dCAqL1xuLnRvcC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5mZWF0dXJlZC1saXN0aW5nIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbn1cbi5mZWF0dXJlZC1saXN0aW5nIGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cbi5mZWF0dXJlZC1saXN0aW5nIC5mZWF0dXJlZC1ncmlkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLmFkZC10by1jYXJ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWdvY2FydC1iZy1jb2xvcik7XG4gIGNvbG9yOiBjb3Juc2lsaztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDExcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDExcHg7XG4gIC8qIGhlaWdodDogMjdweDsgKi9cbiAgd2lkdGg6IDEwOSU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1uYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbn1cbi5jYXJ0LWJ0biB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5zZWFyY2ggaW9uLXNlYXJjaGJhciB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi50cmFkaW5nLXByb2R1Y3QtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyYWRpbmctcHJvZHVjdC1pbWcgcC50YWdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG4udHJhZGluZy1wcm9kdWN0LWltZyBwLnRhZ3Mgc3Bhbi50YWcge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5N2ViO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnRyYWRpbmctbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA5MnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi50cmFkaW5nLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBsdXMtYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtcGx1cyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnBsdXMtYnV0dG9uIC5taW51cyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogbGVmdDtcbn1cbi5wbHVzLWJ1dHRvbiAucGx1cyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmVjZW50bHktdmlldy1zdGFyIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucmVjZW50bHktdmlldy1zdGFyIGltZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmFkZC1idXR0b24ge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1hZGRidXR0b24tcmdiKTtcbn1cbi5hZGQtYnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGNvbG9yOiAjYTU2ODcxO1xufVxuXG4uc3BhY2VsLXByby10aXRsZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uaW9zIC5jYXJ0SWNvbiB7XG4gIG1hcmdpbi10b3A6IC0ycHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FydEljb24ge1xuICBtYXJnaW4tdG9wOiAtMTFweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGQtYnV0dG9uLW1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZS1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQpO1xufVxuXG5zIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cblxuLmNhcnQtbnVtYmVyIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbn1cbi5wcm9kdWN0LW9mZmVyLWxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LW9mZmVyLWxhYmVsIC5vZmZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0LW9mZmVyLWxhYmVsIC5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMXB4O1xuICBib3R0b206IC00cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG59XG5cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3NXB4KSB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG59XG4udG9wLXNlYXJjaC1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW9uLWljb24uc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDJweDtcbiAgICByaWdodDogOXB4O1xuICB9XG59XG4uYnJvd3NlLWJ5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjNweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5zaG9ydC1saXN0IHtcbiAgaGVpZ2h0OiA2OXB4O1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnNlcnZpY2UtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBib3JkZXI6IDFweCAjZGFkN2Q3IHNvbGlkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBvcmFuZ2U7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogMTVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG59XG5cbi5zZXJ2aWNlLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAtNDJweDtcbn1cblxuLnNlcnZpY2UtY29udGVudCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5idWRnZXQtYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuXG4uYnVkZ2V0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAvLyBmb250LWZhbWlseTogaW5pdGlhbDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tb3JlLWZpbHRlcnMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJyb3duO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5pbnN1cmFuY2UtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMzkzMjtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYWN0aXZlLXNlcnZpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1YTU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkYjM5MzI7XG59XG5cbi5wb3B1bGFyLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cbi5iYW5uZXItaW1hZ2Uge1xuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDU0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtcG9zaXRpb246IGJvdHRvbTtcbiAgfVxufVxuLnRyYWRpbmctcHJvZHVjdCxcbi5sYXRlc3QtY2FycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4uYnJhbmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTkgNDUgNDYgLyA3JSk7XG59XG4uc3RvcmUtZGV0YWlsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlcnZpY2UtY29udGVudCB7XG4gICAgLnRhYi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuICAubGF0ZXN0LWNhcnMge1xuICAgIC5yYXRpbmdzLXNsaWRlLWl0ZW0ge1xuICAgICAgbWF4LXdpZHRoOiAzMzVweDtcbiAgICB9XG4gIH1cbiAgLmJyYW5kLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIC5zbGlkZS1sZWZ0LWFsaWduIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIH1cbn1cblxuLmJyYW5kLWxvZ28gc3BhbiB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XG59XG5cbi5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVweDtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBsaW5lLWhlaWdodDogNzVweDtcbiAgLy8gZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmltZy1zbGlkZSB7XG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNEQ0RDREMgc29saWQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIGEgbW9kZXJuIGxvb2sgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRW5zdXJlIG5vIGNvbnRlbnQgc3BpbGxzIG91dHNpZGUgdGhlIHJvdW5kZWQgY29ybmVycyAqL1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kIHRvIG1ha2UgdGhlIHNoYWRvdyBtb3JlIHZpc2libGUgKi9cbiAgLy8gbWFyZ2luOiAxMHB4XG4gIFxuXG59XG5cbi5pbWctc2xpZGU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDsgLyogU21vb3RoIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbn1cblxuLyogLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcbn0gKi9cblxuLmJnLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cbi50cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cyBlYXNlLCBjb2xvciAwLjI1cyBlYXNlO1xufVxuLmFjdGl2ZS1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZy1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iYW5uZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFubmVyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgYXJlYSB3aGlsZSBtYWludGFpbmluZyBhc3BlY3QgcmF0aW8gKi9cbiAgZGlzcGxheTogYmxvY2s7IC8qIFJlbW92ZXMgZXh0cmEgc3BhY2luZyBmcm9tIGlubGluZSBpbWFnZXMgKi9cbiAgLy8gbWFyZ2luLWJvdHRvbTogLTIwcHhcbiAgbWFyZ2luLXRvcDogLTM2cHg7XG59XG5cbi5iYW5uZXItdGl0bGUge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCA4NCwgODQsIDAuNyk7XG4gIC8vIGNvbG9yOiAjZjlmNmY2O1xuICBwYWRkaW5nOiAyMnB4O1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgLy8gbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIyJVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zd2lwZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICB9XG5cbiAgLmJhbm5lci10aXRsZSB7XG4gICAgLy8gbWFyZ2luLXRvcDogMjM2cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHBhZGRpbmc6IDE3cHg7XG4gIH1cblxuICBpb24tbGFiZWx7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICB9XG59XG5cblxuLmNhbGwtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYWxsLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5jYWxsLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuXG4uY3RhLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdGEtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY3RhLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi50aHVtYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4udGh1bWIubGVmdCB7XG4gIGxlZnQ6IC01MHB4O1xufVxuXG4udGh1bWIucmlnaHQge1xuICByaWdodDogLTUwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIudmFnbm9uLWltYWdlIHtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnZhZ25vbi1pbWFnZS1zbWFsbCB7XG4gIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSAwLCByZ2JhKDAsIDAsIDAsIDAuNCkgNTAlLCByZ2JhKDAsIDAsIDAsIDAuNykgMTAwJSk7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJhbm5lci1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm1haW4tc2xpZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaGFkb3c6IDAgOTJweCAwIDAgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICBib3R0b206IDM1cHg7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMTUlO1xuICBoZWlnaHQ6IDIwMXB4O1xuICBsZWZ0OiAtMzBweDtcbn1cblxuLmNhdGVnb3J5LW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweCAwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4ucC1pbWcge1xuICBoZWlnaHQ6IDc4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9SZWNvcmRzRm91bmQge1xuICBtYXJnaW4tbGVmdDogMzElO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1zbGlkZXIgaW9uLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzYwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJvZHVjdEl0ZW0ge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5wcm9kdWN0SXRlbSBpb24tY29sIGltZy5yZWNlbnQtcHJvZHVjdC1pbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWVudS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29udGludWUtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNzBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDBweCk7XG59XG5cbi50b3AtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNsaWRlci1pb24ge1xuICB3aWR0aDogMTIxcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jYXJkLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uc2xpZGVyLWlvbi1vZmZlciB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMjMwcHg7XG59XG5cbi8qdGhlIGNvbnRhaW5lciBtdXN0IGJlIHBvc2l0aW9uZWQgcmVsYXRpdmU6Ki9cbi5jdXN0b20tc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi5jdXN0b20tc2VsZWN0IHNlbGVjdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qaGlkZSBvcmlnaW5hbCBTRUxFQ1QgZWxlbWVudDoqL1xufVxuXG4uc2VsZWN0LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcbn1cblxuLypzdHlsZSB0aGUgYXJyb3cgaW5zaWRlIHRoZSBzZWxlY3QgZWxlbWVudDoqL1xuLnNlbGVjdC1zZWxlY3RlZDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAxNHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLypwb2ludCB0aGUgYXJyb3cgdXB3YXJkcyB3aGVuIHRoZSBzZWxlY3QgYm94IGlzIG9wZW4gKGFjdGl2ZSk6Ki9cbi5zZWxlY3Qtc2VsZWN0ZWQuc2VsZWN0LWFycm93LWFjdGl2ZTphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcbiAgdG9wOiA3cHg7XG59XG5cbi8qc3R5bGUgdGhlIGl0ZW1zIChvcHRpb25zKSwgaW5jbHVkaW5nIHRoZSBzZWxlY3RlZCBpdGVtOiovXG4uc2VsZWN0LWl0ZW1zIGRpdixcbi5zZWxlY3Qtc2VsZWN0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC4xKSB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLypzdHlsZSBpdGVtcyAob3B0aW9ucyk6Ki9cbi5zZWxlY3QtaXRlbXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4vKmhpZGUgdGhlIGl0ZW1zIHdoZW4gdGhlIHNlbGVjdCBib3ggaXMgY2xvc2VkOiovXG4uc2VsZWN0LWhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2VsZWN0LWl0ZW1zIGRpdjpob3Zlcixcbi5zYW1lLWFzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fYm91bmNlIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiA1cztcbn1cblxuLm1haW4tc2xpZGVyLWNvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zbGlkZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIHdpZHRoOiA5MCU7XG4gIGJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uc2xpZGVyLWNvbnRlbnQgLnNsaWRlci1jb250ZW50LXRvcCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4uc2xpZGVyLWNvbnRlbnQgLnNsaWRlci1jb250ZW50LXRvcCBoNCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnNsaWRlci1jb250ZW50IC5zbGlkZXItY29udGVudC10b3AgcCB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhdGVnb3J5LWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xufVxuXG4uY2F0ZWdvcnktZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNhdGVnb3J5LWdyaWQgLnJlbGF0aXZlIHtcbiAgaGVpZ2h0OiA5OXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogLTE0cHggYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cbiAgYm94LXNoYWRvdzogMnB4IDRweCAjZWZlZmVmO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uY2F0ZWdvcnktZ3JpZCAucmVsYXRpdmUgaW9uLWltZyB7XG4gIGhlaWdodDogNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jYXRlZ29yeS1ncmlkIC5yZWxhdGl2ZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRyYWRpbmctcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4udHJhZGluZy1wcm9kdWN0IGg1IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi50cmFkaW5nLXByb2R1Y3QgLnRyYWRpbmctcHJvZHVjdC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmFkaW5nLXByb2R1Y3QgLnRyYWRpbmctcHJvZHVjdC1pdGVtIC5pdGVtLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTkwcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcbiAgLnRyYWRpbmctcHJvZHVjdCAudHJhZGluZy1wcm9kdWN0LWl0ZW0gLml0ZW0taW1nIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG4udHJhZGluZy1wcm9kdWN0LWl0ZW0gcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ub2ZmZXItaXRlbSB7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm9mZmVyLWl0ZW0gcCB7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ub2ZmZXItaXRlbSBzbWFsbCxcbi5vZmZlci1pdGVtIGIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm9mZmVyLWl0ZW0gc21hbGwge1xuICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbn1cblxuLm9mZmVyLWl0ZW0gYiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1zaGFkb3c6IDVweCAwcHggNXB4ICMzZTNlM2U7XG59XG5cbi5vZmZlci1pdGVtIHAgaW1nIHtcbiAgaGVpZ2h0OiAxNDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5vZmZlci1pdGVtLW9uZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxZjQwMzcsICM5OWYyYzgpO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA4OXB4O1xufVxuXG4ub2ZmZXItaXRlbS10d28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYzMzNzY0LCAjMWQyNjcyKTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogODlweDtcbn1cblxuLm9mZmVyLWl0ZW0tdGhyZWUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZThlOGU4LCAjYmQ0NzQyKTtcbiAgaGVpZ2h0OiA4OXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnJhdGluZ3Mtc2xpZGUtaXRlbSB7XG4gIG1hcmdpbjogN3B4O1xufVxuXG4ucmF0aW5ncy1zbGlkZS1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYXRpbmdzLXNsaWRlLWltZyBpbWcge1xuICBoZWlnaHQ6IDEzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5yYXRpbmdzLXNsaWRlLWltZyBzcGFuLm9mZmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIpO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmF0aW5ncy1zbGlkZS1pbWcgc3Bhbi5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAxcHg7XG4gIGJvdHRvbTogLTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IGg1IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgaDUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzhlOGU4ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucmF0aW5ncy1wcm9kdWN0IGg1IGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJkZDM2Zjtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCBwLnJhdGluZ3Mtc3RhciBpbWcge1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCBoNSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTIycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCAucmF0aW5ncy1zdGFyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IC5yYXRpbmdzLXN0YXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCAucmF0aW5ncy1zdGFyIHNwYW4ge1xuICBjb2xvcjogIzg5ODk4OTtcbn1cblxuLnJhdGluZ3MtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1jb250ZW50IHAucmF0aW5ncy1zbGlkZS1pbmZvIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yYXRpbmdzLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtY29udGVudCBwLnJhdGluZ3Mtc2xpZGUtaW5mbyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNwZWNpYWwtcHJvZHVjdCAucmF0aW5ncy1zbGlkZS1pdGVtIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zcGVjaWFsLXByb2R1Y3QgLnJhdGluZ3Mtc2xpZGUtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWltZyBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAuc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWltZyBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWltZyBwLnRhZ3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uc3BlY2lhbC1wcm9kdWN0IC5yYXRpbmdzLXNsaWRlLWltZyBwLnRhZ3Mgc3Bhbi50YWcge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4udGFnLXBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ1YTZiO1xufVxuXG4udGFnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE5N2ViO1xufVxuXG4udHJhZGluZy1wcm9kdWN0IC50cmFkaW5nLWdyaWQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50cmFkaW5nLXByby1pbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udHJhbmRpbmctcmF0aW5nLXN0YXIge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmFuZGluZy1yYXRpbmctc3RhciBpbWcge1xuICB3aWR0aDogOXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udHJhbmRpbmctcmF0aW5nLXN0YXIgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBUb3AgcmlnaHQgdGV4dCAqL1xuLnRvcC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZlYXR1cmVkLWxpc3Rpbmcge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuXG4uZmVhdHVyZWQtbGlzdGluZyBoNSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5mZWF0dXJlZC1saXN0aW5nIC5mZWF0dXJlZC1ncmlkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYWRkLXRvLWNhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tZ29jYXJ0LWJnLWNvbG9yKTtcbiAgY29sb3I6IGNvcm5zaWxrO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTFweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTFweDtcbiAgLyogaGVpZ2h0OiAyN3B4OyAqL1xuICB3aWR0aDogMTA5JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5jYXJ0LWJ0biB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNlYXJjaCBpb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4udHJhZGluZy1wcm9kdWN0LWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRyYWRpbmctcHJvZHVjdC1pbWcgcC50YWdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi50cmFkaW5nLXByb2R1Y3QtaW1nIHAudGFncyBzcGFuLnRhZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTk3ZWI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi50cmFkaW5nLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi50cmFkaW5nLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGx1cy1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1wbHVzKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5wbHVzLWJ1dHRvbiAubWludXMge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wbHVzLWJ1dHRvbiAucGx1cyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZWNlbnRseS12aWV3LXN0YXIge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJlY2VudGx5LXZpZXctc3RhciBpbWcge1xuICB3aWR0aDogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1hZGRidXR0b24tcmdiKTtcbn1cblxuLmFkZC1idXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgY29sb3I6ICNhNTY4NzE7XG59XG5cbi5zcGFjZWwtcHJvLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmlvcyAuY2FydEljb24ge1xuICBtYXJnaW4tdG9wOiAtMnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcnRJY29uIHtcbiAgbWFyZ2luLXRvcDogLTExcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkLWJ1dHRvbi1tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaG9tZS1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQpO1xufVxuXG5zIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLXNtYWxsLWNvbG9yKTtcbn1cblxuLmNhcnQtbnVtYmVyIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDFweDtcbn1cblxuLnByb2R1Y3Qtb2ZmZXItbGFiZWwge1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdC1vZmZlci1sYWJlbCAub2ZmZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC03cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9kdWN0LW9mZmVyLWxhYmVsIC5vZmZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAxcHg7XG4gIGJvdHRvbTogLTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLyogQ3VzdG9tIFNrZWxldG9uIExpbmUgSGVpZ2h0IGFuZCBNYXJnaW4gKi9cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIGhlaWdodDogMzVweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3NXB4KSB7XG4gIC5zZWFyY2gtYmFyIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn1cblxuLnRvcC1zZWFyY2gtZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9wLXNlYXJjaC1maWVsZCBpb24taWNvbi5zZWFyY2gtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiA5cHg7XG59XG5cbi5icm93c2UtYnkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnNob3J0LWxpc3Qge1xuICBoZWlnaHQ6IDY5cHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc2VydmljZS1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDg3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIGJvcmRlcjogMXB4ICNkYWQ3ZDcgc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG9yYW5nZTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xuICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAxNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6IDE1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbn1cblxuLnNlcnZpY2Utc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IC00MnB4O1xufVxuXG4uc2VydmljZS1jb250ZW50IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuLmJ1ZGdldC1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5idWRnZXQtYm94IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5cbi5idWRnZXQtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW9yZS1maWx0ZXJzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBicm93bjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uaW5zdXJhbmNlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjM5MzI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFjdGl2ZS1zZXJ2aWNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NWE1NDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGIzOTMyO1xufVxuXG4ucG9wdWxhci1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG5cbi5iYW5uZXItaW1hZ2UgaW1nIHtcbiAgbWF4LWhlaWdodDogNTQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTIzcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LXBvc2l0aW9uOiBib3R0b207XG59XG5cbi50cmFkaW5nLXByb2R1Y3QsXG4ubGF0ZXN0LWNhcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4uYnJhbmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCA0NSwgNDYsIDAuMDcpO1xufVxuXG4uc3RvcmUtZGV0YWlsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VydmljZS1jb250ZW50IC50YWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLmxhdGVzdC1jYXJzIC5yYXRpbmdzLXNsaWRlLWl0ZW0ge1xuICAgIG1heC13aWR0aDogMzM1cHg7XG4gIH1cblxuICAuYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICAuc2xpZGUtbGVmdC1hbGlnbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB9XG59XG4uYnJhbmQtbG9nbyBzcGFuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZsZXgtY29udGFpbmVyID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNsaWRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmltZy1zbGlkZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCAjRENEQ0RDIHNvbGlkO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLyogUm91bmRlZCBjb3JuZXJzIGZvciBhIG1vZGVybiBsb29rICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIEVuc3VyZSBubyBjb250ZW50IHNwaWxscyBvdXRzaWRlIHRoZSByb3VuZGVkIGNvcm5lcnMgKi9cbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLyogV2hpdGUgYmFja2dyb3VuZCB0byBtYWtlIHRoZSBzaGFkb3cgbW9yZSB2aXNpYmxlICovXG59XG5cbi5pbWctc2xpZGU6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcbiAgLyogU21vb3RoIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cbn1cblxuLyogLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMDBweDtcbn0gKi9cbi5iZy15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi50cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cyBlYXNlLCBjb2xvciAwLjI1cyBlYXNlO1xufVxuXG4uYWN0aXZlLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmctYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmFubmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFyZWEgd2hpbGUgbWFpbnRhaW5pbmcgYXNwZWN0IHJhdGlvICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBSZW1vdmVzIGV4dHJhIHNwYWNpbmcgZnJvbSBpbmxpbmUgaW1hZ2VzICovXG4gIG1hcmdpbi10b3A6IC0zNnB4O1xufVxuXG4uYmFubmVyLXRpdGxlIHtcbiAgcGFkZGluZzogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMiU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuXG4gIC5iYW5uZXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBwYWRkaW5nOiAxN3B4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4uY2FsbC1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmNhbGwtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxODgzODtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmNhbGwtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY3RhLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdGEtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY3RhLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi50aHVtYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4udGh1bWIubGVmdCB7XG4gIGxlZnQ6IC01MHB4O1xufVxuXG4udGh1bWIucmlnaHQge1xuICByaWdodDogLTUwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.ts":
  /*!************************************!*\
    !*** ./src/app/pages/home/home.ts ***!
    \************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var swiper_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! swiper/angular */
    "./node_modules/swiper/angular/fesm2015/swiper_angular.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(platform, _ProductService, http, Router, toastController, _UserData, callNumber, ngZone, menuCtrl) {
        _classCallCheck(this, HomePage);

        this.platform = platform;
        this._ProductService = _ProductService;
        this.http = http;
        this.Router = Router;
        this.toastController = toastController;
        this._UserData = _UserData;
        this.callNumber = callNumber;
        this.ngZone = ngZone;
        this.menuCtrl = menuCtrl;
        this.slides$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](['']);
        this.isHeaderShow = false;
        this.productList = [];
        this.isSearchEnable = false;
        this.isDataLoaded = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + "/";
        this.queryPayload = {
          brand: '',
          car_name: ''
        };
        this.productDetialSlider = {
          initialSlide: 0,
          speed: 400,
          spaceBetween: 0,
          pagination: true,
          pager: true,
          slidesPerView: 1,
          slideShadows: true
        };
        this.slideOpts = {
          initialSlide: 0,
          speed: 700,
          spaceBetween: 20,
          pagination: true,
          slidesPerView: 2,
          centeredSlides: false
        };
        this.sliderConfig = {
          slidesPerView: 5,
          centeredSlides: false
        };
        this.sliderFeatured = {
          slidesPerView: 1.2,
          centeredSlides: false
        };
        this.sliderNearyou = {
          slidesPerView: 1.9,
          centeredSlides: false
        };
        this.spacielProducts = {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false
        };
        this.categories = [];
        this.SubCategoryList = [];
        this.recomented = [];
        this.popular = [];
        this.customPopoverOptions = {
          header: "Pizza Toppings",
          subHeader: "Select your toppings",
          message: "$1.00 per topping",
          translucent: true
        };
        this.refershDefault = {
          target: {
            complete: function complete() {
              return true;
            }
          }
        };
        this.InsList = [];
        this.hotDealList = []; // console.log(numDifferentiation(-50000000))

        this.recomendedList = [];
        this.searchproductList = []; //Configuration for each Slider

        this.slideOptsOne = {
          initialSlide: 0,
          slidesPerView: 1,
          autoplay: true
        };
        this.slideOptsTwo = {
          initialSlide: 1,
          // slidesPerView: 2,
          loop: true,
          centeredSlides: true,
          spaceBetween: 20
        };
        this.slideOptsThree = {
          initialSlide: 0,
          slidesPerView: 2
        };
        this.service = {
          new_car: true,
          get_insurance: false,
          test_drive: false,
          store_details: false
        };
        this._editData = {
          logo: ''
        };
        this.audiIcon = "../../../../../assets/img/brand/audi.svg";
        this.bmwIcon = "../../../../../assets/img/brand/bmw.svg";
        this.hondaIcon = "../../../../../assets/img/brand/honda.svg";
        this.hyundaiIcon = "../../../../../assets/img/brand/hyundai.svg";
        this.kiaIcon = "../../../../../assets/img/brand/kia.svg";
        this.marutiIcon = "../../../../../assets/img/brand/maruti.svg";
        this.tataIcon = "../../../../../assets/img/brand/tata.svg";
        this.toyotaIcon = "../../../../../assets/img/brand/toyota.svg";
        this.othersIcon = "../../../../../assets/img/brand/others.png";
        this.nissianIcon = "../../../../../assets/img/brand/nissan.jpg";
        this.renaultIcon = "../../../../../assets/img/brand/renault.svg";
        this.volkswagenIcon = "../../../../../assets/img/brand/volkswagen.svg";
        this.mgIcon = "../../../../../assets/img/brand/mg.png";
        this.fordIcon = "../../../../../assets/img/brand/ford.svg";
        this.mahindraIcon = "../../../../../assets/img/brand/mahindra.jpg";

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

        this.sliderOne = {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [{
            id: 995
          }, {
            id: 925
          }, {
            id: 940
          }, {
            id: 943
          }, {
            id: 944
          }]
        }; //Item object for Food

        this.sliderTwo = {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [{
            id: 324
          }, {
            id: 321
          }, {
            id: 435
          }, {
            id: 524
          }, {
            id: 235
          }]
        }; //Item object for Fashion

        this.sliderThree = {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [{
            id: 643
          }, {
            id: 532
          }, {
            id: 232
          }, {
            id: 874
          }, {
            id: 193
          }]
        };
        this.slideOpts.width = this.platform.is("mobile") ? this.platform.width() - 32 : this.platform.width() / 2 - 32;
        this.slideOpts.height = this.platform.height() / 3;
      }

      _createClass2(HomePage, [{
        key: "saveQueryData",
        value: function saveQueryData(service) {
          var _this10 = this;

          // console.log(service,"-->")
          var payload = {
            name: this.userData.fullName,
            mobile: this.userData.mobile,
            city: this.userData.city,
            title: "Need " + service,
            description: this.queryPayload.brand + ' - ' + this.queryPayload.car_name,
            ownerId: ""
          }; // console.log(payload,"payload")

          if (payload.name && payload.city && payload.mobile && payload.title) {
            this._ProductService.saveQuery(payload).subscribe(function (data) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.queryPayload = {
                          brand: "",
                          car_name: ""
                        };
                        _context.next = 3;
                        return this.toastController.create({
                          message: "Thanks You for your interest , Our team will call you soon",
                          duration: 3000,
                          color: 'success',
                          position: "bottom",
                          animated: true
                        });

                      case 3:
                        toast = _context.sent;
                        toast.present();
                        setTimeout(function () {// this.rou.navigateByUrl('/home');
                        }, 2000);

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }
      }, {
        key: "getCustomerProfile",
        value: function getCustomerProfile() {
          var _this11 = this;

          this._UserData.getCustomerDetails(localStorage.getItem("userId")).subscribe(function (data) {
            _this11.userData = data; // console.log(this.userData,"this.userData");
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem("AuthToken")) {
            this.registerTempUser();
          } else {
            this.getHotDealProducts();
            this.getProductList();
            this.iniciate();
            this.getCustomerProfile();
          }
        }
      }, {
        key: "callme",
        value: function callme(mobile) {
          this.callNumber.callNumber(mobile, true).then(function (res) {
            return console.log('Launched dialer!', res);
          })["catch"](function (err) {
            return console.log('Error launching dialer', err);
          });
        }
      }, {
        key: "registerTempUser",
        value: function registerTempUser() {
          var _this12 = this;

          var tempName = Math.random();
          tempName = tempName.toString().slice(5, 10);
          var payload = {
            name: 'Guest' + tempName,
            fullName: 'Guest' + tempName,
            email: 'guest' + tempName + '@a2zcar.in',
            password: 'guest',
            mobile: '1000000000'
          };

          this._ProductService.registerTempUser(payload).subscribe(function (result) {
            console.log("00 result", result);
            console.log("_id", result.customerDetails._id);
            localStorage.setItem("userId", result.customerDetails._id);
            localStorage.setItem("AuthToken", result.authToken);
            console.log(localStorage.getItem('AuthToken'));

            _this12.getProductList();

            _this12.iniciate();

            _this12.getCustomerProfile();
          });
        }
      }, {
        key: "onScroll",
        value: function onScroll(data) {
          var scrollPoint = data.detail.scrollTop || 0;

          if (scrollPoint > 300) {
            this.isHeaderShow = true;
          }

          if (scrollPoint < 300) {
            this.isHeaderShow = false;
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {// this.getProductList();
        }
      }, {
        key: "iniciate",
        value: function iniciate() {
          // this.getProductList();
          this.shopName = localStorage.getItem("shopName");
          this.images = [{
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbM3J3KEuDiQ0LQ8oobuCwG1Z0BwCRB35L5u85DqvfwwYW0jgx&usqp=CAU"
          }, {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCJe9XR55Dm3Lp9aoF1E-wW6n6nbBc-yluHDpS38tUE1tHydTe&usqp=CAU"
          }, {
            src: "https://www.vgeteasy.com/wp-content/uploads/2019/09/maxresdefault.jpg"
          }, {
            src: "https://img-global.cpcdn.com/recipes/10685c2e7fd4ed36/1200x630cq70/photo.jpg"
          }];
          this.getSubCategoryList();
        }
      }, {
        key: "refershpage",
        value: function refershpage() {
          var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.refershDefault;
          this.iniciate();

          if (event) {
            setTimeout(function () {
              console.log("Async operation has ended");
              event.target.complete();
            }, 1500);
          }
        }
      }, {
        key: "getSubCategoryList",
        value: function getSubCategoryList() {
          var _this13 = this;

          this._ProductService.listSubCategory().subscribe(function (data) {
            _this13.SubCategoryList = data.SubCategoryList;

            _this13.getInsuranceList();
          });
        }
      }, {
        key: "getInsuranceList",
        value: function getInsuranceList() {
          var _this14 = this;

          this._ProductService.listIns().subscribe(function (data) {
            _this14.InsList = data.response;
          });
        }
      }, {
        key: "getStoreList",
        value: function getStoreList() {
          var _this15 = this;

          this._ProductService.fetchStoreList().subscribe(function (data) {
            _this15.storeList = data.storeList;
            localStorage.setItem("shopID", _this15.storeList.length ? _this15.storeList[0]._id : null);

            _this15.getProductList(); // console.log(this.storeList);

          });
        }
      }, {
        key: "getProductList",
        value: function getProductList() {
          var _this16 = this;

          var shopId = '5f6f25f41f46bf3f11660246';

          this._ProductService.getProductList(shopId).subscribe(function (data) {
            // this.productList = data;
            _this16.productList = data.filter(function (el) {
              return el.addCustomeFeatures.type !== 'bike';
            });
            _this16.isDataLoaded = true; // this.productList = this.productList.map((obj) => ({
            //   ...obj,
            //   QTY: 0,
            // }));

            _this16.productList.forEach(function (product) {
              product.price = _this16.convertIntoLakh(product.price);
            });

            _this16.getRecommendedProductList(); // console.log(this.productList);

          });
        }
      }, {
        key: "getHotDealProducts",
        value: function getHotDealProducts() {
          var _this17 = this;

          this._ProductService.getHotDealProductList().subscribe(function (data) {
            _this17.hotDealList = data;

            _this17.hotDealList.forEach(function (list) {
              list.productDescription = list.productDescription ? list.productDescription.split(",") : "";
            }); // debugger

          });
        }
      }, {
        key: "onSlideChange",
        value: function onSlideChange(swiper) {
          var _this18 = this;

          if (swiper.isEnd) {
            // all swiper events are run outside of ngzone, so use ngzone.run or detectChanges to update the view.
            this.ngZone.run(function () {
              _this18.hotDealList = [].concat(_toConsumableArray(_this18.hotDealList), ["added ".concat(_this18.hotDealList.length - 1)]);
            });
            console.log(this.hotDealList);
          }
        }
      }, {
        key: "convertIntoLakh",
        value: function convertIntoLakh(value) {
          var arr = value.split("-");
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
        key: "getRecommendedProductList",
        value: function getRecommendedProductList() {
          this.recomendedList = this.productList.filter(function (list) {
            return list.isRecommended == true;
          }); // console.log(this.recomendedList);
        } //Move to Next slide

      }, {
        key: "slideNext",
        value: function slideNext(object, slideView) {
          var _this19 = this;

          slideView.slideNext(500).then(function () {
            _this19.checkIfNavDisabled(object, slideView);
          });
        } //Move to previous slide

      }, {
        key: "slidePrev",
        value: function slidePrev(object, slideView) {
          var _this20 = this;

          slideView.slidePrev(500).then(function () {
            _this20.checkIfNavDisabled(object, slideView);
          });
        } //Method called when slide is changed by drag or navigation

      }, {
        key: "SlideDidChange",
        value: function SlideDidChange(object, slideView) {
          this.checkIfNavDisabled(object, slideView);
        } //Call methods to check if slide is first or last to enable disbale navigation

      }, {
        key: "checkIfNavDisabled",
        value: function checkIfNavDisabled(object, slideView) {
          this.checkisBeginning(object, slideView);
          this.checkisEnd(object, slideView);
        }
      }, {
        key: "checkisBeginning",
        value: function checkisBeginning(object, slideView) {
          slideView.isBeginning().then(function (istrue) {
            object.isBeginningSlide = istrue;
          });
        }
      }, {
        key: "checkisEnd",
        value: function checkisEnd(object, slideView) {
          slideView.isEnd().then(function (istrue) {
            object.isEndSlide = istrue;
          });
        }
      }, {
        key: "getColor",
        value: function getColor(index, rating) {
          if (this.isAboveRating(index, rating)) {
            return "grey";
          }

          return "gold";
        }
      }, {
        key: "isAboveRating",
        value: function isAboveRating(index, rating) {
          return index > rating;
        }
      }, {
        key: "openService",
        value: function openService(_service) {
          this.resetServiceSelection();
          this.service[_service] = true;
        }
      }, {
        key: "resetServiceSelection",
        value: function resetServiceSelection() {
          this.service.new_car = false;
          this.service.get_insurance = false;
          this.service.test_drive = false;
          this.service.store_details = false;
        }
      }, {
        key: "selectImage",
        value: function selectImage(value) {
          // alert("called")
          this.images = [];
          this.images = [this.selectIcon(value)];
        }
      }, {
        key: "selectIcon",
        value: function selectIcon(icon) {
          switch (icon) {
            case "AUDI":
              return this.audiIcon;

            case "BMW":
              return this.bmwIcon;

            case "HONDA":
              return this.hondaIcon;

            case "HYUNDAI":
              return this.hyundaiIcon;

            case "KIA":
              return this.kiaIcon;

            case "MARUTI":
              return this.marutiIcon;

            case "TATA":
              return this.tataIcon;

            case "TOYOTA":
              return this.toyotaIcon;

            case "OTHERS":
              return this.othersIcon;

            case "FORD":
              return this.fordIcon;

            case "MAHINDRA":
              return this.mahindraIcon;

            case "NISSAN":
              return this.nissianIcon;

            case "VOLKSWAGEN":
              return this.volkswagenIcon;

            case "RENAULT":
              return this.renaultIcon;

            case "MG":
              return this.mgIcon;
          }
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var id;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    id = 'main-content';
                    _context2.t0 = console;
                    _context2.next = 4;
                    return this.menuCtrl.isOpen(id);

                  case 4:
                    _context2.t1 = _context2.sent;

                    _context2.t0.log.call(_context2.t0, _context2.t1);

                    _context2.next = 8;
                    return this.menuCtrl.open(id);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('swiperRef', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", swiper_angular__WEBPACK_IMPORTED_MODULE_10__["SwiperComponent"])], HomePage.prototype, "swiperRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("slideWithNav", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])], HomePage.prototype, "slideWithNav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("slideWithNav2", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])], HomePage.prototype, "slideWithNav2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("slideWithNav3", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])], HomePage.prototype, "slideWithNav3", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "page-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.scss */
      "./src/app/pages/home/home.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _providers_product_services__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_7__["UserData"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map