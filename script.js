function game() {
  let gameover = false;

  let numberSet = document.getElementById("maxRounds");
  let numberSetBtn = document.getElementById("numberSetBtn");
  let maxRounds;

  numberSetBtn.addEventListener("click", function (e) {
    maxRounds = numberSet.options[numberSet.selectedIndex].value;
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

    if (maxRounds == undefined) {
      maxRounds = numberSet.options[numberSet.selectedIndex].value;
    }

  
  let isGameOver = updateScore();
	if(isGameOver) {

    opponentsChoice.textContent = `Your opponent's choice was ${computerSelection}`;
    scoreDisplay.textContent = `Your score = ${playerScore} Computer's score 
	= ${computerScore}`;
    return;
  }

  opponentsChoice.textContent = `Your opponent's choice was ${computerSelection}`;
  scoreDisplay.textContent = `Your score = ${playerScore} Computer's score 
= ${computerScore}`;
  resultDisplay.textContent = roundResult;
    return roundResult;
  }
  const opponentsChoice = document.querySelector(".opponentsChoice");
  const scoreDisplay = document.querySelector(".score");
  const resultDisplay = document.querySelector(".result");
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
    resultDisplay.style.color = 'black';
    maxRounds = undefined
    
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
    if (computerScore >= maxRounds || playerScore >= maxRounds) {
      if (computerScore > playerScore) {
		resultDisplay.textContent = "Sorry...you lost the game";
    resultDisplay.style.color = "red";
      } else if (playerScore > computerScore) {
        resultDisplay.textContent = "You WON the game!";
        resultDisplay.style.color = "green";
      } else {
        resultDisplay.textContent = "The game was a draw";
        resultDisplay.style.color = "gray";
      }
	  gameover = true;
	  return gameover =true
    }
  }
}

game();
