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
//----------------------------------
//Numbers' summations
function summations(){
let Numbers =[23,54,32,87,47];
let sum = 0;
for(let i= 0 ; i < Numbers.length ; i++){
sum += Numbers[i];
return sum;
}}

console.log("The sum of all numbers is: "+ summations() );
console.log("---------------");

//-----------------------------------

//Maximum number
function Maximum(){
let Numbers2 = [16,4,2,0,19,6];
let max = Numbers2[0];
for (let i = 0 ; i < Numbers2.length ; i++){
    if(Numbers2[i] > max)
        max = Numbers2[i]

}
return max;
}
console.log("the maximum number of this list is :" + Maximum());
console.log("---------------");

//-----------------------------------

//Reverse Array
let reverseArr = [1,2,3,4,5,6,7,8,9,10];
console.log("The array in a reverse order : "+reverseArr.reverse());
console.log("---------------");


//-----------------------------------

//Nested for loop
function nestedLoop(){
let star = " ";
  for(let i = 1 ; i<=5; i++){

    for(let j = 1 ; j<=i ;j++){
       star+="*";
    }
    star+="\n";
}
 return star;
}  
  
 console.log(nestedLoop());
 console.log("---------------");

//-----------------------------------

//Prime number
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

console.log("---------------");

//-----------------------------------
//MAP => Get the name and height properties
let namesHeight = characters.map(function getNameHight(charcter) {
    return "Name: " + charcter.name + " , " + "Hight: " + charcter.height;
  });
  console.log(namesHeight);
 
 // MAP => Get the first Names of all  charcters
 let firstNames = characters.map(function getName(character) {
    return "Name: " + character.name.split(" ").slice(0, -1).join(" ");
  });

  console.log(firstNames);
  console.log("---------------");


//-----------------------------------
 //Reduce=> total mass of all characters
 let totalMass = characters.map(ch => ch.mass).reduce((previousValue, currentValue) => {
    return currentValue + previousValue;
}
    );
  console.log("Total mass of all characters is :  " + totalMass);
  console.log("---------------");

  // Reduce => total number of characters in all the character names 
  let nameslength = characters.map(charcter => charcter.name.length);

    let totalName = nameslength.reduce((previousValue, currentValue) => {
      return  previousValue + currentValue ;
    }
    );
    console.log("The total number of characters in all the character name is : "+ totalName);
    console.log("---------------");

  //-----------------------------------

  //Sort=>  sort by name
  let sortName = characters.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  for (let i = 0; i < sortName.length; i++) {
    console.log(sortName[i]);
  }
  console.log("---------------");

  
  //Sort => sort by gender  Male to female
  let sortgender = characters.sort((a, b) => {
    return b.gender.localeCompare(a.gender);
  });
  for (let i = 0; i < sortgender.length; i++) {
    console.log(sortgender[i]);
  }
  console.log("---------------");

  //-----------------------------------


  // Every => Does every character have blue eyes?
  let blueEvrey = characters.every((charcter) => {
    return charcter.eye_color == "blue";
  });
  console.log(blueEvrey);
  console.log("---------------");


  //  Every => Is every character male?
  let maleEvrey = characters.every((charcter) => {
    return charcter.gender == "male";
  });
  console.log(maleEvrey);
  console.log("---------------");


  //-----------------------------------


  // SOME => Is there at least one male character?

  let maleSome = characters.some((charcter) => {
    return charcter.gender == "male";
  });
  console.log(maleSome);
  console.log("---------------");


  //  SOME =>Is there at least one character that has mass less than 50?
  let massSome = characters.some((charcter) => {
    return charcter.mass < 50;
  });
  console.log(massSome);
  console.log("---------------");
