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

        for (let x = 1; x <= 10; x++) {
            for (let y = 1; y <= 10; y++) {
                square = document.createElement('div');
                square.classList.add('square');
                square.classList.add(player);
                square.setAttribute('data-x', x);
                square.setAttribute('data-y', y);
                container.appendChild(square);
            }
        }
    }

    /*  function getUserX() {
        return
    }

    function getUserY() {
        
    }

    function endGameModal() {}

    function startGame() {} */

    return {
        enableButtons,
        horizontalPlacing,
        verticalPlacing,
        startGame,
    };
})();

export default UI;
