/* global assert, artifacts, contract, web3 */
const {toWei} = require("web3-utils");

const TestnetDAI = artifacts.require("TestnetDAI");

contract("TestnetDAI", (accounts) => {
  const owner = accounts[0];
  let token = {};

  beforeEach(async () => {
    token = await TestnetDAI.new({from: owner});
    await token.mint(accounts[0], toWei("1000"));
  });

  it("allows token transfers", async () => {
    const recipient = accounts[1];
    await token.transfer(recipient, toWei("10"), {from: owner});

    const ownerBalance = await token.balanceOf(owner);
    assert.equal(ownerBalance, toWei("990"));

    const recipientBalance = await token.balanceOf(recipient);
    assert.equal(recipientBalance, toWei("10"));
  });
});
