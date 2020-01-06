const LEN = 10000000;
let array = [...new Array(LEN)].map((value, index) => index);


let evens = 0;
console.time("mod");
for (element of array) {
    evens += (element % 2 === 0);
}
console.log(evens);
console.timeEnd("mod");


evens = 0;
console.time("bit");
for (element of array) {
    evens += (element & 1);
}
console.log(evens);
console.timeEnd("bit");