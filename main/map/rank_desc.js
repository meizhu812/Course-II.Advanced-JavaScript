'use strict';
var rank_desc = function (collection) {
  function rankDescend(a, b) {
    return b - a;
  }

  return collection.sort(rankDescend)
};

module.exports = rank_desc;
