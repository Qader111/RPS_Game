function getComputerChoice(){
    let choices = ["Rock","Paper","Scissor"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    // rock > scissor   scissor > paper paper > Rock
    p_selection = playerSelection.toLowerCase();
    c_selection = computerSelection.toLowerCase();
    if (p_selection === 'rock' && c_selection === 'rock' || p_selection === 'paper' && c_selection === 'paper' || p_selection === 'scissor' && c_selection === 'scissor'  ){
        return 0; // 0
    }
    else if (p_selection === 'rock' && c_selection === 'scissor' || p_selection === 'paper' && c_selection === 'rock' ||  p_selection === 'scissor' && c_selection === 'paper'){
        return 1; // 1
    }
    else {
        return 2; // 2
    }

}

function Game(){
let player_score = 0;
let com_score = 0; 
while (true){
    if (com_score >= 3 ){
        console.log("COMPUTER WON by " + com_score + " to " + player_score);
        break;
    }
    else if (player_score >= 3){
        console.log("PLAYER WON by " + player_score + " to " + com_score);
        break;
    }
    else{
    let playerSelection = prompt("Please enter rock paper or scissor: ");
    const computerSelection = getComputerChoice();
    console.log(playerSelection + "   comp:" + computerSelection );
    while (true){
        if(playerSelection.toLowerCase()=== 'rock' || playerSelection.toLowerCase()=== 'paper' || playerSelection.toLowerCase()=== 'scissor'){
            break;
        }
        else{
            playerSelection = prompt("Please enter rock paper or scissor: ");
        }
    }
    if (playRound(playerSelection, computerSelection) == 0){
        console.log("No one won it is a tie");
    }
    else if (playRound(playerSelection, computerSelection) == 1){
        console.log("you won " + playerSelection + " beats " + computerSelection);
        player_score++;
        //console.log(player_score);
    }
    else if (playRound(playerSelection, computerSelection) == 2){
        console.log("you Lost " + computerSelection + " beats " + playerSelection);
        com_score++;
       // console.log(com_score);
    }
    else{
        console.log("Some error");
    }
}
}
}

Game();