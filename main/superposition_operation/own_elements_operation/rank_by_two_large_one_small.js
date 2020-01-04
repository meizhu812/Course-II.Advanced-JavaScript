'use strict';

function rank_by_two_large_one_small(collection) {
  var rankAsc = require("../../map/rank_asc");
  var sortedArray = rankAsc(collection);
  var result = [];
  for (var index = 0, len = sortedArray.length; index < len; index += 3) {
    var arrayFracs = sortedArray.slice(index, index + 3);
    if (arrayFracs.length === 3) {
      var smallNumber = arrayFracs.shift();
      arrayFracs.push(smallNumber);
    }
    result = result.concat(arrayFracs);
  }
  return result;
}

module.exports = rank_by_two_large_one_small;
