// Global Variables
// Setting all the variables for what I want each function to do
// Remember to Console.log() to check if each function/method works!

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


 