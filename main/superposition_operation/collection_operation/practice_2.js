'use strict';

function hybrid_operation_to_uneven(collection) {
  function isOdd(x) {
    return (x % 2 !== 0);
  }

  function hybridOperations(x) {
    return x * 3 + 2;
  }

  return collection.filter(isOdd).map(hybridOperations);
}

module.exports = hybrid_operation_to_uneven;

