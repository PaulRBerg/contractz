const dotenv = require('dotenv');
dotenv.config();

const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = process.env.MNEMONIC;
const provider = 'https://ropsten.infura.io/' + process.env.INFURA_API_KEY;

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 7545,
			network_id: 3
		},
		ropsten: {
			provider: () => { return new HDWalletProvider(mnemonic, provider) },
			network_id: 3,
			gas: 4600000
		}
	}
};