const userScore=0;
const compScore=0;
const userScoreSpan=document.getElementById("user-score");
const compScoreSpan=document.getElementById("comp-score");
const scoreBoardDiv=document.querySelector("score-board");
const resultDiv=document.querySelector("result");
const rockDiv=document.getElementById("r");
const  paperDiv=document.getElementById("p");
const scissorsDiv=document.getElementById("s");


function getComputerScore(){
    const choices=['r','p','q'];
    const randomNumber=Math.floor(Math.random()*3)
    


}
function Game(userChoice){
   
     console.log('you clicked me!'+ userChoice);
    
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

var x=Jayjay;
print(x)
