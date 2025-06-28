let details_new = localStorage.getItem("newdata");
console.log(details_new);
let input_span=document.getElementById("textinput");
input_span.innerHTML=details_new;