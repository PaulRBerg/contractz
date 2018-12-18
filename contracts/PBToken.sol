
pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract MyToken is Ownable, ERC20Mintable {
    string public constant name = "MyToken";
    string public constant symbol = "TKN";
    uint8 public decimals = 18;
    uint256 public totalSupply = 10000 * 10**uint(decimals);

    constructor() public {
        mint(msg.sender, totalSupply);
    }
}
