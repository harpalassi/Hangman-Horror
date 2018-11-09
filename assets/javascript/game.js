
var words = ["halloween", "scream", "suspiria", "carrie", "hellraiser", "poltergeist", "psycho", "maniac"];
var word;
var answer;
var wins = 0;
var guessedLetters = [];
var guessesLeft;
//run this function when page start to load underscores

function newGame(event) {

//random word from bank
word = words[Math.floor(Math.random() * words.length)];
//answer array
answer = [];

guessedLetters = [];
guessesLeft = 10;

console.log(word);
    for (var i = 0; i < word.length; i++) {
        answer.push("_");

    }
    //run this when user presses a key to log the key. 
    
    // DOM
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#currentWord").innerHTML = answer.join(" ");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");


}

document.onkeyup = function (event) {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
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


    if (letterFound === false && !guessedLetters.includes(userGuess)) {
        guessedLetters.push(userGuess);
        guessesLeft--;
    }

    if (guessesLeft < 0) {
        alert("BOO! YOU LOSE!");
        guessesLeft = 10;
        newGame();
    }

    if (answer.join('') === word) {
        wins++;
        // alert("You Win")
        setTimeout(newGame, 500);
    }

    document.querySelector("#currentWord").innerHTML = answer.join(" ");
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#wins").innerHTML = wins;


}


document.addEventListener("DOMContentLoaded", newGame);