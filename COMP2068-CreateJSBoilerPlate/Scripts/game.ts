var canvas;
var stage: createjs.Stage;

// Game 
var  game = new createjs.Container();
var background: createjs.Bitmap;

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
function buttonClicked() {
    
}

function createUI() {
    background = new createjs.Bitmap("assets/images/SlotMachine.png");
    game.addChild(background);
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