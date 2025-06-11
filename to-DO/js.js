// var1=document.createElement("button")
// var1.textContent="hi"
// document.body.append(var1)

// let var1=document.createElement('input')
// var1.type="checkbox"
// var1.id="mm"
// document.getElementById("todoItemsContainer").append(var1)

// let var2=document.createElement('label')
// var2.textContent="male"
// var2.htmlFor="mm"
// document.getElementById("todoItemsContainer").append(var2)

// document.getElementById('mm').setAttribute("src","js.js")

// var1=document.createElement("img")
// var1.setAttribute("src","https://i5.walmartimages.com/asr/d5a07031-c3f5-4006-a8fe-c4caa767f26d.3af1c39825906baaa1ff2dca1122bc6d.jpeg")
// document.getElementById("todoItemsContainer").append(var1)


// var1=document.getElementById("ul_id")
// let li_item=document.createElement("li");
// li_item.textContent="hiiii"



// var1.appendChild(li_item);

// let para1=document.getElementById("p_id")
// let li_item=document.createElement("li");
// li_item.classList.add("todo-items-container", "d-flex", "flex-row");
// li_item.id="todoItemsContainer";
// para1.appendChild(li_item)

//  let checkbox_create=document.createElement("input")
//  checkbox_create.type="checkbox"
//  checkbox_create.id="checkboxId"
//  checkbox_create.classList.add("checkbox-input")
//  para1.appendChild(checkbox_create)

//  let div_create=document.createElement("div")
//  div_create.classList.add("label-container")
//  para1.appendChild(div_create)


// let label_create=document.createElement("label")
// label_create.setAttribute("for","checkboxId")
// label_create.classList.add("checkbox-label")
// label_create.textContent="football"
// div_create.appendChild(label_create)

// let button_create=document.createElement("button")
// button_create.classList.add("delete-icon")
// button_create.textContent="delete"
// para1.appendChild(button_create)
let para1=document.getElementById("p_id")
// let checkbox=document.getElementById(checkboxIdd)
// let obj_array = getitem()


let save_button=document.getElementById("savebtn")
save_button.onclick=function(){
    let stringified_data  = JSON.stringify(obj_array);
    localStorage.setItem("new_valuess",stringified_data)
}
function getitem(){
  let values_get=localStorage.getItem("new_valuess")
  // Remove or comment out debug logs for production
  // console.log(values_get)
  let parsed_data_ = JSON.parse(values_get)
  // console.log(parsed_data_)
  if (parsed_data_===null)
  {
    return []
  }
  else{
    return parsed_data_
  }
}

// Render saved todos on page load
for (let items of obj_array) {
    createTodo(items);
}


function labelstriker(checkboxIdd,labelId){
let inputEle=document.getElementById(checkboxIdd)
let labelEle=document.getElementById(labelId)
if (inputEle.checked===true){
    labelEle.classList.add("label_striker")
}else{
    labelEle.classList.remove("label_striker")
}

}

function onDeleteTodo(todo_itemss,id) {
  let todoElement = document.getElementById(todo_itemss);
  // todoItemsContainer.removeChild(litodoElement);
  para1.removeChild(todoElement)

  let deleteElementIndex = obj_array.findIndex(function(eachTodo) {
    // let eachTodoId = "todoItemsContainer" + eachTodo.id;
    if (eachTodo.id=== id) {
      return true;
    } else {
      return false;
    }
  });
  obj_array.splice(deleteElementIndex,1);
}
// console.log(obj[0].text)
function createTodo(items){
    let checkboxIdd="checkboxId"+items.id
    let labelId="label"+items.id
    let removeId="remove"+items.id
    let todo_itemss="todoItemsContainer"+items.id

para1.classList.add("d-flex","flex-column")
let li_item=document.createElement("li");
li_item.classList.add("todo-items-container",removeId);
li_item.id=todo_itemss;



para1.appendChild(li_item)
let break_=document.createElement("br");
li_item.before(break_)

 let checkbox_create=document.createElement("input")
 checkbox_create.type="checkbox"
 checkbox_create.id=checkboxIdd
 checkbox_create.classList.add("checkbox-input",)
 checkbox_create.onclick=function(){
    labelstriker(checkboxIdd,labelId)

 }
 li_item.appendChild(checkbox_create)
 varr=checkbox_create
 console.log(varr.checked)

 let div_create=document.createElement("div")
 div_create.classList.add("label-container")
 li_item.appendChild(div_create)


let label_create=document.createElement("label")
label_create.setAttribute("for",checkboxIdd)
label_create.classList.add("checkbox-label")

label_create.textContent=items.text



label_create.id=labelId
div_create.appendChild(label_create)

let button_create=document.createElement("button")
button_create.classList.add("delete-icon")
button_create.textContent="delete"
button_create.onclick=function(){
 onDeleteTodo(todo_itemss,items.id);
}
li_item.appendChild(button_create)

}
// var web_input=document.getElementById("todoUserInput")



