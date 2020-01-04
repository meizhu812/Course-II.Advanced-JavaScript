'use strict';
var map_to_three_multiples = function (collections) {
  function triple(x) {
    return x * 3;
  }

  return collections.map(triple)
};

module.exports = map_to_three_multiples;
