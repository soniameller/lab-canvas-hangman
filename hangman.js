var hangman;
var game;

function Hangman() {
  this.words = ["FELIZ", "CUMPLE", "CABEZA", "DE", "ORINQUE"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetters = "";
  this.errorsLeft = 6;
}

Hangman.prototype.getWord = function() {
  randomIndex = Math.floor(Math.random() * this.words.length);
  this.secretWord =  this.words[randomIndex]; //Not in the test
  return this.words[randomIndex];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    // this.letters.push(String.fromCharCode(keyCode)); //Not in test
    return true;
  } else return false;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key)
};

Hangman.prototype.addCorrectLetter = function(i) {

  this.guessedLetters += this.secretWord.split("")[i];
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
  game.drawHangman();
  
  console.log("New Hangman created")
};

document.onkeydown = function(e) {
  if (hangman.checkIfLetter(e.keyCode)) {
    game.writeCorrectLetter(e);
    game.writeWrongLetter(e,/*errorsLeft*/);
    hangman.letters.push(String.fromCharCode(e.keyCode))
    
    console.log(e.keyCode);
  }
  game.drawHangman()
};

