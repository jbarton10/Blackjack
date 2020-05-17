//Defining image src for cards
//Defining Diamonds
var dAce = "images/AceDiamond.jpg";
var dTwo = "images/TwoDiamond.jpg";
var dThree = "images/ThreeDiamond.jpg";
var dFour = "images/FourDiamond.jpg";
var dFive = "images/FiveDiamond.jpg";
var dSix = "images/SixDiamond.jpg";
var dSeven = "images/SevenDiamond.jpg";
var dEight = "images/EightDiamond.jpg";
var dNine = "images/NineDiamond.jpg";
var dTen = "images/TenDiamond.jpg";
var dJack = "images/JackDiamond.jpg";
var dQueen = "images/QueenDiamond.jpg";
var dKing = "images/KingDiamond.jpg";
//Defining Clubs
var cAce = "images/AceClub.jpg";
var cTwo = "images/TwoClub.jpg";
var cThree = "images/ThreeClub.jpg";
var cFour = "images/FourClub.jpg";
var cFive = "images/FiveClub.jpg";
var cSix = "images/SixClub.jpg";
var cSeven = "images/SevenClub.jpg";
var cEight = "images/EightClub.jpg";
var cNine = "images/NineClub.jpg";
var cTen = "images/TenClub.jpg";
var cJack = "images/JackClub.jpg";
var cQueen = "images/QueenClub.jpg";
var cKing = "images/KingClub.jpg";
//Defing hearts
var hAce = "images/AceHeart.png";
var hTwo = "images/TwoHeart.png";
var hThree = "images/ThreeHeart.png";
var hFour = "images/FourHeart.png";
var hFive = "images/FiveHeart.png";
var hSix = "images/SixHeart.png";
var hSeven = "images/SevenHeart.png";
var hEight = "images/EightHeart.png";
var hNine = "images/NineHeart.png";
var hTen = "images/TenHeart.png";
var hJack = "images/JackHeart.png";
var hQueen = "images/QueenHeart.png";
var hKing = "images/KingHeart.png";
//Defining Spades
var sAce = "images/AceSpade.png";
var sTwo = "images/TwoSpade.png";
var sThree = "images/ThreeSpade.png";
var sFour = "images/FourSpade.png";
var sFive = "images/FiveSpade.png";
var sSix = "images/SixSpade.png";
var sSeven = "images/SevenSpade.png";
var sEight = "images/EightSpade.png";
var sNine = "images/NineSpade.png";
var sTen = "images/TenSpade.png";
var sJack = "images/JackSpade.png";
var sQueen = "images/QueenSpade.png";
var sKing = "images/KingSpade.png";

//Master copy of deck for starting new games
const masterDeck = [
  ["AceSpade", 1, sAce],
  ["TwoSpade", 2, sTwo],
  ["ThreeSpade", 3, sThree],
  ["FourSpade", 4, sFour],
  ["FiveSpade", 5, sFive],
  ["SixSpade", 6, sSix],
  ["SevenSpade", 7, sSeven],
  ["EightSpade", 8, sEight],
  ["NineSpade", 9, sNine],
  ["TenSpade", 10, sTen],
  ["JackSpade", 10, sJack],
  ["QueenSpade", 10, sQueen],
  ["KingSpade", 10, sKing],
  ["AceClub", 1, cAce],
  ["TwoClub", 2, cTwo],
  ["ThreeClub", 3, cThree],
  ["FourClub", 4, cFour],
  ["FiveClub", 5, cFive],
  ["SixClub", 6, cSix],
  ["SevenClub", 7, sSeven],
  ["EightClub", 8, cEight],
  ["NineClub", 9, cNine],
  ["TenClub", 10, cTen],
  ["JackClub", 10, cJack],
  ["QueenClub", 10, cQueen],
  ["KingClub", 10, cKing],
  ["AceHeart", 1, hAce],
  ["TwoHeart", 2, hTwo],
  ["ThreeHeart", 3, hThree],
  ["FourHeart", 4, hFour],
  ["FiveHeart", 5, hFive],
  ["SixHeart", 6, hSix],
  ["SevenHeart", 7, hSeven],
  ["EightHeart", 8, hEight],
  ["NineHeart", 9, hNine],
  ["TenHeart", 10, hTen],
  ["JackHeart", 10, hJack],
  ["QueenHeart", 10, hQueen],
  ["KingHeart", 10, hKing],
  ["AceDiamond", 1, dAce],
  ["TwoDiamond", 2, dTwo],
  ["ThreeDiamond", 3, dThree],
  ["FourDiamond", 4, dFour],
  ["FiveDiamond", 5, dFive],
  ["SixDiamond", 6, dSix],
  ["SevenDiamond", 7, dSeven],
  ["EightDiamond", 8, dEight],
  ["NineDiamond", 9, dNine],
  ["TenDiamond", 10, dTen],
  ["JackDiamond", 10, dJack],
  ["QueenDiamond", 10, dQueen],
  ["KingDiamond", 10, dKing],
];
//Images for cards

