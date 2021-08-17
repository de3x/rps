
function computerPlay() {
    let choices = [
        "Rock",
        "Paper", 
        "Scissors"
    ];
    let randomSelection = choices[Math.floor(Math.random()*choices.length)];
    return randomSelection;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "Paper") {
            return "You Lose! Paper beats rock!";
        } else if(computerSelection === "Scissors") {
            return "You Win! Rock beats scissors!";
        } else {
            return "Tie! You both selected Rock";
        }
    } else if (playerSelection === "paper") {
        if(computerSelection === "Rock") {
            return "You Win! Paper beats rock!";
        } else if(computerSelection === "Scissors") {
            return "You Lose! Scissors beats paper!";
        } else {
            return "Tie! You both selected Paper!";
        }
    } else if (playerSelection === "scissors") {
        if(computerSelection === "Rock") {
            return "You lose! Rock beats Paper!";
        } else if (computerSelection === "Paper") {
            return "You win! Scissors beats paper!";
        } else {
            return "Tie! You both selected Scissors!";
        }
    }
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const substringWin = "win";
    const substringLose = "lose";


    for (let round = 1; round < 20; round++) {
        let playerSelection = window.prompt("Enter your choice (Rock, Paper, or Scissors).").toLowerCase();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if(roundResult.toLowerCase().includes(substringWin)) {
            playerScore++;
        } else if (roundResult.toLowerCase().includes(substringLose)) {
            computerScore++;
        }
        console.log(`Round ${round} results: ${roundResult}`)
        console.log(`Player Score: ${playerScore} , Computer Score: ${computerScore}`)

    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You Win!")
    } else if(computerScore > playerScore) {
        console.log("Too bad! You Lose!")
    } else {
        console.log("Tie game!")
    }

}

game();



  







