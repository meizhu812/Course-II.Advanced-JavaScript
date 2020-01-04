'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  function isDivisible(number) {
    for (var index = 0, len = collection_b.length; index < len; index++) {
      if (number % collection_b[index] === 0) {
        return true;
      }
    }
    return false
  }

  return collection_a.filter(isDivisible);
}

module.exports = choose_divisible_integer;
