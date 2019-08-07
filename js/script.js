const scissors = document.getElementById('scissors');
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('comp-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result p');
const fieldOfBody = document.querySelector('section'); //its add
//const unknowMove = document.getElementById.innerHTML('unknowMove'); // its add

function determineComputerMove() {
  const buttons = ['stone', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  //console.log('It is: ' + randomNumber);
  return buttons[randomNumber];
}
//console.log(determineComputerMove());

function win(userMove, computerMove) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  //console.log(userMove);
  //console.log(computerMove);
  result.innerHTML = userMove + "  beats  " + computerMove + ". You win!";
  //console.log('win');
}

function lose(userMove, computerMove) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  //console.log(userMove);
  //console.log(computerMove);
  result.innerHTML = userMove + "  loses  " + computerMove + ". You lost!";
  //console.log('lost');
  
}
function draw(userMove, computerMove) {
  //console.log(userMove);
  //console.log(computerMove);
  result.innerHTML = userMove + "  equals  " + computerMove + ". It is a draw!";
  //console.log('draw');
}
function unknowUserMove(userMove, computerMove) { //add
  result.innerHTML = "Wrong move. Try again. Good Luck."; //add
  //console.log (unknowUserMove);
}

function playGame(userMove) {

  //console.log('Look at ' + userMove)
  const computerMove = determineComputerMove();
  //console.log("user move is.. " + userMove);
  //console.log("comp move is.. " + computerMove);
  switch (userMove + computerMove) {
    case "stonescissors":
    case "paperstone":
    case "scissorspaper":
      win(userMove, computerMove);
      //console.log("User wins.");
      break;
    case "stonepaper":
    case "scissorsstone":
    case "paperscissors":
      //console.log("User lost.");
      lose(userMove, computerMove);
      break;
    case "stonestone":
    case "paperpaper":
    case "scissorsscissors":
      draw(userMove, computerMove);
     //console.log("It's a draw.");
      break;
      default:
        return unknowUserMove();
        console.log('it is unknow move' + unknowMove);
  }
}

function main() {
  stone.addEventListener('click', function() {
    playGame('stone');
    //console.log('You clicked stone.');
  })
  paper.addEventListener('click', function() {
    playGame('paper');
    //console.log('You clicked paper.');
  })
  scissors.addEventListener('click', function(){
    playGame('scissors');
    //console.log('You clicked scissors.');
  })
  fieldOfBody.addEventListener('click', function() { //add it
    playGame('unknowMove'); //add it
    //console.log('You clicked in body. Unknow move')
  })
}

main();