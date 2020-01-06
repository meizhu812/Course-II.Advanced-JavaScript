'use strict';

function compute_median(collection) {
  function computeMedian(sorted) {
    let mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (Number(sorted[mid - 1]) + Number(sorted[mid])) / 2
    } else {
      return Number(sorted[mid]);
    }
  }
  return computeMedian(collection.sort((a, b) => a - b));
}

module.exports = compute_median;


