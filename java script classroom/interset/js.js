
function calculateTip(){
    let bill=document.getElementById("billAmount").value
    let perc=document.getElementById("percentageTip").value
    let tip=document.getElementById("tipAmount")
    let total=document.getElementById("totalAmount")
    // console.log(bill)
    // console.log(perc)
    
    // console.log(total)
    let bill_=parseInt(bill)
    let perc_=parseInt(perc)
    let result= parseInt(perc_/100*bill_)
    
    let total_=parseInt(result+bill_)
    tip.value=result
    total.value=total_
    console.log(typeof(total_))
    
    }
// var var1=Math.random();
// var result=var1*100;
// console.log(result);
// console.log()
// var v=Math.ceil(result)


// function checkGuess(){
//     var var2=document.getElementById("userInput").value
//     var var3=parseInt(var2)
    
//     var m=document.getElementById("gameResult")
//     if(v>var3){
//      document.getElementById("userInput").textContent("lesser")
//     }
// }
