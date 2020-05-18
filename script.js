function game() {
  let gameover = false;

  let numberSet = document.getElementById("numberOfPoints");
  let numberSetBtn = document.getElementById("numberSetBtn");
  let numberOfPoints;

  numberSetBtn.addEventListener("click", function (e) {
    numberOfPoints = numberSet.options[numberSet.selectedIndex].value;
  });

  let computerScore = 0;
  let playerScore = 0;

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

  function singleRound(playerSelection, computerSelection) {
    if (gameover == true) {
      return;
    }

    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        roundResult = "This round is a draw!";
      } else if (computerSelection == "paper") {
        roundResult = "Oopsie! You lost this round ;(((";
      } else {
        roundResult = "YEAAH YOU WON this round!";
      }
    }
    if (playerSelection == "paper") {
      if (computerSelection == "paper") {
        roundResult = "This round is a draw!";
      } else if (computerSelection == "scissors") {
        roundResult = "Oopsie! You lost this round ;(((";
      } else {
        roundResult = "YEAAH YOU WON this round!";
      }
    }
    if (playerSelection == "scissors") {
      if (computerSelection == "scissors") {
        roundResult = "This round is a draw!";
      } else if (computerSelection == "rock") {
        roundResult = "Oopsie! You lost this round ;(((";
      } else {
        roundResult = "YEAAH YOU WON this round!";
      }
    }

    updateScore();

    opponentsChoice.textContent = `Your opponents choice was ${computerSelection}`;
    scoreDisplay.textContent = `Your score = ${playerScore} Computer's score 
	= ${computerScore}`;
    resultDisplay.textContent = roundResult;
    return roundResult;
  }
  const opponentsChoice = document.querySelector(".opponentsChoice");
  const scoreDisplay = document.querySelector(".score");
  const resultDisplay = document.querySelector(".result");
  const winner = document.querySelector(".winner");
  const reset = document.querySelector(".reset");

  const rockBtn = document.querySelector("#rockBtn");
  const paperBtn = document.querySelector("#paperBtn");
  const scissorsBtn = document.querySelector("#scissorsBtn");

  reset.addEventListener("click", function (e) {
    playerScore = 0;
    computerScore = 0;
    gameover = false;
    opponentsChoice.textContent = "";
    scoreDisplay.textContent = `Your score = ${playerScore} Computer's score 
	= ${computerScore}`;
    resultDisplay.textContent = "";
    winner.textContent = "";
  });

  rockBtn.addEventListener("click", function (e) {
    roundResult = singleRound("rock", computerPlay());
  });

  paperBtn.addEventListener("click", function (e) {
    roundResult = singleRound("paper", computerPlay());
  });

  scissorsBtn.addEventListener("click", function (e) {
    roundResult = singleRound("scissors", computerPlay());
  });

  function updateScore() {
    if (roundResult == "YEAAH YOU WON this round!") {
      playerScore += 1;
    } else if (roundResult == "Oopsie! You lost this round ;(((") {
      computerScore += 1;
    } else {
      computerScore = computerScore;
      playerScore = playerScore;
    }
    if (computerScore >= numberOfPoints || playerScore >= numberOfPoints) {
      if (computerScore > playerScore) {
		winner.textContent = "Sorry...you lost the game";
		winner.style.color = "red";
      } else if (playerScore > computerScore) {
		winner.textContent = "You WON the game!"
		winner.style.color = "green";
      } else {
		winner.textContent = "The game was a draw";
		winner.style.color = "gray";
      }
      gameover = true;
    }
  }
}

game();
