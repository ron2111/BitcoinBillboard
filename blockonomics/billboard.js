const messageElem = document.getElementById("message");
const bidderElem = document.getElementById("bidder");
const bidForm = document.getElementById("bid-form");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message-input");
const amountInput = document.getElementById("amount");

let highestBid = 0;
let currentMessage = "";
let currentBidder = "";

function updateBid(message, bidder, amount) {
  highestBid = amount;
  currentMessage = message;
  currentBidder = bidder;

  messageElem.textContent = message;
  bidderElem.textContent = `Bidder: ${bidder} || Amount: ${amount} BTC`;

  amountInput.setAttribute("min", highestBid + 0.0001);
}

function submitBid(event) {
  event.preventDefault();

  const name = nameInput.value;
  const message = messageInput.value;
  const amount = parseFloat(amountInput.value);

  if (!name || !message || !amount || amount <= highestBid) {
    return; // fallback situation
  }
  updateBid(message, name, amount);
}

bidForm.addEventListener("submit", submitBid);
