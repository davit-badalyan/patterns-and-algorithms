let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 0];

let result = firstArray.concat(secondArray);
console.log(result);

console.log(result.every((val) => val >= 0));
result.fill("fill", 3);
console.log(result);

let filteredArray = result.filter((val) => {
  return typeof val === "string";
});
console.log(filteredArray);

let foundItem = result.find((val) => {
  return val === "fill";
});
console.log(foundItem);

result.reverse();
console.log(result);
