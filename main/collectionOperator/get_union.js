'use strict';

function get_union(collection_a, collection_b) {
  function isNotInCollectionA(element) {
    return collection_a.indexOf(element) === -1
  }

  return collection_a.concat(collection_b.filter(isNotInCollectionA))
}

module.exports = get_union;

