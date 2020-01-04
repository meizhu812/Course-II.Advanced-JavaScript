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
  return flat(collection, result)
}

module.exports = double_to_one;
