'use strict';

function even_to_letter(collection) {
  var collectEvens = require("../../filter/choose_even");
  var numberToLetter = require("../../map/number_map_to_word");
  return numberToLetter(collectEvens(collection));
}

module.exports = even_to_letter;
