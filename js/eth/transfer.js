const Tx = require('ethereumjs-tx');

const config = require('../config');
const web3 = require('../web3');

const main = async () => {
	try {
		const count = await web3.eth.getTransactionCount(config.accounts[0]);
		const nonce = web3.utils.toHex(count);

		const txValue = web3.utils.toHex(web3.utils.toWei(process.argv[2] || '0.035', 'ether'));
		const gasPrice = await web3.eth.getGasPrice();
		const txData = web3.utils.asciiToHex('Does this work?');

		const from = web3.utils.toChecksumAddress(config.accounts[0]);
		const to = web3.utils.toChecksumAddress(config.accounts[1]);
		const rawTx = {
			nonce: nonce,
			from: from,
			to: to,
			value: txValue,
			gasLimit: '0x30D40', // 54,000
			gasPrice: '0x2CB417800', // 12 gwei
			data: txData
		};

		const privateKey = Buffer.from(config.private, 'hex');
		const tx = new Tx(rawTx);
		tx.sign(privateKey);
		const serializedTx = tx.serialize();

		const receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
		console.log(`Receipt info:  ${JSON.stringify(receipt, null, '\t')}`);
	} catch (err) {
		console.log(err);
	}
};

main();
