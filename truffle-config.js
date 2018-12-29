const dotenv = require("dotenv");
dotenv.config();

const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = process.env.MNEMONIC;

const testnet = (name, network_id, gas = 6999500) => {
	return {
		provider: () => {
			return new HDWalletProvider(mnemonic, `https://${name}.infura.io/` + process.env.INFURA_API_KEY);
		},
		network_id: network_id,
		gas: gas
	};
};

module.exports = {
	compilers: {
		solc: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
			version: "0.5.0",
		},
	},
	networks: {
		local: {
			host: "127.0.0.1",
			port: 8545,
			network_id: 7923
		},
		kovan: testnet("kovan", 42),
		rinkeby: testnet("rinkeby", 4),
	},
};
