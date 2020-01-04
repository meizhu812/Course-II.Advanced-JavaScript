'use strict';
const numberToLetters = require("../common/number_to_letters");

function number_map_to_word_over_26(collection) {
  return collection.map(numberToLetters);
}

module.exports = number_map_to_word_over_26;
