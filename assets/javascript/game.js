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

document.onkeyup = function(event) {
    for (var i = 0; i < word.length; i++) {
        answer.push("_");
        
    }
    
// DOM
document.querySelector("#wins").innerHTML = wins;
document.querySelector("#currentWord").innerHTML = answer.join(" ");
document.querySelector("#guessesLeft").innerHTML = guessesLeft;
document.querySelector("#lettersGuessed").innerHTML += guessedLetters;

};