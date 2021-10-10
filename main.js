
let numbers = [23,54,32,87,47];
let num = 0;

for (let i = 0; i < numbers.length; i++) {
 num += numbers[i]
}


let numbers2 = [16,4,2,0,19,6];
let num2 = 0;
for (let i = 0; i < numbers2.length; i++) {
 if (num2 < numbers2[i]) {
   num2 =  numbers2[i]
 }
}
console.log(num2)


let numbers3 = [1,2,3,4,5,6,7,8,9,10];
let num3 = 0;
for (let i = 1; i <= numbers3.length; i++) {
 console.log(numbers3[numbers3.length -i])
}

let bb = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let i =0;

while (i < bb.length) {
  if(bb[i] % 2 != 0 && bb[i] % 3 != 0 && bb[i] % 5 != 0  )
  console.log(bb[i])
  i++;
}


let pp = 5
let str = '*'
for (let i = 1; i <= pp; i++) {
    console.log(str.repeat(i))
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
characters.map(uu).sort();
function uu(charecter){
  return charecter.gender;
}
characters.map(getNam);
function getNam(charecter){
  return {name : charecter.name, height: charecter.height}
}

characters.map(getNames);
function getNames(charecter){
  return charecter.name.split(" ").[0]
}


let heights = [ 172, 202, 150, 188 ]
let mass = [ 77, 136, 49, 84 ]
mass.reduce(myFunc);
function myFunc(total, num) {
  return total + num;
}

characters.filter(gg);
function gg(character) {
  return character.mass > 100;
}

characters.filter(ss);
function ss(character) {
  return character.gender = 'female';
}

characters.every(vv)    // Returns true
function vv(character) {
  return character.eye_color = 'blue';
}
characters.every(kk)    // Returns false
function kk(character) {
  return character.gender = 'male';
}


characters.some(ff)   // Returns true
function ff(character) {
  return character.gender = 'male';
}

characters.some(xx)   // Returns false
function xx(character) {
  return character.mass < 50;
}

characters.map(getNam2).sort();
function getNam2(charecter){
  return charecter.name
}





