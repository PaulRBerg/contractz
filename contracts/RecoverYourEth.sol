pragma solidity ^0.4.24;

contract RecoverYourEth {

    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function getBalance() view returns (uint256) {
        return address(this).balance;
    }

    function refundBalance() public onlyOwner {
        owner.transfer(address(this).balance);
    }

    function() public payable {}
}