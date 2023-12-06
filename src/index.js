import Gameboard from "./factories/gameboardFactory";
import ComputerPlayer from "./factories/computerPlayerFactory";
import Player from "./factories/playerFactory";
import "./CSS/style.css"

let player = new Player('Hugo');
let computerPlayer = new ComputerPlayer();
let isVertical = true;
let computerTurn = false;
let instruction = document.createElement('h3');

player.createGameBoard();
computerPlayer.createGameBoard();

function setupGame() {
    let body = document.querySelector('body');
    let container = document.querySelector('.content');
    let button = document.createElement('button');
    let playerCell = document.querySelectorAll('.playerCellVertical');
    button.classList.add('button');
    button.addEventListener('click', e => rotateVisual(playerCell))
    button.textContent = 'Rotate';
    container.appendChild(button);
    instruction.classList.add('instruction');
    instruction.textContent = 'Place Your Ships';
    body.appendChild(instruction);
    playerCell.forEach(element => {element.addEventListener('click', (e) => cellPlaceShip(e.target, button, playerCell))});
    computerPlaceShip5();
    computerPlaceShip4();
    computerPlaceShip3();
    computerPlaceShip3();
    computerPlaceShip2();
}

function computerPlaceShip5() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+2]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+3]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+4]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 6);
        }
        computerPlayer.computerGameBoard.placeShip5(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+2,y]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+3,y]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+4,y]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 6);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip5(x,y, false);
    } 
}

function computerPlaceShip4() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+2]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+3]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 7);
        }
        computerPlayer.computerGameBoard.placeShip4(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+2,y]}`) !== -1 
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+3,y]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 7);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip4(x,y, false);
    } 
}

function computerPlaceShip3() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+2]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 8);
        }
        computerPlayer.computerGameBoard.placeShip3(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+2,y]}`) !== -1 
        ) || x === null) {
            x = Math.floor(Math.random() * 8);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip3(x,y, false);
    } 
}

function computerPlaceShip2() {
    let x = null;
    let y = null;
    let z = Math.floor(Math.random() * 2);

    if (z === 0) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,(+y)+1]}`) !== -1
        ) || x === null) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 9);
        }
        computerPlayer.computerGameBoard.placeShip2(x,y, true);
    }
    else if (z === 1) {
        while ((computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[x,y]}`) !== -1
        || computerPlayer.computerGameBoard.shipsLocation.indexOf(`${[(+x)+1,y]}`) !== -1
        ) || x === null) {
            x = Math.floor(Math.random() * 9);
            y = Math.floor(Math.random() * 10);
        }
        computerPlayer.computerGameBoard.placeShip2(x,y, false);
    } 
}

function cellPlaceShip(element, button, playerCell) {
    let x = element.getAttribute("data-x");
    let y = element.getAttribute("data-y");
    let shipAmount = player.playerGameBoard.shipsLocation.length;
    if (shipAmount === 0) {
        player.playerGameBoard.placeShip5((+x),(+y), isVertical);
    }
    else if (shipAmount === 5) {
        player.playerGameBoard.placeShip4((+x),(+y), isVertical);
    } 
    else if (shipAmount === 9) {
        player.playerGameBoard.placeShip3((+x),(+y), isVertical);
    }
    else if (shipAmount === 12) {
        player.playerGameBoard.placeShip3((+x),(+y), isVertical);
    }
    else if (shipAmount === 15) {
        player.playerGameBoard.placeShip2((+x),(+y), isVertical);
    }
    
    updatePlayerBoard();
    shipAmount = player.playerGameBoard.shipsLocation.length;

    if (shipAmount === 5) {
        playerCell.forEach(element => {
            element.classList.add('four');
        })
    }
    else if (shipAmount === 9) {
        playerCell.forEach(element => {
            element.classList.add("three");
            element.classList.remove("four");
        })
    } 
    else if (shipAmount === 15) {
        playerCell.forEach(element => {
            element.classList.add("two");
            element.classList.remove("three");
        })
    }

    if (shipAmount === 17) {
        button.remove();
        clearBoards();
        createComputerBoard();
        createPlayerBoard();
        updatePlayerBoard();
        document.querySelectorAll('.playerCellVertical').forEach(element => {element.classList.remove("playerCellVertical")});
        instruction.textContent = `Player's Turn`;
    }
}

function rotateVisual(playerCell) {
    if (isVertical === true) {
        playerCell.forEach(element => {
            element.classList.add("playerCellHorizontal");
            element.classList.remove("playerCellVertical");
        })
        isVertical = false;
    }
    else if (isVertical === false) {
        playerCell.forEach(element => {
            element.classList.add("playerCellVertical");
            element.classList.remove("playerCellHorizontal");
        })
        isVertical = true;
    }
}

function createPlayerBoard() {
    let playerBoard = document.querySelector('.playerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.classList.add("playerCellVertical");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          playerBoard.appendChild(cell);
        }
    }
}

function createComputerBoard() {
    let computerBoard = document.querySelector('.computerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          cell.addEventListener("click", (e) => {
                if (computerTurn === false && !(e.target.classList.contains('hit') || e.target.classList.contains('miss'))) {
                    attackEvent(e.target);
                }
            });
          computerBoard.appendChild(cell);
        }
    }
}

