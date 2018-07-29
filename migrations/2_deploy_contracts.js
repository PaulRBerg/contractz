let PaulCoin = artifacts.require("./PaulCoin.sol");
let Escrow = artifacts.require("./Escrow.sol");

module.exports = function(deployer) {
	deployer.deploy(PaulCoin);
	deployer.deploy(Escrow);
};
