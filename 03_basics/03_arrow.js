const user = {
    username: "sandhya",
    price: 999,

    welcomeMessage:function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Ram"
user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "sandhya"
//     // console.log(this);
//     console.log(this.username);
// }

// one()


// const one = function(){
//     let username = "sandhya"
//     console.log(this.username);
// }
// one()

//Arrow function
// const one = () => {
//     let username = "sandhya"
//     // console.log(this.username);
//     console.log(this);
// }

// one()

//Explicit return: when use return it is called explicit
// const addTwo = (num1, num2) => {
//    return num1 + num2

// }

// console.log(addTwo(5, 5))

//Implicit return: when does not use return than it is called implicit
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) =>( num1 + num2)

const addTwo = (num1, num2) => ({username: "sandhya"})

console.log(addTwo(5, 5))


