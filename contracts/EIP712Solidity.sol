/* solhint-disable var-name-mixedcase */
pragma solidity ^0.5.0;

contract EIPSolidity {

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
    EIP712_DOMAIN_HASH = keccak256(
      abi.encodePacked(
        EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH,
        keccak256(bytes(EIP712_DOMAIN_NAME)),
        keccak256(bytes(EIP712_DOMAIN_VERSION)),
        bytes32(uint256((address(this) << 96)
    ));
  }
  
  function getDomainHash() public view returns (bytes32) {
    return EIP712_DOMAIN_HASH;
  }
}