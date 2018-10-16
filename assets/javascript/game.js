                     //game variables
//word bank
var words = ["halloween", "scream", "suspiria", "carrie", "psycho", "hellraiser"];
//random word from bank
var word = words[Math.floor(Math.random() * words.length)];
//answer array
var answer = [];

var wins;
var guessedLetters;
var guessesLeft = 12;


for (var i = 0; i < word.length; i++) {
    answer[i] = "_";
}

document.onkeyup = function(event) {


document.querySelector("#wins").innerHTML =  wins;
document.querySelector("#currentWord").innerHTML = word;
document.querySelector("#guessesLeft").innerHTML = guessesLeft;
document.querySelector("#lettersGuessed").innerHTML += guessedLetters;

};