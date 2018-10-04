const PaulCoin = artifacts.require("./PaulCoin.sol");

module.exports = (deployer) => {
	deployer.deploy(PaulCoin, { overwrite: false });
};
