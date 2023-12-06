import Gameboard from "./gameboardFactory";

export default function Player(name) {
    return {
        name: name,
        playerGameBoard: null,
        pastAttacks: [],
        createGameBoard() {
            this.playerGameBoard = new Gameboard();
        },
        fireShot(x , y, gameboard) {
            this.pastAttacks.push(`${[x, y]}`);
            gameboard.receiveAttack(x,y);
        }
    };
}