// ForEach

const coding = ["js", "py", "cpp", "java"]

// callback function : - without name
// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

//coding.forEach(printMe)

coding.forEach( ( item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "python"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})




