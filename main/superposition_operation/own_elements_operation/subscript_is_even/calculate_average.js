'use strict';
const collectEvens = require("../../../filter/choose_even");
const computeAverage = require("../../../reduce/compute_average");

function calculate_average(collection) {
  return computeAverage(collectEvens(collection));
}

module.exports = calculate_average;
