import Game from './Game';

const UI = (function () {
	function enableButtons() {
		const play = document.querySelector('.play');
		const save = document.querySelector('.save');
		const direction = document.querySelector('.direction');

		play.addEventListener('click', () => {
			hideMain();
			displayModal();
		});
		save.addEventListener('click', () => {
			const playerTitle = document.querySelector('.playerTitle');
			const nameInput = document.querySelector('input');
			playerTitle.textContent = nameInput.value;
			displayGameboards();
			Game.main();
		});
		direction.addEventListener('click', () => {
			Game.changeDirection();
		});
	}

	function hideMain() {
		const elements = document.querySelectorAll('.main');

		elements.forEach((element) => {
			element.style.left = '-100%';
		});
	}

	function displayModal() {
		const main = document.querySelector('.home');
		const modal = document.querySelector('.modal');

		main.style.backgroundPosition = 'top right';
		modal.classList.add('active');
	}

	function displayGameboards() {
		const main = document.querySelector('.home');
		const modal = document.querySelector('.modal');
		const gameSection = document.querySelector('.gameSection');
		const playerGrid = document.querySelector('.player');
		const cpuGrid = document.querySelector('.cpu');

		createGrid(playerGrid, 'player');
		createGrid(cpuGrid, 'cpu');

		main.style.backgroundPosition = 'bottom right';
		modal.classList.add('hidden');
		gameSection.classList.add('active');
	}

	function createGrid(container, player) {
		let square;

		for (let y = 1; y <= 10; y++) {
			for (let x = 1; x <= 10; x++) {
				square = document.createElement('div');
				square.classList.add('square');
				square.classList.add(player);
				square.setAttribute('data-y', y);
				square.setAttribute('data-x', x);
				container.appendChild(square);
			}
		}
	}

	function removeEventListeners(elems) {
		elems.forEach((elem) => {
			const oldElem = elem;
			const newElem = oldElem.cloneNode(true);
			oldElem.parentNode.replaceChild(newElem, oldElem);
		});
	}

	/* available squares */

	function availables(ship) {
		if (ship == undefined) return;
		/*removing previously cliked*/
		cleanPreviousPlacement();

		const cpuSection = document.querySelector('.cpuSection');
		cpuSection.classList.add('unable');

		setLimits(ship);

		/*remove all previous event listeners*/
		let clickables = document.querySelectorAll(
			'.square:not(.unable):not(.ship)'
		);

		removeEventListeners(clickables);

		/*select new cloned squares*/
		clickables = document.querySelectorAll(
			'.square:not(.unable):not(.ship)'
		);
		clickables.forEach((clickable) => {
			showPlacement(clickable, ship);
			hidePlacement(clickable, ship);
		});
	}

	function onSelection(clickable, ship) {
		clickable.classList.add('clicked');
		const hovered = document.querySelectorAll('.hovered');
		hovered.forEach((hover) => {
			hover.classList.remove('hovered');
			hover.classList.add('ship');
			hover.setAttribute('data-ship', ship.name);
		});
	}

	function cleanPreviousPlacement() {
		const preClicked = document.querySelector('.clicked');
		const preOccupied = document.querySelectorAll('.occupied');
		if (preClicked != undefined) preClicked.classList.remove('clicked');
		if (preOccupied != undefined) {
			preOccupied.forEach((occupied) => {
				occupied.classList.remove('occupied');
			});
		}
	}
	function setLimits(ship) {
		const limit = 12 - ship.length;
		const minimumDistance = ship.length - 1;
		const squares = document.querySelectorAll('.square');

		const axisClass = ship.dir === 0 ? 'unableY' : 'unableX';
		const limitFn = ship.dir === 0 ? xLimits : yLimits;

		squares.forEach((square) => {
			if (square.classList.contains(axisClass)) {
				square.classList.remove(axisClass);
			}

			limitFn(square, limit, minimumDistance);
		});
	}

	function xLimits(square, limit, minimumDistance) {
		if (
			square.getAttribute('data-x') >= limit ||
			square.classList.contains('ship')
		) {
			square.classList.add('unableX');
			if (square.classList.contains('ship'))
				setDistanceBetweenShips(square, 0, minimumDistance);
		}
	}

	function yLimits(square, limit, minimumDistance) {
		if (
			square.getAttribute('data-y') >= limit ||
			square.classList.contains('ship')
		) {
			square.classList.add('unableY');
			if (square.classList.contains('ship'))
				setDistanceBetweenShips(square, 1, minimumDistance);
		}
	}

	function showPlacement(clickable, ship) {
		clickable.addEventListener('mouseover', () => {
			let x = clickable.getAttribute('data-x'),
				y = clickable.getAttribute('data-y');
			clickable.classList.add('hovered');
			let toHover;
			if (ship.dir == 0) {
				for (let i = 1; i < ship.length; i++) {
					toHover = document.querySelector(
						`[data-x="${parseInt(x) + i}"][data-y="${y}"]`
					);
					toHover.classList.add('hovered');
				}
			} else {
				for (let i = 1; i < ship.length; i++) {
					toHover = document.querySelector(
						`[data-x="${x}"][data-y="${parseInt(y) + i}"]`
					);
					toHover.classList.add('hovered');
				}
			}
		});
	}

	function hidePlacement(clickable, ship) {
		clickable.addEventListener('mouseout', () => {
			let x = clickable.getAttribute('data-x'),
				y = clickable.getAttribute('data-y');
			clickable.classList.remove('hovered');
			let toHover;
			if (ship.dir == 0) {
				for (let i = 1; i < ship.length; i++) {
					toHover = document.querySelector(
						`[data-x="${parseInt(x) + i}"][data-y="${y}"]`
					);
					toHover.classList.remove('hovered');
				}
			} else {
				for (let i = 1; i < ship.length; i++) {
					toHover = document.querySelector(
						`[data-x="${x}"][data-y="${parseInt(y) + i}"]`
					);
					toHover.classList.remove('hovered');
				}
			}
		});
	}

	function setDistanceBetweenShips(square, orientation, distance) {
		const axis = orientation == 0 ? 'x' : 'y';
		const start = Math.max(
			1,
			square.getAttribute(`data-${axis}`) - distance
		);
		const end = Math.min(10, square.getAttribute(`data-${axis}`));

		for (let i = start; i <= end; i++) {
			const toUnable = document.querySelector(
				`[data-x="${axis == 'x' ? i : square.getAttribute('data-x')}"` +
					`][data-y="${
						axis == 'y' ? i : square.getAttribute('data-y')
					}"`
			);
			toUnable.classList.add('occupied');
		}
	}

	function startGame() {
		const squares = document.querySelectorAll('.square');

		removeEventListeners(squares);
		enableSquares();
	}

	function enableSquares() {
		const unabled = document.querySelectorAll('.unable');
		const unabledX = document.querySelectorAll('.unableX');
		const unabledY = document.querySelectorAll('.unableY');
		const occupied = document.querySelectorAll('.occupied');

		unabled.forEach((unable) => {
			unable.classList.remove('unable');
		});
		occupied.forEach((occupied) => {
			occupied.classList.remove('occupied');
		});
		if (unabledX != undefined)
			unabledX.forEach((unable) => {
				unable.classList.remove('unableX');
			});
		if (unabledY != undefined)
			unabledY.forEach((unable) => {
				unable.classList.remove('unableY');
			});
	}

	function enableHits() {
		const playerSquares = document.querySelectorAll('.player:not(.hit)');
		playerSquares.forEach((square) => {
			square.classList.add('hitting');
		});
		const cpuSquares = document.querySelectorAll('.square.cpu');
		cpuSquares.forEach((square) => {
			square.addEventListener('click', () => {
				const x = square.getAttribute('data-x');
				const y = square.getAttribute('data-y');
				Game.playerHits(x, y);
				Game.checkWinner();
				Game.cpuHits();
				Game.checkWinner();
			});
		});
	}

	function displayCPUHit(x, y) {
		const hitSquare = document.querySelector(
			'.square.player[data-x ="' + x + '"][data-y ="' + y + '"]'
		);
		hitSquare.classList.add('hit');
	}

	function displayPlayerHit(x, y) {
		const hitSquare = document.querySelector(
			'.square.cpu[data-x ="' + x + '"][data-y ="' + y + '"]'
		);
		hitSquare.classList.add('ship', 'hit');
	}

	function displayPlayerMiss(x, y) {
		const hitSquare = document.querySelector(
			'.square.cpu[data-x ="' + x + '"][data-y ="' + y + '"]'
		);
		hitSquare.classList.add('hit');
	}

	function disableDirectionButton() {
		const direction = document.querySelector('.direction');

		direction.classList.add('unable');
	}

	function showWinner(player) {
		const endGameModal = document.querySelector('.endGame');
		const overlay = document.querySelector('.overlay');
		const winnerAnnouncement = document.querySelector('.winner');
		const restartButton = document.querySelector('.restart');

		winnerAnnouncement.textContent = 'The winner is ' + player.name;
		overlay.classList.add('active');
		endGameModal.classList.add('active');

		restartButton.addEventListener('click', () => {
			window.location.reload();
		});
	}

	return {
		enableButtons,
		availables,
		startGame,
		removeEventListeners,
		onSelection,
		enableHits,
		displayCPUHit,
		displayPlayerHit,
		displayPlayerMiss,
		disableDirectionButton,
		showWinner,
	};
})();

export default UI;
