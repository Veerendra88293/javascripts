function increment(){
    
   
    const numberParagraph = document.getElementById('number');
    
 
    let currentNumber = parseInt(numberParagraph.textContent);
   
  
    currentNumber++;
    if(currentNumber>0){
        document.getElementById("number").style.color="green";
    }
    else{
        document.getElementById("number").style.color="black";
    }
    
    
    
    numberParagraph.textContent = currentNumber;
}
function decrement(){
    const numberParagraph=document.getElementById("number");
    let currentNumber=parseInt(numberParagraph.textContent);
    currentNumber--;
    numberParagraph.textContent=currentNumber;
    if(currentNumber<0){
        document.getElementById("number").style.color="red";

    }
     else{
        document.getElementById("number").style.color="black";
    }

}

function reset_(){
    document.getElementById("number").textContent="0";
    document.getElementById("number").style.color="black";
}