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
console.log("Map ..")

 console.log('Get array of all names')
console.log( characters.map(Map));

 function Map(item){
     return[item.name].join(' ');
 }
 console.log("----------------")

 
 
console.log('Get array of all heights')

console.log(characters.map(Map2))
 

function Map2(item){
    return[item.height].join(' ');
}
console.log("----------------")

//REDUCE
console.log('REDUCE')
console.log('Get total height of all characters')
console.log("----------------")
 
console.log(characters.reduce(Reduce,0));
 

function Reduce(total,num){
     

return  total + num.height; 
}
console.log("----------------")


 
//FILTER
console.log("FILTER .... ")
console.log("----------------")
 console.log('Get characters with height less than 200')

console.log(characters.filter(Filter));

function Filter(check){
    return check.height <200;
}



console.log("----------------")

console.log('Get all male characters')

console.log(characters.filter(Filter2));

function Filter2(check){
    return check.gender =='male';
}

console.log("----------------")

console.log('SORT')
console.log('Sort by mass')


console.log(characters.sort(SORT))
function SORT(a,b){
    return a.mass -b.mass;
}
console.log("----------------")
console.log('Sort by height')

console.log(characters.sort(SORT2))

function SORT2(a,b){
    return a.height -b.height;
}
console.log("----------------")

console.log('EVERY')
console.log('Does every character have mass more than 40?')

console.log(characters.every(EV))
function EV(check){

    return check.mass >40;
}
console.log("----------------")
console.log('Is every character shorter than 200?')

console.log(characters.every(EV))
function EV(check){

    return check.height <200;
}
console.log("----------------")

 
console.log('SOME')
console.log('Is there at least one character with blue eyes?')

console.log(characters.some(SO))

function SO (ch){
    return ch.eye_color=="blue";
}

console.log("----------------")

console.log('Is there at least one character taller than 210?')
console.log(characters.some(SO2))

function SO2 (ch){
    return ch.height > 210;
}