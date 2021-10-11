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
let numbers = [23,54,32,87,47];

let sum = numbers.reduce((num1,num2)=>
    num1+num2,0
    )
    console.log(sum);

let num2 = [16,4,2,0,19,6];

let max = num2.reduce((a,b)=>{
    return Math.max(a,b)
},0)
console.log(max);


let rev = [1,2,3,4,5,6,7,8,9,10];

console.log(rev.reverse());



for(let i=0 ;i<=5;i++){
    for(let j=0 ;j<=i;j++){
        document.write("*")
       
        

    }
    document.write("<br>")
}

const primeNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    for(let i =0 ; i<primeNum.length ;i++){
        console.log(isprime(primeNum[i]));
    }
    
    function isprime(num){ 
        for(let j=2 ;j*j<=num; j++){
            if (num%j === 0 ){
                
                return false

            }
        

        }
        return num;
    }
       
        
    

    let map1 = characters.map((elment)=>{
      return elment.name +" "+ elment.height
    });
    console.log(map1);

    let map2 = characters.map((e)=>{
       return e.name.split(" ").slice(0,-1)
    })
    console.log(map2);
    // 
    const map3 = characters.reduce((x,y)=>
            x+y.mass,0
        )
        console.log(map3);

    const map4 = characters.filter((x)=>
        x.mass>100
    )

    const map5 = characters.filter((x)=>
        (x.gender=='female')
    )
    const nameF = map5.map((x)=>{
        return x.name
    })
    console.log(nameF);
    
    const sort1 = characters.sort((x)=>{
        return x.name
    })
        console.log(sort1);
    
     const sort2 = characters.sort((x)=>{
            return x.gender
      })
            console.log(sort2);
    const ever = characters.every((x)=>
            
        x.eye_color == "blue"
        )
        console.log(ever);

    const ever2 = characters.every((x)=>
      x.gender == "male"
    )
    console.log(ever2);
    
    const some1 = characters.some((x)=>
    x.mass<50
)
console.log(some1);




