let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove ='papier';
} else if (randomNumber ==3) {
	computerMove ='nożyczki';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove ='papier';
} else if (randomNumber ==3) {
	computerMove ='nożyczki';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {printMessage('Ty wygrywasz');
} else if (computerMove == 'kamień' && playerMove == 'nożyczki') {printMessage('Komputer wygrywa');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {printMessage('Remis!');
} else if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {printMessage('brak/błędna wartość');
} else if (computerMove == 'papier' && playerMove == 'papier') {printMessage('Remis !');
} else if (computerMove == 'papier' && playerMove == 'nożyczki') {printMessage('Ty wygrywasz');
} else if (computerMove == 'papier' && playerMove == 'kamień') {printMessage('Komputer wygrywa');
} else if (computerMove == 'papier' && playerMove == 'nieznany ruch') {printMessage('brak/błędna wartość');
} else if (computerMove == 'nożyczki' && playerMove == 'papier') {printMessage('Komputer wygrywa');
} else if (computerMove == 'nożyczki' && playerMove == 'nożyczki') {printMessage('Remis !');
} else if (computerMove == 'nożyczki' && playerMove == 'kamień') {printMessage('Ty wygrywasz');
} else if (computerMove == 'nożyczki' && playerMove == 'nieznany ruch') {printMessage('brak/błędna wartość');
}