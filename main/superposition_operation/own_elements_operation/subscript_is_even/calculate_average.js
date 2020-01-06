'use strict';
// const collectEvens = require("../../../filter/choose_even");
// const computeAverage = require("../../../reduce/compute_average");

function calculate_average(collection) {
  // return computeAverage(collectEvens(collection));
  return (({ sum, num }) => sum / num)(collection.reduce((acc, cur) => {
    let isEven = (cur % 2 === 0);
    return { sum: acc.sum + cur * isEven, num: acc.num + isEven };
  }, { sum: 0, num: 0 }))
}
module.exports = calculate_average;
