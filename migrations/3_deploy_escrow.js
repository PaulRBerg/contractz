const Escrow = artifacts.require("./PaulCoin.sol");

module.exports = (deployer) => {
	deployer.deploy(Escrow, { overwrite: false });
};
