'use strict';

function compute_average(collection) {
  return collection.reduce((acc, cur) => acc + cur, 0) / collection.length;
}

module.exports = compute_average;

