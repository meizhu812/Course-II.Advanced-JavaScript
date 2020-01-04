'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter((number) => collection_b.some(divisor => number % divisor === 0));
}

module.exports = choose_divisible_integer;
