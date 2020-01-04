'use strict';

function is_exist_element(collection, element) {
  return !collection.some((value, index) => (index % 2 !== 0 && value === element))
}

module.exports = is_exist_element;
