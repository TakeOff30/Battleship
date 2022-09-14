import Player from '../scripts/Player';

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

    expect(user.opponentsGameboard).toEqual(CPU.gameboard);
});

test('making a play(user)', () => {
    const user = new Player('Player1');
    const CPU = new Player('CPU');

    CPU.setOpponent(user);
    user.setOpponent(CPU);

    user.makePlay(1, 2);

    expect(user.opponentsGameboard.coords[2][1]).toBeTruthy();
});
