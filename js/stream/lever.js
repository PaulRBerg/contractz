const config = require("../config");
const contract = require("../contract")("Stream", config.contracts[2]);
const web3 = require("../web3");
const Tx = require("../tx");

const main = async () => {
  try {
    const from = web3.utils.toChecksumAddress(config.accounts[0]);
    const cmd = process.argv[2] || "start";
    const value = web3.utils.toWei(process.argv[3] || "0.5");

    const tx = await Tx(
      from,
      contract.options.address,
      "0x0",
      "0x186A0", // 100,000
      "0x2CB417800", // 12 gwei
      cmd === "start"
        ? contract.methods.start(value).encodeABI()
        : contract.methods.end().encodeABI()
    );
    const receipt = await web3.eth.sendSignedTransaction("0x" + tx.toString("hex"));
    console.log(`Receipt info:  ${JSON.stringify(receipt, null, "\t")}`);
  } catch (err) {
    console.log(err);
  }
};

main();