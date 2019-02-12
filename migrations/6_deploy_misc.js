const ModifierTest = artifacts.require("./ModifierTest.sol");

module.exports = (deployer) => {
  deployer.deploy(ModifierTest);
};
