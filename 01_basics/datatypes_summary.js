//Primitive
// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 1000 // Number
const scoreValue = 100.9 // Number

const isLoggedIn = false //Boolean
const outsideTemp = null // null
//let userEmail = undefined // undefined
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 898445467687800988777n


//Non Primitive(Reference type)

//Array, Objects, Functions

//Array
const cars = ["Bmw","Swift", "Maruti"];

//Objects
let myObj = {
    name: "Sandhya",
    age: 25,
}

//Functions
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

//  If val is undefined, return "undefined".
//  If val is null, return "object".
//  If val is a String, return "string".
//  If val is a Symbol, return "symbol".
//  If val is a Boolean, return "boolean".
//  If val is a Number, return "number".
//  If val is a BigInt, return "bigint".
