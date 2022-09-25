import UI from './UI';
import Player from './scripts/Player';
import Ship from './scripts/Ship';

const Game = (function () {
    let player;
    let cpu;
    let dir = 0;

    function main() {
        setup();
    }

    function setup() {
        const playerName = document.querySelector('.playerTitle');
        player = new Player(playerName.textContent);
        cpu = new Player('CPU');

        player.setOpponent(cpu);
        cpu.setOpponent(player);

        placing();
        placingCPU();
    }

    /* this goes in ui */
    function placing() {
        if (player.toPlace == []) return;
        UI.availables(player.toPlace[0]);
        const clickables = document.querySelectorAll(
            '.square:not(.unable):not(.occupied)'
        );

        clickables.forEach((clickable) => {
            clickable.addEventListener('click', () => {
                clickable.classList.add('clicked');
                const clicked = document.querySelector('.clicked');
                const hovered = document.querySelectorAll('.hovered');
                hovered.forEach((hover) => {
                    hover.classList.remove('hovered');
                    hover.classList.add('ship');
                });
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
        while (cpu.toPlace.length > 0) {}
    }

    return {
        main,
        setup,
        placing,
        changeDirection,
    };
})();

export default Game;
