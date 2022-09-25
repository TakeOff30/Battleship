import Game from './Game';

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
            Game.main();
        });
        direction.addEventListener('click', () => {
            Game.changeDirection();
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
        if (ship == undefined) return;
        /*removing previously cliked*/
        cleanPreviousPlacement();

        const cpuSection = document.querySelector('.cpuSection');
        cpuSection.classList.add('unable');

        setLimits(ship);

        /*remove all previous event listeners*/
        let clickables = document.querySelectorAll(
            '.square:not(.unable):not(.ship)'
        );
        clickables.forEach((clickable) => {
            const oldElem = clickable;
            const newElem = oldElem.cloneNode(true);
            oldElem.parentNode.replaceChild(newElem, oldElem);
        });
        /*select new cloned squares*/
        clickables = document.querySelectorAll(
            '.square:not(.unable):not(.ship)'
        );
        clickables.forEach((clickable) => {
            showPlacement(clickable, ship);
            hidePlacement(clickable, ship);
        });
    }

    function cleanPreviousPlacement() {
        const preClicked = document.querySelector('.clicked');
        const preOccupied = document.querySelectorAll('.occupied');
        if (preClicked != undefined) preClicked.classList.remove('clicked');
        if (preOccupied != undefined) {
            preOccupied.forEach((occupied) => {
                occupied.classList.remove('occupied');
            });
        }
    }

    function setLimits(ship) {
        let limit = 12 - ship.length;
        let minimumDistance = ship.length - 1;
        const squares = document.querySelectorAll('.square');
        /*depending on ship size*/
        if (ship.dir == 0) {
            squares.forEach((square) => {
                if (square.classList.contains('unableY'))
                    square.classList.remove('unableY');
                if (
                    square.getAttribute('data-x') >= limit ||
                    square.classList.contains('ship')
                ) {
                    square.classList.add('unableX');
                    if (square.classList.contains('ship'))
                        setDistanceBetweenShips(square, 0, minimumDistance);
                }
            });
        } else if (ship.dir == 1) {
            squares.forEach((square) => {
                if (square.classList.contains('unableX'))
                    square.classList.remove('unableX');
                if (
                    square.getAttribute('data-y') >= limit ||
                    square.classList.contains('ship')
                ) {
                    square.classList.add('unableY');
                    if (square.classList.contains('ship'))
                        setDistanceBetweenShips(square, 1, minimumDistance);
                }
            });
        }
    }

    function showPlacement(clickable, ship) {
        clickable.addEventListener('mouseover', () => {
            let x = clickable.getAttribute('data-x'),
                y = clickable.getAttribute('data-y');
            clickable.classList.add('hovered');
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
                    toHover.classList.add('hovered');
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
                    toHover.classList.add('hovered');
                }
            }
        });
    }

    function hidePlacement(clickable, ship) {
        clickable.addEventListener('mouseout', () => {
            let x = clickable.getAttribute('data-x'),
                y = clickable.getAttribute('data-y');
            clickable.classList.remove('hovered');
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
                    toHover.classList.remove('hovered');
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
                    toHover.classList.remove('hovered');
                }
            }
        });
    }

    function setDistanceBetweenShips(square, orientation, distance) {
        let start;
        let end;
        if (orientation == 0) {
            start = square.getAttribute('data-x') - distance;
            end = square.getAttribute('data-x');
            if (start < 1) start = 1;
            if (end > 10) end = 10;
            let toUnable;
            for (let i = start; i < end; i++) {
                toUnable = document.querySelector(
                    '[data-x="' +
                        i +
                        '"][data-y="' +
                        square.getAttribute('data-y') +
                        '"]'
                );
                toUnable.classList.add('occupied');
            }
        } else {
            start = square.getAttribute('data-y') - distance;
            end = square.getAttribute('data-y');
            if (start < 1) start = 1;
            if (end > 10) end = 10;
            let toUnable;
            for (let i = start; i < end; i++) {
                toUnable = document.querySelector(
                    '[data-x="' +
                        square.getAttribute('data-x') +
                        '"][data-y="' +
                        i +
                        '"]'
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

    return {
        enableButtons,
        availables,
        getUserX,
        getUserY,
    };
})();

export default UI;
