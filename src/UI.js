const UI = (function () {
    function enableButtons() {
        const play = document.querySelector('.play');
        const save = document.querySelector('.save');

        play.addEventListener('click', () => {
            hideMain();
            displayModal();
        });
        save.addEventListener('click', () => {
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
        const playerGrid = document.querySelector('.gameboard');

        main.style.backgroundPosition = 'bottom right';
        modal.classList.add('hidden');
        gameSection.classList.add('active');
    }

    return {
        enableButtons,
    };
})();

export default UI;
