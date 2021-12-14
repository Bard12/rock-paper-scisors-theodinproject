        //computerChoice is an array with 3 elements 
        const computerChoice=["Rock", "Paper", "Scissors"];

        let playerScore= 0;
        let computerScore= 0;

        //rules is a function that contains the rules of the game and determines who wins the round
        function rules() {

            //computerPlay variable Contains  a function that chooses randomly an element from the computerChoice array
            let computerPlay= computerChoice[Math.floor(Math.random()*computerChoice.length)];

            const playerChoice= prompt("Choose rock, paper, sccisors:", "");
            let player= playerChoice.toLowerCase();

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
        
        for ((computerScore=0) || (playerScore=0); (computerScore<=5) || (playerScore<=5) ; (computerScore++) || (playerScore++)) {
            rules();
        }
        console.log(computerScore, playerScore);
        


