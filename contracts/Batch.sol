pragma solidity 0.5.11;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Batch is Ownable {
    using SafeMath for uint256;

    address public constant daiContractAddress = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    uint256 public constant daiGift = 1000000000000000000;
    uint256 public constant ethGift = 5500000000000000;
    uint256 public constant size = 80;

    function distributeEth(address payable[] memory _recipients) public payable onlyOwner {
        require(_recipients.length == size, "recipients array has incorrect size");
        require(msg.value == ethGift * size, "msg.value is not exact");

        for (uint256 i = 0; i < _recipients.length; i++) {
            _recipients[i].transfer(ethGift);
        }
    }

    function distributeDai(address payable[] memory _recipients) public onlyOwner {
        require(_recipients.length == size, "recipients array has incorrect size");

        uint256 distribution = daiGift.mul(size);
        IERC20 daiContract = IERC20(daiContractAddress);
        uint256 allowance = daiContract.allowance(msg.sender, address(this));
        require(allowance >= distribution, "contract not allowed to transfer enough tokens");

        for (uint256 i = 0; i < _recipients.length; i++) {
            daiContract.transferFrom(msg.sender, _recipients[i], daiGift);
        }
    }
}
