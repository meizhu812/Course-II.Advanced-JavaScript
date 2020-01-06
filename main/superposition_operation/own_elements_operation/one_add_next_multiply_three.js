'use strict';

function one_add_next_multiply_three(collection) {
  let prevNum = 0;
  return collection.reduce((acc, cur) => {
    if (prevNum !== 0) {
      acc.push((cur + prevNum) * 3);
    }
    prevNum = cur;
    return acc;
  }, [])
}

module.exports = one_add_next_multiply_three;
