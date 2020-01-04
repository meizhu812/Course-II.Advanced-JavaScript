'use strict';

function rank_asc(collection) {
  return collection.sort((a, b) => b - a)
}

module.exports = rank_asc;
