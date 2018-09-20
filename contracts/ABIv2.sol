pragma solidity ^0.4.20;
// Enable the ABI v2 Coder
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
    address _admin;
    mapping (address => User) _users;
    // User struct in the event
    event UserAdded(address indexed addr, User user);

    constructor() {
        _admin = msg.sender;
    }
    // User struct in the method signature
    function addUser(User user) {
        require(msg.sender == _admin);
        _users[user.addr] = user;
        UserAdded(user.addr, user);
    }
    // User struct in the returns
    function user(address addr) constant returns (User user) {
        return _users[addr];
    }
}