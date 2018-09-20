const PaulCoin = artifacts.require("./PaulCoin.sol");
const Escrow = artifacts.require("./Escrow.sol");

module.exports = (deployer) => {
	deployer.deploy(PaulCoin, { overwrite: false });
	deployer.deploy(Escrow, { overwrite: false });
};
