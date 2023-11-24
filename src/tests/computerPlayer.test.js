import ComputerPlayer from "../factories/computerPlayerFactory";
import Gameboard from '../factories/gameboardFactory';


describe('test computerPlayer functions', () => {
    let computerPlayer;
	let testBoard;
    beforeEach(() => {
		// instantiate player
		computerPlayer = new ComputerPlayer();
		// create and fill mock opponent board
		testBoard = new Gameboard();
    });
    it('can create computerPlayer name', () => {
        expect(computerPlayer.name).toBe('Computer');
    })
    it.skip('fires a shot to the gameboard', () => {
		computerPlayer.fireShot(testBoard);
		expect(testBoard.missedAttacks).toEqual(["2,5"]);
	});
})