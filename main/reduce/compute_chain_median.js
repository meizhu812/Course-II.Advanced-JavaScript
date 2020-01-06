'use strict';
const computeMedian = require("./compute_median.js");

function compute_chain_median(collection) {
  return computeMedian(collection.split('->'));
}

module.exports = compute_chain_median;
