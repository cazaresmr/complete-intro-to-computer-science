function nestedAdd(array) {
  let sum = 0;

  function helper(arr) {
    for (let item of arr) {
      if (Array.isArray(item)) {
        helper(item); // Recursive call for nested arrays
      } else {
        sum += item; // Add number to the sum
      }
    }
  }

  helper(array);
  return sum;
}

module.exports = nestedAdd; // Ensure this line exists
