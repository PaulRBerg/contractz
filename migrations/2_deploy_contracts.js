let PaulCoin = artifacts.require("./PaulCoin.sol");

module.exports = function(deployer) {
	deployer.deploy(PaulCoin);
};
