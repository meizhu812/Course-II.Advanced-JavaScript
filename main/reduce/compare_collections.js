'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.length !== collection_b.length) {
    return false;
  }
  for (var index = 0, len = collection_a.length; index < len; index++) {
    if (collection_a[index] !== collection_b[index]) {
      return false;
    }
  }
  return true;
}

module.exports = compare_collections;


