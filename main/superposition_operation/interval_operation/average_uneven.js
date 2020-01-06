'use strict';
// const computeAverage = require("../../reduce/compute_average");

function average_uneven(collection) {
  // return computeAverage(collection.filter(x => (x % 2 !== 0)));
  return (({ sum, num }) => sum / num)(collection.reduce((acc, cur) => {
    let isOdd = (cur % 2 !== 0);
    return { sum: acc.sum + cur * isOdd, num: acc.num + isOdd };
  }, { sum: 0, num: 0 }))
}

module.exports = average_uneven;
