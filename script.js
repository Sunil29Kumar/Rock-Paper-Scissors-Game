const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const playerResult = document.querySelector("#playerScore");
const computerResult = document.querySelector("#computerScore");
const winner = document.querySelector(".win");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerRound(button.id, computerChoice());
    })
})


function computerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}


let playScore = 0;
let compScore = 0;
let win = 10;
function playerRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        result.innerHTML = ("it's a tie!");
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        playScore++;
        result.innerHTML = "you win!  " + playerSelection + "  beats " + computerSelection;
        playerResult.innerHTML = playScore;
    }
    else if(playerSelection==win){
        winner.innHTML = "🏆 you win 🏆";
    }
    else {
        compScore++;
        result.innerHTML = "you loose!  " + playerSelection + "  beats " + computerSelection;
        computerResult.innerHTML = compScore;
    }

}