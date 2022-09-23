import UI from './UI';
import Player from './scripts/Player';

const Game = (function () {
    let player;
    let cpu;

    function main() {
        setup();
    }

    function setup() {
        const playerName = document.querySelector('.playerTitle');
        player = new Player(playerName.textContent);
        cpu = new Player('CPU');

        player.setOpponent(cpu);
        cpu.setOpponent(player);
        /*solve placing*/
        placing();
    }

    function placing() {
        player.toPlace.forEach((ship) => {
            UI.availables(ship);
            let x = clicked.getAttribute('data-x');
            let y = clicked.getAttribute('data-y');
            player.placeShip(x, y, ship.dir);
        });
    }

    function searchForClicked() {
        let clicked = undefined;

        while (clicked == undefined) {
            clicked = document.querySelector('.clicked');
        }

        return clicked;
    }

    return {
        main,
        setup,
        placing,
        searchForClicked,
    };
})();

export default Game;
