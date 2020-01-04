'use strict';

function median_to_letter(collection) {
  function numberToMultiLetters(number) {
    var digits = [];
    var remainder = number - 1;
    if (remainder < 26) {
      digits = [remainder];
    } else {
      while (remainder > 25) {
        var currentDigit = remainder % 26;
        digits.push(currentDigit);
        remainder -= currentDigit;
        remainder /= 26;
      }
      digits.push(remainder - 1);
    }
    var OFFSET = 97;
    var letters = [];
    for (var index = 0, len = digits.length; index < len; index++) {
      letters.push(String.fromCharCode(digits[index] + OFFSET));
    }
    return letters.reverse().join("");
  }

  var computeMedian = require("../../reduce/compute_median");
  return numberToMultiLetters(Math.ceil(computeMedian(collection)));
}

module.exports = median_to_letter;
