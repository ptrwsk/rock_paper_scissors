function game() {

	let computerScore = 0;
	let playerScore = 0;

	for (let i = 0; i < 5; i++) {

		function computerPlay() {
			let max = 3;
			let min = 1;
			function randomWholeNumber() {
				return Math.floor(Math.random() * (max - min + 1)) + min;
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

		let playerSelection = window.prompt("Choose rock, paper or scissors :)", "");
		while ((playerSelection == null) || (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors")) {
			playerSelection = window.prompt("Check your spelling (choose rock, paper or scissors)", "");
		}

		const computerSelection = computerPlay();
		function singleRound(playerSelection, computerSelection) {
			let newPlayerSelection = playerSelection.toLowerCase();

			if (newPlayerSelection == "rock") {
				if (computerSelection == "rock") {
					return "It's a draw!";
				}
				else if (computerSelection == "paper") {
					return "Oopsie! You lost ;(((";
				}
				else {
					return "YEAAH YOU WON!";
				}
			}
			if (newPlayerSelection == "paper") {
				if (computerSelection == "paper") {
					return "It's a draw!";
				}
				else if (computerSelection == "scissors") {
					return "Oopsie! You lost ;(((";
				}
				else {
					return "YEAAH YOU WON!";
				}
			}
			if (newPlayerSelection == "scissors") {
				if (computerSelection == "scissors") {
					return "It's a draw!";
				}
				else if (computerSelection == "rock") {
					return "Oopsie! You lost ;(((";
				}
				else {
					return "YEAAH YOU WON!";
				}
			}

		}
		if (singleRound(playerSelection, computerSelection) == "YEAAH YOU WON!") {
			playerScore = playerScore + 1;

		}
		else if (singleRound(playerSelection, computerSelection) == "Oopsie! You lost ;(((") {
			computerScore = computerScore + 1;
		}
		else {
			computerScore = computerScore;
			playerScore = playerScore;
		}
		console.log(`Your score = ${playerScore} Computer's score = ${computerScore}`)
	}
	if (playerScore > computerScore) {
		return computerScore, "You WON the game!";
	} else if (playerScore < computerScore) {
		return "Sorry...you lost the game";
	} else {
		return "The game was a draw";
	}
}


console.log(game())



