'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(number => number % 3 === 0);
}

module.exports = choose_multiples_of_three;
