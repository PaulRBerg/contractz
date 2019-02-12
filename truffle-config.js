const dotenv = require("dotenv");
dotenv.config();

const HDWalletProvider = require("truffle-hdwallet-provider");

const createProvider = (network) => {
  return () => {
    return new HDWalletProvider(
      process.env.MNEMONIC,
      `https://${network}.infura.io/` + process.env.INFURA_API_KEY
    );
  };
};

module.exports = {
  compilers: {
    solc: {
      version: "0.5.2",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      network_id: 1234,
      port: 8545,
    },
    kovan: {
      provider: createProvider("kovan"),
      gas: 4700000,
      network_id: 42 // eslint-disable-line camelcase
    },
    rinkeby: {
      provider: createProvider("rinkeby"),
      gas: 4700000,
      network_id: 4 // eslint-disable-line camelcase
    }
  },
};
