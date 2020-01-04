'use strict';

function double_to_one(collection) {
  function flat(collection, result) {
    for (var index = 0, len = collection.length; index < len; index++) {
      if (typeof collection[index] !== "object") {
        result.push(collection[index])
      } else {
        flat(collection[index], result)
      }
    }
    return result
  }

  var result = [];
  return flat(collection, result).reduce(function (acc, cur) {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

module.exports = double_to_one;
