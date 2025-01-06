const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  let res = []
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  if (!arr.length) return [];
  if ((arr.includes(el => typeof el === "object")) && (arr.includes(el === "true"))) return [];
  if (!arr.includes('--double-prev') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--discard-next')) {
  return arr
}
let fixArr = [...arr]
for(let i = 0; i < fixArr.length; i++){
  if (fixArr[i] === '--double-next'){
    fixArr[i] = fixArr[i + 1]
  } else if (fixArr[i] === '--double-prev'){
    fixArr[i] = fixArr[i - 1]
  } else if (fixArr[i] === '--discard-prev'){
    res.pop();
    continue
  } else if (fixArr[i] === '--discard-next'){
    i +=2;
  }
  res.push(fixArr[i]);
}
return res.filter(element => typeof element === "number")
}

module.exports = {
  transform

};




