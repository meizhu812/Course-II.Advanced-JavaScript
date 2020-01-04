'use strict';
const get_integer_interval = require("./get_integer_interval");
const number_map_to_word = require("../map/number_map_to_word");

function get_letter_interval(number_a, number_b) {
  return number_map_to_word(get_integer_interval(number_a, number_b));
}

module.exports = get_letter_interval;
