// Game

let playerScore = 0;
let computerScore = 0;
let roundResult = "";
let round = 0;
const substringWin = "win";
const substringLose = "lose";

// UI 

const startOverbtn = document.getElementById("restart-game");
const resultsPara = document.getElementById("round-result");
const playerScorePara = document.getElementById("player-score")
const computerScorePara = document.getElementById("computer-score");
const roundNumberPara = document.getElementById("round-number");
const gameResult = document.getElementById("game-result");

playerScorePara.textContent = ("Player Score: " + playerScore);
computerScorePara.textContent = ("Computer Score: " + computerScore);



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
    if (round == 0) {
        playerScore = 0;
        computerScore = 0;
        gameResult.textContent = "";
    }
    if (playerSelection === "rock") {
        if(computerSelection === "Paper") {
            computerScore++;
            roundResult= "You Lose! Paper beats rock!";
        } else if(computerSelection === "Scissors") {
            playerScore++;
            roundResult = "You Win! Rock beats scissors!";
        } else {
            roundResult = "Tie! You both selected Rock";
        }
    } else if (playerSelection === "paper") {
        if(computerSelection === "Rock") {
            playerScore++;
            roundResult = "You Win! Paper beats rock!";
        } else if(computerSelection === "Scissors") {
            computerScore++;
            roundResult = "You Lose! Scissors beats paper!";
        } else {
            roundResult = "Tie! You both selected Paper!";
        }
    } else if (playerSelection === "scissors") {
        if(computerSelection === "Rock") {
            computerScore++;
            roundResult = "You lose! Rock beats Paper!";
        } else if (computerSelection === "Paper") {
            playerScore++;
            roundResult = "You win! Scissors beats paper!";
        } else {
            roundResult = "Tie! You both selected Scissors!";
        }
    }
    round++;

    // Check if game over
    if (playerScore === 5) {
        gameResult.textContent = "YOU WON THE GAME! NICE JOB!";
        restartGame();
        

    } else if (computerScore === 5) {
        gameResult.textContent = "YOU LOST THE GAME =(";
        restartGame();
    }

    
  


    resultsPara.textContent = roundResult;
    playerScorePara.textContent = ("Player Score: " + playerScore);
    computerScorePara.textContent = ("Computer Score: " + computerScore);
    roundNumberPara.textContent = ("Round " + round);

  }

  

//Player Choices 
// Rock
roundResult = document.getElementById("rock").addEventListener("click", () => playRound("rock", computerPlay()));
// Paper
roundResult = document.getElementById("paper").addEventListener("click", () => playRound("paper", computerPlay()));
// Scissors
roundResult = document.getElementById("scissors").addEventListener("click", () => playRound("scissors", computerPlay()));
// Reset Game 
startOverbtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    roundResult = "Results will be shown after game begins.";
    round = 0;
    resultsPara.textContent = roundResult;
    playerScorePara.textContent = ("Player Score: " + playerScore);
    computerScorePara.textContent = ("Computer Score: " + computerScore);
    roundNumberPara.textContent = "Make a selection to begin round."
})

function restartGame() {
    roundResult = "Results will be shown after game begins.";
    round = 0;
    resultsPara.textContent = roundResult;
    playerScorePara.textContent = ("Player Score: " + playerScore);
    computerScorePara.textContent = ("Computer Score: " + computerScore);
    roundNumberPara.textContent = "Make a selection to begin round."
    
    
}









  





