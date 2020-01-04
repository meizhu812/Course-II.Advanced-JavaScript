const LEN = 100000;  // FIXME 


numToCharMap = new Map();
for (let i = 0; i < LEN; i++) {
  numToCharMap.set(i, i.toString());
}

console.time("toString");
let temparr1 = [];
for (let i = 0; i < LEN; i++) {
  temparr1.push(i.toString());
}
console.timeEnd("toString");

console.time("numToCharMap");
let temparr2 = [];
for (let i = 0; i < LEN; i++) {
  temparr2.push(numToCharMap.get(i));
}
console.timeEnd("numToCharMap");
