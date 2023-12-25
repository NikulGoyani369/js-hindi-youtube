
/**
 * below code is variable declared Info.....
 */

const accountId = 144553            // constant means asign value never change 
let accountEmail = "nirmal@google.com" // let means will change value or 
var accountPassword = "Test1234"       // 
accountCity = "Jaipur"                //
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