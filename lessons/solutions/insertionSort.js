function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j = i - 1;

    // Move elements of nums[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j = j - 1;
    }
    nums[j + 1] = key;
  }
}

module.exports = insertionSort;
