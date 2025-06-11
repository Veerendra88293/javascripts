let todoitemscontainer =  document.getElementById('todoItemsContainer');

function get_item(){
  let raw=localStorage.getItem("desc")
  let parsed_data = JSON.parse(raw)
  if (parsed_data===null)
  {
    return []
  }
  else{
    return parsed_data
  }
}
let list_array = get_item()

let save_button=document.getElementById("save_")
 save_button.onclick=function(){
    let stringified_data  = JSON.stringify(list_array);
    localStorage.setItem("desc",stringified_data)
}






// delete function
function deletelist(listid){
  let list = document.getElementById(listid);
  todoitemscontainer.removeChild(list)
}

function labelStriker(checkBoxId,labelId){//to access a input_element we need a id soo...without id cant so id is sent as argument and labelid also
  let input_element = document.getElementById(checkBoxId)//again declared bcz let input_element is function scope cant access here soo accessed by ids
  let label_element = document.getElementById(labelId)//
  // console.log(input_element)
  // console.log(input_element.checked)
  // console.dir(input_element)
  if(input_element.checked === true){
    label_element.style.textDecoration = 'line-through'
  }
  else{
    label_element.style.textDecoration = 'none'
  }

}


function createToDoList(todo){
  let checkBoxId = "checkBoxId" + todo.id// id should be differnt for all,, so or else it will be checked if we checked other,, means if we check play football,it will be  checked play volleyball,
  let labelId = "label" + todo.id// id should be different soo
  let listid = 'listid' + todo.id

let list = document.createElement('li');
list.classList.add("todo-item-container","d-flex", "flex-row" );
list.id = listid
todoitemscontainer.appendChild(list)

let input_element = document.createElement('input');
input_element.type = 'checkbox';
input_element.classList.add('checkbox-input');
input_element.id = checkBoxId
list.appendChild(input_element)
input_element.onclick = function (){
  labelStriker(checkBoxId,labelId);// this here send as argument means input_element is send by id bcz cant access input_element there...

}

let label_container = document.createElement('div');
label_container.classList.add("d-flex", "flex-row", "label-container");
list.appendChild(label_container);

let label_element = document.createElement('label');
label_element.classList.add("checkbox-label");
label_element.htmlFor = checkBoxId;
// label_element.setAttribute('for','checkboxId');
label_element.textContent = todo.text;
label_element.id = labelId 
label_container.appendChild(label_element);

let deleteIconContainer = document.createElement('div');
deleteIconContainer.classList.add("delete-icon-container");
label_container.appendChild(deleteIconContainer);

let deleteButton =document.createElement('button');
deleteButton.classList.add("delete-icon");
deleteButton.textContent = 'Delete';
deleteButton.onclick = function (){
  deletelist(listid)
}
deleteIconContainer.appendChild(deleteButton);
}
for (let todo of list_array){
  createToDoList(todo);

}
let count = list_array.length;


let addbutton = document.getElementById('addbutton');
addbutton.onclick = function (){
  let userinput = document.getElementById("todoUserInput");
  let userinput_value = userinput.value;
  let todocount = count + 1;
  if (userinput_value === ''){
    alert('Enter what needs to be done');
    return;
  }
  let todolist = {
    text : userinput_value,
    id : todocount
  }
list_array.push(todolist)
    createToDoList(todolist)
}


// // for(let i = 0; i < list_array.length ; i++){
// //   createToDoList(list_array[i],i);
// // }