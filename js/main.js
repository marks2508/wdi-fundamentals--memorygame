var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.")
  }
};

var flipCard = function(cardId) {
    
  checkForMatch();
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
};
flipCard(0);
flipCard(2);
