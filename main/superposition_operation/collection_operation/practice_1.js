'use strict';

function hybrid_operation(collection) {
  return collection.reduce(function (acc, cur) {
    return acc + (cur * 3 + 2);
  }, 0);
}

module.exports = hybrid_operation;

