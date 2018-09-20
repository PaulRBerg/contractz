pragma solidity ^0.4.24;

contract Note {

    address public owner;
    uint256 public value;

    constructor() public {
        owner = msg.sender;
    }

    function addValue(uint256 _value) public {
        value = _value;
    }

    function addNote(uint _value, address _owner) public {
        value = _value;
        owner = _owner;
    }
}