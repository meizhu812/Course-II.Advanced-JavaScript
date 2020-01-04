'use strict';

function compute_median(collection) {
  function rankAscend(a, b) {
    return a - b;
  }

  function isEven(number) {
    return number % 2 === 0;
  }

  function computeMedian(sortedArray) {
    var len = sortedArray.length;
    if (isEven(len)) {
      return (parseInt(sortedArray[len / 2 - 1]) + parseInt(sortedArray[len / 2])) / 2;
    } else {
      return parseInt(sortedArray[(len - 1) / 2]);
    }
  }

  return computeMedian(collection.sort(rankAscend));
}

module.exports = compute_median;


