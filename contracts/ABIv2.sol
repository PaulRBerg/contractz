pragma solidity 0.5.10;

// Enable the ABI v2 Coder
// solium-disable-next-line no-experimental
pragma experimental ABIEncoderV2;

contract UserDirectory {
    struct Contact {
        string email;
        string phone;
    }
    struct User {
        string name;
        address addr;
        Contact contact;
    }
    address admin;
    mapping(address => User) users;
    // User struct in the event
    event UserAdded(address indexed addr, User _user);

    constructor() public {
        admin = msg.sender;
    }

    // User struct in the method signature
    function addUser(User memory _user) public {
        require(msg.sender == admin);
        users[_user.addr] = _user;
        emit UserAdded(_user.addr, _user);
    }

    // User struct in the returns
    function user(address addr) public view returns (User memory _user) {
        return users[addr];
    }
}
