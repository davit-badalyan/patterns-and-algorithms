function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function indexOfMinimum(array, startIndex = 0) {
  let minVal = array[startIndex];
  let minIndex = startIndex;

  for (let i = minIndex; i < array.length; i++) {
    if (array[i] < minVal) {
      minIndex = i;
      minVal = array[i];
    }
  }

  return minIndex;
}

function selectionSort(array) {
  let index;

  for (let i = 0; i < array.length; i++) {
    index = indexOfMinimum(array, i);
    swap(array, i, index);
  }
}

const array = [2, 4, 47, 54, -1, 324, 6, 4, 0, 2];

console.log(array);

selectionSort(array);

console.log(array);
