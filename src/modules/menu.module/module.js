/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/menu.module/module.js":
/*!*******************************************!*\
  !*** ./src/modules/menu.module/module.js ***!
  \*******************************************/
/***/ (function() {

eval("// Website header variables\n\nvar menuParentItems = document.querySelectorAll('.menu--desktop .menu__item--has-submenu');\nvar childToggle = document.querySelectorAll('.menu--mobile .menu__child-toggle');\n\n// Desktop menu\n\nif (menuParentItems) {\n  Array.prototype.forEach.call(menuParentItems, function (el) {\n    // Menu item variables\n\n    var childToggle = el.querySelector('.menu__child-toggle');\n\n    // Handles hover over\n\n    el.addEventListener('mouseover', function () {\n      this.classList.add('menu__item--open');\n      this.querySelector('a').setAttribute('aria-expanded', 'true');\n      this.querySelector('button').setAttribute('aria-expanded', 'true');\n    });\n\n    // Handles hover out\n\n    el.addEventListener('mouseout', function () {\n      document.querySelector('.menu__item--open > a').setAttribute('aria-expanded', 'false');\n      document.querySelector('.menu__item--open > button').setAttribute('aria-expanded', 'false');\n      document.querySelector('.menu__item--open').classList.remove('menu__item--open');\n    });\n\n    // Handles toggle of submenus\n\n    childToggle.addEventListener('click', function () {\n      if (this.parentNode.classList.contains('menu__item--open')) {\n        this.parentNode.classList.remove('menu__item--open');\n        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');\n        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'false');\n      } else {\n        this.parentNode.classList.add('menu__item--open');\n        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'true');\n        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'true');\n      }\n    });\n  });\n}\n\n// Mobile menu\n\n// Handles toggle of submenus\n\nif (childToggle) {\n  Array.prototype.forEach.call(childToggle, function (el) {\n    el.addEventListener('click', function () {\n      this.classList.toggle('menu__child-toggle--open');\n      if (this.parentNode.classList.contains('menu__item--open')) {\n        this.parentNode.classList.remove('menu__item--open');\n        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');\n        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'false');\n      } else {\n        this.parentNode.classList.add('menu__item--open');\n        this.parentNode.querySelector('a').setAttribute('aria-expanded', 'true');\n        this.parentNode.querySelector('button').setAttribute('aria-expanded', 'true');\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://stoica-tailwind/./src/modules/menu.module/module.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modules/menu.module/module.js"]();
/******/ 	
/******/ })()
;