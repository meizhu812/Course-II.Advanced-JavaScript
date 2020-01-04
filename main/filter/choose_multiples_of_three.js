'use strict';

function choose_multiples_of_three(collection) {
  function isMultiplesOfThree(number) {
    return (number % 3 === 0);
  }

  return collection.filter(isMultiplesOfThree);
}

module.exports = choose_multiples_of_three;
