var canvas;
var stage: createjs.Stage;
// Game 
var  game = new createjs.Container();
var background: createjs.Bitmap;
var spinButton: createjs.Bitmap;
var BetOne: createjs.Bitmap;
var BetTen: createjs.Bitmap;
var BetMax: createjs.Bitmap;
var Reset: createjs.Bitmap;
var reelOne: createjs.Bitmap;
var reelTwo: createjs.Bitmap;
var reelThree: createjs.Bitmap;
var reels: createjs.Bitmap[] = [];
var slots = ["Grapes", "Bananas", "Oranges", "Cherries", "Bars", "Bells", "Sevens", "blanks"];
var SlotImages = ["assets/images/Slot_Grapes.png", "assets/images/Slot_Bananas.png", "assets/images/Slot_Orange.png", "assets/images/Slot_Cherries.png", "assets/images/Slot_Bar.png", "assets/images/Slot_Bell.png", "assets/images/Slot_Seven.png", "assets/images/Slot_Blank.png"];
var slotOneRandom;
var sloTwoeRandom;
var slotThreeRandom;
var spins = 0;
var win = 0;
var jackpot = 0;
var Credits = 1500;
var betAmount = 0;
var winnings = 0;
var winningText;
var betAmountText;
var CreditText;

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
    //Getting Random Elements for each slot
    slotOneRandom = Math.floor(Math.random() * slots.length);
    console.log("Slot One: " + slots[slotOneRandom]);

    sloTwoeRandom = Math.floor(Math.random() * slots.length);
    console.log("Slot Two: " + slots[sloTwoeRandom]);

    slotThreeRandom = Math.floor(Math.random() * slots.length);
    console.log("Slot Three: " + slots[slotThreeRandom]);

    checkSpin(slots[slotOneRandom], slots[sloTwoeRandom], slots[slotThreeRandom]);
    showReels(slotOneRandom, sloTwoeRandom, slotThreeRandom);
}
function BetOnce() {
    if (betAmount < 50) {
        Credits -= 1;
        betAmount += 1;
        CreditText.text = "Credits: " + Credits.toString();
        betAmountText.text = "Bet Amount: " + betAmount.toString();
    }
}
function BetTenfold() {
    if (betAmount + 10 < 50) {
        Credits -= 10;
        betAmount += 10;
        CreditText.text = "Credits: " + Credits.toString();
        betAmountText.text = "Bet Amount: " + betAmount.toString();
    }
}
function MaxOut() {
    if (betAmount + 50 <= 50) {
        Credits -= 50;
        betAmount += 50;
        CreditText.text = "Credits: " + Credits.toString();
        betAmountText.text = "Bet Amount: " + betAmount.toString();
        winningText = "Winnings: " + winnings.toString();
    }

}
function ResetButton() {
    Credits = 1500;
    winnings = 0;
    betAmount = 0;
    win = 0;
    jackpot = 0;
    spins = 0;
    CreditText.text = "Credits: " + Credits.toString();
    betAmountText.text = "Bet Amount: " + betAmount.toString();

}
function checkSpin(spotOne, spotTwo, SpotThree) {
    console.log("");
    spins++;
    console.log("Number is spins " + spins);
    console.log("Number is wins " + win);
    console.log("Number of Jackpots " + jackpot);
    console.log("jackPot Percentage " + Math.floor(jackpot / spins * 100 )+ " %");
    console.log("Win percentage : " + Math.floor(win / spins * 100 )+ " %");
    var allSlots = [spotOne, spotTwo, SpotThree];
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

    for (var i = 0; i < slots.length; i++) {
        for (var r = 0; r < allSlots.length; r++) {
            switch (slots[i]) {
                case slots[0]:
                    if (slots[0] == allSlots[r]) {
                        grape++;
                    }
                    break;
                case slots[1]:
                    if (slots[1] == allSlots[r]) {
                        bananans++;
                    }
                    break;
                case slots[2]:
                    if (slots[2] == allSlots[r]) {
                        oranges++;
                    }
                    break;
                case slots[3]:
                    if (slots[3] == allSlots[r]) {
                        cherries++;
                    }
                    break;
                case slots[4]:
                    if (slots[4] == allSlots[r]) {
                        bars++;
                    }
                    break;
                case slots[5]:
                    if (slots[5] == allSlots[r]) {
                        bells++;
                    }
                    break;
                case slots[6]:
                    if (slots[6] == allSlots[r]) {
                        seven++;
                    }
                    break;
                case slots[7]:
                    if (slots[7] == allSlots[r]) {
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

    if (blanks >= 1) {
        console.log("You win Nothing")
    }
    if (highest == 1) {
        console.log("You win Nothing")
    }
    if(blanks == 0) {
        payOut(choice, highest);
    }
    console.log("");
}
function payOut(choice, highest) {
    switch (choice) {
        case 0:
            if (highest == 2) {
                console.log("Won 0.1 on bet");
                win++;
            }
            if (highest == 3) {
                console.log("Won 1.1 on bet");
                win++;
                jackpot++;
            }
            break;
        case 1:
            if (highest == 2) {
                console.log("Won 0.2 on bet");
                win++;
            }
            if (highest == 3) {
                console.log("Won 1.2 on bet");
                win++;
                jackpot++;
            }
            break;
        case 2:
            if (highest == 2) {
                console.log("Won 0.3 on bet");
                win++;
            }
            if (highest == 3) {
                console.log("Won 1.3 on bet");
                win++;
                jackpot++;
            }
            break;
        case 3:
            if (highest == 2) {
                console.log("Won 0.4 on bet");
                win++;
            }
            if (highest == 3) {
                console.log("Won 1.4 on bet");
                win++;
                jackpot++;
            }
            break;
        case 4:
            if (highest == 2) {
                console.log("Won 0.5 on bet");
                win++;
            }
            if (highest == 3) {
                console.log("Won 1.5 on bet");
                win++;
                jackpot++;
            }
            break;
        case 5:
            if (highest == 2) {
                console.log("Won 0.6 on bet");
                win++;
            }
            if (highest == 3) {
                console.log("Won 1.6 on bet");
                win++;
                jackpot++;
            }
            break;
        case 6:
            if (highest == 2) {
                console.log("Won 0.7 on bet");
                win++;
            }
            if (highest == 3) {
                console.log("Won 1.7 on bet");
                win++;
                jackpot++;
            }
            break;
        case 7:
            if (highest == 1) {
                console.log("You win Nothing");
            }
            break;
    }
}
function showReels(spotOne, SpotTwo, SpotThree) {

    game.removeChild(reelOne);
    game.removeChild(reelTwo);
    game.removeChild(reelThree);

    reelOne = new createjs.Bitmap(SlotImages[spotOne]);
    reelOne.x = 50;
    reelOne.y = 230;
    game.addChild(reelOne);

    reelTwo = new createjs.Bitmap(SlotImages[SpotTwo]);
    reelTwo.x = 150;
    reelTwo.y = 230;
    game.addChild(reelTwo);

    reelThree = new createjs.Bitmap(SlotImages[SpotThree]);
    reelThree.x = 250;
    reelThree.y = 230;
    game.addChild(reelThree);
}

function createUI() {
    background = new createjs.Bitmap("assets/images/SlotMachine.png");
    game.addChild(background);

    spinButton = new createjs.Bitmap("assets/images/SpinButton.png");
    spinButton.x = 345;
    spinButton.y = 410;
    game.addChild(spinButton);


    CreditText = new createjs.Text("Credits: " + Credits.toString(), "Arial", "#FFFFFF");
    CreditText.x = 30;
    CreditText.y = 410;
    game.addChild(CreditText);

    betAmountText = new createjs.Text("Bet Amount: " + betAmount.toString(), "Arial", "#FFFFFF");
    betAmountText.x = 30;
    betAmountText.y = 430;
    game.addChild(betAmountText);

    winningText = new createjs.Text("Winnings: " + winnings.toString(), "Arial", "#FFFFFF");
    winningText.x = 30;
    winningText.y = 450;
    game.addChild(winningText);

    BetOne = new createjs.Bitmap("assets/images/BetOneButton.png");
    BetOne.x = 290;
    BetOne.y = 400;
    game.addChild(BetOne);

    BetTen = new createjs.Bitmap("assets/images/BetTenButton.png");
    BetTen.x = 290;
    BetTen.y = 440;
    game.addChild(BetTen);

    BetMax = new createjs.Bitmap("assets/images/BetMaxButton.png");
    BetMax.x = 250;
    BetMax.y = 400;
    game.addChild(BetMax);

    Reset = new createjs.Bitmap("assets/images/ResetButton.png");
    Reset.x = 250;
    Reset.y = 440;
    game.addChild(Reset);





    BetMax.addEventListener("click", MaxOut);
    BetOne.addEventListener("click", BetOnce);
    BetTen.addEventListener("click", BetTenfold);
    spinButton.addEventListener("click", SpinBtn);
    Reset.addEventListener("click", ResetButton);
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