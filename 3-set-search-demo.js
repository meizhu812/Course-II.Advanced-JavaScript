const LEN = 100000;  // FIXME 


console.time("build array");
let array = [];
for (let i = 0; i < LEN; i++) {
  array.push(Math.random() * i);  // O(n)
}
console.timeEnd("build array");

let result1 =[];
console.time("search in array");
for (let i = 0; i < LEN; i++) {
  result1.push(array.includes(0));  // O(n2)???
}
console.timeEnd("search in array");


console.time("build set from array");
set = new Set(array);  // O(n)
console.timeEnd("build set from array");


let result2 = [];
console.time("search in set");
for (let i = 0; i < LEN; i++) {
  result2.push(set.has(0));  // O(1)
}
console.timeEnd("search in set");


console.assert(result1.every((value => value === true)) && result2.every((value => value === true)));