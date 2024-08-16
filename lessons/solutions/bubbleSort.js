function bubbleSort(nums) {
  let n = nums.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return nums;
}

module.exports = bubbleSort;
