pragma solidity ^0.4.24;

contract HelloWorld {
  string message;

  constructor() public {
    message = 'Hello World';
  }

  function getMessage() public view return(string) {
    return message;
  }
}
