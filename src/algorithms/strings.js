let str_1 = "hello world";
let str_2 = "HELLO WORLD";
let str_3 = "Hi my name is David";
let str_4 = "you are the REPLACE";

let upper = str_1.toUpperCase();
console.log(upper);

let lower = str_2.toLowerCase();
console.log(lower);

let substring = str_3.substring(14);
console.log(substring);

let split = str_3.split(" ");
console.log(split);

let replace = str_4.replaceAll("REPLACE", "best");
console.log(replace);

let search = str_4.search("R");
console.log(search);

function nameToUpper(name) {
  let result;
  result = name.substring(0, 1).toUpperCase() + name.substring(1, name.length).toLowerCase();
  return result;
}

console.log(nameToUpper("daViD"));

function fullNameToUpper(name) {
  let names = name.split(" ");
  let upperNames = names.map((val) => {
    return nameToUpper(val); //val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase();
  });

  return upperNames.join(" ");
}

console.log(fullNameToUpper("daVid baDalYaN aRTYom"));
