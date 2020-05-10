function computerPlay () {
    let max = 3
    let min = 1
    function randomWholeNumber () {
       return Math.floor(Math.random() * (max - min + 1)) + min
    }
    switch (randomWholeNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;

    }
    
}

let playerSelection = (window.prompt("Choose rock, paper or scissors :)", ""))

function singleRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection = "rock") {
            return "It's a draw!"
        }
        else if (computerSelection = "paper") {
            return "Oopsie! You lost ;((("
        }
        else {
            return "YEAAH YOU WON!"
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection = "paper") {
            return "It's a draw!"
        }
        else if (computerSelection = "scissors") {
            return "Oopsie! You lost ;((("
        }
        else {
            return "YEAAH YOU WON!"
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection = "scissors") {
            return "It's a draw!"
        }
        else if (computerSelection = "rock") {
            return "Oopsie! You lost ;((("
        }
        else {
            return "YEAAH YOU WON!"
        }
    }

    
}
