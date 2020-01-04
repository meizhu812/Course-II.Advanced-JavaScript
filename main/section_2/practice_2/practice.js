function count_same_elements(collection) {
  function getKeyAndCount(element) {
    if (element.indexOf("-") === -1) {
      return {key: element, count: 1};
    } else {
      return {key: element.split("-")[0], count: parseInt(element.split('-')[1])};
    }
  }

  var keys = [];
  return collection.reduce(
    function (acc, cur) {
      var curKeyAndCount = getKeyAndCount(cur);
      var curIndex = keys.indexOf(curKeyAndCount.key);
      if (curIndex === -1) {
        keys.push(curKeyAndCount.key);
        curIndex = keys.indexOf(curKeyAndCount.key);
        acc[curIndex] = {key: curKeyAndCount.key, count: 0};
      }
      acc[curIndex].count += curKeyAndCount.count;
      return acc;
    }, []);
}

module.exports = count_same_elements;
