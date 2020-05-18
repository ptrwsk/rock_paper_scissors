function game() {
	let gameover = false
	

	let numberSet = document.getElementById("numberOfPoints")
	let numberSetBtn = document.getElementById("numberSetBtn")
	let numberOfPoints

	numberSetBtn.addEventListener('click', function (e) {
	  numberOfPoints = numberSet.options[numberSet.selectedIndex].value
		console.log(numberOfPoints)
	})
	
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
  console.log(computerPlay())
 
  
  function singleRound(playerSelection, computerSelection) {
	console.log(gameover)
    if (gameover == true){
		if (computerScore > playerScore){
			resultDisplay.textContent = "Sorry...you lost the game"
		} else if (playerScore > computerScore){
			resultDisplay.textContent = "You WON the game!"
		} else {
			resultDisplay.textContent = "The game was a draw"
		} return
	}
    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        roundResult = "This round is a draw!";
      } else if (computerSelection == "paper") {
        roundResult =  "Oopsie! You lost this round ;(((";
      } else {
        roundResult = "YEAAH YOU WON this round!";
      }
    }
    if (playerSelection == "paper") {
      if (computerSelection == "paper") {
        roundResult = "This round is a draw!";
      } else if (computerSelection == "scissors") {
		
        roundResult =  "Oopsie! You lost this round ;(((";
      } else {
        roundResult =  "YEAAH YOU WON this round!";
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
	console.log(numberOfPoints)
	updateScore()

	opponentsChoice.textContent = `Your opponents choice was ${computerSelection}`
	scoreDisplay.textContent = `Your score = ${playerScore} Computer's score 
	= ${computerScore}`
	resultDisplay.textContent = roundResult;
	return roundResult
	
  }
   const opponentsChoice = document.querySelector(".opponentsChoice")
  const scoreDisplay = document.querySelector(".score");
  const resultDisplay = document.querySelector(".result")

  const rockBtn = document.querySelector("#rockBtn");
  const paperBtn = document.querySelector("#paperBtn");
  const scissorsBtn = document.querySelector("#scissorsBtn");

let roundResult 
  rockBtn.addEventListener("click", function (e) {
	  roundResult = singleRound("rock", computerPlay()) 
	
	console.log(playerScore, computerScore)

	console.log(roundResult);
	
  });

  paperBtn.addEventListener("click", function (e) {
	  roundResult = singleRound("paper", computerPlay())
	  console.log(playerScore, computerScore)

    console.log(roundResult);
    
  });

  scissorsBtn.addEventListener("click", function (e) {
	roundResult = (singleRound("scissors", computerPlay()));
	  console.log(playerScore, computerScore)

    console.log(roundResult);

  });
function updateScore(){
  if (roundResult == "YEAAH YOU WON this round!") {
    playerScore = playerScore + 1;
  } else if (roundResult == "Oopsie! You lost this round ;(((") {
    computerScore = computerScore + 1;
  } else {
    computerScore = computerScore;
    playerScore = playerScore;
  }

if ((computerScore >= numberOfPoints) || (playerScore >= numberOfPoints)) {
	gameover = true
}
	
}}
  

  

game();
