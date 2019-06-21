var hangman;
var game;

function Hangman() {
  this.words = ["feliz", "cumple", "cabeza", "de", "orinque"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetters = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  randomIndex = Math.floor(Math.random() * this.words.length);
  this.secretWord =  this.words[randomIndex].toLowerCase(); //Not in the test
  return this.words[randomIndex];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    this.letters.push(String.fromCharCode(keyCode)); //Not in test
    return true;
  } else return false;
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (this.letters.includes(key)) return false;
  else return true;
};

Hangman.prototype.addCorrectLetter = function(i) {

  this.guessedLetters += this.secretWord.split("")[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
    this.errorsLeft -- 
    return letter
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft <= 0) return true;
  else return false;
};

Hangman.prototype.checkWinner = function() {
  if (this.secretWord.length === this.guessedLetters.length) {
    return true;
  } else return false;
};


//-----------------------START GAME---------------------------
document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.getWord()

  game = new HangmanCanvas();
  game.createBoard();
  game.drawLines();
  
  console.log("New Hangman created")
};

document.onkeydown = function(e) {
  game.writeCorrectLetter(e);
  game.writeWrongLetter(e,/*errorsLeft*/);

  console.log(e.keyCode);
};

