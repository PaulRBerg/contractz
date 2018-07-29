/* eslint-disable no-undef */
const config = require("../js/config");
const Stream = artifacts.require("./Stream.sol");

module.exports = (deployer) => {
	deployer.deploy(Stream, config.accounts[1], config.accounts[2]);
};
