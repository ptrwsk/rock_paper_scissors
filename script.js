function computerPlay() {
    let max = 3
    let min = 1
    function randomWholeNumber() {
       return Math.floor(Math.random() * (max - min + 1)) + min
    }
    switch (randomWholeNumber()) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";

    }
    
}

let playerSelection = window.prompt("Choose rock, paper or scissors :)", "")

const computerSelection = computerPlay()

function singleRound (playerSelection, computerSelection) {
    let newPlayerSelection = playerSelection.toLowerCase();

    if (newPlayerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a draw!"
        }
        else if (computerSelection == "paper") {
            return "Oopsie! You lost ;((("
        }
        else {
            return "YEAAH YOU WON!"
        }
    }
    if (newPlayerSelection == "paper") {
        if (computerSelection == "paper") {
            return "It's a draw!"
        }
        else if (computerSelection == "scissors") {
            return "Oopsie! You lost ;((("
        }
        else {
            return "YEAAH YOU WON!"
        }
    }
    if (newPlayerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return "It's a draw!"
        }
        else if (computerSelection == "rock") {
            return "Oopsie! You lost ;((("
        }
        else {
            return "YEAAH YOU WON!"
        }
    }

    
}

console.log(singleRound (playerSelection, computerSelection))

//function game()

