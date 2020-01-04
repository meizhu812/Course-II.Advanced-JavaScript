'use strict';

function compute_chain_median(collection) {
  var computeMedian = require("./compute_median.js");

  function linkListToArray(linkList) {
    return linkList.split('->');
  }

  return computeMedian(linkListToArray(collection));
}

module.exports = compute_chain_median;
