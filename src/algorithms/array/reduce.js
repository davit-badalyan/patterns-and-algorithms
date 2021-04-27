let matrix = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];

let flattened = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
].reduce((acc, val) => {
  return acc.concat(val);
}, []);

let vector = matrix.reduce((acc, val) => {
  acc.push(...val);
  return acc;
}, []);

console.log(matrix);
console.log(vector);
console.log(flattened);

let map = function (arr, fun) {
  return arr.reduce(function (acc, val, i) {
    acc[i] = fun(val);
    return acc;
  }, []);
};

console.log(
  map([1, 2, 3, 4], function (val) {
    return val * 2;
  })
);

const cars = [
  {
    name: "Nissan",
    year: 2010,
  },
  {
    name: "Kia",
    year: 2011,
  },
  {
    name: "Mercedes",
    year: 2012,
  },
  {
    name: "BMW",
    year: 2013,
  },
  {
    name: "Ferrari",
    year: 2010,
  },
];
console.log(cars);
let carNames = cars.reduce((acc, car) => {
  acc.push(car.name);
  return acc;
}, []);

console.log(carNames);
