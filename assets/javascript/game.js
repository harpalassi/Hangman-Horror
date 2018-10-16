                     //game variables
//word bank
var words = ["halloween", "scream", "suspiria", "carrie", "psycho", "hellraiser"];
//random word from bank
var word = words[Math.floor(Math.random() * words.length)];
//answer array
var answer = [];

var wins = 0;
var guessedLetters = [];
var guessesLeft = 12;



document.onkeyup = function(event) {
    for (var i = 0; i < word.length; i++) {
        answer[i] = " _";
    }
    

document.querySelector("#wins").innerHTML =  wins;
document.querySelector("#currentWord").innerHTML = answer;
document.querySelector("#guessesLeft").innerHTML = guessesLeft;
document.querySelector("#lettersGuessed").innerHTML += guessedLetters;

};