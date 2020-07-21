/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_object_fit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/object-fit */ "../src/assets/js/polyfills/object-fit.js");
/* harmony import */ var _modules_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/videos */ "../src/assets/js/modules/videos.js");
/* harmony import */ var _modules_videos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_videos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_passwords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/passwords */ "../src/assets/js/modules/passwords.js");
/* harmony import */ var _modules_passwords__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_passwords__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../src/assets/js/modules/passwords.js":
/*!*********************************************!*\
  !*** ../src/assets/js/modules/passwords.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.js-password-trigger').on('click', function (e) {
  var $field = $(this).closest('.js-password').find('input');
  e.preventDefault();

  if ($field.attr('type') == 'text') {
    $(this).html('show');
    $field.attr('type', 'password');
  } else {
    $(this).html('hide');
    $field.attr('type', 'text');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/modules/videos.js":
/*!******************************************!*\
  !*** ../src/assets/js/modules/videos.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.js-video-trigger').on('click', function (e) {
  var $videoFrame = $(this).closest('.js-video').find('iframe');
  e.preventDefault();
  $videoFrame.attr('src', $videoFrame.attr('src') + '?autoplay=1');
  $(this).closest('.js-video').addClass('has-video-playing');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/polyfills/object-fit.js":
/*!************************************************!*\
  !*** ../src/assets/js/polyfills/object-fit.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils_is_ms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-ms */ "../src/assets/js/utils/is-ms.js");


if (Object(_utils_is_ms__WEBPACK_IMPORTED_MODULE_0__["isIe"])()) {
  $('.js-image-fit').each(function (i, container) {
    var $container = $(container);
    var $image = $container.find('img');
    var imageSource = $image.attr('src') || $image.data('src');
    $container.css('background-image', "url(".concat(imageSource, ")"));
    $image.addClass('sr-only');
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "../src/assets/js/utils/is-ms.js":
/*!***************************************!*\
  !*** ../src/assets/js/utils/is-ms.js ***!
  \***************************************/
/*! exports provided: isIe, isEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIe", function() { return isIe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return isEdge; });
var userAgent = window.navigator.userAgent;
var isIe = function isIe() {
  return userAgent.indexOf('Trident/') > 0;
};
var isEdge = function isEdge() {
  return userAgent.indexOf('Edge/') > 0;
};

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });