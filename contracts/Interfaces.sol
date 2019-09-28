pragma solidity 0.5.11;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract FancyInterfaces {
    event LogWealthOf(address owner, uint256 wealth);
    event LogIsContractResult(address addr, bool result);

    address private constant daiAddress = 0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359;

    /// @dev it will revert, should use ERC165: ̰
    /// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md
    function balanceOf(address _tokenAddress) public {
        IERC20 dai = IERC20(_tokenAddress);
        uint256 balance = dai.balanceOf(msg.sender);
        emit LogWealthOf(msg.sender, balance);
    }

    function isContract(address _addr) public returns (bool) {
        uint32 size;
        assembly {
            size := extcodesize(_addr)
        }
        bool value = false;
        if (size > 0) value = true;
        emit LogIsContractResult(_addr, value);
        return value;
    }
}
