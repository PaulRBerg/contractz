const EIP191 = artifacts.require("./EIP191.sol");

module.exports = (deployer) => {
	deployer.deploy(EIP191, { overwrite: false });
};
