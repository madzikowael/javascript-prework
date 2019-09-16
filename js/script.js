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
let maxRounds = 0;
let minRounds = 0;
let input = document.getElementById('input');
const resetGameButton = document.getElementById('reset-game');
const startGameButton = document.getElementById('start-game');
let value = input.value;

/*choose numbers of round in current game*/
input.oninput = function(e) {
  input.addEventListener('keypress', function(evt){
      if(input.value > 0  && input.value <= 3){
        return evt;
      }
      else {
        result.innerHTML = "Wrong number, try again";
      }
     });

};
/* function with 1 or 2 or 3 rounds to play Game*/
const playCompleteGame = function(userScore, computerScore){
   if(value == 1){
     userScore == 1 && computerScore == 0;
     return result.innerHTML = "User is winner" + userScore + ': ' + computerScore;
   } else if(value == 1){
     userScore == 1 && computerScore == 1;
     return result.innerHTML = "It s a draw" + userScore + ': ' + computerScore;
   } else if(value == 1){
     userScore == 0 && computerScore == 1;
     return result.innerHTML = "Computer is winner" + userScore + ': ' + computerScore;
   }
   if(value == 2){
     userScore == 2 && computerScore == 0 ^ computerScore == 1;
     return result.innerHTML = "User is winner" + userScore + ': ' + computerScore;
   } else if(value == 2){
     userScore == 1 ^ userScore == 0 && computerScore == 2;
     return result.innerHTML = "Computer is winner" + userScore + ': ' + computerScore;
   } else if(value == 2){
     userScore == 2 && computerScore == 2;
     return result.innerHTML = "It s a draw" + userScore + ': ' + computerScore;
   }
   if(value == 3){
     userScore == 3 && computerScore == 3;
     return result.innerHTML = "It s a draw" + userScore + ': ' + computerScore;
   } else if(value == 3){
     userScore == 3 && computerScore == 0 ^ computerScore == 1 ^ computerScore == 2;
     return result.innerHTML = "User is winner" + userScore + ': ' + computerScore;
   } else if( value == 3){
     userScore == 0 ^ userScore == 1 ^ userScore == 2 &&  computerScore == 3;
     return result.innerHTML = "Computer is winner" + userScore + ': ' + computerScore;
   }
   }
   //console.log('play rounds', playGame);

playCompleteGame();

/* create computer move*/
function determineComputerMove() {
  const buttons = ['stone', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

  return buttons[randomNumber];
}


/* create chooses who win, lose, and when it;s a draw or unknown move*/

function userWin(userMove, computerMove) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  
  result.innerHTML = userMove + "  beats  " + computerMove + ". You win!";
  
}

function computerWin(userMove, computerMove) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  
  result.innerHTML = userMove + "  loses  " + computerMove + ". You lost!";
    
}
function draw(userMove, computerMove) {
  result.innerHTML = userMove + "  equals  " + computerMove + ". It is a draw!";
  
}
function unknowUserMove(userMove, computerMove) { 
  result.innerHTML = "Wrong move. Try again. Good Luck."; 
  
}

/*create one launch game*/

function playGame(userMove) {

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

function main() {
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

/* button reset give me null input.value*/

const form = document.getElementById('placeToWriteNumber');
  form.addEventListener('reset', function(e){
    const input = document.getElementById('reset-game');
    const value = input.value;
    input.value = '';
  
});






