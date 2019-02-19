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
var randomWords = "";
// Deciding if to use this and use click method. Make it look like buttons
var alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
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

document.addEventListener("click", buttonClicked);
function buttonClicked() {
  var clickedElement = event.target;
  clickedElement.classList.add("buttonDisabled");
  var chosenLetter = event.target.textContent;
  console.log("var text " + chosenLetter);
  var guessesRemaining = document.getElementById("livesRemaining").innerHTML;
  console.log(randomWords);
  if (guessesRemaining > 0) {
    var letterElement = new Array();
    for (var i = 0; i < randomWords.length; i++) {
      if (randomWords[i] == chosenLetter.toLowerCase()) {
        console.log("found letter " + randomWords[i]);
        letterElement.push(i);
      }
    }
    console.log("letter element length " + letterElement.length);
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
      document.getElementById("wordGuesses").textContent = blanks.join(" ");
    }
  }
}

// Underscores for each length of words
function underline() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  blanks = [];
  for (var i = 0; i < randomWords.length; i++) {
    blanks.push("_");
  }
  // console.log(underScore);
  document.getElementById("wordGuesses").textContent = blanks.join(" ");
}
underline();

function startGame() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  underline();
}

function clearGame() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  underline();
  document.getElementById("livesRemaining").innerHTML = 6;
}













// Disable buttons initially
// function disableAlpha() {
//   document.querySelector('.buttons'),disabled = true;
// }

// disableAlpha();

// function userGuesses() {
// guess = 0;
// for (i = 0; i < words.length; i++);
//   if (words[i] === inboxGuesses) {
//     guess = guess + 1;
//     underScore[i] = letters;
//   }
// }

// userGuesses();

// function alphaButtons() {
//   alphaNum = document.querySelector('.hello');
//   alpha = document.createElement('ul');
//   for (var i = 0; i < alphabets.length; i++) {
//     alpha.id = 'alphabets';
//     lines = document.createElement('li');
//     lines.id = 'alpha';
//     lines.textContent = alphabets[i];
//     check();
//     alphaNum.appendChild(alpha);
//     alpha.appendChild(lines);
//   }
// }
// button.addEventListener('click', addItem);
// function alphaButtons(e) {
//   e.preventDefault();
//   var num = document.getElementByClassName('hello');
//   var divli = document.createElement('div');
//   divli.className = 'text.here';
//   divli.appendChild(document.createTextNode(alphabets));
//   alphabets.appendChild(num);
// }

//   alphabets.forEach(function(el) {
//     var button = document.createElement('button')
// //   button.className = "hello";
// button.innerHTML = el;
// var body = document.getElementById('buttons');
// document.body.appendChild(button);
// });

//   document.getElementByTagName('main')[0].setAttribute("class", "hello");

// button.addEventListener ("click", function() {
// alert('hi');
// });

// // Track users guesses
// document.addEventListener('keypress', (event) => {
//   let keys = event.keyCode;
//   let keyButtons = String.fromCharCode(keys);
//   // console.log(keyButtons)
//   // If user chooses correct letter
//   if (words.indexOf(keys) > -1) {
//     // console.log(true);
//     correctWords.push(keys);
//     // replace underscore with the right letter
//     underScore[words.indexOf(keys)] = keys;
//     underLines[0].textContent = underScore.join(' ');
//     // Checks to see if user word matches guesses
//     if (underScore.join('') === randomWords) {
//       alert('You Win!');
//     }
//   } else {
//     wrongWords.push(keys);
//   }
// });
