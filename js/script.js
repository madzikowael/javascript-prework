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

/* create computer move*/
 const determineComputerMove = function() {
  const buttons = ['stone', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  return buttons[randomNumber];
}
/* create chooses who win, lose, and when it;s a draw or unknown move*/

const userWin = function(userMove, computerMove) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  
  result.innerHTML = userMove + "  beats  " + computerMove + ". You win!";
}

const computerWin = function(userMove, computerMove) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  
  result.innerHTML = userMove + "  loses  " + computerMove + ". You lost!";
}

const draw = function(userMove, computerMove) {
  result.innerHTML = userMove + "  equals  " + computerMove + ". It is a draw!";
}
const unknowUserMove = function(userMove, computerMove) { 
  result.innerHTML = "Wrong move. Try again. Good Luck."; 
}

/*create one launch game*/

const playGame = function(userMove) {

  const computerMove = determineComputerMove();
  
  switch (userMove + computerMove) {
    case "stonescissors":
    case "paperstone":
    case "scissorspaper":
      userWin(userMove, computerMove);
      
      break;
    case "stonepaper":
    case "scissorsstone":
    case "paperscissors":
      
      computerWin(userMove, computerMove);
      break;
    case "stonestone":
    case "paperpaper":
    case "scissorsscissors":
      draw(userMove, computerMove);
     
      break;
      default:
        return unknowUserMove();
        
  }
}

/* i can click on images and i can induce a function playGame*/

const main = function() {
  stone.addEventListener('click', function() {
    playGame('stone');
  })
  paper.addEventListener('click', function() {
    playGame('paper');
  })
  scissors.addEventListener('click', function(){
    playGame('scissors');
  })
  fieldOfBody.addEventListener('click', function() { 
    playGame('unknowMove'); 
  })
}

main();

