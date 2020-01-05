showOutput = function () {
  var seq = 1;
  return function (command) {
    eval(`console.log("#${seq}\t ${command}   =>  ", ${command});`);
    seq++;
  }
}();


// SECTION Creation

// // Creation #1
// const demoMap = new Map([[1, "a"], [2, "b"], [3, "c"], [5, "e"], [1, "a"], [2, "b"], [6, "f"]]);
// showOutput("demoMap");

// // Creation #2
// // const demoMap = new Map({1: "a", 2: "b"});
// // showOutput("demoMap");

// // Creation #3.1
// const demoMap = new Map();
// const demoArray = [[1, "a"], [2, "b"], [3, "c"], [5, "e"], [1, "a"], [2, "b"], [6, "f"]];
// for (let pair of demoArray) {
//   demoMap.set(...pair);  // -> demoMap.set(pair[0],pair[1])
// }
// showOutput("demoMap");

// // Creation #3.2
// const demoMap = new Map();
// const demoArray = [[1, "a"], [2, "b"], [3, "c"], [5, "e"], [1, "a"], [2, "b"], [6, "f"]];
// demoArray.forEach((value => demoMap.set(...value)));
// showOutput("demoMap");

// // Creation #3.3
// const demoMap = new Map();
// const demoArray = [1, 2, 3, 5, 1, 2, 6];
// demoArray.forEach((value => demoMap.set(value, String.fromCharCode(value + 96))));
// showOutput("demoMap");

// !SECTION 


// SECTION Properties and Methods

// // Properties and Methods #1
// const demoMap = new Map([[1, "a"], [2, "b"], [3, "c"], [5, "e"], [1, "a"], [2, "b"], [6, "f"]]);
// showOutput("demoMap");
// showOutput("demoMap.length");
// showOutput("demoMap.size");
// showOutput("demoMap.set(42, '42')");
// showOutput("demoMap.has(42)");
// showOutput("demoMap.has('42')");
// showOutput("demoMap.get(42)");
// showOutput("typeof(demoMap.get(42))");
// showOutput("demoMap.get('42')");
// showOutput("demoMap.delete(42)");
// showOutput("demoMap.has(42)");
// showOutput("demoMap.delete(42)");
// showOutput("demoMap.clear()");

// // Properties and Methods #2
// const demoMap = new Map().set(...[1, "a"]).set(2, "b").set([3, "c"][0], [3, "c"][1]);
// showOutput("demoMap");
// showOutput("demoMap.keys()");
// showOutput("demoMap.values()");
// showOutput("demoMap.entries()");

// // Properties and Methods #3
// const demoMap = new Map();
// demoMap.set([1],1);
// demoMap.set([1],1);
// showOutput("demoMap");
// showOutput("demoMap.entries()");
// showOutput("demoMap.has([1])");

// // Properties and Methods #4
// const demoMap = new Map();
// let a = [[1], 1];
// let b = [[1], 1];
// demoMap.set(...a);
// demoMap.set(b[0], b[1]);
// showOutput("demoMap");
// showOutput("demoMap.entries()");
// showOutput("demoMap.has(a)");
// showOutput("demoMap.has(a[0])");
// showOutput("demoMap.has(b[0])");

// !SECTION 


// SECTION Conversion

// // Conversion #1
// const demoMap = new Map([[1, "a"], [2, "b"], [3, "c"], [5, "e"], [1, "a"], [2, "b"], [6, "f"]]);
// showOutput("demoMap");
// showOutput("Array.from(demoMap)");
// showOutput("Array(demoMap)");
// showOutput("Array.of(demoMap)");
// showOutput("Array.of(...demoMap)");

// // Conversion #2
// const demoMap = new Map([[1, "a"], [2, "b"], [3, "c"], [5, "e"], [1, "a"], [2, "b"], [6, "f"]]);
// showOutput("demoMap");
// const upperCaseMap = new Map(Array.from(demoMap).map(([key, value]) => [key, value.toUpperCase()]));
// showOutput("upperCaseMap");
// const doubledMap = new Map([...demoMap].map(([key, value]) => [key, value + value]));
// showOutput("doubledMap");

// !SECTION 