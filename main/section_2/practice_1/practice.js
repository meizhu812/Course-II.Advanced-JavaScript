function count_same_elements(collection) {
  return [...collection.reduce((acc, cur) => {
    if (acc.has(cur)) {
      acc.get(cur).count++;
    } else {
      acc.set(cur, {key: cur, count: 1});
    }
    return acc;
  }, new Map())
    .values()]
}

module.exports = count_same_elements;
