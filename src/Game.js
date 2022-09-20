import UI from './UI';
import Ship from './scripts/Ship';
import Player from './scripts/Player';
import Gameboard from './scripts/Gameboard';

export default class Game {
    constructor() {}

    static main() {}

    static setup() {
        const playerName = document.querySelector('.playerTitle');
        const player = new Player(playerName.textContent);
        const cpu = new Player('CPU');

        player.setOpponent(cpu);
        cpu.setOpponent(player);

        player.toPlace.forEach((ship) => {
            UI.horizontalPlacing(ship);
        });
    }

    static start() {}

    static end() {}
}
