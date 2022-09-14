export default class Ship {
    constructor(length, name) {
        this.length = length;
        this.hits = 0;
        this.name = name;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        if (this.hits == this.length) {
            return true;
        } else {
            return false;
        }
    }
}
