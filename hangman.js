// Global Variables
// Setting all the variables for what I want each function to do
// Remember to Console.log() to check if each function/method works!
// If right, push to the "right" array, otherwise, push to "wrong" array
// Create an array of words
// create start button when game does not start unless user clicks on the start button to initiate game
// Create clear button to clear the score and reset the game back to 10 lives and 0 points
// Create letter buttons so every time a user click on a letter button the letter will appear on the underscore, If wrong letter, user loses point by -1
// Create hangman so if user clicks on correct letter, a body part will appear on the hangman
// Create an alert if user gets all letters correct, an alert will advise "You Won!", if user is out of lives, an alert will advise "Sorry, try again!"

// Array of words
var wordArrays = [
  "lexus",
  "honda",
  "acura",
  "chevrolet",
  "toyota",
  "tesla",
  "mazda",
  "nissan",
  "ford"
];

// Word that you selected
var words;

// This will randomize the words
var randomWords = "";

// Deciding if to use this and use click method. Make it look like buttons
var alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// right and wrong guesses and guesses made
var correctGuesses;
var choice;
var guessesMade = [];

// Number of guesses left = 6;
var livesRemaining = 7;
// var livesRemaining = document.getElementById("livesRemaining");

// Count # of wins and losses
var sumWins = 0;
var isInitialized = false;
// document.getElementById("sumWins");

// document.getElementById("sumWins").innerHTML = sumWins;

// Underscores for each letter in the array
var underscores = [];

// Hangman body parts

// Create Alphabet buttons
function buttonsAlpha() {
  var newButtons = document.getElementById("buttons");
  var lists = document.createElement("ul");
  for (var i = 0; i < alphabets.length; i++) {
    var btnListItems = document.createElement("li");
    btnListItems.classList.add('container-fluid');
    btnListItems.textContent = alphabets[i];
    newButtons.appendChild(lists);
    lists.appendChild(btnListItems);
  }
}
buttonsAlpha();

// Create underscore based on # of characters
function randomArrays() {
  randomWords = wordArrays[Math.floor(Math.random() * wordArrays.length)];
  underscores = [];
  for (var i = 0; i < randomWords.length; i++) {
    underscores.push("_");
  }
  document.getElementById("underscores").innerHTML = underscores.join(" ");
}
randomArrays();

// Add onclick function for buttons
document.addEventListener("click", buttonClicked);
function buttonClicked() {
  var clickedElement = event.target;
  clickedElement.classList.add("buttonDisabled");
  var chosenLetter = event.target.innerHTML;
  console.log("var text " + chosenLetter);
  var guessesRemaining = document.getElementById("livesRemaining").innerHTML;
  console.log(randomWords);
  if (guessesRemaining > 0) {
    var letterElement = new Array();
    for (var i = 0; i < randomWords.length; i++) {
      if (randomWords.charAt(i) === chosenLetter.toLowerCase()) {
        console.log("found letter " + i);
        letterElement.push(i);
      }
    }
    // console.log("letter element length " + letterElement.length);
    if (letterElement.length < 1) {
      guessesRemaining -= 1;
      document.getElementById("livesRemaining").innerHTML = guessesRemaining;
      drawParts();
    } else {
      for (var i = 0; i < letterElement.length; i++) {
        underscores[letterElement[i]] = chosenLetter;
      }
      document.getElementById("underscores").innerHTML = underscores.join(" ");
      if (!underscores.join().includes("_")) {
        sumWins++;
        alert("Congrats, you won!");
        document.getElementById("sumWins").innerHTML = sumWins;
      }
    }
  }
}

// Function to start the game
function startGame() {
  randomWords = wordArrays[Math.floor(Math.random() * wordArrays.length)];
  randomArrays();
  document.getElementById("livesRemaining").innerHTML = livesRemaining;
  if (!isInitialized) {
    document.getElementById("sumWins").innerHTML = 0;
    isInitialized = true;
    canvas();
  }
}

// // Function to reset the game
function clearGame() {
  randomWords = wordArrays[Math.floor(Math.random() * wordArrays.length)];
  randomArrays();
  document.getElementById("livesRemaining").innerHTML = livesRemaining;
}