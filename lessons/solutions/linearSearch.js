function linearSearch(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    }
  }
  return null; // or undefined, depending on the desired behavior if not found
}

module.exports = linearSearch;
