'use strict';
var map_to_four_multiples_add_one = function (collection) {
  function quadruplePlusOne(x) {
    return x * 4 + 1;
  }

  return collection.map(quadruplePlusOne)
};

module.exports = map_to_four_multiples_add_one;
