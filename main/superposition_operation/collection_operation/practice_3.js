'use strict';
const computeSum = require("../../reduce/compute_sum");

function hybrid_operation_to_uneven(collection) {
  return computeSum(collection.filter(x => x % 2 !== 0).map(x => x * 3 + 5));
}

module.exports = hybrid_operation_to_uneven;

