//if

// if (2 != 3) {
//     console.log("executed");

// }

// const temperature = 40

// if(temperature < 50){
//     console.log("less than 50");
// }else{
//    console.log("temperature is greater than 50");
// }
// console.log("Executed");

//Block Scope

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);//we can not excute 



// <, >, <=, >=, ==, !=, ===, !== 

// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");//Do not do this 

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitcard){
    console.log("Allow to buy course");
}

// for multiple checking
if (loggedInFromGoogle || loggedInFromEmail){

    console.log("User logged In");
}