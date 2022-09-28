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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _scripts_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Player */ \"./src/scripts/Player.js\");\n/* harmony import */ var _scripts_Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Ship */ \"./src/scripts/Ship.js\");\n\n\n\n\nconst Game = (function () {\n\tlet player;\n\tlet cpu;\n\tlet dir = 0;\n\n\tfunction main() {\n\t\tsetup();\n\t}\n\n\tasync function setup() {\n\t\tconst playerName = document.querySelector('.playerTitle');\n\t\tplayer = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](playerName.textContent);\n\t\tcpu = new _scripts_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('CPU');\n\n\t\tplayer.setOpponent(cpu);\n\t\tcpu.setOpponent(player);\n\t\tplacing();\n\t}\n\n\t/* this goes in ui */\n\tfunction placing() {\n\t\tconsole.log(player.toPlace);\n\t\tif (player.toPlace.length == 0) {\n\t\t\tplacingCPU();\n\t\t\tstartGame();\n\n\t\t\tconsole.log('ciao');\n\t\t}\n\t\t_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].availables(player.toPlace[0]);\n\t\tconst clickables = document.querySelectorAll(\n\t\t\t'.square:not(.unable):not(.occupied)'\n\t\t);\n\n\t\tclickables.forEach((clickable) => {\n\t\t\tclickable.addEventListener('click', () => {\n\t\t\t\tclickable.classList.add('clicked');\n\t\t\t\tconst clicked = document.querySelector('.clicked');\n\t\t\t\tconst hovered = document.querySelectorAll('.hovered');\n\t\t\t\thovered.forEach((hover) => {\n\t\t\t\t\thover.classList.remove('hovered');\n\t\t\t\t\thover.classList.add('ship');\n\t\t\t\t});\n\t\t\t\tdir = player.toPlace[0].dir;\n\t\t\t\tplayer.placeShip(\n\t\t\t\t\tclicked.getAttribute('data-x'),\n\t\t\t\t\tclicked.getAttribute('data-y'),\n\t\t\t\t\tdir\n\t\t\t\t);\n\t\t\t\tplacing();\n\t\t\t});\n\t\t});\n\t}\n\n\tfunction changeDirection() {\n\t\tplayer.toPlace[0].dir == 0\n\t\t\t? (player.toPlace[0].dir = 1)\n\t\t\t: (player.toPlace[0].dir = 0);\n\t\tplacing();\n\t}\n\n\tfunction placingCPU() {\n\t\twhile (cpu.toPlace.length != 0) {\n\t\t\tcpu.placeShipCPU();\n\t\t}\n\t}\n\n\tfunction startGame() {\n\t\t_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].startGame();\n\t}\n\n\treturn {\n\t\tmain,\n\t\tsetup,\n\t\tplacing,\n\t\tchangeDirection,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\nconst UI = (function () {\n\tfunction enableButtons() {\n\t\tconst play = document.querySelector('.play');\n\t\tconst save = document.querySelector('.save');\n\t\tconst direction = document.querySelector('.direction');\n\n\t\tplay.addEventListener('click', () => {\n\t\t\thideMain();\n\t\t\tdisplayModal();\n\t\t});\n\t\tsave.addEventListener('click', () => {\n\t\t\tconst playerTitle = document.querySelector('.playerTitle');\n\t\t\tconst nameInput = document.querySelector('input');\n\t\t\tplayerTitle.textContent = nameInput.value;\n\t\t\tdisplayGameboards();\n\t\t\t_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main();\n\t\t});\n\t\tdirection.addEventListener('click', () => {\n\t\t\t_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeDirection();\n\t\t});\n\t}\n\n\tfunction hideMain() {\n\t\tconst elements = document.querySelectorAll('.main');\n\n\t\telements.forEach((element) => {\n\t\t\telement.style.left = '-100%';\n\t\t});\n\t}\n\n\tfunction displayModal() {\n\t\tconst main = document.querySelector('.home');\n\t\tconst modal = document.querySelector('.modal');\n\n\t\tmain.style.backgroundPosition = 'top right';\n\t\tmodal.classList.add('active');\n\t}\n\n\tfunction displayGameboards() {\n\t\tconst main = document.querySelector('.home');\n\t\tconst modal = document.querySelector('.modal');\n\t\tconst gameSection = document.querySelector('.gameSection');\n\t\tconst playerGrid = document.querySelector('.player');\n\t\tconst cpuGrid = document.querySelector('.cpu');\n\n\t\tcreateGrid(playerGrid, 'player');\n\t\tcreateGrid(cpuGrid, 'cpu');\n\n\t\tmain.style.backgroundPosition = 'bottom right';\n\t\tmodal.classList.add('hidden');\n\t\tgameSection.classList.add('active');\n\t}\n\n\tfunction createGrid(container, player) {\n\t\tlet square;\n\n\t\tfor (let y = 1; y <= 10; y++) {\n\t\t\tfor (let x = 1; x <= 10; x++) {\n\t\t\t\tsquare = document.createElement('div');\n\t\t\t\tsquare.classList.add('square');\n\t\t\t\tsquare.classList.add(player);\n\t\t\t\tsquare.setAttribute('data-y', y);\n\t\t\t\tsquare.setAttribute('data-x', x);\n\t\t\t\tcontainer.appendChild(square);\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction removeEventListeners(elems) {\n\t\telems.forEach((elem) => {\n\t\t\tconst oldElem = elem;\n\t\t\tconst newElem = oldElem.cloneNode(true);\n\t\t\toldElem.parentNode.replaceChild(newElem, oldElem);\n\t\t});\n\t}\n\n\t/* available squares */\n\n\tfunction availables(ship) {\n\t\tif (ship == undefined) return;\n\t\t/*removing previously cliked*/\n\t\tcleanPreviousPlacement();\n\n\t\tconst cpuSection = document.querySelector('.cpuSection');\n\t\tcpuSection.classList.add('unable');\n\n\t\tsetLimits(ship);\n\n\t\t/*remove all previous event listeners*/\n\t\tlet clickables = document.querySelectorAll(\n\t\t\t'.square:not(.unable):not(.ship)'\n\t\t);\n\n\t\tremoveEventListeners(clickables);\n\n\t\t/*select new cloned squares*/\n\t\tclickables = document.querySelectorAll(\n\t\t\t'.square:not(.unable):not(.ship)'\n\t\t);\n\t\tclickables.forEach((clickable) => {\n\t\t\tshowPlacement(clickable, ship);\n\t\t\thidePlacement(clickable, ship);\n\t\t});\n\t}\n\n\tfunction cleanPreviousPlacement() {\n\t\tconst preClicked = document.querySelector('.clicked');\n\t\tconst preOccupied = document.querySelectorAll('.occupied');\n\t\tif (preClicked != undefined) preClicked.classList.remove('clicked');\n\t\tif (preOccupied != undefined) {\n\t\t\tpreOccupied.forEach((occupied) => {\n\t\t\t\toccupied.classList.remove('occupied');\n\t\t\t});\n\t\t}\n\t}\n\n\tfunction setLimits(ship) {\n\t\tlet limit = 12 - ship.length;\n\t\tlet minimumDistance = ship.length - 1;\n\t\tconst squares = document.querySelectorAll('.square');\n\t\t/*depending on ship size*/\n\t\tif (ship.dir == 0) {\n\t\t\tsquares.forEach((square) => {\n\t\t\t\tif (square.classList.contains('unableY'))\n\t\t\t\t\tsquare.classList.remove('unableY');\n\t\t\t\tif (\n\t\t\t\t\tsquare.getAttribute('data-x') >= limit ||\n\t\t\t\t\tsquare.classList.contains('ship')\n\t\t\t\t) {\n\t\t\t\t\tsquare.classList.add('unableX');\n\t\t\t\t\tif (square.classList.contains('ship'))\n\t\t\t\t\t\tsetDistanceBetweenShips(square, 0, minimumDistance);\n\t\t\t\t}\n\t\t\t});\n\t\t} else if (ship.dir == 1) {\n\t\t\tsquares.forEach((square) => {\n\t\t\t\tif (square.classList.contains('unableX'))\n\t\t\t\t\tsquare.classList.remove('unableX');\n\t\t\t\tif (\n\t\t\t\t\tsquare.getAttribute('data-y') >= limit ||\n\t\t\t\t\tsquare.classList.contains('ship')\n\t\t\t\t) {\n\t\t\t\t\tsquare.classList.add('unableY');\n\t\t\t\t\tif (square.classList.contains('ship'))\n\t\t\t\t\t\tsetDistanceBetweenShips(square, 1, minimumDistance);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\n\tfunction showPlacement(clickable, ship) {\n\t\tclickable.addEventListener('mouseover', () => {\n\t\t\tlet x = clickable.getAttribute('data-x'),\n\t\t\t\ty = clickable.getAttribute('data-y');\n\t\t\tclickable.classList.add('hovered');\n\t\t\tlet toHover;\n\t\t\tif (ship.dir == 0) {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\tconsole.log(parseInt(x) + parseInt(i));\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\t(parseInt(x) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\ty +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.add('hovered');\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\tx +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\t(parseInt(y) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.add('hovered');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction hidePlacement(clickable, ship) {\n\t\tclickable.addEventListener('mouseout', () => {\n\t\t\tlet x = clickable.getAttribute('data-x'),\n\t\t\t\ty = clickable.getAttribute('data-y');\n\t\t\tclickable.classList.remove('hovered');\n\t\t\tlet toHover;\n\t\t\tif (ship.dir == 0) {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\t(parseInt(x) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\ty +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.remove('hovered');\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tfor (let i = 1; i < ship.length; i++) {\n\t\t\t\t\ttoHover = document.querySelector(\n\t\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\t\tx +\n\t\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\t\t(parseInt(y) + parseInt(i)) +\n\t\t\t\t\t\t\t'\"]'\n\t\t\t\t\t);\n\t\t\t\t\ttoHover.classList.remove('hovered');\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction setDistanceBetweenShips(square, orientation, distance) {\n\t\tlet start;\n\t\tlet end;\n\t\tif (orientation == 0) {\n\t\t\tstart = square.getAttribute('data-x') - distance;\n\t\t\tend = square.getAttribute('data-x');\n\t\t\tif (start < 1) start = 1;\n\t\t\tif (end > 10) end = 10;\n\t\t\tlet toUnable;\n\t\t\tfor (let i = start; i < end; i++) {\n\t\t\t\ttoUnable = document.querySelector(\n\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\ti +\n\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\tsquare.getAttribute('data-y') +\n\t\t\t\t\t\t'\"]'\n\t\t\t\t);\n\t\t\t\ttoUnable.classList.add('occupied');\n\t\t\t}\n\t\t} else {\n\t\t\tstart = square.getAttribute('data-y') - distance;\n\t\t\tend = square.getAttribute('data-y');\n\t\t\tif (start < 1) start = 1;\n\t\t\tif (end > 10) end = 10;\n\t\t\tlet toUnable;\n\t\t\tfor (let i = start; i < end; i++) {\n\t\t\t\ttoUnable = document.querySelector(\n\t\t\t\t\t'[data-x=\"' +\n\t\t\t\t\t\tsquare.getAttribute('data-x') +\n\t\t\t\t\t\t'\"][data-y=\"' +\n\t\t\t\t\t\ti +\n\t\t\t\t\t\t'\"]'\n\t\t\t\t);\n\t\t\t\ttoUnable.classList.add('occupied');\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction startGame() {\n\t\tconst squares = document.querySelectorAll('.square');\n\n\t\tremoveEventListeners(squares);\n\t\tenableSquares();\n\t}\n\n\tfunction enableSquares() {\n\t\tconst unabled = document.querySelectorAll('.unable');\n\t\tconst unabledX = document.querySelectorAll('.unableX');\n\t\tconst unabledY = document.querySelectorAll('.unableY');\n\t\tconst occupied = document.querySelectorAll('.occupied');\n\n\t\tunabled.forEach((unable) => {\n\t\t\tunable.classList.remove('unable');\n\t\t});\n\t\toccupied.forEach((occupied) => {\n\t\t\toccupied.classList.remove('occupied');\n\t\t});\n\t\tif (unabledX != undefined)\n\t\t\tunabledX.forEach((unable) => {\n\t\t\t\tunable.classList.remove('unableX');\n\t\t\t});\n\t\tif (unabledY != undefined)\n\t\t\tunabledY.forEach((unable) => {\n\t\t\t\tunable.classList.remove('unableY');\n\t\t\t});\n\t}\n\n\tfunction getUserX(square) {\n\t\tconst x = square.getAttribute('data-x');\n\t\treturn x;\n\t}\n\n\tfunction getUserY(square) {\n\t\tconst y = square.getAttribute('data-y');\n\t\treturn y;\n\t}\n\n\treturn {\n\t\tenableButtons,\n\t\tavailables,\n\t\tstartGame,\n\t\tgetUserX,\n\t\tgetUserY,\n\t\tremoveEventListeners,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/scripts/Gameboard.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/scripts/Ship.js\");\n\n\n\nclass Player {\n\tconstructor(name) {\n\t\tthis.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\t\tthis.name = name;\n\t\tthis.toPlace = [\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2, 'Patrol Boat'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Submarine'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 'Destroyer'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4, 'Battleship'),\n\t\t\tnew _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5, 'Carrier'),\n\t\t];\n\t\tthis.opponentsGameboard = null;\n\t}\n\n\tsetOpponent(opponent) {\n\t\tthis.opponentsGameboard = opponent.gameboard;\n\t}\n\n\tplaceShip(x, y, dir) {\n\t\tif (this.toPlace.length > 0) {\n\t\t\tthis.gameboard.placeShip(x, y, dir, this.toPlace[0]);\n\t\t\tthis.toPlace.splice(0, 1);\n\t\t}\n\t}\n\n\tplaceShipCPU() {\n\t\tlet dir = Math.floor(Math.random() + 1);\n\t\tlet x, y, start, end;\n\t\tif (dir == 0) {\n\t\t\tx = Math.floor(Math.random() * (12 - this.toPlace[0].length) + 1);\n\t\t\ty = Math.floor(Math.random() * 10 + 1);\n\t\t} else {\n\t\t\tx = Math.floor(Math.random() * 10 + 1);\n\t\t\ty = Math.floor(Math.random() * (12 - this.toPlace[0].length) + 1);\n\t\t}\n\t\t/*verify if placement is legal*/\n\t\tif (dir == 0) {\n\t\t\tstart = (x - 1) * 10 + y;\n\t\t\tend = start + this.toPlace[0].length - 1;\n\t\t\tif (end > 10) return;\n\t\t\tfor (let i = start; i < end; i++) {\n\t\t\t\tif (\n\t\t\t\t\tthis.gameboard.coords[i][1] == true ||\n\t\t\t\t\tthis.gameboard.coords[i][1] == undefined\n\t\t\t\t)\n\t\t\t\t\treturn;\n\t\t\t}\n\t\t} else {\n\t\t\tstart = (x - 1) * 10 + y;\n\t\t\tend = start + this.toPlace[0].length * 10;\n\t\t\tconsole.log(end);\n\t\t\tif (end > 100) return;\n\t\t\tfor (let i = 0; i < this.toPlace[0].length; i++) {\n\t\t\t\tif (\n\t\t\t\t\tthis.gameboard.coords[start][1] == true ||\n\t\t\t\t\tthis.gameboard.coords[start][1] == undefined\n\t\t\t\t)\n\t\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\tthis.gameboard.placeShip(x, y, dir, this.toPlace[0]);\n\t\tthis.toPlace.splice(0, 1);\n\t}\n\n\tmakePlay(x, y) {\n\t\tthis.opponentsGameboard.receiveAttack(x, y);\n\t}\n\n\tmakePlayCPU() {\n\t\tlet x = Math.floor(Math.random() * 10 + 1);\n\t\tlet y = Math.floor(Math.random() * 10 + 1);\n\n\t\twhile (!this.opponent.gameboard.availableSquare(x, y)) {\n\t\t\tx = Math.floor(Math.random() * 10 + 1);\n\t\t\ty = Math.floor(Math.random() * 10 + 1);\n\t\t}\n\t\tthis.opponent.gameboard.receiveAttack(x, y);\n\t}\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Player.js?");

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