const XXH = require("xxhashjs");

const h1 = (string) =>
  Math.abs(XXH.h32(0xabcd).update(string).digest().toNumber() % 100);
const h2 = (string) =>
  Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = (string) =>
  Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

class BloomFilter {
  constructor() {
    this.bitArray = new Array(100).fill(false);
  }

  add(string) {
    const positions = [h1(string), h2(string), h3(string)];
    positions.forEach((pos) => (this.bitArray[pos] = true));
  }

  contains(string) {
    const positions = [h1(string), h2(string), h3(string)];
    return positions.every((pos) => this.bitArray[pos] === true);
  }
}

module.exports = BloomFilter;
