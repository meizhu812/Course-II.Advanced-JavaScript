function collect_same_elements(collection_a, collection_b) {
  function isInCollectionB(element) {
    return collection_b.indexOf(element) !== -1
  }

  return collection_a.filter(isInCollectionB);
}

module.exports = collect_same_elements;
