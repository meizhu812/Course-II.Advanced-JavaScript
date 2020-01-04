'use strict';
const computeMedian = require("../../reduce/compute_median");
const numberToLetters = require("../../common/number_to_letters");

function median_to_letter(collection) {
  return numberToLetters(Math.ceil(computeMedian(collection)));
}

module.exports = median_to_letter;
