
var words = ["black christmas", "blood rage", "slumber party massacre", "sleepaway camp", "the burning", "friday the 13th", "scream 3", "suspiria", "the texas chainsaw massacre", "maniac"];
var word;
var answer;
var wins = 0;
var guessedLetters = [];
var guessesLeft;
var losses = 0;

function newGame(event) {
document.querySelector("#gameInfo").textContent = "Press any letter to begin..."
//random word from bank
word = words[Math.floor(Math.random() * words.length)];
//answer array
answer = [];

guessedLetters = [];
guessesLeft = 5;

console.log(word);
    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            answer.push(" ");
        } else {
            answer.push("_");

    }
    
    // DOM
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").textContent = `Losses: ${losses}`
    document.querySelector("#currentWord").textContent = answer.join("");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");


}
}

document.onkeyup = function (event) {
    document.querySelector("#gameInfo").textContent = "NOW PLAYING"

    if(event.keyCode >= 48 && event.keyCode <= 90) {
        var userGuess = event.key.toLowerCase();
    }

    //check if userGuess is in the word.
    var letterFound = false;
    for (var i = 0; i < word.length; i++) {

        if (word[i] === userGuess) {
            answer[i] = word[i];
            letterFound = true;

        }

    }

    if (letterFound === false && !guessedLetters.includes(userGuess) && event.keyCode >= 48 && event.keyCode <= 90) {
        guessedLetters.push(userGuess);
        guessesLeft--;
    }

    if (guessesLeft < 0) {
        losses++;
        document.querySelector("#gameInfo").textContent = "BOO! YOU LOSE!"
        guessesLeft = 0;
        setTimeout(newGame, 1500);
    }

    if (answer.join('') === word) {
        wins++;
        document.querySelector("#gameInfo").textContent = "NICE ONE... YOU WIN!"
        setTimeout(newGame, 1500);
    }

    document.querySelector("#currentWord").textContent = answer.join("");
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").textContent = `Losses: ${losses}`



}


document.addEventListener("DOMContentLoaded", newGame);

