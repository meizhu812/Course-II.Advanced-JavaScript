'use strict';

function grouping_count(collection) {
  return collection.reduce(function (acc, cur) {
    if (acc[cur] === undefined) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }
    return acc;
  }, {})
}

module.exports = grouping_count;
