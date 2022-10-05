import UI from './UI';
import Player from './scripts/Player';

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
    }

    /* this goes in ui */
    function placing() {
        console.log(player.toPlace);
        if (player.toPlace.length == 0) {
            placingCPU();
            startGame();
            UI.enableHits();
            UI.disableDirectionButton();
            console.log(player.opponentsGameboard);
        }
        UI.availables(player.toPlace[0]);
        const clickables = document.querySelectorAll(
            '.square.player:not(.unable):not(.occupied)'
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
        do {
            console.log(cpu.toPlace[0]);
            cpu.placeShipCPU();
        } while (cpu.toPlace.length > 0);
    }

    function startGame() {
        UI.startGame();
    }

    function playerHits(x, y) {
        player.makePlay(x, y);
        const square = (parseInt(y) - 1) * 10 + parseInt(x);
        if (player.opponentsGameboard.coords[square][2] == null) {
            UI.displayPlayerMiss(x, y);
        } else {
            UI.displayPlayerHit(x, y);
        }
    }

    function cpuHits() {
        let x = Math.floor(Math.random() * 10 + 1);
        let y = Math.floor(Math.random() * 10 + 1);

        while (!cpu.opponentsGameboard.availableSquare(x, y)) {
            x = Math.floor(Math.random() * 10 + 1);
            y = Math.floor(Math.random() * 10 + 1);
        }
        cpu.makePlay(x, y);
        UI.displayCPUHit(x, y);
    }

    function checkWinner() {
        if (!player.opponentsGameboard.hasShips()) {
            UI.showWinner(player);
            return;
        }
        if (!cpu.opponentsGameboard.hasShips()) {
            UI.showWinner(cpu);
            return;
        }
    }

    return {
        main,
        setup,
        placing,
        changeDirection,
        playerHits,
        cpuHits,
        checkWinner,
    };
})();

export default Game;
