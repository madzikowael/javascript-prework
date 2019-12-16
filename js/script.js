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
let minRounds = 1;
let input = document.getElementById('input');
const resetGameButton = document.getElementById('reset-game');
const startGameButton = document.getElementById('start-game');
let value = input.value;

/*choose numbers of round in current game*/
input.oninput = function(e) {
  input.addEventListener('keypress', function(evt){
    event.preventDefault();
      if(input.value > 0  && input.value <= 3){
        return evt;
      }
      else {
        result.innerHTML = "Wrong number, try again";
      }
     });

};
// /* function with 1 or 2 or 3 rounds to play Game*/
// const playCompleteGame = function(){
//    if(value == 1){
//      return playGame;
//     } 
//    if(value == 2){
//     return playGame;
//    }
//    if(value == 3){
//     return playGame;
//    } else if (value <= 0 && value >= 4)
//     result.innerHTML = "Wrong number of rounds"
//    }




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

/* button reset give me null input.value*/

const form = document.getElementById('placeToWriteNumber');
  form.addEventListener('reset', function(e){
    const input = document.getElementById('reset-game');
    input.value = 'Reset';
  
});

// const clearButton = function(userScoreSpan, computerScoreSpan){
  
// clearButton.getElementById('clear-button');

//   form.addEventListener('clear-button', function(event){
//     event.preventDefault();
  
//     clearButton.addEventListener('click', function(){
//       return(userScoreSpan = 0 && computerScoreSpan = 0 )
//       });
//   });
// };

// clearButton();

// playCompleteGame();



