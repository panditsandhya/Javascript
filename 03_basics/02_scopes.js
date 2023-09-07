
// if(true){
//     let a = 10
//     var b = 20
//     const c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);

//scope are different in Node and Browser
let a = 200
if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}

// console.log(a);

function one(){
    const username = "sandhya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

//one()

if(true){
   const username = "sandhya"
   if(username === "sandhya"){
    const website = " youtube"
    //console.log(username + website);
   }

//    console.log(website);
}

// console.log(username);

//++++++++++++++++++++++++ interesting +++++++++++++++++++++++


// 1st techniques to define function

console.log(addone(5));
function addone(num){
    return num + 1
}

// addone(5)

// 2nd techniques to define function

addTwo(5)
const addTwo = function(num){
    return num + 2
}

//addTwo(5)


