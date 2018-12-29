pragma solidity ^0.5.0;

contract LoseYourEth {

  uint256 public redundantInt;

  constructor() public {
    redundantInt = 73;
  }

  function() external payable {}
}
