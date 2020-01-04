'use strict';

function find_last_even(collection) {
  function isEven(number) {
    return number % 2 === 0;
  }

  for (var index = collection.length; index > 0; index--) {
    var current = collection[index];
    if (isEven(current)) {
      return current;
    }
  }
}

module.exports = find_last_even;
