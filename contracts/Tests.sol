pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract TestKeywords is Ownable {

  struct House {
    bytes32 city;
  }

  uint256 public houseNonce;
  mapping(uint256 => House) public houses;

  constructor() public {
    houseNonce = 1;
  }

  function addHouse() public {
    houses[houseNonce] = House("San Francisco");
    houseNonce = houseNonce + 1;
  }

  function updateHouse() public {
    // works
    House storage storageHouse = houses[houseNonce-1];
    storageHouse.city = "New York";

    // doesn't work
    House memory memoryHouse = houses[houseNonce-1];
    memoryHouse.city = "New York";
  }
}
