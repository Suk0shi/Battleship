import Ship from '../factories/shipFactory';

export default function Gameboard(x, y) {
    return {
        board: [],
        shipsLocation: [],
        ships: [],
        missedAttacks: [],
        createBoard(size = 10) {
            for (let i = 0; i < size; i++) {
                for (let j = 0; j < size; j++) {
                  this.board.push(`${[i, j]}`);
                }
            }
        },
        placeShip5(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+2]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+3]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+4]}`) === -1
                && y < 6) {
                    let ship = new Ship(5);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                    this.shipsLocation.push(`${[x, y+2]}`);
                    this.shipsLocation.push(`${[x, y+3]}`);
                    this.shipsLocation.push(`${[x, y+4]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+2, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+3, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+4, y]}`) === -1
                && x < 6) {
                    let ship = new Ship(5);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                    this.shipsLocation.push(`${[x+2, y]}`);
                    this.shipsLocation.push(`${[x+3, y]}`);
                    this.shipsLocation.push(`${[x+4, y]}`);
                };
            }
        },
        placeShip4(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+2]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+3]}`) === -1
                && y < 7) {
                    let ship = new Ship(4);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                    this.shipsLocation.push(`${[x, y+2]}`);
                    this.shipsLocation.push(`${[x, y+3]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+2, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+3, y]}`) === -1
                && x < 7) {
                    let ship = new Ship(4);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                    this.shipsLocation.push(`${[x+2, y]}`);
                    this.shipsLocation.push(`${[x+3, y]}`);
                };
            }
        },
        placeShip3(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+2]}`) === -1
                && y < 8) {
                    let ship = new Ship(3);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                    this.shipsLocation.push(`${[x, y+2]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+2, y]}`) === -1
                && x < 8) {
                    let ship = new Ship(3);
                    this.ships.push(ship);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                    this.shipsLocation.push(`${[x+2, y]}`);
                };
            }
        },
        placeShip2(x, y, isVertical) {
            //for vertical 
            if (isVertical === true) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[x, (+y)+1]}`) === -1
                && y < 9) {
                    let ship = new Ship(2);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                };
            }
            //for horizontal
            else if (isVertical === false) {
                if (this.shipsLocation.indexOf(`${[x, y]}`) === -1
                && this.shipsLocation.indexOf(`${[(+x)+1, y]}`) === -1
                && x < 9) {
                    let ship = new Ship(2);
                    this.ships.push(ship);
                    this.ships.push(ship);

                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                };
            }
        },
        receiveAttack(x, y) {
            if (this.shipsLocation.indexOf(`${[x, y]}`) === -1) {
                this.missedAttacks.push(`${[x, y]}`);
            }
            else {
                let locationIndex = this.shipsLocation.indexOf(`${[x, y]}`)
                this.ships[locationIndex].hit();
            }
        },
        allShipsSunk() {
            for (let i = 0; i < this.ships.length; i++) {
                this.ships[i].isSunk();
                if (this.ships[i].sunk === false) {
                    return false;
                }
            }
            return true;
        }
    };
}