/*TODO
[ ] Check if I can see images online!
[ ] Get the game online!
[ ] Cuando limpio el canvas sin refresh se limpian las letras incorrectas pero sigue escribiendo con la x cambiada 
[ ] check how to remove lives


[ ] Vuelta a Saturno o nos quedamos en Urano?
*/

function HangmanCanvas() {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.secretWord = hangman.secretWord; //Should be the secret word
  this.ctx.strokeStyle = "white";
  this.ctx.fillStyle = "white";
  this.wrongX = 400;
  this.wrongY = 200;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
  // Image
  let img = new Image();
  img.src = "images/584c1afe1fc21103bb375ba2.png";
  img.onload = () => {
    this.ctx.drawImage(img, 100, -130, 200, 400);
  };
};

HangmanCanvas.prototype.drawLines = function() {
  this.ctx.save();

  let startLineX = 300;
  let startLineY = 700;
  let lineWidth = 70;
  let lineSeparation = 20;
  for (let i = 0; i < this.secretWord.split("").length; i++) {
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(startLineX, startLineY);
    this.ctx.lineTo(startLineX + lineWidth, startLineY);
    this.ctx.stroke();
    startLineX += lineWidth + lineSeparation;
  }
  this.ctx.restore();
};

HangmanCanvas.prototype.writeCorrectLetter = function(e) {
  this.ctx.save();
  let letter = String.fromCharCode(e.keyCode);
  let correctX = 300;
  let correctY = 690;
  let xDifference = 90;

  this.ctx.font = "90px Arial";

  if (hangman.checkClickedLetters(letter)) {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i].includes(letter)) {
        if (i === 0) this.ctx.fillText(letter, correctX, correctY);
        else if (i === 1)
          this.ctx.fillText(letter, correctX + xDifference, correctY);
        else if (i === 2)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 3)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 4)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 5)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 6)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 7)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 8)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 9)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 10)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 11)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
        else if (i === 12)
          this.ctx.fillText(letter, correctX + xDifference * i, correctY);
      }
    }
  }
  this.ctx.restore();
};

// Change this variables to a place they work but that would refresh when there is a new word


HangmanCanvas.prototype.writeWrongLetter = function(e, errorsLeft) {
  this.ctx.save();

  let letter = String.fromCharCode(e.keyCode);
  console.log(letter);

  this.ctx.restore();
  this.ctx.font = "90px Arial";

  if (hangman.checkClickedLetters(letter)) {
    if (!this.secretWord.includes(letter)) {
      hangman.addWrongLetter(letter)
      this.ctx.fillText(letter, this.wrongX, this.wrongY);
      this.wrongX += 80;
      console.log(this.wrongX);
    }
  }

  this.ctx.restore();
};

HangmanCanvas.prototype.drawHangman = function(/*shape */) {
  let x = -70;
  let y = 80;

  if (hangman.errorsLeft < 6) {
    let head = new Image();
    head.src = "images/cabeza.png";
    head.onload = () => {
      this.ctx.drawImage(head, x, y);
    };
  }
  if (hangman.errorsLeft < 5) {
    let body = new Image();
    body.src = "images/torso.png";
    body.onload = () => {
      this.ctx.drawImage(body, x, y);
    };
  }
  if (hangman.errorsLeft < 4) {
    let rightArm = new Image();
    rightArm.src = "images/brazoDerecho.png";
    rightArm.onload = () => {
      this.ctx.drawImage(rightArm, x, y);
    };
  }
  if (hangman.errorsLeft < 3) {
    let leftArm = new Image();
    leftArm.src = "images/brazoIzquierdo.png";
    leftArm.onload = () => {
      this.ctx.drawImage(leftArm, x, y);
    };
  }
  if (hangman.errorsLeft < 2) {
    let rightLeg = new Image();
    rightLeg.src = "images/piernaDer.png";
    rightLeg.onload = () => {
      this.ctx.drawImage(rightLeg, x, y);
    };
  }
  if (hangman.errorsLeft < 1) {
    let leftLeg = new Image();
    leftLeg.src = "images/PiernaIzquierda.png";
    leftLeg.onload = () => {
      this.ctx.drawImage(leftLeg, x, y);
    };
  }
};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
