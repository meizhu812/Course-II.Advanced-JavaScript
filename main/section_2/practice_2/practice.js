function count_same_elements(collection) {
  return [...collection.reduce((acc, cur) => {
    let key, count;
    if (cur.includes("-")) {
      key = cur.split("-")[0];
      count = parseInt(cur.split('-')[1]);
    } else {
      key = cur;
      count = 1;
    }

    if (!acc.has(key)) {
      acc.set(key, {key: key, count: 0});
    }
    acc.get(key).count += count;
    return acc;
  }, new Map())
    .values()];
}

module.exports = count_same_elements;
