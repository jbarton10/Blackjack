var cards = {
  Ace: [1, 11],
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
};
const max = 21;
var playerTotal = 0;
var dealerTotal = 0;

//Button starts the game
$("#startGame").on("click", function () {
  console.log("Game Started");

  $("#screen").empty();
  //Make a control panel
  let controls = $("<div></div>");
  controls.addClass("controlContainer");
  //Make buttons for playing game
  let hit = $("<button>Hit</button>");
  hit.addClass = $("controls hit");
  let stand = $("<button>Stand</button>");
  stand.addClass = $("controls stand");
  let restart = $("<button>Restart</button>");
  restart.addClass = $("controls restart");
  //Adding Buttons onto the page
  $("#screen").append(controls);
  $(".controlContainer").append(hit);
  $(".controlContainer").append(stand);
  $(".controlContainer").append(restart);
});
//Function for creating the board
createBoard = () => {
  let;
};
