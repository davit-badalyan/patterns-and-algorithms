let fruits = ["Apple", "Banana"];

fruits.forEach((item, index, array) => {
  console.log(item, index, array);
});

let newLength = fruits.push("Orange");
console.log("new length after PUSH : " + newLength);
console.log(fruits);

let last = fruits.pop();
console.log("last item POP : " + last);
console.log(fruits);

let first = fruits.shift();
console.log("first item SHIFT : " + first);
console.log(fruits);

newLength = fruits.unshift("Strawberry");
console.log("new length after UNSHIFT : " + newLength);
console.log(fruits);

fruits.push("Mango");
let pos = fruits.indexOf("Banana");
console.log(pos);
console.log(fruits);

let removedItem = fruits.splice(pos, 1);
console.log("removed items after SLICE : " + removedItem);
console.log(fruits);

let shallowCopy = fruits.slice();
shallowCopy.push("Orange");
console.log(shallowCopy);
console.log(fruits);
