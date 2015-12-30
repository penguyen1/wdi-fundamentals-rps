////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // If a `move` has a value, your expression should evaluate to that value
    // However, if `move` is not specified / is null, your expression should equal `getInput()`
    var move = move || getInput();
    return move;
}

function getComputerMove(move) {
    // If `move` has a value, your expression should evaluate to that value
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`
    var move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    // Write code that sets winner to: 'player', 'computer', or 'tie' based on the input values
    // Assume the only values playerMove & computerMove can have are: 'rock', 'paper', 'scissors'
    // The rules of the game: 'rock' beats 'scissors', 'scissors' beats 'paper', 'paper' beats 'rock'
    var winner;
    switch(playerMove) {
        case 'rock':
            winner = (computerMove == 'rock') ? 'tie' : (computerMove == 'paper' ? 'computer' : 'player');
            break;
        case 'paper':
            winner = (computerMove == 'paper') ? 'tie' : (computerMove == 'scissors' ? 'computer' : 'player');
            break;
        case 'scissors':
            winner = (computerMove == 'scissors') ? 'tie' : (computerMove == 'rock' ? 'computer' : 'player');
            break;
    }
    return winner;
}

function playToFive() {                 //allows us to play until either player or computer has won 5 times
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    
    // Write code that plays 'Rock, Paper, Scissors' until either player or computer has won five times
    while (playerWins < 5 && computerWins < 5){
        var player = getPlayerMove();               //user selects new move
        var computer = getComputerMove();           //computer selects new move
        var result = getWinner(player, computer);   //output: tie, computer, player
        
        console.log("\nPlayer throws " + player + " and Computer throws " + computer);          //who throws what
        var outcome = (result == 'tie') ? 'There is a tie!' : (result + " wins the match!");    
        console.log(outcome);                                                                   //who wins the match
        
        switch(result){
            case 'player':                  //player wins
                playerWins += 1;
                break;
            case 'computer':                //computer wins
                computerWins += 1;
                break;
            default:                        //tie occurs
        }
        console.log("Current score: Player-" + playerWins + "  Computer-" + computerWins);      //display current score
    }
    return [playerWins, computerWins];
}

/*
function playTo(x){                         //allows us to play until either player or computer has won x times
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    
    // Write code that plays 'Rock, Paper, Scissors' until either player or computer has won x times
    while (playerWins < x && computerWins < x){
        var player = getPlayerMove();               //user selects new move
        var computer = getComputerMove();           //computer selects new move
        var result = getWinner(player, computer);   //output: tie, computer, player
        
        console.log("\nPlayer throws " + player + " and Computer throws " + computer);          //who throws what
        var outcome = (result == 'tie') ? 'There is a tie!' : (result + " wins the match!");    
        console.log(outcome);                                                                   //who wins the match
        
        switch(result){
            case 'player':                  //player wins
                playerWins += 1;
                break;
            case 'computer':                //computer wins
                computerWins += 1;
                break;
            default:                        //tie occurs
        }
        console.log("Current score: Player-" + playerWins + "  Computer-" + computerWins);      //display current score
    }
    return [playerWins, computerWins];
}
*/