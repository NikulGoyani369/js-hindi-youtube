
/**
 * below code is variable declared Info.....
 */
//const = can't be re-assigned a value and can't be declared again  (block scope)
const accountId = 144553            // constant means asign value never change

//let = can be re-assigned a value but can't be declared again (block scope)
let accountEmail = "nirmal@google.com" // let means will change value or 

//var = it can be re-assigned a value and it can also be declared again  (Global scope)
var accountPassword = "Test1234"       
accountCity = "Jaipur"                
let accountState;

// accountId = 2
console.log(accountId);

accountEmail = "ng@gmail.com"
accountPassword = "123Test"
accountCity = "Surat" 

/* 
Prefer not to use var variable
becasue of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])