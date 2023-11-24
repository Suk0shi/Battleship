import Gameboard from '../factories/gameboardFactory';

describe('test gameboard functions', () => {
    let testBoard;
    beforeEach(() => {
        testBoard = new Gameboard();
    });
    it.skip('can create board', () => {
        testBoard.createBoard();
        expect(testBoard.board).toEqual([1]);
    })
    it('can place ship', () => {
        testBoard.createBoard();
        testBoard.placeShip(1,5);
        expect(testBoard.shipsLocation).toEqual(["1,5"]);
    })
    it('cant place ship in already placed position', () => {
        testBoard.createBoard();
        testBoard.placeShip(1,5);
        testBoard.placeShip(1,5);
        expect(testBoard.shipsLocation).toEqual(["1,5"]);
    })
    it('can attack ship', () => {
        testBoard.createBoard();
        testBoard.placeShip(1,5);
        testBoard.receiveAttack(1,5);
        expect(testBoard.ships[0].hitNum).toEqual(1);
    })
    it('can attack ship if not first', () => {
        testBoard.createBoard();
        testBoard.placeShip(1,5);
        testBoard.placeShip(2,4);
        testBoard.receiveAttack(2,4);
        expect(testBoard.ships[1].hitNum).toEqual(1);
    })
    it('can record coordinates of miss', () => {
        testBoard.createBoard();
        testBoard.placeShip(1,5);
        testBoard.placeShip(2,4);
        testBoard.receiveAttack(1,4);
        expect(testBoard.missedAttacks).toEqual(["1,4"]);
    })
    it('can report all ships have not been sunk', () => {
        testBoard.createBoard();
        testBoard.placeShip(1,5);
        testBoard.receiveAttack(1,5);
        expect(testBoard.allShipsSunk()).toEqual(false);
    })
    it('can report all ships have been sunk', () => {
        testBoard.createBoard();
        testBoard.placeShip(1,5);
        testBoard.receiveAttack(1,5);
        testBoard.receiveAttack(1,5);
        testBoard.receiveAttack(1,5);
        expect(testBoard.allShipsSunk()).toEqual(true);
    })
})