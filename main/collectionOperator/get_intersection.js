'use strict';

function get_intersection(collection_a, collection_b) {
  function isInCollectionA(element) {
    return collection_a.indexOf(element) !== -1
  }

  return collection_b.filter(isInCollectionA);
}

module.exports = get_intersection;
