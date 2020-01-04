'use strict';
var calculate_average = function (collection) {
  var collectEvens = require("../../../filter/choose_even");
  var computeAverage = require("../../../reduce/compute_average");
  return computeAverage(collectEvens(collection));
};
module.exports = calculate_average;
