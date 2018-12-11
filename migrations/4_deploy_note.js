const Note = artifacts.require("./Note.sol");

module.exports = (deployer) => {
	deployer.deploy(Note);
};
