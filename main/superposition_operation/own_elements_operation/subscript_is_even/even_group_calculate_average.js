'use strict';
const computeAverage = require("../../../reduce/compute_average");

function even_group_calculate_average(collection) {
  let countDigits = x => x.toString().length;
  let evens = collection.filter(((value, index) => index % 2 !== 0 && value % 2 === 0));
  if (evens.length === 0) {
    return [0];
  }
  let groups = evens.reduce((acc, cur) => {
    let nDigits = countDigits(cur);
    if (!acc.has(nDigits)) {
      acc.set(nDigits, { count: 0, sum: 0 });
    }
    let [count, sum] = [acc.get(nDigits).count, acc.get(nDigits).sum];
    acc.set(nDigits, { count: count + 1, sum: sum + cur })
    return acc;
  }, new Map());
  return [...groups.values()].map(group => group.sum / group.count).sort((a, b) => countDigits(a) - countDigits(b));
}

module.exports = even_group_calculate_average;
