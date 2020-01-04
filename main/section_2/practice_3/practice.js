function count_same_elements(collection) {
  return [...collection.reduce((acc, cur) => {
    let key, count;
    if (cur.includes("-")) {
      key = cur.split("-")[0];
      count = parseInt(cur.split('-')[1]);
    } else if (cur.includes(":")) {
      key = cur.split(":")[0];
      count = parseInt(cur.split(':')[1]);
    } else if (cur.includes("[")) {
      key = cur.split("[")[0];
      count = parseInt(cur.slice(cur.indexOf("[") + 1, cur.indexOf("]")));
    } else {
      key = cur;
      count = 1;
    }

    if (!acc.has(key)) {
      acc.set(key, {name: key, summary: 0});
    }
    acc.get(key).summary += count;
    return acc;
  }, new Map())
    .values()];
}

module.exports = count_same_elements;
