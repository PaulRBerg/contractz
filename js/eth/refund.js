const contract = require('../contract')('RecoverYourETH');
const config = require('../config');

contract.methods.refundBalance().call({ from: config.accounts[0] }).then((result) => {
	console.log(`Balance refunded to`, config.accounts[0], result);
}).catch(err => {
	console.log(err);
});