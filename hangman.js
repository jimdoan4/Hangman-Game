// Global Variables
// Setting all the variables for what I want each function to do
// Remember to Console.log() to check if each function/method works!
// Create an array of words
// Choose word randomly
// Create underscores based on the length of the word
// Track users guesses
// Check if user guess is right
// If right, push to the "right" array, otherwise, push to "wrong" array
// create start button when game does not start unless user clicks on the start button to initaite game
// Create clear button to clear the score and reset the game back to 10 lives and 0 points
// Create letter buttons so everytime a user click on a letter button the letter will appear on the underscore, If wrong letter, user loses point by -1
// Create hangman so if user clicks on correct letter, a body part will appear on the hangman
// cCreate an alert if user gets all letters correct, an alert will advise "You Won!", if user is out of lives, an alert will advise "Sorry, try again!"

var words = ["SERENA WILLIAMS", "ORANGE", "TENNIS"];
var livesRemaining = 10;
var life = [];
var underScore = [];
var randomWords;
var randomLetters;

// Setting the Functions/Methods to make each action work!

function start() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  // console.log(randomWords);
  // Make underscores for each words
  for (var i = 0; i < randomWords.length; i++) 
  {
    underScore.push('_'); 
  }
    // console.log(underScore);
    document.querySelector('#text-here').textContent = underScore.join(' ');
   }
  start();

// Every time you call start a game its going to give you a random word
// start();


 