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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/map */ "./src/js/modules/map.js");
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_map__WEBPACK_IMPORTED_MODULE_1__);
//import './modules/stickyHeader'


/*
import { openPopup, closePopup } from './modules/popup'

if (document.querySelector('.popup')) {
    const popupTrigger = document.querySelector('#popup-btn')
    popupTrigger.addEventListener('click', () => { openPopup('.popup__order') })

    const popupOverlay = document.querySelector('.popup__overlay')
    const closeBtns = document.querySelectorAll('.popup__close')

    popupOverlay.addEventListener('click', () => {
        closePopup()
    })

    closeBtns.forEach(el => {
        el.addEventListener('click', () => {

            closePopup()
        })
    })
}*/

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//open hamburger
var menuTrigger = document.querySelector('.header__btn');
var menu = document.querySelector('.header__container');
var rightMenu = document.querySelector('.header__submenu--main');
menuTrigger.addEventListener('click', function () {
  if (document.body.clientWidth > 991) {
    rightMenu.classList.toggle('header__submenu--main--opened');
    menuTrigger.classList.toggle('header__btn--opened');
  } else {
    menu.classList.toggle('header__container--opened');
    menuTrigger.classList.toggle('header__btn--opened');
    document.body.classList.toggle('overflow_hidden');
  }
}); //logo dropdown 

var logoTrigger = document.querySelector('.header__drop');
var logoMenu = document.querySelector('.more');
logoTrigger.addEventListener('click', function () {
  logoTrigger.classList.toggle('header__drop--opened');
  logoMenu.classList.toggle('more--opened');
}); //open map

var mapBtn = document.querySelector('.header__address p');
var map = document.querySelector('.header__map');
var main = document.querySelector('main');
var closeMap = document.querySelector('.map__close');
mapBtn.addEventListener('click', function () {
  mapBtn.classList.toggle('header__contact--address--opened');
  map.classList.toggle('header__map--opened');
});
closeMap.addEventListener('click', function () {
  mapBtn.classList.remove('header__contact--address--opened');
  map.classList.remove('header__map--opened');
}); //close all

main.addEventListener('click', function () {
  mapBtn.classList.remove('header__contact--address--opened');
  map.classList.remove('header__map--opened');
  menu.classList.remove('header__container--opened');
  menuTrigger.classList.remove('header__btn--opened');
  document.body.classList.remove('overflow_hidden');
  rightMenu.classList.remove('header__submenu--main--opened');
  logoTrigger.classList.remove('header__drop--opened');
  logoMenu.classList.remove('more--opened');
});

/***/ }),

/***/ "./src/js/modules/map.js":
/*!*******************************!*\
  !*** ./src/js/modules/map.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.914540, 30.271627],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }); // Создаём макет содержимого.

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'), myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './img/header-map.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    }), myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'А эта — новогодняя',
      iconContent: '12'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: './img/header-map.svg',
      // Размеры метки.
      iconImageSize: [48, 48],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });
    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=common.js.map