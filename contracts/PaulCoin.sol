pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract PaulCoin is StandardToken {
    address public owner;
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    constructor() public {
        name = "PaulCoin";
        symbol = "PAUL";
        decimals = 18;
        totalSupply = 10000 * 10**uint(decimals);

        owner = msg.sender;
        balances[owner] = totalSupply;
        emit Transfer(address(0x0), owner, totalSupply);
    }
}