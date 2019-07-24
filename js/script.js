// let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const stone = document.getElementById('stone');

scissors.addEventListener('click', function () {
	let userMove = 'scissors';
	const computerMove = determineComputerMove();
	result(userMove, computerMove);
});

paper.addEventListener('click', function () {
	let userMove = 'paper';
	const computerMove = determineComputerMove();
	result(userMove, computerMove);
});

stone.addEventListener('click', function () {
	let userMove = 'stone';
	const computerMove = determineComputerMove();
	result(userMove, computerMove);
});

function result(playerMove, computerMove) {
	console.log(playerMove, computerMove);
}

function determineComputerMove() {
	const randomComputerMove = Math.floor(Math.random() * 3 + 1);
	switch (randomComputerMove) {
		case 1:
			return 'scissors';
		case 2:
			return 'paper';
		case 3:
			return 'stone';
	}
}
function displayResult(computerMove, playerMove) {
	console.log(computerMove, playerMove);
if (computerMove == 'stone' && playerMove == 'paper') {
	printMessage('You are winner!');
} else if (computerMove == 'paper' && playerMove == 'paper') {
	printMessage('The dead-heat. Try again');
} else if (computerMove == 'scissors' && playerMove == 'paper') {
	printMessage('You lost.');
} else if (computerMove == 'stone' && playerMove == 'scissors') {
	printMessage('You lost.');
} else if (computerMove == 'stone' && playerMove == 'stone') {
	printMessage('The dead-heat. Try again');
} else if (computerMove == 'paper' && playerMove == 'scissors'){
	printMessage('You are winner!');
} else if (computerMove == 'paper' && playerMove == 'stone') {
	printMessage('You lost.');
} else if (computerMove == 'scissors' && playerMove == 'scissors') {
	printMessage('The dead-heat. Try again');
} else if (computerMove == 'scissors' && playerMove == 'stone') {
	printMessage('You are winner!');
} else { 
	printMessage('Unknown move');
}

return playerMove;
}


