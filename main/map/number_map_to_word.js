'use strict';
var number_map_to_word = function (collection) {
  function numberToLetter(number) {
    var OFFSET = 96;
    return String.fromCharCode(number + OFFSET);
  }

  return collection.map(numberToLetter);
};

module.exports = number_map_to_word;
