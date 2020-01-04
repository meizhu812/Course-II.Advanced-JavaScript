'use strict';

function get_letter_interval(number_a, number_b) {
  function numberToWord(number) {
    var OFFSET = 96;
    return String.fromCharCode(number + OFFSET);
  }

  var result = [];
  if (number_a >= number_b) {
    for (var number = number_a; number >= number_b; number--) {
      result.push(numberToWord(number));
    }
  } else {
    {
      for (var number = number_a; number <= number_b; number++) {
        result.push(numberToWord(number));
      }
    }
  }
  return result;
}

module.exports = get_letter_interval;
