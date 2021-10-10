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

// Q1: FOR LOOP
// Part 1) Numbers' summations:
let numbers = [23, 54, 32, 87, 47];
let sum = numbers.reduce((total, amount) => total + amount);
console.log("Sum of all numbers = " + sum);

// Part 2) Maximum number:
let numbers2 = [16, 4, 2, 0, 19, 6];
let max = Math.max(...numbers2);
console.log("Max = " + max);

// Part 3)  Reverse Array
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rev = numbers3.reverse();
console.log("Reversed list: " + rev);

// Q2: NESTED FOR LOOP
// Part 1) Stars pattern
let num = 5;
for (let i = 1; i < num + 1; i++) {
  let str = "";
  for (let j = num - i; j < num; j++) {
    str += "*";
  }
  console.log(str);
}

// Q3: WHILE LOOP
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let i = 2;
while (i < arr.length) {
  let j = 2;
  let flag = true;
  while (j < Math.max(...arr)) {
    if (arr[i] % j == 0 && arr[i] != j) {
      flag = false;
      break;
    }
    j++;
  }
  flag ? console.log(arr[i] + " is a prime number") : null;
  i++;
}

//Q4; ARRAYS
// Part 1) Map
let nameAndHeight = characters.map((array) => array.name + " " + array.height);
console.log("Names and Heights: " + nameAndHeight);

let fNameAndHeight = nameAndHeight.map((array) => array[0]);
console.log("First Names: " + fNameAndHeight);

// Part 2) Reduce
let masses = characters.map((index) => index.mass);
let mTotal = masses.reduce((total, amount) => total + amount);
console.log("Total mass: " + mTotal);

// Part 3) Filter
let bigMasses = characters.filter((f) => (f.mass > 100 ? f : null));
let females = characters.filter((f) => (f.gender == "female" ? f : null));

// Part 4) Sort
let charactersByName = characters.sort(function (a, b) {
  return a.name < b.name ? -1 : 1;
});
console.log(charactersByName);
let charactersByGender = characters.sort(function (a, b) {
  return a.gender < b.gender ? -1 : 1;
});
console.log(charactersByGender);

// Part 5) Every
console.log(
  "Does every character have a blue eye? " +
    characters.every((index) => index.eye_color == "blue")
);
console.log(
  "Is every character a male? " +
    characters.every((index) => index.gender == "male")
);

// Part 6) Some
console.log(
  "Is there at least a male character? " +
    characters.some((index) => index.gender == "male")
);
console.log(
  "Is there at least one character with mass> 50? " +
    characters.some((index) => index.mass > 50)
);
