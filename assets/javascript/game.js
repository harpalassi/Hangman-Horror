// word bank

const words = [
  'black christmas',
  'blood rage',
  'slumber party massacre',
  'sleepaway camp',
  'the burning',
  'friday the 13th',
  'scream 3',
  'suspiria',
  'the texas chainsaw massacre',
  'maniac'
];

// data needed for gameplay logic
let word;
let answer;
let wins = 0;
let guessedLetters = [];
let guessesLeft;
let losses = 0;

//disables user input
const disableKeys = () => {
  document.onkeyup = function(e) {
    return false;
  };
};

//enables user input
const enableKeys = () => {
  document.onkeyup = function(e) {
    return true;
  };
};

//starts a new game
const newGame = event => {
  gamePlay();
  document.querySelector('h2').classList.remove('freefall');
  document.querySelector('#gameInfo').textContent =
    'Press any letter to play...';

  //prints a random word from word bank
  word = words[Math.floor(Math.random() * words.length)];

  answer = [];

  guessedLetters = [];
  guessesLeft = 5;

  console.log(word);

  //go through the word selected and print an underscore or space
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      answer.push(' ');
    } else {
      answer.push('_');
    }

    // printing stats to the DOM
    document.querySelector('#wins').innerHTML = wins;
    document.querySelector('#losses').textContent = `Losses: ${losses}`;
    document.querySelector('#currentWord').textContent = answer.join('');
    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
    document.querySelector('#lettersGuessed').innerHTML = guessedLetters.join(
      ', '
    );
  }
};

const gamePlay = () => {
  document.onkeyup = function(event) {
    document.querySelector('#gameInfo').textContent = 'NOW PLAYING';

    if (event.keyCode >= 48 && event.keyCode <= 90) {
      var userGuess = event.key.toLowerCase();
    }

    //check if userGuess is in the word.
    let letterFound = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === userGuess) {
        answer[i] = word[i];
        letterFound = true;
      }
    }

    if (
      letterFound === false &&
      !guessedLetters.includes(userGuess) &&
      event.keyCode >= 48 &&
      event.keyCode <= 90
    ) {
      guessedLetters.push(userGuess);
      guessesLeft--;
    }

    if (guessesLeft < 0) {
      losses++;
      document.querySelector('h2').classList.add('freefall');
      document.querySelector('#gameInfo').textContent = 'BOO! YOU LOSE!';
      disableKeys();
      guessesLeft = 0;
      setTimeout(newGame, 3000);
    }

    if (answer.join('') === word) {
      wins++;
      document.querySelector('h2').classList.add('freefall');
      document.querySelector('#gameInfo').textContent = 'NICE ONE... YOU WIN!';
      disableKeys();
      setTimeout(newGame, 3000);
    }

    document.querySelector('#currentWord').textContent = answer.join('');
    document.querySelector('#lettersGuessed').innerHTML = guessedLetters.join(
      ', '
    );
    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
    document.querySelector('#wins').innerHTML = wins;
    document.querySelector('#losses').textContent = `Losses: ${losses}`;
  };
};

document.addEventListener('DOMContentLoaded', newGame);
