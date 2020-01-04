'use strict';
const countElements = require("../../../section_2/practice_1/practice");

function single_element(collection) {
  return countElements(collection.filter(((value, index) => index % 2 !== 0))).reduce((acc, cur) => {
    if (cur.count === 1) {
      acc.push(parseInt(cur.key));
    }
    return acc;
  }, []);
}

module.exports = single_element;
