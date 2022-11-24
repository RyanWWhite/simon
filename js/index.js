$(document).ready(function () {
  //waits for website to be loaded to execute the javascript
  console.log("Page loaded successfully.");

  initializeEvents();
  console.log("Events created successfully.");
});

function initializeEvents() {
  //sets up every event in the game
  tileEvents();
  gameMechanicsEvents();
}

function initializeSingleTileEvent(tileId, hoverColor, originalColor) {
  //uses the tileId, hoverColor and originalColor parameters from the tileList array to change the background color of each tile when the mouse hovers over
  $(tileId).hover(
    function () {
      $(this).css("background-color", hoverColor);
    },
    function () {
      $(this).css("background-color", originalColor);
    }
  );
}

function tileEvents() {
  //takes all variables from the runGame function and compacts them into single tile events
  initializeSingleTileEvent("#left-top", "white", "red");
  initializeSingleTileEvent("#right-top", "white", "orange");
  initializeSingleTileEvent("#left-bottom", "white", "blue");
  initializeSingleTileEvent("#right-bottom", "white", "green");
}

function gameMechanicsEvents() {
  //function that starts the mechanics for runGame, repeat and validates buttons
  $("button#start-button").click(runGame);

  $("button#repeat-button").click(repeat);

  $("button#validate-button").click(validate);
}

async function generateSequence(steps, timout, tileList) {
  //fucntion that uses the tileList, steps and timout parameters to generate a sequence
  sequenceIds = [""];
  for (let index = 0; index < steps; index++) {
    // cycle 1 => index = 0 , 0 < 2 = true
    // cycle 2 => index = 1 , 1 < 2 = true
    // cycle 3 => index = 2,  2 < 2 = false, NOT GOING TO BE EXECUTED
    let getRandomTile = randomizer(tileList);
    //validates if suequence is randomized

    lightUpTile(
      getRandomTile["object"],
      //gets the specific tile to use
      getRandomTile["originalColor"],
      //finds what the original color of the tile is
      getRandomTile["activatedColor"],
      //changes original tile color to new color
      timout
      //uses timout to wait before changing back
    );

    await sleep(timout);
  }
  return sequenceIds;
}

async function runGame() {
  let leftUpperTileDiv = $("#left-top");
  let rightUpperTileDiv = $("#right-top");
  let rightLowerTileDiv = $("#right-bottom");
  let leftLowerTileDiv = $("#left-bottom");

  let leftUpperTileOriginalColor = "red";
  let rightUpperTileOriginalColor = "orange";
  let leftLowerTileOriginalColor = "blue";
  let rightLowerTileOriginalColor = "green";

  let leftUpperTileActivatedColor = "cyan";
  let rightUpperTileActivatedColor = "cyan";
  let leftLowerTileActivatedColor = "cyan";
  let rightLowerTileActivatedColor = "cyan";

  let tileList = [
    {
      object: leftUpperTileDiv,
      originalColor: leftUpperTileOriginalColor,
      activatedColor: leftUpperTileActivatedColor,
      tileId: 1,
    },
    {
      object: rightUpperTileDiv,
      originalColor: rightUpperTileOriginalColor,
      activatedColor: rightUpperTileActivatedColor,
      tileId: 2,
    },
    {
      object: rightLowerTileDiv,
      originalColor: rightLowerTileOriginalColor,
      activatedColor: rightLowerTileActivatedColor,
      tileId: 3,
    },
    {
      object: leftLowerTileDiv,
      originalColor: leftLowerTileOriginalColor,
      activatedColor: leftLowerTileActivatedColor,
      tileId: 4,
    },
  ];

  generateSequence(2, 1000, tileList);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function lightUpTile(tileObject, originalColor, activatedColor, timout) {
  console.log("Lighting up tile: ", originalColor);
  tileObject.css("background-color", activatedColor);
  await sleep(timout);
  tileObject.css("background-color", originalColor);
  await sleep(timout);
}

function randomizer(tileList) {
  // e.g tileList = [1, 2, 3, 4]; firstElement = tileList[0]
  // Math.random() -> 0 to 1, e.g., 0.5 * tileList.length = 0.5 * 4 = 2
  let randomElement = tileList[Math.floor(Math.random() * tileList.length)];
  return randomElement;
}

function repeat() {}

function validate() {}
