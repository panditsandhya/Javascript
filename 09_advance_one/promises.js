// First Promise

// const promiseOne = new Promise(function(resolve, reject){
//     // Do any async task
//     // DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// Second Promise

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// Third Promise

// const PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Sandhya", email: "sandhya@example.com"})
//     }, 1000)
// })

// PromiseThree.then(function(user){
//     console.log(user);
// })

// Four Promise

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error) {
//             resolve({username: "sandhya", password: "123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// Promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "Javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)

});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error) {
        console.log(error);
    }
}

consumePromiseFive()

