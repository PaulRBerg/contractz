const contract = require('../contract')('Escrow');
const config = require('../config');

contract.methods.refundBalance().send({ from: config.accounts[0] }).then((result) => {
	console.log(`Balance refunded to`, config.accounts[0], result);
}).catch(err => {
	console.log(err);
});