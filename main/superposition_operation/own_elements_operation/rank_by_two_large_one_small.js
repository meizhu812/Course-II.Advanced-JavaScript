'use strict';
const rankAsc = require("../../map/rank_desc");  // 规格写反了，这里命名调整回来了

function rank_by_two_large_one_small(collection) {
  let sortedArray = rankAsc(collection);
  let result = [];
  for (let index = 0, len = sortedArray.length; index < len; index += 3) {
    let arrayFracs = sortedArray.slice(index, index + 3);
    if (arrayFracs.length === 3) {
      let smallNumber = arrayFracs.shift();
      arrayFracs.push(smallNumber);
    }
    result = result.concat(arrayFracs);
  }
  return result;
}

module.exports = rank_by_two_large_one_small;
