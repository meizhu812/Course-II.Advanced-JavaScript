'use strict';
const computeAverage = require("../../../reduce/compute_average");

function even_group_calculate_average(collection) {
  function digitsAmount(x) {
    return x.toString().length;
  }

  let evens = collection.filter(((value, index) => index % 2 !== 0 && value % 2 === 0));
  if (evens.length === 0) {
    return [0];
  }

  let evenGroups = evens.reduce((acc, cur) => {
    let nDigits = digitsAmount(cur);
    if (!acc.has(nDigits)) {
      acc.set(nDigits, { count: 0, sum: 0 });
    }
    let [count, sum] = [acc.get(nDigits).count, acc.get(nDigits).sum];
    acc.set(nDigits, { count: count + 1, sum: sum + cur })
    return acc;
  }, new Map());

  console.log(evenGroups);

  return [...evenGroups.values()].reduce((acc, cur) => {
    acc.push(cur.sum / cur.count);
    return acc;
  }, []).sort((a, b) => digitsAmount(a) - digitsAmount(b));
}

module.exports = even_group_calculate_average;
