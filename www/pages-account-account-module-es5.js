function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
  /***/
  "./node_modules/@ionic-native/camera/ngx/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
    \********************************************************/

  /*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */

  /***/
  function node_modulesIonicNativeCameraNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationType", function () {
      return DestinationType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncodingType", function () {
      return EncodingType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaType", function () {
      return MediaType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PictureSourceType", function () {
      return PictureSourceType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function () {
      return PopoverArrowDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Camera", function () {
      return Camera;
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

    var DestinationType;

    (function (DestinationType) {
      DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
      DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
      DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
    })(DestinationType || (DestinationType = {}));

    var EncodingType;

    (function (EncodingType) {
      EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
      EncodingType[EncodingType["PNG"] = 1] = "PNG";
    })(EncodingType || (EncodingType = {}));

    var MediaType;

    (function (MediaType) {
      MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
      MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
      MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
    })(MediaType || (MediaType = {}));

    var PictureSourceType;

    (function (PictureSourceType) {
      PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
      PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
      PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
    })(PictureSourceType || (PictureSourceType = {}));

    var PopoverArrowDirection;

    (function (PopoverArrowDirection) {
      PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
      PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
    })(PopoverArrowDirection || (PopoverArrowDirection = {}));

    var Direction;

    (function (Direction) {
      Direction[Direction["BACK"] = 0] = "BACK";
      Direction[Direction["FRONT"] = 1] = "FRONT";
    })(Direction || (Direction = {}));

    var Camera =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);

      function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */


        _this.DestinationType = {
          /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
          DATA_URL: 0,

          /** Return file uri (content://media/external/images/media/2 for Android) */
          FILE_URI: 1,

          /** Return native uri (eg. asset-library://... for iOS) */
          NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */

        _this.EncodingType = {
          /** Return JPEG encoded image */
          JPEG: 0,

          /** Return PNG encoded image */
          PNG: 1
        };
        /**
         * Convenience constant
         */

        _this.MediaType = {
          /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
          PICTURE: 0,

          /** Allow selection of video only, ONLY RETURNS URL */
          VIDEO: 1,

          /** Allow selection from all media types */
          ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */

        _this.PictureSourceType = {
          /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
          PHOTOLIBRARY: 0,

          /** Take picture from camera */
          CAMERA: 1,

          /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
          SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */

        _this.PopoverArrowDirection = {
          ARROW_UP: 1,
          ARROW_DOWN: 2,
          ARROW_LEFT: 4,
          ARROW_RIGHT: 8,
          ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */

        _this.Direction = {
          /** Use the back-facing camera */
          BACK: 0,

          /** Use the front-facing camera */
          FRONT: 1
        };
        return _this;
      }

      Camera.prototype.getPicture = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", {
          "callbackOrder": "reverse"
        }, arguments);
      };

      Camera.prototype.cleanup = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", {
          "platforms": ["iOS"]
        }, arguments);
      };

      Camera.pluginName = "Camera";
      Camera.plugin = "cordova-plugin-camera";
      Camera.pluginRef = "navigator.camera";
      Camera.repo = "https://github.com/apache/cordova-plugin-camera";
      Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
      Camera = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Camera);
      return Camera;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFzRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQS9LbkI7RUErSzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJLFxufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBKUEVHID0gMCxcbiAgUE5HLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYVR5cGUge1xuICBQSUNUVVJFID0gMCxcbiAgVklERU8sXG4gIEFMTE1FRElBLFxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNLFxufVxuXG5leHBvcnQgZW51bSBQb3BvdmVyQXJyb3dEaXJlY3Rpb24ge1xuICBBUlJPV19VUCA9IDEsXG4gIEFSUk9XX0RPV04sXG4gIEFSUk9XX0xFRlQsXG4gIEFSUk9XX1JJR0hULFxuICBBUlJPV19BTlksXG59XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gIEJBQ0sgPSAwLFxuICBGUk9OVCxcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBwcmVtaWVyIGNhbWVyYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUYWtlIGEgcGhvdG8gb3IgY2FwdHVyZSB2aWRlby5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBDYW1lcmEgUGx1Z2luIERvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhKS5cbiAqXG4gKiBbV2FybmluZ10gU2luY2UgSU9TIDEwIHRoZSBjYW1lcmEgcmVxdWlyZXMgcGVybWlzc2lvbnMgdG8gYmUgcGxhY2VkIGluIHlvdXIgY29uZmlnLnhtbCBhZGRcbiAqIGBgYHhtbFxuICogPGNvbmZpZy1maWxlIHBhcmVudD1cIk5TQ2FtZXJhVXNhZ2VEZXNjcmlwdGlvblwiIHBsYXRmb3JtPVwiaW9zXCIgdGFyZ2V0PVwiKi1JbmZvLnBsaXN0XCI+XG4gKiAgPHN0cmluZz5Zb3UgY2FuIHRha2UgcGhvdG9zPC9zdHJpbmc+XG4gKiA8L2NvbmZpZy1maWxlPlxuICogYGBgXG4gKiBpbnNpZGUgb2YgdGhlIDxwbGF0Zm9ybSBuYW1lPSdpb3M+IHNlY3Rpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbWVyYSwgQ2FtZXJhT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FtZXJhL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYW1lcmE6IENhbWVyYSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGNvbnN0IG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgPSB7XG4gKiAgIHF1YWxpdHk6IDEwMCxcbiAqICAgZGVzdGluYXRpb25UeXBlOiB0aGlzLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkksXG4gKiAgIGVuY29kaW5nVHlwZTogdGhpcy5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXG4gKiAgIG1lZGlhVHlwZTogdGhpcy5jYW1lcmEuTWVkaWFUeXBlLlBJQ1RVUkVcbiAqIH1cbiAqXG4gKiB0aGlzLmNhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbnMpLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xuICogIC8vIGltYWdlRGF0YSBpcyBlaXRoZXIgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb3IgYSBmaWxlIFVSSVxuICogIC8vIElmIGl0J3MgYmFzZTY0IChEQVRBX1VSTCk6XG4gKiAgbGV0IGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGltYWdlRGF0YTtcbiAqIH0sIChlcnIpID0+IHtcbiAqICAvLyBIYW5kbGUgZXJyb3JcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2FtZXJhT3B0aW9uc1xuICogQ2FtZXJhUG9wb3Zlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYW1lcmEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY2FtZXJhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRW5jb2RpbmdUeXBlID0ge1xuICAgIC8qKiBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlICovXG4gICAgSlBFRzogMCxcbiAgICAvKiogUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlICovXG4gICAgUE5HOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgTWVkaWFUeXBlID0ge1xuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC4gV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlICovXG4gICAgUElDVFVSRTogMCxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIE9OTFkgUkVUVVJOUyBVUkwgKi9cbiAgICBWSURFTzogMSxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIGZyb20gYWxsIG1lZGlhIHR5cGVzICovXG4gICAgQUxMTUVESUE6IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQb3BvdmVyQXJyb3dEaXJlY3Rpb24gPSB7XG4gICAgQVJST1dfVVA6IDEsXG4gICAgQVJST1dfRE9XTjogMixcbiAgICBBUlJPV19MRUZUOiA0LFxuICAgIEFSUk9XX1JJR0hUOiA4LFxuICAgIEFSUk9XX0FOWTogMTUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBEaXJlY3Rpb24gPSB7XG4gICAgLyoqIFVzZSB0aGUgYmFjay1mYWNpbmcgY2FtZXJhICovXG4gICAgQkFDSzogMCxcbiAgICAvKiogVXNlIHRoZSBmcm9udC1mYWNpbmcgY2FtZXJhICovXG4gICAgRlJPTlQ6IDEsXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldFBpY3R1cmUob3B0aW9ucz86IENhbWVyYU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW50ZXJtZWRpYXRlIGltYWdlIGZpbGVzIHRoYXQgYXJlIGtlcHQgaW4gdGVtcG9yYXJ5IHN0b3JhZ2UgYWZ0ZXIgY2FsbGluZyBjYW1lcmEuZ2V0UGljdHVyZS5cbiAgICogQXBwbGllcyBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIENhbWVyYS5zb3VyY2VUeXBlIGVxdWFscyBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBIGFuZCB0aGUgQ2FtZXJhLmRlc3RpbmF0aW9uVHlwZSBlcXVhbHMgQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGNsZWFudXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header\n  *ngIf=\"isHeaderShow || !isDataLoaded\"\n  class=\"animate__animated animate__fadeInDown\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 27px\" />\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 15px\"> a 2 z Car </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/search/cart']\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"search\"\n          style=\"\n            color: white;\n            width: 55px;\n            min-width: -webkit-fill-available;\n          \"></ion-icon>\n      </ion-button>\n      <ion-button [routerLink]=\"['/cart']\">\n        <ion-icon\n          class=\"animate__animated\"\n          slot=\"icon-only\"\n          name=\"cart\"\n          style=\"\n            color: white;\n            width: 55px;\n            min-width: -webkit-fill-available;\n          \"></ion-icon>\n        <ion-badge\n          style=\"margin-top: -8px; color: orange; background: transparent\"\n          *ngIf=\"cartCount != 0\"\n          >{{cartCount}}</ion-badge\n        >\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-searchbar spellcheck=\"true\" routerLink=\"/search/home\"></ion-searchbar> -->\n</ion-header>\n\n<ion-content\n  class=\"content-main\"\n  *ngIf=\"isDataLoaded; else skeleton\"\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"onScroll($event)\">\n  <div class=\"header-fixed\" *ngIf=\"!isHeaderShow\">\n    <div class=\"top-left\">\n      <ion-buttons slot=\"start\">\n        <!-- <ion-menu-button></ion-menu-button> -->\n        <ion-menu-button>\n          <img src=\"../../../assets/img/menu-bar.png\" style=\"width: 22px\" />\n        </ion-menu-button>\n      </ion-buttons>\n    </div>\n    <div class=\"top-right\" style=\"font-size: 20px\">\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/search/cart\">\n          <ion-icon name=\"search\" style=\"color: white\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </div>\n  </div>\n  <div class=\"viewProfile\">\n    <ion-card color=\"warning\">\n      <ion-card-header style=\"margin: 0px 15px\">\n        <div class=\"pers-info\">\n          <div>\n            <ion-card-title *ngIf=\"userData\">\n              {{userData.fullName}}</ion-card-title\n            >\n            <!-- <ion-icon (click)=\"openEditProfileModal()\" style=\"float: right;margin-top: -30px;font-size: 30px;\"\n              name=\"create-outline\"></ion-icon> -->\n            <ion-card-title *ngIf=\"!userData.fullName\"> User</ion-card-title>\n            <div class=\"prof-cd\">\n              <!-- <p *ngIf=\"userData.email\">{{userData.email}}</p> -->\n              <p *ngIf=\"userData.mobile\">{{userData.mobile}}</p>\n            </div>\n          </div>\n          <ion-thumbnail>\n            <img\n              class=\"profile-img\"\n              *ngIf=\"userData.CustomerImage\"\n              src=\"{{userData.CustomerImage}}\" />\n            <!-- <img *ngIf=\"!userData.CustomerImage\"\n                src=\"https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png\"> -->\n            <img\n              class=\"profile-img\"\n              *ngIf=\"!userData.CustomerImage\"\n              src=\"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png\" />\n          </ion-thumbnail>\n        </div>\n        <div class=\"profile-info-tebs\">\n          <ul class=\"clearfix\">\n            <li class=\"active\"><a href=\"\">Personal</a></li>\n          </ul>\n        </div>\n      </ion-card-header>\n    </ion-card>\n  </div>\n  <div class=\"sm-list\">\n    <ion-list class=\"account-card\">\n      <div class=\"user-name\">\n        <h4>Personal Details</h4>\n        <ion-icon name=\"person-outline\"></ion-icon>\n      </div>\n      <div class=\"user-other-info\">\n        <div class=\"user-other-item clearfix\">\n          <div class=\"section-left\">\n            <span>ID</span>\n            <p>{{userData._id | slice : 0:8}}</p>\n          </div>\n          <div class=\"section-right\">\n            <span>Name</span>\n            <p style=\"text-transform: capitalize\">{{userData.fullName}}</p>\n          </div>\n        </div>\n        <div class=\"user-other-item clearfix\">\n          <div class=\"section-left\">\n            <span>City</span>\n            <p *ngIf=\"userData.city\">{{userData.city }}</p>\n            <p *ngIf=\"!userData.city\">-</p>\n          </div>\n          <div class=\"section-right\">\n            <span>Date of Birth</span>\n            <p *ngIf=\"userData.dob\">{{userData.dob | date :'dd-MMM-yyyy'}}</p>\n            <p *ngIf=\"!userData.dob\">-</p>\n          </div>\n        </div>\n        <div class=\"user-other-item clearfix\">\n          <div class=\"section-left\">\n            <span>Gender</span>\n            <p>{{userData.gender}}</p>\n          </div>\n          <div class=\"section-right\">\n            <span>MOBILE</span>\n            <p>{{userData.mobile}}</p>\n          </div>\n        </div>\n        <div class=\"user-other-item clearfix\">\n          <div class=\"section-left\">\n            <span>Email</span>\n            <p *ngIf=\"userData.email\">{{userData.email}}</p>\n            <p *ngIf=\"!userData.email\">-</p>\n          </div>\n          <!-- <div class=\"section-right\">\n            <span></span>\n            <p><a (click)=\"openEditProfileModal()\" style=\"color: rgb(121, 121, 129);\">Editar</a></p>\n          </div> -->\n        </div>\n      </div>\n    </ion-list>\n    <ion-list class=\"account-card\">\n      <div class=\"user-name\">\n        <h4>Action</h4>\n        <ion-icon name=\"folder-outline\"></ion-icon>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)=\"openEditProfileModal()\" size=\"6\">\n            <div class=\"profile-items\">\n              <ion-icon class=\"action-icon\" name=\"create-outline\"></ion-icon>\n              <ion-label>Edit Profile</ion-label>\n            </div>\n          </ion-col>\n          <ion-col [routerLink]=\"['/manage-address']\" size=\"6\">\n            <div class=\"profile-items\">\n              <ion-icon class=\"action-icon\" name=\"location-outline\"></ion-icon>\n              <ion-label>Manage Address</ion-label>\n            </div>\n          </ion-col>\n          <!-- <ion-col [routerLink]=\"['/orders']\" size=\"6\">\n            <div class=\"profile-items\">\n              <ion-icon class=\"action-icon\" name=\"list-outline\"></ion-icon>\n              <ion-label>Your Orders</ion-label>\n            </div>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n          <!-- <ion-col [routerLink]=\"['/cart']\" size=\"6\">\n            <div class=\"profile-items\">\n              <ion-icon class=\"action-icon\" name=\"cart-outline\"></ion-icon>\n              <ion-label>Your Cart</ion-label>\n            </div>\n          </ion-col> -->\n          <ion-col [routerLink]=\"['/wishList']\" size=\"6\">\n            <div class=\"profile-items\">\n              <ion-icon class=\"action-icon\" name=\"heart-outline\"></ion-icon>\n              <ion-label>Favourite</ion-label>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <!-- <ion-col [routerLink]=\"['/manage-address']\" size=\"6\">\n            <div class=\"profile-items\">\n              <ion-icon class=\"action-icon\" name=\"location-outline\"></ion-icon>\n              <ion-label>Manage Address</ion-label>\n            </div>\n          </ion-col> -->\n          <!-- <ion-col [routerLink]=\"['/wallet']\" size=\"6\">\n            <div class=\"profile-items\">\n              <ion-icon class=\"action-icon\" name=\"wallet-outline\"></ion-icon>\n              <ion-label>Wallet</ion-label>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n      <!-- <ion-item (click)=\"openEditProfileModal()\">\n        <ion-label>Edit Profile</ion-label>\n      </ion-item> -->\n      <!-- <ion-item [routerLink]=\"['/']\">\n        <ion-label>Login & Security</ion-label>\n      </ion-item> -->\n      <!-- <ion-item [routerLink]=\"['/orders']\">\n        <ion-label>Your Orders</ion-label>\n      </ion-item>\n      <ion-item [routerLink]=\"['/cart']\">\n        <ion-label>Your Cart</ion-label>\n      </ion-item>\n      <ion-item [routerLink]=\"['/wishList']\">\n        <ion-label>Your WishList</ion-label>\n      </ion-item>\n      <ion-item [routerLink]=\"['/manage-address']\">\n        <ion-label>Manage Address</ion-label>\n      </ion-item> -->\n      <!-- <ion-item>\n        <ion-label>Loyality Card & CashBacks</ion-label>\n      </ion-item> -->\n      <!-- <ion-item [routerLink]=\"['/review']\">\n        <ion-label>Review Your Orders</ion-label>\n      </ion-item> -->\n      <!-- <ion-item [routerLink]=\"['/complaint']\">\n        <ion-label>Complaint your Order</ion-label>\n      </ion-item> -->\n    </ion-list>\n  </div>\n</ion-content>\n\n<ng-template #skeleton>\n  <!-- <ion-list> -->\n\n  <ion-item *ngFor=\"let item of [1, 2, 3, 4, 5,6,7,8,9]\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n\n  <!-- </ion-list> -->\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/modal/edit-profile/editProfile.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/modal/edit-profile/editProfile.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountModalEditProfileEditProfileHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <div class=\"edit-model-header\">\n      <ion-buttons slot=\"start\">\n        <ion-button style=\"margin-top: 8px;\">\n          <!-- <ion-icon name=\"arrow-back-outline\" style=\"color: #fff;\"></ion-icon> -->\n          <ion-back-button defaultHref=\"account\" (click)=\"closeModal()\"></ion-back-button>\n        </ion-button>\n        <!-- <a href=\"/home\" style=\"color: #fff;font-size: 20px;padding: 6px;\"><i class=\"fa fa-chevron-left\"></i></a> -->\n        <ion-title>Edit Profile</ion-title>\n      </ion-buttons>\n    </div>\n    <form class=\"profile-popup\" [formGroup]=\"editProfileForm\" (ngSubmit)=\"submit(editProfileForm)\">\n        <ion-grid style=\"padding: 0px 20px;\">\n            <ion-row>\n                <ion-item class=\"pb-40\" style=\"--inner-border-width: 0 0 0px 0;\">\n                    <div class=\"profile-img\">\n                        <img *ngIf=\"userData.CustomerImage && images.length == 0\" src=\"{{userData.CustomerImage}}\">\n                        <img *ngIf=\"!userData.CustomerImage && images.length == 0\" src=\"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png\">\n                        <img *ngIf=\"images.length > 0\" [src]=\"images[0]\">\n                        <ion-icon class=\"upload-pic\" (click)=\"selectImagefromMobille()\" name=\"camera\"></ion-icon>\n                        <!-- <a href=\"javascript:void(0);\"  name=\"cloud-upload-sharp\">\n                            <i class=\"fa fa-camera\"></i></a> -->\n                    </div>\n                </ion-item>\n                <ion-row class=\"profile-info-row\">\n                    <ion-col size=\"4\">\n                        <ion-label position=\"floating\" style=\"font-size: 16px;color: #a8a7a7;transform: inherit;margin-top: 10px;\">Full Name</ion-label>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                        <ion-input formControlName=\"fullName\" style=\"text-align: right;\"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"profile-info-row\">\n                    <ion-col size=\"4\">\n                        <ion-label position=\"floating\" style=\"font-size: 16px;color: #a8a7a7;transform: inherit;margin-top: 10px;\">Email</ion-label>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                        <ion-input formControlName=\"email\" placeholder=\"Enter your email\" style=\"text-align: right;\"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"profile-info-row\">\n                    <ion-col size=\"4\">\n                        <ion-label position=\"floating\" style=\"font-size: 16px;color: #a8a7a7;transform: inherit;margin-top: 10px;\">Mobile</ion-label>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                        <ion-input formControlName=\"mobile\" style=\"text-align: right;\"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"profile-info-row\">\n                    <ion-col size=\"6\">\n                        <ion-label position=\"floating\" style=\"font-size: 16px;color: #a8a7a7;transform: inherit;margin-top: 10px;\">Whare do you live ?</ion-label>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-input formControlName=\"city\" style=\"text-align: right;\"></ion-input>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"profile-info-row\">\n                    <ion-col size=\"6\">\n                        <ion-label position=\"floating\" style=\"font-size: 16px;color: #a8a7a7;transform: inherit;margin-top: 10px;\">Date of Birth</ion-label>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-datetime formControlName=\"dob\" style=\"text-align: right;\"></ion-datetime>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"profile-info-row\">\n                    <ion-col size=\"3\">\n                        <ion-label position=\"floating\" style=\"font-size: 16px;color: #a8a7a7;transform: inherit;margin-top: 10px;\">Gender</ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-row>\n                            <ion-col size=\"6\" style=\"text-align: right;\">\n                                <!-- <input type=\"radio\" formControlName=\"gender\" name=\"gander\" value=\"male\" style=\"margin:5px; display: inline-block;vertical-align: middle;\"> -->\n                                <input type=\"radio\" value=\"Male\" name=\"gender\" formControlName=\"gender\" style=\"margin:5px; display: inline-block;vertical-align: middle;\">Male\n                            </ion-col>\n                            <ion-col size=\"6\" style=\"text-align: right;\">\n                                <!-- <input type=\"radio\" formControlName=\"gender\" name=\"gander\" value=\"female\" style=\"margin:5px; display: inline-block;vertical-align: middle;\"> -->\n                                <input type=\"radio\" value=\"Female\" name=\"gender\" formControlName=\"gender\" style=\"margin:5px; display: inline-block;vertical-align: middle;\">Female\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n\n                <!-- <ion-grid *ngIf=\"images.length !== 0\">\n\n                    <ion-row>\n                        <ion-col  *ngFor=\"let url of images\">\n                            <img src=\"{{url}}\" style=\"height: 50px; width: 50px;\">\n                        </ion-col>\n                    </ion-row>\n                </ion-grid> -->\n            </ion-row>\n            <br>\n            <br>\n            <ion-button id=\"edit-form\" class=\"has-footer\" expand=\"full\" type=\"submit\">Save Changes</ion-button>\n        </ion-grid>\n    </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/account/account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/account/account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AccountPageRoutingModule */

  /***/
  function srcAppPagesAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
      return AccountPageRoutingModule;
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


    var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account */
    "./src/app/pages/account/account.ts");

    var routes = [{
      path: '',
      component: _account__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }];

    var AccountPageRoutingModule = function AccountPageRoutingModule() {
      _classCallCheck(this, AccountPageRoutingModule);
    };

    AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.module.ts ***!
    \*************************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppPagesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _modal_edit_profile_editProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal/edit-profile/editProfile */
    "./src/app/pages/account/modal/edit-profile/editProfile.ts");
    /* harmony import */


    var _account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account */
    "./src/app/pages/account/account.ts");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/pages/account/account-routing.module.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var ionic_image_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ionic-image-loader */
    "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");

    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_7__["AccountPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ionic_image_loader__WEBPACK_IMPORTED_MODULE_10__["IonicImageLoader"]],
      declarations: [_account__WEBPACK_IMPORTED_MODULE_6__["AccountPage"], _modal_edit_profile_editProfile__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]],
      providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"]],
      entryComponents: [_modal_edit_profile_editProfile__WEBPACK_IMPORTED_MODULE_5__["EditProfilePage"]]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/account/account.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAccountScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-img {\n  max-width: 100px;\n  border-radius: 50%;\n  width: 100%;\n  height: 100px;\n}\n\n.viewProfile {\n  height: 230px;\n  width: auto;\n  background: var(--ion-profile-bgcolor);\n}\n\n.viewProfile ion-card {\n  margin: 0;\n  box-shadow: none;\n  background-color: transparent;\n}\n\n.viewProfile ion-card ion-card-header .pers-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 42px;\n}\n\n.viewProfile ion-card ion-card-header .pers-info ion-thumbnail {\n  width: auto;\n  height: auto;\n}\n\n.viewProfile ion-card ion-card-header .pers-info ion-card-title {\n  font-size: 30px;\n  color: #ffffff !important;\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\n.viewProfile ion-card ion-card-header .pers-info .prof-cd p {\n  margin: 0 0 5px 0;\n  font-size: 14px;\n  color: #fff;\n}\n\nion-list {\n  margin: -30px 30px 0 30px !important;\n  box-shadow: 0px 0px 10px #e6dcdc;\n  border-radius: 8px;\n  padding-bottom: 15px;\n  padding-top: 0;\n}\n\nion-list ion-item.item {\n  padding-right: 18px;\n}\n\n.sm-list.sml-2 ion-list {\n  margin: 30px 30px 30px 30px !important;\n}\n\n.sm-list h4 {\n  padding-left: 14px;\n  font-weight: 500;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 15px;\n}\n\nion-list.account-card {\n  margin-bottom: 80px !important;\n}\n\n@media (min-width: 992px) {\n  .sm-list {\n    display: flex;\n    justify-content: center;\n  }\n  .sm-list ion-list {\n    max-width: 500px;\n    width: 100%;\n  }\n}\n\n.content-main .sm-list {\n  position: relative;\n  z-index: 1;\n}\n\n.profile-items {\n  text-align: center;\n  padding: 10px;\n}\n\n.profile-items svg {\n  height: 40px;\n  width: 100%;\n  fill: var(--ion-text-color);\n}\n\n.profile-items svg path {\n  color: var(--ion-text-color);\n}\n\n.profile-items ion-label {\n  margin-top: 10px;\n  display: block;\n}\n\n.user-name {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0px;\n  border-bottom: 1px solid #ccc;\n  margin: 0px 20px;\n}\n\n.user-name h4 {\n  border: 0px;\n  margin: 0px;\n  padding: 0px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.user-name i {\n  color: #ccc;\n  font-size: 18px;\n}\n\n.user-other-item {\n  padding: 10px 15px;\n}\n\n.clearfix:after {\n  content: \"\";\n  display: block;\n  clear: both;\n  overflow: hidden;\n}\n\n.user-other-item .section-left {\n  float: left;\n}\n\n.user-other-item .section-right {\n  float: right;\n}\n\n.user-other-item .section-left span,\n.user-other-item .section-right span {\n  display: block;\n  font-size: 12px;\n  color: #ccc;\n}\n\n.user-other-item .section-left p,\n.user-other-item .section-right p {\n  margin: 0px;\n}\n\n.user-other-item .section-right p a {\n  display: block;\n  margin-top: 18px;\n  text-decoration: none;\n}\n\n.header-fixed {\n  position: fixed;\n  width: 100%;\n  z-index: 9;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 15px;\n}\n\n.top-left {\n  color: white;\n  font-weight: bolder;\n}\n\n/* Top right text */\n\n.top-right {\n  color: white;\n  font-weight: bolder;\n  display: flex;\n}\n\n.profile-info-tebs ul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.profile-info-tebs ul li {\n  display: inline-block;\n}\n\n.profile-info-tebs ul li a {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  padding-bottom: 10px;\n  border-bottom: 3px solid transparent;\n}\n\n.profile-info-tebs ul li.active a {\n  border-bottom-color: #fff;\n}\n\n.action-icon {\n  font-size: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUNBRjs7QURDRTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VWOztBREFRO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0VWOztBRENVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NaOztBRE1BO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FESUU7RUFDRSxtQkFBQTtBQ0ZKOztBRE1BO0VBQ0Usc0NBQUE7QUNIRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FDRkY7O0FES0E7RUFDRSw4QkFBQTtBQ0ZGOztBRElBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7RUNERjtFREVFO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VDQUo7QUFDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw0QkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSxXQUFBO0FDUUY7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FEUEE7O0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDVUY7O0FEUkE7O0VBRUUsV0FBQTtBQ1dGOztBRFRBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNZRjs7QURWQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDYUY7O0FEWEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNjRjs7QURYQSxtQkFBQTs7QUFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNjRjs7QURYQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNjRjs7QURaQTtFQUNFLHFCQUFBO0FDZUY7O0FEYkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQ0FBQTtBQ2dCRjs7QURkQTtFQUNFLHlCQUFBO0FDaUJGOztBRGZBO0VBQ0UsZUFBQTtBQ2tCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi52aWV3UHJvZmlsZSB7XG4gIGhlaWdodDogMjMwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tcHJvZmlsZS1iZ2NvbG9yKTtcbiAgaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAucGVycy1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2YtY2Qge1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0IHtcbiAgbWFyZ2luOiAtMzBweCAzMHB4IDAgMzBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2U2ZGNkYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGlvbi1pdGVtLml0ZW0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gIH1cbn1cblxuLnNtLWxpc3Quc21sLTIgaW9uLWxpc3Qge1xuICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDMwcHggIWltcG9ydGFudDtcbn1cbi5zbS1saXN0IGg0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1saXN0LmFjY291bnQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHggIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuc20tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpb24tbGlzdCB7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4uY29udGVudC1tYWluIC5zbS1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLnByb2ZpbGUtaXRlbXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJvZmlsZS1pdGVtcyBzdmcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWxsOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG4ucHJvZmlsZS1pdGVtcyBzdmcgcGF0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG4ucHJvZmlsZS1pdGVtcyBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVzZXItbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuLnVzZXItbmFtZSBoNCB7XG4gIGJvcmRlcjogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udXNlci1uYW1lIGkge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnVzZXItb3RoZXItaXRlbSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udXNlci1vdGhlci1pdGVtIC5zZWN0aW9uLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cbi51c2VyLW90aGVyLWl0ZW0gLnNlY3Rpb24tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4udXNlci1vdGhlci1pdGVtIC5zZWN0aW9uLWxlZnQgc3Bhbixcbi51c2VyLW90aGVyLWl0ZW0gLnNlY3Rpb24tcmlnaHQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjY2NjO1xufVxuLnVzZXItb3RoZXItaXRlbSAuc2VjdGlvbi1sZWZ0IHAsXG4udXNlci1vdGhlci1pdGVtIC5zZWN0aW9uLXJpZ2h0IHAge1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLW90aGVyLWl0ZW0gLnNlY3Rpb24tcmlnaHQgcCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuLnRvcC1sZWZ0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKiBUb3AgcmlnaHQgdGV4dCAqL1xuLnRvcC1yaWdodCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2ZpbGUtaW5mby10ZWJzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5wcm9maWxlLWluZm8tdGVicyB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wcm9maWxlLWluZm8tdGVicyB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucHJvZmlsZS1pbmZvLXRlYnMgdWwgbGkuYWN0aXZlIGEge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xufVxuLmFjdGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MnB4O1xufVxuIiwiLnByb2ZpbGUtaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnZpZXdQcm9maWxlIHtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1wcm9maWxlLWJnY29sb3IpO1xufVxuLnZpZXdQcm9maWxlIGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi52aWV3UHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLnBlcnMtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDJweDtcbn1cbi52aWV3UHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLnBlcnMtaW5mbyBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbi52aWV3UHJvZmlsZSBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLnBlcnMtaW5mbyBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udmlld1Byb2ZpbGUgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIC5wZXJzLWluZm8gLnByb2YtY2QgcCB7XG4gIG1hcmdpbjogMCAwIDVweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbjogLTMwcHggMzBweCAwIDMwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICNlNmRjZGM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG59XG5cbi5zbS1saXN0LnNtbC0yIGlvbi1saXN0IHtcbiAgbWFyZ2luOiAzMHB4IDMwcHggMzBweCAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zbS1saXN0IGg0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1saXN0LmFjY291bnQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zbS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5zbS1saXN0IGlvbi1saXN0IHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGVudC1tYWluIC5zbS1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucHJvZmlsZS1pdGVtcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2ZpbGUtaXRlbXMgc3ZnIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmlsbDogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG4ucHJvZmlsZS1pdGVtcyBzdmcgcGF0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5wcm9maWxlLWl0ZW1zIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXNlci1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbi51c2VyLW5hbWUgaDQge1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udXNlci1uYW1lIGkge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udXNlci1vdGhlci1pdGVtIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi51c2VyLW90aGVyLWl0ZW0gLnNlY3Rpb24tbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udXNlci1vdGhlci1pdGVtIC5zZWN0aW9uLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udXNlci1vdGhlci1pdGVtIC5zZWN0aW9uLWxlZnQgc3Bhbixcbi51c2VyLW90aGVyLWl0ZW0gLnNlY3Rpb24tcmlnaHQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4udXNlci1vdGhlci1pdGVtIC5zZWN0aW9uLWxlZnQgcCxcbi51c2VyLW90aGVyLWl0ZW0gLnNlY3Rpb24tcmlnaHQgcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udXNlci1vdGhlci1pdGVtIC5zZWN0aW9uLXJpZ2h0IHAgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG4udG9wLWxlZnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qIFRvcCByaWdodCB0ZXh0ICovXG4udG9wLXJpZ2h0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZS1pbmZvLXRlYnMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucHJvZmlsZS1pbmZvLXRlYnMgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9maWxlLWluZm8tdGVicyB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5wcm9maWxlLWluZm8tdGVicyB1bCBsaS5hY3RpdmUgYSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG59XG5cbi5hY3Rpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/account/account.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/account/account.ts ***!
    \******************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppPagesAccountAccountTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
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


    var _modal_edit_profile_editProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modal/edit-profile/editProfile */
    "./src/app/pages/account/modal/edit-profile/editProfile.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _providers_product_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/product.services */
    "./src/app/providers/product.services.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var AccountPage = /*#__PURE__*/function () {
      function AccountPage(alertCtrl, router, _UserData, _ProductService, modalController) {
        _classCallCheck(this, AccountPage);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this._UserData = _UserData;
        this._ProductService = _ProductService;
        this.modalController = modalController;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + "/";
        this.isDataLoaded = false;
        this.userData = {
          _id: "",
          email: "",
          mobile: "",
          fullName: "Guest",
          dob: "",
          city: "",
          gender: ""
        };
        this.isHeaderShow = false;
        this.cartCount = 0;
        this.searchproductList = [];
        this.showSearchBox = false;
      }

      _createClass(AccountPage, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "onScroll",
        value: function onScroll(data) {
          // console.log(data.detail.scrollTop,"scrollTop")
          var scrollPoint = data.detail.scrollTop || 0;

          if (scrollPoint > 30) {
            this.isHeaderShow = true;
          }

          if (scrollPoint < 30) {
            this.isHeaderShow = false;
          }
        }
      }, {
        key: "getCartCount",
        value: function getCartCount() {
          var _this2 = this;

          var shopId = localStorage.getItem('shopID');
          var arr = [];

          this._ProductService.cartList(localStorage.getItem("userId"), shopId).subscribe(function (data) {
            if (data.length !== 0) {
              _this2.cartCount = data[0].productDetails.length;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCustomerProfile();
          this.getCartCount();
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
        key: "getCustomerProfile",
        value: function getCustomerProfile() {
          var _this3 = this;

          this._UserData.getCustomerDetails(localStorage.getItem("userId")).subscribe(function (data) {
            _this3.userData = data;
            _this3.isDataLoaded = true;
            _this3.userData.hasOwnProperty('fullName') ? '' : _this3.userData = "Guest";
            console.log(_this3.userData, "---");
          });
        }
      }, {
        key: "updatePicture",
        value: function updatePicture() {
          console.log("Clicked to update picture");
        }
      }, {
        key: "openEditProfileModal",
        value: function openEditProfileModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.userData, "---inside");
                    _context.next = 3;
                    return this.modalController.create({
                      component: _modal_edit_profile_editProfile__WEBPACK_IMPORTED_MODULE_4__["EditProfilePage"],
                      componentProps: {
                        userData: this.userData
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      _this4.getCustomerProfile();
                    });
                    _context.next = 7;
                    return modal.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }, {
        type: _providers_product_services__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "page-account",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.scss */
      "./src/app/pages/account/account.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"], _providers_product_services__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], AccountPage);
    /***/
  },

  /***/
  "./src/app/pages/account/modal/edit-profile/editProfile.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/account/modal/edit-profile/editProfile.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountModalEditProfileEditProfileScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit-model-header {\n  padding: 15px;\n}\n\n.edit-model-header .close-model {\n  width: 20px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.edit-model-header ion-title {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: 6px;\n  margin-left: -16px;\n}\n\n.has-footer {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  left: 0px;\n  z-index: 99;\n  margin: 0px;\n  --background: var(--ion-feedback-button-background);\n}\n\n.profile-info-row {\n  border-bottom: 1px solid var(--ion-border-color);\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.profile-info-row ion-label {\n  display: flex;\n}\n\n.upload-pic {\n  position: absolute;\n  bottom: 0px;\n  left: 55%;\n  background-color: var(--ion-color-warning);\n  padding: 6px;\n  color: #fff;\n  border-radius: 100%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFzaHdhdC9Eb2N1bWVudHMvYm1kYy1jbGllbnQvc3JjL2FwcC9wYWdlcy9hY2NvdW50L21vZGFsL2VkaXQtcHJvZmlsZS9lZGl0UHJvZmlsZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50L21vZGFsL2VkaXQtcHJvZmlsZS9lZGl0UHJvZmlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Usa0JBQUE7QUNHSjs7QUREQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1EQUFBO0FDSUY7O0FERkE7RUFDRSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvbW9kYWwvZWRpdC1wcm9maWxlL2VkaXRQcm9maWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1tb2RlbC1oZWFkZXJ7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uZWRpdC1tb2RlbC1oZWFkZXIgLmNsb3NlLW1vZGVse1xuICB3aWR0aDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmVkaXQtbW9kZWwtaGVhZGVyIGlvbi10aXRsZXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufVxuLmhhcy1mb290ZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW46IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZmVlZGJhY2stYnV0dG9uLWJhY2tncm91bmQpO1xufVxuLnByb2ZpbGUtaW5mby1yb3d7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZS1pbmZvLXJvdyBpb24tbGFiZWx7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udXBsb2FkLXBpY3tcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgYm90dG9tOiAwcHg7IFxuICBsZWZ0OiA1NSU7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7IFxuICBwYWRkaW5nOiA2cHg7IFxuICBjb2xvcjogI2ZmZjsgXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7IFxuICBmb250LXNpemU6IDE4cHg7XG59IiwiLmVkaXQtbW9kZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmVkaXQtbW9kZWwtaGVhZGVyIC5jbG9zZS1tb2RlbCB7XG4gIHdpZHRoOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5lZGl0LW1vZGVsLWhlYWRlciBpb24tdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufVxuXG4uaGFzLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW46IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tZmVlZGJhY2stYnV0dG9uLWJhY2tncm91bmQpO1xufVxuXG4ucHJvZmlsZS1pbmZvLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlLWluZm8tcm93IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51cGxvYWQtcGljIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogNTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gIHBhZGRpbmc6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/account/modal/edit-profile/editProfile.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/account/modal/edit-profile/editProfile.ts ***!
    \*****************************************************************/

  /*! exports provided: EditProfilePage */

  /***/
  function srcAppPagesAccountModalEditProfileEditProfileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
      return EditProfilePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");

    var EditProfilePage = /*#__PURE__*/function () {
      function EditProfilePage(modalController, _UserData, toastController, camera, actionSheetController, transfer) {
        _classCallCheck(this, EditProfilePage);

        this.modalController = modalController;
        this._UserData = _UserData;
        this.toastController = toastController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.transfer = transfer;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + "/";
        this.searchproductList = [];
        this.images = [];
        window.addEventListener('ionKeyboardDidShow', function (ev) {
          document.getElementById("edit-form").style.marginBottom = '250px';
        });
        window.addEventListener('ionKeyboardDidHide', function () {
          document.getElementById("edit-form").style.marginBottom = '0px';
        });
      }

      _createClass(EditProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.editProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            // city: new FormControl(""),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("Male")
          });
          console.log(this.userData); // this.userData.gender = 'male'

          this.editProfileForm.patchValue(this.userData);
        }
      }, {
        key: "submit",
        value: function submit($event) {
          var _this5 = this;

          console.log($event);
          var payload = Object.assign({}, $event.value);
          console.log(payload, "payload");
          payload.CustomerImage = this.images.length > 0 ? this.images[0] : this.userData.CustomerImage;
          console.log(payload, "payload");

          this._UserData.updateProfile(this.userData._id, payload).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("data", data);
                      _context2.next = 3;
                      return this.toastController.create({
                        message: "You Successfully Changed you Profile",
                        duration: 3000,
                        color: 'secondary',
                        position: "bottom",
                        animated: true
                      });

                    case 3:
                      toast = _context2.sent;
                      toast.present();
                      this.closeModal();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    onClosedData = "Address Added";
                    _context3.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "selectImagefromMobille",
        value: function selectImagefromMobille() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: "Load from Library",
                        handler: function handler() {
                          _this6.pickImage(_this6.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: "Use Camera",
                        handler: function handler() {
                          _this6.pickImage(_this6.camera.PictureSourceType.CAMERA);
                        }
                      }, {
                        text: "Cancel",
                        role: "cancel"
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "pickImage",
        value: function pickImage(sourceType) {
          var _this7 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imageData) {
            _this7.myphoto = 'data:image/jpeg;base64,' + imageData;

            _this7.uploadImage();
          }, function (err) {
            console.log("err: ", err);
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage() {
          var _this8 = this;

          var fileTransfer = this.transfer.create();
          var random = Math.floor(Math.random() * 100);
          var options = {
            fileKey: 'photo',
            fileName: "myImage_" + random + ".jpg",
            chunkedMode: false,
            httpMethod: 'post',
            mimeType: "image/jpeg",
            headers: {
              __authorization_x_token: localStorage.getItem("AuthToken") || ""
            }
          };
          var result; // alert(this.myphoto + " this.myphoto ,,,,, ==")

          fileTransfer.upload(this.myphoto, "".concat(this.baseUrl, "api/v1/Admin/saveAllImages"), options).then(function (data) {
            result = data; // alert("data "+JSON.stringify(result)+  JSON.parse(result.response).object)

            _this8.images[0] = JSON.parse(result.response).object.s3Url;
          }, function (err) {
            console.error(err);
            alert("Error ----------------->" + err + JSON.stringify(err)); // loader.dismiss();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.
          window.removeEventListener('ionKeyboardDidShow', function () {});
        }
      }]);

      return EditProfilePage;
    }();

    EditProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EditProfilePage.prototype, "userData", void 0);
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "modal-editProfile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editProfile.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/modal/edit-profile/editProfile.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editProfile.scss */
      "./src/app/pages/account/modal/edit-profile/editProfile.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]])], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-account-account-module-es5.js.map