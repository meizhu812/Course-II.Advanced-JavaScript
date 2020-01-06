function count_same_elements(collection) {
  return [...collection.reduce((acc, cur) => {
    if (!acc.has(cur)) {
      acc.set(cur, { key: cur, count: 0 });
    }
    acc.get(cur).count++;
    return acc;
  }, new Map())
    .values()];
}

module.exports = count_same_elements;
