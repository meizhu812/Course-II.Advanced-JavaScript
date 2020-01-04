function create_updated_collection(collection_a, object_b) {
  var countElements = require('../../section_2/practice_2/practice');  // like "a"; "d-5"
  var updateCollection = require("../practice_2/practice");
  return (updateCollection(countElements(collection_a), object_b));
}

module.exports = create_updated_collection;
