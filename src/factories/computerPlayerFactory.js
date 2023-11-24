import Gameboard from "./gameboardFactory";

export default function ComputerPlayer() {
    return {
        name: "Computer",
        computerGameBoard: null,
        createGameBoard() {
            this.computerGameBoard = new Gameboard();
        },
        pastAttacks: [],
        fireShot(gameboard) {
            //computer makes random attacks
            let x = null;
            let y = null;

            while (this.pastAttacks.indexOf(`${[x, y]}`) !== -1 || x === null) {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            }

            gameboard.receiveAttack(x,y);
        }
    };
}