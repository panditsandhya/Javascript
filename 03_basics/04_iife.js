//Immediately Invoked Function Expressions(IIFE):
//It is used for avoid global scope pollutions

(function one(){
    //named iife
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('sandhya')