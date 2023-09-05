const accountId = 19878
let accountEmail = "sandhya90@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState

//accountId = 345679 // not allowed

//console.log(accountId);

/*
prefer not to use var because of issue 
in block scope and functional scope
*/ 

accountEmail = "sss@gmail.com"
accountPassword = "09876"
accountCity = "Chandigarh"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])