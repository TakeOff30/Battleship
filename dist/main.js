/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UI = (function () {\n    function enableButtons() {\n        const play = document.querySelector('.play');\n        const save = document.querySelector('.save');\n        const direction = document.querySelector('.direction');\n\n        play.addEventListener('click', () => {\n            hideMain();\n            displayModal();\n        });\n        save.addEventListener('click', () => {\n            const playerTitle = document.querySelector('.playerTitle');\n            const nameInput = document.querySelector('input');\n            playerTitle.textContent = nameInput.value;\n            displayGameboards();\n        });\n    }\n\n    function hideMain() {\n        const elements = document.querySelectorAll('.main');\n\n        elements.forEach((element) => {\n            element.style.left = '-100%';\n        });\n    }\n\n    function displayModal() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n\n        main.style.backgroundPosition = 'top right';\n        modal.classList.add('active');\n    }\n\n    function displayGameboards() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n        const gameSection = document.querySelector('.gameSection');\n        const playerGrid = document.querySelector('.player');\n        const cpuGrid = document.querySelector('.cpu');\n\n        createGrid(playerGrid, 'player');\n        createGrid(cpuGrid, 'cpu');\n\n        main.style.backgroundPosition = 'bottom right';\n        modal.classList.add('hidden');\n        gameSection.classList.add('active');\n    }\n\n    function createGrid(container, player) {\n        let square;\n\n        for (let y = 1; y <= 10; y++) {\n            for (let x = 1; x <= 10; x++) {\n                square = document.createElement('div');\n                square.classList.add('square');\n                square.classList.add(player);\n                square.setAttribute('data-y', y);\n                square.setAttribute('data-x', x);\n                container.appendChild(square);\n            }\n        }\n    }\n\n    /* available squares */\n\n    function availables(ship) {\n        /*removing previously cliked*/\n        const preClicked = document.querySelector('.clicked');\n        if (clicked != undefined) {\n            preClicked.classList.remove('clicked');\n        }\n\n        const cpuSection = document.querySelector('.cpuSection');\n        cpuSection.classList.add('unable');\n\n        /*which are unable*/\n        let limit;\n        const squares = document.querySelectorAll('.square');\n        /*ship size*/\n        if (ship.dir == 0) {\n            limit = 12 - ship.length;\n            squares.forEach((square) => {\n                if (square.getAttribute('data-x') > limit) {\n                    square.classList.add('unable');\n                }\n            });\n        } else if (ship.dir == 1) {\n            limit = 12 - ship.length;\n            squares.forEach((square) => {\n                if (square.getAttribute('data-y') > limit) {\n                    square.classList.add('unable');\n                }\n            });\n        }\n        /*occuppied slots*/\n\n        const clickables = document.querySelectorAll('.square:not(.unable)');\n        clickables.forEach((clickable) => {\n            clickable.addEventListener('click', () => {\n                clickable.classList.add('clicked');\n            });\n        });\n    }\n\n    function getUserX(square) {\n        const x = square.getAttribute('data-x');\n        return x;\n    }\n\n    function getUserY(square) {\n        const y = square.getAttribute('data-y');\n        return y;\n    }\n\n    function endGameModal() {}\n\n    function startGame() {}\n\n    return {\n        enableButtons,\n        availables,\n        getUserX,\n        getUserY,\n        startGame,\n        availables,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableButtons);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;