var canvas;
var stage: createjs.Stage;

// Game 
var  game = new createjs.Container();
var background: createjs.Bitmap;
var spinButton: createjs.Bitmap;
var slotOne = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
var slotTwo = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
var slotThree = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
var slotOneRandom;
var sloTwoeRandom;
var slotThreeRandom;
var spins = 0;
var win = 0;
var jackpot = 0;
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
    //Getting Random Elements from each slot
    slotOneRandom = Math.floor(Math.random() * slotOne.length);
    console.log("Slot One: " + slotOne[slotOneRandom]);

    sloTwoeRandom = Math.floor(Math.random() * slotTwo.length);
    console.log("Slot Two: " + slotTwo[sloTwoeRandom]);

    slotThreeRandom = Math.floor(Math.random() * slotThree.length);
    console.log("Slot Three: " + slotThree[slotThreeRandom]);



    checkSpin(slotOne[slotOneRandom], slotTwo[sloTwoeRandom], slotThree[slotThreeRandom]);

    
}
function checkSpin(spotOne, spotTwo, SpotThree) {
    console.log("");
    spins++;
    console.log("Number is spins " + spins);
    console.log("Number is wins " + win);
    console.log("Number of Jackpots " + jackpot);
    console.log("jackPot Percentage " + (jackpot / spins) * 100 + " %");
    console.log("Win percentage : " + (win / spins) * 100 + " %");
    var allSlots = [spotOne, spotTwo, SpotThree];
    var possibilities = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
    var grape = 0;
    var bananans = 0;
    var oranges = 0;
    var cherries = 0;
    var bars = 0;
    var bells = 0;
    var seven = 0;
    var blanks = 0;

    var total = [];
    var highest = 0;
    var choice = 0;

    for (var i = 0; i < possibilities.length; i++) {
        for (var r = 0; r < allSlots.length; r++) {
            switch (possibilities[i]) {
                case possibilities[0]:
                    if (possibilities[0] == allSlots[r]) {
                        grape++;
                    }
                    break;
                case possibilities[1]:
                    if (possibilities[1] == allSlots[r]) {
                        bananans++;
                    }
                    break;
                case possibilities[2]:
                    if (possibilities[2] == allSlots[r]) {
                        oranges++;
                    }
                    break;
                case possibilities[3]:
                    if (possibilities[3] == allSlots[r]) {
                        cherries++;
                    }
                    break;
                case possibilities[4]:
                    if (possibilities[4] == allSlots[r]) {
                        bars++;
                    }
                    break;
                case possibilities[5]:
                    if (possibilities[5] == allSlots[r]) {
                        bells++;
                    }
                    break;
                case possibilities[6]:
                    if (possibilities[6] == allSlots[r]) {
                        seven++;
                    }
                    break;
                case possibilities[7]:
                    if (possibilities[7] == allSlots[r]) {
                        blanks++;
                    }
                    break;
            }
        }
    }
    total  = [grape, bananans, oranges, cherries, bars, bells, seven, blanks];

    for (var t = 0; t < total.length; t++) {
        if (total[t] > highest) {
            highest = total[t];
            choice = t;
        }
    }
    console.log("");
    if (highest == 1) {
        console.log("No matches");
    }
    if (highest == 2) {
        console.log("Win on " + possibilities[choice]);
        win++;
    }
    if (highest == 3) {
        console.log("JackPot on " + possibilities[choice]);
        win++;
        jackpot++;
    }
    console.log("");

    highest = 0;
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