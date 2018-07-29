const config = require('../config');
const contract = require('../contract')('Escrow', config.contracts[1]);
const web3 = require('../web3');
const Tx = require('../tx');

const main = async () => {
	try {
		const from = web3.utils.toChecksumAddress(config.accounts[0]);
		const tx = await Tx(
			from,
			contract.options.address,
			'0x0',
			'0xD6D8', // 55,000
			'0x2CB417800', // 12 gwei
			contract.methods.refundBalance().encodeABI()
		);
		const receipt = await web3.eth.sendSignedTransaction('0x' + tx.toString('hex'));
		console.log(`Receipt info:  ${JSON.stringify(receipt, null, '\t')}`);
	} catch (err) {
		console.log(err);
	}
};

main();