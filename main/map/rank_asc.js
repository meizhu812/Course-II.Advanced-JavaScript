'use strict';
var rank_asc = function (collection) {
  function rankAscend(a, b) {
    return a - b;
  }

  return collection.sort(rankAscend)
};

module.exports = rank_asc;
