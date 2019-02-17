// Global Variables
// Setting all the variables for what I want each function to do
// Remember to Console.log() to check if each function/method works!
// Create an array of words
let words = ["serena williams", "roder federer", "rafael nadal"];
// Choose word randomly
let randomWords = words[Math.floor(Math.random() * words.length)];
let random = words[randomWords];
let correctWords = [];
let wrongWords = [];
// Check if user guess is right
let livesRemaining = 10;
let life = [];
let randomLetters;
// Create underscores based on the length of the word
let underScore = [];

// DOM Manipulations
let underLines = document.querySelector('#text-here');


// Track users guesses
document.addEventListener('keypress', (event) => {
  let keys = event.keyCode;
  let keyButtons = String.fromCharCode(keys);
  // console.log(keyButtons)
  // If user chooses correct letter
  if (words.indexOf(keys) > -1) {
    // console.log(true);
    correctWords.push(keys);
    // replace underscore with the right letter 
    underScore[words.indexOf(keys)] = keys;
    // Checks to see if user word matches guesses
    if (underScore.join('') === words) {
      alert('You Win!');
    }
  } else {
    wrongWords.push(keys);
  }
});

// If right, push to the "right" array, otherwise, push to "wrong" array
// create start button when game does not start unless user clicks on the start button to initaite game
// Create clear button to clear the score and reset the game back to 10 lives and 0 points
// Create letter buttons so everytime a user click on a letter button the letter will appear on the underscore, If wrong letter, user loses point by -1
// Create hangman so if user clicks on correct letter, a body part will appear on the hangman
// Create an alert if user gets all letters correct, an alert will advise "You Won!", if user is out of lives, an alert will advise "Sorry, try again!"


//Setting the Functions/Methods to make each action work!

function start() {
  // randomWords = words[Math.floor(Math.random() * words.length)];
  // console.log(randomWords);
  // Make underscores for each words
  for (var i = 0; i < randomWords.length; i++) 
  {
    underScore.push('_'); 
    underLines[0].textContent = underScore.join(' ');
  }
    // console.log(underScore);
    document.querySelector('#text-here').textContent = underScore.join(' ');
    life = [];
    livesRemaining = 10;
    document.querySelector('#lives').textContent = livesRemaining;
  }  
  // start();



// Every time you call start a game its going to give you a random word
// start();


