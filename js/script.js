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
   console.log('play rounds', playGame);
  /* Do play Game for 1 or 2 or 3 rounds */

  //result.innerHTML = 'You choose ' + input.value + ' rounds of game. Let s your move.'; 
  //if(input > 0 & input <= 3){
 // result = startGame();
 // } else {
 //   result.innerHTML = 'Your move is error. Try again and choose number of rounds beetwen 1-3.';
//  }

 // console.log('Number of rounds', startGame);
  
//};
/*function startGame(){
  startGameButton.addEventListener('click', input);
  if(oninput == 1 ^ oninput == 2 ^ oninput == 3){
  return main();
  } else {
    result.innerHTML = 'Your chose numbers of rounds is wrong. Try again';
  }
  console.log('you re clicked start button', startGame);
}
*/


/* create computer move*/
function determineComputerMove() {
  const buttons = ['stone', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  //console.log('It is: ' + randomNumber);
  return buttons[randomNumber];
}
//console.log(determineComputerMove());

/* create chooses who win, lose, and when it;s a draw or unknown move*/

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

/*create launch game*/

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

/* i can click on images and i can induce a function playGame*/

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

/*this function must to give me 0:0 on my scoreboard*/

/*resetGameButton = function resetGame(){
  userScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  console.log(resetGame, 'reset gry')
}*/

//function resetGame(){
 // resetGameButton.addEventListener('click', resetGame);
//  result.innerHTML = input == 0;
 // console.log('reset Game', resetGame);//
//};
const form = document.getElementById('placeToWriteNumber');
form.addEventListener('reset', function(e){
  const input = document.getElementById('reset-game');
  const value = input.value;
  input.value = '';
  
});






