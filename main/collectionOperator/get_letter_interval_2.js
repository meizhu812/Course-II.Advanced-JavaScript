'use strict';
const get_integer_interval = require("./get_integer_interval");
const numberToLetters = require("../common/number_to_letters");

function get_letter_interval_2(number_a, number_b) {
  return get_integer_interval(number_a, number_b).map(numberToLetters);
}

module.exports = get_letter_interval_2;



