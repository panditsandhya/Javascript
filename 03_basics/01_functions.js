
function myName(){
   console.log("s");
   console.log("a");
   console.log("n");
   console.log("d");
   console.log("h");
   console.log("y");
   console.log("a");
}

// myName()

function addTwonumbers(num1, num2){
    console.log(num1 + num2);

}

function addTwonumbers(num1, num2){
//    let result = num1 + num2
// //    console.log("sandhya");
//    return result
   //console.log("sandhya");//after return do not excuted any 
   return num1 + num2

}

const result = addTwonumbers(5, 5)
// console.log("Result: ", result);

// addTwonumbers(5, "5")
// addTwonumbers(5, null)

function loginUserMessage(username = "Shanvi"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Sandhya"));
// console.log(loginUserMessage(""));// Nothing print
 console.log(loginUserMessage("sandhya")); //undefined

 function calculateCartPrice(val1, val2, ...num1){
    return num1
 }

//  console.log(calculateCartPrice(200, 400, 600, 800));

const user = {
    username: "sandhya",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "sandhya",
    price: 900

})

const myNewArray = [200, 400, 600, 800]
 
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600]));




