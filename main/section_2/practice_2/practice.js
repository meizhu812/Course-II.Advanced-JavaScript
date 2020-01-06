function count_same_elements(collection) {
  return [...collection.reduce((acc, cur) => {
    let [key, count] = cur.split("-");
    if (!count) {
      count = 1;
    }
    if (!acc.has(key)) {
      acc.set(key, { key: key, count: 0 });
    }
    acc.get(key).count += Number(count);
    return acc;
  }, new Map())
    .values()];
}

module.exports = count_same_elements;
