const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, middleIndex);
  const rightArray = nums.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  let sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return sortedArray.concat(leftArray, rightArray);
};

module.exports = mergeSort;
