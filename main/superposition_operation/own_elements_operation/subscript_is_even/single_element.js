'use strict';
var single_element = function (collection) {
  var countElements = require("../../../section_2/practice_1/practice");
  var eventhCollection = [];
  for (var index = 0, len = collection.length; index < len; index++) {
    if (index % 2 !== 0) {
      eventhCollection.push(collection[index]);
    }
  }
  return countElements(eventhCollection).reduce(function (acc, cur) {
    if (cur.count === 1) {
      acc.push(parseInt(cur.key));
    }
    return acc;
  }, []);
};
module.exports = single_element;
