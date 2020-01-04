'use strict';

function spilt_to_zero(number, interval) {
  var result = [];
  var fractionDigits = interval.toString().split('.')[1].length;  //小数位数精度
  while (number > -interval) {
    result.push(number);
    number = parseFloat((number - interval).toFixed(fractionDigits));
  }
  return result;
}

module.exports = spilt_to_zero;
