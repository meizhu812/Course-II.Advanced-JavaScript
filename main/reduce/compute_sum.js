'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((acc, cur) => acc + cur, 0);
}

module.exports = calculate_elements_sum;

