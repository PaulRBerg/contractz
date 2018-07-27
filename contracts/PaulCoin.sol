pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract PaulCoin is StandardToken {
    address public owner;
    string public constant name = "PaulCoin";
    string public constant symbol = "PAUL";
    uint8 public constant decimals = 18;
    uint256 public totalSupply  = 10000;

    constructor() public {
        owner = msg.sender;
        balances[owner] = totalSupply;
    }
}