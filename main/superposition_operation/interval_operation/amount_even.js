'use strict';

function amount_even(collection) {
  var computeSum = require("../../reduce/compute_sum");
  var collectEvens = require("../../filter/choose_even");
  return computeSum(collectEvens(collection));
}

module.exports = amount_even;
