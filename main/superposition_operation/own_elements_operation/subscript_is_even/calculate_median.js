'use strict';
var calculate_median = function (collection) {
  var collectEvens = require("../../../filter/choose_even");
  var computeMedian = require("../../../reduce/compute_median");
  return computeMedian(collectEvens(collection));
};
module.exports = calculate_median;
