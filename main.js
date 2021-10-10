const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
  sum += Numbers[i];
}
console.log("The total is =" + sum);

let arrayM = [16, 4, 2, 0, 19, 6];
let l = arrayM.length;
let max = 0;
let i;
for (i = 0; l > i; i++) {
  if (arrayM[i] > max) {
    max = arrayM[i];
  }
}
console.log(" Max number is " + max);

console.log(" reversed array  ");

let revArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = revArray.length; i > 0; i--) {
  console.log(revArray[i - 1]);
}
console.log(" Stars  ");

let starNum = 5;
let count = "";
for (let i = 1; i <= starNum; i++) {
  for (let j = i; j <= i; j++) {
    count += "*";
    console.log(count);
  }
}
console.log(" prime numbers  ");

let arr0 = [];
let w = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
while (w < numbers.length) {
  let ele = numbers[w];
  if (
    (ele % 2 != 0 &&
      ele % 3 != 0 &&
      ele % 4 != 0 &&
      ele % 5 != 0 &&
      ele != 1) ||
    ele == 2 ||
    ele == 3 ||
    ele == 5
  )
    arr0.push(ele);
  w++;
}
console.log(arr0);

let namesAndHeights = [];
namesAndHeights = characters.map(function (element) {
  return [element.name, element.height];
});
console.log(namesAndHeights);

let firstNames = [];
firstNames = characters.map(function (element) {
  let x = element.name.split(" ");
  return x[0];
});
console.log(firstNames);

let masses = [];
masses = characters.map(function (element) {
  return element.mass;
});

let massesTotal = [];
massesTotal = masses.reduce(getSum, 0);
function getSum(total, num) {
  return total + num;
}
console.log(massesTotal);

let charTotal = characters.reduce((total, ele) => {
  total += ele.name.length;
  return total;
}, 0);

console.log(charTotal);

let allObjMassGrater100 = characters.filter((obj) => obj.mass > 100);
console.log(allObjMassGrater100);

let allFamaleObj = characters.filter((obj) => obj.gender == "female");
console.log(allFamaleObj);

//fix it
let sortedByName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;

  if (a.name > b.name) return 1;
  return 0;
});
console.log(sortedByName);

let sortedByGender = characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;

  if (a.gender > b.gender) return 1;
  return 0;
});
console.log(sortedByGender);

console.log(
  characters.every((ele) => {
    if (ele.eye_color == "blue") return ele;
  })
);

console.log(
  characters.every((ele) => {
    if (ele.gender == "male") return ele;
  })
);

console.log(
  characters.some((ele) => {
    if (ele.gender == "male") return ele;
  })
);

console.log(
  characters.some((ele) => {
    if (ele.mass < 50) return ele;
  })
);
