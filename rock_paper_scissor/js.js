let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msgk=document.querySelector("#msg")

const genbycomp=()=>{
    const options=["rock","paper","scissors"];
    const randinx=Math.floor(Math.random()*3);
    return options[randinx]

}
const drawgame=()=>{
    console.log("game is draw")
    msgk.innerText="draw"
}
const showwinner=(userwin,userInput,comp_value)=>{
    if(userwin){
        msgk.innerText=`youwin ${userInput} beats ${comp_value}`
        msgk.style.backgroundColor="green"
    }else{
        msgk.innerText=`youlose ${userInput} not beats ${comp_value}`
        msgk.style.backgroundColor="red"
    }
}
const playgame=(userInput)=>{
    console.log("user",userInput)
    const comp_value=genbycomp()
    console.log("comp",comp_value)
    if(userInput===comp_value){
        drawgame()
    }
    else{
        userwin=true;
        if(userInput==="rock"){
            userwin=comp_value==="paper"?false:true;
        }else if (userInput==="paper"){
            userwin=comp_value==="scissors"?false:true;
        }else{
            userwin=comp_value==="rock"?false:true;

        }
        showwinner(userwin,userInput,comp_value)
    }

}


choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userInput=choice.getAttribute("id")
        
        playgame(userInput)
    });

});