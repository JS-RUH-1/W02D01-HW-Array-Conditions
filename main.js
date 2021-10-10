// For Loop
// 1
let numbers = [23,54,32,87,47]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum);

// 2 
let arr = [16,4,2,0,19,6];
let maxNum = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > maxNum) {
        maxNum = arr[i]
    }
}
console.log(maxNum);

// 3
let arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr2.reverse());
//  There are another solution




// 
// 
// Nested for loop 
let rows = 5; 
let string = ""
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        string += "* "
    }
    document.write("<br />")
    console.log(string);
}



// 
// 
// While Loop
let wArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let i = 0;
while(wArr[i] % 2 === 0) {
    wArr.pop(wArr[i])
    i++
}
console.log(wArr);







// 
// 
// Arrays
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

// MAP
let fName = characters.map(n => n.name)
console.log(fName);



// REDUCE 
let massValues = characters.map(ms => ms.mass)
let redu = massValues.reduce((accumulator, mas) =>  {
    return accumulator + mas
})
console.log(redu);



// FILTER 
let filt1 = characters.filter(f1 => f1.mass > 100)
console.log(filt1);

let filt2 = characters.filter(f2 => f2.gender == "female")
console.log(filt2);


// SORT
let sorting1 = characters.map(s1 => s1.name).sort()
console.log(sorting1);

let sorting2 = characters.map(s2 => s2.gender).sort()
console.log(sorting2);


// EVERY
let allCh1 = characters.every(ev1 => ev1.eye_color == "blue")
console.log(allCh1);

let allCh2 = characters.every(ev2 => ev2.gender == "male")
console.log(allCh2);


// SOME 
let atOne1 = characters.some(sm1 => sm1.gender == "male")
console.log(atOne1);

let atOne2 = characters.some(sm2 => sm2.mass < 50)
console.log(atOne2);