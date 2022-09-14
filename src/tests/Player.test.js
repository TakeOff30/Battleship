import Player from '../scripts/Player';

test('setting opponent', () => {
    const user = new Player('Player1');
    const CPU = new Player('CPU');

    user.setOpponent(CPU);
    CPU.setOpponent(user);

    expect(user.opponent).toBe(CPU);
});

test('ship placing', () => {
    const user = new Player('Player1');
    const CPU = new Player('CPU');

    user.setOpponent(CPU);
    CPU.setOpponent(user);

    user.placeShip(1, 1, 0, user.toPlace[0]);

    expect(user.toPlace.length).toBe(4);
});

test('opponent setting', () => {
    const user = new Player('Player1');
    const CPU = new Player('CPU');

    user.setOpponent(CPU);
    CPU.setOpponent(user);

    expect(user.opponent).toBe(CPU);
});

test('making a play(user)', () => {
    const user = new Player('Player1');
    const CPU = new Player('CPU');

    user.setOpponent(CPU);
    CPU.setOpponent(user);

    user.makePlay(1, 1);

    expect(CPU.gameboard.coords[1][1]).toBe(true);
});
