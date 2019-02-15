// Global Variables
// Setting all the variables for what I want each function to do
// Remember to Console.log() to check if each function/method works!

var words = ['SERENA WILLIAMS', 30, 'TENNIS'];
var livesLeft = 10;
var lives = [];
var underScores = [];
var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomWords;
var randomLetters;

// Setting the Functions/Methods to make each action work!

function start() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  console.log(start)
}
