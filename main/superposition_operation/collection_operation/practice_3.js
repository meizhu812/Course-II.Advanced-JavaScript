'use strict';

function hybrid_operation_to_uneven(collection) {
  function isOdd(x) {
    return (x % 2 !== 0);
  }

  function hybridOperations(x) {
    return x * 3 + 5;
  }

  var computeSum = require("../../reduce/compute_sum");
  return computeSum(collection.filter(isOdd).map(hybridOperations));

}

module.exports = hybrid_operation_to_uneven;

