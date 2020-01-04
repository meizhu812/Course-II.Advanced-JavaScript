'use strict';

function double_to_one(collection) {
  return [...new Set(collection.flat())]
}

module.exports = double_to_one;
