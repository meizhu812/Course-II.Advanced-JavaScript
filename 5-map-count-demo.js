// SECTION Benchmark Function

function countBenchmark(methods, dataSets) {

  for (let dataSet of dataSets) {

    console.log(`\n****** Running count benchmark for ${dataSet.dataName}`);
    let data = dataSet.data;
    console.log(`[Array: ${data.slice(0, 10)}... (${data.length}) elements]\n`);

    for (var method of methods) {

      let countFunction = method.methodFunction;
      let msConsumed = 0;
      let iterations = 100;
      for (let i = 1; i <= iterations; i++) {
        let benchData = data.concat();  // copy
        let startTime = (new Date()).getTime();
        countFunction(benchData);
        msConsumed += new Date().getTime() - startTime;
      }
      let averTimeUs = Math.round(msConsumed / iterations * 1000);
      let length = 0;
      if (method.methodName === "Method-Lodash-countBy") {
        length = Object.getOwnPropertyNames(countFunction(data)).length;
      } else {
        length = countFunction(data).length;
      }
      console.log(`${method.methodName}: \n\t\tOutput: [${length} elements]\n\t\t[${averTimeUs}us] per iteration (${msConsumed}ms for ${iterations} iterations)`);
    }
  }
}

// !SECTION 


// SECTION Count Methods

CountM1 = {
  methodName: "Method-Reduce-Map",
  methodFunction: function (arr) {
    return [...arr.reduce((acc, cur) => {
      if (acc.has(cur)) {
        acc[cur]++;
      } else {
        acc.set(cur, 1);
      }
      return acc;
    }, new Map())]
  }
};
CountM2 = {
  methodName: "Method-Reduce-Array",
  methodFunction: function (arr) {
    let keys = [];
    return arr.reduce((acc, cur) => {
      let curIndex = keys.indexOf(cur);
      if (curIndex === -1) {
        keys.push(cur);
        curIndex = keys.indexOf(cur);
        acc[curIndex] = [cur, 0];

      }
      acc[curIndex][1] += 1;
      return acc;
    }, [])
  }
};
CountM3 = {
  methodName: "Method-Lodash-countBy",  // ref: https://lodash.com/docs/4.17.15#countBy
  methodFunction: function (arr) {
    let countBy = require("lodash/collection").countBy;
    return countBy([...arr]);
  }
};

// !SECTION 


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

// !SECTION 


// SECTION Main Code

try {
  require.resolve("lodash");
  countBenchmark([CountM1, CountM2, CountM3], [DataA1, DataA2, DataA3, DataA4]);
} catch (error) {
  countBenchmark([CountM1, CountM2], [DataA1, DataA2, DataA3, DataA4]);
}

// !SECTION 