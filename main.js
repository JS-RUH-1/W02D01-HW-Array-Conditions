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

//////////////////
// FOR LOOP
//////////////////

let Numbers = [23,54,32,87,47];
// Numbers' summations using for loop

let sumOfAllNumbers = 0;
for (let i = 0; i < Numbers.length; i++) {
    sumOfAllNumbers = sumOfAllNumbers + Numbers[i];
}
console.log("The sum of all numbers is " + sumOfAllNumbers);

// Maximum number
let maxNumber = 0;
for (let i = 0; i < Numbers.length; i++) {
    if(Numbers[i] > maxNumber) maxNumber = Numbers[i];
}
console.log("The max number is " + maxNumber);

// Reverse Array
let basicArray =  [1,2,3,4,5,6,7,8,9,10];
let reservedArray = basicArray.reverse();
console.log("The reserved array : "+ reservedArray)

/////////////////////
// Nested for loop
/////////////////////
let arrayForNasterLoop = [1,2,3,4,5]
for (let i = 0; i < arrayForNasterLoop.length; i++) {
    let myStar = "*";
    for(let x = 0; x < i; x++) {
        myStar += "*";
    }
    console.log(myStar);
}

////////////////////////
// While loop
////////////////////////

// prime numbers
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let i = 0;
while (i < nums.length) {
   let x = 2;
   let prime = true;
    while (x < nums[i]) {
        if (nums[i] % x == 0) {
            prime = false;
            break;
        }
        x++;
    }
    if(prime) console.log(nums[i], " is prime")
    i++;
}

////////////////////
// Arrays 
///////////////////
// MAP
console.log("just name and height properties", characters.map(ch => ({name: ch.name, height: ch.height})));
console.log("Array of all first names ", characters.map(ch => ch.name.split(" ")[0]));

// reduce
console.log("mass of all characters ", characters.map(c => c.mass).reduce((p,v) => p+v));
console.log("total number of characters in all the character names", characters.map(c => c.name.length).reduce((p,v) => p+v));

// filter 
console.log("characters with mass greater than 100", characters.filter(c => c.mass > 100));
console.log("all female characters", characters.filter(c => c.gender === "female"));

// sort
console.log("sort by name", characters.sort((a,b) => a.name.localeCompare(b.name)));
console.log("sort by gender", characters.sort((a,b) => a.gender.localeCompare(b.gender)));

// every 
console.log("Does every character have blue eyes?", characters.every(ch => ch.eye_color === "blue"));
console.log("Is every character male?", characters.every(ch => ch.gender === "male"));

// some
console.log("Is there at least one male character?", characters.some(ch => ch.gender === "male"));
console.log("Is there at least one character that has mass less than 50?", characters.some(ch => ch.mass < 50));