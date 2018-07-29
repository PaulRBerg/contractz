pragma solidity ^0.4.24;

contract Stream {

    address public payer;
    address public payee;
    uint256 public start_time;
    uint256 public price_per_unit;

    event LogReceivedFunds(address sender, uint256 amount);

    modifier onlyPayer() {
        require(msg.sender == payer);
        _;
    }

    modifier onlyInvolvedParties() {
        require(msg.sender == payer || msg.sender == payee);
        _;
    }

    constructor(address _payer, address _payee, uint256 _start_time, uint256 _price_per_unit) public {
        payer = _payer;
        payee = _payee;
        start_time = _start_time;
        price_per_unit = _price_per_unit;
    }

    function approve() public onlyInvolvedParties {
        uint256 current_time = 1000;
        uint256 funds = (current_time - start_time) * price_per_unit;
        payee.transfer(funds);
    }

    function kill() public onlyPayer {
        selfdestruct(payer);
    }

    function() payable {
        emit LogReceivedFunds(msg.sender, msg.value);
    }
}