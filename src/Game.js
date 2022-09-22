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
            const clicked = await this.searchForClicked;
            let x = clicked.getAttribute('data-x');
            let y = clicked.getAttribute('data-y');
            this.player.gameboard.placeShip(x, y, toPlace[0].dir, toPlace[0]);
        }
    }

    static searchForClicked() {
        let clicked = undefined;

        while (clicked == undefined) {
            clicked = document.querySelector('.clicked');
        }

        return clicked;
    }

    static switchDirection() {}

    static start() {
        UI.startGame;
    }

    static end() {
        UI.endGameModal;
    }
}
