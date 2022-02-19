// Our Functionality

let computerGuess;
let userGuess = [];
let userGuessNumber = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

let audio = new Audio('Audio/Hello.m4a');
audio.play;

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  console.log(computerGuess);
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("newGameButton").style.display = "none";
};


// Start Game
const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  // document.getElementById('newGameButton').style.display = "block";
};


// Start new game
const newGameBegin = () =>{
    audio.play();
    window.location.reload();
}
const startNewGame = () =>{
 document.getElementById('newGameButton').style.display = "inline";
 userNumberUpdate.setAttribute('disabled',true);
};

// logic Code
const compareGuess = () => {
    audio.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  if (userGuess.length < maxValue) {
    if (computerGuess < userNumber) {
      userGuessNumber.innerHTML = "Oops your Guesses is High 😯";
      userNumberUpdate.value = "";
    } else if (computerGuess > userNumber) {
      userGuessNumber.innerHTML = "Oops your Guesses is low 😌";
      userNumberUpdate.value = "";
    } else {
      userGuessNumber.innerHTML = "Hurry It's Correct 😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }else{
    if (computerGuess < userNumber) {
        userGuessNumber.innerHTML = `You loose !!! The correct number was ${computerGuess}`;
        startNewGame();
        userNumberUpdate.value = "";
      } else if (computerGuess > userNumber) {
        userGuessNumber.innerHTML = `You loose !!! The correct number was ${computerGuess}`;
        startNewGame();
        userNumberUpdate.value = "";
      } else {
        userGuessNumber.innerHTML = "Hurry It's Correct 😀";
        userNumberUpdate.value = "";
        startNewGame();
      }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

// Easy Mode

const easyMode = () => {
    audio.play();
  maxValue = 10;
  startGame();
};

//  Hard Mode

const hardMode = () => {
  maxValue = 5;
  audio.play();
  startGame();
};
