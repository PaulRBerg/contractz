let PaulCoin = artifacts.require("./PaulCoin.sol");
let LoseYourEth = artifacts.require("./LoseYourEth.sol");
let Escrow = artifacts.require("./Escrow.sol");

module.exports = function(deployer) {
	deployer.deploy(PaulCoin);
	deployer.deploy(LoseYourEth);
	deployer.deploy(Escrow);
};
