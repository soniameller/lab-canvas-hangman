var hangman;
var game;

let index = -1

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}


function Hangman() {
  this.words = ["FELIZ", "CUMPLE", "CABEZA", "DE", "ORINQUE"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetters = "";
  this.errorsLeft = 6; //This should be 6
}

Hangman.prototype.getWord = function() {
  // randomIndex = Math.floor(Math.random() * this.words.length);
  index = (index+1) % this.words.length
  this.secretWord =  this.words[index]; //Not in the test
  return this.words[index];
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
  if (this.errorsLeft <= 0) {
    index -= 1;
    return true;
  }
  else return false;
};

Hangman.prototype.checkWinner = function() {
  if (this.secretWord.length === this.guessedLetters.length) {
    return true;
  } else return false;
};


//-----------------------START GAME---------------------------
document.getElementById("start-game-button").onclick = function() {

  openFullscreen()

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
  game.gameOver();
  game.winner();
};

