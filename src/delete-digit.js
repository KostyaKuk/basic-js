const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let results = []
  let array = n.toString()

  for (let i=0; i<array.length; i++) {
    results.push(Number(array.slice(0, i)+ array.slice(i+1)))
  }
 return Math.max(...results)
}

module.exports = {
  deleteDigit
};
