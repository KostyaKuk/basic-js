const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resultArr : [],
  getLength() {
     return this.resultArr.length();
  },
  addLink(value)  {
    this.resultArr.push((value!== undefined) ? `( ${String(value)} )` : '( )')
    return this
  },
  removeLink( position ) {
    if (Number.isInteger(position)&& (position - 1 >= 0) && (position - 1 < this.resultArr.length)){
    this.resultArr.splice(position - 1, 1)
    return this 
  } else {
      this.resultArr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
     this.resultArr.reverse();
     return this
  },
  finishChain() {
    let str = this.resultArr.join('~~');
    this.resultArr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
