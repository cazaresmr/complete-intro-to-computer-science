const heapSort = (array) => {
  createMaxHeap(array);

  for (let i = array.length - 1; i > 0; i--) {
    // Swap the root (maximum value) of the heap with the last element of the heap
    [array[0], array[i]] = [array[i], array[0]];

    // Call heapify on the reduced heap
    heapify(array, 0, i);
  }

  return array;
};

const createMaxHeap = (array) => {
  const n = array.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, i, n);
  }
};

const heapify = (array, index, heapSize) => {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  // If the left child is larger than the root
  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  // If the right child is larger than the largest so far
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest is not the root
  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];

    // Recursively heapify the affected sub-tree
    heapify(array, largest, heapSize);
  }
};

module.exports = heapSort;
