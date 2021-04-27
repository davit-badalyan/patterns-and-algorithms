function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function partition(array, start, end) {
  let index = start;

  for (let j = start; j < end; j++) {
    if (array[j] <= array[end]) {
      swap(array, j, index);
      index++;
    }
  }
  swap(array, end, index);

  return index;
}

function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let index = partition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
  }
}

const array = [2, 4, 47, 54, -1, 324, 6, 4, 0, 2];

console.log(array);

quickSort(array);

console.log(array);
