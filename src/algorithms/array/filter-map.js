let array = [10, 11, 22, 23, 0, 1, 3, -1, -2, -33, -34];
let people = [
  {
    name: "Joe",
    age: 20,
  },
  {
    name: "Luke",
    age: 22,
  },
  {
    name: "Mike",
    age: 31,
  },
];

let filter = function (val, fun) {
  let filteredArray = [];
  let i = 0;

  val.forEach(function (item) {
    if (fun(item)) {
      filteredArray[i] = item;
      i += 1;
    }
  });

  return filteredArray;
};

let secondArray = filter(array, function (val) {
  return val % 2 === 0 && val > 0;
});

let thirdArray = array.filter(function (val) {
  return val % 2 === 0 && val > 0;
});

let result = people
  .filter(function (val) {
    return val.age > 20;
  })
  .map(function (person) {
    return person.name;
  });

console.log(secondArray);
console.log(thirdArray);
console.log(result);
