/*Numbers' summations*/
let Numbers = [23,54,32,87,47]
let sum = Numbers[0];
for (let i=1; i < Numbers.length; i++){
    sum += Numbers[i]
}
console.log(sum);

/*Maximum number*/
let arr1 = [16,4,2,0,19,6];
arr1.sort(function(a,b){return b-a})
console.log(arr1[0])

/*Reverse Array*/
let arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr2.sort(function(a,b){return b-a}))

/*Nested for loop*/
let count = 5;
let stars = "";
for(let i=0; i<count; i++){
    stars += "*";
    console.log(stars);
}


/*  -- Arrays --  */

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

/*Arrays MAP*/
function func1(obj){
    return {name: obj.name, height: obj.height}
}
let arr4 = characters.map(func1)

function func2(obj){
    let fname = "";
    for(let i=0; i<obj.name.length; i++){
        if(obj.name[i] != " "){
            fname += obj.name[i];
        }else{
          break;
        }
    }
    return fname;
}
let arr5 = characters.map(func2)

/*Arrays REDUCE*/
let arr6 = characters.map((obj) => obj.mass)
arr6.reduce((total, num) => total + num)

let arr7= characters.map((obj => obj.name))
arr6.reduce((total, num) => total.length + num.length)

let arr7= characters.map((obj => obj.name))
let len = 0;
for(let i=0;i<arr7.length;i++){
  len += arr7[i].length;
}

/*Arrays FILTER*/
characters.filter((arg) => x = (arg.mass > 100) ? arg:"")

characters.filter((arg) => x = (arg.gender === "female") ? arg:"")

/*Arrays SORT*/
let nameSort = characters.map((obj) => obj.name).sort()
let characters_sort1 = [];
for(let i1=0; i1 < nameSort.length; i1++){
  for(let i2=0; i2 < characters.length; i2++){
    if(nameSort[i1] == characters[i2].name){
        characters_sort1.push(characters[i2]);
    }
  }
}

let genderSort = characters.map((obj) => obj.gender).sort().slice(0,2)
let characters_sort2 = [];
for(let i1=0; i1 < genderSort.length; i1++){
  for(let i2=0; i2 < characters.length; i2++){
    if(genderSort[i1] == characters[i2].gender){
        characters_sort2.push(characters[i2]);
    }
  }
}
/*Arrays EVERY*/
characters.every((obj) => obj.eye_color === "blue" )
characters.every((obj) => obj.gender === "male" )

/*Arrays SOME*/
characters.some((obj) => obj.gender === "male" )
characters.some((obj) => obj.mass < 50 )


