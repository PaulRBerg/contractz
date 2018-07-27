let PaulCoin = artifacts.require("./PaulCoin.sol");
let LoseYourEth = artifacts.require("./LoseYourEth.sol");
let RecoverYourEth = artifacts.require("./RecoverYourEth.sol");

module.exports = function(deployer) {
	deployer.deploy(PaulCoin);
	deployer.deploy(LoseYourEth);
	deployer.deploy(RecoverYourEth);
};
