'use strict';

function get_integer_interval_2(number_a, number_b) {
  {
    var number;
    var start;
    var result = [];
    if (number_a >= number_b) {
      start = Math.floor(number_a / 2) * 2;
      for (number = start; number >= number_b; number -= 2) {
        result.push(number);
      }
    } else {
      start = Math.ceil(number_a / 2) * 2;
      for (number = start; number <= number_b; number += 2) {
        result.push(number);
      }
    }
    return result;
  }
}

module.exports = get_integer_interval_2;
