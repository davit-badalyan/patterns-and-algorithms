function insert(array, rightIndex, value) {
  let i = rightIndex;

  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
}

const array = [2, 4, 47, 54, -1, 324, 6, 4, 0, 2];

console.log(array);

insertionSort(array);

console.log(array);
