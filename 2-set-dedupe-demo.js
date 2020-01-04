// SECTION Benchmark Function

function dedupeBenchmark(methods, dataSets) {

  for (let dataSet of dataSets) {

    console.log(`\n****** Running dedupe benchmark for ${dataSet.dataName}`);
    let data = dataSet.data;
    console.log(`[Array: ${data.slice(0, 10)}... (${data.length}) elements]\n`);

    for (let method of methods) {

      let dedupeFunction = method.methodFunction;
      let msConsumed = 0;
      let iterations = 100;
      for (let i = 1; i <= iterations; i++) {
        let benchData = data.concat();  // copy
        let startTime = (new Date()).getTime();
        dedupeFunction(benchData);
        msConsumed += new Date().getTime() - startTime;
      }
      let averTimeUs = Math.round(msConsumed / iterations * 1000);
      console.log(`${method.methodName}: \n\t\tOutput: [${dedupeFunction(data).length} elements]\n\t\t[${averTimeUs}us] per iteration (${msConsumed}ms for ${iterations} iterations)`);
    }
  }
}

// SECTION Dedupe Methods

DedupeM1 = {
  methodName: "Method-ES6-Set",
  methodFunction: function (arr) {
    return Array.from(new Set(arr));
  }
};

DedupeM2 = {
  methodName: "Method-indexOf",
  methodFunction: function (arr) {
    let newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr;
  }
};

DedupeM3 = {
  methodName: "Method-includes",
  methodFunction: function (arr) {
    let newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
};

DedupeM4 = {
  methodName: "Method-filter",
  methodFunction: function (arr) {
    return arr.filter(function (val, index, arr) {
      return arr.indexOf(val, 0) === index;
    });
  }
};

DedupeM5 = {
  methodName: "Method-Lodash-uniq",
  methodFunction: function (arr) {
    let uniq = require("lodash/array").uniq;
    return uniq(arr);
  }
};


// SECTION Data Sets

DataA1 = {
  dataName: "Random Letters (1000)",
  data: function () {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(String.fromCharCode(Math.floor(i * Math.random()) % 26 + 97))
    }
    return arr;
  }()
};

DataA2 = {
  dataName: "Random Letters (100000)",
  data: function () {
    let arr = [];
    for (let i = 0; i < 100000; i++) {
      arr.push(String.fromCharCode(Math.floor(i * Math.random()) % 26 + 97))
    }
    return arr;
  }()
};

DataA3 = {
  dataName: "Random Integers (10000 of 0~1000)",
  data: function () {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(Math.floor(i * Math.random()) % 100);
    }
    return arr;
  }()
};

DataA4 = {
  dataName: "Random Integers (10000 of 0~8000)",
  data: function () {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(Math.floor(i * Math.random()) % 8000);
    }
    return arr;
  }()
};

// SECTION Main Code
try {
  require.resolve("lodash");
  dedupeBenchmark([DedupeM1, DedupeM2, DedupeM3, DedupeM4, DedupeM5], [DataA1, DataA2, DataA3, DataA4]);
}
catch (err) {
  dedupeBenchmark([DedupeM1, DedupeM2, DedupeM3, DedupeM4], [DataA1, DataA2, DataA3, DataA4]);
}