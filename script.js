const computerChoice=["Rock", "Paper", "Scissors"];
let computerPlay;
let player;
let playerScore=0;
let computerScore=0;


/* function rules contains the rules of the game in the switch statement, 
and in the computerPlay variable is a function that makes a random choice from the computerChoice array. */
    //switch statemnet  contains the rules of the game and determines who wins the round, also it adds 1 score to the winner.
//for is a loop function that makes the game play until player or computer reaches 5 scores
/*let score =(computerScore || playerScore);
for (score=0; score<5; score++) {
    alert("Player: "+playerScore);
    alert("Computer : "+computerScore);
}
if (playerScore>computerScore) {
    alert("You Won the Game");
}
else if (computerScore>playerScore){
    alert("Computer Won Try Again");
}*/


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




