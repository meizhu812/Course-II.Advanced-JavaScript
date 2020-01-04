'use strict';
var even_asc_odd_desc = function (collection) {
  var rankAsc = require("../../map/rank_asc");
  var rankDesc = require("../../map/rank_desc");
  var collectEvens = require("../../filter/choose_even");
  var collectOdds = function (collection) {
    function isOdd(x) {
      return x % 2 !== 0;
    }

    return collection.reduce(function (acc, cur) {
      if (isOdd(cur)) {
        acc.push(cur);
      }
      return acc;
    }, []);
  };
  return rankAsc(collectEvens(collection)).concat(rankDesc(collectOdds(collection)));
};
module.exports = even_asc_odd_desc;
