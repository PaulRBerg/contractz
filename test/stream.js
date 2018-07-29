const Stream = artifacts.require("Stream");

contract("Stream", accounts => {
	const payer = accounts[1], payee = accounts[2];
	let stream = {};

	beforeEach(async () => {
		stream = await Stream.new(payee);
	});

	it("has a payer and a payee", async () => {
		const _payer = await stream.payer();
		const _payee = await stream.payee();

		assert.equal(payer, _payer);
		assert.equal(payee, _payee);
	});

	// it("allows token transfers", async function () {
	// 	const owner = accounts[0];
	// 	const recipient = accounts[1];
	// 	await token.transfer(recipient, 10, { from: owner });
	//
	// 	const ownerBalance = await token.balanceOf(owner);
	// 	assert.equal(ownerBalance.toNumber(), 9990);
	//
	// 	const recipientBalance = await token.balanceOf(recipient);
	// 	assert.equal(recipientBalance.toNumber(), 10);
	// });
});