const FakeTx = require('ethereumjs-tx/fake');
const utils = require('ethereumjs-util');

const config = require('./config');
const web3 = require('./web3');

const rawTx = '0xf8498080808080801ba0daffae39a055a126b4cbae78001231e8d24aaf5ce7f470afc3fdb994eadc7a84a07ae2ee4a1b87705f796ce1e989601a00dace044a9244937e5f514540a258a117';

const data = Buffer.from(utils.stripHexPrefix(rawTx), 'hex');

const fakeTx = new FakeTx(data);
const txParams = {
	from:     fakeTx.from.toString('hex'),
	to:       fakeTx.to.toString('hex'),
	gas:      fakeTx.gasLimit.toString('hex'),
	gasPrice: fakeTx.gasPrice.toString('hex'),
	value:    fakeTx.value.toString('hex'),
	data:     fakeTx.data.toString('hex'),
	nonce:    fakeTx.nonce.toString('hex'),
};

console.log('nonce', fakeTx.nonce.toString('utf8'));

if (fakeTx.v && fakeTx.v.length > 0 &&
	fakeTx.r && fakeTx.r.length > 0 &&
	fakeTx.s && fakeTx.s.length > 0) {
	txParams.v = fakeTx.v.toString('hex');
	txParams.r = fakeTx.r.toString('hex');
	txParams.s = fakeTx.s.toString('hex');
}

const privateKey = Buffer.from(config.private, 'hex');
fakeTx.sign(privateKey);
const serializedTx = fakeTx.serialize();

console.log('serializedTx', serializedTx.toString('hex'));
web3.eth
	.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, data) => {
		if (err) {
			console.log('err', err);
		} else {
			console.log('data', data);
		}
	})
	.on('receipt', console.log);
