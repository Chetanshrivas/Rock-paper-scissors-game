let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const gencompChoice = () =>{
    const options = [ "Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() *3); 
    return options[randIdx];
}
const drawGame = ()=>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you win !.your ${ userChoice} beats ${ compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorepara.innerText = compscore;
        
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice= " ,userChoice);
    const compChoice = gencompChoice();
    console.log("comp choice= " , compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else{ 
        userWin = true;
        if (userChoice === Rock) {
            userWin = compChoice == "Paper" ? false : true ;
        }else if(userChoice === Paper){
            userWin = compChoice == "Scissors" ? false : true ;
        }else{
            userWin = compChoice == "Rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{ 
    const userChoice  = choice.getAttribute("id")    
    playGame(userChoice)
    });
});