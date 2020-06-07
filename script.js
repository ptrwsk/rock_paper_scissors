function game() {
  let gameover = false;

  let numberSet = document.getElementById("maxRounds");
  // let numberSetBtn = document.getElementById("numberSetBtn");
  let maxRounds;

  // numberSetBtn.addEventListener("click", function (e) {
  //   maxRounds = numberSet.options[numberSet.selectedIndex].value;
  // });

  let computerScore = 0;
  let playerScore = 0;

  function computerPlay() {
    if (gameover == true) {
      return;
    }
    let max = 3;
    let min = 1;
    function randomWholeNumber() {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    switch (randomWholeNumber()) {
      case 1:
        opponentsChoice.classList.add('rockSelection')
        opponentsChoice.classList.remove('paperSelection')
        opponentsChoice.classList.remove('scissorsSelection')
        return "ROCK";
      case 2:
        opponentsChoice.classList.add('paperSelection')
        opponentsChoice.classList.remove('rockSelection')
        opponentsChoice.classList.remove('scissorsSelection')
        return "PAPER";
      case 3:
        opponentsChoice.classList.add('scissorsSelection')
        opponentsChoice.classList.remove('paperSelection')
        opponentsChoice.classList.remove('rockSelection')
        return "SCISSORS";
    }
  }

  function singleRound(playerSelection, computerSelection) {
    if (gameover == true) {
      return;
    }
    disclaimer.textContent= ""

    if (playerSelection == "ROCK") {
      
      if (computerSelection == "ROCK") {
        roundResult = "this round was a draw";
      } else if (computerSelection == "PAPER") {
        roundResult = "round lost";
      } else {
        roundResult = "round won";
      }
    }
    if (playerSelection == "PAPER") {
      
      if (computerSelection == "PAPER") {
        roundResult = "this round was a draw";
      } else if (computerSelection == "SCISSORS") {
        roundResult = "round lost";
      } else {
        roundResult = "round won";
      }
    }
    if (playerSelection == "SCISSORS") {
      
      if (computerSelection == "SCISSORS") {
        roundResult = "this round was a draw";
      } else if (computerSelection == "ROCK") {
        roundResult = "round lost";
      } else {
        roundResult = "round won";
      }
    }

    if (maxRounds == undefined) {
      maxRounds = numberSet.options[numberSet.selectedIndex].value;
    }

  
  let isGameOver = updateScore();
	if(isGameOver) {

    opponentsChoiceDisplay.textContent = `Opponent's choice:`
    opponentsChoice.textContent = `${computerSelection}`;
    scoreDisplay.textContent = `You = ${playerScore} Computer = ${computerScore}`;
    return;
  }

  opponentsChoiceDisplay.textContent = `Opponent's choice:`
  opponentsChoice.textContent = `${computerSelection}`;
  scoreDisplay.textContent = `You = ${playerScore} Computer = ${computerScore}`;
  // resultDisplay.textContent = roundResult;
    return roundResult;
  }
  const opponentsChoice = document.querySelector(".opponentsChoice");
  const opponentsChoiceDisplay = document.querySelector(".opponentsChoiceDisplay")
  const scoreDisplay = document.querySelector(".score");
  const resultDisplay = document.querySelector(".result");
  const reset = document.querySelector(".reset");
  const disclaimer= document.querySelector(".disclaimer");

  const rockBtn = document.querySelector("#rockBtn");
  const paperBtn = document.querySelector("#paperBtn");
  const scissorsBtn = document.querySelector("#scissorsBtn");
  const resetImg =  document.querySelector(".resetImg")

  reset.addEventListener("click", function (e) {
    

    resetImg.classList.add('resetclick');
    playerScore = 0;
    computerScore = 0;
    gameover = false;
    opponentsChoiceDisplay.textContent = "";
    opponentsChoice.textContent = "";
    scoreDisplay.textContent = `You = ${playerScore} Computer = ${computerScore}`;
    resultDisplay.textContent = "";
    resultDisplay.style.color = 'black';
    maxRounds = undefined
    numberSet.value = ""
    disclaimer.textContent = "Set a maximum score!"
    
    
  });
  reset.addEventListener("mouseout", function (e) {
    resetImg.classList.remove('resetclick')
  })

  

  rockBtn.addEventListener("click", function (e) {
    roundResult = singleRound("ROCK", computerPlay());
  });

  paperBtn.addEventListener("click", function (e) {
    roundResult = singleRound("PAPER", computerPlay());
  });

  scissorsBtn.addEventListener("click", function (e) {
    roundResult = singleRound("SCISSORS", computerPlay());
  });

  function updateScore() {
    if (roundResult == "round won") {
      playerScore += 1;
    } else if (roundResult == "round lost") {
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
