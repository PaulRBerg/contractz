const PaulCoin = artifacts.require('PaulCoin');

contract('PaulCoin', accounts => {
	const owner = accounts[0];
	let token = {}

	beforeEach(async () => {
		token = await PaulCoin.new( { from: owner });
	});

	it('has an owner and a total supply', async () => {
		const tokenOwner = await token.owner();
		const totalSupply = await token.totalSupply();

		assert.equal(owner, tokenOwner);
		assert.equal(totalSupply.toNumber(), 10000);
	});

	it('allows token transfers', async function () {
		const owner = accounts[0];
		const recipient = accounts[1];
		await token.transfer(recipient, 10, { from: owner });

		const ownerBalance = await token.balanceOf(owner);
		assert.equal(ownerBalance.toNumber(), 9990);

		const recipientBalance = await token.balanceOf(recipient);
		assert.equal(recipientBalance.toNumber(), 10);
	})
});