//word bank
var words = ["halloween", "scream", "suspiria", "carrie", "hellraiser"];
//random word from bank
var word = words[Math.floor(Math.random() * words.length)];
//answer array
var answer = [];

var wins = 0;
var guessedLetters = [];
var guessesLeft = 12;

console.log(word);

//run this function when page start to load underscores
document.addEventListener("DOMContentLoaded", function(event) { 


    for (var i = 0; i < word.length; i++) {
        answer.push("_");
        
    }
//run this when user presses a key to log the key. 
    document.onkeyup = function(event) {
        var userGuess = event.key;
        

//check if userGuess is in the word.
    var letterFound = false;
    for (var i = 0; i < word.length; i++) {
   
     if (word[i] === userGuess) {
        answer[i] = word[i];
        letterFound = true;
        
    }


    //   console.log(userGuess);      
     } 


    if (letterFound === false) {
        guessedLetters.push(userGuess);
    }
        




     document.querySelector("#currentWord").innerHTML = answer.join(" ");
     document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");



   //check if userGuess is not in word. 
//   if (word.indexOf(userGuess) < -1) {
//        guessedLetters.push(userGuess);
    
   
   
}    
    
// DOM
document.querySelector("#wins").innerHTML = wins;
document.querySelector("#currentWord").innerHTML = answer.join(" ");
document.querySelector("#guessesLeft").innerHTML = guessesLeft;
document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");

});