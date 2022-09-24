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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _scripts_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Player */ \"./src/scripts/Player.js\");\n/* harmony import */ var _scripts_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Ship */ \"./src/scripts/Ship.js\");\n\n\n\n\nconst Game = (function () {\n    let player;\n    let cpu;\n    let dir = 0;\n\n    function main() {\n        setup();\n    }\n\n    function setup() {\n        const playerName = document.querySelector('.playerTitle');\n        player = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](playerName.textContent);\n        cpu = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('CPU');\n\n        player.setOpponent(cpu);\n        cpu.setOpponent(player);\n\n        placing();\n    }\n\n    /* this goes in ui */\n    function placing() {\n        if (player.toPlace == []) return;\n        _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availables(player.toPlace[0]);\n        const clickables = document.querySelectorAll(\n            '.square:not(.unable):not(.occupied)'\n        );\n\n        clickables.forEach((clickable) => {\n            clickable.addEventListener('click', () => {\n                clickable.classList.add('clicked');\n                const clicked = document.querySelector('.clicked');\n                const hovered = document.querySelectorAll('.hovered');\n                hovered.forEach((hover) => {\n                    hover.classList.remove('hovered');\n                    hover.classList.add('ship');\n                });\n                dir = player.toPlace[0].dir;\n                player.placeShip(\n                    clicked.getAttribute('data-x'),\n                    clicked.getAttribute('data-y'),\n                    dir\n                );\n                console.log(player.toPlace);\n\n                placing();\n            });\n        });\n    }\n\n    return {\n        main,\n        setup,\n        placing,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\nconst UI = (function () {\n\tfunction enableButtons() {\n\t\tconst play = document.querySelector('.play');\n\t\tconst save = document.querySelector('.save');\n\n\t\tplay.addEventListener('click', () => {\n\t\t\thideMain();\n\t\t\tdisplayModal();\n\t\t});\n\t\tsave.addEventListener('click', () => {\n\t\t\tconst playerTitle = document.querySelector('.playerTitle');\n\t\t\tconst nameInput = document.querySelector('input');\n\t\t\tplayerTitle.textContent = nameInput.value;\n\t\t\tdisplayGameboards();\n\t\t\t_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main();\n\t\t});\n\t}\n\n\tfunction hideMain() {\n\t\tconst elements = document.querySelectorAll('.main');\n\n\t\telements.forEach((element) => {\n\t\t\telement.style.left = '-100%';\n\t\t});\n\t}\n\n\tfunction displayModal() {\n\t\tconst main = document.querySelector('.home');\n\t\tconst modal = document.querySelector('.modal');\n\n\t\tmain.style.backgroundPosition = 'top right';\n\t\tmodal.classList.add('active');\n\t}\n\n\tfunction displayGameboards() {\n\t\tconst main = document.querySelector('.home');\n\t\tconst modal = document.querySelector('.modal');\n\t\tconst gameSection = document.querySelector('.gameSection');\n\t\tconst playerGrid = document.querySelector('.player');\n\t\tconst cpuGrid = document.querySelector('.cpu');\n\n\t\tcreateGrid(playerGrid, 'player');\n\t\tcreateGrid(cpuGrid, 'cpu');\n\n\t\tmain.style.backgroundPosition = 'bottom right';\n\t\tmodal.classList.add('hidden');\n\t\tgameSection.classList.add('active');\n\t}\n\n\tfunction createGrid(container, player) {\n\t\tlet square;\n\n\t\tfor (let y = 1; y <= 10; y++) {\n\t\t\tfor (let x = 1; x <= 10; x++) {\n\t\t\t\tsquare = document.createElement('div');\n\t\t\t\tsquare.classList.add('square');\n\t\t\t\tsquare.classList.add(player);\n\t\t\t\tsquare.setAttribute('data-y', y);\n\t\t\t\tsquare.setAttribute('data-x', x);\n\t\t\t\tcontainer.appendChild(square);\n\t\t\t}\n\t\t}\n\t}\n\n\t/* available squares */\n\n\tfunction availables(ship) {\n\t\tif (ship == undefined) return;\n\t\t/*removing previously cliked*/\n\t\tcleanPreviousPlacement();\n\n\t\tconst cpuSection = document.querySelector('.cpuSection');\n\t\tcpuSection.classList.add('unable');\n\n\t\tsetLimits(ship);\n\n\t\t/*remove all previous event listeners*/\n\t\tlet clickables = document.querySelectorAll(\n\t\t\t'.square:not(.unable):not(.ship)'\n\t\t);\n\t\tclickables.forEach((clickable) => {\n\t\t\tconst oldElem = clickable;\n\t\t\tconst newElem = oldElem.cloneNode(true);\n\t\t\toldElem.parentNode.replaceChild(newElem, oldElem);\n\t\t});\n\t\t/*select new cloned squares*/\n\t\tclickables = document.querySelectorAll(\n\t\t\t'.square:not(.unable):not(.ship)'\n\t\t);\n\t\tclickables.forEach((clickable) => {\n\t\t\tshowPlacement(clickable, ship);\n\t\t\thidePlacement(clickable, ship);\n\t\t});\n\t}\n\n\tfunction cleanPreviousPlacement() {\n\t\tconst preClicked = document.querySelector('.clicked');\n\t\tconst preOccupied = document.querySelectorAll('.occupied');\n\t\tif (preClicked != undefined) preClicked.classList.remove('clicked');\n\t\tif (preOccupied != undefined) {\n\t\t\tpreOccupied.forEach((occupied) => {\n\t\t\t\toccupied.classList.remove('occupied');\n\t\t\t});\n\t\t}\n\t}\n\n\tfunction setLimits(ship) {\n\t\tlet limit = 12 - ship.length;\n\t\tlet minimumDistance = ship.length - 1;\n\t\tconst squares = document.querySelectorAll('.square');\n\t\t/*depending on ship size*/\n\t\tif (ship.dir == 0) {\n\t\t\tsquares.forEach((square) => {\n\t\t\t\tif (square.getAttribute('data-x') >= limit) {\n\t\t\t\t\tsquare.classList.add('unable');\n\t\t\t\t} else if (square.classList.contains('ship')) {\n\t\t\t\t\tsquare.classList.add('unable');\n\t\t\t\t\tsetDistanceBetweenShips(square, 0, minimumDistance);\n\t\t\t\t}\n\t\t\t});\n\t\t} else if (ship.dir == 1) {\n\t\t\tsquares.forEach((square) => {\n\t\t\t\tif (square.getAttribute('data-y') >= limit) {\n\t\t\t\t\tsquare.classList.add('unable');\n\t\t\t\t} else if (square.classList.contains('ship')) {\n\t\t\t\t\tsquare.classList.add('unable');\n\t\t\t\t\tsetDistanceBetweenShips(square, 1, minimumDistance);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\n\tfunction showPlacement(clickable, ship) {\n\t\tclickable.addEventListener('mouseover', () => {\n\t\t\tlet x = clickable.getAttribute('data-x'),\n\t\t\t\ty = clickable.getAttribute('data-y');\n\t\t\tclickable.classList.add('hovered');\n\t\t\tlet toHover;\n\t\t\tif (ship.dir == 0) {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\tconsole.log(parseInt(x) + parseInt(i));\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\t(parseInt(x) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\ty +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.add('hovered');\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\tx +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\t(parseInt(y) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.add('hovered');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction hidePlacement(clickable, ship) {\n\t\tclickable.addEventListener('mouseout', () => {\n\t\t\tlet x = clickable.getAttribute('data-x'),\n\t\t\t\ty = clickable.getAttribute('data-y');\n\t\t\tclickable.classList.remove('hovered');\n\t\t\tlet toHover;\n\t\t\tif (ship.dir == 0) {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\t(parseInt(x) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\ty +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.remove('hovered');\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\tx +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\t(parseInt(y) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.remove('hovered');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction setDistanceBetweenShips(square, orientation, distance) {\n\t\tlet start;\n\t\tlet end;\n\t\tif (orientation == 0) {\n\t\t\tstart = square.getAttribute('data-x') - distance;\n\t\t\tend = square.getAttribute('data-x');\n\t\t\tif (start < 1) start = 1;\n\t\t\tif (end > 10) end = 10;\n\t\t\tlet toUnable;\n\t\t\tfor (let i = start; i < end; i++) {\n\t\t\t\ttoUnable = document.querySelector(\n\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\ti +\n\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\tsquare.getAttribute('data-y') +\n\t\t\t\t\t\t'\"]'\n\t\t\t\t);\n\t\t\t\ttoUnable.classList.add('occupied');\n\t\t\t}\n\t\t} else {\n\t\t\tstart = square.getAttribute('data-y') - distance;\n\t\t\tend = square.getAttribute('data-y');\n\t\t\tif (start < 1) start = 1;\n\t\t\tif (end > 10) end = 10;\n\t\t\tlet toUnable;\n\t\t\tfor (let i = start; i < end; i++) {\n\t\t\t\ttoUnable = document.querySelector(\n\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\tsquare.getAttribute('data-x') +\n\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\ti +\n\t\t\t\t\t\t'\"]'\n\t\t\t\t);\n\t\t\t\ttoUnable.classList.add('occupied');\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction getUserX(square) {\n\t\tconst x = square.getAttribute('data-x');\n\t\treturn x;\n\t}\n\n\tfunction getUserY(square) {\n\t\tconst y = square.getAttribute('data-y');\n\t\treturn y;\n\t}\n\n\treturn {\n\t\tenableButtons,\n\t\tavailables,\n\t\tgetUserX,\n\t\tgetUserY,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/scripts/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/scripts/Ship.js\");\n\n\n\nclass Player {\n    constructor(name) {\n        this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.name = name;\n        this.toPlace = [\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2, 'Patrol Boat'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Submarine'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Destroyer'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4, 'Battleship'),\n            new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5, 'Carrier'),\n        ];\n        this.opponentsGameboard = null;\n    }\n\n    setOpponent(opponent) {\n        this.opponentsGameboard = opponent.gameboard;\n    }\n\n    placeShip(x, y, dir) {\n        if (this.toPlace.length > 0) {\n            this.gameboard.placeShip(x, y, dir, this.toPlace[0]);\n            this.toPlace.splice(0, 1);\n        }\n    }\n\n    makePlay(x, y) {\n        this.opponentsGameboard.receiveAttack(x, y);\n    }\n\n    makePlayCPU() {\n        let x = Math.floor(Math.random() * 10 + 1);\n        let y = Math.floor(Math.random() * 10 + 1);\n\n        while (!this.opponent.gameboard.availableSquare(x, y)) {\n            x = Math.floor(Math.random() * 10 + 1);\n            y = Math.floor(Math.random() * 10 + 1);\n        }\n        this.opponent.gameboard.receiveAttack(x, y);\n    }\n\n    placeShipCPU() {}\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Player.js?");

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