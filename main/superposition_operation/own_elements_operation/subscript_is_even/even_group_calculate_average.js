'use strict';
var even_group_calculate_average = function (collection) {
  function digitsAmount(x) {
    return x.toString().length;
  }

  function sortByDigitsAmountAsc(a, b) {
    return digitsAmount(a) - digitsAmount(b);
  }

  var collectEvens = require("../../../filter/choose_even");
  var computeAverage = require("../../../reduce/compute_average");
  var nDigits = [];
  var eventhCollection = [];
  for (var index = 0, len = collection.length; index < len; index++) {
    if (index % 2 !== 0) {
      eventhCollection.push(collection[index]);
    }
  }
  var evens = collectEvens(eventhCollection);
  if (evens.length === 0) {
    return [0];
  }
  var evenGroups = evens.reduce(
    function (acc, cur) {
      var curIndex = nDigits.indexOf(digitsAmount(cur));
      if (curIndex === -1) {
        nDigits.push(digitsAmount(cur));
        curIndex = nDigits.indexOf(digitsAmount(cur));
        acc[curIndex] = [];
      }
      acc[curIndex].push(cur);
      return acc;
    }, []);
  return evenGroups.reduce(function (acc, cur) {
    acc.push(computeAverage(cur));
    return acc;
  }, []).sort(sortByDigitsAmountAsc);
};
module.exports = even_group_calculate_average;
