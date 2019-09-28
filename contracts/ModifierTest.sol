pragma solidity 0.5.11;

contract ModifierTest {
    address public owner;

    struct MyStruct {
        uint256 fancyVar;
    }

    constructor() public {
        owner = msg.sender;
    }

    //    modifier myFancyModifier {
    //        uint16 a = 314;
    //        MyStruct memory b;
    //        b.fancyVar = 159;
    //        _;
    //    }
    //
    //    function myFunction() external myFancyModifier {
    //        uint16 c = a * 2;
    //        uint16 d = b.fancyVar * 3;
    //    }

}
