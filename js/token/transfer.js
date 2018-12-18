const config = require("../config");
const contract = require("../contract")("PBToken", config.contracts[0]);
const web3 = require("../web3");
const Tx = require("../tx");

const main = async () => {
	try {
		const from = web3.utils.toChecksumAddress(config.accounts[0]);
		const to = web3.utils.toChecksumAddress(config.accounts[1]);
		const value = web3.utils.toWei(process.argv[2] || "10", "ether");

		const tx = await Tx(
			from,
			contract.options.address,
			"0x0",
			"0xD6D8", // 55,000
			"0x2CB417800", // 12 gwei
			contract.methods.transfer(to, value).encodeABI()
		);
		const receipt = await web3.eth.sendSignedTransaction("0x" + tx.toString("hex"));
		console.log(`Receipt info:  ${JSON.stringify(receipt, null, "\t")}`);
		console.log(`From's balance after transfer: ${web3.utils.fromWei(await contract.methods.balanceOf(from).call(), "ether")}`);
		console.log(`To's balance after transfer: ${web3.utils.fromWei(await contract.methods.balanceOf(to).call(), "ether")}`);
	} catch (err) {
		console.log(err);
	}
};

main();
