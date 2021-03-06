// Psuedo Code

// randomly generate a number at the start of the game
//     number is generated from numbers 19 to 120

// each crystal has a random number generated from 1 to 12 at the start of the game
//     number is not visible to player

// each time crystal is clicked on, score will add to total score. each click adds more and more points 

// goal is to match your score to the random number 
// if score matches the total then you get a win added to wins 
//     if you go over the total score then you lose 

// at the end of each game, you'll get a new random number, and each crystal will be worth a new amount

// set variables that i may need

$(document).ready(function () {

    // define variable that generates random number to guess, sends that number to the random number text
    var randomNumber = Math.floor(Math.random() * 102 + 19);
    console.log(randomNumber);
    // display that number
    $("#randomNumber").text(randomNumber)

    // generates random number for each crystal
    var crystalOne = Math.floor(Math.random() * 12 + 1);
    console.log(crystalOne);
    var crystalTwo = Math.floor(Math.random() * 12 + 1);
    console.log(crystalTwo);
    var crystalThree = Math.floor(Math.random() * 12 + 1);
    console.log(crystalThree);
    var crystalFour = Math.floor(Math.random() * 12 + 1);
    console.log(crystalFour);

    // define variables to log wins, losses, user's score
    var Wins = 0;
    var Losses = 0;
    var userTotal = 0;

    // start a new game
    function newGame() {
        randomNumber = Math.floor(Math.random() * 102 + 19);
        console.log(randomNumber);
        $("#randomNumber").text(randomNumber);
        crystalOne = Math.floor(Math.random() * 12 + 1);
        console.log(crystalOne);
        crystalTwo = Math.floor(Math.random() * 12 + 1);
        console.log(crystalTwo);
        crystalThree = Math.floor(Math.random() * 12 + 1);
        console.log(crystalThree);
        crystalFour = Math.floor(Math.random() * 12 + 1);;
        console.log(crystalFour);
        userTotal = 0;
        $("#yourScore").text(userTotal);
    };
    

    // display Wins
    function userWin() {
        alert("you win!");
        Wins++;
        $("#Wins").text("Wins: " + Wins)
        newGame();
    }

    // display Losses
    function userLoss() {
        alert("you lose, try again!");
        Losses++;
        $("#Losses").text("Losses: " +Losses)
        newGame();
    };

    // clicks on the crystals, consolelogging user clicks so i have the data
    $("#crystalOne").on("click", function () {
        console.log("user clicked crystal one: " + crystalOne);
        userTotal = userTotal + crystalOne;
        $("#yourScore").text(userTotal);

        if (userTotal == randomNumber) {
            userWin();
        } else if (userTotal > randomNumber) {
            userLoss();
        }
    })

    $("#crystalTwo").on("click", function () {
        console.log("user clicked crystal two: " + crystalTwo);
        userTotal = userTotal + crystalTwo;
        $("#yourScore").text(userTotal);

        if (userTotal == randomNumber) {
            userWin();
        } else if (userTotal > randomNumber) {
            userLoss();
        }
    })

    $("#crystalThree").on("click", function () {
        console.log("user clicked crystal three: " + crystalThree);
        userTotal = userTotal + crystalThree;
        $("#yourScore").text(userTotal);

        if (userTotal == randomNumber) {
            userWin();
        } else if (userTotal > randomNumber) {
            userLoss();
        }
    })

    $("#crystalFour").on("click", function () {
        console.log("user clicked crystal four: " + crystalFour);
        userTotal = userTotal + crystalFour;
        $("#yourScore").text(userTotal);

        if (userTotal == randomNumber) {
            userWin();
        } else if (userTotal > randomNumber) {
            userLoss();
        }
    })


});