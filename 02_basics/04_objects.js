



const facebookUser = {
    id: "1234kf",
    name: "sandhya",
    isLoggedIn: false
} 

//Literal objects or Non-singleton

//singleton
const googleUser = new Object() 

googleUser.id = "12876gh"
googleUser.name = "sandhya"
googleUser.isLoggedIn = false

//console.log(googleUser);

const regularUser = {
    email: "someexample@gmail.com",
    fullName: {
        userFullName: {
            firstname: "sandhya",
            lastname: "kumari"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
// const obj3 = Object.assign( obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} // spread operator

// console.log(obj3);

//Database value comes like below
// const users = [
//     {
//       id: 1,
//       email: "sandhya@gmail.com"
//     },

//     {
//         id: 2,
//         email: "sandhya@gmail.com"
//     },

//     {
//         id: 3,
//         email: "sandhya@gmail.com"
//     },

// ]

// (users[1].email)

// console.log(facebookUser);
// console.log(Object.keys(facebookUser));
// console.log(Object.values(facebookUser));
// console.log(Object.entries(facebookUser));// array inform of key and vlaue

// console.log(facebookUser.hasOwnProperty('isLoggedIn')); // this property checked value  exists or not in object

// console.log(facebookUser.hasOwnProperty('isLogged'));


//object Destructuring

const course = {
    courseName: "Javascript",
    price: 2999,
    courseInstructor: "Hitesh"
}
//course.courseInstructor

const { courseInstructor: instructor } = course
console.log(instructor);

//Api format
// {
//     "name": "sandhya",
//     "age": 25,
// }
