'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function (acc, cur) {
    return acc + cur;
  }, 0)
}

module.exports = calculate_elements_sum;

