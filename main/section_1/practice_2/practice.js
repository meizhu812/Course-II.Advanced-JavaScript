function collect_same_elements(collection_a, collection_b) {
  var flatten = require("../../flaten/double_dimensional_array_to_one_1");
  var getIntersection = require("../practice_1/practice");  // array & array
  return getIntersection(collection_a, flatten(collection_b));
}

module.exports = collect_same_elements;
