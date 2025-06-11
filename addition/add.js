let first=Math.random();
let conv_first=parseInt(first*100);

let second=Math.random();
let conv_second=parseInt(second*100);
let first_input=document.getElementById("firstNumber").textContent=conv_first;
let second_input=document.getElementById("secondNumber").textContent=conv_second;
mm=document.getElementById("userInput");

function checkvalue(){
    let total=parseInt(conv_first+conv_second);
    let user_value_=mm.value;
    let user_value=parseInt(user_value_);


    if (user_value==total){
        document.getElementById("gameResult").textContent="Correct";
        document.getElementById("gameResult").style.color="green";
        document.getElementById("gameResult").style.fontSize="20px";
        document.getElementById("gameResult").style.fontWeight="bold";
    }
    else {
        document.getElementById("gameResult").textContent="Incorrect";
        document.getElementById("gameResult").style.color="red";
        document.getElementById("gameResult").style.fontSize="20px";
        document.getElementById("gameResult").style.fontWeight="bold";
    }
}

function reset(){
     first=Math.random();
 conv_first=parseInt(first*100);

 second=Math.random();
 conv_second=parseInt(second*100);
first_input=document.getElementById("firstNumber").textContent=conv_first;
second_input=document.getElementById("secondNumber").textContent=conv_second;
mm=document.getElementById("userInput");
mm.value="";
}