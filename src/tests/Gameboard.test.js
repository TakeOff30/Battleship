import GameBoard from '../scripts/Gameboard';
import Ship from '../scripts/Ship';

test('gameboard initialization', () => {
    const gameboard = new GameBoard();

    expect(gameboard.coords.length).toBe(101);
});

test('receiving attack', () => {
    const gameboard = new GameBoard();

    gameboard.receiveAttack(1, 1);

    expect(gameboard.coords[1][1]).toBe(true);
});

test('verifing square availability', () => {
    const gameboard = new GameBoard();

    expect(gameboard.availableSquare(1, 1)).toBe(true);
});

test('verifing ship presence', () => {
    const gameboard = new GameBoard();

    expect(gameboard.hasShips()).toBe(false);
});

test('verifing ship presence', () => {
    const gameboard = new GameBoard();

    gameboard.placeShip(1, 1, 0, new Ship(3, 'Destroyer'));

    expect(gameboard.hasShips()).toBe(true);
});
