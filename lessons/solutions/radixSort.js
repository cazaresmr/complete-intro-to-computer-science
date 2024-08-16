function getMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function countingSort(array, exp) {
  const output = new Array(array.length).fill(0);
  const count = new Array(10).fill(0);

  // Count occurrences of digits
  for (let i = 0; i < array.length; i++) {
    const index = Math.floor(array[i] / exp) % 10;
    count[index]++;
  }

  // Change count[i] so it contains actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = array.length - 1; i >= 0; i--) {
    const index = Math.floor(array[i] / exp) % 10;
    output[count[index] - 1] = array[i];
    count[index]--;
  }

  // Copy the output array to array[], so that array[] now contains sorted numbers
  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
}

function radixSort(array) {
  // Find the maximum number to know the number of digits
  const max = getMax(array);

  // Do counting sort for every digit. Note that instead of passing the digit number,
  // exp is passed. exp is 10^i where i is the current digit number.
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(array, exp);
  }

  return array;
}

module.exports = radixSort;
