'use strict';

function average_to_letter(collection) {
  function numberToLetter(number) {
    var OFFSET = 96;
    return String.fromCharCode(number + OFFSET);
  }

  var computeAverage = require("../../reduce/compute_average");
  return numberToLetter(Math.ceil(computeAverage(collection)));
}

module.exports = average_to_letter;