//Need to seperate images for this array
const cardImages = [];

const max = 21;
var playerTotal = 0;
var dealerTotal = 0;
//Must be changed once thorugh reset function
var deck = [...masterDeck];

//On click functions
$(document).ready(function () {
  //Button starts the game
  $("#startGame").on("click", function () {
    console.log("Game Started");

    //Making the game board
    createBoard(deck);
  });
  //Funciton for getting cards off the hit button
  $(document).on("click", "#hit", function () {
    console.log("hit");
    drawCard(deck, "player");
  });
  $(document).on("click", "#restart", function () {
    console.log("restart clicked");
    resetGame();
  });
  $(document).on("click", "#stand", function () {
    console.log("stand clicked");
    stand();
  });
});

//Function for creating the board
createBoard = (deck) => {
  $("#screen").empty();
  //Where players cards will be shown
  let playerCards = $("<div>Player Div</div>");
  playerCards.attr("id", "playerCards");
  let dealerCards = $("<div>Dealer Div</div>");
  dealerCards.attr("id", "dealerCards");
  //Make a control panel
  let controls = $("<div></div>");
  controls.attr("id", "controlContainer");
  //Make buttons for playing game
  let hit = $("<button>Hit</button>");
  hit.attr("id", "hit");
  let stand = $("<button>Stand</button>");
  stand.attr("id", "stand");
  let restart = $("<button>Restart</button>");
  restart.attr("id", "restart");
  //Adding Buttons onto the page
  $("#screen").append(playerCards);
  $("#screen").append(dealerCards);
  $("#screen").append(controls);
  $("#controlContainer").append(hit);
  $("#controlContainer").append(stand);
  $("#controlContainer").append(restart);

  drawCard(deck, "player");
  drawCard(deck, "player");
  drawCard(deck, "dealer");
};

//Think about how to make this work for both player and dealer
drawCard = (deck, pOrD) => {
  //Getting and then removing the card form the deck
  //STILL NEED TO POP CARD THAT WAS DRAWN OUT OF DECK

  var cardPosition = Math.floor(deck.length * Math.random());
  var cardArray = deck[cardPosition];

  var cardValue = cardArray[1];
  var cardImgSrc = cardArray[2];

  //   console.log(
  //     "This is the card position in the deck: " +
  //       cardPosition +
  //       "\nThis is is the value: " +
  //       cardValue
  //   );

  //Check to see if its player or dealer drawing card
  if (pOrD === "player") {
    putCardOnScreen(cardImgSrc, "p");
    //Checking to see if player has lost the game
    playerTotal += cardValue;
    if (playerTotal > 21) {
      console.log("First conditional");
      youLose();
    }
  } else {
    putCardOnScreen(cardImgSrc, "d");
    //Checking if dealer lost game
    dealerTotal += cardValue;
    if (dealerTotal > playerTotal && dealerTotal < 21 && dealerTotal > 10) {
      console.log("Second conditional");
      youLose();
    }
  }
  console.log(
    "playerTotal after drawing card: " +
      playerTotal +
      "\ndealerTotal after drawing card: " +
      dealerTotal
  );
};

//Function to calculate who wins on stand
stand = () => {
  drawCard(deck, "dealer");

  if (dealerTotal > playerTotal && dealerTotal < 22) {
    youLose();
  } else if (dealerTotal > 21) {
    youWin();
  } else {
    window.setTimeout(function () {
      stand();
    }, 1000);
  }
};
//Function for Losing
youLose = () => {
  console.log("In lose game function");
  //Placeholder
  alert("You lost the game...");
  window.setTimeout(function () {
    resetGame();
  }, 3000);
};
//Function for Wining
youWin = () => {
  //PlaceHolder
  alert("You win the game!");
  window.setTimeout(function () {
    resetGame();
  }, 3000);
};
//Function for reseting the game
resetGame = () => {
  playerTotal = 0;
  dealerTotal = 0;
  deck = [...masterDeck];

  createBoard(deck);
};

putCardOnScreen = (cardImgSrc, pOrD) => {
  //Displaying the card to the screen
  //   let cardDisplay = $("<div></div>");
  //   cardDisplay.attr("id", "cardDisplay");
  let cardImage = $("<image src=" + cardImgSrc + "></image>");
  cardImage.attr("class", "cardImage");
  if (pOrD == "p") {
    // $("#playerCards").append(cardDisplay);
    $("#playerCards").append(cardImage);
  } else if (pOrD == "d") {
    // $("#dealerCards").append(cardDisplay);
    $("#dealerCards").append(cardImage);
  }
};
