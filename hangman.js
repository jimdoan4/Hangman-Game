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

// Choose word randomly
var correctWords = [];
var wrongWords = [];
// Check if user guess is right
var livesRemaining = 6;
var life = [];
var guess;
var inboxGuess;
var letters;
// Create underscores based on the length of the word
var underScore = [];


// DOM Manipulations

// var myLife = document.querySelector('#lives');

// Underscores for each length of words
function underline() {
  randomWords = words[Math.floor(Math.random() * words.length)];
  for (var i = 0; i < randomWords.length; i++) {
    underScore.push('_'); }
    // console.log(underScore);
    document.querySelector('underscores').textContent = underScore.join(' ');
    // life = [];
    // livesRemaining = 6 ;
    // // life.push("You have " + life + " life"); 
    // document.querySelector('#lives').textContent = "You have " 
    // + livesRemaining + " remaining!";
  }

  underline();

// Create Alphabet buttons
function alpha() {
  var newButtons = document.querySelector('.buttons');
  var lists = document.createElement('ul');
    // buttons.className = "buttons";
    for (var i = 0; i < alphabets.length; i++) {
      lists.className = 'alph-buttons';
      var btnListItems = document.createElement('li');
      btnListItems.className = 'alpha-buttons';
      btnListItems.textContent = alphabets[i];
      newButtons.appendChild(lists);
      lists.appendChild(btnListItems);
      }
    }  
    // button.innerHTML = el;
    // var body = document.querySelector('.buttons');
    // document.body.appendChild(button);
//   document.getElementByTagName('main')[0].setAttribute("class", "hello");
// button.addEventListener ("click", function() {
// alert('hi')
alpha();

  document.addEventListener("click", myFunction);
   function myFunction() {
        document.getElementById('alphabets').textContent = ('');
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

// create Category Lists 
// Show lives Remaining
// Hangman
// Start/Play button
// Reset button


















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













