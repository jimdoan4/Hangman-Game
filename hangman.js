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

var words = ["apple", "blueberry", "strawberry", "banana", "orange"];
// This will randomize the words
var randomWords;
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

// Number of guesses left = 6;
var livesRemaining = 6;
// document.getElementById("livesRemaining").innerHTML = livesRemaining;

// Count # of wins
var countWins = 0;
// document.getElementById("countWins").innerHTML = countWins;

var resetLetters = "";

// empty array that will push blank letters to
// This is the underscores on the page
var blanks = [];

// This array will push letters of words to compare with if user guess is right or not
var blankWords = [];
var i;

// This will print out the blank spaces for the words accordingly to # of indexes
// for (i = 0; i < randomWords.length; i++) {
//         blanks.push("_");
//     }
// document.getElementById("wordGuesses").innerHTML = blanks.join(" ");

// DOM Manipulations
// #livesRemaining, #countWins, #wordGuesses, #wordGuessed, #category, #man, #start, and #clear

// Create Alphabet buttons
function alpha() {
  var newButtons = document.getElementById("buttons");
  var lists = document.createElement("ul");
  for (var i = 0; i < alphabets.length; i++) {
    lists.id = "letterButtons";
    var btnListItems = document.createElement("li");
    btnListItems.id = "letterButtons";
    btnListItems.textContent = alphabets[i];
    newButtons.appendChild(lists);
    lists.appendChild(btnListItems);
  }
}
alpha();

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
      if (randomWords[i] === chosenLetter.toLowerCase()) {
        console.log("found letter " + randomWords[i]);
        letterElement.push(i);
      }
    }
    // console.log("letter element length " + letterElement.length);
    if (letterElement.length < 1) {
      guessesRemaining -= 1;
      document.getElementById("livesRemaining").innerHTML = guessesRemaining;
    } else {
      for (var i = 0; i < letterElement.length; i++) {
        for (var j = 0; j < letterElement.length; j++) {
          if (i == letterElement[j]) {
            blanks[i] = chosenLetter;
          }
        }
      }
      document.getElementById("wordGuesses").innerHTML = blanks.join(" ");
    }
  }
}

// Create underscores for each words accordingly
function underline() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  blanks = [];
  for (var i = 0; i < randomWords.length; i++) {
    blanks.push("_");
  }
  // console.log(underScore);
  document.getElementById("wordGuesses").innerHTML = blanks.join(" ");
}
underline();

// Function to start the game
function startGame() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  underline();
  document.getElementById("livesRemaining").innerHTML = livesRemaining;
}
startGame();

// Function to reset the game
function clearGame() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  underline();
  document.getElementById("livesRemaining").innerHTML = livesRemaining;
}
clearGame();

// // Categories
// function categories() {
// }
    
// , ["serena williams", "roger federer", "rafael nadal", "na li"], ["javascript", "css", "html", "python"]