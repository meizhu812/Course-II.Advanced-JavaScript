'use strict';
const rankAsc = require("../../map/rank_desc");  // 规格写反了，这里命名调整回来了
const rankDesc = require("../../map/rank_asc");  // 同上

function even_asc_odd_desc(collection) {
  return rankAsc(collection.filter((number) => number % 2 === 0))
    .concat(rankDesc(collection.filter((number) => number % 2 !== 0)));
}

module.exports = even_asc_odd_desc;
