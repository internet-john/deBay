pragma solidity 0.4.24;

contract Auction {
  address payable public beneficiary;
  uint public auctionEndTime;

  address public highestBidder;
  uint public highestBid;

  mapping(address => uint) pendingReturns;

  bool ended;

  event HighestBidIncreased(address bidder, uint amount);
  event AuctionEnded(address winner, uint amount);

  constructor(
    uint _biddingTime,
    address payable _beneficiary
  ) public {
    beneficiary = _beneficiary;
    auctionEndTime = now + _biddingTime;
  }

  function bid() public payable {
    require(
      now <= acutionEndTime,
      "Auction has already ended."
    );

    if (highestBid != 0) {
      pendingReturns[highestBidder] += highestBid;
    }

    highestBidder = msg.sender;
    highestBid = msg.value;

    emit HighestBidIncreased(msg.sender, msg.value);
  }

  function withdraw() public returns (bool) {
    uint amount = pendingReturns[msg.sender];

    if (amount > 0) {
      pendingReturns[msg.sender] = 0;

      if (!msg.sender.send(amount)) {
        pendingReturns[msg.sender] = amount;
      }
    }
  }

  function auctionEnd() public {
    require(now >= auctionEndTime, "Auction not yet ended.");
    require(!ended, "auctionEnd has already been callled.");

    ended = true;
    emit AuctionEnded(highestBidder, highestBid);

    beneficiary.transfer(highestBid);
  }
}
