var canvas;
var stage;
// Game 
var game = new createjs.Container();
var background;
var spinButton;
var slotOne = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
var slotTwo = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
var slotThree = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
var slotOneRandom;
var sloTwoeRandom;
var slotThreeRandom;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}
function gameLoop() {
    stage.update(); // Refreshes our stage
}
// Event handlers
function SpinBtn() {
    slotOneRandom = Math.floor(Math.random() * slotOne.length);
    console.log("Slot One: " + slotOne[slotOneRandom]);
    sloTwoeRandom = Math.floor(Math.random() * slotTwo.length);
    console.log("Slot Two: " + slotTwo[sloTwoeRandom]);
    slotThreeRandom = Math.floor(Math.random() * slotThree.length);
    console.log("Slot Three: " + slotThree[slotThreeRandom]);
    checkSpin(slotOneRandom, sloTwoeRandom, slotThreeRandom);
}
function checkSpin(spotOne, spotTwo, SpotThree) {
}
function createUI() {
    background = new createjs.Bitmap("assets/images/SlotMachine.png");
    game.addChild(background);
    spinButton = new createjs.Bitmap("assets/images/SpinButton.png");
    spinButton.x = 345;
    spinButton.y = 410;
    game.addChild(spinButton);
    spinButton.addEventListener("click", SpinBtn);
}
// Our Game Kicks off in here
function main() {
    // instantiate my game container
    game = new createjs.Container();
    game.x = 100;
    game.y = 0;
    // Create Slotmachine User Interface
    createUI();
    stage.addChild(game);
}
//# sourceMappingURL=game.js.map