pragma solidity ^0.4.23;

contract StarNotary {
    string public starName;
    address public starOwner;
    
    constructor() public {
        starName = "Estrella";
    }
    
    function claimStar() public {
        starOwner = msg.sender;
    }
}
