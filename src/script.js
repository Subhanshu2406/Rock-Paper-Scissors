const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissors = document.querySelector(".scissors")

button_array = [buttonRock,buttonPaper,buttonScissors]

button_array.forEach(item => {
    item.addEventListener("click",(e) => {
        rounds++;
        if (rounds <= 5){
            playRound(e)
            if(rounds == 5){gameEnd()}
        }
    })
})

let humanScore = 0;
let computerScore = 0;
let humanChoice = ''
let rounds = 0


const humanScoreText = document.querySelector(".humanScoreClass")
const computerScoreText = document.querySelector(".computerScoreClass")
const resultText = document.querySelector(".result")


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

// function getHumanChoice() {
//     button_array.forEach(item => {
//         item.addEventListener("click",(e) => {
//             const humanChoice = e.target.className
//             return ;
//         })
//     })
// }

function playRound(e){
    let computerChoice = getComputerChoice();
    humanChoice = e.target.className
    

    if(humanChoice === computerChoice){return;}

    else if(humanChoice == "rock"){
        if(computerChoice=="scissors"){
            humanScore++;
            return displayScore();
        }
        else if(computerChoice=="paper"){
            computerScore++;
            return displayScore();
        }
    }

    else if(humanChoice == "paper"){
        if(computerChoice=="rock"){
            humanScore++;
            return displayScore();
        }
        else if(computerChoice=="scissors"){
            computerScore++;
            return displayScore();
        }
    }

    else if(humanChoice == "scissors"){
        if(computerChoice=="paper"){
            humanScore++;
            return displayScore();
        }
        else if(computerChoice=="rock"){
            computerScore++;
            return displayScore();
        }
    }
}

function displayScore(){
    humanScoreText.textContent = `Human Score is ${humanScore}`;
    computerScoreText.textContent = `Computer Score is ${computerScore}`;
}

function gameEnd(){

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









