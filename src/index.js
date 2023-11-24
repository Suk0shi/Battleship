import Gameboard from "./factories/gameboardFactory";
import ComputerPlayer from "./factories/computerPlayerFactory";
import Player from "./factories/playerFactory";
import "./CSS/style.css"

let player = new Player('Hugo');
let computerPlayer = new ComputerPlayer();
player.createGameBoard();
computerPlayer.createGameBoard();

function setupGame() {
    player.playerGameBoard.placeShip(1,5);
    player.playerGameBoard.placeShip(4,7);
    player.playerGameBoard.placeShip(8,8);
    computerPlayer.computerGameBoard.placeShip(1,6, 'vertical');
    computerPlayer.computerGameBoard.placeShip(4,4, 'horizontal');
    computerPlayer.computerGameBoard.placeShip(9,3, 'vertical');
}
setupGame();

function createPlayerBoard() {
    let playerBoard = document.querySelector('.playerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          playerBoard.appendChild(cell);
        }
    }
}
createPlayerBoard();

function createComputerBoard() {
    let computerBoard = document.querySelector('.computerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          cell.addEventListener("click", (e) => {
            attackEvent(e.target);
            },{ once: true });
          computerBoard.appendChild(cell);
        }
    }
}
createComputerBoard();

function attackEvent(element) {
    let x = element.getAttribute("data-x");
    let y = element.getAttribute("data-y");
    player.fireShot(x, y, computerPlayer.computerGameBoard);
    //update the computers board visually
    updateBoard(computerPlayer.computerGameBoard, x, y, element)
    if (computerPlayer.computerGameBoard.allShipsSunk()) {
        //end the game and say player won
        console.log('player won')
    }
    computerPlayer.fireShot(player.playerGameBoard);
    //update the player voard visually
    if (player.playerGameBoard.allShipsSunk()) {
        //end the game and say computer won
        console.log('computer won')
    }
}

function updateBoard(board, x, y, cell) {
    let boardShipsLocation = board.shipsLocation;
    let boardShips = board.ships;

    if (boardShipsLocation.indexOf(`${[x, y]}`) !== -1) {
        //can hit that square
        cell.classList.add("hit");
    }
    else if (boardShipsLocation.indexOf(`${[x, y]}`) === -1) {
        //can hit that square
        cell.classList.add("miss");
    }
}