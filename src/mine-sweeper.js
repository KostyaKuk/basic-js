const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const createMatrix = Array.from({length: rows}, () =>  Array(matrix[0].length ))
  for (let i = 0; i < rows; i++){
    for (let k = 0; k < cols; k++){
      let bomb = 0;
      if (matrix[i][k + 1] && matrix[i][k + 1] === true) bomb += 1;
      if (matrix[i][k - 1] && matrix[i][k - 1] === true) bomb += 1;
      if (matrix[i - 1] && matrix[i - 1][k] === true) bomb += 1;
      if (matrix[i + 1] && matrix[i + 1][k] === true) bomb += 1;
      if (matrix[i - 1] && matrix[i - 1][k - 1] === true) bomb += 1;
      if (matrix[i - 1] && matrix[i - 1][k + 1] === true) bomb += 1;
      if (matrix[i + 1] && matrix[i + 1][k - 1] === true) bomb += 1;
      if (matrix[i + 1] && matrix[i + 1][k + 1] === true) bomb += 1;
      createMatrix[i][k] = bomb;
    }
  }
  return createMatrix;
}


module.exports = {
  minesweeper
};
