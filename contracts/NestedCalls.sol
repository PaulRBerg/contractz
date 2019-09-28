pragma solidity 0.5.11;

contract A {
    event LogMsgSender(address who);

    function callMe() public {
        emit LogMsgSender(msg.sender);
    }
}

contract B {
    function callMe(address a) public {
        A(a).callMe();
    }
}

contract C {
    function callMe(address a, address b) public {
        B(b).callMe(a);
    }
}

contract D {
    function callMe(address a, address b, address c) public {
        C(c).callMe(a, b);
    }
}
