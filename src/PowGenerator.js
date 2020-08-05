const { Keccak } = require('sha3');

class PowGenerator {
  generateBy(data) {
    const [ , zeroesCount ] = data.split(':');
    const zeroes = '0'.repeat(zeroesCount);

    const hash = new Keccak(512);
    for (let pow = 1; pow < Number.MAX_SAFE_INTEGER; pow++) {
      hash.reset().update(data + pow);

      if (hash.digest('hex').startsWith(zeroes)) {
        return pow;
      }
    }
  }
}

module.exports = PowGenerator;
