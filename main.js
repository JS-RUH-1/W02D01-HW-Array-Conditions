// FOR LOOP
// Numbers' summations
let Numbers = [23,54,32,87,47]
let sum =0;
for (let i=0; i < Numbers.length ; i++) {
sum = sum + Numbers[i];
}
console.log(sum)

// Maximum number
let arry = [16,4,2,0,19,6]
let largest = 0;

for (let i = 0; i < arry.length; i++) {
if (arry[i] > largest) {
    largest = arry[i];
}
}
console.log(largest)

// Reverse Array  
let arry1 =  [1,2,3,4,5,6,7,8,9,10]
for (let i = arry1.length-1; i >= 0; i--) {  
    console.log(arry1[i] + " ");  
}   

//NESTED FOR LOOP 
//stars pattern
let myVar = 5;
let string = " ";
for (let i = 0; i < myVar; i++) {
  for (let j = 0; j <= i; j++) {
    string += "*";
  }
  string += "<br>";
}
document.write(string);

//While loop
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
    if(prime) console.log(nums[i], "is prime ")
    i++;
}


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




// ARRAY
// map
const namesheight = characters.map(characters =>  ({text: characters.name , value: characters.height }))
console.log(namesheight)

const fnames = characters.map(x => x.name)
console.log(fnames)

// // reduce
const masses = characters.map(x=> x.mass) 
const totalMasses = masses.reduce((prev,curr)=>prev+curr,0)
console.log(totalMasses)

function characterCount(arr) {
return arr.reduce(function(charCount, item) {
  return charCount + item.length;
}, 0); 
}

console.log(characterCount(['Luke Skywalker', 'blue', 'male', 'male','yellow','Darth Vader','Leia Organa','brown','female','Anakin Skywalker','blue','male',]));


//   FILTER
const grater = characters.filter(character => character.mass < 200);
console.log(grater)

const f = characters.filter(character => character.gender ==='female');
console.log(f)

//SORT
const sortNames = fnames.sort() 
console.log(sortNames)

const genders = characters.map(x => x.gender)
const sortGender = genders.sort() 
console.log(sortGender)

// every
const blueEyes = characters.every(function checkAge(character) {
return character.eye_color ==='blue';
})
console.log(blueEyes)

const G = characters.every(function checkAge(character) {
return character.gender ==='male';
})
console.log(G)

//   some
const male1 = characters.some((b)=> b.gender ==='male')
console.log(male1)

const mass2 = characters.some((x)=> x.mass<50)
console.log(mass2)
