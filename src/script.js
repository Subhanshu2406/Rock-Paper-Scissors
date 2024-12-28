const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissors = document.querySelector(".scissors")

let humanScore = 0;
let computerScore = 0;


const humanScoreText = document.querySelector(".humanScoreClass")
const computerScoreText = document.querySelector(".computerScoreClass")
const resultText = document.querySelector(".result")

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice() {
    return new Promise(resolve => {
        buttonRock.addEventListener("click", () => resolve("Rock"));
        buttonPaper.addEventListener("click", () => resolve("Paper"));
        buttonScissors.addEventListener("click", () => resolve("Scissors"));
    });
}


async function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = await getHumanChoice();

    if(humanChoice === computerChoice){return;}

    else if(humanChoice == "rock"){
        if(computerChoice=="scissors"){
            humanScore++;
            return;
        }
        else if(computerChoice=="paper"){
            computerScore++;
            return;
        }
    }

    else if(humanChoice == "paper"){
        if(computerChoice=="rock"){
            humanScore++;
            return;
        }
        else if(computerChoice=="scissors"){
            computerScore++;
            return;
        }
    }

    else if(humanChoice == "scissors"){
        if(computerChoice=="paper"){
            humanScore++;
            return;
        }
        else if(computerChoice=="rock"){
            computerScore++;
            return;
        }
    }
}

function displayScore(){
    humanScoreText.textContent = `Human Score is ${humanScore}`;
    computerScoreText.textContent = `Computer Score is ${computerScore}`;
}

async function playGame(){

    for(let i = 0;i < 5;i++){
        await playRound();
        displayScore();
    }

    if(humanScore == computerScore){
        resultText.textContent = "ITS A DRAW"
    }

    else if(humanScore > computerScore){
        resultText.textContent = "YOU WIN GG"
    }

    else if(humanScore < computerScore){
        resultText.textContent = "COMPUTER WINS L"
    }
}

// let humanScore = 0;
// let computerScore = 0;


// const buttonRock = document.querySelector(".rock")
// const buttonPaper = document.querySelector(".paper")
// const buttonScissors = document.querySelector(".scissors")

// const humanScoreText = document.querySelector(".humanScoreClass")
// const computerScoreText = document.querySelector(".computerScoreClass")
// const resultText = document.querySelector(".result")

playGame();







