require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const {ethers} = require("ethers");

/**
 * @dev You must create a `.env` file by following `.env.example`.
 * @param {string} network The name of the testnet
 */
function createProvider(network) {
  if (process.env.CI) {
    return {};
  }
  if (!process.env.MNEMONIC) {
    console.log("Please set your MNEMONIC in a .env file");
    process.exit(1);
  }
  if (!process.env.INFURA_API_KEY) {
    console.log("Please set your INFURA_API_KEY");
    process.exit(1);
  }
  return () => {
    return new HDWalletProvider(process.env.MNEMONIC, `https://${network}.infura.io/v3/` + process.env.INFURA_API_KEY);
  };
}

module.exports = {
  compilers: {
    solc: {
      version: "0.5.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  mocha: {
    bail: true,
    enableTimeouts: false,
  },
  networks: {
    development: {
      host: "127.0.0.1",
      gas: 6e6,
      gasPrice: ethers.utils.parseUnits("1", "gwei").toString(),
      network_id: "*",
      port: "8545",
      skipDryRun: true,
    },
    goerli: {
      provider: createProvider("goerli"),
      gas: 6e6,
      gasPrice: ethers.utils.parseUnits("10", "gwei").toString(),
      network_id: 42,
      skipDryRun: true,
    },
    kovan: {
      provider: createProvider("kovan"),
      gas: 6e6,
      gasPrice: ethers.utils.parseUnits("10", "gwei").toString(),
      network_id: 42,
      skipDryRun: true,
    },
    rinkeby: {
      provider: createProvider("rinkeby"),
      gas: 6e6,
      gasPrice: ethers.utils.parseUnits("10", "gwei").toString(),
      network_id: 4,
      skipDryRun: true,
    },
    ropsten: {
      provider: createProvider("ropsten"),
      gas: 6e6,
      gasPrice: ethers.utils.parseUnits("10", "gwei").toString(),
      network_id: 3,
      skipDryRun: true,
    },
  },
};
