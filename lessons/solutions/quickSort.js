function quickSort(nums) {
  // Base case: an array of zero or one element is already sorted
  if (nums.length <= 1) {
    return nums;
  }

  // Choose the pivot, which is the last element in the array
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  // Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  // Recursively apply quickSort to the left and right sub-arrays, then concatenate them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
