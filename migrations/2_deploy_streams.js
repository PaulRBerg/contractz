const config = require("../js/config");
const Stream = artifacts.require("./Stream.sol");
const StreamV2 = artifacts.require("./StreamV2.sol");

module.exports = (deployer) => {
	deployer.deploy(Stream, config.accounts[1]);
	deployer.deploy(StreamV2, config.accounts[1]);
};
