function create_updated_collection(collection_a, object_b) {
  function isInObjectB(key) {
    return (object_b.value.indexOf(key) !== -1);
  }

  return collection_a.reduce(function (acc, cur) {
    if (isInObjectB(cur.key)) {
      cur.count--;
    }
    acc.push(cur);
    return acc;
  }, [])
}

module.exports = create_updated_collection;
