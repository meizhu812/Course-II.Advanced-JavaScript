'use strict';
const rankAsc = require("../../map/rank_desc");  // 规格写反了，这里命名调整回来了

function rank_by_two_large_one_small(collection) {
  rankAsc(collection);
  let fracsCount = Math.floor(collection.length / 3);
  for (let index = 0, len = fracsCount * 3; index < len; index += 3) {
    [collection[index], collection[index + 1], collection[index + 2]]
      = [collection[index+1], collection[index + 2], collection[index]];
  }
  return collection;
}

module.exports = rank_by_two_large_one_small;
