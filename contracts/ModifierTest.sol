pragma solidity ^0.4.24;

contract ModifierTest {

    address public owner;

    struct myStruct {
        uint256 fancyVar;
    }

    constructor() public {
        owner = msg.sender;
    }

//    modifier myFancyModifier {
//        uint16 a = 314;
//        myStruct memory b;
//        b.fancyVar = 159;
//        _;
//    }
//
//    function myFunction() external myFancyModifier {
//        uint16 c = a * 2;
//        uint16 d = b.fancyVar * 3;
//    }
}