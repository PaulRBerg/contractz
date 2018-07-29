pragma solidity ^0.4.24;

contract Modular {

    bool public active = false;

    modifier onlyPayer() {
        require(msg.sender == payer);
        _;
    }

    modifier onlyInvolvedParties() {
        require(msg.sender == payer || msg.sender == payee);
        _;
    }

    modifier isNotStarted() {
        require(active == false);
        _;
    }

    modifier isNotEnded() {
        require(active == true);
        _;
    }

    function kill() public onlyPayer {
        selfdestruct(payer);
    }
}

contract Stream is Modular {

    address public payer;
    address public payee;

    uint256 public startTime;
    uint256 public pricePerUnit;

    event StreamStarted(address payer, address payee, uint256 pricePerUnit);
    event StreamEnd(address payer, address payee, uint256 funds);

    constructor(address _payer, address _payee) public {
        payer = _payer;
        payee = _payee;
    }

    // View
    function getCurrentBilling() public view returns (uint256) {
        uint256 endTime = 372001; // current block
        return (endTime - startTime) * pricePerUnit;
    }

    // State
    function start(uint256 pricePerUnit) public isNotStarted {
        startTime = 372000; // current block
        active = true;
        emit StreamStarted(payer, payee, startTime, pricePerUnit);
    }

    function end() public isNotEnded onlyPayer {
        uint256 endTime = 372001; // current block
        uint256 funds = (endTime - startTime) * pricePerUnit;
        payee.transfer(funds);
        active = false;
        emit StreamStarted(payer, payee, funds);
    }
}