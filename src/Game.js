import UI from './UI';
import Ship from './scripts/Ship';
import Player from './scripts/Player';
import Gameboard from './scripts/Gameboard';

export default class Game {
	constructor() {
		this.player = null;
		this.cpu = null;
		this.dir = null;
	}

	static main() {
		this.setup;
		this.start;
		this.placing;
	}

	static setup() {
		const playerName = document.querySelector('.playerTitle');
		this.player = new Player(playerName.textContent);
		this.cpu = new Player('CPU');
		this.dir = this.player.toPlace[0].dir;

		this.player.setOpponent(cpu);
		this.cpu.setOpponent(player);
	}

	static async placing() {
		while (this.player.toPlace.length > 0) {
			UI.availables(this.player.toPlace[0]);
			let x = await UI.getUserX();
			let y = await UI.getUserY();
			this.player.gameboard.placeShip(x, y, toPlace[0].dir, toPlace[0]);
		}
	}

	static start() {
		UI.startGame;
	}

	static end() {
		UI.endGameModal;
	}
}
