import Gameboard from './Gameboard';
import Ship from './Ship';

export default class Player {
    constructor(name) {
        this.gameboard = new Gameboard();
        this.name = name;
        this.toPlace = [
            new Ship(5, 'Carrier'),
            new Ship(4, 'Battleship'),
            new Ship(3, 'Destroyer'),
            new Ship(3, 'Submarine'),
            new Ship(2, 'Patrol Boat'),
        ];
        this.opponentsGameboard = null;
    }

    setOpponent(opponent) {
        this.opponentsGameboard = opponent.gameboard;
    }

    placeShip(x, y, dir) {
        if (this.toPlace.length > 0) {
            this.gameboard.placeShip(x, y, dir, this.toPlace[0]);
            this.toPlace.splice(0, 1);
        }
    }

    makePlay(x, y) {
        this.opponentsGameboard.receiveAttack(x, y);
    }

    makePlayCPU() {
        let x = Math.floor(Math.random() * 10 + 1);
        let y = Math.floor(Math.random() * 10 + 1);

        while (!this.opponent.gameboard.availableSquare(x, y)) {
            x = Math.floor(Math.random() * 10 + 1);
            y = Math.floor(Math.random() * 10 + 1);
        }
        this.opponent.gameboard.receiveAttack(x, y);
    }
}
