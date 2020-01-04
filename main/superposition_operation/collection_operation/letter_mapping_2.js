'use strict';
const computeAverage = require("../../reduce/compute_average");

function average_to_letter(collection) {
  return String.fromCharCode(Math.ceil(computeAverage(collection)) + 96);
}

module.exports = average_to_letter;

