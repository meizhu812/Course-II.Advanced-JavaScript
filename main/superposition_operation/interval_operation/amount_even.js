'use strict';

function amount_even(collection) {
  return collection.reduce((acc, cur) => acc + cur * !(cur % 2), 0);
}

module.exports = amount_even;
