'use strict';

function rank_desc(collection) {
  return collection.sort((a, b) => a - b);
}

module.exports = rank_desc;
