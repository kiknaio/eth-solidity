pragma solidity ^0.4.23;

contract StarNotary {
    
    string public starName;
    address public starOwner;
    
    event startClaimed(address owner);
    
    constructor() public {
        starName = "Estrella";
    }
    
    function claimStar() public {
        starOwner = msg.sender;
        emit startClaimed(msg.sender);
    }
}
