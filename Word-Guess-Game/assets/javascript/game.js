var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var wins = 0;
var losses = 0;
var guesses = 10;

var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuessSoFar = [];

console.log(computerGuess);

var winPoint = document.getElementById("wins");
var guessesLeft = document.getElementById("guessLeft");
var losePoint = document.getElementById("losses");
var guessSoFar = document.getElementById("guess-so-far");

function updateDisplays() {
    
    winPoint.textContent = wins;
    guessesLeft.textContent = guesses;
    losePoint.textContent = losses;
}

document.onkeyup = function(event) {

    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    guessSoFar.textContent = userGuessSoFar;

    if (userGuess == computerGuess) {

    wins++;
    guesses = 10;
    userGuessSoFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];

    } else {

        guesses--;

        if (guesses == 0) {
            losses++;
            userGuessSoFar = [];
            guesses = 10;
        }

    }

  updateDisplays();

}
