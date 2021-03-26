// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { checkIfWon } from './utils.js';

const goButton = document.getElementById('throw');
const resetButton = document.getElementById('reset');
const winDiv = document.getElementById('wins');
const loseDiv = document.getElementById('losses');
const drawDiv = document.getElementById('draws');
const totalDiv = document.getElementById('total');
const whoWonDiv = document.getElementById('what-happened');

// initialize state
const initState = {

    'wins': 0,
    'losses': 0,
    'draws': 0,
    'total': 0
};

// set event listeners to update state and DOM
goButton.addEventListener('click', () => {
    const userSelection = document.querySelector('input:checked');

    let computerThrow = getRandomThrow();
    let userThrow = userSelection.value;
    let whoWon = checkIfWon(userThrow, computerThrow);

    if (whoWon === 'win') {
        initState['wins']++;
        initState['total']++;
        winDiv.textContent = 'Wins: ' + initState['wins'];
        totalDiv.textContent = 'Total: ' + initState['total'];
        whoWonDiv.textContent = 'You won! Computer threw ' + computerThrow + '!';

    } else if (whoWon === 'draw') {
        initState['draws']++;
        drawDiv.textContent = 'Draws: ' + initState['draws'];
        totalDiv.textContent = 'Total: ' + initState['total'];
        whoWonDiv.textContent = 'A draw!';
    } else {
        initState['losses']++;
        loseDiv.textContent = 'Losses: ' + initState['losses'];
        whoWonDiv.textContent = 'You lost. Computer threw ' + computerThrow + '.';
    }

});

resetButton.addEventListener('click', () => {

    winDiv.textContent = 'Wins: 0';
    loseDiv.textContent = 'Losses: 0';
    drawDiv.textContent = 'Draws: 0';
    totalDiv.textContent = 'Total: 0';
    whoWonDiv.textContent = ' ';


});