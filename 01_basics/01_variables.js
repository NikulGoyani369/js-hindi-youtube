const accountId = 144553
let accountEmail = "nirmal@google.com"
var accountPassword = "Test1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "ng@gmail.com"
accountPassword = "123Test"
accountCity = "Surat"

console.log(accountId);


/* 
Prefer not to use var variable
becasue of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])