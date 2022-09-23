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

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _scripts_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Player */ \"./src/scripts/Player.js\");\n\n\n\nconst Game = (function () {\n    let player;\n    let cpu;\n\n    function main() {\n        setup();\n    }\n\n    function setup() {\n        const playerName = document.querySelector('.playerTitle');\n        player = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](playerName.textContent);\n        cpu = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('CPU');\n\n        player.setOpponent(cpu);\n        cpu.setOpponent(player);\n        /*solve placing*/\n        placing();\n    }\n\n    function placing() {\n        player.toPlace.forEach((ship) => {\n            _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availables(ship);\n            let x = clicked.getAttribute('data-x');\n            let y = clicked.getAttribute('data-y');\n            player.placeShip(x, y, ship.dir);\n        });\n    }\n\n    function searchForClicked() {\n        let clicked = undefined;\n\n        while (clicked == undefined) {\n            clicked = document.querySelector('.clicked');\n        }\n\n        return clicked;\n    }\n\n    return {\n        main,\n        setup,\n        placing,\n        searchForClicked,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\nconst UI = (function () {\n    function enableButtons() {\n        const play = document.querySelector('.play');\n        const save = document.querySelector('.save');\n\n        play.addEventListener('click', () => {\n            hideMain();\n            displayModal();\n        });\n        save.addEventListener('click', () => {\n            const playerTitle = document.querySelector('.playerTitle');\n            const nameInput = document.querySelector('input');\n            playerTitle.textContent = nameInput.value;\n            displayGameboards();\n            _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main();\n        });\n    }\n\n    function hideMain() {\n        const elements = document.querySelectorAll('.main');\n\n        elements.forEach((element) => {\n            element.style.left = '-100%';\n        });\n    }\n\n    function displayModal() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n\n        main.style.backgroundPosition = 'top right';\n        modal.classList.add('active');\n    }\n\n    function displayGameboards() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n        const gameSection = document.querySelector('.gameSection');\n        const playerGrid = document.querySelector('.player');\n        const cpuGrid = document.querySelector('.cpu');\n\n        createGrid(playerGrid, 'player');\n        createGrid(cpuGrid, 'cpu');\n\n        main.style.backgroundPosition = 'bottom right';\n        modal.classList.add('hidden');\n        gameSection.classList.add('active');\n    }\n\n    function createGrid(container, player) {\n        let square;\n\n        for (let y = 1; y <= 10; y++) {\n            for (let x = 1; x <= 10; x++) {\n                square = document.createElement('div');\n                square.classList.add('square');\n                square.classList.add(player);\n                square.setAttribute('data-y', y);\n                square.setAttribute('data-x', x);\n                container.appendChild(square);\n            }\n        }\n    }\n\n    /* available squares */\n\n    function availables(ship) {\n        /*removing previously cliked*/\n        const preClicked = document.querySelector('.clicked');\n        const preOccupied = document.querySelectorAll('.occupied');\n        if (preClicked != undefined) preClicked.classList.remove('clicked');\n        if (preOccupied != undefined) {\n            preOccupied.forEach((occupied) => {\n                occupied.classList.remove('occupied');\n            });\n        }\n\n        const cpuSection = document.querySelector('.cpuSection');\n        cpuSection.classList.add('unable');\n\n        let limit = 12 - ship.length;\n        let minimumDistance = ship.length;\n        const squares = document.querySelectorAll('.square');\n        /*depending on ship size*/\n        if (ship.dir == 0) {\n            squares.forEach((square) => {\n                if (square.getAttribute('data-x') >= limit) {\n                    square.classList.add('unable');\n                } else if (square.classList.contains('ship')) {\n                    square.classList.add('unable');\n                    setDistanceLimits(square, 0, minimumDistance);\n                }\n            });\n        } else if (ship.dir == 1) {\n            squares.forEach((square) => {\n                if (square.getAttribute('data-y') >= limit) {\n                    square.classList.add('unable');\n                } else if (square.classList.contains('ship')) {\n                    square.classList.add('unable');\n                    setDistanceLimits(square, 1, minimumDistance);\n                }\n            });\n        }\n\n        const clickables = document.querySelectorAll(\n            '.square:not(.unable):not(.occupied)'\n        );\n        clickables.forEach((clickable) => {\n            clickable.addEventListener('click', () => {\n                clickable.classList.add('clicked');\n            });\n            clickable.addEventListener('mouseover', () => {\n                let x = clickable.getAttribute('data-x'),\n                    y = clickable.getAttribute('data-y');\n                clickable.style.backgroundColor = 'gray';\n                let toHover;\n                if (ship.dir == 0) {\n                    for (let i = 1; i < ship.length; i++) {\n                        console.log(parseInt(x) + parseInt(i));\n                        toHover = document.querySelector(\n                            '[data-x=\"' +\n                                (parseInt(x) + parseInt(i)) +\n                                '\"][data-y=\"' +\n                                y +\n                                '\"]'\n                        );\n                        toHover.style.backgroundColor = 'gray';\n                    }\n                } else {\n                    for (let i = 1; i < ship.length; i++) {\n                        toHover = document.querySelector(\n                            '[data-x=\"' +\n                                x +\n                                '\"][data-y=\"' +\n                                (parseInt(y) + parseInt(i)) +\n                                '\"]'\n                        );\n                        toHover.style.backgroundColor = 'gray';\n                    }\n                }\n            });\n            clickable.addEventListener('mouseout', () => {\n                let x = clickable.getAttribute('data-x'),\n                    y = clickable.getAttribute('data-y');\n                clickable.style.backgroundColor = 'white';\n                let toHover;\n                if (ship.dir == 0) {\n                    for (let i = 1; i < ship.length; i++) {\n                        toHover = document.querySelector(\n                            '[data-x=\"' +\n                                (parseInt(x) + parseInt(i)) +\n                                '\"][data-y=\"' +\n                                y +\n                                '\"]'\n                        );\n                        toHover.style.backgroundColor = 'white';\n                    }\n                } else {\n                    for (let i = 1; i < ship.length; i++) {\n                        toHover = document.querySelector(\n                            '[data-x=\"' +\n                                x +\n                                '\"][data-y=\"' +\n                                (parseInt(y) + parseInt(i)) +\n                                '\"]'\n                        );\n                        toHover.style.backgroundColor = 'white';\n                    }\n                }\n            });\n        });\n    }\n\n    function setDistanceLimits(square, orientation, distance) {\n        let start;\n        let end;\n        if (orientation == 0) {\n            start = square.getAttribute('data-x') - distance;\n            end = square.getAttribute('data-x') + distance;\n            if (start < 1) start = 1;\n            if (end > 10) end = 10;\n            let toUnable;\n            for (let i = start; i < end; i++) {\n                toUnable = document.querySelector(\n                    '[data-x=' + start + '][data-y=' + end + ']'\n                );\n                toUnable.classList.add('occupied');\n            }\n        } else {\n            start = square.getAttribute('data-y') - distance;\n            end = square.getAttribute('data-y') + distance;\n            if (start < 1) start = 1;\n            if (end > 10) end = 10;\n            let toUnable;\n            for (let i = start; i < end; i++) {\n                toUnable = document.querySelector(\n                    '[data-x=' + start + '][data-y=' + end + ']'\n                );\n                toUnable.classList.add('occupied');\n            }\n        }\n    }\n\n    function getUserX(square) {\n        const x = square.getAttribute('data-x');\n        return x;\n    }\n\n    function getUserY(square) {\n        const y = square.getAttribute('data-y');\n        return y;\n    }\n\n    function endGameModal() {}\n\n    return {\n        enableButtons,\n        availables,\n        getUserX,\n        getUserY,\n        availables,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].enableButtons());\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/scripts/Ship.js\");\n\n\nclass GameBoard {\n    constructor() {\n        this.coords = this.assignCoords();\n        this.ships = [];\n        this.alive = 0;\n    }\n\n    assignCoords() {\n        let coords = [];\n\n        for (let i = 0; i <= 100; i++) {\n            coords.push([i, false, undefined]);\n        }\n\n        return coords;\n    }\n\n    placeShip(x, y, dir, ship) {\n        let square = (x - 1) * 10 + y;\n        this.alive++;\n        this.ships.push(ship);\n        if (dir == 0) {\n            for (let i = 0; i < ship.len; i++) {\n                square = (x - 1) * 10 + y;\n                this.coords[square][2] = ship.name;\n                x++;\n            }\n        } else {\n            for (let i = 0; i < ship.len; i++) {\n                square = (x - 1) * 10 + y;\n                this.coords[square][2] = ship.name;\n                y++;\n            }\n        }\n    }\n\n    availableSquare(x, y) {\n        const square = (x - 1) * 10 + y;\n\n        if (this.coords[square][1] == false) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    receiveAttack(x, y) {\n        const square = (x - 1) * 10 + y;\n        if (this.coords[square][1] == false) {\n            this.coords[square][1] = true;\n            if (this.coords[square][2] !== undefined) {\n                const attacked = this.ships.indexOf((ship) => {\n                    ship.name == this.coords[square][2];\n                });\n                this.ships[attacked].hit();\n                if (this.ships[attacked].isSunk()) {\n                    this.alive--;\n                }\n            }\n        }\n    }\n\n    hasShips() {\n        if (this.alive == 0) {\n            return false;\n        } else {\n            return true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Gameboard.js?");

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/scripts/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/scripts/Ship.js\");\n\n\n\nclass Player {\n    constructor(name) {\n        this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.name = name;\n        this.toPlace = [\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5, 'Carrier'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4, 'Battleship'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Destroyer'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Submarine'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2, 'Patrol Boat'),\n        ];\n        this.opponentsGameboard = null;\n    }\n\n    setOpponent(opponent) {\n        this.opponentsGameboard = opponent.gameboard;\n    }\n\n    placeShip(x, y, dir) {\n        if (this.toPlace.length > 0) {\n            this.gameboard.placeShip(x, y, dir, this.toPlace[0]);\n            this.toPlace.splice(0, 1);\n        }\n    }\n\n    makePlay(x, y) {\n        this.opponentsGameboard.receiveAttack(x, y);\n    }\n\n    makePlayCPU() {\n        let x = Math.floor(Math.random() * 10 + 1);\n        let y = Math.floor(Math.random() * 10 + 1);\n\n        while (!this.opponent.gameboard.availableSquare(x, y)) {\n            x = Math.floor(Math.random() * 10 + 1);\n            y = Math.floor(Math.random() * 10 + 1);\n        }\n        this.opponent.gameboard.receiveAttack(x, y);\n    }\n\n    placeShipCPU() {}\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Player.js?");

/***/ }),

/***/ "./src/scripts/Ship.js":
/*!*****************************!*\
  !*** ./src/scripts/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length, name) {\n        this.length = length;\n        this.hits = 0;\n        this.name = name;\n        this.dir = 0;\n    }\n\n    hit() {\n        this.hits++;\n    }\n\n    isSunk() {\n        return this.hits == this.length;\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Ship.js?");

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