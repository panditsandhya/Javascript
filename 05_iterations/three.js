// for of 

// const arr = [10, 20, 30]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);

}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//object is not iterable through for of loop

// for (const [key, value] of myObject) {
//     console.log(key, ';-', value);
    
// }