// for (let todo of obj_array){
//   createToDoList(todo);

// }
let count = 0
let addbutton = document.getElementById('addbutton');
addbutton.onclick = function (){
    let userinput = document.getElementById("todoUserInput");
    let userinput_value = userinput.value;
    count++
    let todocount = count + 1;
  console.log(todocount)
  if (userinput_value === ''){
    alert('Enter what needs to be done');
    return;
  }
   let todolist = {
    text : userinput_value,
    id : todocount
  }
obj_array.push(todolist)
    createTodo(todolist)
}












// function labelstriker(checkboxIdd,labelId){
// let inputEle=document.getElementById(checkboxIdd)
// let labelEle=document.getElementById(labelId)
// if (inputEle.checked===true){
//     labelEle.classList.add("label_striker")
// }else{
//     labelEle.classList.remove("label_striker")
// }

// }

// // console.log(obj[0].text)
// function createTodo(items){
//     let checkboxIdd="checkboxId"+items.id
//     let labelId="label"+items.id
//     let removeId="remove"+items.id
//     let todo_itemss="todoItemsContainer"+items.id
// let para1=document.getElementById("p_id")
// para1.classList.add("d-flex","flex-row")
// let li_item=document.createElement("li");
// li_item.classList.add("todo-items-container",removeId);
// li_item.id=todo_itemss;



// para1.appendChild(li_item)
// let break_=document.createElement("br");
// li_item.before(break_)

//  let checkbox_create=document.createElement("input")
//  checkbox_create.type="checkbox"
//  checkbox_create.id=checkboxIdd
//  checkbox_create.classList.add("checkbox-input",)
//  checkbox_create.onclick=function(){
//     labelstriker(checkboxIdd,labelId)
//  }
//  li_item.appendChild(checkbox_create)
//  varr=checkbox_create
//  console.log(varr.checked)

//  let div_create=document.createElement("div")
//  div_create.classList.add("label-container")
//  li_item.appendChild(div_create)


// let label_create=document.createElement("label")
// label_create.setAttribute("for",checkboxIdd)
// label_create.classList.add("checkbox-label")

// label_create.textContent=items.text



// label_create.id=labelId
// div_create.appendChild(label_create)

// let button_create=document.createElement("button")
// button_create.classList.add("delete-icon")
// button_create.textContent="delete"
// button_create.onclick=()=>{
// let inputdle=document.getElementById(todo_itemss)
// para1.removeChild(inputdle);

// }
// li_item.appendChild(button_create)

// }
// var web_input=document.getElementById("todoUserInput")


// let obj_array=[
//     {
//         text:"football",
//         id:1
//     },
//     {
//          text:"cricket",
//          id:2
//     },
//     {
//          text:"golf",
//          id:3
//     }
    
// ]
// for (let items of obj_array){
// createTodo(items)}

// let todoItemsContainer = document.getElementById("todoItemsContainer");
// let addTodoButton = document.getElementById("addTodoButton");
// let saveTodoButton = document.getElementById("saveTodoButton");

// function getTodoListFromLocalStorage() {
//   let stringifiedTodoList = localStorage.getItem("todoList");
//   let parsedTodoList = JSON.parse(stringifiedTodoList);
//   if (parsedTodoList === null) {
//     return [];
//   } else {
//     return parsedTodoList;
//   }
// }

// let todoList = getTodoListFromLocalStorage();
// let todosCount = todoList.length;

