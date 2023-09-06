const name = "sandhya"
const age = 25

console.log(`Hello My name is ${name} and age is ${age} years`);
// console.log(`Hello My name is ${name.toUpperCase()} and age is ${age} years`);

const gameName = new String('Sandhya-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('S'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(1, 5)
console.log(anotherString);

const newStringOne = "  sandhya  "
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://sandhya.com/sandhya%20kumari"
console.log(url.replace('%20', '-'));

console.log(url.includes('sandhya'));

console.log(gameName.split('-'));

