let userScore = 0;
let compScore = 0;


const choice = document.querySelectorAll(".boxes");
const turnbtn =document.querySelector(".turnbtn")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame =()=>{
   turnbtn.innerText="Game was Draw, Play Again!";
   turnbtn.style.backgroundColor ="Grey"

}


const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
      userScore++
      userScorePara.innerText=userScore;
      turnbtn.innerText=`You Wins. Your ${userChoice} beats ${compChoice}`;
      turnbtn.style.backgroundColor ="chartreuse"
      
   }
   else{
      compScore++;
      compScorePara.innerText=compScore;
      turnbtn.innerText="You Lose";
      turnbtn.innerText=`You Wins. ${compChoice} beats your ${userChoice}`;
     turnbtn.style.backgroundColor ="Red"
   }
}
const playgame = (userChoice) => {
  console.log("user choice is ", userChoice);
  const compChoice =genCompChoice();
  console.log("Computer coice",compChoice);

  if(userChoice===compChoice){
   drawGame();
  }
  else{
   let userWin =true;
   if(userChoice==="Rock"){
      userWin = compChoice===" Paper"?false:true;
   }
   else if(userChoice==="Paper"){
      userWin = compChoice==="Scissor"?false:true;
   }
   else{
      userWin = compChoice==="Rock"?false:true;
   }
   showWinner(userWin,userChoice,compChoice);
  }
};

choice.forEach((box) => {
  box.addEventListener("click", () => {
    const userChoice = box.getAttribute("id");

    playgame(userChoice);
  });
});
