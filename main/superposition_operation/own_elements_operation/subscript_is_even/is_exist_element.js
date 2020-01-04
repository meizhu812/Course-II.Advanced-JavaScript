'use strict';
var is_exist_element = function (collection, element) {
  var eventhCollection = [];
  for (var index = 0, len = collection.length; index < len; index++) {
    if (index % 2 !== 0) {
      eventhCollection.push(collection[index]);
    }
  }
  return eventhCollection.indexOf(element) === -1;
};
module.exports = is_exist_element;
