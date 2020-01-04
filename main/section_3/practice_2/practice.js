function create_updated_collection(collection_a, object_b) {
  let set_b = new Set(object_b.value);
  return collection_a.reduce((acc, cur) => {
    cur.count -= (Math.floor(cur.count / 3))*set_b.has(cur.key);
    return acc;
  }, collection_a);
}

module.exports = create_updated_collection;
