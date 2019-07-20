pragma solidity 0.5.10;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract MyToken is Ownable, ERC20Mintable {
    string public constant name = "MyToken";
    string public constant symbol = "TKN";
    uint8 public decimals = 18;

    constructor() public {
        uint256 supply = 10000 * 10 ** uint256(decimals);
        mint(msg.sender, supply);
    }
}
