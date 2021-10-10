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


let x = 0;
let num= [23, 54,32,87,47];
for(let i=0; i<num.length ; i++){
 x = x + num[i];
    console.log(x)
} 


let arr=[16, 4,2,0,19,6];
let n=0;
for(i=0;i<arr.length;i++){
  if (arr[i]>n){
    n=arr[i];
    console.log(n)
  }
}
 
let arr=[1,2,3,4,5,6,7,8,9,10]
let r=[];
for(i= arr.length-1;i>-1;i--){
  r.push(arr[i]);
}
console.log(r)
 
let o=6;
let star="";
for(i=0;i<o;i++){
  console.log(star);
  star+="*"; 
}

let name = characters.map(getName);

function getName(name){
    return name.name;
}


let heights = []
heights = characters.map(function (elmint)
{
  return elmint.height;
});

mass.reduce(fun)
function fun(total, mass){
  return total+ mass
}

heights.reduce(fun)
function fun(total, num){
  return total+num
}


mass.filter(fel)
function fel(mass){
  return mass>100;
}

characters.filter(gg)
function gg(character){
  return character.gender=="female";
}

characters.sort((a,b)=>{
    return a.gender-b.gender
  });

  characters.sort((a,b)=>{
    return a.name-b.name
  });
   
  
characters.every((ele)=>{if(ele.eye_color=="blue")return ele;});

characters.every((ele)=>{if(ele.gender=="male")return ele;});

characters.some((ele)=>{if(ele.mass<50)return ele;});



