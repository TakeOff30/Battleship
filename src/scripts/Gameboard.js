import UI from '../UI';

export default class GameBoard {
    constructor() {
        this.coords = this.assignCoords();
        this.ships = [];
        this.alive = 0;
    }

    assignCoords() {
        let coords = [];

        for (let i = 0; i <= 100; i++) {
            coords.push([i, false, null]);
        }

        return coords;
    }

    placeShip(x, y, dir, ship) {
        if (ship == undefined) {
            console.log(this.coords);
            return;
        }
        let square = (parseInt(y) - 1) * 10 + parseInt(x);
        this.alive++;
        this.ships.push(ship);
        if (dir == 0) {
            for (let i = 0; i < ship.length; i++) {
                square = (parseInt(y) - 1) * 10 + parseInt(x);
                this.coords[square][2] = ship.name;
                x++;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                square = (parseInt(y) - 1) * 10 + parseInt(x);
                this.coords[square][2] = ship.name;
                y++;
            }
        }
    }

    availableSquare(x, y) {
        const square = (parseInt(y) - 1) * 10 + parseInt(x);
        let ris;
        this.coords[square][1] ? (ris = false) : (ris = true);
        return ris;
    }

    receiveAttack(x, y) {
        const square = (parseInt(y) - 1) * 10 + parseInt(x);
        this.coords[square][1] = true;
        if (this.coords[square][2] != null) {
            console.log(this.coords[square][2]);
            const attacked = this.ships.find(
                ({ name }) => name === this.coords[square][2]
            );
            console.log(this.coords);
            console.log(attacked);
            this.ships[this.ships.indexOf(attacked)].hit();
            if (this.ships[this.ships.indexOf(attacked)].isSunk()) {
                this.alive--;
            }
        }
    }

    hasShips() {
        let ris;
        this.alive == 0 ? (ris = false) : (ris = true);
        return ris;
    }
}
