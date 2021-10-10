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

console.log("For loop")
console.log("Numbers' summations ////")

let sumHeight =0;
let sumMass =0;

for (let i=0 ;i< characters.length;i++){
     sumHeight=sumHeight+characters[i].height;
   
     sumMass= sumMass+characters[i].mass;
}
console.log(" Sum of all height is :("+sumHeight+")")
console.log(" Sum of all mass is :("+sumMass+")")

console.log("----------------------")


let Number =[23,54,32,87,47];

let sum=0;
for(let i=0 ; i<Number.length;i++){

    sum =sum+Number[i];
}

console.log(" Sum of all Number is :"+sum)

console.log("----------------------")

console.log("Maximum number///")

let num=[16 ,4,2,0,19,6];

let max =num[0];

for(let i= 1 ;i<num.length;i++){
if (max <num[i])
max=num[i]

}
console.log("The max number is :"+max)

console.log("----------------------")

console.log("Reverse Array////")

console.log( "Reverse Array is :")

let arr=[1,2,3,4,5,6,7,8,9,10];

for (let i=arr.length-1 ; i>=0; i--){
     console.log(arr[i])
}

console.log("----------------------")

console.log("Nested for loop//")

console.log("stars pattern //")

let star =5;
let string =""
for( let i=1; i <=star ;i++){
 for (let j=1 ; j<=i ;j++){
     string+="*"
 }
 string += "\n";
}
console.log(string);
console.log("----------------------")

console.log("While loop ///")

let wh=7 ,flag =true;
let i=2;
while(i<= wh-1){

    if (wh % i ==0)
           flag=false;
            break
}
if (flag == true)
console.log(wh + " is prime");
else
console.log(wh+ " is not prime");
console.log("----------------------")

console.log("Arrays////")

console.log("MAP ////")


// MAP
console.log("Map ..")
for (let i=0 ;i<characters.length;i++){
console.log("Name is :["+characters[i].name +"] the Height is : ["+ characters[i].height+"]")
console.log("----------------")
}

//REDUCE
console.log("REDUCE ..")
let SUM =0;

for(let i=0 ;i<characters.length ;i++){

    SUM= SUM + characters[i].mass


}
console.log("Total Mass is :"+SUM)
console.log("----------------")


//  
// let count =0

//  for( let i =0 ;i<characters.length ;i++)
//     {
// if (characters[i].eye_color =="blue")
//     count = count+1;

// }

// console.log("The total of blue eye is :"+ count)
// console.log("----------------")

//FILTER
console.log("FILTER .... ")
for (let i=0 ;i< characters.length ;i++){


    if (characters[i].mass > 100)

    console.log(" Heigth less than 100  is :["+characters[i].mass+"]")
}
console.log("----------------")

for (let i=0 ;i<characters.length ;i++){

if (characters[i].gender =="female")
console.log("["+characters[i].name +"] She Is a female ")
 
}
console.log("----------------")

//SORT

console.log("SORT the name ")

 
    
   function SortName(a,b){

    if (a.name < b.name){return -1;}
    if (a.name < b.name){return 1;}
    return 0;
   }

   let so= characters.sort(SortName);
   console.log(so)

   console.log("----------------")
   console.log("SORT the Gender ")


   function SortGender(a,b){

    if (a.gender < b.gender){return -1;}
    if (a.gender < b.gender){return 1;}
    return 0;
   }

   let soGen= characters.sort(SortGender);
   console.log(soGen)

     console.log("----------------")


//      // EVERY

     console.log("EVERY")
     console.log("Does every character have blue eyes?")

     let blueColor= false;

     for( let i =0 ; i< characters.length ;i++){
 
         if(characters[i].eye_color== "blue"){
                 blueColor= true;
         
        }
        break
     }
       console.log(blueColor)
       console.log("----------------")
 
       console.log("Is every character male?")
 

       let male= false;

     for( let i =0 ; i< characters.length ;i++){
 
         if(characters[i].gender =="male"){
                 male= true;
         
        }
        break
     }
       console.log(male)
       console.log("----------------")


// //SOME

console.log("SOME")

console.log("Is there at least one male character?")
    let oneMale= false;

    for( let i =0 ; i< characters.length ;i++){

        if(characters[i].gender =="male"){
            oneMale= true;
        break}
    }
      console.log(oneMale)
      console.log("----------------")


      console.log("Is there at least one character that has mass less than 50?")
      let mas= false;

    for( let i =0 ; i< characters.length ;i++){

        if(characters[i].mass <50){
        mas= true;
        break}
    }
      console.log(mas)
      console.log("----------------")


