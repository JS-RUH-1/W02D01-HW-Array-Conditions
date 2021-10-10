const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


// For loop 

// arr' summations
let Numbers = [23,54,32,87,47]
let sum =0;

for(let i = 0 ; i < Numbers.length ; i++){
    sum += Numbers[i];
}
console.log("sum = "+sum);

// Maximum number
let arr = [16,4,2,0,19,6];
let max = arr[0];
for(let i = 1 ; i < arr.length ; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log("Max is: "+max);

// Reverse Array
let arrRev = [1,2,3,4,5,6,7,8,9,10];
arrRev.reverse();

// Nested for loop

// stars pattern
let row = 5;
let d = " ";

for (let i = 1; i <= row; i++){
  for (let j = 1; j <= i; j++){
     d += "*";
  }
   d += "\n";
}

// While loop 
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  arr2.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(element);
    } 
  });


               // Arrays //

// MAP
// 1
console.log(characters.map((s) => s.name +" "+ s.height));

// 2
let nameH = characters.map((s) => s.name );
let fName = new Array()
for(let k=0; k< nameH.length; k++){
   fName[k] = nameH[k].split(' ')[0];
}
console.log(fName);


// REDUCE
// Mass 
let massChar = characters.map((s) => s.mass );
let totalMass = massChar.reduce(function(a,b){
  return a+b;
});
console.log(totalMass);

// total number of characters in names 
let names = nameH.reduce(function(a,b){
    return a+b;
  });
  // remove spaces
  names = names.replace(/\s/g, '');
  console.log(names.length);


// FILTER
// 1. Get characters with mass greater than 100
let chararcterMass = characters.filter(
    (s) => s.mass > 100
    );
    console.log(chararcterMass);

// 2. Get all female characters
let chararcterGender = characters.filter(
    (s) => s.gender == 'female'
    );
    console.log(chararcterGender);

// SORT 

// 1. Sort by name
let nameSorted = characters.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
console.log(nameSorted);

// 2. Sort by gender
let genderSorted = characters.sort((a,b) => (a.gender > b.gender) ? 1 : ((b.gender > a.gender) ? -1 : 0))
console.log(genderSorted);


// EVERY
// 1.Does every character have blue eyes?
characters.every((std) => (std.eye_color == 'blue'));

// 2. Is every character male?
characters.every((std) => (std.gender == 'male'));


// SOME 
// 1. Is there at least one male character?
characters.some((std) => (std.gender == 'male'));

// 2. Is there at least one character that has mass less than 50?
characters.some((std) => (std.mass < 50));





