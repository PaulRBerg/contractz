pragma solidity ^0.5.0;

contract Ownable {
  address private owner;

  constructor() public {
    owner = msg.sender;
  }

  function getOwner() public view returns (address _owner) {
    return owner;
  }

  function setOwner(address _owner) public {
    owner = _owner;
  }
}
