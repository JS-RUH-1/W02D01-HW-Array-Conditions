const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
// --------------------------Numbers' summations
let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
  sum += Numbers[i];
}
console.log("Sum of the Numbers Array is " + sum);

// ---------------------------- Maximum number
let Numbers2 = [16, 4, 2, 0, 19, 6];
let max = 0;
for (let i = 0; i < Numbers2.length; i++) {
  if (max < Numbers2[i]) {
    max = Numbers2[i];
  }
}
console.log("The max number of [16, 4, 2, 0, 19, 6] is " + max);

// ---------------------------- Reverse Array
let Numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseArr = [];
let length = Numbers3.length;
for (let i = 0; i < length; i++) {
  reverseArr.push(Numbers3.pop());
}

console.log(
  "The reverse array of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is " + reverseArr
);
// ----------------------------Nested for loop

for (let i = 0; i < 6; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}
// -------------------------- While loop
let Numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arr = [];
let i = 0;
while (i < Numbers4.length) {
  let el = Numbers4[i];

  if (
    (el % 2 != 0 && el % 3 != 0 && el % 4 != 0 && el % 5 != 0 && el != 1) ||
    el == 2 ||
    el == 3 ||
    el == 5
  )
    arr.push(el);
  i++;
}

console.log(arr);
// -------------- MAP
console.log(characters.map((e) => [e.name, e.height]));

console.log(
  characters.map((e) => {
    let arr = e.name.split(" ");
    return arr[0];
  })
);
// --------------- REDUCE
console.log(characters.reduce((total, curr) => total + curr.mass, 0));
console.log(characters.reduce((total, curr) => total + curr.name.length, 0));
// --------------- FILTER
console.log(characters.filter((e) => e.mass > 100));
console.log(characters.filter((e) => e.gender == "female"));
// --------------- SORT
// console.log(characters.sort());

let sortedNames = characters.sort(function (a, b) {
  var nameA = a.name;
  var nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});
console.log(sortedNames);
let sortedGender = characters.sort(function (a, b) {
  var genderA = a.gender;
  var genderB = b.gender;
  if (genderA < genderB) {
    return -1;
  }
  if (genderA > genderB) {
    return 1;
  }

  return 0;
});
console.log(sortedGender);
// --------------- EVERY
console.log(characters.every((e) => e.eye_color == "blue"));
console.log(characters.every((e) => e.gender == "male"));
// --------------- SOME
console.log(characters.some((e) => e.gender == "male"));
console.log(characters.some((e) => e.mass < 50));
