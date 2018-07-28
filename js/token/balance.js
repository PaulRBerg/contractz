const contract = require('../contract')();
const config = require('../config');

contract.methods.balanceOf(config.accounts[0]).call().then((result) => {
	console.log(`PaulCoin balance is`, result);
}).catch(err => {
	console.log(err);
});