        //computerChoice is an array with 3 elements 
        const computerChoice=["Rock", "Paper", "Scissors"];
        //computerPlay variable Contains  a function that chooses randomly an element from the computerChoice array
        let computerPlay= computerChoice[Math.floor(Math.random()*computerChoice.length)];
        console.log(computerPlay);

        const playerChoice= prompt("Choose rock, paper, sccisors:", "");
        let player= playerChoice.toLowerCase();
        console.log(player);
        let playerScore= 0;
        let computerScore= 0;

        //rules is a function that contains the rules of the game and determines who wins the round
        function rules(comp, guest) {
            switch(true) {
                case (computerPlay==("Rock") && playerChoice==("scissors")):
                    alert("You Lose Rock beats Scissors");
                    break;
                case (computerPlay==("Scissors") && playerChoice==("paper")):
                    alert("You Lose Scissors beats Paper ");
                    break;
                case (computerPlay==("Paper") && playerChoice==("rock")):
                    alert("You Lose Paper beats Rock");
                    break;
                case (computerPlay==("Scissors") && playerChoice==("rock")):
                    alert("You Win Rock beats Scissors");
                    break;
                case (computerPlay==("Paper") && playerChoice==("scissors")):
                    alert("You Win Scissors beats Paper");;
                    break;
                case (computerPlay==("Rock") && playerChoice==("paper")):
                    alert("You Win Paper beats Rock");
;                    break;
                case (computerPlay==("Rock") && playerChoice==("rock")):
                    alert("It's Draw ");
                    break;
                case (computerPlay==("Paper") && playerChoice==("paper")):
                    alert("It's a Draw");
                    break;
                case (computerPlay==("Scissors") && playerChoice==("scissors")):
                    alert("It's a Draw");
                    break;
                default:
                    alert("Invalid input");
            }
        }    
        rules(computerPlay, playerChoice);
        alert(playerScore, computerScore)

        //game is a function that includes the rules function and it makes the game play 5 rounds 
        function game(rules) {
            if (playerScore<3 || computerScore<3) {
                return(rules);
            }           
            else if (computerScore>=3) {
                return(alert("Try Again"));
            }
            else if (playerScore>=3) {
                return(alert("You Won", "Player Score: "+playerScore, "Computer Score: "+computerScore))
            }
        }