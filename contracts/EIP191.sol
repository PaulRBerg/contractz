pragma solidity 0.5.10;

contract EIP191 {
    address public owner;

    event LogEncodePacked(bytes encoding);
    event LogHash(bytes32 hash);
    event SenderRecovered(address sender);

    constructor() public {
        owner = msg.sender;
    }

    function submitMessage(bytes memory message, uint8 v, bytes32 r, bytes32 s) public {
        bytes memory encoding = abi.encodePacked(bytes1(0x19), bytes1(0), address(this), message);
        emit LogEncodePacked(encoding);
        bytes32 hash = keccak256(encoding);
        emit LogHash(hash);
        address sender = ecrecover(hash, v, r, s);
        emit SenderRecovered(sender);
    }

    function submitTransactionPreSigned(
        address destination,
        uint256 value,
        bytes memory data,
        uint256 nonce,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public returns (bytes32 transactionHash) {
        // Arguments when calculating hash to validate
        // 1: byte(0x19) - the initial 0x19 byte
        // 2: byte(0) - the version byte
        // 3: this - the validator address
        // 4-7 : Application specific data
        transactionHash = keccak256(abi.encodePacked(bytes1(0x19), bytes1(0), this, destination, value, data, nonce));
        address sender = ecrecover(transactionHash, v, r, s);
        emit SenderRecovered(sender);
        return transactionHash;
    }
}
