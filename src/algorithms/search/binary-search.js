function doSearch(array, targetValue) {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (max >= min) {
    guess = Math.floor((min + max) / 2);
    console.log(min, max, guess);
    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const result = doSearch(primes, 3);
console.log("Found prime at index: " + result);
