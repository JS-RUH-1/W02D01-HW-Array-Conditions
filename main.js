
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


let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let i =0;
while (i < arr.length) {
  if(arr[i] % 2 != 0 && arr[i] % 3 != 0 && arr[i] % 5 != 0  )
  console.log(arr[i])
  i++;
}


let stars = 5
for (let i = 1; i <= stars; i++) {
    console.log('*'.repeat(i))
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

characters.map((character)=>{
    return character.gender;
}).sort();


characters.map((character)=>{
    return {name : character.name, height: character.height}
});


characters.map((character)=>{
    return character.name.split(" ")
    // .[0]
});


characters.map((character)=>{
    return character.mass
}).reduce((total, num)=>{
    return total + num;
});

characters.filter((character) =>{
    return character.mass > 100;
});

characters.filter((character)=>{
    return character.gender = 'female';
});

characters.every((character)=>{
    return character.eye_color = 'blue';
})    // Returns true

characters.every((character)=>{
    return character.gender = 'male';
})    // Returns false


characters.some((character)=>{
    return character.gender = 'male';
})   // Returns true

characters.some((character)=> {
    return character.mass < 50;
})   // Returns false


characters.map((character)=>{
    return character.name
}).sort();




