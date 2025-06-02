const accountID = 1234 // constant throughout cannot be changed
let accountEmail = "sharvari@google.com" // can be changed 
var accountPassword="12345" // should not be used 
accountcity="mumbai"
// accountID=2 not allowed 
accountEmail="tathe@google.com"
accountPassword="123456"
accountcity="jaipur"
let accountState;

console.table([accountEmail,accountID,accountPassword,accountcity,accountState]) // to print all the values ,accountstate - undefined
console.log(accountEmail) // to print a single value 
