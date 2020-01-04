'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  function isNotInCollectionA(element) {
    return collection_a.indexOf(element) === -1
  }

  function isNotInCollectionB(element) {
    return collection_b.indexOf(element) === -1
  }

  return collection_a.filter(isNotInCollectionB).concat(collection_b.filter(isNotInCollectionA))
}

module.exports = choose_no_common_elements;
