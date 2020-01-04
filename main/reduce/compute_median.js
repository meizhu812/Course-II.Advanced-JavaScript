'use strict';

function compute_median(collection) {
  function computeMedian(sortedArray) {
    let len = sortedArray.length;
    return len % 2 === 0 ? (Number(sortedArray[len / 2 - 1]) + Number(sortedArray[len / 2])) / 2 : Number(sortedArray[(len - 1) / 2])
  }

  return computeMedian(collection.sort((a, b) => a - b));
}

module.exports = compute_median;


