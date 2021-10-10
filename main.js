// 10/10/2021  Array Lab  - Abdulsalam Aldawsari

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

// Number summations - For Loop
let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
  sum = sum + Numbers[i];
}
console.log("The sum is  " + sum);
//Maximum Number
let Numbers1 = [16, 4, 2, 0, 19, 6];
let max = Numbers1[0];
for (let i = 0; i < Numbers1.length; i++) {
  if (Numbers1[i] > max) max = Numbers1[i];
}
console.log("The Max is  " + max);
// Reverse Array
let reverseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
for (let i = reverseArr.length - 1; i >= 0; i--) {
  newArr.push(reverseArr[i]);
}
console.log("Before Reverse:  " + reverseArr + "\nAfter Reverse:  " + newArr);
//Star pattern - Nested loop
let num = 5;
let star = "";
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
//While - Prime number
let newPrimeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let i = 0;
while (i < newPrimeArray.length) {
  let x = 2;
  let prime = true;
  while (x < newPrimeArray[i]) {
    if (newPrimeArray[i] % x == 0) {
      prime = false;
      break;
    }
    x++;
  }
  if (prime && newPrimeArray[i] != 1) {
    console.log(newPrimeArray[i] + "  is prime");
  }
  i++;
}
// Get all names and height
let namesHight = characters.map(function getNameHight(person) {
  return "Name: " + person.name + " " + "Hight: " + person.height;
});
console.log(namesHight);

// Get sum of charcters name 
let nameslength = characters.map(function sumlength(person) {
    return  person.name.length 
  });
  let totalName = nameslength.reduce((previousValue, currentValue) => {
    return currentValue + previousValue;
  }, 0);
  console.log("The length is : "+ totalName);


//Get first Name
let firstNames = characters.map(function getName(person) {
  return "Name: " + person.name.split(" ").slice(0, -1).join(" ");
});
console.log(firstNames);


//Total Mass
let totalMass = characters.reduce((previousValue, currentValue) => {
  return currentValue.mass + previousValue;
}, 0);
console.log("Total mass is : " + totalMass);

//Sort by name
let nameSort = characters.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
for (let i = 0; i < nameSort.length; i++) {
  console.log(nameSort[i]);
}

console.log("*********************************");
//Sort by gender  Male to female
let genderSort = characters.sort((a, b) => {
  return b.gender.localeCompare(a.gender);
});
for (let i = 0; i < genderSort.length; i++) {
  console.log(genderSort[i]);
}
// every character have blue eyes ?
let blueEvrey = characters.every((element) => {
  return element.eye_color == "blue";
});
console.log(blueEvrey);
// every male ?
let maleEvrey = characters.every((element) => {
  return element.gender == "male";
});
console.log(maleEvrey);
// Some male ?
let maleSome = characters.some((element) => {
  return element.gender == "male";
});
console.log(maleSome);
// Some Mass ?
let massSome = characters.some((element) => {
  return element.mass < 50;
});
console.log(massSome);
