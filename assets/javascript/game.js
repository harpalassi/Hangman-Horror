                     //game variables
//word bank
var words = ["halloween", "scream", "suspiria", "carrie", "psycho", "hellraiser"];
//random word from bank
var word = words[Math.floor(Math.random() * words.length)];
//empty answer array
var underscores = [];
// variables
var wins = 0;
var guessedLetters = [];
var guessesLeft = 12;

console.log(word);

//creates underscores for length of random word

function newWord () {
    for (var i = 0; i < word.length; i++) {
        underscores.push("_")
    }
    return underscores; 
}

console.log(newWord());

//get the users guesses
document.addEventListener("keypress", function(event) {
    var keyword = String.fromCharCode(event.keyCode);

    //if users guess is right
    if (word.indexOf(keyword) > -1 ) {
        console.log(true);
    }
});
    



    

// document.querySelector("#wins").innerHTML =  wins;
// document.querySelector("#currentWord").innerHTML = underscores;
// document.querySelector("#guessesLeft").innerHTML = guessesLeft;
// document.querySelector("#lettersGuessed").innerHTML += guessedLetters;

