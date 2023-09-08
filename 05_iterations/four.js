//For in loop

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "php", "python"]
for (const key in programming) {
    //console.log(programming[key]);

}

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// Not iterable 

