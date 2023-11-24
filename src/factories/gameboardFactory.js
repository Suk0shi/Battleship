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
        placeShip(x, y, axis) {
            if (this.shipsLocation.indexOf(`${[x, y]}`) === -1) {
                let ship = new Ship(3);
                this.ships.push(ship);
                this.ships.push(ship);
                this.ships.push(ship);
                if (axis === 'vertical') {
                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x, y+1]}`);
                    this.shipsLocation.push(`${[x, y+2]}`);
                }
                else if (axis === 'horizontal') {
                    this.shipsLocation.push(`${[x, y]}`);
                    this.shipsLocation.push(`${[x+1, y]}`);
                    this.shipsLocation.push(`${[x+2, y]}`);
                }
                
            };
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