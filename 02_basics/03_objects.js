//singleton
//Object.create: It is called Constructor method 


//Object literals: key and value pair
const mySym = Symbol("key1")


const JsUser = {
    name: "sandhya",
    [mySym]: "myKey1",
    age: 25,
    location: "Delhi",
    email: "sandhya12@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);//access 
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "Sandhya999@gmail.com" // value change
// Object.freeze(JsUser) // After freeze we can not change any value in object
JsUser.email = "Sandhya1223@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


