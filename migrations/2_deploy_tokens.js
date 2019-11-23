const TestnetDAI = artifacts.require("./TestnetDAI.sol");

module.exports = (deployer) => {
  deployer.deploy(TestnetDAI);
};
