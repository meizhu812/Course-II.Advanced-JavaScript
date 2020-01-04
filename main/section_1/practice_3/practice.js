function collect_same_elements(collection_a, object_b) {
  function getValue(object) {
    return object.value;
  }

  var getIntersection = require("../practice_1/practice");  // array & array
  return getIntersection(collection_a, getValue(object_b));
}

module.exports = collect_same_elements;
