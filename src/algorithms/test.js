const friends = [
  {
    name: "John",
    age: 23,
  },
  {
    name: "David",
    age: 22,
  },
  {
    name: "Leo",
    age: 20,
  },
  {
    name: "Sam",
    age: 19,
  },
  {
    name: "Nick",
    age: 25,
  },
  {
    name: "Rafael",
    age: 30,
  },
  {
    name: "Ron",
    age: 15,
  },
];

const people = [
  {
    name: "Joe",
    age: 13,
    hairColor: "red",
    friends: [
      { name: "Susan", age: 12 },
      { name: "Susan", age: 23 },
      { name: "Susan", age: 19 },
    ],
  },
  {
    name: "Mike",
    age: 20,
    hairColor: "brown",
    friends: [
      { name: "Mike", age: 12 },
      { name: "Susan", age: 23 },
      { name: "Leo", age: 19 },
    ],
  },
  {
    name: "Jane",
    age: 5,
    hairColor: "red",
    friends: [
      { name: "John", age: 12 },
      { name: "Joe", age: 23 },
      { name: "Ron", age: 19 },
    ],
  },
  {
    name: "Lilia",
    age: 25,
    hairColor: "brown",
    friends: [
      { name: "Mike", age: 12 },
      { name: "Bob", age: 23 },
      { name: "David", age: 19 },
    ],
  },
];

function getAvgAgeByColor(arr, hairColor) {
  let filteredArray = arr.filter((obj) => {
    return obj.hairColor === hairColor;
  });

  let totalAge = filteredArray.reduce((acc, obj) => {
    return acc + obj.age;
  }, 0);

  return totalAge / filteredArray.length;
}

function getPersonWithMostFriendsByName(arr, friendName) {
  let filteredArray = arr.filter((person) => {
    return {
      name: person.name,
      count: person.friends.filter((friend) => {
        return friend.name === friendName;
      }).length,
    };
  });

  const max = filteredArray.reduce((acc, obj) => {
    if (acc === undefined) {
      return obj;
    }
    if (obj.count > acc.count) {
      return obj;
    }
    return acc;
  }, undefined);

  return max.name;
}

const foundFriend = friends
  .filter((val) => {
    return val.name === "Ron";
  })
  .map((val) => {
    return val.name;
  });
console.log(foundFriend);

console.log(getAvgAgeByColor(people, "red"));
console.log(getPersonWithMostFriendsByName(people, "David"));
