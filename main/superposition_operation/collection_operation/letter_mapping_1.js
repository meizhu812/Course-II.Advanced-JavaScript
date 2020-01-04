'use strict';
const collectEvens = require("../../filter/choose_even");
const numberToLetter = require("../../map/number_map_to_word");

function even_to_letter(collection) {
  return numberToLetter(collectEvens(collection));
}

module.exports = even_to_letter;
