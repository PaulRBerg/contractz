pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract Batch is Ownable {
  using SafeMath for uint256;

  address public constant daiContractAddress = 
  0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359;
  uint256 public constant daiGift = 1000000000000000000;
  uint256 public constant ethGift = 5500000000000000;
  uint256 public constant size = 80;

  function distributeEth(address payable[] memory _recipients)
  public
  payable
  onlyOwner
  {
    require(_recipients.length == size, "recipients array has incorrect size");
    require(msg.value == ethGift * size, "msg.value is not exact");

    for (uint i = 0; i < _recipients.length; i++) {
      _recipients[i].transfer(ethGift);
    }
  }

  function distributeDai(address payable[] memory _recipients)
  public
  onlyOwner
  {
    require(_recipients.length == size, "recipients array has incorrect size");

    uint256 distribution = daiGift.mul(size);
    IERC20 daiContract = IERC20(daiContractAddress);
    uint256 allowance = daiContract.allowance(msg.sender, address(this));
    require(
      allowance >= distribution,
      "contract not allowed to transfer enough tokens"
    );

    for (uint i = 0; i < _recipients.length; i++) {
      daiContract.transferFrom(msg.sender, _recipients[i], daiGift);
    }
  }
}
