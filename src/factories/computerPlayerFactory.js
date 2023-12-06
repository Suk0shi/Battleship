import Gameboard from './gameboardFactory';

export default function ComputerPlayer() {
  return {
    name: 'Computer',
    computerGameBoard: null,
    createGameBoard() {
      this.computerGameBoard = new Gameboard();
    },
    pastAttacks: [],
    lastAttackHit: 0,
    cellHit: null,
    fireShot(gameboard) {
      // computer makes random attacks
      let x = null;
      let y = null;
      if (this.lastAttackHit === 0) {
        while (this.pastAttacks.indexOf(`${[x, y]}`) !== -1 || x === null) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
      } else if (this.lastAttackHit === 1 || this.lastAttackHit === 2) {
        if (this.lastAttackHit === 1) {
          // the cell that was hit
          this.cellHit = this.pastAttacks[this.pastAttacks.length - 1];
        }
        // hit an ajacent square
        const bothXY = this.cellHit.split(',');
        [x, y] = bothXY;
        // try hitting above
        if (this.pastAttacks.indexOf(`${[x, y - 1]}`) === -1 && y - 1 >= 0) {
          y -= 1;
          this.lastAttackHit = 2;
        } else if (this.pastAttacks.indexOf(`${[x, (+y) + 1]}`) === -1 && (+y) + 1 <= 9) {
        // try hitting below
          y = (+y) + 1;
          this.lastAttackHit = 2;
        } else if (this.pastAttacks.indexOf(`${[(+x) + 1, y]}`) === -1 && (+x) + 1 <= 9) {
          // try hitting to the right
          x = (+x) + 1;
          this.lastAttackHit = 2;
        } else if (this.pastAttacks.indexOf(`${[x - 1, y]}`) === -1 && x - 1 >= 0) {
          // try hitting to the left
          x -= 1;
          this.lastAttackHit = 2;
        } else {
          // if all ajacent squares tried
          while (this.pastAttacks.indexOf(`${[x, y]}`) !== -1) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
          }
          this.lastAttackHit = 0;
        }
      }

      this.pastAttacks.push(`${[x, y]}`);
      gameboard.receiveAttack(x, y);
    },
  };
}
