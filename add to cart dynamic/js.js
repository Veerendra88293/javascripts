let buttonElement = document.getElementById("add-button");
let paraElement = document.getElementById("para");
let count=0
buttonElement.onclick=function(){
    let listid=count+"idnumber"
    let input_user=document.getElementById("text-input")
    let input_value=input_user.value
   let list_new=document.createElement("li")
   list_new.id=listid
   list_new.textContent=input_value
   paraElement.appendChild(list_new)
   let delte=document.createElement("button")
   delte.textContent="deltelist"
   delte.onclick=function(){
 let listDelete=document.getElementById(listid)
   paraElement.removeChild(listDelete)
  }
  list_new.appendChild(delte)
   input_user.value=""
  count++
  console.log(count)
  
   }
  // let remove_button=document.getElementById("remove_")
//   remove_button.onclick=function(){
  
// }

// let myArray = ["bags","Bottel"];

// function createList() {
//     let List_ = document.getElementById("groceryList");
   
//     for(let element of myArray) {
//         let List_create = document.createElement("li");
//         List_create.textContent = element;
//         List_.appendChild(List_create);
//     }
// }
// createList();
