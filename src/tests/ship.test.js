import Ship from '../factories/shipFactory';

describe('test ship functions', () => {
    let testShip;
    beforeEach(() => {
        testShip = new Ship(3);
    });
    it('can be hit', () => {
        testShip.hit();
        expect(testShip.hitNum).toEqual(1);
    })
    it('can be hit twice', () => {
        testShip.hit();
        testShip.hit();
        expect(testShip.hitNum).toEqual(2);
    })
    it('can be sunk', () => {
        testShip.hit();
        testShip.hit();
        testShip.hit();
        testShip.isSunk();
        expect(testShip.sunk).toEqual(true);
    })
})