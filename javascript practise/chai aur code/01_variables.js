const accountId = 25042001
let accountEmail = "akkipatel6036@gmail.com"
var accountPassword = "123456"
accountCity = "rajkot"
let accountState;

accountEmail ="ak@ggmail.com"
accountPassword ="23652"
accountCity ="morbi"

/*
prefer not used to var  because  it can be changed by anyone who has access to the script
beacuse of issue in block scope and functional scope
*/
console.log(accountId,accountEmail,accountPassword,accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])