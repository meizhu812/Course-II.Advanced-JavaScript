'use strict';

function get_integer_interval(number_a, number_b) {
  return [...Array(Math.abs(number_b - number_a) + 1)].map((v, i) => number_a + (i * Math.sign(number_b - number_a)));
}

module.exports = get_integer_interval;

