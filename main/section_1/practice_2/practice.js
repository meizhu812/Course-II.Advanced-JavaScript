const choose_common_elements = require("../../filter/two_collections_practice_1");

function collect_same_elements(collection_a, collection_b) {
  return choose_common_elements(collection_a, collection_b.flat());
}

module.exports = collect_same_elements;
