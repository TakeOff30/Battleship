export default class Ship {
    constructor(length, name) {
        this.length = length;
        this.hits = 0;
        this.name = name;
        this.dir = 0;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        return this.hits == this.length;
    }
}
