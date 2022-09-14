import Ship from './Ship';

export default class GameBoard {
    constructor() {
        this.coords = this.assignCoords();
        this.ships = [];
        this.alive = 0;
    }

    assignCoords() {
        let coords = [];

        for (let i = 0; i <= 100; i++) {
            coords.push([i, false, undefined]);
        }

        return coords;
    }

    placeShip(x, y, dir, ship) {
        let square = (x - 1) * 10 + y;
        this.alive++;
        this.ships.push(ship);
        if (dir == 0) {
            for (let i = 0; i < ship.len; i++) {
                square = (x - 1) * 10 + y;
                this.coords[square][2] = ship.name;
                x++;
            }
        } else {
            for (let i = 0; i < ship.len; i++) {
                square = (x - 1) * 10 + y;
                this.coords[square][2] = ship.name;
                y++;
            }
        }
    }

    availableSquare(x, y) {
        const square = (x - 1) * 10 + y;

        if (this.coords[square][1] == false) {
            return true;
        } else {
            return false;
        }
    }

    receiveAttack(x, y) {
        const square = (x - 1) * 10 + y;
        if (this.coords[square][1] == false) {
            this.coords[square][1] = true;
            if (this.coords[square][2] !== undefined) {
                const attacked = this.ships.indexOf((ship) => {
                    ship.name == this.coords[square][2];
                });
                this.ships[attacked].hit();
                if (this.ships[attacked].isSunk()) {
                    this.alive--;
                }
            }
        }
    }

    hasShips() {
        if (this.alive == 0) {
            return false;
        } else {
            return true;
        }
    }
}
