import UI from './UI';
import Player from './scripts/Player';

const Game = (function () {
	let player;
	let cpu;
	let dir = 0;

	function main() {
		setup();
	}

	async function setup() {
		const playerName = document.querySelector('.playerTitle');
		player = new Player(playerName.textContent);
		cpu = new Player('CPU');

		player.setOpponent(cpu);
		cpu.setOpponent(player);
		placing();
	}

	/* this goes in ui */
	function placing() {
		console.log(player.toPlace);
		if (player.toPlace.length == 0) {
			placingCPU();
			startGame();
		}
		UI.availables(player.toPlace[0]);
		const clickables = document.querySelectorAll(
			'.square:not(.unable):not(.occupied)'
		);

		clickables.forEach((clickable) => {
			clickable.addEventListener('click', () => {
				UI.onSelection(clickable, player.toPlace[0]);
				const clicked = document.querySelector('.clicked');
				dir = player.toPlace[0].dir;
				player.placeShip(
					clicked.getAttribute('data-x'),
					clicked.getAttribute('data-y'),
					dir
				);
				placing();
			});
		});
	}

	function changeDirection() {
		player.toPlace[0].dir == 0
			? (player.toPlace[0].dir = 1)
			: (player.toPlace[0].dir = 0);
		placing();
	}

	function placingCPU() {
		while (cpu.toPlace.length != 0) {
			cpu.placeShipCPU();
		}
		console.log(cpu.gameboard.coords);
	}

	function startGame() {
		UI.startGame();
	}

	return {
		main,
		setup,
		placing,
		changeDirection,
	};
})();

export default Game;
