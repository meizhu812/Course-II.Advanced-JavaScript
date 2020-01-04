'use strict';

function amount_even(collection) {
  return collection.filter((number) => number % 2 === 0).reduce((acc, cur) => acc + cur, 0);
}

module.exports = amount_even;
