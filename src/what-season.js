const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const list = {
 0: 'winter',
 1: 'winter',
 2: 'spring',
 3: 'spring',
 4: 'spring',
 5: 'summer',
 6: 'summer',
 7: 'summer',
 8: 'autumn',
 9: 'autumn',
 10: 'autumn',
 11: 'winter',
 default : 'Unable to determine the time of year!',
}

function getSeason(date) {
  if (!date) {
  return 'Unable to determine the time of year!';
}
  try {
    date.getTime()} catch ( error){
      throw new Error ('Invalid date!');
    }
switch (date.getMonth()){
  case 0: return 'winter';
  case 1: return 'winter';
  case 2: return 'spring';
  case 3: return 'spring';
  case 4: return 'spring';
  case 5: return 'summer';
  case 6: return 'summer';
  case 7: return 'summer';
  case 8: return 'autumn';
  case 9: return 'autumn';
  case 10: return 'autumn';
  case 11: return 'winter';
  default: return 'Unable to determine the time of year!';
}
  }

module.exports = {
  getSeason
};
