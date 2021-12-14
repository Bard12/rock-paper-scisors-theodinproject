        //computerChoice is an array with 3 elements 
        const computerChoice=["Rock", "Paper", "Scissors"];
        let playerScore= 0;
        let computerScore= 0;

        /* function rules contains the rules of the game in the switch statement, 
        and in the computerPlay variable is a function that makes a random choice from the computerChoice array. */
        function rules() {
            let computerPlay= computerChoice[Math.floor(Math.random()*computerChoice.length)];
            const playerChoice= prompt("Choose rock, paper, sccisors:", "");
            let player= playerChoice.toLowerCase();
            //switch statemnet  contains the rules of the game and determines who wins the round, also it adds 1 score to the winner.
            switch(true) {
                case (computerPlay==("Rock") && player==("scissors")):
                    alert("You Lose Rock beats Scissors");
                    computerScore++;
                    break;
                case (computerPlay==("Scissors") && player==("paper")):
                    alert("You Lose Scissors beats Paper ");
                    computerScore++;
                    break;
                case (computerPlay==("Paper") && player==("rock")):
                    alert("You Lose Paper beats Rock");
                    computerScore++;
                    break;
                case (computerPlay==("Scissors") && player==("rock")):
                    alert("You Win Rock beats Scissors");
                    playerScore++;
                    break;
                case (computerPlay==("Paper") && player==("scissors")):
                    alert("You Win Scissors beats Paper");
                    playerScore++;
                    break;
                case (computerPlay==("Rock") && player==("paper")):
                    alert("You Win Paper beats Rock");
                    playerScore++;                   
                    break;
                case (computerPlay.toLowerCase()===player):
                    alert("Draw ");
                    break;
                default:
                    alert("Invalid input");
            }
        }
        //for is a loop function that makes the game play until player or computer reaches 5 scores
        let score =(computerScore || playerScore);
        for (score=0; score<=5; score++) {
            rules();
            alert("Player: "+playerScore);
            alert("Computer : "+computerScore);
        }
        if (playerScore>computerScore) {
            alert("You Won the Game");
        }
        else {
            alert("Computer Won Try Again");
        }
        


