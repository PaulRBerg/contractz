const path = require('path');

const dotenv = require('dotenv');
dotenv.config(path.join(__dirname, '..', '.env'));

const ganache = {
	accounts: [
		'0xB647a7FBBbCda7F477Ce315c0c2d814467521005',
		'0xe7D6a2a1cbEd37EE7446d78Fd5E6B38AAAe3f3B2'
	],
	contracts: [
		'0xA54C7bF3811FFBD125b52f7D140911F20a57Ed56',
		'0x94562Cf34c868Bd878d9045628Baa1C167FbB354'
	],
	host: 'http://localhost:7545',
	private: 'ab030672f2f3da2d187f27e71a4b3564d98af64024340ba582a44e348f922817'
};


const cli = {
	accounts: [
		'0xfd78093e09d1f62d637b1c3906d1295ce5e6bf6a',
		'0x2f2e437289cbb228e2004ac7c53027b6f22878ea'
	],
	contracts: [
		'0xb475b9ae0d4dde722e525da8dddf8c06e69c90f4'
	],
	host: 'http://localhost:8545',
	private: 'ec8f4f5c599e912dd4956e72c1b6309703f8c0712006d1bc0a5f40b837aad36d'
};

const infura = {
	accounts: [
		'0x98c0047400dA37d278E76e78c6F60A7882Ae064d',
		'0x19149798f777a3D738777334CCBf0063a04fCA3b'
	],
	contracts: [
		'0xEDC414FF0b200aE645387C1EF1654b8a2151Ec5c',
		'0x8d530B6e072FB8fBa381f371C133F968451BD0c9'
	],
	host: 'https://ropsten.infura.io/' + process.env.INFURA_API_KEY,
	private: process.env.INFURA_PRIVATE_KEY
};

module.exports = infura;