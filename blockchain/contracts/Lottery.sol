// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Lottery is VRFConsumerBase {
    address payable public owner;
    address payable[] public players;
    uint public lotteryId;
    mapping (uint => address payable) public lotteryHistory;

    bytes32 internal keyHash; 
    uint internal fee;        
    uint public randomResult;

    constructor()
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255, // VRF coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB  // LINK token address
        ) {
            keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
            fee = 0.0001 * 10 ** 18;    // 0.0001 LINK

            owner = payable(msg.sender);
            lotteryId = 1;
        }

    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK in contract");
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint randomness) internal override {
        randomResult = randomness;
    }

    function getWinnerByLottery(uint lottery) public view returns (address payable) {
        return lotteryHistory[lottery];
    }

    function getContractBalance() public view returns (uint) {
        return (address(this).balance);
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function enter() public payable {
        require(msg.value > 0.00001 ether);

        // address of player entering lottery
        players.push(payable(msg.sender));
    }

    function donations() public payable {
        require(msg.value > 0.00001 ether);
    }

    //make this function only appear once metamask login of owner (me) is detected 
    function pickWinner() public onlyowner {
        getRandomNumber();
    }

    function payWinner() public onlyowner returns (uint) {
        require(randomResult > 0, "source of randomness required before choosing winner");
        uint index = randomResult % players.length;
        
        players[index].transfer(address(this).balance / 100 * 20);
        owner.transfer(address(this).balance);

        lotteryHistory[lotteryId] = players[index];
        lotteryId++;
        
        players = new address payable[](0);
        randomResult = 0;
        return index;
    }

    receive() payable external {}

    modifier onlyowner() {
      require(msg.sender == owner, "only the owner can call this function");
      _;
    }
}
