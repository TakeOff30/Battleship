const UI = (function () {
    function enableButtons() {
        const play = document.querySelector('.play');
        const save = document.querySelector('.save');
        const vertical = document.querySelector('.vertical');
        const horizontal = document.querySelector('.horizontal');

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
        vertical.addEventListener('click', () => {
            verticalPlacing();
        });
        horizontal.addEventListener('click', () => {
            horizontalPlacing();
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

        for (let i = 1; i < 101; i++) {
            square = document.createElement('div');
            square.classList.add('square');
            square.classList.add(player);
            square.setAttribute('data-coords', i);
            container.appendChild(square);
        }
    }

    function verticalPlacing(ship) {
        const cpuSection = document.querySelector('.cpuSection');

        cpuSection.classList.add('unable');

        const square = document.querySelectorAll('.square');
        square.forEach((square) => {
            if (square.getAttribute('data-coords') > 60) {
                square.classList.add('unable');
            }
        });
    }

    function horizontalPlacing(ship) {
        const cpuSection = document.querySelector('.cpuSection');
        let toWait = 11 - ship.size;
        let toUnable = 11 - toWait;
        cpuSection.classList.add('unable');

        const square = document.querySelectorAll('.square');

        for (let i = 0; i < 100; i++) {
            if (toWait == 0) {
                if (toUnable > 0) {
                    square[i].classList.add('unable');
                    toUnable--;
                } else {
                    toWait = 11 - ship.size;
                    toUnable = 11 - toWait;
                }
            }
        }

        /* const availableSquares = document.querySelectorAll('') */
    }

    function endGameModal() {}

    function startGame() {}

    return {
        enableButtons,
        horizontalPlacing,
        verticalPlacing,
        startGame,
    };
})();

export default UI;
