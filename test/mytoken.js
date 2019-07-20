/* global assert, artifacts, contracts, describe, it */
const MyToken = artifacts.require("MyToken");

contract("MyToken", (accounts) => {
  const owner = accounts[0];
  let token = {};

  beforeEach(async () => {
    token = await MyToken.new({from: owner});
  });

  it("has an owner and a total supply", async () => {
    const tokenOwner = await token.contract.methods.owner().call();
    const totalSupply = await token.contract.methods.totalSupply().call();

    assert.equal(owner, tokenOwner);
    assert.equal(totalSupply, web3.utils.toWei("10000"));
  });

  it("allows token transfers", async function() {
    const owner = accounts[0];
    const recipient = accounts[1];
    await token.transfer(recipient, web3.utils.toWei("100"), {from: owner});

    const ownerBalance = await token.contract.methods.balanceOf(owner).call();
    assert.equal(ownerBalance, web3.utils.toWei("9900"));

    const recipientBalance = await token.contract.methods.balanceOf(recipient).call();
    assert.equal(recipientBalance, web3.utils.toWei("100"));
  });
});
