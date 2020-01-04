'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.concat(collection_b).filter(element=> !collection_a.includes(element) || !collection_b.includes(element));
}

module.exports = choose_no_common_elements;
