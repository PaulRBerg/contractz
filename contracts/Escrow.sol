pragma solidity ^0.4.24;

contract Escrow {

    address public owner;

    event LogReceivedFunds(address sender, uint amount);
    event LogReturnedFunds(address recipient, uint amount);

    constructor() public {
        owner = msg.sender;
    }

    function() public payable {
        emit LogReceivedFunds(msg.sender, msg.value);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function refundBalance() public onlyOwner {
        uint256 balance = address(this).balance;
        msg.sender.transfer(balance);
        emit LogReturnedFunds(msg.sender, balance);
    }

    function kill() public onlyOwner {
        selfdestruct(owner);
    }
}