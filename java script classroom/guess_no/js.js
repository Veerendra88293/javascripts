let random_number=Math.random()*100;
let conv_random=Math.ceil(random_number);
console.log(conv_random)
let input_number=document.getElementById("userInput")

function checkGuess(){
    rr=input_number.value
    let int_random=parseInt(conv_random);
    
    rr=input_number.value;
    let int_conv=parseInt(rr)
    console.log(int_random)
    console.log(int_conv)
    if(int_random>int_conv){
        // let result1=document.getElementById("gameResult");
        // let r1=result1.textContent="lesser";
        document.getElementById("gameResult").textContent="lesser";

    }
    else if(int_random<int_conv){
            document.getElementById("gameResult").textContent="bigger";

    }
    else{
document.getElementById("gameResult").textContent="congrats";
document.getElementById("gameResult").style.color="green"
    }

}