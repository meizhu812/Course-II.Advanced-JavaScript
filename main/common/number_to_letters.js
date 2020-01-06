module.exports = (number => {
  let digits = [];
  let rem = number;
  while (rem > 26) {
    let digit = (rem % 26 === 0) ? 26 : rem % 26;
    digits.push(digit);
    rem = (rem - digit) / 26;
  }
  digits.push(rem);
  return digits.reduceRight((acc, cur) => acc + String.fromCharCode(cur + 96), "");
});
