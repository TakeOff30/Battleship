import { CleanPlugin } from 'webpack';
import Gameboard from './Gameboard';
import Ship from './Ship';

export default class Player {
    constructor(name) {
        this.gameboard = new Gameboard();
        this.name = name;
        this.toPlace = [
            new Ship(2, 'Patrol Boat'),
            new Ship(3, 'Submarine'),
            new Ship(3, 'Destroyer'),
            new Ship(4, 'Battleship'),
            new Ship(5, 'Carrier'),
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

    placeShipCPU() {
        let dir = Math.floor(Math.random() + 1);
        let x, y, start, end;
        if (dir == 0) {
            x = Math.floor(Math.random() * (12 - this.toPlace[0].length) + 1);
            y = Math.floor(Math.random() * 10 + 1);
            start = (x - 1) * 10 + y;
            end = start + this.toPlace[0].length - 1;
            if (end > 10) return;
            if (this.isPositionAvailable(start, end, dir)) {
                this.placeShip(x, y, dir);
            }
        } else {
            x = Math.floor(Math.random() * 10 + 1);
            y = Math.floor(Math.random() * (12 - this.toPlace[0].length) + 1);
            start = (x - 1) * 10 + y;
            end = start + this.toPlace[0].length * 10;
            if (end > 100) return;
            if (this.isPositionAvailable(start, end, dir)) {
                this.placeShip(x, y, dir);
            }
        }

        this.gameboard.placeShip(x, y, dir, this.toPlace[0]);
        this.toPlace.splice(0, 1);
    }

    isPositionAvailable(start, end, dir) {
        let inc;
        dir == 0 ? (inc = 1) : (inc = 10);
        for (let i = start; i < end; i = i + inc) {
            if (
                this.gameboard.coords[i][1] ||
                this.gameboard.coords[i][1] == undefined
            )
                return false;
        }
        return true;
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
