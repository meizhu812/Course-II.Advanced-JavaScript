const countElements = require('../../section_2/practice_2/practice');  // like "a"; "d-5"
const updateCollection = require("../practice_2/practice");

function create_updated_collection(collection_a, object_b) {
  return (updateCollection(countElements(collection_a), object_b));
}

module.exports = create_updated_collection;
