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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _scripts_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Player */ \"./src/scripts/Player.js\");\n/* harmony import */ var _scripts_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Ship */ \"./src/scripts/Ship.js\");\n\n\n\n\nconst Game = (function () {\n\tlet player;\n\tlet cpu;\n\tlet dir = 0;\n\n\tfunction main() {\n\t\tsetup();\n\t\tstartGame();\n\t}\n\n\tfunction setup() {\n\t\tconst playerName = document.querySelector('.playerTitle');\n\t\tplayer = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](playerName.textContent);\n\t\tcpu = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('CPU');\n\n\t\tplayer.setOpponent(cpu);\n\t\tcpu.setOpponent(player);\n\n\t\tplacing();\n\t\tplacingCPU();\n\t}\n\n\t/* this goes in ui */\n\tfunction placing() {\n\t\tif (player.toPlace == []) return;\n\t\t_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availables(player.toPlace[0]);\n\t\tconst clickables = document.querySelectorAll(\n\t\t\t'.square:not(.unable):not(.occupied)'\n\t\t);\n\n\t\tclickables.forEach((clickable) => {\n\t\t\tclickable.addEventListener('click', () => {\n\t\t\t\tclickable.classList.add('clicked');\n\t\t\t\tconst clicked = document.querySelector('.clicked');\n\t\t\t\tconst hovered = document.querySelectorAll('.hovered');\n\t\t\t\thovered.forEach((hover) => {\n\t\t\t\t\thover.classList.remove('hovered');\n\t\t\t\t\thover.classList.add('ship');\n\t\t\t\t});\n\t\t\t\tdir = player.toPlace[0].dir;\n\t\t\t\tplayer.placeShip(\n\t\t\t\t\tclicked.getAttribute('data-x'),\n\t\t\t\t\tclicked.getAttribute('data-y'),\n\t\t\t\t\tdir\n\t\t\t\t);\n\t\t\t\tplacing();\n\t\t\t});\n\t\t});\n\t}\n\n\tfunction changeDirection() {\n\t\tplayer.toPlace[0].dir == 0\n\t\t\t? (player.toPlace[0].dir = 1)\n\t\t\t: (player.toPlace[0].dir = 0);\n\t\tplacing();\n\t}\n\n\tfunction placingCPU() {\n\t\twhile (cpu.toPlace.length > 0) {\n\t\t\tcpu.placeShipCPU();\n\t\t}\n\t}\n\n\tfunction startGame() {\n\t\t_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startGame();\n\t}\n\n\treturn {\n\t\tmain,\n\t\tsetup,\n\t\tplacing,\n\t\tchangeDirection,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\nconst UI = (function () {\n    function enableButtons() {\n        const play = document.querySelector('.play');\n        const save = document.querySelector('.save');\n        const direction = document.querySelector('.direction');\n\n        play.addEventListener('click', () => {\n            hideMain();\n            displayModal();\n        });\n        save.addEventListener('click', () => {\n            const playerTitle = document.querySelector('.playerTitle');\n            const nameInput = document.querySelector('input');\n            playerTitle.textContent = nameInput.value;\n            displayGameboards();\n            _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main();\n        });\n        direction.addEventListener('click', () => {\n            _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeDirection();\n        });\n    }\n\n    function hideMain() {\n        const elements = document.querySelectorAll('.main');\n\n        elements.forEach((element) => {\n            element.style.left = '-100%';\n        });\n    }\n\n    function displayModal() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n\n        main.style.backgroundPosition = 'top right';\n        modal.classList.add('active');\n    }\n\n    function displayGameboards() {\n        const main = document.querySelector('.home');\n        const modal = document.querySelector('.modal');\n        const gameSection = document.querySelector('.gameSection');\n        const playerGrid = document.querySelector('.player');\n        const cpuGrid = document.querySelector('.cpu');\n\n        createGrid(playerGrid, 'player');\n        createGrid(cpuGrid, 'cpu');\n\n        main.style.backgroundPosition = 'bottom right';\n        modal.classList.add('hidden');\n        gameSection.classList.add('active');\n    }\n\n    function createGrid(container, player) {\n        let square;\n\n        for (let y = 1; y <= 10; y++) {\n            for (let x = 1; x <= 10; x++) {\n                square = document.createElement('div');\n                square.classList.add('square');\n                square.classList.add(player);\n                square.setAttribute('data-y', y);\n                square.setAttribute('data-x', x);\n                container.appendChild(square);\n            }\n        }\n    }\n\n    /* available squares */\n\n    function availables(ship) {\n        if (ship == undefined) return;\n        /*removing previously cliked*/\n        cleanPreviousPlacement();\n\n        const cpuSection = document.querySelector('.cpuSection');\n        cpuSection.classList.add('unable');\n\n        setLimits(ship);\n\n        /*remove all previous event listeners*/\n        let clickables = document.querySelectorAll(\n            '.square:not(.unable):not(.ship)'\n        );\n        clickables.forEach((clickable) => {\n            const oldElem = clickable;\n            const newElem = oldElem.cloneNode(true);\n            oldElem.parentNode.replaceChild(newElem, oldElem);\n        });\n        /*select new cloned squares*/\n        clickables = document.querySelectorAll(\n            '.square:not(.unable):not(.ship)'\n        );\n        clickables.forEach((clickable) => {\n            showPlacement(clickable, ship);\n            hidePlacement(clickable, ship);\n        });\n    }\n\n    function cleanPreviousPlacement() {\n        const preClicked = document.querySelector('.clicked');\n        const preOccupied = document.querySelectorAll('.occupied');\n        if (preClicked != undefined) preClicked.classList.remove('clicked');\n        if (preOccupied != undefined) {\n            preOccupied.forEach((occupied) => {\n                occupied.classList.remove('occupied');\n            });\n        }\n    }\n\n    function setLimits(ship) {\n        let limit = 12 - ship.length;\n        let minimumDistance = ship.length - 1;\n        const squares = document.querySelectorAll('.square');\n        /*depending on ship size*/\n        if (ship.dir == 0) {\n            squares.forEach((square) => {\n                if (square.classList.contains('unableY'))\n                    square.classList.remove('unableY');\n                if (\n                    square.getAttribute('data-x') >= limit ||\n                    square.classList.contains('ship')\n                ) {\n                    square.classList.add('unableX');\n                    if (square.classList.contains('ship'))\n                        setDistanceBetweenShips(square, 0, minimumDistance);\n                }\n            });\n        } else if (ship.dir == 1) {\n            squares.forEach((square) => {\n                if (square.classList.contains('unableX'))\n                    square.classList.remove('unableX');\n                if (\n                    square.getAttribute('data-y') >= limit ||\n                    square.classList.contains('ship')\n                ) {\n                    square.classList.add('unableY');\n                    if (square.classList.contains('ship'))\n                        setDistanceBetweenShips(square, 1, minimumDistance);\n                }\n            });\n        }\n    }\n\n    function showPlacement(clickable, ship) {\n        clickable.addEventListener('mouseover', () => {\n            let x = clickable.getAttribute('data-x'),\n                y = clickable.getAttribute('data-y');\n            clickable.classList.add('hovered');\n            let toHover;\n            if (ship.dir == 0) {\n                for (let i = 1; i < ship.length; i++) {\n                    console.log(parseInt(x) + parseInt(i));\n                    toHover = document.querySelector(\n                        '[data-x=\"' +\n                            (parseInt(x) + parseInt(i)) +\n                            '\"][data-y=\"' +\n                            y +\n                            '\"]'\n                    );\n                    toHover.classList.add('hovered');\n                }\n            } else {\n                for (let i = 1; i < ship.length; i++) {\n                    toHover = document.querySelector(\n                        '[data-x=\"' +\n                            x +\n                            '\"][data-y=\"' +\n                            (parseInt(y) + parseInt(i)) +\n                            '\"]'\n                    );\n                    toHover.classList.add('hovered');\n                }\n            }\n        });\n    }\n\n    function hidePlacement(clickable, ship) {\n        clickable.addEventListener('mouseout', () => {\n            let x = clickable.getAttribute('data-x'),\n                y = clickable.getAttribute('data-y');\n            clickable.classList.remove('hovered');\n            let toHover;\n            if (ship.dir == 0) {\n                for (let i = 1; i < ship.length; i++) {\n                    toHover = document.querySelector(\n                        '[data-x=\"' +\n                            (parseInt(x) + parseInt(i)) +\n                            '\"][data-y=\"' +\n                            y +\n                            '\"]'\n                    );\n                    toHover.classList.remove('hovered');\n                }\n            } else {\n                for (let i = 1; i < ship.length; i++) {\n                    toHover = document.querySelector(\n                        '[data-x=\"' +\n                            x +\n                            '\"][data-y=\"' +\n                            (parseInt(y) + parseInt(i)) +\n                            '\"]'\n                    );\n                    toHover.classList.remove('hovered');\n                }\n            }\n        });\n    }\n\n    function setDistanceBetweenShips(square, orientation, distance) {\n        let start;\n        let end;\n        if (orientation == 0) {\n            start = square.getAttribute('data-x') - distance;\n            end = square.getAttribute('data-x');\n            if (start < 1) start = 1;\n            if (end > 10) end = 10;\n            let toUnable;\n            for (let i = start; i < end; i++) {\n                toUnable = document.querySelector(\n                    '[data-x=\"' +\n                        i +\n                        '\"][data-y=\"' +\n                        square.getAttribute('data-y') +\n                        '\"]'\n                );\n                toUnable.classList.add('occupied');\n            }\n        } else {\n            start = square.getAttribute('data-y') - distance;\n            end = square.getAttribute('data-y');\n            if (start < 1) start = 1;\n            if (end > 10) end = 10;\n            let toUnable;\n            for (let i = start; i < end; i++) {\n                toUnable = document.querySelector(\n                    '[data-x=\"' +\n                        square.getAttribute('data-x') +\n                        '\"][data-y=\"' +\n                        i +\n                        '\"]'\n                );\n                toUnable.classList.add('occupied');\n            }\n        }\n    }\n\n    function getUserX(square) {\n        const x = square.getAttribute('data-x');\n        return x;\n    }\n\n    function getUserY(square) {\n        const y = square.getAttribute('data-y');\n        return y;\n    }\n\n    return {\n        enableButtons,\n        availables,\n        getUserX,\n        getUserY,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard {\n\tconstructor() {\n\t\tthis.coords = this.assignCoords();\n\t\tthis.ships = [];\n\t\tthis.alive = 0;\n\t}\n\n\tassignCoords() {\n\t\tlet coords = [];\n\n\t\tfor (let i = 0; i <= 100; i++) {\n\t\t\tcoords.push([i, false, undefined]);\n\t\t}\n\n\t\treturn coords;\n\t}\n\n\tplaceShip(x, y, dir, ship) {\n\t\tlet square = (x - 1) * 10 + y;\n\t\tthis.alive++;\n\t\tthis.ships.push(ship);\n\t\tif (dir == 0) {\n\t\t\tfor (let i = 0; i < ship.len; i++) {\n\t\t\t\tsquare = (x - 1) * 10 + y;\n\t\t\t\tthis.coords[square][2] = ship.name;\n\t\t\t\tx++;\n\t\t\t}\n\t\t} else {\n\t\t\tfor (let i = 0; i < ship.len; i++) {\n\t\t\t\tsquare = (x - 1) * 10 + y;\n\t\t\t\tthis.coords[square][2] = ship.name;\n\t\t\t\ty++;\n\t\t\t}\n\t\t}\n\t}\n\n\tavailableSquare(x, y) {\n\t\tconst square = (x - 1) * 10 + y;\n\n\t\tif (this.coords[square][1] == false) {\n\t\t\treturn true;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treceiveAttack(x, y) {\n\t\tconst square = (x - 1) * 10 + y;\n\t\tif (this.coords[square][1] == false) {\n\t\t\tthis.coords[square][1] = true;\n\t\t\tif (this.coords[square][2] != undefined) {\n\t\t\t\tconst attacked = this.ships.indexOf((ship) => {\n\t\t\t\t\tship.name == this.coords[square][2];\n\t\t\t\t});\n\t\t\t\tthis.ships[attacked].hit();\n\t\t\t\tif (this.ships[attacked].isSunk()) {\n\t\t\t\t\tthis.alive--;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\thasShips() {\n\t\tif (this.alive == 0) {\n\t\t\treturn false;\n\t\t} else {\n\t\t\treturn true;\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Gameboard.js?");

