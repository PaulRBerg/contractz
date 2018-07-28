const path = require('path');

const config = require('./config');
const web3 = require('./web3');

module.exports = (name = 'PaulCoin') => {
	const ABI = require(path.join(__dirname, '..', 'build', 'contracts', name + '.json')).abi;
	return new web3.eth.Contract(ABI, config.contracts[1], { from: config.accounts[0] });
};