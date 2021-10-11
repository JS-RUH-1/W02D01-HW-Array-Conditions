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


// Numbers' summations


let numbers = [23,54,32,87,47]
let sum=0
for(let i = 0;i<=numbers.length-1;i++){
    
sum = sum+numbers[i]
}

console.log("The Sum = "+ sum)

// Maximum number

let maxArray =[16,4,2,0,19,6];

for(let i =0;i<maxArray.length-1;i++){
    if(maxArray[i]>maxArray[i+1]){
        console.log("Last Number Show Is the Max "+ maxArray[i])
    }
}


// Reverse Array
let reverseArray= [1,2,3,4,5,6,7,8,9,10];
let containReverseArray =[];
for(let i =0; i<= reverseArray.length-1;i++){
    containReverseArray.push(reverseArray[reverseArray.length-1-i])

}
console.log(containReverseArray)


//stars pattern

let stars=5;
let starsArray=[]
for(let i=0;i<=stars;i++){
    starsArray.push("*")
    console.log(starsArray)
}


// While loop

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

let whileArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let primeNumbers=[];
for(let i=1;i<=whileArray.length-1;i++){

    console.log( isPrime(i)? + i+ " : prime number":  i +" : Not prime Number" )
  
}


// Arrays
// MAP


let arryObject = characters.map(function(el){
    return[el.name,el.height]
})

let arrayOfFristNames = characters.map(({ name }) => name)

console.log(arrayOfFristNames)
console.log(arryObject)

let reduseArray =characters.map(function(element){
    return element.mass;
});

let total = reduseArray.reduce(function(acc,current){
    return acc + current;
});

console.log(total);

let namesArray = characters.map(function(element){
return element.name
})

totalOfCharacters = namesArray.reduce(function(acc,value){
    return acc+value;
})

console.log(totalOfCharacters.length)

let massGrater = characters.filter(function(element){
    return element.mass >100;
})

console.log(massGrater)


characters.sort(function(a,b){
 var nameA = a.name.toUpperCase()
 var nameB = b.name.toUpperCase()
 if(nameA<nameB){
     return-1;
 }
 if(nameA>nameB){
     return 1;

 }
 return 0;
});
console.log(characters)


characters.sort(function(a,b){
    var nameA = a.gender.toUpperCase()
    var nameB = b.gender.toUpperCase()
    if(nameA<nameB){
        return-1;
    }
    if(nameA>nameB){
        return 1;
   
    }
    return 0;
   });
   console.log(characters)


const areBlueEyes = characters.every((element)=>{
    return element.eye_color == "blue"
})

console.log(areBlueEyes)

const areMale = characters.every((element)=>{
    return element.gender == "male"
})

console.log(areMale)



const isThereMele = characters.some((element)=>{
    return element.gender == "male"
})

console.log(isThereMele)

const lessThen50 = characters.some((element)=>{
    return element.mass < 50;
})

console.log(lessThen50)