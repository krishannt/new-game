let userScore = 0;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const  userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");



const genCompChoice =()=>{

    const option = ["rock","paper","scissors"];
    
   const randIdx = Math.floor(Math.random()*3)
   return option[randIdx];
}

const drawGame = ()=>{
    
    msg.innerText = "game was draw. play again!"
   
    msg.style.backgroundColor = "#081b31"
}


const showWinner =(userWin,userChoice,compChoice)=>{

    if(userWin){
        userScore++;
          userScorePara.innerText = userScore;
        msg.innerText =` You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = ` You lost! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGzme = (userChoice)=>{
    console.log("userChoice" ,userChoice)
    const compChoice = genCompChoice();
    console.log("compChoice" ,compChoice)

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper") {


            userWin = compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }

    showWinner(userWin,compChoice,userChoice)

}
}

choices.forEach((choice)=>{
    // console.log(choice)
choice.addEventListener("click",()=>{

    const userChoice = choice.getAttribute("id")
// console.log("clicked" ,userChoice)
playGzme(userChoice)



});
});