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

// LOOP

let Numbers = [23,54,32,87,47]
let total = 0;
for (let i = 0; i < Numbers.length ; i++)
{
    total = total + Numbers[i];
}
console.log (total);


let ArrNum = [16,4,2,0,19,6]
let max = 0;
for ( let t = 0; t < Numbers.length ; t++)
{
    if (ArrNum[t] > max)
    {
        max = ArrNum[t];
    }
}
console.log (max);


let RevArry = [1,2,3,4,5,6,7,8,9,10];
RevArry.reverse();
console.log(RevArry);



// Nested for loop

let num5 = 5;
for (let j = 1; j <= num5 ; j++)
{
    let star = "";
    for (let k = 1; k <= j; k++) {
       star+="*";
    }
console.log(star);
}


// While loop

let new_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let r = 0;
while (r < new_array.length)
{

    if ( isPrime ( new_array[r]) ){
        console.log (`${new_array[r]} is prime`)
    }
    r++ ;
}

function isPrime ( num ){
    for (let i = 2; i < num; i++ )
        if ( num % i === 0 ) return false;
    return num > 1
}

// Map

let name_h =characters.map(name_haight);
function name_haight (item){
    return [item.name , item.height]
}
console.log (name_h);

//

let names = characters.map(gitname);
function gitname (n){
    return (n.name);
}
console.log (names);


// REDUCE

let totalmass = characters.reduce(
    ( previousValue, currentValue ) => previousValue + currentValue.mass,
    0
  )
  console.log(totalmass);

  //

  
let total_ch_n = characters.reduce(
    ( previousValue, currentValue ) => previousValue + currentValue.name.length,
    0
  )
    
  console.log(total_ch_n);



  // FILTER

  let mass_1 = characters.filter (
    (std) => std.mass > 100
  );
  console.log(mass_1);

  //

  let FG = characters.filter (
    (std) => std.gender === "female"
  );
  console.log(FG);

  
 // SORT


 let gitname3 = characters.map(gitname2).sort ();
    function gitname2 (character)
 { return character.name ;}
 
 console.log (gitname3);

 //

 
 let gitgender = characters.map(gitgender1).sort ();
    function gitgender1 (character1)
 { return character1.gender ;}
 
 console.log (gitgender);


  //EVERY

  let eye_c = characters.every(E_C)
  function E_C (ec1) 
  {
      return ec1.eye_color == "blue" ;
  }
 
  console.log (eye_c);

    //

  let gender_ = characters.every(gen)
  function gen (g1) 
  {
      return g1.gender == "male" ;
  }
 
  console.log (gender_);


  // SOME

 let gend_= characters.some(gend1)
 function gend1 (gdm1) 
 {
     return gdm1.gender == "male" ;
 }

 console.log (gend_);

    //

 let check_mass = characters.some(mass_2)
 function mass_2 (Mass11) 
 {
     return Mass11.mass < 50 ;
 }

 console.log (check_mass);







