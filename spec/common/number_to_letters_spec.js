'use strict';

let numberToLetters = require('../../main/common/number_to_letters');

describe('number_to_letters', function () {
  let letters_1 = "a";
  let letters_26 = "z";
  let letters_27 = "aa";
  let letters_52 = "az";
  let letters_53 = "ba";
  let letters_702 = "zz";
  let letters_703 = "aaa";

  it('数字转一位字母 1 -> a', function() {
    var result = numberToLetters(1);
    expect(result).toEqual(letters_1);
  });

  it('数字转一位字母 26 -> z', function() {
    var result = numberToLetters(26);
    expect(result).toEqual(letters_26);
  });
  it('数字转两位字母 27 -> aa', function() {
    var result = numberToLetters(27);
    expect(result).toEqual(letters_27);
  });
  it('数字转两位字母 52 -> az', function() {
    var result = numberToLetters(52);
    expect(result).toEqual(letters_52);
  });
  it('数字转两位字母 53 -> ba', function() {
    var result = numberToLetters(53);
    expect(result).toEqual(letters_53);
  });
  it('数字转两位字母 702 -> zz', function() {
    var result = numberToLetters(702);
    expect(result).toEqual(letters_702);
  });
  it('数字转三位字母 703 -> aaa', function() {
    var result = numberToLetters(703);
    expect(result).toEqual(letters_703);
  });
});
