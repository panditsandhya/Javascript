const score = 500
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber = 1123.987
// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());//us standard value
// console.log(hundreds.toLocaleString('en-IN'));//Indian standard value




//***********************Maths****************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.floor(4.7));
// console.log(Math.ceil(4.8));
// console.log(Math.min(3,4,5,8));
// console.log(Math.max(3,4,5,8));
// console.log(Math.random()); // Values always 0 to 1
// console.log(Math.random()*10 +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

