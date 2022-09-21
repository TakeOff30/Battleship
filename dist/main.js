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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UI = (function () {\n    function enableButtons() {\n        const play = document.querySelector('.play');\n        const save = document.querySelector('.save');\n        const vertical = document.querySelector('.vertical');\n        const horizontal = document.querySelector('.horizontal');\n\n        play.addEventListener('click', () => {\n            hideMain();\n            displayModal();\n        });\n        save.addEventListener('click', () => {\n            const playerTitle = document.querySelector('.playerTitle');\n            const nameInput = document.querySelector('input');\n            playerTitle.textContent = nameInput.value;\n            displayGameboards();\n        });\n    }\n\n    function hideMain() {\n        const elements = document.querySelectorAll('.main');\n\n        elements.forEach((element) => {\n            element.style.left = '-100%';\n        });\n    }\n\n    function displayModal() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n\n        main.style.backgroundPosition = 'top right';\n        modal.classList.add('active');\n    }\n\n    function displayGameboards() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n        const gameSection = document.querySelector('.gameSection');\n        const playerGrid = document.querySelector('.player');\n        const cpuGrid = document.querySelector('.cpu');\n\n        createGrid(playerGrid, 'player');\n        createGrid(cpuGrid, 'cpu');\n\n        main.style.backgroundPosition = 'bottom right';\n        modal.classList.add('hidden');\n        gameSection.classList.add('active');\n    }\n\n    function createGrid(container, player) {\n        let square;\n\n        for (let x = 1; x <= 10; x++) {\n            for (let y = 1; y <= 10; y++) {\n                square = document.createElement('div');\n                square.classList.add('square');\n                square.classList.add(player);\n                square.setAttribute('data-coords', i);\n                container.appendChild(square);\n            }\n        }\n    }\n\n    function verticalPlacing(ship) {\n        const cpuSection = document.querySelector('.cpuSection');\n\n        cpuSection.classList.add('unable');\n\n        const square = document.querySelectorAll('.square');\n        square.forEach((square) => {\n            if (square.getAttribute('data-coords') > 60) {\n                square.classList.add('unable');\n            }\n        });\n\n        const availableSquares = document.querySelectorAll(\n            '.square:not(.unable)'\n        );\n    }\n\n    function horizontalPlacing(ship) {\n        const cpuSection = document.querySelector('.cpuSection');\n        let toWait = 11 - ship.size;\n        let toUnable = 11 - toWait;\n        cpuSection.classList.add('unable');\n\n        const squares = document.querySelectorAll('.square');\n\n        for (let i = 0; i < 100; i++) {\n            if (toWait == 0) {\n                if (toUnable > 0) {\n                    squares[i].classList.add('unable');\n                    toUnable--;\n                } else {\n                    toWait = 11 - ship.size;\n                    toUnable = 11 - toWait;\n                }\n            }\n        }\n        toWait = 11 - ship.size;\n        toUnable = 11 - toWait;\n        for (let i = 0; i < squares.length; i++) {\n            if (squares[i].classList.contains('ship')) {\n                squares[i].classList.add('unable');\n            }\n        }\n\n        const availableSquares = document.querySelectorAll(\n            '.square:not(.unable)'\n        );\n\n        for (let i = 0; i < availableSquares.length; i++) {\n            availableSquares[i].addEventListener('mouseover', () => {\n                for (let j = i; j < i + toUnable; j++) {\n                    availableSquares[j].style.backgroundColor = 'green';\n                }\n            });\n            availableSquares[i].addEventListener('mouseout', () => {\n                for (let j = i; j < i + toUnable; j++) {\n                    availableSquares[j].style.backgroundColor = 'white';\n                }\n            });\n        }\n    }\n\n    function endGameModal() {}\n\n    function startGame() {}\n\n    return {\n        enableButtons,\n        horizontalPlacing,\n        verticalPlacing,\n        startGame,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

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