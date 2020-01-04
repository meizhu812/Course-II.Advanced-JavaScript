'use strict';

function compute_average(collection) {
  return collection.reduce(function (acc, cur) {
      return acc + cur;
    }, 0
  ) / collection.length;
}

module.exports = compute_average;

