'use strict';

function get_letter_interval_2(number_a, number_b) {
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

  var number;
  var result = [];
  if (number_a >= number_b) {
    for (number = number_a; number >= number_b; number--) {
      result.push(numberToMultiLetters(number));
    }
  } else {
    {
      for (number = number_a; number <= number_b; number++) {
        result.push(numberToMultiLetters(number));
      }
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

