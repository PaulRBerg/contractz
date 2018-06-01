const path = require('path');

const config = require('./config');
const web3 = require('./web3');

const ABI = require(path.join(__dirname, '..', 'build', 'contracts', 'PaulCoin.json')).abi;
const contract = new web3.eth.Contract(ABI, config.contract, { from: config.accounts[0] });

module.exports = contract;