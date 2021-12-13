        //computerChoice is an array with 3 elements 
        const computerChoice=["Rock", "Paper", "Scissors"];
        //computerPlay variable Contains  a function that chooses randomly an element from the computerChoice array
        let computerPlay= computerChoice[Math.floor(Math.random()*computerChoice.length)];
        console.log(computerPlay);

        const playerChoice= prompt("Choose rock, paper, sccisors:", "");
        let player= playerChoice.toLowerCase();
        console.log(player);

        //rules is a function that contains the rules of the game and determines who wins the round
        function rules(comp, guest) {
            switch(true) {
                case (computerPlay==("Rock") && playerChoice==("scissors")):
                    alert("You Lose Rock beats Scissors");
                    break;
                case (computerPlay==("Scissors") && playerChoice==("paper")):
                    alert("You Lose Scissors beats Paper");
                    break;
                case (computerPlay==("Paper") && playerChoice==("rock")):
                    alert("You Lose Paper beats Rock");
                    break;
                case (computerPlay==("Scissors") && playerChoice==("rock")):
                    alert("You Win Rock beats Scissors");
                    break;
                case (computerPlay==("Paper") && playerChoice==("scissors")):
                    alert("You Win Scissors beats Paper");
                    break;
                case (computerPlay==("Rock") && playerChoice==("paper")):
                    alert("You Win Paper beats Rock");
                    break;
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