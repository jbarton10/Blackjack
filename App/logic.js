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
  ["AceSpade", [1, 11]],
  ["TwoSpade", 2],
  ["ThreeSpade", 3],
  ["FourSpade", 4],
  ["FiveSpade", 5],
  ["SixSpade", 6],
  ["SevenSpade", 7],
  ["EightSpade", 8],
  ["NineSpade", 9],
  ["TenSpade", 10],
  ["JackSpade", 10],
  ["QueenSpade", 10],
  ["KingSpade", 10],
  ["AceClub", [1, 11]],
  ["TwoClub", 2],
  ["ThreeClub", 3],
  ["FourClub", 4],
  ["FiveClub", 5],
  ["SixClub", 6],
  ["SevenClub", 7],
  ["EightClub", 8],
  ["NineClub", 9],
  ["TenClub", 10],
  ["JackClub", 10],
  ["QueenClub", 10],
  ["KingClub", 10],
  ["AceHeart", [1, 11]],
  ["TwoHeart", 2],
  ["ThreeHeart", 3],
  ["FourHeart", 4],
  ["FiveHeart", 5],
  ["SixHeart", 6],
  ["SevenHeart", 7],
  ["EightHeart", 8],
  ["NineHeart", 9],
  ["TenHeart", 10],
  ["JackHeart", 10],
  ["QueenHeart", 10],
  ["KingHeart", 10],
  ["AceDiamond", [1, 11]],
  ["TwoDiamond", 2],
  ["ThreeDiamond", 3],
  ["FourDiamond", 4],
  ["FiveDiamond", 5],
  ["SixDiamond", 6],
  ["SevenDiamond", 7],
  ["EightDiamond", 8],
  ["NineDiamond", 9],
  ["TenDiamond", 10],
  ["JackDiamond", 10],
  ["QueenDiamond", 10],
  ["KingDiamond", 10],
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
    $("#screen").empty();
    //Making the game board

    createBoard(deck);
  });
  //Funciton for getting cards off the hit button
  $(document).on("click", "#hit", function () {
    console.log("hit");
    drawCard(deck);
  });
  $(document).on("click", "#restart", function () {
    console.log("restart clicked");
  });
  $(document).on("click", "#stand", function () {
    console.log("stand clicked");
  });
});

//Function for creating the board
createBoard = (deck) => {
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

  drawCard(deck);
  drawCard(deck);
};

drawCard = (deck) => {
  //Getting and then removing the card form the deck

  var cardPosition = Math.floor(deck.length * Math.random());
  var cardValue = deck[cardPosition];

  console.log(
    "This is the card position in the deck: " +
      cardPosition +
      "\nThis is is the value: " +
      cardValue
  );

  //Displaying the card to the screen
  let cardToDisplay = $("<div></div>");

  //Checking to see if player has lost the game
  playerTotal += cardValue[1];
  if (playerTotal > 21) {
    youLose();
  }
};

//Function for losing
youLose = () => {
  alert("You lost the game");
};