/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/scripts/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/scripts/Ship.js\");\n\n\n\nclass Player {\n\tconstructor(name) {\n\t\tthis.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\t\tthis.name = name;\n\t\tthis.toPlace = [\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2, 'Patrol Boat'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Submarine'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Destroyer'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4, 'Battleship'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5, 'Carrier'),\n\t\t];\n\t\tthis.opponentsGameboard = null;\n\t}\n\n\tsetOpponent(opponent) {\n\t\tthis.opponentsGameboard = opponent.gameboard;\n\t}\n\n\tplaceShip(x, y, dir) {\n\t\tif (this.toPlace.length > 0) {\n\t\t\tthis.gameboard.placeShip(x, y, dir, this.toPlace[0]);\n\t\t\tthis.toPlace.splice(0, 1);\n\t\t}\n\t}\n\n\tplaceShipCPU() {\n\t\tlet dir = Math.floor(Math.random() + 1);\n\t\tlet x, y, start, end;\n\t\tif (dir == 0) {\n\t\t\tx = Math.floor(Math.random() * (12 - this.toPlace[0].length) + 1);\n\t\t\ty = Math.floor(Math.random() * 10 + 1);\n\t\t} else {\n\t\t\tx = Math.floor(Math.random() * 10 + 1);\n\t\t\ty = Math.floor(Math.random() * (12 - this.toPlace[0].length) + 1);\n\t\t}\n\t\t/*verify if placement is legal*/\n\t\tif (dir == 0) {\n\t\t\tstart = (x - 1) * 10 + y;\n\t\t\tend = start + this.toPlace[0].length - 1;\n\t\t\tfor (let i = start; i < end; i++) {\n\t\t\t\tif (this.gameboard.coords[i][1] == true) return;\n\t\t\t}\n\t\t} else {\n\t\t\tstart = (x - 1) * 10 + y;\n\t\t\tfor (let i = 0; i < this.toPlace[0].length; i++) {\n\t\t\t\tif (this.gameboard.coords[start][1] == true) return;\n\t\t\t\tstart += 10;\n\t\t\t}\n\t\t}\n\n\t\tthis.gameboard.placeShip(x, y, dir);\n\t}\n\n\tmakePlay(x, y) {\n\t\tthis.opponentsGameboard.receiveAttack(x, y);\n\t}\n\n\tmakePlayCPU() {\n\t\tlet x = Math.floor(Math.random() * 10 + 1);\n\t\tlet y = Math.floor(Math.random() * 10 + 1);\n\n\t\twhile (!this.opponent.gameboard.availableSquare(x, y)) {\n\t\t\tx = Math.floor(Math.random() * 10 + 1);\n\t\t\ty = Math.floor(Math.random() * 10 + 1);\n\t\t}\n\t\tthis.opponent.gameboard.receiveAttack(x, y);\n\t}\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Player.js?");

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