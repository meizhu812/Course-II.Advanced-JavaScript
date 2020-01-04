'use strict';

function one_add_next_multiply_three(collection) {
  var prevNumber = 0;
  return collection.reduce(function (acc, cur) {
    if (prevNumber !== 0) {
      acc.push((cur + prevNumber) * 3);
    }
    prevNumber = cur;
    return acc;
  }, [])
}

module.exports = one_add_next_multiply_three;
