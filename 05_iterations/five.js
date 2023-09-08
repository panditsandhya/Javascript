// ForEach

const coding = ["js", "py", "cpp", "java"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

