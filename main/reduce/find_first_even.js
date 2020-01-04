'use strict';

function find_first_even(collection) {
  function isEven(number) {
    return number % 2 === 0;
  }

  for (var index = 0, len = collection.length; index < len; index++) {
    var current = collection[index];
    if (isEven(current)) {
      return current;
    }
  }
}

module.exports = find_first_even;

