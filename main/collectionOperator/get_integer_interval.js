'use strict';

function get_integer_interval(number_a, number_b) {
  var number;
  var result = [];
  if (number_a >= number_b) {
    for (number = number_a; number >= number_b; number--) {
      result.push(number);
    }
  } else {
    {
      for (number = number_a; number <= number_b; number++) {
        result.push(number);
      }
    }
  }

  return result;
}

module.exports = get_integer_interval;

