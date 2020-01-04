'use strict';

function collect_all_even(collection) {
  function isEven(number) {
    return number % 2 === 0;
  }

  return collection.filter(isEven);
}

module.exports = collect_all_even;
