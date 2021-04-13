let numbers = [1, 2, 5, 225, 5, -3, -1, -6, 214, 0];
let people = [
  {
    name: "Joe",
    lastName: "Jonson",
  },
  {
    name: "Mike",
    lastName: "Brown",
  },
  {
    name: "Leo",
    lastName: "Dali",
  },
];

let updatedNumbers = numbers.map((x) => x * 2).filter((x) => x >= 10);
console.log(numbers);
console.log(updatedNumbers);

let peopleNames = people.map((x) => x.name);
console.warn(people);
console.warn(peopleNames);
