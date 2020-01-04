'use strict';

function choose_no_repeat_number(collection) {
  return collection.reduce(function (acc, cur) {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, [])
}

module.exports = choose_no_repeat_number;
