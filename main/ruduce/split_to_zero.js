'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  while (number > -interval) {
    result.push(number);
    number = Number((number - interval).toFixed(interval.toString().split('.')[1].length));  // 小数位数精度
  }
  return result;
}

module.exports = spilt_to_zero;
