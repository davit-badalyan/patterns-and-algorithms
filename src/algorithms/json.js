let person = {
  name: "John",
  age: 31,
  number: "37444898890",
};

let stringify = function (obj) {
  let result = "";

  Object.keys(person).forEach(function (key) {
    let value = person[key];
    result += key + ": " + value + "\n";
  });

  return result;
};

console.log(stringify(person));

let strObj = JSON.stringify(person, undefined, 5);
console.log(strObj);

let objFromStr = JSON.parse(strObj);
console.log(objFromStr);

localStorage.setItem("String From Object", strObj);
localStorage.setItem("Object From String", objFromStr);
