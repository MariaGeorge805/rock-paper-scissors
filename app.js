let userScore = 0;
let compScore = 0;
let us=document.querySelector("#user-score");
let cp=document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice = () =>{
    const Options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return Options[randIdx];
};

const drawGame=()=>{
 console.log("Draw Game");
 msg.innerText = "Game was Draw. Play again.";
 msg.style.backgroundColor ="#081b31";
};
const ShowWinner=(userWin)=>{
    if(userWin){
        userScore++;
        us.innerText=userScore;
        msg.innerText = "You Win !!!";
        msg.style.backgroundColor ="green";}
       
        else{
            compScore++;
        cp.innerText=compScore;
         msg.style.backgroundColor ="red";
         msg.innerText = "You lose T_T";

        }
};
const playGame=(userChoice)=>{
 console.log("user choice=",userChoice);
const CompChoice= genCompChoice();
console.log("comp choice=", CompChoice);

if(userChoice=== CompChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=CompChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=CompChoice==="scissors"?false:true;
        
    }
    else{
        userWin=CompChoice==="rock"?false:true;
    }
    ShowWinner(userWin);
}
};



choices.forEach((choice) => {

  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    
   // console.log("choice was clicked",userChoice);
    playGame(userChoice);
  });
});