pragma solidity ^0.4.24;

contract Stream {

    address public payer;
    address public payee;

    bool public active = false;

    uint256 public startBlock;
//    uint256 public endBlock;
    uint256 public pricePerUnit;

    event StreamStarted(address payer, address payee, uint256 pricePerUnit);
    event StreamEnd(address payer, address payee, uint256 funds);

    constructor(address _payee) public {
        payer = msg.sender;
        payee = _payee;
    }

    // Modifiers
    modifier onlyPayer() {
        require(msg.sender == payer);
        _;
    }

    modifier onlyInvolvedParties() {
        require(msg.sender == payer || msg.sender == payee);
        _;
    }

    modifier isStarted() {
        require(active == true);
        _;
    }

    modifier isNotStarted() {
        require(active == false);
        _;
    }

    // View
    function getCurrentBilling() public view returns (uint256) {
        uint256 endBlock = block.number;
        return (endBlock - startBlock) * pricePerUnit;
    }

    // State
    function start(uint256 _pricePerUnit) public isNotStarted onlyPayer {
        pricePerUnit = _pricePerUnit;
        startBlock = block.number;
        active = true;
        emit StreamStarted(payer, payee, pricePerUnit);
    }

    function end() public isStarted {
        uint256 endBlock = block.number;
        uint256 funds = (endBlock - startBlock) * pricePerUnit;
        payee.transfer(funds);
        active = false;
        emit StreamStarted(payer, payee, funds);
    }

    // Destroy
    function kill() public onlyPayer {
        selfdestruct(payer);
    }
}