import Ship from '../scripts/Ship';

test('verifing ship state', () => {
    const ship = new Ship(5, 'Carrier');

    ship.hit();

    expect(ship.isSunk()).toBe(false);
});

test('verifing ship state', () => {
    const ship = new Ship(5, 'Carrier');

    for (let i = 0; i < 5; i++) {
        ship.hit();
    }

    expect(ship.isSunk()).toBe(true);
});
