// the choices the computer can make and the user can guess.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting for zero
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterUser = [];
var eachofLetters = null;

//Opens up a prompt befor the game begins and introduces the game and asks the user their name.

var myName = "Sally"
var yourName = prompt  ("What is your name?");
alert("Hello " + yourName + ", My name is " + myName + ". Welcome to my Psychic Letter Guessing Game, please click ok and choose a letter from the keyboard!");


// Sets the variable for computerGuess to a random choice from the computerChoice array above.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 10;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// the following will run when the user presses a key.
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };