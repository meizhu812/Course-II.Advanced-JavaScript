'use strict';

function find_last_even(collection) {
  return collection.concat().reverse().find(x => x % 2 === 0);
}

module.exports = find_last_even;
