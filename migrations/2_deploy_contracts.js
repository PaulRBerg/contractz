/* eslint-disable no-undef */
const PaulCoin = artifacts.require("./PaulCoin.sol");
const Escrow = artifacts.require("./Escrow.sol");

module.exports = (deployer) => {
	deployer.deploy(PaulCoin);
	deployer.deploy(Escrow);
};
