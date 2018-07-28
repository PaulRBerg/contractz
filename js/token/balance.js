const config = require('../config');
const contract = require('../contract')('PaulCoin', config.contracts[0]);

contract.methods.balanceOf(config.accounts[0]).call().then((result) => {
	console.log(`PaulCoin balance is`, result);
}).catch(err => {
	console.log(err);
});