function collect_same_elements(collection_a, object_b) {
  function getElementByKey(array) {
    return array.reduce(function (acc, cur) {
      acc.push(cur.key);
      return acc;
    }, [])
  }

  var getIntersection = require("../practice_3/practice");  // array & object
  return getIntersection(getElementByKey(collection_a), object_b)
}

module.exports = collect_same_elements;
