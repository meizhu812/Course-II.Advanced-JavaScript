'use strict';

function choose_even(collection) {
  function isEven(number) {
    return number % 2 === 0;
  }

  return collection.filter(isEven);
}

module.exports = choose_even;
