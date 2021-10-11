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

// For loop
// let numbers = [23, 54, 32, 87, 47];
// let x = 0;
// for (let i = 0; i <= numbers.length; i++) {
//   x += numbers[i];
//   console.log(x);
// }

// Maximum number
// let arr = [16, 4, 2, 0, 19, 6];
// let y = 0;
// let z;
// for (let i = 0; i <= arr.length; i++) {
//   let x = arr[i];
//   if (x > y) {
//     z = y = x;
//   }
// }
// console.log(z);

// Reverse Array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const reversed = arr.reverse();
// console.log(reversed);

// Nested for loop

// stars pattern

// let x = "";
// for (let i = 0; i <= 5; i++) {
//   x += "*";
//   console.log(x);
// }

// While loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let x = 0;

// while (x <= arr.length) {
//   if (arr[x] % 2 !== 0 && arr[x] % arr[x] == 0) {
//     console.log(arr[x]);
//   }
//   x++;
// }

// Arrays
// MAP
// name
// const allName = characters.map(names);
// function names(item1) {
//   return item1.name;
// }
// console.log(allName);

// hight
// const allheight = characters.map(hight);
// function hight(item2) {
//   return item2.height;
// }
// console.log(allheight);

//Reduce
// let initialValue = 0;
// const totalheight = characters.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue.height;
// }, initialValue);
// console.log(totalheight);

// filter
// const gmass = characters.filter(gratermass);
// function gratermass(item) {
//   return item.mass > 100;
// }
// console.log(gmass);

// 2
// const female = characters.filter(filterfemale);
// function filterfemale(item) {
//   return item.gender == "female";
// }
// console.log(female);

// Sort

// Task 1
// const name = characters.sort(sortName);
// function sortName(item) {
//   return item.sortName;
// }
// console.log(name);

// Task 2

// const gender = characters.sort(sortGender);
// function sortGender(item) {
//   return item.sortGender;
// }
// console.log(gender);

// Every

// const mass = characters.every(everyMass);
// function everyMass(item) {
//   return item.mass > 40;
// }
// console.log(mass);

// task 2

// const tall = characters.every(everytall);
// function everytall(item) {
//   return item.height < 200;
// }
// console.log(tall);

// some

// const eyecolor = characters.some(somecolor);
// function somecolor(item) {
//   return item.eye_color == "blue"
// }
// console.log(eyecolor);

// task 2

// const tall = characters.some(sometall);
// function sometall(item) {
//   return item.height > 210;
// }
// console.log(tall);
