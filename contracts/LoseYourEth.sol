pragma solidity ^0.4.24;

contract LoseYourEth {

    uint256 public redundantInt;

    constructor() public {
        redundantInt = 73;
    }

    function() public payable {}
}