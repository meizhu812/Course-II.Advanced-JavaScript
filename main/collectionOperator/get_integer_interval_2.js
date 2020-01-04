'use strict';

function get_integer_interval_2(number_a, number_b) {
  let maxEven = Math.floor(Math.max(number_a, number_b) / 2) * 2;
  let minEven = Math.ceil(Math.min(number_a, number_b) / 2) * 2;
  let order = Math.sign(number_b - number_a);
  return [...Array((maxEven - minEven) / 2 + 1)].map((v, i) => (order === 1 ? minEven : maxEven) + (2 * i * order));
}

module.exports = get_integer_interval_2;
