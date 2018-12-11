const Escrow = artifacts.require("./Escrow.sol");

module.exports = (deployer) => {
	deployer.deploy(Escrow);
};
