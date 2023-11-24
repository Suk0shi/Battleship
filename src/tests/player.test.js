import Player from "../factories/playerFactory";
import Gameboard from '../factories/gameboardFactory';


describe('test player functions', () => {
    let player;
	let testBoard;
    beforeEach(() => {
		// instantiate player
		player = new Player('Hugo');
		// create and fill mock opponent board
		testBoard = new Gameboard();
    });
    it('can create player name', () => {
        expect(player.name).toBe('Hugo');
    })
    it('fires a shot to the gameboard', () => {
		player.fireShot(2, 5, testBoard);
		expect(testBoard.missedAttacks).toEqual(["2,5"]);
	});
})