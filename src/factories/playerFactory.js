import Gameboard from "./gameboardFactory";

export default function Player(name) {
    return {
        name: name,
        playerGameBoard: null,
        createGameBoard() {
            this.playerGameBoard = new Gameboard();
        },
        fireShot(x , y, gameboard) {
            gameboard.receiveAttack(x,y);
        }
    };
}