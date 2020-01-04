'use strict';

function average_uneven(collection) {
  function isOdd(x) {
    return (x % 2 !== 0);
  }

  var computeAverage = require("../../reduce/compute_average");
  return computeAverage(collection.filter(isOdd));
}

module.exports = average_uneven;
