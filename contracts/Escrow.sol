pragma solidity 0.5.10;

contract Ownable {
    address payable public owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}

contract Destructible is Ownable {
    constructor() public payable {}

    function destroy() public {
        selfdestruct(owner);
    }

    function destroyAndSend(address payable _recipient) public {
        selfdestruct(_recipient);
    }
}

contract Escrow is Destructible {
    event LogReceivedFunds(address sender, uint256 amount);
    event LogReturnedFunds(address recipient, uint256 amount);

    constructor() public {}

    function() external payable {
        emit LogReceivedFunds(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function refundBalance() public onlyOwner {
        uint256 balance = address(this).balance;
        emit LogReturnedFunds(msg.sender, balance);
        msg.sender.transfer(balance);
    }

    function refundNada() public {
        msg.sender.transfer(0);
    }

    function refundNadaRedundant() public {
        if (false) {
            msg.sender.transfer(0);
        }
    }
}
