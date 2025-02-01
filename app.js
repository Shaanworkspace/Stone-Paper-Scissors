let userScore = 0;
let OpponentScore = 0;

let choices = document.querySelectorAll(".choice");
let userScoreDisplay = document.querySelector("#user-score");
let computerScoreDisplay = document.querySelector("#Computer-score");
let resetButton = document.querySelector("#button1");
let wonButton = document.querySelector(".button2");
const selectorPopup = document.querySelector(".selector");



choices.forEach((choice)=>{   
    choice.addEventListener("click",()=>{
        const selected = choice.getAttribute("id");
        playGame(selected);
    })
});

const playGame = (selectedChoice) =>{
    wonButton.classList.add("hide");
    wonButton.classList.remove("red");
    wonButton.classList.remove("green");

    let choice = selectedChoice;

    let computerChoosed = randomGenerator();

    //condition of draw
    if(choice === computerChoosed){
        drawGame();
    }else{ //Else case as both will not be same 
        let userWins = true;
            if(choice === "rock"){
                userWins = (computerChoosed === "paper") ? (false):(true);
                showWinner(userWins);
            }
            else if(choice === "paper"){
                userWins = (computerChoosed === "scissors") ? (false):(true);
                showWinner(userWins);
            }
            else{
                userWins = (computerChoosed === "rock") ? (false):(true);
                showWinner(userWins);
            }       
    }
};


const randomGenerator = ()=>{
    const string = ["rock","paper","scissors"];
    let value = Math.floor(Math.random() * 3 );
    selectorPopup.innerHTML = 'Computer Selected : '+string[value];
    
    return string[value];
};

const drawGame=()=>{
    wonButton.classList.remove("hide");
    wonButton.innerHTML = "Match Draw";
};

const showWinner = (userWin) =>{
    wonButton.classList.remove("hide");
    if(userWin){
        userScore++;
        userScoreDisplay.innerHTML = userScore;
        wonButton.innerHTML = "You Won";        
        wonButton.classList.add("green");
    }
    else{
        OpponentScore++;
        computerScoreDisplay.innerHTML = OpponentScore;
        wonButton.innerHTML = "You Loss";        
        wonButton.classList.add("red");
    }
};


resetButton.addEventListener("click",()=>{
    wonButton.classList.add("hide");
    wonButton.classList.remove("red");
    wonButton.classList.remove("green");
    selectorPopup.innerHTML = "Let's Start The Game";
    userScore = 0;
    OpponentScore = 0;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = OpponentScore;
});

