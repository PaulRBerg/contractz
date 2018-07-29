const path = require("path");
const ABI = require(path.join(__dirname, "..", "build", "contracts", "PaulCoin.json")).abi;

const InputDataDecoder = require("ethereum-input-data-decoder");
const decoder = new InputDataDecoder(ABI);

const data = "0xa9059cbb00000000000000000000000019149798f777a3d738777334ccbf0063a04fca3b000000000000000000000000000000000000000000000000000000000000000a";
const result = decoder.decodeData(data);

console.log(result);