/* solhint-disable var-name-mixedcase */
pragma solidity ^0.5.0;


contract EIPAssembly {

  // EIP191 header for EIP712 prefix
  string constant internal EIP191_HEADER = "\x19\x01";

  // EIP712 Domain Name value
  string constant internal EIP712_DOMAIN_NAME = "AZTEC";

  // EIP712 Domain Version value
  string constant internal EIP712_DOMAIN_VERSION = "1";

  // Hash of the EIP712 Domain Separator Schema
  bytes32 constant internal EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH = keccak256(abi.encodePacked(
      "EIP712Domain(",
          "string name,",
          "string version,",
          "address verifyingContract",
      ")"
  ));

  // Hash of the EIP712 Domain Separator data
  bytes32 private EIP712_DOMAIN_HASH;

  constructor() public {
    assembly {
      let memPtr := mload(0x40)
      // schema = "EIP712Domain(string name,string version,address verifyingContract)"
      mstore(memPtr, 0x91ab3d17e3a50a9d89e63fd30b92be7f5336b03b287bb946787a83a9d62a2766)
      // name = "AZTEC"
      mstore(add(memPtr, 0x20), 0x188c73fa916c87ff1583c0b499406b3bcd60bdf447ea9dad6c87049c58f8c901)
      // version = "1"
      mstore(add(memPtr, 0x40), 0xc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6)
      // address
      mstore(add(memPtr, 0x60), address)
      // domain hash
      sstore(EIP712_DOMAIN_HASH_slot, keccak256(memPtr, 0x80))
    }
  }
  
  function getDomainHash() public view returns (bytes32) {
    return EIP712_DOMAIN_HASH;
  }
}