let userScore=0;
let compScore=0;
const userScoreSpan=document.getElementById("user-score");
const compScoreSpan=document.getElementById("comp-score");
const scoreBoardDiv=document.querySelector("score-board");
const result_p=document.querySelector(".result>p");
const rockDiv=document.getElementById("r");
const  paperDiv=document.getElementById("p");
const scissorsDiv=document.getElementById("s");

//computerChoice
function getComputerScore(){ 
    const choices=['r','p','s'];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];


}

function convert(key){
if(key=== "r")return "Rock";
if(key=== "p")return "Paper";
return "Scissors";
  


}


function win(userChoice, computerChoice){
  userScore++;
  console.log("win");
  compScoreSpan.innerHTML=compScore;
  userScoreSpan.innerHTML=userScore;
  result_p.innerHTML= convert(userChoice)+" " + "wins to " + " " + convert(computerChoice) +" !"+ "YOU WIN!";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(()=> document.getElementById(userChoice).classList.remove('green-glow') ,350);
}

function lose(userChoice,computerChoice){
  compScore++;
  
  compScoreSpan.innerHTML=compScore;
  userScoreSpan.innerHTML=userScore;
  result_p.innerHTML= convert(userChoice)+" " + "loses to " + " " + convert(computerChoice) +" !"+ "YOU LOSE!";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(()=> document.getElementById(userChoice).classList.remove('red-glow') ,350);
  

}

function draw(userChoice,computerChoice){
  
  compScoreSpan.innerHTML=compScore;
  userScoreSpan.innerHTML=userScore;
  result_p.innerHTML= convert(userChoice)+" " + convert(computerChoice) +" !"+ "Its a draw!";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')} ,350);

  
}

function Game(userChoice){
   const computerChoise=getComputerScore();
   console.log("user choice =>" + userChoice);
   console.log("computer choice =>"+ computerChoise);
   switch(userChoice+computerChoise){
     case "rs":
     case "pr":
     case "sp":
      win(userChoice,computerChoise);
      break;
      case "rp":
      case "ps":
      case "sr":
      lose(userChoice,computerChoise);
      break;
      case "rr":
      case "pp":
      case "ss":
      draw(userChoice,computerChoise);
      break;
   }
   

    
    
}

function main(){
    rockDiv.addEventListener('click',function () {
       Game("r");
    })
     paperDiv.addEventListener('click',function(){
      Game("p");
    })
     scissorsDiv.addEventListener('click',function(){
       Game("s");
     })

}
main();

