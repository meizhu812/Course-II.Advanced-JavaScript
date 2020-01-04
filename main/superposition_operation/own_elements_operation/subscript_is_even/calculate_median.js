'use strict';
const collectEvens = require("../../../filter/choose_even");
const computeMedian = require("../../../reduce/compute_median");

function calculate_median(collection) {
  return computeMedian(collectEvens(collection));
}

module.exports = calculate_median;
