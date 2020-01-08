pragma solidity ^0.5.12;

contract Chat
{
	event Message(
    address indexed sender,
    bytes data
  );

	function sendMessage(bytes memory message) public
	{
		emit Message(msg.sender, message);
	}
}
