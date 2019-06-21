/*TODO
[ ] Check if I can see images online!
[ ] Vuelta a Saturno o nos quedamos en Urano?
*/ 

function HangmanCanvas() {
  this.canvas = document.getElementById('hangman')
  this.ctx = this.canvas.getContext('2d');
  this.width = this.canvas.width
  this.height = this.canvas.height
  this.secretWord = hangman.secretWord; //Should be the secret word
  this.ctx.strokeStyle = "white";
  this.ctx.fillStyle = "white";
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,this.width,this.height);
  // Image
  let img = new Image();
  img.src = "/starter_code/images/584c1afe1fc21103bb375ba2.png";
  img.onload = () => {
  this.ctx.drawImage(img, 100, -130,200,400)
};
};

HangmanCanvas.prototype.drawLines = function () {
  let startLineX = 300;
  let startLineY = 700;
  let lineWidth = 70;
  let lineSeparation = 20;

  for (let i = 0; i < this.secretWord.split("").length; i++) {
    
    this.ctx.save()
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo (startLineX,startLineY);
    this.ctx.lineTo(startLineX + lineWidth, startLineY);
    this.ctx.stroke();
    this.ctx.restore()
    startLineX += lineWidth + lineSeparation;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (e) {
  this.ctx.save()
  let letter= String.fromCharCode(e.keyCode).toLowerCase();
  let correctX = 300;
  let correctY = 690;
 
  this.ctx.font = "90px Arial";

  if (hangman.checkClickedLetters(letter)){
    if (this.secretWord.includes(letter)){
      this.ctx.fillText(letter.toUpperCase(), correctX, correctY);

    }
  }
  this.ctx.restore()

};

HangmanCanvas.prototype.writeWrongLetter = function (e, errorsLeft) {

  this.ctx.save()
  let letter= String.fromCharCode(e.keyCode).toLowerCase();
  let wrongX = 400;
  let wrongY= 200;

  this.ctx.font = "90px Arial";

  if (hangman.checkClickedLetters(letter)){
    if (!this.secretWord.includes(letter)){
      this.ctx.fillText(letter.toUpperCase(), wrongX, wrongY);
    } 
    this.ctx.restore()
  }
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};


