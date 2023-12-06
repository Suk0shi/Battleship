export default function Ship(length) {
  return {
    length,
    hitNum: 0,
    sunk: false,
    hit() {
      this.hitNum += 1;
    },
    isSunk() {
      if (this.hitNum === this.length) {
        this.sunk = true;
      }
    },
  };
}
