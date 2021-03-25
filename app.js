// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { checkIfWon } from './utils.js';
const rockGuess = document.querySelector('rock');
const paperGuess = document.querySelector('paper');
const scissorsGuess = document.querySelector('scissors');
const goButton = document.getElementById('throw');
const resetButton = document.getElementById('reset');
const winDiv = document.getElementById('wins');
const loseDiv = document.getElementById('losses');
const drawDiv = document.getElementById('draws');
const totalDiv = document.getElementById('total');
const whoWonDiv = document.getElementById('what-happened');
// initialize state
let guesses = 0;
let wins = 0;
let losses = 0;
let total = 0;

// set event listeners to update state and DOM
goButton.addEventListener('click', () => {



});

resetButton.addEventListener('click', () => {


});