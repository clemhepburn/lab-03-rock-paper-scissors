// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { checkIfWon } from '../utils.js';

const test = QUnit.test;

test('if both are the same it should be a draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkIfWon('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
