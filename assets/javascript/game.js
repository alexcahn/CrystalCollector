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
var Wins = 0;
var Losses = 0;
var randomNumber = " ";
var userTotal = 0;
var crystalOne = " ";
var crystalTwo = " ";
var crystalThree = " ";
var crystalFour = " ";

$(document).ready(function(){

    // generates random number to guess
    randomNumber = Math.floor(Math.random() * 102 + 19);
    console.log(randomNumber);

    // generates random number for each crystal
    crystalOne = Math.floor(Math.random() * 12 + 1);
    console.log(crystalOne);
    crystalTwo = Math.floor(Math.random() * 12 + 1);
    console.log(crystalTwo);
    crystalThree = Math.floor(Math.random() * 12 + 1);
    console.log(crystalThree);
    crystalFour = Math.floor(Math.random() * 12 + 1);
    console.log(crystalFour);

    // score wins and losses
    $("#Wins").text("Wins");
    $("#Losses").text("Losses");

    // start a new game
    function newGame(){
        randomNumber = Math.floor(Math.random() * 102 + 19);
        $("#randomNumber").text(randomNumber);
        crystalOne = Math.floor(Math.random() * 12 + 1);
        $("#crystalOne").text(crystalOne);
        crystalTwo = Math.floor(Math.random() * 12 + 1);
        $("#crystalTwo").text(crystalTwo);
        crystalThree = Math.floor(Math.random() * 12 + 1);
        $("#crystalThree").text(crystalThree);
        crystalFour = Math.floor(Math.random() * 12 + 1);
        $("#crystalFour").text(crystalFour);
        userTotal = 0;
        $("yourScore").text(userTotal);
    }

    // display Wins
    function userWin(){
        alert("you win!");
        Wins++;
        $("#Wins").text(Wins)
        newGame()
    }

    // display Losses
    function userLoss(){
        alert("you lose, try again!");
        Losses++;
        $("#Losses").text(Losses)
        newGame()
    }


})