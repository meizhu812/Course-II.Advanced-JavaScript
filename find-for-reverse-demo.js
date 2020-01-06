// SECTION Benchmark Function

function findeEvenBenchmark(methods, dataSets) {

  for (let dataSet of dataSets) {

    console.log(`\n****** Running find-even benchmark for ${dataSet.dataName}`);
    let data = dataSet.data;
    console.log(`[Array: ${data.slice(0, 10)} with EVEN-NUMBER(2) at index [${data.indexOf(2)}]... (${data.length}) elements]\n`);

    for (let method of methods) {

      let findEvenFunction = method.methodFunction;
      let msConsumed = 0;
      let iterations = 100;
      for (let i = 1; i <= iterations; i++) {
        let benchData = data.concat();  // copy
        let startTime = (new Date()).getTime();
        findEvenFunction(benchData);
        msConsumed += new Date().getTime() - startTime;
      }
      let averTimeUs = Math.round(msConsumed / iterations * 1000);
      console.log(`${method.methodName}: \n\t\tOutput: [${findEvenFunction(data)}]\n\t\t[${averTimeUs}us] per iteration (${msConsumed}ms for ${iterations} iterations)`);
    }
  }
}

// !SECTION 


// SECTION Dedupe Methods

FirstEvenM1 = {
  methodName: "FirstEven-for",
  methodFunction: function find_first_even(collection) {
    for (var index = 0, len = collection.length; index < len; index++) {
      var current = collection[index];
      if (current % 2 === 0) {
        return current;
      }
    }
  }
};

LastEvenM1 = {
  methodName: "LastEven-for",
  methodFunction: function find_last_even(collection) {
    for (var index = collection.length; index > 0; index--) {
      var current = collection[index];
      if (current % 2 === 0) {
        return current;
      }
    }
  }
};

FirstEvenM2 = {
  methodName: "FirstEven-find",
  methodFunction: function find_first_even(collection) {
    return collection.find(x => x % 2 === 0);
  }
};


LastEvenM2 = {
  methodName: "LastEven-reverse-find",
  methodFunction: function find_last_even(collection) {
    return collection.reverse().find(x => x % 2 === 0);
  }
};
FirstEvenM3 = {
  methodName: "FirstEven-concat-find",
  methodFunction: function find_first_even(collection) {
    return collection.concat().find(x => x % 2 === 0);
  }
};
LastEvenM3 = {
  methodName: "LastEven-concat-reverse-find",
  methodFunction: function find_last_even(collection) {
    return collection.concat().reverse().find(x => x % 2 === 0);
  }
};

// !SECTION 


// SECTION Data Sets
let makeOdds = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(i * Math.random()) * 2 + 1);
  }
  return arr;
};

DataA1 = {
  dataName: "Array of Only One Even (10%)",
  data: [].concat(makeOdds(100000), [2], makeOdds(900000))
};

DataA2 = {
  dataName: "Array of Only One Even (50%)",
  data: [].concat(makeOdds(500000), [2], makeOdds(500000))
};

DataA3 = {
  dataName: "Array of Only One Even (90%)",
  data: [].concat(makeOdds(900000), [2], makeOdds(100000))
};

// !SECTION 


// SECTION Main Code

findeEvenBenchmark([FirstEvenM1, LastEvenM1, FirstEvenM2, LastEvenM2, FirstEvenM3, LastEvenM3], [DataA1, DataA2, DataA3])

// !SECTION 