function createTempComputerBoard() {
    let computerBoard = document.querySelector('.computerBoard');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          let cell = document.createElement("div");
          cell.classList.add("cell");
          cell.setAttribute("data-x", j);
          cell.setAttribute("data-y", i);
          computerBoard.appendChild(cell);
        }
    }
}

async function attackEvent(element) {
    let x = element.getAttribute("data-x");
    let y = element.getAttribute("data-y");
    let playerHit = false;
    let computerMiss = false;
    
    player.fireShot(x, y, computerPlayer.computerGameBoard);
    if (computerPlayer.computerGameBoard.shipsLocation.indexOf(player.pastAttacks[player.pastAttacks.length - 1]) !== -1) {
        //triggers if the fired shot hit
        playerHit = true;
    }
    //update the computers board visually
    updateBoard(computerPlayer.computerGameBoard, x, y, element)
    if (computerPlayer.computerGameBoard.allShipsSunk()) {
        //end the game and say player won
        endGame(player.name);
    }
    if (playerHit === false) {
        computerTurn = true;
        instruction.textContent = `Computer's Turn`;
        while (computerMiss === false) {    
            await delay(2000);
            computerPlayer.fireShot(player.playerGameBoard);
            if (player.playerGameBoard.shipsLocation.indexOf(computerPlayer.pastAttacks[computerPlayer.pastAttacks.length - 1]) !== -1) {
                //triggers if the fired shot hit
                computerPlayer.lastAttackHit = 1;
            }
            else {
                computerMiss = true;
            }
            //update the player board visually
            updatePlayerBoard();
            if (player.playerGameBoard.allShipsSunk()) {
                //end the game and say computer won
                endGame(computerPlayer.name);
            }
        }
        computerTurn = false;
        instruction.textContent = `Player's Turn`;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function endGame(player) {
    let winningMessageElement = document.getElementById('winningMessage')
    let winningMessageTextElement = document.getElementById('winningMessageText');
    let restartButton = document.getElementById('restartButton')
    winningMessageTextElement.innerText = `${player} win!`;
    winningMessageElement.classList.add('show');
    restartButton.addEventListener('click', () => {
        gameLoop();
        winningMessageElement.classList.remove('show');
    });
}

function updateBoard(board, x, y, cell) {
    let boardShipsLocation = board.shipsLocation;
    let boardShips = board.ships;

    if (boardShipsLocation.indexOf(`${[x, y]}`) !== -1) {
        //can hit that square
        cell.classList.add("hit");
    }
    else if (boardShipsLocation.indexOf(`${[x, y]}`) === -1) {
        //can't hit that square
        cell.classList.add("miss");
    }
    for (let i = 0; i < computerPlayer.computerGameBoard.ships.length; i++) {
        computerPlayer.computerGameBoard.ships[i].isSunk();
        if (computerPlayer.computerGameBoard.ships[i].sunk === true) {
            let element = computerPlayer.computerGameBoard.shipsLocation[i];
            //get x and y 
            let bothXY = element.split(",");
            let x = bothXY[0];
            let y = bothXY[1];
            //get the cell at x and y
            let targetCell = document.querySelector(`.computerBoard [data-x="${x}"][data-y="${y}"]`);
            //give that cell a class of ship
            targetCell.classList.add("shipSunk");
        }
    }
}

function updatePlayerBoard(board = player.playerGameBoard) {
    let boardShipsLocation = board.shipsLocation;
    //go through players ships location array
    boardShipsLocation.forEach(element => {
        //get x and y 
        let bothXY = element.split(",");
        let x = bothXY[0];
        let y = bothXY[1];
        //get the cell at x and y
        let targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        //give that cell a class of ship
        targetCell.classList.add("ship");
    });
    let computerShots = computerPlayer.pastAttacks;
    //go through players ships location array
    computerShots.forEach(element => {
        //get x and y 
        let bothXY = element.split(",");
        let x = bothXY[0];
        let y = bothXY[1];
        //get the cell at x and y
        let targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        //give that cell a class of ship
        targetCell.classList.add("computerShot");
    });
    for (let i = 0; i < player.playerGameBoard.ships.length; i++) {
        player.playerGameBoard.ships[i].isSunk();
        if (player.playerGameBoard.ships[i].sunk === true) {
            let element = player.playerGameBoard.shipsLocation[i];
            //get x and y 
            let bothXY = element.split(",");
            let x = bothXY[0];
            let y = bothXY[1];
            //get the cell at x and y
            let targetCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            //give that cell a class of ship
            targetCell.classList.add("shipSunk");
        }
    }
}

function clearBoards() {
    let container = document.querySelector('.playerBoard');
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
    container = document.querySelector('.computerBoard');
    while (container.firstChild) {
    container.removeChild(container.firstChild);
    }
    if (document.querySelector('.button')) {
        document.querySelector('.button').remove();
    }
}

function gameLoop() {
    //wipe everything clean to start
    clearBoards();
    // render players & gameboards
    player = new Player('You');
    computerPlayer = new ComputerPlayer();
    player.createGameBoard();
    computerPlayer.createGameBoard();

    createPlayerBoard();
    createTempComputerBoard();
    setupGame();
    updatePlayerBoard();
}
gameLoop();


//add ship sunk visual for player board 