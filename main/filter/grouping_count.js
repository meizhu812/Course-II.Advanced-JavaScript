'use strict';

function grouping_count(collection) {
  return collection.reduce((acc, cur) => {
    acc[cur] = acc[cur] === undefined ? 1 : acc[cur] + 1;
    return acc;
  }, {})
}

module.exports = grouping_count;
