pragma solidity ^0.4.24;

import "./lib/Ownable.sol";

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

// pragma solidity ^0.4.24;

// import "./lib/Ownable.sol";

// contract TestArraysInStruct is Ownable {
    
//     struct Brick {
//         uint256 width;
//         uint256 length;
//         uint256 height;
//     }
    
//     struct House {
//         Brick[] bricks;
//         bytes32 city;
//     }
    
//     uint256 public houseNonce;
//     mapping(uint256 => House) public houses;
    
//     constructor() public {
//         houseNonce = 1;
//     }
    
//     function addHouse() public {
//         Brick[] memory bricks = new Brick[](10);
//         houses[houseNonce] = House(bricks, "San Francisco");
//         houses[houseNonce].bricks.push(Brick(10,20,15));
//         houseNonce = houseNonce + 1;
//     }
// }
