const computerChoice=["Rock", "Paper", "Scissors"];
let computerPlay;
let player;
let playerScore=0;
let computerScore=0;


const btn= document.querySelectorAll(".btn");
btn.forEach(button => button.addEventListener("click", ()=> {
    let player= button.textContent;
    let computerPlay= computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log(player, computerPlay);
    const round= document.querySelector(".round");
    const playerCh= document.querySelector(".playerCh");
    playerCh.textContent= player;
    const computerCh= document.querySelector(".computerCh");
    computerCh.textContent= computerPlay ;
    if(playerScore+computerScore<5){
        switch(true) {
            case (computerPlay==("Rock") && player==("Scissors")):
                round.textContent= "You Lose Rock beats Scissors";
                computerScore++;
                break;
            case (computerPlay==("Scissors") && player==("Paper")):
                round.textContent="You Lose Scissors beats Paper ";
                computerScore++;
                break;
            case (computerPlay==("Paper") && player==("Rock")):
                round.textContent="You Lose Paper beats Rock";
                computerScore++;
                break;
            case (computerPlay==("Scissors") && player==("Rock")):
                round.textContent= "You Win Rock beats Scissors"
                playerScore++;
                break;
            case (computerPlay==("Paper") && player==("Scissors")):
                round.textContent= "You Win Scissors beats Paper";
                playerScore++;
                break;
            case (computerPlay==("Rock") && player==("Paper")):
                round.textContent= "You Win Paper beats Rock";
                playerScore++;                  
                break;
            case (computerPlay===player):
                round.textContent= "Draw ";
                break;
        }
        const score= document.querySelector(".score");
        score.textContent= `Player ${playerScore} - ${computerScore} Computer`;
    }
    else if(computerScore>playerScore) {
        round.textContent= "Computer Won Try Again";
        btn.forEach(button=> button.disabled= true);
    }
    else {
        round.textContent= "You Win";
        btn.forEach(button=> button.disabled= true);
    }

}))




