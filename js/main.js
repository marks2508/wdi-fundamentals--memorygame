var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  }
];

var cardsInPlay = [];

var checkForMatch = function () {
  document.this[i].setAttribute('src', cards[cardId].cardImage)
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.")
  }
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  checkForMatch();
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

var createBoard = function() {
  for (var i = 0; i <= cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    var board = document.getElementById("game-board");
		board.appendChild(cardElement);
  }
};

createBoard();
