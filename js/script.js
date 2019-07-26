{
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const stone = document.getElementById('stone');

scissors.addEventListener('click', function () {
	let userMove = 'scissors';
	const computerMove = determineComputerMove();
	const winner = result(userMove, computerMove);
	console.log(winner);
});

paper.addEventListener('click', function () {
	let userMove = 'paper';
	const computerMove = determineComputerMove();
	const winner = result(userMove, computerMove);
	console.log(winner);
});

stone.addEventListener('click', function () {
	let userMove = 'stone';
	const computerMove = determineComputerMove();
	const winner = result(userMove, computerMove);
	console.log(winner);
});

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

function result(userMove, computerMove) {
	console.log(userMove, computerMove);
	switch (userMove) {
		case 'scissors':
			switch (computerMove) {
				case 'scissors':
					return 'draw';
			
				case 'stone':
					return 'computer';
			
				case 'paper':
				return 'user';
			}
			break;
		case 'paper':
			switch (computerMove) {
				case 'scissors':
					return 'computer';
				
				case 'stone':
					return 'user';
				
				case 'paper':
					return 'draw';
			}
			break;
		case 'stone':
			switch (computerMove) {
				case 'paper':
					return 'computer'; 
					
				case 'stone':
					return 'draw';

				case 'scissors':
					return 'user';
			}
	}
}
}