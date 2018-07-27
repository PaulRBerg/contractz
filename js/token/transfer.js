const Tx = require('ethereumjs-tx');

const config = require('../config');
const contract = require('../contract');
const web3 = require('../web3');

const main = async () => {
	try {
		const count = await web3.eth.getTransactionCount(config.accounts[0]);
		const nonce = web3.utils.toHex(count);
		const txValue = web3.utils.toHex(parseInt(process.argv[2], 10) || 10);

		const from = web3.utils.toChecksumAddress(config.accounts[0]);

		const to = web3.utils.toChecksumAddress(config.accounts[1]);
		const rawTx = {
			nonce: nonce,
			from: from,
			to: to,
			value: '0x0',
			gasLimit: '0x30D40', // 54,000
			gasPrice: '0x2CB417800', // 12 gwei
			data: contract.methods.transfer(to, txValue).encodeABI(),
			chainId: '0x03'
		};

		const privateKey = Buffer.from(config.private, 'hex');
		const tx = new Tx(rawTx);
		tx.sign(privateKey);
		const serializedTx = tx.serialize();

		const receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
		console.log(`Receipt info:  ${JSON.stringify(receipt, null, '\t')}`);

		console.log(`From\'s balance after transfer: ${await contract.methods.balanceOf(from).call()}`);
		console.log(`To\'s balance after transfer: ${await contract.methods.balanceOf(to).call()}`);
	} catch (err) {
		console.log(err);
	}
};

main();