const config = require("../config");
const web3 = require("../web3");

web3.eth.getBalance(process.argv[2] || config.accounts[0])
	.then((data) => {
		console.log("Eth balance is", web3.utils.fromWei(data, "ether"));
	})
	.catch(console.log);