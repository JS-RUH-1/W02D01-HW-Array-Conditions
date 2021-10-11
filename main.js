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

/**
 * filteer
 */
// let lessThen = characters.filter(value=>value.mass>100)
// console.log(lessThen)


// let female = characters.filter(ob=>ob.gender=='female')
// console.log(female)
/* ############*/


/* MAP */

//  let maps = characters.map(ob=>{ 
//      return {"name":ob.name,
//      "height":ob.height
//     }} );
// console.log(maps)

//let names = characters.map(op=>op.name)
//console.log(names)







/* reduce */

//  let massSum = characters.reduce((total,ob)=>
  
//      total+ob.mass,0
    
//  );

//  console.log(massSum)

// let nems =characters.reduce((total,ob)=>
// total+ob.name.length,0
// );
// console.log(nems)


/*###########################*/

/* sort */

//  let names = characters.sort((a,b)=>{
//      return a.name.localeCompare(b.name)
//   })

//   console.log(names)
// /* not solv */
//   let female = characters.sort(ob=>ob.gender=="female")
//      console.log(female)

/* EVERY*/
// let eye = characters.every(ob=>ob.eye_color=="blue")
// console.log(eye)

// let car =characters.every(ob=>ob.gender=="male")
// console.log(car)


// let Numbers = [23,54,32,87,47]
// var sum =0;
// for(i=0;i<Numbers.length;i++){
//   sum +=Numbers[i]
// }
// console.log(sum)
/*##################*/
// var arr = [16,4,2,70,19,6];
// console.log(Math.max(...arr));


/*#####################*/

/*SOME */
// let malee = characters.some(ob=>ob.gender =="male")
// console.log(malee)


// let maaas = characters.some(ob=>ob.mass <50)
// console.log(maaas)
/*#################*/
// let array = [1,2,3,4,5,6,7,8,9,10];
// console.log(array.reverse())

/*###################### */

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


/*#################################### */
// let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let j =0;j<array.length;j++){
//     for(let i=2;i<array[j];i++){
//         if(array[j]%i==0){
//              console.log("not Prime")
//         }
//     }
//     console.log("Prime" + array[j])
// }



