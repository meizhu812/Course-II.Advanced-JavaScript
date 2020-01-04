'use strict';

function map_to_even(collection) {
  function double(x) {
    return x * 2;
  }

  return collection.map(double)
}

module.exports = map_to_even;
