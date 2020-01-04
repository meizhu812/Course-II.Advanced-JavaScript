'use strict';

function choose_no_repeat_number(collection) {
  return [...new Set(collection)]
}

module.exports = choose_no_repeat_number;
