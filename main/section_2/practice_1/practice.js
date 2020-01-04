function count_same_elements(collection) {
  var keys = [];
  return collection.reduce(
    function (acc, cur) {
      var curIndex = keys.indexOf(cur);
      if (curIndex === -1) {
        keys.push(cur);
        curIndex = keys.indexOf(cur);
        acc[curIndex] = {
          key: cur,
          count: 0
        };
      }
      acc[curIndex].count += 1;
      return acc;
    }, []);
}

module.exports = count_same_elements;
