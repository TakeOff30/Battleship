import Game from './Game';

const UI = (function () {
    function enableButtons() {
        const play = document.querySelector('.play');
        const save = document.querySelector('.save');

        play.addEventListener('click', () => {
            hideMain();
            displayModal();
        });
        save.addEventListener('click', () => {
            const playerTitle = document.querySelector('.playerTitle');
            const nameInput = document.querySelector('input');
            playerTitle.textContent = nameInput.value;
            displayGameboards();
            Game.main();
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
        const preOccupied = document.querySelectorAll('.occupied');
        if (preClicked != undefined) preClicked.classList.remove('clicked');
        if (preOccupied != undefined) {
            preOccupied.forEach((occupied) => {
                occupied.classList.remove('occupied');
            });
        }

        const cpuSection = document.querySelector('.cpuSection');
        cpuSection.classList.add('unable');

        let limit = 12 - ship.length;
        let minimumDistance = ship.length;
        const squares = document.querySelectorAll('.square');
        /*depending on ship size*/
        if (ship.dir == 0) {
            squares.forEach((square) => {
                if (square.getAttribute('data-x') >= limit) {
                    square.classList.add('unable');
                } else if (square.classList.contains('ship')) {
                    square.classList.add('unable');
                    setDistanceLimits(square, 0, minimumDistance);
                }
            });
        } else if (ship.dir == 1) {
            squares.forEach((square) => {
                if (square.getAttribute('data-y') >= limit) {
                    square.classList.add('unable');
                } else if (square.classList.contains('ship')) {
                    square.classList.add('unable');
                    setDistanceLimits(square, 1, minimumDistance);
                }
            });
        }

        const clickables = document.querySelectorAll(
            '.square:not(.unable):not(.occupied)'
        );
        clickables.forEach((clickable) => {
            clickable.addEventListener('click', () => {
                clickable.classList.add('clicked');
            });
            clickable.addEventListener('mouseover', () => {
                let x = clickable.getAttribute('data-x'),
                    y = clickable.getAttribute('data-y');
                clickable.style.backgroundColor = 'gray';
                let toHover;
                if (ship.dir == 0) {
                    for (let i = 1; i < ship.length; i++) {
                        console.log(parseInt(x) + parseInt(i));
                        toHover = document.querySelector(
                            '[data-x="' +
                                (parseInt(x) + parseInt(i)) +
                                '"][data-y="' +
                                y +
                                '"]'
                        );
                        toHover.style.backgroundColor = 'gray';
                    }
                } else {
                    for (let i = 1; i < ship.length; i++) {
                        toHover = document.querySelector(
                            '[data-x="' +
                                x +
                                '"][data-y="' +
                                (parseInt(y) + parseInt(i)) +
                                '"]'
                        );
                        toHover.style.backgroundColor = 'gray';
                    }
                }
            });
            clickable.addEventListener('mouseout', () => {
                let x = clickable.getAttribute('data-x'),
                    y = clickable.getAttribute('data-y');
                clickable.style.backgroundColor = 'white';
                let toHover;
                if (ship.dir == 0) {
                    for (let i = 1; i < ship.length; i++) {
                        toHover = document.querySelector(
                            '[data-x="' +
                                (parseInt(x) + parseInt(i)) +
                                '"][data-y="' +
                                y +
                                '"]'
                        );
                        toHover.style.backgroundColor = 'white';
                    }
                } else {
                    for (let i = 1; i < ship.length; i++) {
                        toHover = document.querySelector(
                            '[data-x="' +
                                x +
                                '"][data-y="' +
                                (parseInt(y) + parseInt(i)) +
                                '"]'
                        );
                        toHover.style.backgroundColor = 'white';
                    }
                }
            });
        });
    }

    function setDistanceLimits(square, orientation, distance) {
        let start;
        let end;
        if (orientation == 0) {
            start = square.getAttribute('data-x') - distance;
            end = square.getAttribute('data-x') + distance;
            if (start < 1) start = 1;
            if (end > 10) end = 10;
            let toUnable;
            for (let i = start; i < end; i++) {
                toUnable = document.querySelector(
                    '[data-x=' + start + '][data-y=' + end + ']'
                );
                toUnable.classList.add('occupied');
            }
        } else {
            start = square.getAttribute('data-y') - distance;
            end = square.getAttribute('data-y') + distance;
            if (start < 1) start = 1;
            if (end > 10) end = 10;
            let toUnable;
            for (let i = start; i < end; i++) {
                toUnable = document.querySelector(
                    '[data-x=' + start + '][data-y=' + end + ']'
                );
                toUnable.classList.add('occupied');
            }
        }
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

    return {
        enableButtons,
        availables,
        getUserX,
        getUserY,
        availables,
    };
})();

export default UI;
