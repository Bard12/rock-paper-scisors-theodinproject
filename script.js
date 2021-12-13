        //computerChoice is a array with 3 elements 
        const computerChoice=["Rock", "Paper", "Scissors"];
        //computerPlay variable Contains  a function that chooses randomly an element from the computerChoice array
        let computerPlay= computerChoice[Math.floor(Math.random()*computerChoice.length)];
        console.log(computerPlay);

        const playerChoice= prompt("Choose rock, paper, sccisors:", "");
        let player= playerChoice.toLowerCase();
        console.log(player);

        //rules is a function that contains the rules of the game
        function rules(comp, guest) {
            // The if  statement contains the rules  when computer wins 
            if ((computerPlay==("Rock") &&  player==("scissors")) ||
            (computerPlay==("Paper") && player==("rock")) ||
            (computerPlay==("Scissors") && player==("paper"))) {
                 alert("Computer Won");     
            }  
            // The else if statement contains the rules when player wins 
            else if ((computerPlay==("Scissors") &&  player==("rock")) ||
            (computerPlay==("Rock") && player==("paper")) ||
            (computerPlay==("Paper") && player==("scissors"))) {
                 alert("You Won"); 
            } else {
                alert("It's a draw")
            }
        }   
        rules(computerPlay, playerChoice);