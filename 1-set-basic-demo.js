
showOutput = function () {
  var seq = 1;
  return function (command) {
    eval(`console.log("#${seq}\t ${command}   =>  ", ${command});`);
    seq++;
  }
}();

// SECTION Creation

// // Creation #1
// const demoSet = new Set([1, 2, 3, 5, 1, 2, 6]);
// showOutput("demoSet");

// // Creation #2
// const demoSet = new Set('abceabd');
// showOutput("demoSet");

// // Creation #3
// const demoSet = new Set(['abceabd', 'abceabd']);
// showOutput("demoSet");

// // Creation #4
// const demoSet = new Set([['abceabd'], ['abceabd']]);
// showOutput("demoSet");

// // Creation #5.1
// const demoSet = new Set();
// const demoArray = [1, 2, 3, 5, 1, 2, 6];
// for (let index = 0, len = demoArray.length; index < len; index++) {
//   demoSet.add(demoArray[index]);
// }
// showOutput("demoSet");

// // Creation #5.2
// const demoSet = new Set();
// [1, 2, 3, 5, 1, 2, 6].forEach((value => demoSet.add(value)));
// showOutput("demoSet");

// !SECTION 


// SECTION Properties and Methods

// // Properties and Methods #1
// const demoSet = new Set([1, 2, 3, 5, 1, 2, 6]);
// showOutput("demoSet");
// showOutput("demoSet.length");
// showOutput("demoSet.size");
// showOutput("demoSet.add(42)");
// showOutput("demoSet.has(42)");
// showOutput("demoSet.has('42')");
// showOutput("demoSet.delete(42)");
// showOutput("demoSet.has(42)");
// showOutput("demoSet.delete(42)");
// showOutput("demoSet.clear()");

// // Properties and Methods #2
// demoSet = new Set().add(1).add(2).add(3).add(5).add(1).add(2).add(6);
// showOutput("demoSet");
// showOutput("demoSet.keys()");
// showOutput("demoSet.values()");
// showOutput("demoSet.entries()");

// // Properties and Methods #3
// const demoSet = new Set();
// demoSet.add([1]);
// demoSet.add([1]);
// showOutput("demoSet");
// showOutput("demoSet.keys()");
// showOutput("demoSet.has([1])");

// // Properties and Methods #4
// const demoSet = new Set();
// let a = [1];
// let b = [1];
// demoSet.add(a);
// demoSet.add(b);
// showOutput("demoSet");
// showOutput("demoSet.keys()");
// showOutput("demoSet.has(a)");
// showOutput("demoSet.has(b)");

// !SECTION 


// SECTION Conversion

// // Conversion #1
// const demoSet = new Set([1, 2, 3, 5, 1, 2, 6]);
// showOutput("demoSet");
// showOutput("Array.from(demoSet)");
// showOutput("Array(demoSet)");
// showOutput("Array.of(demoSet)");
// showOutput("Array.of(...demoSet)");

// // Conversion #2
// const demoSet = new Set([1, 2, 3, 5, 1, 2, 6]);
// showOutput("demoSet");
// const plusOneSet = new Set(Array.from(demoSet).map(x => x + 1));
// showOutput("plusOneSet");
// const doubledSet = new Set([...demoSet].map(x => x * 2));
// showOutput("doubledSet");

// !SECTION 