// saveTodoButton.onclick = function() {
//   localStorage.setItem("todoList", JSON.stringify(todoList));
// };

// function onAddTodo() {
//   let userInputElement = document.getElementById("todoUserInput");
//   let userInputValue = userInputElement.value;

//   if (userInputValue === "") {
//     alert("Enter Valid Text");
//     return;
//   }

//   todosCount = todosCount + 1;

//   let newTodo = {
//     text: userInputValue,
//     uniqueNo: todosCount,
//     isChecked: false
//   };
//   todoList.push(newTodo);
//   createAndAppendTodo(newTodo);
//   userInputElement.value = "";
// }

// addTodoButton.onclick = function() {
//   onAddTodo();
// };

// function onTodoStatusChange(checkboxId, labelId, todoId) {
//   let checkboxElement = document.getElementById(checkboxId);
//   let labelElement = document.getElementById(labelId);
//   labelElement.classList.toggle("checked");

//   let todoObjectIndex = todoList.findIndex(function(eachTodo) {
//     let eachTodoId = "todo" + eachTodo.uniqueNo;

//     if (eachTodoId === todoId) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   let todoObject = todoList[todoObjectIndex];

//   if(todoObject.isChecked === true){
//     todoObject.isChecked = false;
//   } else {
//     todoObject.isChecked = true;
//   }

// }

// function onDeleteTodo(todoId) {
//   let todoElement = document.getElementById(todoId);
//   todoItemsContainer.removeChild(todoElement);

//   let deleteElementIndex = todoList.findIndex(function(eachTodo) {
//     let eachTodoId = "todo" + eachTodo.uniqueNo;
//     if (eachTodoId === todoId) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   todoList.splice(deleteElementIndex, 1);
// }

// function createAndAppendTodo(todo) {
//   let todoId = "todo" + todo.uniqueNo;
//   let checkboxId = "checkbox" + todo.uniqueNo;
//   let labelId = "label" + todo.uniqueNo;

//   let todoElement = document.createElement("li");
//   todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
//   todoElement.id = todoId;
//   todoItemsContainer.appendChild(todoElement);

//   let inputElement = document.createElement("input");
//   inputElement.type = "checkbox";
//   inputElement.id = checkboxId;
//   inputElement.checked = todo.isChecked;

//   inputElement.onclick = function () {
//     onTodoStatusChange(checkboxId, labelId, todoId);
//   };

//   inputElement.classList.add("checkbox-input");
//   todoElement.appendChild(inputElement);

//   let labelContainer = document.createElement("div");
//   labelContainer.classList.add("label-container", "d-flex", "flex-row");
//   todoElement.appendChild(labelContainer);

//   let labelElement = document.createElement("label");
//   labelElement.setAttribute("for", checkboxId);
//   labelElement.id = labelId;
//   labelElement.classList.add("checkbox-label");
//   labelElement.textContent = todo.text;
//   if (todo.isChecked === true) {
//     labelElement.classList.add("checked");
//   }
//   labelContainer.appendChild(labelElement);

//   let deleteIconContainer = document.createElement("div");
//   deleteIconContainer.classList.add("delete-icon-container");
//   labelContainer.appendChild(deleteIconContainer);

//   let deleteIcon = document.createElement("i");
//   deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

//   deleteIcon.onclick = function () {
//     onDeleteTodo(todoId);
//   };

//   deleteIconContainer.appendChild(deleteIcon);
// }

// for (let todo of todoList) {
//   createAndAppendTodo(todo);
// }






































// createTodo(items)

// for (let i of Obj){
//     createTodo(i)
// }
// createTodo(obj)



// let buttonElement = document.getElementById("add-id");
// let paraElement = document.getElementById("todoUserInput");
// buttonElement.onclick=function(){
    
//     let input_user=document.getElementById("todoUserInput")
//     let input_value=input_user.value
//    let list_new=document.createElement("li")
//    list_new.textContent=input_value
// //    paraElement.appendChild(list_new)
//     li_item.appendChild(list_new)
//    input_user.value=""

//   let remove_button=document.getElementById("remove_")
//   remove_button.onclick=function(){
//    list_new.remove()
//   }
// }














