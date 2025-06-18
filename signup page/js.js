let sign_input=document.getElementById("new-username")
let sign_pass=document.getElementById("new-password")
const form = document.getElementById("form2");
const form_login = document.getElementById("form1");
const error__=document.getElementById("errortext")
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
// Retrieve existing users array from localStorage or initialize a new array
let users = JSON.parse(localStorage.getItem("users")) || [];
// Create new user object
let details = {
    name: username,
    password: password
};
// Add new user to the array
users.push(details);
// Save updated array back to localStorage
localStorage.setItem("users", JSON.stringify(users));
console.log('Username:', username);
console.log(details);


});

let details_new = localStorage.getItem("users");
console.log(details_new);
let parsed_data = JSON.parse(details_new);
console.log(parsed_data);

// Example: Loop through all users and log their names and passwords
let str4 = "";
for (let i = 0; i < parsed_data.length; i++) {
    str4 += "name: " + parsed_data[i].name + ", password: " + parsed_data[i].password + "\n";
}
console.log(str4);

function goto(){
        const anchor = document.getElementById("linkk");
    anchor.href ="home.html";
    anchor.click();
    }
function error_(){
error__.innerText="NO MATCH";
}

form_login.addEventListener("submit",function(e){
     e.preventDefault();
     let login_input=document.getElementById("username").value
let login_pass=document.getElementById("password").value
let login_details = {
    name: login_input,
    password:login_pass
}
const str1 = JSON.stringify(login_details);
let found = false;
for (let i = 0; i < parsed_data.length; i++) {
    if (
        parsed_data[i].name === login_details.name &&
        parsed_data[i].password === login_details.password) {
        found = true;
        goto();
        break;
    }
}
if (!found) {
    error_();
}




})





