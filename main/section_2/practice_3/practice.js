function count_same_elements(collection) {
  function getKeyAndCount(element) {
    if (element.indexOf("-") !== -1) {
      return {key: element.split("-")[0], count: parseInt(element.split('-')[1])};
    } else if (element.indexOf(":") !== -1) {
      return {key: element.split(":")[0], count: parseInt(element.split(':')[1])};
    } else if (element.indexOf("[") !== -1) {
      return {
        key: element.split("[")[0],
        count: parseInt(element.slice(element.indexOf("[") + 1, element.indexOf("]")))
      }
    } else {
      return {key: element, count: 1};
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
        acc[curIndex] = {name: curKeyAndCount.key, summary: 0};
      }
      acc[curIndex].summary += curKeyAndCount.count;
      return acc;
    }, []);
}

module.exports = count_same_elements;
