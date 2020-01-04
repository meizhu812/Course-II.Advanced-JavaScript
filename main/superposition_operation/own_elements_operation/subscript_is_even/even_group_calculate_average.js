'use strict';
const collectEvens = require("../../../filter/choose_even");
const computeAverage = require("../../../reduce/compute_average");

function even_group_calculate_average(collection) {
  function digitsAmount(x) {
    return x.toString().length;
  }

  let allDigits = [];
  let evens = collectEvens(collection.filter(((value, index) => index % 2 !== 0)));
  if (evens.length === 0) {
    return [0];
  }
  let evenGroups = evens.reduce((acc, cur) => {
    let nDigits = digitsAmount(cur);
    let curIndex = allDigits.indexOf(nDigits);
    if (curIndex === -1) {
      allDigits.push(nDigits);
      curIndex = allDigits.indexOf(nDigits);
      acc[curIndex] = [];
    }
    acc[curIndex].push(cur);
    return acc;
  }, []);
  return evenGroups.reduce((acc, cur) => {
    acc.push(computeAverage(cur));
    return acc;
  }, []).sort((a, b) => digitsAmount(a) - digitsAmount(b));
}

module.exports = even_group_calculate_average;
