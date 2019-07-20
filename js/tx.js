const Tx = require("ethereumjs-tx");
const config = require("./config");
const web3 = require("./web3");

module.exports = async (
  from,
  to,
  value = "0x0",
  gasLimit = "0x30D40",
  gasPrice = "0x2CB417800",
  data,
  chainId = "0x03",
) => {
  const count = await web3.eth.getTransactionCount(from);
  const nonce = web3.utils.toHex(count);

  const rawTx = {
    nonce: nonce,
    from: from,
    to: to, // remember that the `to` param is the contract when you append data
    value: value,
    gasLimit: gasLimit, // 0x30D40 is 54,000
    gasPrice: gasPrice, // 0x2CB417800 is 12 gwei
    data: data,
    chainId: chainId,
  };

  const privateKey = Buffer.from(config.private, "hex");
  const tx = new Tx(rawTx);
  tx.sign(privateKey);
  return tx.serialize();
};
