const config = require("../config");
const contract = require("../contract")("PaulCoin", config.contracts[0]);
const web3 = require("../web3");

contract.methods.balanceOf(config.accounts[0]).call().then((result) => {
	console.log("PaulCoin balance is", web3.utils.fromWei(result, "ether"));
}).catch(err => {
	console.log(err);
});
