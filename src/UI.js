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

    /* available squares */

    function availables(ship) {
        /*removing previously cliked*/
        const preClicked = document.querySelector('.clicked');
        if (clicked != undefined) {
            preClicked.classList.remove('clicked');
        }

        const cpuSection = document.querySelector('.cpuSection');
        cpuSection.classList.add('unable');

        /*which are unable*/
        let limit;
        const squares = document.querySelectorAll('.square');
        /*ship size*/
        if (ship.dir == 0) {
            limit = 12 - ship.length;
            squares.forEach((square) => {
                if (square.getAttribute('data-x') > limit) {
                    square.classList.add('unable');
                }
            });
        } else if (ship.dir == 1) {
            limit = 12 - ship.length;
            squares.forEach((square) => {
                if (square.getAttribute('data-y') > limit) {
                    square.classList.add('unable');
                }
            });
        }
        /*occuppied slots*/

        const clickables = document.querySelectorAll('.square:not(.unable)');
        clickables.forEach((clickable) => {
            clickable.addEventListener('click', () => {
                clickable.classList.add('clicked');
            });
        });
    }

    function getUserX(square) {
        const x = square.getAttribute('data-x');
        return x;
    }

    function getUserY(square) {
        const y = square.getAttribute('data-y');
        return y;
    }

    function endGameModal() {}

    function startGame() {}

    return {
        enableButtons,
        availables,
        getUserX,
        getUserY,
        startGame,
        availables,
    };
})();

export default UI;
