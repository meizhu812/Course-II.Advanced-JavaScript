'use strict';
const computeAverage = require("../../reduce/compute_average");

function average_uneven(collection) {
  return computeAverage(collection.filter(x => (x % 2 !== 0)));
}

module.exports = average_uneven;
