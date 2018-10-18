//word bank
var words = ["halloween", "scream", "suspiria", "carrie", "psycho", "hellraiser"];
//random word from bank
var word = words[Math.floor(Math.random() * words.length)];
//answer array
var answer = [];

var wins = 0;
var guessedLetters = [];
var guessesLeft = 12;

console.log(word);

document.addEventListener("DOMContentLoaded", function(event) { 


    for (var i = 0; i < word.length; i++) {
        answer.push("_");
        
    }

    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(event.key);
}    
    
// DOM
document.querySelector("#wins").innerHTML = wins;
document.querySelector("#currentWord").innerHTML = answer.join(" ");
document.querySelector("#guessesLeft").innerHTML = guessesLeft;
document.querySelector("#lettersGuessed").innerHTML += guessedLetters;

});