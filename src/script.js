function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock Paper or Scissors");
    return choice;
}

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

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

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if(humanScore == computerScore){
        console.log("ITS A DRAW");
    }

    else if(humanScore > computerScore){
        console.log("YOU WIN");
    }

    else if(humanScore < computerScore){
        console.log("YOU LOSE");
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();


