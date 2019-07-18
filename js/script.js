function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
playerMove = `papier`;
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
