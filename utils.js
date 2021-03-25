export function checkIfWon(user, computer) {
    if (user === computer) {
        return 'draw';
    }
    else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    }
    else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    }
    else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }
    else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    }
    else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    }
    else if (player === 'paper' && computer === 'rock') {
        return 'win';
    }

}